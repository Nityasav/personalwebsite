"use client";

import { motion } from "framer-motion";
import { education } from "@/data/resume";
import { DecorativePhoto } from "./DecorativePhoto";

export const EducationPanel = () => {
  return (
    <section
      id="education"
      className="relative flex min-h-dvh w-full items-center overflow-y-auto border-t border-white/15 px-8 py-16 md:px-16 lg:px-24"
      aria-labelledby="education-heading"
    >
      <DecorativePhoto src="/images/photography/education-1.jpeg" alt="" corner="topRight" rotation={-4} width={220} />
      <DecorativePhoto src="/images/photography/education-2.jpeg" alt="" corner="bottomLeft" rotation={7} width={200} />
      <div className="relative z-10 mx-auto w-full max-w-4xl py-8">
        <motion.h2
          id="education-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
        >
          Education
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mt-12 space-y-10"
        >
          {education.map((entry) => (
            <li
              key={entry.name}
              className="border-b border-white/10 pb-10 last:border-0 last:pb-0"
            >
              <h3 className="font-display text-xl font-medium text-white md:text-2xl">
                {entry.name}
              </h3>
              <p className="mt-1 text-white/70">{entry.detail}</p>
              <p className="mt-1 text-sm text-white/50">{entry.dateRange}</p>
              {entry.bullets && (
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-white/80">
                  {entry.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
