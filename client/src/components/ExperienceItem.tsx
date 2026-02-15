import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import type { Experience } from "@shared/schema";

interface ExperienceItemProps {
  experience: Experience;
  index: number;
}

export function ExperienceItem({ experience, index }: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:flex items-center justify-between group">
        {/* Timeline Dot */}
        <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-2 mt-1.5 border-4 border-background z-10 group-hover:scale-125 transition-transform duration-300" />
        
        {/* Content */}
        <div className={`md:w-[45%] mb-8 ${index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto md:text-left"}`}>
          <div className="p-6 rounded-2xl bg-card/30 border border-white/5 hover:bg-card/50 hover:border-primary/30 transition-all duration-300">
            <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
              <h3 className="text-xl font-bold text-foreground">{experience.role}</h3>
            </div>
            <div className={`flex items-center gap-2 mb-4 text-primary font-medium ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
              <Briefcase className="w-4 h-4" />
              <span>{experience.company}</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {experience.description}
            </p>
            <div className={`mt-4 inline-block px-3 py-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground ${index % 2 === 0 ? "md:ml-auto" : ""}`}>
              {experience.period}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
