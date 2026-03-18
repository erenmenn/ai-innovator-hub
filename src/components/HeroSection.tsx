import { motion } from "framer-motion";
import { ArrowRight, Download, Brain, Cpu, Zap, Sparkles, User, Heart, Star, Rocket, Coffee, Music, Gamepad2, Code2, Flame } from "lucide-react";

const badges = [
  { text: "3+ AI Projects", icon: Brain, delay: 0.3 },
  { text: "AI Enthusiast", icon: Sparkles, delay: 0.5 },
  { text: "Problem Solver", icon: Zap, delay: 0.7 },
  { text: "Innovation Driven", icon: Cpu, delay: 0.9 },
];

const floatingStickers = [
  { emoji: "🤖", x: -60, y: -40, size: "text-4xl", delay: 0.4, duration: 5 },
  { emoji: "🧠", x: 70, y: -60, size: "text-3xl", delay: 0.8, duration: 6 },
  { emoji: "✨", x: -80, y: 40, size: "text-3xl", delay: 1.0, duration: 4.5 },
  { emoji: "🔥", x: 90, y: 30, size: "text-4xl", delay: 0.6, duration: 5.5 },
  { emoji: "💡", x: -50, y: 100, size: "text-3xl", delay: 1.2, duration: 7 },
  { emoji: "🎯", x: 80, y: 90, size: "text-3xl", delay: 0.9, duration: 5 },
  { emoji: "😎", x: -90, y: -80, size: "text-5xl", delay: 0.3, duration: 6 },
  { emoji: "🚀", x: 100, y: -90, size: "text-4xl", delay: 0.7, duration: 4 },
  { emoji: "💜", x: 0, y: 130, size: "text-2xl", delay: 1.4, duration: 6.5 },
  { emoji: "⚡", x: -100, y: 70, size: "text-3xl", delay: 1.1, duration: 5 },
  { emoji: "🎨", x: 110, y: 60, size: "text-3xl", delay: 0.5, duration: 7 },
  { emoji: "☕", x: -30, y: -100, size: "text-2xl", delay: 1.3, duration: 5.5 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated smoke / gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 left-[10%] w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, hsl(280 80% 70% / 0.4), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -30, 0], scale: [1, 0.9, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[5%] w-[600px] h-[600px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, hsl(200 90% 65% / 0.4), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[10%] left-[20%] w-[450px] h-[450px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, hsl(43 80% 60% / 0.35), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, -20, 40, 0], y: [0, 50, -20, 0], scale: [1, 1.05, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 6 }}
          className="absolute top-[50%] left-[50%] w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(330 70% 65% / 0.3), transparent 70%)" }}
        />
        <motion.div
          animate={{ x: [0, 30, -50, 0], y: [0, -30, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[30%] right-[15%] w-[350px] h-[350px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(160 70% 55% / 0.3), transparent 70%)" }}
        />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 pt-24 pb-16 relative">
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

          {/* Right - Profile card with floating stickers */}
          <div className="relative flex justify-center">
            {/* Floating emoji stickers */}
            {floatingStickers.map((sticker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: sticker.delay }}
                className="absolute z-10 cursor-pointer select-none"
                style={{
                  left: `calc(50% + ${sticker.x}px)`,
                  top: `calc(50% + ${sticker.y}px)`,
                }}
                whileHover={{ scale: 1.4, rotate: [0, -10, 10, 0] }}
                whileTap={{ scale: 0.8 }}
              >
                <motion.span
                  animate={{ y: [0, -12, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: sticker.duration, repeat: Infinity, ease: "easeInOut", delay: sticker.delay }}
                  className={`${sticker.size} drop-shadow-lg block`}
                >
                  {sticker.emoji}
                </motion.span>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              {/* Colorful glow ring behind profile */}
              <div className="absolute -inset-4 rounded-[2rem] opacity-40 blur-xl animate-spin-slow"
                style={{
                  background: "conic-gradient(from 0deg, hsl(280 80% 65%), hsl(200 90% 60%), hsl(43 80% 55%), hsl(330 70% 60%), hsl(160 70% 50%), hsl(280 80% 65%))"
                }}
              />

              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-3xl glass-card overflow-hidden border-2 border-primary/20 flex items-center justify-center">
                <User className="w-32 h-32 text-muted-foreground/30" />
              </div>
            </motion.div>

            {/* Floating badges */}
            {badges.map((badge, i) => (
              <motion.div
                key={badge.text}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: badge.delay }}
                whileHover={{ scale: 1.1 }}
                className={`absolute glass-card rounded-full px-4 py-2 flex items-center gap-2 text-xs font-semibold shadow-lg z-20 ${
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
