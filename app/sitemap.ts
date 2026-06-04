import type { MetadataRoute } from "next";
import { locales, type Locale } from "../lib/content";
import { absoluteUrl } from "../lib/seo";

const languages = {
  "zh-CN": absoluteUrl("/zh"),
  en: absoluteUrl("/en"),
  "x-default": absoluteUrl("/zh"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale: Locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "zh" ? 1 : 0.9,
    alternates: {
      languages,
    },
  }));
}
