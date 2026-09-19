import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BH Ventures — Building the Future of Ventures",
  description:
    "BH Ventures FZE LLC — Bridging Trade, Technology & Innovation from the UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}