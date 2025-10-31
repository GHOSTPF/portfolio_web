import { motion } from "framer-motion";

const About = () => {
  const stats = [
    { value: "5+", label: "Anos de Experiência" },
    { value: "50+", label: "Projetos Concluídos" },
    { value: "20+", label: "Clientes Satisfeitos" },
    { value: "2500+", label: "Commits no GitHub" },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Polaroid Frame Effect */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-card border-8 border-card rounded-lg rotate-[-2deg] shadow-2xl"></div>
              <div className="absolute -top-2 -left-2 w-full h-full bg-card border-8 border-card rounded-lg rotate-[1deg] shadow-xl"></div>
              
              {/* Main Image Container */}
              <div className="relative bg-card border-8 border-card rounded-lg overflow-hidden shadow-2xl rotate-[0deg]">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-6xl font-bold">
                      👨‍💻
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Seu Nome</h3>
                      <p className="text-muted-foreground">Full Stack Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-4 glass rounded-lg border border-primary/20"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou um desenvolvedor <span className="text-primary font-semibold">Web & Mobile Full Stack</span> apaixonado 
                por criar experiências digitais excepcionais. Minha área de foco nos últimos anos tem sido desenvolvimento 
                web e mobile com <span className="text-primary font-semibold">React</span>, {" "}
                <span className="text-primary font-semibold">React Native</span>, {" "}
                <span className="text-primary font-semibold">TypeScript</span> e {" "}
                <span className="text-primary font-semibold">Node.js</span> para criar experiências bonitas tanto para 
                usuários quanto para desenvolvedores que trazem prazer.
              </p>
              <p>
                Passei a maior parte da minha vida profundamente interessado em tecnologia, construindo continuamente 
                coisas novas. Como desenvolvedor, sempre fui um nerd clássico de computador, passando a maior parte do 
                meu tempo mexendo no computador, fazendo uma de 4 coisas: Testando novas tecnologias e descobrindo como 
                funcionam. Desenvolvendo aplicações web e mobile. E, claro, tomando muito café ☕.
              </p>
              <p className="text-foreground font-medium">
                A maior parte disso ainda é verdade hoje.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
