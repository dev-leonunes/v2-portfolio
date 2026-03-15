const FALLBACK_SITE_URL = "https://dev-leonunes-portfolio.vercel.app";

export function getSiteUrl(): string {
  const envSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!envSiteUrl) {
    return FALLBACK_SITE_URL;
  }

  try {
    return new URL(envSiteUrl).origin;
  } catch {
    return FALLBACK_SITE_URL;
  }
}
