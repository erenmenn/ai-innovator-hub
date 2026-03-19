import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase, Folder, Cpu, GraduationCap, Trophy, Rocket, Star } from "lucide-react";

const stickers = [
  { 
    src: "/asset/love.png", 
    size: 110, 
    pos: { top: 90, left: 45 }, 
    glow: "rgba(255, 107, 138, 0.5)",
    animation: { y: [0, -15, 0], rotate: [-8, 8, -8] }, duration: 4.5 
  },
  { 
    src: "/asset/sparkle.png", 
    size: 70, 
    pos: { top: 220, left: 50 }, 
    glow: "rgba(255, 215, 71, 0.5)",
    animation: { scale: [1, 1.2, 1], rotate: [0, 20, 0] }, duration: 4 
  },
  { 
    src: "/asset/smile emoji.png", 
    size: 90, 
    pos: { top: 190, right: 40 }, 
    glow: "rgba(64, 201, 127, 0.4)",
    animation: { rotate: [-15, 15, -15], y: [0, -10, 0] }, duration: 5.5 
  },
  { 
    src: "/asset/api.png", 
    size: 130, 
    pos: { bottom: 85, right: 45 },
    glow: "rgba(247, 103, 7, 0.5)",
    animation: { scale: [1, 1.15, 1], y: [0, -12, 0] }, duration: 3.5 
  },
  { 
    src: "/asset/rocket.png", 
    size: 80, 
    pos: { bottom: 170, left: 40 }, 
    glow: "rgba(116, 143, 252, 0.5)",
    animation: { x: [0, -10, 0], y: [0, -20, 0] }, duration: 6 
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pixel-grid pt-10">
      
      {/* ── Mystical AI Smoke / Glow Clouds ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
           animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3], x: [0, 80, 0] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[10%] left-[15%] w-[600px] h-[600px] smoke-glow bg-purple-500/30 blur-[100px]"
        />
        <motion.div
           animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2], x: [0, -70, 0] }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute bottom-[20%] right-[10%] w-[700px] h-[700px] smoke-glow bg-blue-500/20 blur-[100px]"
        />
        <motion.div
           animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute top-[30%] right-[20%] w-[450px] h-[450px] smoke-glow bg-pink-500/15 blur-[90px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ═════════ LEFT CONTENT ═════════ */}
          <div className="space-y-7 z-10 w-full xl:pl-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl glass-card text-[9px] font-pixel text-primary border-2 border-primary/20 shadow-[4px_4px_0px_rgba(139,92,246,0.3)] mb-2 cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              STATUS: INNOVATING...
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter"
            >
              Hi, I'm <br />
              <motion.span 
                 whileHover={{ scale: 1.05, textShadow: "0px 0px 20px rgba(139,92,246,0.8)" }}
                 className="gold-text italic inline-block transition-all duration-300 cursor-default pr-2"
              >
                Emirsyah
              </motion.span>
              <br />
              <motion.span 
                 whileHover={{ scale: 1.05, textShadow: "0px 0px 20px rgba(236,72,153,0.8)" }}
                 className="gold-text italic inline-block transition-all duration-300 cursor-default pr-2"
              >
                Rafsanjani
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {["AI Engineer", "AI Consultant", "Tech Lover"].map((tag, i) => (
                <motion.span 
                  key={tag} 
                  whileHover={{ scale: 1.1, rotate: i % 2 === 0 ? 3 : -3 }}
                  className="px-4 py-1.5 rounded-full text-[10px] font-silkscreen bg-white/5 backdrop-blur-md border border-white/20 text-primary uppercase tracking-widest shadow-xl cursor-crosshair transition-colors hover:bg-white/10"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="glass-card rounded-[2rem] p-6 border-2 border-white/20 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-8 h-8 rounded-br-2xl bg-primary/20" />
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base relative z-10 font-medium">
                  I am deeply fascinated by the continuous evolution of <span className="text-primary font-bold">Artificial Intelligence</span> and its potential to solve complex real-world problems. My core focus lies in architecting intelligent systems, specializing in <span className="font-black" style={{ backgroundImage: 'linear-gradient(to right, #10b981, #16a34a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>Generative AI, LLMs, and modular RAG (Retrieval-Augmented Generation) pipelines</span>. I don't just write code; I design data-driven solutions and cognitive architectures that actively learn, adapt, and drive impactful innovations.
                </p>
              </div>

              {/* Motivation Quote Box Redesign */}
              <div className="mt-6 inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-transparent pr-8 pl-4 py-4 rounded-2xl border-l-4 border-primary shadow-sm hover:translate-x-2 transition-transform cursor-default">
                <div className="p-2 bg-primary/20 rounded-full">
                  <Star className="w-5 h-5 text-primary fill-current animate-pulse" />
                </div>
                <p className="text-sm md:text-base font-bold italic text-foreground tracking-wide">
                  "If you never <span className="text-red-400">bleed</span>, you never gonna <span className="text-green-500 font-black">grow.</span>"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a href="#contact" className="inline-flex items-center gap-3 px-10 py-5 rounded-[2.5rem] bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-black hover:brightness-110 transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(124,58,237,0.5)] border-2 border-white/20 group">
                 HIRE ME <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
              <a href="/asset/cv.pdf" download className="inline-flex items-center gap-3 px-10 py-5 rounded-[2.5rem] bg-white/5 backdrop-blur-xl font-bold text-foreground transition-all hover:bg-white/10 hover:scale-105 shadow-xl border-2 border-white/10 group">
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-primary" /> MY CV
              </a>
            </motion.div>
          </div>

          {/* ═════════ RIGHT CONTENT (CUTE PHOTO + NEW STATS) ═════════ */}
          <div className="relative flex justify-center items-center w-full min-h-[680px] z-10">
            
            <div className="relative" style={{ width: 520, height: 600 }}>
              
              {/* Profile Glow Area */}
              <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-x-0 top-20 mx-auto rounded-full blur-[100px] pointer-events-none"
                style={{
                  width: 360, height: 360,
                  background: "conic-gradient(from 0deg, #8B5CF6, #3B82F6, #EC4899, #8B5CF6)",
                }}
              />

              {/* ── Center Photo Background (Modern Bubbly Theme) ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="absolute rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-4 border-white/40 z-10 group"
                style={{
                  width: 330, height: 440,
                  top: 80, left: 95,
                  backgroundColor: "rgba(255,255,255,0.05)"
                }}
              >
                <img
                  src="/asset/profile2.jpg"
                  alt="Emir Profile"
                  className="w-full h-full object-cover scale-125 transition-all duration-1000 group-hover:scale-140"
                  style={{ objectPosition: "center 56%" }} 
                />
                
                {/* Bubbly Gradient Overlay at Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end items-center pb-10 px-6">
                   <h3 className="text-white font-black text-2xl tracking-tighter mb-1 font-sans">Emirsyah Rafsanjani</h3>
                   <div className="flex gap-2">
                     <span className="text-[10px] text-white/90 font-bold bg-primary/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">AI ENGINEER</span>
                   </div>
                </div>
              </motion.div>

              {/* ── NEW CUTE STAT BADGES (Replacing 3+ Projects) ── */}
              
              {/* 1. IPK 3.90+ (Top Right) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute z-20 glass-card px-5 py-4 rounded-[2rem] shadow-2xl border-2 border-white/50 backdrop-blur-2xl flex flex-col items-center gap-1 group"
                style={{ top: 40, right: 10 }}
              >
                  <div className="p-3 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                     <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-xl font-black text-foreground mt-2 leading-none">3.90+</div>
                  <div className="text-[9px] font-pixel text-primary uppercase tracking-tight">IPK_Score</div>
              </motion.div>

              {/* 2. Innovation Leader (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute z-20 glass-card px-6 py-4 rounded-[2rem] shadow-2xl border-2 border-white/50 backdrop-blur-2xl flex flex-col items-center gap-1 group"
                style={{ bottom: 60, left: -20 }}
              >
                  <div 
                    className="p-3 rounded-full shadow-lg group-hover:-rotate-12 transition-transform"
                    style={{ background: 'linear-gradient(to bottom right, #a855f7, #ec4899)' }}
                  >
                     <Trophy className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-pixel text-foreground mt-2 leading-none">LEADER</div>
                  <div className="text-[9px] font-bold text-blue-500 uppercase tracking-widest mt-1">INNOVATION</div>
              </motion.div>
              
              {/* 3. Open To Work Flag (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute z-30 bg-white/90 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 border border-green-500/20"
                style={{ bottom: 30, right: 60 }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[11px] font-pixel text-green-700">HIRE_ME</span>
              </motion.div>


              {/* ── Raw PNG Stickers (Untouched as requested) ── */}
              {stickers.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, ...s.animation }}
                  transition={{ 
                    opacity: { delay: 0.3 + i * 0.1, duration: 0.5 },
                    scale:   { delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 },
                    y:       { duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 },
                    rotate:  s.animation.rotate ? { duration: s.duration * 1.5, repeat: Infinity, ease: "easeInOut" } : undefined,
                  }}
                  className="absolute z-30 pointer-events-none select-none flex items-center justify-center p-2"
                  style={{ ...s.pos }}
                >
                  <div 
                    className="absolute inset-0 rounded-full blur-2xl opacity-50"
                    style={{ backgroundColor: s.glow, transform: "scale(0.8)" }}
                  />
                  <img src={s.src} alt="Sticker" width={s.size} height={s.size} className="relative z-10 object-contain drop-shadow-2xl" />
                </motion.div>
              ))}

            </div>
          </div>
          {/* end RIGHT */}

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
