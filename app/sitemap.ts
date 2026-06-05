import type { MetadataRoute } from "next";
import { content, locales, type Locale } from "../lib/content";
import { absoluteUrl } from "../lib/seo";

const languages = {
  "zh-CN": absoluteUrl("/zh"),
  en: absoluteUrl("/en"),
  "x-default": absoluteUrl("/zh"),
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const homePages = locales.map((locale: Locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "zh" ? 1 : 0.9,
    alternates: {
      languages,
    },
  })) satisfies MetadataRoute.Sitemap;

  const caseIndexPages = locales.map((locale: Locale) => ({
    url: absoluteUrl(`/${locale}/cases`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
    alternates: {
      languages: {
        "zh-CN": absoluteUrl("/zh/cases"),
        en: absoluteUrl("/en/cases"),
        "x-default": absoluteUrl("/zh/cases"),
      },
    },
  })) satisfies MetadataRoute.Sitemap;

  const casePages = locales.flatMap((locale: Locale) =>
    content[locale].cases.map((caseStudy) => ({
      url: absoluteUrl(`/${locale}/cases/${caseStudy.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          "zh-CN": absoluteUrl(`/zh/cases/${caseStudy.slug}`),
          en: absoluteUrl(`/en/cases/${caseStudy.slug}`),
          "x-default": absoluteUrl(`/zh/cases/${caseStudy.slug}`),
        },
      },
    })),
  ) satisfies MetadataRoute.Sitemap;

  return [...homePages, ...caseIndexPages, ...casePages];
}
