"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

type Corner = "topRight" | "topLeft" | "bottomRight" | "bottomLeft";

type DecorativePhotoProps = {
  src: string;
  alt: string;
  corner: Corner;
  rotation?: number;
  width?: number;
  className?: string;
};

const cornerStyles: Record<Corner, string> = {
  topRight: "top-4 right-4 md:top-8 md:right-8",
  topLeft: "top-4 left-4 md:top-8 md:left-8",
  bottomRight: "bottom-4 right-4 md:bottom-8 md:right-8",
  bottomLeft: "bottom-4 left-4 md:bottom-8 md:left-8",
};

const ASPECT_RATIO = 4 / 3;

export const DecorativePhoto = ({
  src,
  alt,
  corner,
  rotation = 0,
  width = 240,
  className = "",
}: DecorativePhotoProps) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [hasRetried, setHasRetried] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const height = Math.round(width * (1 / ASPECT_RATIO));

  const handleError = useCallback(() => {
    if (!hasRetried) {
      setHasRetried(true);
      setLoaded(false);
      const separator = src.includes("?") ? "&" : "?";
      setCurrentSrc(`${src}${separator}_=${Date.now()}`);
    } else {
      setError(true);
    }
  }, [src, hasRetried]);

  if (error) return null;

  return (
    <motion.div
      className={`absolute z-0 pointer-events-none ${cornerStyles[corner]} ${className}`}
      aria-hidden="true"
      style={{ width }}
      initial={{ opacity: 0, scale: 0.92, rotate: rotation }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative overflow-hidden rounded-sm border border-white/20 bg-white/5 shadow-lg">
        <img
          src={currentSrc}
          alt={alt}
          width={width}
          height={height}
          loading="eager"
          decoding="async"
          className={`photo-color block h-auto w-full object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ aspectRatio: "4/3" }}
          onLoad={() => setLoaded(true)}
          onError={handleError}
        />
      </div>
    </motion.div>
  );
};
