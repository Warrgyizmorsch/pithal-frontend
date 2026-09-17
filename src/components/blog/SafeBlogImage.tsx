"use client";

import React, { useState, useEffect } from "react";
import { getResolvedBlogImageUrl } from "@/lib/blogImage";

interface SafeBlogImageProps {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
}

export function SafeBlogImage({
  src,
  alt,
  className = "",
  priority = false,
  onLoad,
}: SafeBlogImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(() => getResolvedBlogImageUrl(src));
  const [hasSwapped, setHasSwapped] = useState<boolean>(false);

  useEffect(() => {
    setImgSrc(getResolvedBlogImageUrl(src));
    setHasSwapped(false);
  }, [src]);

  const handleError = () => {
    if (!hasSwapped) {
      setHasSwapped(true);
      // If local /blogpageimg/ failed, try GitHub raw CDN
      if (imgSrc.startsWith("/blogpageimg/") || (imgSrc.includes("/blogpageimg/") && !imgSrc.includes("raw.githubusercontent.com"))) {
        const filename = imgSrc.split("/blogpageimg/")[1]?.split("?")[0];
        if (filename) {
          setImgSrc(`https://raw.githubusercontent.com/Warrgyizmorsch/pithal-frontend/main/public/blogpageimg/${filename}`);
          return;
        }
      }
      // If GitHub raw CDN failed, try local /blogpageimg/
      if (imgSrc.includes("raw.githubusercontent.com") && imgSrc.includes("/blogpageimg/")) {
        const filename = imgSrc.split("/blogpageimg/")[1]?.split("?")[0];
        if (filename) {
          setImgSrc(`/blogpageimg/${filename}`);
          return;
        }
      }
    }
    // Ultimate fallback to default existing guide image
    setImgSrc("/blogpageimg/crusherguide.jpg");
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onLoad={onLoad}
      onError={handleError}
      className={className}
    />
  );
}

export { getResolvedBlogImageUrl };
