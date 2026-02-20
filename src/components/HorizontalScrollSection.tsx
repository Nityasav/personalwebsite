"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { StoryPanel } from "./StoryPanel";
import { ExperiencePanel } from "./ExperiencePanel";
import { ProjectsPanel } from "./ProjectsPanel";
import { EducationPanel } from "./EducationPanel";
import { AwardsPanel } from "./AwardsPanel";
import { ContactPanel } from "./ContactPanel";

// Scroll layout (vh from start of horizontal section).
// 0-160:    Story → Experience (x 0 → -100vw)
// 160-310:  Experience inner scroll (150vh) — slower scroll down
// 310-440:  Experience → Projects (x -100 → -200vw)
// 440-620:  Projects inner scroll (180vh) — slower scroll down
// 620-1320: Projects → Education → Awards → Contact (700vh for 300vw) — a bit faster scroll right

const SCROLL_RANGE_VH = 1320;

const P1 = 160 / SCROLL_RANGE_VH;   // Experience panel in view, start inner scroll
const P2 = 310 / SCROLL_RANGE_VH;   // end Experience inner scroll (keep Y at end after this)
const P3 = 440 / SCROLL_RANGE_VH;   // Projects panel in view, start inner scroll
const P4 = 620 / SCROLL_RANGE_VH;   // end Projects inner scroll (keep Y at end after this)
const P5 = 1;

const INNER_SCROLL_EXPERIENCE_VH = 90;
const INNER_SCROLL_PROJECTS_VH = 120;

// Slow at start and end of each horizontal transition (so scroll-right doesn't feel fast at the start)
const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const HorizontalScrollSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const x = useTransform(scrollYProgress, (p) => {
    if (p <= P1) {
      const t = p / P1;
      return `${-easeInOutCubic(t) * 100}vw`;
    }
    if (p <= P2) return "-100vw";
    if (p <= P3) {
      const t = (p - P2) / (P3 - P2);
      return `${-100 - easeInOutCubic(t) * 100}vw`;
    }
    if (p <= P4) return "-200vw";
    if (p <= P5) {
      const t = (p - P4) / (P5 - P4);
      return `${-200 - easeInOutCubic(t) * 300}vw`;
    }
    return "-500vw";
  });

  // Experience inner scroll: 0 → -90vh, then STAY at -90vh so no jump when we move right
  const experienceInnerY = useTransform(scrollYProgress, (p) => {
    if (p < P1) return "0vh";
    if (p <= P2) {
      const t = (p - P1) / (P2 - P1);
      return `${-easeOutCubic(t) * INNER_SCROLL_EXPERIENCE_VH}vh`;
    }
    return `${-INNER_SCROLL_EXPERIENCE_VH}vh`;
  });

  // Projects inner scroll: 0 → -120vh, then STAY at -120vh so no jump when we move right
  const projectsInnerY = useTransform(scrollYProgress, (p) => {
    if (p < P3) return "0vh";
    if (p <= P4) {
      const t = (p - P3) / (P4 - P3);
      return `${-easeOutCubic(t) * INNER_SCROLL_PROJECTS_VH}vh`;
    }
    return `${-INNER_SCROLL_PROJECTS_VH}vh`;
  });

  return (
    <div
      ref={containerRef}
      id="horizontal-scroll"
      style={{ height: `${SCROLL_RANGE_VH}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full w-max flex-nowrap will-change-transform"
        >
          <div className="h-full w-[100vw] shrink-0" id="story">
            <StoryPanel />
          </div>
          <div className="h-full w-[100vw] shrink-0 overflow-hidden" id="experience">
            <ExperiencePanel innerScrollY={experienceInnerY} />
          </div>
          <div className="h-full w-[100vw] shrink-0 overflow-hidden">
            <ProjectsPanel innerScrollY={projectsInnerY} />
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
