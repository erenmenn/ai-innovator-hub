import { motion } from "framer-motion";
import { ArrowRight, Download, Briefcase, Folder, Cpu, GraduationCap, Trophy, Rocket, Star, Sparkles, Terminal, Heart, Code2, Zap } from "lucide-react";

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
           animate={{ opacity: [0.2, 0.4, 0.2] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[10%] left-[15%] w-[600px] h-[600px] smoke-glow bg-purple-500/30 blur-[100px]"
        />
        <motion.div
           animate={{ opacity: [0.15, 0.3, 0.15] }}
           transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute bottom-[20%] right-[10%] w-[700px] h-[700px] smoke-glow bg-blue-500/20 blur-[100px]"
        />
        <motion.div
           animate={{ opacity: [0.15, 0.3, 0.15] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
           className="absolute top-[30%] right-[20%] w-[450px] h-[450px] smoke-glow bg-pink-500/15 blur-[90px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ═════════ LEFT CONTENT ═════════ */}
          <div className="space-y-8 z-10 w-full xl:pl-8 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border-2 border-indigo-200 shadow-[4px_4px_0px_#818cf8] cursor-pointer group"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-[10px] font-pixel text-indigo-600 tracking-widest uppercase mt-0.5">STATUS: INNOVATING...</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter relative"
            >
              <motion.img 
                 src="/asset/sparkle.png" alt="" 
                 aria-hidden="true"
                 animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                 className="absolute -top-6 -left-8 w-10 h-10 opacity-80" 
              />
              Hi, I'm <br className="hidden md:block" />
              <motion.span 
                 whileHover={{ scale: 1.01, textShadow: "4px 4px 0px rgba(139,92,246,0.3)" }}
                 className="inline-block transition-all duration-300 cursor-default text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-fuchsia-600 to-rose-600 relative pr-4 pb-2"
              >
                Emirsyah <br className="hidden md:block" /> Rafsanjani
                <motion.img 
                  src="/asset/love.png" alt="" 
                  aria-hidden="true"
                  animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-8 bottom-2 w-10 h-10 object-contain drop-shadow-md hidden md:block"
                />
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap items-center gap-2.5 text-slate-500 font-semibold text-sm md:text-base mb-6 mt-2"
            >
              <span>Universitas Singaperbangsa</span>
              <span className="text-slate-300">|</span>
              <span>Sistem Informasi</span>
              <span className="text-slate-300">|</span>
              <span className="text-indigo-500 font-bold bg-indigo-50 px-2 py-0.5 rounded-md">Active Student</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { name: "AI Engineer", color: "text-blue-600", border: "border-blue-300", shadow: "shadow-[3px_3px_0px_#93c5fd]", icon: <Cpu className="w-4 h-4" /> },
                { name: "AI Consultant", color: "text-violet-600", border: "border-violet-300", shadow: "shadow-[3px_3px_0px_#c4b5fd]", icon: <Briefcase className="w-4 h-4" /> },
                { name: "Tech Lover", color: "text-pink-600", border: "border-pink-300", shadow: "shadow-[3px_3px_0px_#f9a8d4]", icon: <Heart className="w-4 h-4" /> }
              ].map((tag, i) => (
                <motion.div 
                  key={tag.name} 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 ${tag.border} ${tag.shadow} cursor-default transition-transform`}
                >
                  <div className={`${tag.color} animate-pulse`}>
                    {tag.icon}
                  </div>
                  <span className={`text-[10px] font-pixel ${tag.color} tracking-widest uppercase mt-0.5`}>{tag.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {/* Cute Neo-Brutalist About Card with Gradient & New Content */}
              <div className="relative bg-gradient-to-br from-indigo-100 via-white to-pink-100 rounded-3xl p-7 md:p-8 border-4 border-indigo-200 shadow-[8px_8px_0px_#c7d2fe] hover:shadow-[12px_12px_0px_#a5b4fc] transition-all duration-300">
                <p className="text-slate-800 leading-relaxed text-sm md:text-base font-medium relative z-10">
                  <span className="font-bold text-indigo-700">I am an innovative leader who understands real-world problems</span> and identifies where <span className="inline-block bg-purple-100 text-purple-700 font-bold px-2 py-0.5 rounded-lg border-2 border-purple-300 transform -rotate-1 shadow-sm">AI</span> can be applied effectively. Creative, analytical, and solution-oriented — I build <strong className="text-emerald-700 font-black border-b-2 border-emerald-400 border-dashed pb-0.5">intelligent systems</strong> and act as a light AI consultant, helping translate problems into impactful AI solutions.
                </p>
              </div>

              {/* Motivation Quote Box Redesign - Cute Bubble */}
              <div className="inline-flex items-center gap-4 bg-yellow-50 rounded-2xl border-2 border-yellow-400 p-4 shadow-[5px_5px_0px_#facc15] hover:-translate-y-1 transition-transform group">
                <div className="p-2 bg-yellow-300 rounded-xl group-hover:rotate-12 transition-transform">
                  <Zap className="w-5 h-5 text-yellow-700 fill-yellow-700" />
                </div>
                <p className="text-sm font-bold text-yellow-900 tracking-wide">
                  "If you never <span className="text-rose-500 font-pixel text-xs bg-rose-100 px-1 py-0.5 rounded border border-rose-300">bleed</span>, you never gonna <span className="text-emerald-600 font-black text-lg">grow.</span>"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-5 pt-2"
            >
              {/* Cute Gradient HIRE ME Button with Pixel Font & Rocket Asset */}
              <a href="#contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white rounded-2xl font-pixel text-xs uppercase tracking-widest border-2 border-violet-800 shadow-[6px_6px_0px_#4c1d95] hover:shadow-[2px_2px_0px_#4c1d95] hover:translate-x-1 hover:translate-y-1 transition-all">
                 <img src="/asset/rocket.png" className="w-6 h-6 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform drop-shadow-md" alt="rocket" />
                 HIRE ME
              </a>

              {/* Cute Download CV Button */}
              <a 
                href="/asset/Emirsyah_Rafsanjani_CV.pdf" 
                download 
                className="group px-8 py-4 rounded-2xl border-2 border-orange-500 text-white font-extrabold text-sm tracking-widest uppercase shadow-[6px_6px_0px_#ea580c] hover:shadow-[2px_2px_0px_#ea580c] hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-3 relative z-50"
                style={{ background: "linear-gradient(90deg, #f97316 0%, #eab308 100%)" }}
              >
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white/40 transition-colors drop-shadow-md">
                  <Download className="w-4 h-4 shadow-sm" />
                </div>
                Download CV
              </a>
            </motion.div>
          </div>

          {/* ═════════ RIGHT CONTENT (CUTE PHOTO + NEW STATS) ═════════ */}
          <div className="relative flex justify-center items-center w-full min-h-[680px] z-10">
            
            <div className="relative" style={{ width: 520, height: 600 }}>
              
              {/* Profile Glow Area */}
              <motion.div
                animate={{ opacity: [0.4, 0.6, 0.4] }}
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
                
                {/* Advanced Bubbly Gradient Overlay at Bottom */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-indigo-950/90 via-indigo-900/50 to-transparent flex flex-col justify-end items-center pb-8 px-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                   <div className="backdrop-blur-xl bg-white/10 px-6 py-3 rounded-2xl border border-white/20 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col items-center">
                     <h3 className="text-white font-black text-lg tracking-tight mb-1 font-sans drop-shadow-lg flex items-center gap-2">
                       <Sparkles className="w-4 h-4 text-yellow-300" /> Emirsyah Rafsanjani
                     </h3>
                     <div className="flex gap-2">
                       <span className="text-[9px] text-white font-black bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 rounded-full border border-white/30 shadow-inner uppercase tracking-widest flex items-center gap-1"><Cpu className="w-2.5 h-2.5"/> AI ENGINEER</span>
                     </div>
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
              
              {/* 3. Open To Work Flag (Bottom Right) REDESIGN */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: -5 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute z-30 bg-gradient-to-br from-emerald-400 to-teal-600 px-5 py-3 rounded-2xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.5)] flex items-center gap-2 border border-white/40 cursor-pointer"
                style={{ bottom: 20, right: 40 }}
              >
                <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse" />
                <span className="text-xs font-black text-white uppercase tracking-widest drop-shadow-md">HIRE ME</span>
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
