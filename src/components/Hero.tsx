import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown } from "lucide-react";
import { FaReact } from "react-icons/fa6";
import { RiPhpFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const Hero = () => {
  const hobbies = ["Gamer", "Jiu-Jitsu", "Amante de Café", "Vôlei"];
  const techStack = [
    { icon: FaReact, name: "React/React Native" },
    { icon: SiNextdotjs, name: "Next" },
    { icon: RiPhpFill, name: "PHP" },
    { icon: FaLaravel, name: "Laravel" },
    { icon: BiLogoPostgresql, name: "PostgreSQL" },
  ];

  const words = ["Full Stack", "Web", "Mobile", "React", "Mobile"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentWord.slice(0, prev.length + 1)
      );

      if (!isDeleting && displayText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 pb-10 px-5 sm:px-8">
      <div className="absolute inset-0 animate-grid "></div>

      <div className="container mx-auto z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* TEXTO PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight mt-3"
            >
              Sou um desenvolvedor{" "}
              <span className="text-gradient glow-text">
                {displayText}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-3"
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
                    <Icon className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              Adoro escrever código que leva as coisas ao próximo nível,
              criando aplicações web e mobile de alta performance, integrações
              automatizadas de APIs e experiências de usuário incríveis que fazem
              você se sentir{" "}
              <span className="text-accent font-semibold italic">WOW!</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-xs sm:text-sm md:text-base text-muted-foreground"
            >
              Estou sempre ansioso para aprender e explorar novas tecnologias.
              Atualmente estudando{" "}
              <span className="text-primary font-medium">
                Inteligência Artificial
              </span>{" "}
              e{" "}
              <span className="text-primary font-medium">
                Automações
              </span>.
            </motion.p>

            {/* BOTÕES + HOBBIES */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start items-center gap-3 pt-4"
            >
              <a
                href="https://wa.me/5583986669294?text=Olá%20Pablo,%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-700 to-blue-800 text-white hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
                >
                  Vamos Trabalhar Juntos
                </Button>
              </a>

              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto glass border-primary/20 text-white hover:border-primary/60 hover:bg-primary/10 hover:text-white hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
              >
                Currículo
              </Button>

              <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
                {hobbies.map((hobby) => (
                  <Badge
                    key={hobby}
                    className="glass border-accent/30 text-accent px-3 py-1 text-xs whitespace-nowrap hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    {hobby}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* BLOCO DE CÓDIGO (SOME NO MOBILE) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="glass rounded-lg border border-primary/20 p-6 animate-float">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
                  <div className="w-3 h-3 rounded-full bg-accent/60"></div>
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  portfolio.tsx
                </span>
              </div>

              <div className="font-mono text-sm space-y-2">
                <div className="flex">
                  <span className="text-muted-foreground mr-4">1</span>
                  <span>
                    <span className="text-secondary">type</span>{" "}
                    <span className="text-foreground">Programador</span> = {"{"}{" "}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">2</span>
                  <span className="ml-4">
                    skills: <span className="text-accent">string</span>[];
                  </span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">3</span>
                  <span className="ml-4">
                    passion: <span className="text-accent">&quot;web&quot;</span> |{" "}
                    <span className="text-accent">&quot;mobile&quot;</span>;
                  </span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">4</span>
                  <span className="ml-4">
                    café: <span className="text-accent">number</span>;
                  </span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">5</span>
                  <span>{"}"}</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">6</span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">7</span>
                  <span>
                    <span className="text-secondary">const</span>{" "}
                    <span className="text-primary">Developer</span> ={" "}
                    <span className="text-muted-foreground">()</span> {"=>"}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">8</span>
                  <span className="ml-4">
                    <span className="text-secondary">return</span> {"("}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">9</span>
                  <span className="ml-8 text-muted-foreground">
                    {"<"}Construindo ideias incríveis{" />"}
                  </span>
                </div>
                <div className="flex">
                  <span className="text-muted-foreground mr-4">10</span>
                  <span className="ml-4">{");"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SETA PARA BAIXO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="pt-10 flex justify-center"
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
