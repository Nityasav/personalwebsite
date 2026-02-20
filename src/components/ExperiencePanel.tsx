"use client";

import { motion, type MotionValue } from "framer-motion";
import { experiences } from "@/data/resume";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

type ExperiencePanelProps = {
  innerScrollY?: MotionValue<string>;
};

export const ExperiencePanel = ({ innerScrollY }: ExperiencePanelProps) => {
  return (
    <section
      className="relative flex h-dvh w-full flex-col overflow-hidden border-t border-white/15"
      aria-labelledby="experience-heading"
    >
      <motion.div
        className="w-full flex-1 px-8 pt-16 pb-[90vh] md:px-16 md:pt-20 lg:px-24"
        style={innerScrollY ? { y: innerScrollY } : undefined}
      >
        <div className="mx-auto w-full max-w-4xl">
          <p className="font-display text-xs uppercase tracking-[0.4em] text-white/40" aria-hidden="true">
            Me #02
          </p>
          <motion.h2
            id="experience-heading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-2 text-white/60"
          >
            Role · Company · Year
          </motion.p>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 space-y-12 md:space-y-16"
          >
            {experiences.map((exp) => (
              <motion.li
                key={`${exp.company}-${exp.dateRange}`}
                variants={item}
                className="border-b border-white/10 pb-10 last:border-0 last:pb-0 md:pb-12"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-xl font-medium text-white md:text-2xl">
                    {exp.role} · {exp.company}
                  </h3>
                  <span className="text-sm text-white/60">
                    {exp.dateRange}
                    {exp.location ? ` · ${exp.location}` : ""}
                  </span>
                </div>
                <ul className="mt-4 list-inside list-disc space-y-2 text-white/80">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-base leading-relaxed">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
      {/* Hint at bottom of viewport when at top of content */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-white/40" aria-hidden="true">
        Keep scrolling to explore →
      </div>
    </section>
  );
};
