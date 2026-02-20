"use client";

import { motion } from "framer-motion";
import { education } from "@/data/resume";

export const Education = () => {
  return (
    <section
      id="education"
      className="relative border-t border-white/15 px-6 py-24 md:px-12 lg:px-20"
      aria-labelledby="education-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="education-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
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
