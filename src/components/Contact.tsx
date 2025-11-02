import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Tem um projeto em mente? Entre em contato!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="space-y-6"
>
  <div className="glass p-8 rounded-lg border border-primary/20 space-y-6">
    <h3 className="text-2xl font-bold">Redes Sociais</h3>

    <div className="space-y-4">
      {[
        { icon: Mail, label: "Email", value: "pabloftavares460@gmail.com" },
        { icon: Github, label: "GitHub", value: "github.com/GHOSTPF" },
        { icon: Linkedin, label: "LinkedIn", value: "https://www.linkedin.com/in/pablo-francisco-b74179247/" },
        { icon: FaWhatsapp, label: "Whatsapp", value: "(83) 98666-9294" },
      ].map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.div
            key={social.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors cursor-pointer"
          >
            <div
              className="flex-shrink-0 w-11 h-11 rounded-lg bg-gradient-to-br from-primary  flex items-center justify-center shadow-md"
            >
              <Icon className="w-5 h-5 text-white" />
            </div>

            <div className="min-w-0">
              <div className="font-medium">{social.label}</div>
              <div className="text-sm text-muted-foreground break-all">
                {social.value}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
</motion.div>


          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="glass p-8 rounded-lg border border-primary/20 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Nome</label>
                <Input
                  id="name"
                  placeholder="Seu nome"
                  className="glass border-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  className="glass border-primary/20"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Mensagem</label>
                <Textarea
                  id="message"
                  placeholder="Conte-me sobre seu projeto..."
                  rows={5}
                  className="glass border-primary/20"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white hover:scale-105 transition-all duration-300 ease-in-out"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
