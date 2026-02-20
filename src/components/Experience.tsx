"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/resume";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const Experience = () => {
  return (
    <section
      id="experience"
      className="relative border-t border-white/15 px-6 py-24 md:px-12 lg:px-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="experience-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
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
          className="mt-12 space-y-16"
        >
          {experiences.map((exp, index) => (
            <motion.li
              key={`${exp.company}-${exp.dateRange}`}
              variants={item}
              className="border-b border-white/10 pb-12 last:border-0 last:pb-0"
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
    </section>
  );
};
