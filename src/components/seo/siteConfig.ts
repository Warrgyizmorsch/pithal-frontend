export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pithalmachine.com";

/**
 * Normalizes relative paths to full absolute URLs.
 */
export function toAbsoluteUrl(pathOrUrl?: string): string {
  if (!pathOrUrl) return SITE_URL;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }
  const cleanPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${cleanPath}`;
}

