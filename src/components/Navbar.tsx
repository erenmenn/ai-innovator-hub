import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Cpu, Code2, Folder, Phone, Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "HOME", href: "/", icon: Home, grad: "linear-gradient(135deg, #f59e0b, #ef4444)", shadow: "rgba(245,158,11,0.4)" },
  { label: "SKILLS", href: "/skills", icon: Code2, grad: "linear-gradient(135deg, #8b5cf6, #d946ef)", shadow: "rgba(139,92,246,0.4)" },
  { label: "EXPERIENCE", href: "/experience", icon: Folder, grad: "linear-gradient(135deg, #6366f1, #a855f7)", shadow: "rgba(99,102,241,0.4)" },
  { label: "PROJECTS", href: "/projects", icon: Folder, grad: "linear-gradient(135deg, #3b82f6, #06b6d4)", shadow: "rgba(59,130,246,0.4)" },
  { label: "CONTACT", href: "/contact", icon: Phone, grad: "linear-gradient(135deg, #10b981, #0ea5e9)", shadow: "rgba(16,185,129,0.4)" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[9px] font-pixel px-5 py-2.5 rounded-full transition-all flex items-center gap-2 group text-white hover:scale-105 active:scale-95 ${
                  isActive ? "ring-2 ring-white/50" : ""
                }`}
                style={{
                  background: link.grad,
                  boxShadow: `0 4px 15px ${link.shadow}`,
                  border: "1px solid rgba(255,255,255,0.2)"
                }}
              >
                <link.icon className="w-3 h-3 transition-transform group-hover:scale-125 group-hover:rotate-12" />
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="px-6 py-2 rounded-full gold-gradient text-white text-[9px] font-pixel shadow-lg hover:brightness-110 transition-all hover:scale-105 ml-2"
          >
            HIRE_ME
          </Link>
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
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-[10px] font-pixel py-4 px-6 rounded-2xl transition-all flex items-center gap-3 text-white shadow-lg active:scale-95 ${
                      isActive ? "ring-2 ring-white/50" : ""
                    }`}
                    style={{
                      background: link.grad,
                      boxShadow: `0 4px 15px ${link.shadow}`,
                    }}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 py-5 rounded-2xl gold-gradient text-white font-pixel text-xs text-center shadow-xl active:scale-95 transition-transform"
              >
                HIRE_ME_NOW
              </Link>
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
