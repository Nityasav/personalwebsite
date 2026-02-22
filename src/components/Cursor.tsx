"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (prefersReducedMotion || isTouch) return;

    document.body.classList.add("cursor-custom");

    const handleMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], [data-cursor-hover]");
      setIsHover(!!interactive);
      setIsPointer(!!interactive);
    };

    const handleOut = () => {
      setIsHover(false);
      setIsPointer(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    return () => {
      document.body.classList.remove("cursor-custom");
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] mix-blend-difference"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          left: pos.x,
          top: pos.y,
          x: "-50%",
          y: "-50%",
        }}
      >
        {/* Dot */}
        <motion.div
          className="h-2 w-2 rounded-full bg-white"
          animate={{
            scale: isHover ? 0.5 : 1,
            opacity: 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        />
        {/* Ring on hover over links/buttons */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60"
          initial={false}
          animate={{
            scale: isHover ? 1 : 0,
            opacity: isHover ? 1 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      </motion.div>
    </>
  );
};

export default Cursor;
