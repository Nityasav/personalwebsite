"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/resume";
import { DecorativePhoto } from "./DecorativePhoto";

export const ContactPanel = () => {
  return (
    <section
      id="contact"
      className="relative flex min-h-dvh w-full items-center overflow-y-auto border-t border-white/15 px-8 py-16 md:px-16 lg:px-24"
      aria-labelledby="contact-heading"
    >
      <DecorativePhoto src="/images/photography/contact-1.jpeg" alt="" corner="topLeft" rotation={-3} width={220} />
      <DecorativePhoto src="/images/photography/contact-2.jpeg" alt="" corner="bottomRight" rotation={5} width={210} />
      <div className="relative z-10 mx-auto w-full max-w-4xl py-8">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="font-display text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
        >
          Let&apos;s connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-white/85 md:text-xl"
        >
         I always love to meet new people. It is necessary to surround yourself with people who are better than you. After all, if you are the smartest person in the room, you are in the wrong room. Would love to connect with you!
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap gap-6"
        >
          <a
            href={`mailto:${contact.email}`}
            className="link-underline-animated text-lg font-medium decoration-white/40 underline-offset-4 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
            aria-label={`Email ${contact.email}`}
          >
            Shoot me an email
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline-animated text-lg font-medium decoration-white/40 underline-offset-4 transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black"
            aria-label={`LinkedIn ${contact.linkedinLabel}`}
          >
            LinkedIn
          </a>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-sm text-white/50"
        >
          References available upon request.
        </motion.p>
        <footer className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>© {new Date().getFullYear()} {contact.name}.</p>
          <p className="mt-2">Thanks for dropping by! Stay connected and join me on my journey.</p>
        </footer>
      </div>
    </section>
  );
};
