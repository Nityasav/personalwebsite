"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/resume";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative border-t border-white/15 px-6 py-24 md:px-12 lg:px-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <h2
              id="projects-heading"
              className="font-display text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Selected projects
            </h2>
            <p className="mt-1 text-sm uppercase tracking-widest text-white/50">
              2022–2025
            </p>
          </div>
          <p className="text-sm uppercase tracking-widest text-white/50">
            Scroll to discover
          </p>
        </motion.div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
