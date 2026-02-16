export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  demoLink?: string;
  codeLink?: string;
  technologies: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  description: string;
  period: string;
}

export interface Skill {
  id: number;
  name: string;
  category: string;
}

export interface Profile {
  name: string;
  role: string;
  bio: string;
  email: string;
  github?: string;
  linkedin?: string;
}
