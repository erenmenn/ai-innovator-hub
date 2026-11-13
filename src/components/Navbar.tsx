import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles, Code2, Folder, Award, Home, Briefcase, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "HOME", href: "/", icon: Home, grad: "linear-gradient(135deg, #f59e0b, #ef4444)", shadow: "rgba(245,158,11,0.4)" },
  { label: "SKILLS", href: "/skills", icon: Code2, grad: "linear-gradient(135deg, #8b5cf6, #d946ef)", shadow: "rgba(139,92,246,0.4)" },
  { label: "EXPERIENCE", href: "/experience", icon: Briefcase, grad: "linear-gradient(135deg, #6366f1, #a855f7)", shadow: "rgba(99,102,241,0.4)" },
  { label: "PROJECTS", href: "/projects", icon: Folder, grad: "linear-gradient(135deg, #3b82f6, #06b6d4)", shadow: "rgba(59,130,246,0.4)" },
  { label: "CERTIFICATES", href: "/certificates", icon: Award, grad: "linear-gradient(135deg, #10b981, #0ea5e9)", shadow: "rgba(16,185,129,0.4)" },
  { label: "SOCIAL", href: "/social", icon: Instagram, grad: "linear-gradient(135deg, #ec4899, #f97316)", shadow: "rgba(236,72,153,0.4)" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl py-2.5 sm:py-3 border-b border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)]"
          : "bg-transparent py-3.5 sm:py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between md:justify-center">
        {/* Mobile Brand Pill */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="md:hidden inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/80 shadow-md"
        >
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center text-white shadow-xs"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899)" }}
          >
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-black text-xs tracking-tight text-slate-900">
            EMIR<span className="text-purple-600">.AI</span>
          </span>
        </Link>

        {/* Desktop Menu - Pixel Pill Style */}
        <div className="hidden md:flex items-center gap-2 glass-card px-3 py-2 rounded-full border-white/20 shadow-xl">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[9px] font-pixel px-4 lg:px-5 py-2.5 rounded-full transition-all flex items-center gap-2 group text-white hover:scale-105 active:scale-95 ${
                  isActive ? "ring-2 ring-slate-900/30 scale-105" : ""
                }`}
                style={{
                  background: link.grad,
                  boxShadow: `0 4px 15px ${link.shadow}`,
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <link.icon className="w-3 h-3 transition-transform group-hover:scale-125 group-hover:rotate-12" />
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="px-5 lg:px-6 py-2.5 rounded-full gold-gradient text-white text-[9px] font-pixel shadow-lg hover:brightness-110 transition-all hover:scale-105 ml-1"
          >
            HIRE_ME
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden w-10 h-10 rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200/80 flex items-center justify-center text-slate-800 hover:bg-slate-50 transition-colors shadow-md"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-3 right-3 mt-2 bg-white/95 backdrop-blur-2xl rounded-3xl p-4 shadow-2xl border-2 border-slate-100 overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-2.5 relative z-10">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-[10px] font-pixel py-3.5 px-5 rounded-2xl transition-all flex items-center justify-between text-white shadow-md active:scale-98 ${
                      isActive ? "ring-2 ring-slate-900/30" : ""
                    }`}
                    style={{
                      background: link.grad,
                      boxShadow: `0 4px 12px ${link.shadow}`,
                    }}
                  >
                    <span className="flex items-center gap-3">
                      <link.icon className="w-4 h-4" />
                      {link.label}
                    </span>
                    {isActive && (
                      <span className="text-[8px] bg-white/25 px-2 py-0.5 rounded-full">
                        ACTIVE
                      </span>
                    )}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-1 py-4 rounded-2xl gold-gradient text-white font-pixel text-[10px] text-center shadow-lg active:scale-98 transition-transform"
              >
                HIRE_ME_NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
