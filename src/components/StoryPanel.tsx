"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { contact } from "@/data/resume";
import { SCROLL_OFFSET_VH } from "@/lib/scroll";
import { DecorativePhoto } from "./DecorativePhoto";

const ABOUT_PORTRAIT_SRC = "/images/me.jpeg";

export const StoryPanel = () => {
  const [portraitError, setPortraitError] = useState(false);

  const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const horizontal = document.getElementById("horizontal-scroll");
    if (!horizontal) return;
    const top = horizontal.getBoundingClientRect().top + window.scrollY;
    const vhPx = window.innerHeight;
    const targetScroll = top + (SCROLL_OFFSET_VH.project * vhPx) / 100;
    window.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  return (
    <section
      className="relative flex min-h-dvh w-full items-center border-t border-white/15 px-8 py-16 md:px-16 lg:px-24"
      aria-labelledby="story-heading"
    >
      <DecorativePhoto src="/images/photography/about-1.jpeg" alt="" corner="topRight" rotation={-6} width={240} />
      <DecorativePhoto src="/images/photography/about-2.jpeg" alt="" corner="bottomLeft" rotation={4} width={220} />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-white/5 ml-8 md:ml-12"
        >
          {!portraitError && (
            <Image
              src={ABOUT_PORTRAIT_SRC}
              alt="Portrait of Nitya Savaliya"
              fill
              sizes="(max-width: 768px) 240px, 320px"
              className="object-cover object-[center_38%] grayscale"
              loading="lazy"
              onError={() => setPortraitError(true)}
            />
          )}
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
         I've learned that you should never be the smartest person in the room. I am currently working at Clover Labs as a Software Engineer, and co-founded Antifragility Labs, a company that provides SEO and GEO services. We sold this company to Clover Labs for a six-figure valuation. I am now learning from some of the smartest people in Canada, and part of Canada's fastest growing company as the youngest member. 
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/85 md:text-xl">
            <a
              href="#projects"
              className="underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
              onClick={handleProjectsClick}
              aria-label="Jump to Projects section"
            >
              View my projects.
            </a>
          </p>
        </motion.div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-white/40"
        aria-hidden="true"
      >
       
      </div>
    </section>
  );
};
