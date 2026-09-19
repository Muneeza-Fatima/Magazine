import type { NextRequest } from "next/server";
import puppeteer, { type Browser } from "puppeteer-core";

export const maxDuration = 60;

/* No `runtime` export: 'nodejs' is the default in Next 16 and the Edge
   Runtime is deprecated. Route Handlers are uncached by default. */

/* A4 at 96dpi. Pinning the viewport matters: Cover.module.css sizes the
   headline with clamp(54px, 7vw, 100px), so an unpinned viewport renders
   the cover title at the wrong size. */
const A4_WIDTH_PX = 794;
const A4_HEIGHT_PX = 1123;
const FILE_NAME = "bh-ventures-magazine.pdf";

function resolveOrigin(request: NextRequest): string {
  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");

  if (!host) return request.nextUrl.origin;

  const proto =
    request.headers.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");

  return `${proto}://${host}`;
}

async function launchBrowser(): Promise<Browser> {
  const serverless = Boolean(
    process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME,
  );

  if (serverless) {
    const chromium = (await import("@sparticuz/chromium-min")).default;
    const pack = process.env.CHROMIUM_PACK_URL;

    if (!pack) throw new Error("CHROMIUM_PACK_URL is not configured");

    return puppeteer.launch({
      args: [...chromium.args, "--font-render-hinting=none"],
      executablePath: await chromium.executablePath(pack),
      headless: true,
      defaultViewport: { width: A4_WIDTH_PX, height: A4_HEIGHT_PX },
    });
  }

  const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH;

  return puppeteer.launch({
    headless: true,
    channel: executablePath ? undefined : "chrome",
    executablePath,
    defaultViewport: { width: A4_WIDTH_PX, height: A4_HEIGHT_PX },
  });
}

export async function GET(request: NextRequest) {
  let browser: Browser | undefined;

  try {
    browser = await launchBrowser();

    const page = await browser.newPage();
    await page.setViewport({ width: A4_WIDTH_PX, height: A4_HEIGHT_PX });

    /* Renders the magazine itself, never this route — no recursion. */
    await page.goto(resolveOrigin(request), {
      waitUntil: "networkidle0",
      timeout: 45_000,
    });

    await page.emulateMediaType("print");
    await page.evaluate(() => document.fonts.ready);

    /* The toolbar is already .noPrint; this also strips the Next
       dev-tools overlay from dev-mode PDFs. */
    await page.addStyleTag({
      content: ".noPrint, nextjs-portal { display: none !important; }",
    });

    const pdf = await page.pdf({
      printBackground: true,
      preferCSSPageSize: true,
      displayHeaderFooter: false,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
      timeout: 60_000,
    });

    const body = new Uint8Array(pdf);

    return new Response(body, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${FILE_NAME}"`,
        "Content-Length": String(body.byteLength),
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("[api/pdf]", error);
    return Response.json({ error: "PDF generation failed" }, { status: 500 });
  } finally {
    await browser?.close();
  }
}
