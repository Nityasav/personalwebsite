"use client";

import { motion, useReducedMotion } from "framer-motion";
import { contact } from "@/data/resume";

const GREETINGS = ["HELLO", "NAMASTE", "HOLA", "Bonjour", "Olá"];

const getContainer = (reduceMotion: boolean | null) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: reduceMotion
      ? { staggerChildren: 0, delayChildren: 0 }
      : { staggerChildren: 0.08, delayChildren: 0.2 },
  },
});

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const getWordContainer = (reduceMotion: boolean | null) => ({
  hidden: {},
  show: {
    transition: reduceMotion
      ? { staggerChildren: 0, delayChildren: 0 }
      : { staggerChildren: 0.06, delayChildren: 0.9 },
  },
});

const word = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export const Hero = () => {
  const taglineWords = contact.tagline.split(/\s+/);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-6 pt-24 pb-20 md:px-12 lg:px-20"
      aria-label="Hero"
    >
      {/* Background: skip grayscale on mobile to reduce GPU cost and lag */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[url(/background.jpeg)] [background-position:-410%_top] md:grayscale"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-black/50" aria-hidden="true" />
      <div
        className="absolute inset-0 z-[1] opacity-30"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 80%, rgba(255,255,255,0.08) 0%, transparent 60%)",
          animation: "pulseGlow 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] h-1/2 bg-gradient-to-t from-black/40 to-transparent"
        aria-hidden="true"
      />

      {/* Greetings - staggered fade + slight movement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute left-6 right-6 top-32 z-10 flex flex-wrap gap-x-4 gap-y-1 text-sm uppercase tracking-[0.35em] text-white/40 md:left-12 md:right-12 md:top-36 md:text-base"
        aria-hidden="true"
      >
        {GREETINGS.map((g, i) => (
          <motion.span
            key={g}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
          >
            {g}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        variants={getContainer(reduceMotion ?? false)}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl"
      >
        <motion.p
          variants={item}
          className="font-display text-sm uppercase tracking-[0.4em] text-white/50 md:text-base"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.6em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Software Engineer · Builder
          </motion.span>
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-2 font-display text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          {contact.name}
        </motion.h1>

        {/* Drawing underline under name */}
        <motion.div
          className="mt-1 h-0.5 max-w-md bg-gradient-to-r from-white/80 to-white/20"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ transformOrigin: "left" }}
          aria-hidden="true"
        />

        {/* Tagline - word by word */}
        <motion.p
          variants={getWordContainer(reduceMotion ?? false)}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl"
        >
          {taglineWords.map((w, i) => (
            <motion.span key={`${w}-${i}`} variants={word} className="inline">
              {w}{" "}
            </motion.span>
          ))}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70"
        >
          <a
            href={`mailto:${contact.email}`}
            className="link-underline-animated decoration-white/40 underline-offset-4 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
            aria-label={`Email ${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline-animated decoration-white/40 underline-offset-4 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
            aria-label={`LinkedIn ${contact.linkedinLabel}`}
          >
            LinkedIn
          </a>
        </motion.div>
        <motion.p variants={item} className="mt-16 text-sm uppercase tracking-widest text-white/50">
          {" "}
        </motion.p>
      </motion.div>

      {/* Repeating name marquee — slower on mobile to reduce paint cost */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: reduceMotion ? 0 : 1.2, duration: reduceMotion ? 0.2 : 0.6 }}
        className="absolute bottom-6 left-0 right-0 z-10 overflow-hidden md:bottom-8"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[1, 2].map((copy) => (
            <div key={copy} className="flex shrink-0">
              {[...Array(6)].map((_, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="mx-4 font-display text-xl font-medium uppercase tracking-[0.3em] text-white/20 md:mx-6 md:text-2xl lg:mx-8"
                >
                  {contact.name.toUpperCase()}
                </span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
