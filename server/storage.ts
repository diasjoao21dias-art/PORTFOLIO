import { 
  type Project, type Skill, type Experience, type Profile
} from "@shared/schema";

export interface IStorage {
  getProfile(): Promise<Profile>;
  getProjects(): Promise<Project[]>;
  getSkills(): Promise<Skill[]>;
  getExperience(): Promise<Experience[]>;
}

export class MemStorage implements IStorage {
  private profile: Profile;
  private projects: Project[];
  private skills: Skill[];
  private experience: Experience[];

  constructor() {
    // Hardcoded data based on user request - acting as "static" content
    this.profile = {
      id: 1,
      name: "João",
      role: "Desenvolvedor Web",
      bio: "Sou desenvolvedor com experiência em sistemas web, suporte técnico, redes e infraestrutura, atuando em projetos próprios e corporativos.",
      email: "contato@exemplo.com",
      whatsapp: "11999999999",
      linkedin: "linkedin.com/in/joao",
      github: "github.com/joao"
    };

    this.skills = [
      { id: 1, category: "Front-end", name: "HTML" },
      { id: 2, category: "Front-end", name: "CSS" },
      { id: 3, category: "Front-end", name: "JavaScript" },
      { id: 4, category: "Back-end", name: "PHP" },
      { id: 5, category: "Back-end", name: "MySQL" },
      { id: 6, category: "Back-end", name: "Node.js" },
      { id: 7, category: "Outros", name: "Git" },
      { id: 8, category: "Outros", name: "Linux" },
      { id: 9, category: "Outros", name: "Redes" },
      { id: 10, category: "Outros", name: "Infraestrutura" },
    ];

    this.projects = [
      {
        id: 1,
        title: "Sistema de Clínica",
        description: "Sistema para cadastro e agendamento de pacientes",
        technologies: ["PHP", "MySQL", "Bootstrap"],
        demoLink: "#",
        codeLink: "#",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
      },
      {
        id: 2,
        title: "E-commerce Simples",
        description: "Plataforma de vendas online com carrinho de compras",
        technologies: ["JavaScript", "Node.js", "Express"],
        demoLink: "#",
        codeLink: "#",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
      },
      {
        id: 3,
        title: "Dashboard Financeiro",
        description: "Controle de gastos pessoais com gráficos interativos",
        technologies: ["React", "TypeScript", "Tailwind"],
        demoLink: "#",
        codeLink: "#",
        image: "https://images.unsplash.com/photo-1554224155-98406852d009?w=800&q=80"
      }
    ];

    this.experience = [
      {
        id: 1,
        role: "Auxiliar de TI",
        company: "Hospital X",
        description: "Suporte, sistemas, redes e infraestrutura",
        period: "2020 - 2022"
      },
      {
        id: 2,
        role: "Desenvolvedor Freelancer",
        company: "Autônomo",
        description: "Desenvolvimento de sites institucionais e sistemas web",
        period: "2022 - Atual"
      }
    ];
  }

  async getProfile(): Promise<Profile> {
    return this.profile;
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getSkills(): Promise<Skill[]> {
    return this.skills;
  }

  async getExperience(): Promise<Experience[]> {
    return this.experience;
  }
}

export const storage = new MemStorage();
