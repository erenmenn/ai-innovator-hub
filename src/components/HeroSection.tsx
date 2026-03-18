import { motion } from "framer-motion";
import { ArrowRight, Download, Brain, Cpu, Zap, Sparkles, User } from "lucide-react";

const badges = [
  { text: "3+ AI Projects", icon: Brain, delay: 0.3 },
  { text: "AI Enthusiast", icon: Sparkles, delay: 0.5 },
  { text: "Problem Solver", icon: Zap, delay: 0.7 },
  { text: "Innovation Driven", icon: Cpu, delay: 0.9 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grid-pattern">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl floating" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl floating-delayed" />

      <div className="container mx-auto px-6 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-muted-foreground"
            >
              <span className="w-2 h-2 rounded-full gold-gradient animate-pulse-gold" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Hi, I'm{" "}
              <span className="gold-text">[Your Name]</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl font-display font-medium text-muted-foreground"
            >
              AI Engineer · AI Consultant · Innovative Leader
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-muted-foreground max-w-lg leading-relaxed"
            >
              I design intelligent systems that solve real-world problems using AI, data, and creativity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gold-gradient text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-105 active:scale-95"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-foreground/20 font-semibold hover:border-primary hover:text-primary transition-all hover:scale-105 active:scale-95"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card font-semibold text-muted-foreground hover:text-foreground transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4" /> Resume
              </a>
            </motion.div>
          </div>

          {/* Right - Profile card */}
          <div className="relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl glass-card overflow-hidden border-2 border-primary/20 flex items-center justify-center">
                <User className="w-32 h-32 text-muted-foreground/30" />
              </div>
              {/* Gold accent ring */}
              <div className="absolute -inset-1 rounded-3xl gold-gradient opacity-20 -z-10 blur-sm" />
            </motion.div>

            {/* Floating badges */}
            {badges.map((badge, i) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: badge.delay }}
                className={`absolute glass-card rounded-full px-4 py-2 flex items-center gap-2 text-xs font-semibold shadow-lg ${
                  i === 0
                    ? "top-4 -left-4 md:left-0"
                    : i === 1
                    ? "top-1/4 -right-4 md:right-0"
                    : i === 2
                    ? "bottom-1/4 -left-4 md:left-0"
                    : "bottom-4 -right-4 md:right-0"
                } ${i % 2 === 0 ? "floating" : "floating-delayed"}`}
              >
                <badge.icon className="w-3.5 h-3.5 text-primary" />
                {badge.text}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
