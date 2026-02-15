import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// We will use these types for our static data structure
// Even without a DB, strict types help the frontend display data correctly

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  technologies: text("technologies").array().notNull(),
  demoLink: text("demo_link"),
  codeLink: text("code_link"),
  image: text("image") // Optional image for the card
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // "Front-end", "Back-end", "Outros"
  name: text("name").notNull(),
});

export const experience = pgTable("experience", {
  id: serial("id").primaryKey(),
  role: text("role").notNull(),
  company: text("company"),
  description: text("description").notNull(),
  period: text("period"),
});

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  bio: text("bio").notNull(),
  email: text("email").notNull(),
  whatsapp: text("whatsapp"),
  linkedin: text("linkedin"),
  github: text("github"),
});

// Schemas
export const insertProjectSchema = createInsertSchema(projects);
export const insertSkillSchema = createInsertSchema(skills);
export const insertExperienceSchema = createInsertSchema(experience);
export const insertProfileSchema = createInsertSchema(profile);

// Types
export type Project = typeof projects.$inferSelect;
export type Skill = typeof skills.$inferSelect;
export type Experience = typeof experience.$inferSelect;
export type Profile = typeof profile.$inferSelect;
