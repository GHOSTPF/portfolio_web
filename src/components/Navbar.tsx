import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "../../public/logo_portfolio.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Sobre", "Projetos", "Skills", "Contato"];

  const openWhatsApp = (e) => {
    e.preventDefault();
    const url = "https://wa.me/5583986669294?text=Ol%C3%A1%20Pablo%2C%20gostaria%20de%20conversar%20sobre%20um%20projeto!";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20"
    >
      <div className="container mx-auto px-4">
        <style>
        {`
          .logo {
            width: 222px;
          }
        `}
      </style>
        <div className="flex items-center justify-between h-[5rem]">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold"
          >
            <img src={Logo} alt="" className="logo" />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative text-sm text-muted-foreground px-2 py-1 rounded-md transition-all duration-300 hover:text-white hover:bg-blue-600 hover:shadow-md hover:-translate-y-[2px]"
              >
                {item}
              </motion.a>
            ))}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pabloftavares460@gmail.com&su=Olá%20Pablo!&body=Gostaria%20de%20conversar%20sobre%20um%20projeto."
              className="hover:text-red-500 transition-all duration-300 transform hover:-translate-y-1"
            >
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-700 to-blue-800 text-white hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Contratar
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-blue-700 to-blue-800 text-white hover:scale-105 transition-all duration-300 ease-in-out whitespace-nowrap"
              onClick={openWhatsApp}
            >
              Contratar
            </Button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
