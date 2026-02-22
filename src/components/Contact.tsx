"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/resume";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative border-t border-white/15 px-6 py-24 md:px-12 lg:px-20"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
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
            className="text-lg font-medium underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            aria-label={`Email ${contact.email}`}
          >
            Shoot me an email
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
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
