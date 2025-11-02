import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import BarberAgenda from "../../public/barber_agenda.png";
import BabyBolha from "../../public/babybolha.png";
import Funasa from "../../public/funasa.png";

const projects = [
  {
    title: "Barber Agenda",
    description:
      "Plataforma completa de agendamento desenvolvida em Laravel, criada para que barbeiros possam gerenciar e vender seus serviços de forma prática.",
    tech: ["Laravel", "Livewire", "PHP", "MySQL"],
    image: BarberAgenda,
    github: "https://github.com/GHOSTPF/agendamento_barbearia",
    demo: "https://agendamentomarcos.pablotavaresdev.com.br/login", 
  },
  {
    title: "Baby Bolha",
    description:"Site sobre uma escola de natacação muito bem desenvolvida na cidade de joao pessoa.",
    tech: ["Next.js", "Typescript", "Tailwind"],
    image: BabyBolha,
    github: "https://github.com/GHOSTPF/babybolha",
    demo: "https://babybolha.vercel.app/",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Dashboard em tempo real com visualizações interativas e Machine Learning.",
    tech: ["Laravel", "Livewire", "PostgreSQL", "Volt"],
    image: Funasa,
    demo: "https://eleicao.funasasaude.com.br",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Título da seção */}
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

        {/* Cards */}
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
                {/* Imagem do projeto */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>

                  {/* Ícones (GitHub e Demo) */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Conteúdo do card */}
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
