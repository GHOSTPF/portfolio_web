import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CodeSnippet from "@/components/CodeSnippet";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import LogoFooter from "../../public/logo_footer.png"
import { Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <CodeSnippet /> */}
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="flex items-center justify-between border-t border-primary/20 px-6 py-4 text-muted-foreground">
        <div className="flex items-center gap-3">
          <img
            src={LogoFooter}
            alt="Logo Pablo Tavares"
            className="w-8 h-8 object-contain opacity-80"
          />
          <p className="text-sm">© 2025 Pablo Tavares.</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/tavaress_cs/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-all duration-300 transform hover:-translate-y-1"
          >
            <Instagram className="w-5 h-5" />
          </a>

          <a
            href="https://wa.me/5583986669294?text=Olá%20Pablo,%20gostaria%20de%20conversar%20sobre%20um%20projeto!"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>

          <a
            href="mailto:pabloftavares460@gmail.com"
            className="hover:text-red-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </footer>

    </div>
  );
};

export default Index;
