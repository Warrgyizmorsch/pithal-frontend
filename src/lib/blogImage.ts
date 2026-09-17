export function getResolvedBlogImageUrl(src?: string): string {
  if (!src) return "/blogpageimg/crusherguide.jpg";

  // If pointing to GitHub raw CDN for our repository's blogpageimg, convert directly to local static path
  if (src.includes("raw.githubusercontent.com") && src.includes("/blogpageimg/")) {
    const filename = src.split("/blogpageimg/")[1]?.split("?")[0];
    if (filename) return `/blogpageimg/${filename}`;
  }

  return src;
}

