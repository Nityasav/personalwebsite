"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/resume";

const GREETINGS = ["HELLO", "NAMASTE", "HOLA", "Bonjour", "Olá"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden px-6 pt-24 pb-20 md:px-12 lg:px-20"
      aria-label="Hero"
    >
      {/* Background image - behind all content, grayscale to match B&W theme */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-no-repeat [filter:grayscale(100%)]"
        style={{
          backgroundImage: "url(/background.jpeg)",
          backgroundPosition: "-350% top",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay so image is less bright */}
      <div className="absolute inset-0 z-[1] bg-black/50" aria-hidden="true" />

      {/* Greetings ticker - Sanni Sahil style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute left-6 right-6 top-32 flex flex-wrap gap-x-4 gap-y-1 text-sm uppercase tracking-[0.35em] text-white/40 md:left-12 md:right-12 md:top-36 md:text-base"
        aria-hidden="true"
      >
        {GREETINGS.map((g) => (
          <span key={g}>{g}</span>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl"
      >
        <motion.p
          variants={item}
          className="font-display text-sm uppercase tracking-[0.4em] text-white/50 md:text-base"
        >
          Software Engineer · Builder
        </motion.p>
        <motion.h1
          variants={item}
          className="mt-2 font-display text-5xl font-semibold tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          {contact.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl"
        >
          {contact.tagline}
        </motion.p>
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70"
        >
          <a
            href={`mailto:${contact.email}`}
            className="underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            aria-label={`Email ${contact.email}`}
          >
            {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            aria-label={`LinkedIn ${contact.linkedinLabel}`}
          >
            LinkedIn
          </a>
        </motion.div>
        <motion.p
          variants={item}
          className="mt-16 text-sm uppercase tracking-widest text-white/50"
        >
          
        </motion.p>
      </motion.div>

      {/* Repeating name marquee - Sanni Sahil style (infinite scroll) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-0 right-0 overflow-hidden md:bottom-8"
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
