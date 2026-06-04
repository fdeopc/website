export const siteConfig = {
  name: "FDE OPC",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.fdeopc.xyz",
  email: "hello@fdeopc.xyz",
  defaultLocale: "zh",
  locales: ["zh", "en"],
  ogImage: "/images/team-workflow.png",
} as const;

export function absoluteUrl(path = "") {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `${baseUrl}${normalizedPath}`;
}
