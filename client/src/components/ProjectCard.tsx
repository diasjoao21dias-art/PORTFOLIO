import { motion } from "framer-motion";
import { ExternalLink, Github, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card/40 border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-300"
    >
      {/* Image Overlay */}
      <div className="relative h-48 overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <Code2 className="w-12 h-12 text-muted-foreground/50" />
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.demoLink && (
            <Button
              size="sm"
              variant="secondary"
              className="rounded-full"
              onClick={() => window.open(project.demoLink!, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" /> Ver Demo
            </Button>
          )}
          {project.codeLink && (
            <Button
              size="sm"
              variant="outline"
              className="rounded-full bg-transparent border-white text-white hover:bg-white hover:text-black"
              onClick={() => window.open(project.codeLink!, "_blank")}
            >
              <Github className="w-4 h-4 mr-2" /> Código
            </Button>
          )}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-6 line-clamp-3 text-sm">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
