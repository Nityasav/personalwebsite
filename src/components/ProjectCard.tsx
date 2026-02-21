"use client";

import { motion } from "framer-motion";
import type { Project } from "@/data/resume";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const imagePath = `/images/placeholders/${project.imagePlaceholderKey}.png`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group flex flex-col overflow-hidden rounded-none border border-white/10 bg-white/[0.02] transition-colors hover:border-white/20 hover:bg-white/[0.04]"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-white/5">
        <img
          src={imagePath}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-xl font-medium text-white md:text-2xl">
          {project.title}
        </h3>
        {project.stack && (
          <p className="mt-1 text-sm text-white/50">{project.stack}</p>
        )}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/80">
          {project.shortDescription}
        </p>
        {project.links.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="text-sm underline decoration-white/40 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
                aria-label={`${project.title} — ${link.label}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};
