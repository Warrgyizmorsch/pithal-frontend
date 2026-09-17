"use client";

import React, { useState, useEffect } from "react";

interface SafeBlogImageProps {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function SafeBlogImage({
  src,
  alt,
  className = "",
  priority = false,
}: SafeBlogImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src || "/blogpageimg/crusherguide.jpg");
  const [triedAlt, setTriedAlt] = useState<boolean>(false);

  useEffect(() => {
    setImgSrc(src || "/blogpageimg/crusherguide.jpg");
    setTriedAlt(false);
  }, [src]);

  const handleError = () => {
    if (!triedAlt) {
      setTriedAlt(true);
      // If failed on local, try GitHub raw CDN
      if (imgSrc.includes("/blogpageimg/") && !imgSrc.includes("raw.githubusercontent.com")) {
        const filename = imgSrc.split("/blogpageimg/")[1]?.split("?")[0];
        if (filename) {
          setImgSrc(`https://raw.githubusercontent.com/Warrgyizmorsch/pithal-frontend/main/public/blogpageimg/${filename}`);
          return;
        }
      }
      // If failed on GitHub raw CDN, try local /blogpageimg/
      if (imgSrc.includes("raw.githubusercontent.com") && imgSrc.includes("/blogpageimg/")) {
        const filename = imgSrc.split("/blogpageimg/")[1]?.split("?")[0];
        if (filename) {
          setImgSrc(`/blogpageimg/${filename}`);
          return;
        }
      }
    }
    // Final safe fallback
    setImgSrc("/blogpageimg/crusherguide.jpg");
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={handleError}
      className={className}
    />
  );
}

