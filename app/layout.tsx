import type { Metadata, Viewport } from "next";
import { absoluteUrl, siteConfig } from "../lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "FDE OPC | AI Workflow Studio for Global SMBs",
    template: `%s`,
  },
  description:
    "FDE OPC helps global SMBs turn real business needs into working AI tools, business demos, and automation workflows.",
  alternates: {
    canonical: absoluteUrl("/zh"),
    languages: {
      "zh-CN": absoluteUrl("/zh"),
      en: absoluteUrl("/en"),
      "x-default": absoluteUrl("/zh"),
    },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "FDE OPC | AI Workflow Studio for Global SMBs",
    description:
      "Build working AI tools, business demos, and automation workflows for global SMBs.",
    url: absoluteUrl("/zh"),
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1792,
        height: 1024,
        alt: "FDE OPC AI workflow studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FDE OPC | AI Workflow Studio for Global SMBs",
    description:
      "Build working AI tools, business demos, and automation workflows for global SMBs.",
    images: [absoluteUrl(siteConfig.ogImage)],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
