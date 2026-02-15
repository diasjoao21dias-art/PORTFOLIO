import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  align?: "left" | "center";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary font-semibold tracking-wider uppercase text-sm"
      >
        {subtitle}
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold font-heading mt-2"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`h-1 bg-gradient-to-r from-primary to-accent mt-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
