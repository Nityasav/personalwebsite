"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useCallback } from "react";
import { SCROLL_OFFSET_VH, type ScrollKey } from "@/lib/scroll";

const isTouchDevice = () =>
  typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

const SECTIONS = [
  { id: "horizontal-scroll", label: "About", navLabel: "About", scrollKey: "about" as const },
  { id: "projects", label: "Projects", navLabel: "Project", scrollKey: "project" as const },
  { id: "contact", label: "Contact", navLabel: "Contact", scrollKey: "contact" as const },
] as const;

export const Nav = () => {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const handleNavClick = useCallback((id: string, scrollKey?: ScrollKey) => {
    setOpen(false);
    const useSmooth = !isTouchDevice();
    const scrollOpts: ScrollToOptions = { behavior: useSmooth ? "smooth" : "auto" };
    const horizontal = document.getElementById("horizontal-scroll");
    if (horizontal && scrollKey !== undefined) {
      const top = horizontal.getBoundingClientRect().top + window.scrollY;
      const vhPx = window.innerHeight;
      const offsetVh = SCROLL_OFFSET_VH[scrollKey];
      const targetScroll = top + (offsetVh * vhPx) / 100;
      window.scrollTo({ top: targetScroll, ...scrollOpts });
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView(scrollOpts);
  }, []);

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    id: string,
    scrollKey?: ScrollKey
  ) => {
    if (e.key !== "Enter" && e.key !== " ") return;
    e.preventDefault();
    handleNavClick(id, scrollKey);
  };

  return (
    <>
      {/* Progress bar - Sanni Sahil style */}
      <motion.div
        className="fixed left-0 top-0 z-30 h-0.5 bg-white/40 shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        style={{ width: progressWidth }}
        aria-hidden="true"
      />

      {/* Desktop: MENU button that reveals nav - Sanni Sahil style */}
      <div className="fixed right-6 top-8 z-20 flex items-center gap-6 md:right-10 md:top-10">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="btn-border-animated font-display rounded-none px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black md:text-sm"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {/* Desktop nav panel - slides in when Menu clicked */}
      <motion.nav
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-10 hidden items-center justify-center bg-black/95 md:flex"
        aria-label="Page sections"
      >
        <div className="flex flex-col items-center gap-2">
          {SECTIONS.map(({ id, label, navLabel, scrollKey }) => (
            <button
              key={id}
              type="button"
              onClick={() => handleNavClick(id, scrollKey)}
              onKeyDown={(e) => handleKeyDown(e, id, scrollKey)}
              className="link-underline-animated font-display text-2xl uppercase tracking-wider text-white/90 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black md:text-4xl lg:text-5xl"
              aria-label={`Go to ${label}`}
              tabIndex={open ? 0 : -1}
            >
              <span className="block">{navLabel}</span>
              <span className="block">{navLabel}</span>
            </button>
          ))}
        </div>
      </motion.nav>

      {/* Mobile menu button - hamburger */}
      <div className="fixed right-6 top-8 z-20 md:hidden">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="btn-border-animated flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-none bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-10 bg-black/95 md:hidden"
          aria-hidden="false"
        >
          <div className="flex min-h-full flex-col justify-center px-8 py-24">
            {SECTIONS.map(({ id, label, navLabel, scrollKey }) => (
              <button
                key={id}
                type="button"
                onClick={() => handleNavClick(id, scrollKey)}
                onKeyDown={(e) => handleKeyDown(e, id, scrollKey)}
                className="link-underline-animated py-4 text-left font-display text-2xl uppercase tracking-wider text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
                tabIndex={0}
              >
                {navLabel}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};
