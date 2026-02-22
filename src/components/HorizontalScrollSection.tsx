"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { HORIZONTAL_SCROLL_TO_EVENT } from "@/lib/scroll";
import { StoryPanel } from "./StoryPanel";
import { ExperiencePanel } from "./ExperiencePanel";
import { ProjectsPanel } from "./ProjectsPanel";
import { EducationPanel } from "./EducationPanel";
import { AwardsPanel } from "./AwardsPanel";
import { ContactPanel } from "./ContactPanel";

// Progress breakpoints (0..1) matching original scroll layout
const P1 = 160 / 1150;
const P2 = 320 / 1150;
const P3 = 440 / 1150;
const P4 = 560 / 1150;
const P5 = 1050 / 1150;

const INNER_SCROLL_EXPERIENCE_VH = 130;
const INNER_SCROLL_PROJECTS_VH = 120;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const progressToX = (p: number): string => {
  if (p <= P1) return `${-easeInOutCubic(p / P1) * 100}vw`;
  if (p <= P2) return "-100vw";
  if (p <= P3) return `${-100 - easeInOutCubic((p - P2) / (P3 - P2)) * 100}vw`;
  if (p <= P4) return "-200vw";
  if (p <= P5) return `${-200 - easeInOutCubic((p - P4) / (P5 - P4)) * 300}vw`;
  return "-500vw";
};

const progressToExperienceY = (p: number): string => {
  if (p < P1) return "0vh";
  if (p <= P2) return `${-easeOutCubic((p - P1) / (P2 - P1)) * INNER_SCROLL_EXPERIENCE_VH}vh`;
  return `${-INNER_SCROLL_EXPERIENCE_VH}vh`;
};

const progressToProjectsY = (p: number): string => {
  if (p < P3) return "0vh";
  if (p <= P4) return `${-easeOutCubic((p - P3) / (P4 - P3)) * INNER_SCROLL_PROJECTS_VH}vh`;
  return `${-INNER_SCROLL_PROJECTS_VH}vh`;
};

const WHEEL_SENSITIVITY = 0.00015;
const clamp = (min: number, max: number, v: number) => Math.min(max, Math.max(min, v));

export const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  // Desktop: wheel-driven progress (0..1) — scroll right only, no vertical scroll through section
  const [progress, setProgress] = useState(0);
  const xMotion = useMotionValue("0vw");
  const experienceYMotion = useMotionValue("0vh");
  const projectsYMotion = useMotionValue("0vh");

  const updateMotionFromProgress = useCallback((p: number) => {
    xMotion.set(progressToX(p));
    experienceYMotion.set(progressToExperienceY(p));
    projectsYMotion.set(progressToProjectsY(p));
  }, [xMotion, experienceYMotion, projectsYMotion]);

  useEffect(() => {
    updateMotionFromProgress(progress);
  }, [progress, updateMotionFromProgress]);

  // Desktop: listen for Nav "scroll to" (set progress so panel jumps)
  useEffect(() => {
    if (isMobile) return;
    const handler = (e: Event) => {
      const p = (e as CustomEvent<{ progress: number }>).detail?.progress;
      if (typeof p === "number") setProgress(clamp(0, 1, p));
    };
    window.addEventListener(HORIZONTAL_SCROLL_TO_EVENT, handler);
    return () => window.removeEventListener(HORIZONTAL_SCROLL_TO_EVENT, handler);
  }, [isMobile]);

  // Desktop: wheel handler + scroll pin when section is in view
  useEffect(() => {
    if (isMobile) return;

    const section = containerRef.current;
    if (!section) return;

    const getSectionStart = () => {
      const hero = document.getElementById("hero");
      if (hero) return hero.offsetHeight + hero.offsetTop;
      return section.offsetTop;
    };

    const handleWheel = (e: WheelEvent) => {
      const rect = section.getBoundingClientRect();
      const inView = rect.top <= 0 && rect.bottom > 0;
      if (!inView) return;

      const sectionStart = getSectionStart();
      if (progress <= 0 && e.deltaY < 0) {
        // At start, scrolling up: allow page scroll (back to hero)
        return;
      }
      if (progress >= 1 && e.deltaY > 0) {
        // At end (Contact): lock — do not allow scroll past; only scrolling back up is allowed
        e.preventDefault();
        return;
      }

      e.preventDefault();
      setProgress((prev) => clamp(0, 1, prev + e.deltaY * WHEEL_SENSITIVITY));
    };

    const handleScroll = () => {
      const sectionStart = getSectionStart();
      const rect = section.getBoundingClientRect();
      if (progress > 0 && progress < 1) {
        if (rect.top < 0) {
          window.scrollTo({ top: sectionStart, behavior: "auto" });
        }
        return;
      }
      if (progress >= 1 && rect.top < 0) {
        // Lock at Contact: pull view back so Contact stays in view
        window.scrollTo({ top: sectionStart, behavior: "auto" });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, progress]);

  // Mobile: vertical stack, normal scroll (no horizontal transform)
  if (isMobile) {
    return (
      <div ref={containerRef} id="horizontal-scroll" className="relative flex flex-col bg-black">
        <StoryPanel />
        <ExperiencePanel />
        <ProjectsPanel />
        <EducationPanel />
        <AwardsPanel />
        <ContactPanel />
      </div>
    );
  }

  // Desktop: 100vh section, wheel drives horizontal progress. Contact is the last section — no scroll past it.
  return (
    <div
      ref={containerRef}
      id="horizontal-scroll"
      className="relative bg-black h-dvh"
      style={{ height: "100vh" }}
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <motion.div
          style={{ x: xMotion }}
          className="flex h-full w-max flex-nowrap will-change-transform"
        >
          <div className="h-full w-[100vw] shrink-0" id="story">
            <StoryPanel />
          </div>
          <div className="h-full w-[100vw] shrink-0 overflow-hidden" id="experience">
            <ExperiencePanel innerScrollY={experienceYMotion} />
          </div>
          <div className="h-full w-[100vw] shrink-0 overflow-hidden">
            <ProjectsPanel innerScrollY={projectsYMotion} />
          </div>
          <div className="h-full w-[100vw] shrink-0">
            <EducationPanel />
          </div>
          <div className="h-full w-[100vw] shrink-0">
            <AwardsPanel />
          </div>
          <div className="h-full w-[100vw] shrink-0">
            <ContactPanel />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
