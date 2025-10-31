import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI SaaS Platform",
    description: "Plataforma completa de IA com chat, geração de imagens e análise de dados",
    tech: ["React", "Node.js", "OpenAI", "PostgreSQL"],
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "E-commerce Inteligente",
    description: "Loja virtual com recomendações por IA e checkout otimizado",
    tech: ["Next.js", "Stripe", "TensorFlow", "MongoDB"],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Analytics Dashboard",
    description: "Dashboard em tempo real com visualizações interativas e ML",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    gradient: "from-green-500 to-teal-600",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Soluções inovadoras construídas com as tecnologias mais modernas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="glass border-primary/20 overflow-hidden group cursor-pointer h-full">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <Github className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="glass">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
