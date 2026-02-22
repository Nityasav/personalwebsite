"use client";

import { motion } from "framer-motion";
import { contact } from "@/data/resume";

const PLACEHOLDER_ABOUT = "about-portrait";

export const Story = () => {
  return (
    <section
      id="story"
      className="relative border-t border-white/15 px-6 py-24 md:px-12 lg:px-20"
      aria-labelledby="story-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-white/5"
        >
          <div
            className="absolute inset-0 flex items-center justify-center text-white/30"
            aria-hidden="true"
          >
            <span className="text-center text-sm">About — your photo</span>
          </div>
          {/* Replace placeholder: add about-portrait.png to public/images/placeholders/ */}
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
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h2
            id="story-heading"
            className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
          >
            Hello, I&apos;m {contact.name.split(" ")[0]}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/85">
            done is greater than perfect. Through my experiences, I've learned that the key to success is about surrounding yourself with people who are better than you and never being the smartest person in the room. I am currently working at Clover Labs as a Software Engineer, where I am building the future of growth, and 
            have co-founded Antifragility Labs, a company that provides SEO and GEO services. We sold this company to Clover Labs for a six-figure valuation. I am now learning from someone of the smartest people in Canada, and part of Canada's fastest growing company as the youngest member. 
          </p>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            Let&apos;s design-dive. Explore selected projects below.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
