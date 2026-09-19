import React from "react";

export const RAW_GITHUB_IMG_BASE =
  "https://raw.githubusercontent.com/Warrgyizmorsch/pithal-frontend/main/public/blogpageimg/";

export function getResolvedBlogImageUrl(src?: string): string {
  if (!src) return "/blogpageimg/crusherguide.jpg";
  return src;
}

export function handleBlogImageError(
  e: React.SyntheticEvent<HTMLImageElement>,
  defaultFallback = "/blogpageimg/crusherguide.jpg"
) {
  const target = e.currentTarget;
  if (target.dataset.fallbackDone === "true") {
    target.src = defaultFallback;
    return;
  }
  target.dataset.fallbackDone = "true";

  const currentSrc = target.src || "";

  // 1. If pointing to local /blogpageimg/ and it failed (e.g. on Hostinger), fallback to GitHub CDN
  if (currentSrc.includes("/blogpageimg/") && !currentSrc.includes("raw.githubusercontent.com")) {
    const filename = currentSrc.split("/blogpageimg/")[1]?.split("?")[0];
    if (filename) {
      target.src = `${RAW_GITHUB_IMG_BASE}${filename}`;
      return;
    }
  }

  // 2. If pointing to GitHub CDN and it failed, fallback to local /blogpageimg/
  if (currentSrc.includes("raw.githubusercontent.com") && currentSrc.includes("/blogpageimg/")) {
    const filename = currentSrc.split("/blogpageimg/")[1]?.split("?")[0];
    if (filename) {
      target.src = `/blogpageimg/${filename}`;
      return;
    }
  }

  // 3. Fallback to standard placeholder
  target.src = defaultFallback;
}

