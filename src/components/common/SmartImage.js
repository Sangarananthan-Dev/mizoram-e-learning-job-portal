"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SmartImage({
  src,
  fallbackSrc = "/image-fallback.svg",
  alt,
  ...props
}) {
  const [resolvedSrc, setResolvedSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setResolvedSrc(src || fallbackSrc);
  }, [fallbackSrc, src]);

  return (
    <Image
      {...props}
      src={resolvedSrc || fallbackSrc}
      alt={alt}
      onError={() => {
        if (resolvedSrc !== fallbackSrc) {
          setResolvedSrc(fallbackSrc);
        }
      }}
    />
  );
}
