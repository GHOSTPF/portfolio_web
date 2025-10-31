import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Sparkles, Code2, Smartphone, Server, Database } from "lucide-react";

const Hero = () => {
  const hobbies = ["Gamer", "Tech Enthusiast", "Coffee Lover", "Open Source"];
  const techStack = [
    { icon: Code2, name: "React/Next.js" },
    { icon: Smartphone, name: "React Native" },
    { icon: Server, name: "Node.js" },
    { icon: Database, name: "PostgreSQL" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 animate-grid"></div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <span className="text-primary text-sm font-medium">Bem-vindo ao meu site.</span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold tracking-tight"
            >
              Sou um desenvolvedor
              <span className="block text-gradient glow-text">Web & Mobile Full Stack.</span>
            </motion.h1>

            {/* Tech Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex gap-4 flex-wrap"
            >
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg glass border border-primary/20"
                  >
                    <Icon className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{tech.name}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl"
            >
              Adoro escrever código que leva as coisas ao próximo nível, criando aplicações web e mobile 
              de alta performance, integrações automatizadas de APIs, construindo minhas próprias ferramentas 
              de desenvolvimento, e criando experiências de usuário incríveis que fazem você se sentir{" "}
              <span className="text-accent font-semibold italic">WOW!</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-muted-foreground"
            >
              Estou sempre ansioso para aprender e explorar novas tecnologias, frameworks e linguagens de programação. 
              Atualmente, estou aprendendo sobre{" "}
              <span className="text-primary font-medium">Inteligência Artificial</span> e{" "}
              <span className="text-primary font-medium">Machine Learning</span>.
            </motion.p>

            {/* Hobby Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex gap-3 flex-wrap pt-2"
            >
              {hobbies.map((hobby, index) => (
                <Badge
                  key={hobby}
                  className="glass border-accent/30 text-accent px-4 py-1.5 text-sm"
                >
                  {hobby}
                </Badge>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
              >
                Vamos Trabalhar Juntos
              </Button>
              <Button size="lg" variant="outline" className="glass border-primary/20 hover:border-primary/40">
                Currículo
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="pt-16 flex justify-center"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
    </section>
  );
};

export default Hero;
