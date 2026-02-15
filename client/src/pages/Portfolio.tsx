import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, ArrowRight, Download, 
  Terminal, Code, Database, Server, Smartphone, Layout
} from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceItem } from "@/components/ExperienceItem";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { PROFILE, PROJECTS, SKILLS, EXPERIENCE } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

// --- Form Schema ---
const contactSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Por favor, insira um endereço de e-mail válido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export default function Portfolio() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const isSubmitting = false;

  function onSubmit(values: z.infer<typeof contactSchema>) {
    console.log("Formulário enviado:", values);
    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Retornarei em breve.",
    });
    form.reset();
  }

  // --- Icon Helper ---
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "front-end": return <Layout className="w-8 h-8 mb-4 text-primary" />;
      case "back-end": return <Server className="w-8 h-8 mb-4 text-primary" />;
      case "mobile": return <Smartphone className="w-8 h-8 mb-4 text-primary" />;
      default: return <Code className="w-8 h-8 mb-4 text-primary" />;
    }
  };

  const displayProfile = PROFILE;
  const skills = SKILLS;
  const experience = EXPERIENCE;
  const projects = PROJECTS;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] opacity-30" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-8 relative"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-primary/20 p-2 relative">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted relative group">
                  {/* Avatar Placeholder - replace with actual image if available */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-20 group-hover:opacity-30 transition-opacity" />
                  <img 
                    src={`https://ui-avatars.com/api/?name=${displayProfile.name}&background=0D8ABC&color=fff&size=256`} 
                    alt={displayProfile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative floating icons */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-card border border-white/10 p-3 rounded-xl shadow-xl"
                >
                  <Terminal className="w-6 h-6 text-primary" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-4 -left-4 bg-card border border-white/10 p-3 rounded-xl shadow-xl"
                >
                  <Database className="w-6 h-6 text-accent" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-wider uppercase">
                Olá, eu sou o
              </h2>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading mb-6 tracking-tight">
                {displayProfile.name}
              </h1>
              <p className="text-xl md:text-3xl text-muted-foreground font-light mb-8 max-w-2xl mx-auto">
                <span className="text-gradient font-semibold">{displayProfile.role}</span> baseado no Brasil.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <ScrollLink to="projects" smooth={true} duration={500} offset={-100}>
                <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25">
                  Ver Projetos <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </ScrollLink>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                Baixar CV <Download className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-muted-foreground rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-6">
          <SectionHeading title="Sobre Mim" subtitle="Quem eu sou" />
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-white/5 p-8 md:p-12 rounded-3xl shadow-xl"
            >
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground text-center">
                "{displayProfile.bio}"
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-white/5">
                {[
                  { label: "Experiência", value: "3+ Anos" },
                  { label: "Projetos", value: "20+" },
                  { label: "Clientes", value: "15+" },
                  { label: "Café", value: "∞" }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <h4 className="text-3xl md:text-4xl font-bold font-heading text-white mb-2">{stat.value}</h4>
                    <span className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionHeading title="Habilidades Técnicas" subtitle="Meu Arsenal" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills?.reduce((acc: any[], skill) => {
              const existingCat = acc.find(c => c.category === skill.category);
              if (existingCat) {
                existingCat.skills.push(skill);
              } else {
                acc.push({ category: skill.category, skills: [skill] });
              }
              return acc;
            }, []).map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-2xl font-bold font-heading mb-6">{cat.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill: any, i: number) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground/80 border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
            
            {/* Fallback if no skills */}
            {(!skills || skills.length === 0) && (
              <div className="col-span-3 text-center text-muted-foreground py-12 bg-card/20 rounded-2xl border border-dashed border-white/10">
                Nenhuma habilidade encontrada. Adicione algumas no banco de dados!
              </div>
            )}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <SectionHeading title="Experiência" subtitle="Minha Jornada" />
          
          <div className="max-w-4xl mx-auto relative">
            {/* Center Line */}
            <div className="absolute left-0 md:left-1/2 h-full w-px bg-white/10 transform md:-translate-x-1/2 ml-[7px] md:ml-0" />
            
            <div className="space-y-12">
              {experience?.map((exp, index) => (
                <ExperienceItem key={exp.id} experience={exp} index={index} />
              ))}
              
              {(!experience || experience.length === 0) && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Dados de experiência em breve.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading title="Projetos em Destaque" subtitle="Meus Trabalhos" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
            
            {(!projects || projects.length === 0) && Array.from({ length: 3 }).map((_, i) => (
              <Card key={i} className="bg-card border-border h-96">
                <CardContent className="p-6 h-full flex flex-col">
                  <Skeleton className="h-48 w-full mb-4 rounded-xl" />
                  <Skeleton className="h-8 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-1/2 mb-auto" />
                  <div className="flex gap-2 mt-4">
                    <Skeleton className="h-8 w-16 rounded-full" />
                    <Skeleton className="h-8 w-16 rounded-full" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Button variant="outline" size="lg" className="rounded-full px-8 border-white/10 hover:bg-white/5">
              Ver Todos os Projetos <Github className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-gradient-to-b from-background to-secondary/40">
        <div className="container mx-auto px-6">
          <SectionHeading title="Entre em Contato" subtitle="Fale Comigo" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold font-heading mb-6">Vamos conversar sobre tudo!</h3>
              <p className="text-muted-foreground mb-12 text-lg">
                Não gosta de formulários? Me envie um e-mail. 👋
              </p>
              
              <div className="space-y-8">
                <a href={`mailto:${displayProfile.email}`} className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1">E-mail</span>
                    <span className="text-xl font-medium">{displayProfile.email}</span>
                  </div>
                </a>
                
                {displayProfile.linkedin && (
                  <a href={displayProfile.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1">LinkedIn</span>
                      <span className="text-xl font-medium">Conecte-se comigo</span>
                    </div>
                  </a>
                )}
                
                {displayProfile.github && (
                  <a href={displayProfile.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <Github className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1">GitHub</span>
                      <span className="text-xl font-medium">Siga meu trabalho</span>
                    </div>
                  </a>
                )}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="Seu Nome" 
                              className="h-14 px-6 bg-secondary/50 border-white/5 focus:border-primary/50 rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              type="email" 
                              placeholder="Endereço de E-mail" 
                              className="h-14 px-6 bg-secondary/50 border-white/5 focus:border-primary/50 rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea 
                              placeholder="Mensagem" 
                              className="min-h-[160px] p-6 bg-secondary/50 border-white/5 focus:border-primary/50 rounded-xl resize-none"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full h-14 text-lg rounded-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-1"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-background border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {displayProfile.name}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground/50 mt-2">
            Feito com React, Tailwind & Amor.
          </p>
        </div>
      </footer>
    </div>
  );
}
