import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", to: "about" },
    { name: "Habilidades", to: "skills" },
    { name: "Projetos", to: "projects" },
    { name: "Experiência", to: "experience" },
    { name: "Contato", to: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold font-heading cursor-pointer text-white"
        >
          Portfolio<span className="text-primary">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              offset={-100}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contrate-me
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-background border-l border-white/5 z-[60] md:hidden p-6 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-bold font-heading">Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full bg-secondary/50"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                  >
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-lg font-medium text-foreground/80 hover:text-primary py-3 px-4 rounded-xl hover:bg-primary/5 transition-all block cursor-pointer"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto absolute bottom-10 left-6 right-6">
                <Button 
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-2xl shadow-lg shadow-primary/20"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    const contactSection = document.getElementById("contact");
                    contactSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contrate-me
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
