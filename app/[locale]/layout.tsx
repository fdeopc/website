import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content, locales, type Locale } from "../../lib/content";
import { absoluteUrl, siteConfig } from "../../lib/seo";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    return {};
  }

  const page = content[locale as Locale];

  return {
    title: page.meta.title,
    description: page.meta.description,
    keywords: page.meta.keywords,
    other: {
      "content-language": page.lang,
    },
    alternates: {
      canonical: absoluteUrl(`/${locale}`),
      languages: {
        "zh-CN": absoluteUrl("/zh"),
        en: absoluteUrl("/en"),
        "x-default": absoluteUrl("/zh"),
      },
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: page.meta.title,
      description: page.meta.description,
      url: absoluteUrl(`/${locale}`),
      locale: page.lang.replace("-", "_"),
      alternateLocale: locale === "zh" ? ["en"] : ["zh_CN"],
      images: [
        {
          url: absoluteUrl(siteConfig.ogImage),
          width: 1792,
          height: 1024,
          alt: page.teamImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.meta.title,
      description: page.meta.description,
      images: [absoluteUrl(siteConfig.ogImage)],
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  return children;
}
