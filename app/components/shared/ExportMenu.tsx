"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Download, FileDown, Printer } from "lucide-react";

import styles from "./ExportMenu.module.css";

interface ExportMenuProps {
  endpoint?: string;
  fileName?: string;
  label?: string;
}

const ITEM_COUNT = 2;

export default function ExportMenu({
  endpoint = "/api/pdf",
  fileName = "bh-ventures-magazine.pdf",
  label = "Export / Print PDF",
}: ExportMenuProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [busy, setBusy] = useState(false);
  const [errored, setErrored] = useState(false);

  const menuId = useId();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const objectUrlRef = useRef<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const closeMenu = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) triggerRef.current?.focus();
  }, []);

  const openMenu = useCallback((index: number) => {
    setActiveIndex(index);
    setOpen(true);
  }, []);

  /* Roving focus: every activeIndex change moves DOM focus. */
  useEffect(() => {
    if (!open) return;
    itemRefs.current[activeIndex]?.focus();
  }, [open, activeIndex]);

  /* Dismiss on outside pointer press or Escape. */
  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.stopPropagation();
        closeMenu(true);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeMenu]);

  /* Release the last object URL and any in-flight request on unmount. */
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  function handleTriggerKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      openMenu(0);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      openMenu(ITEM_COUNT - 1);
    }
  }

  function handleItemKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((index) => (index + 1) % ITEM_COUNT);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((index) => (index - 1 + ITEM_COUNT) % ITEM_COUNT);
    } else if (event.key === "Home") {
      event.preventDefault();
      setActiveIndex(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setActiveIndex(ITEM_COUNT - 1);
    } else if (event.key === "Tab") {
      /* APG: Tab closes the menu and lets focus continue naturally. */
      setOpen(false);
    }
  }

  function handlePrint() {
    closeMenu(true);
    /* window.print() blocks synchronously, so let React commit the
       close before the print snapshot is taken. */
    requestAnimationFrame(() => window.print());
  }

  async function handleDownloadPdf() {
    closeMenu(true);
    if (busy) return;

    setErrored(false);
    setBusy(true);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }

    try {
      const response = await fetch(endpoint, {
        cache: "no-store",
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`PDF request failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      objectUrlRef.current = url;

      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = fileName;
      anchor.rel = "noopener";
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
    } catch (error) {
      if ((error as Error).name === "AbortError") return;
      console.error("[ExportMenu] PDF download failed", error);
      setErrored(true);
    } finally {
      if (abortRef.current === controller) abortRef.current = null;
      setBusy(false);
    }
  }

  return (
    <div className={styles.wrapper} ref={rootRef}>
      <button
        type="button"
        ref={triggerRef}
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-busy={busy || undefined}
        disabled={busy}
        onClick={() => (open ? closeMenu(false) : openMenu(0))}
        onKeyDown={handleTriggerKeyDown}
      >
        <Download size={15} aria-hidden="true" className={styles.triggerIcon} />
        <span>{busy ? "Preparing PDF…" : label}</span>
        <ChevronDown
          size={15}
          aria-hidden="true"
          className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
        />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-orientation="vertical"
          aria-label="Export options"
          className={styles.panel}
        >
          <button
            type="button"
            role="menuitem"
            tabIndex={-1}
            ref={(node) => {
              itemRefs.current[0] = node;
            }}
            className={styles.item}
            onKeyDown={handleItemKeyDown}
            onClick={handleDownloadPdf}
          >
            <FileDown size={16} aria-hidden="true" className={styles.itemIcon} />
            <span className={styles.itemText}>
              <span className={styles.itemLabel}>PDF</span>
              <span className={styles.itemHint}>Download A4 file</span>
            </span>
          </button>

          <button
            type="button"
            role="menuitem"
            tabIndex={-1}
            ref={(node) => {
              itemRefs.current[1] = node;
            }}
            className={styles.item}
            onKeyDown={handleItemKeyDown}
            onClick={handlePrint}
          >
            <Printer size={16} aria-hidden="true" className={styles.itemIcon} />
            <span className={styles.itemText}>
              <span className={styles.itemLabel}>Print</span>
              <span className={styles.itemHint}>Open print dialog</span>
            </span>
          </button>
        </div>
      )}

      <span role="status" aria-live="polite" className={styles.status}>
        {busy ? "Preparing PDF" : errored ? "PDF export failed" : ""}
      </span>

      {errored && (
        <p className={styles.error}>
          PDF export failed. Use <strong>Print</strong> and choose
          &ldquo;Save as PDF&rdquo;.
        </p>
      )}
    </div>
  );
}
