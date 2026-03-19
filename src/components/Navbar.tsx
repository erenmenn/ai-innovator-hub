import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Cpu, Code2, Folder, Phone } from "lucide-react";

const navLinks = [
  { label: "ABOUT", href: "#about", icon: Cpu },
  { label: "SKILLS", href: "#skills", icon: Code2 },
  { label: "EXPERIENCE", href: "#experience", icon: Folder },
  { label: "PROJECTS", href: "#projects", icon: Folder },
  { label: "CONTACT", href: "#contact", icon: Phone },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
        scrolled 
        ? "bg-background/70 backdrop-blur-2xl py-3 border-b-2 border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]" 
        : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-center">
        {/* Desktop Menu - Pixel Pill Style */}
        <div className="hidden md:flex items-center gap-2 glass-card px-3 py-2 rounded-full border-white/20 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[9px] font-pixel px-4 py-2 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all flex items-center gap-2 group"
            >
              <link.icon className="w-3 h-3 transition-transform group-hover:scale-125 group-hover:rotate-12" />
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 rounded-full gold-gradient text-white text-[9px] font-pixel shadow-lg hover:brightness-110 transition-all hover:scale-105 ml-2"
          >
            HIRE_ME
          </a>
        </div>

        <button
          className="md:hidden w-12 h-12 rounded-xl glass-card flex items-center justify-center text-foreground hover:bg-primary/10 transition-colors shadow-lg"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="md:hidden absolute top-full left-4 right-4 mt-4 glass-card rounded-[2rem] p-6 shadow-2xl border-2 border-white/20 overflow-hidden"
          >
            <div className="flex flex-col gap-3 relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[10px] font-pixel text-muted-foreground hover:text-primary py-4 px-6 rounded-2xl hover:bg-primary/5 transition-all flex items-center gap-3"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-5 rounded-2xl gold-gradient text-white font-pixel text-xs text-center shadow-xl active:scale-95 transition-transform"
              >
                HIRE_ME_NOW
              </a>
            </div>
            {/* Background floating bits for mobile menu */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none">
               <Sparkles className="w-40 h-40" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
