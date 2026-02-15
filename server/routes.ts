import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.profile.get.path, async (_req, res) => {
    const profile = await storage.getProfile();
    res.json(profile);
  });

  app.get(api.projects.list.path, async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get(api.skills.list.path, async (_req, res) => {
    const skills = await storage.getSkills();
    res.json(skills);
  });

  app.get(api.experience.list.path, async (_req, res) => {
    const experience = await storage.getExperience();
    res.json(experience);
  });

  app.post(api.contact.send.path, async (req, res) => {
    // In a real static site, this might send an email or use a form service
    // For now we just return success
    const data = req.body;
    console.log("Contact form received:", data);
    res.json({ success: true });
  });

  return httpServer;
}
