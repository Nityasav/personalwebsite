"use client";

import { useState } from "react";
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

const CORNER_STYLES: Record<Corner, string> = {
  topRight: "top-4 right-4 md:top-8 md:right-8",
  topLeft: "top-4 left-4 md:top-8 md:left-8",
  bottomRight: "bottom-4 right-4 md:bottom-8 md:right-8",
  bottomLeft: "bottom-4 left-4 md:bottom-8 md:left-8",
};

export const DecorativePhoto = ({
  src,
  alt,
  corner,
  rotation = 0,
  width = 200,
  className = "",
}: DecorativePhotoProps) => {
  const [imageFailed, setImageFailed] = useState(false);

  const handleImageError = () => setImageFailed(true);

  return (
    <motion.div
      className={`absolute z-0 pointer-events-none ${CORNER_STYLES[corner]} ${className}`.trim()}
      style={{ width }}
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.92, rotate: rotation }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-white/20 bg-white/5 shadow-lg">
        <img
          src={src}
          alt={alt}
          className={`photo-color absolute inset-0 h-full w-full object-cover brightness-[0.85] contrast-[1.05] ${imageFailed ? "hidden" : ""}`.trim()}
          onError={handleImageError}
        />
        <div
          className="absolute inset-0 bg-black/50 rounded-sm"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
};
