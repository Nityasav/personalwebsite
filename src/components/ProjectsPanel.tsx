"use client";

import { motion, type MotionValue } from "framer-motion";
import { projects } from "@/data/resume";
import { ProjectCard } from "./ProjectCard";
import { DecorativePhoto } from "./DecorativePhoto";

type ProjectsPanelProps = {
  innerScrollY?: MotionValue<string>;
};

export const ProjectsPanel = ({ innerScrollY }: ProjectsPanelProps) => {
  return (
    <section
      id="projects"
      className="relative flex h-dvh w-full flex-col overflow-hidden border-t border-white/15"
      aria-labelledby="projects-heading"
    >
      <DecorativePhoto src="/images/photography/projects-1.jpeg" alt="" corner="topRight" rotation={3} width={230} />
      <DecorativePhoto src="/images/photography/projects-2.jpeg" alt="" corner="bottomLeft" rotation={-5} width={220} />
      <motion.div
        className="relative z-10 w-full flex-1 px-8 pt-16 pb-[120vh] md:px-16 md:pt-20 lg:px-24"
        style={innerScrollY ? { y: innerScrollY } : undefined}
      >
        <div className="mx-auto w-full max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
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
          
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
