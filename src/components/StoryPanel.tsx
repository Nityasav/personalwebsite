"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/resume";
import { DecorativePhoto } from "./DecorativePhoto";

const PLACEHOLDER_ABOUT = "about-portrait";

export const StoryPanel = () => {
  return (
    <section
      className="relative flex min-h-dvh w-full items-center border-t border-white/15 px-8 py-16 md:px-16 lg:px-24"
      aria-labelledby="story-heading"
    >
      <DecorativePhoto src="/images/photography/about-1.jpeg" alt="" corner="topRight" rotation={-6} width={280} />
      <DecorativePhoto src="/images/photography/about-2.jpeg" alt="" corner="bottomLeft" rotation={4} width={260} />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-white/5"
        >
          <div
            className="absolute inset-0 flex items-center justify-center text-white/30"
            aria-hidden="true"
          >
            <span className="text-center text-sm">About — your photo</span>
          </div>
          <img
            src={`/images/placeholders/${PLACEHOLDER_ABOUT}.png`}
            alt="Portrait of Nitya Savaliya"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300"
            onLoad={(e) => {
              e.currentTarget.classList.remove("opacity-0");
              e.currentTarget.classList.add("opacity-100");
            }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col justify-center"
        >
          <p className="font-display text-xs uppercase tracking-[0.4em] text-white/40" aria-hidden="true">
            Me #01
          </p>
          <h2
            id="story-heading"
            className="mt-2 font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
          >
            Hello, I&apos;m {contact.name.split(" ")[0]}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
            I turn ideas into practical results. From building SEO platforms at
            Clover Labs to co-founding Antifragility Labs and leading
            technology at Eclipse JA, I focus on learning, adapting, and
            executing—whether it&apos;s full-stack engineering, AI products, or
            scaling systems that drive growth.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/85 md:text-xl">
            Let&apos;s design-dive!{" "}
            <a
              href="#projects"
              className="underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
              onClick={(e) => {
                e.preventDefault();
                const horizontal = document.getElementById("horizontal-scroll");
                if (horizontal) {
                  const top = horizontal.getBoundingClientRect().top + window.scrollY;
                  const vhPx = window.innerHeight;
                  const targetScroll = top + (440 * vhPx) / 100;
                  window.scrollTo({ top: targetScroll, behavior: "smooth" });
                }
              }}
            >
              Explore selected projects.
            </a>
          </p>
        </motion.div>
      </div>
      {/* Horizontal scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-white/40" aria-hidden="true">
        Scroll down to move right →
      </div>
    </section>
  );
};
