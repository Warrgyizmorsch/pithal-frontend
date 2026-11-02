import React from "react";

export const RAW_GITHUB_IMG_BASE =
  "https://raw.githubusercontent.com/Warrgyizmorsch/pithal-frontend/main/public/blogpageimg/";

export function getResolvedBlogImageUrl(src?: string, slug?: string): string {
  if (src && src.startsWith("data:")) return src;
  if (src && src.trim() && src !== "/blogpageimg/crusherguide.jpg") return src.trim();
  if (slug && slug.trim()) return `/api/blog-image/${slug.trim()}`;
  return "/blogpageimg/crusherguide.jpg";
}

export function handleBlogImageError(
  e: React.SyntheticEvent<HTMLImageElement>,
  defaultFallback = "/blogpageimg/crusherguide.jpg"
) {
  const target = e.currentTarget;
  const currentStep = target.dataset.fallbackStep || "0";

  if (currentStep === "3") {
    // Already tried all fallbacks, stop to prevent infinite loops
    return;
  }

  const currentSrc = target.src || "";
  let slug = "";
  let filename = "";

  if (currentSrc.includes("/blogpageimg/")) {
    filename = currentSrc.split("/blogpageimg/")[1]?.split("?")[0] || "";
    slug = filename.replace(/\.(webp|jpg|jpeg|png|svg|gif)$/i, "");
  } else if (currentSrc.includes("/api/blog-image/")) {
    slug = currentSrc.split("/api/blog-image/")[1]?.split("?")[0] || "";
    filename = `${slug}.webp`;
  }

  // Step 1: Try dynamic database route /api/blog-image/[slug]
  if (currentStep === "0" && slug) {
    target.dataset.fallbackStep = "1";
    target.src = `/api/blog-image/${slug}`;
    return;
  }

  // Step 2: Try GitHub CDN fallback
  if ((currentStep === "0" || currentStep === "1") && filename) {
    target.dataset.fallbackStep = "2";
    target.src = `${RAW_GITHUB_IMG_BASE}${filename}`;
    return;
  }

  // Step 3: Default placeholder
  target.dataset.fallbackStep = "3";
  target.src = defaultFallback;
}
