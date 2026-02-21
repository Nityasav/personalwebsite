"use client";

import { motion } from "framer-motion";
import { awardsAndClubs } from "@/data/resume";
import { DecorativePhoto } from "./DecorativePhoto";

export const AwardsPanel = () => {
  return (
    <section
      id="awards"
      className="relative flex min-h-dvh w-full items-center overflow-y-auto border-t border-white/15 px-8 py-16 md:px-16 lg:px-24"
      aria-labelledby="awards-heading"
    >
      <DecorativePhoto src="/images/photography/awards-1.jpeg" alt="" corner="topLeft" rotation={-3} width={250} />
      <DecorativePhoto src="/images/photography/awards-2.jpeg" alt="" corner="bottomRight" rotation={6} width={260} />
      <div className="relative z-10 mx-auto w-full max-w-4xl py-8">
        <motion.h2
          id="awards-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
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
