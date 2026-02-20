"use client";

import { motion } from "framer-motion";
import { awardsAndClubs } from "@/data/resume";

export const Awards = () => {
  return (
    <section
      id="awards"
      className="relative border-t border-white/15 px-6 py-24 md:px-12 lg:px-20"
      aria-labelledby="awards-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="awards-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
        >
          Awards &amp; Clubs
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {awardsAndClubs.map((award, index) => (
            <span
              key={index}
              className="rounded-none border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
            >
              {award}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
