import { motion } from "framer-motion";
import { Code2, Brain, Database, Sparkles } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      { name: "React/Next.js", level: 80 },
      { name: "TypeScript", level: 76 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Angular", level: 70 },
      { name: "Vue", level: 86 },
    ],
  },
  {
    icon: Database,
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "API's", level: 80 },
      { name: "PHP / Laravel", level: 92 },
    ],
  },
  {
    icon: Brain,
    title: "IA & ML",
    skills: [
      { name: "OpenAI/GPT", level: 88 },
      { name: "DeepSeek", level: 80 },
      { name: "N8n", level: 70 },
    ],
  },
  {
    icon: Sparkles,
    title: "Outras",
    skills: [
      { name: "Git/GitHub", level: 93 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Figma", level: 85 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Tecnologias</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Expertise em desenvolvimento full stack e inteligência artificial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass p-6 rounded-lg border border-primary/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="text-muted-foreground">{skill.name}</span>
                        <span className="text-primary">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
