import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CodeSnippet from "@/components/CodeSnippet";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CodeSnippet />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="py-8 text-center text-muted-foreground border-t border-primary/20">
        <p>© 2025 Portfolio. Feito com 💙 usando React + Vite</p>
      </footer>
    </div>
  );
};

export default Index;
