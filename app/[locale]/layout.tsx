import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { content, locales, type Locale } from "../../lib/content";

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
    alternates: {
      canonical: `/${locale}`,
      languages: {
        "zh-CN": "/zh",
        en: "/en",
      },
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
