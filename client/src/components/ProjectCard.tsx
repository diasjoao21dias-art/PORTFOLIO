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
      className="group relative bg-card/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 shadow-xl"
    >
      {/* Image Overlay */}
      <div className="relative h-56 overflow-hidden bg-muted">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
            <Code2 className="w-16 h-16 text-muted-foreground/20" />
          </div>
        )}
        
        {/* Mobile-friendly action overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end md:items-center justify-center p-6 gap-4">
          <div className="flex gap-4 w-full md:w-auto">
            {project.demoLink && (
              <Button
                size="default"
                variant="default"
                className="rounded-full flex-1 md:flex-none shadow-lg shadow-primary/20"
                onClick={() => window.open(project.demoLink!, "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" /> Demo
              </Button>
            )}
            {project.codeLink && (
              <Button
                size="default"
                variant="outline"
                className="rounded-full flex-1 md:flex-none bg-white/5 border-white/20 text-white hover:bg-white hover:text-black backdrop-blur-sm"
                onClick={() => window.open(project.codeLink!, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" /> Código
              </Button>
            )}
          </div>
        </div>
        
        {/* Mobile Quick Action (always visible on small screens) */}
        <div className="absolute top-4 right-4 flex md:hidden gap-2">
           {project.demoLink && (
            <button 
              onClick={() => window.open(project.demoLink!, "_blank")}
              className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg"
            >
              <ExternalLink size={18} />
            </button>
           )}
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-8 line-clamp-3 text-sm sm:text-base leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies.map((tech: string, i: number) => (
            <span
              key={i}
              className="px-4 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest rounded-full bg-secondary text-secondary-foreground border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
