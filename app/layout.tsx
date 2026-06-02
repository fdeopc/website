import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FDE OPC",
  description:
    "AI FDE studio helping global SMBs build working AI tools, demos, and automation workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
