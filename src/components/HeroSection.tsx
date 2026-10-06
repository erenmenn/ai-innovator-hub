import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Download, Briefcase, Cpu, Heart, Sparkles, GraduationCap, Trophy, Zap,
} from "lucide-react";
import SocialFeedSection from "./SocialFeedSection";

const ROLES = [
  {
    prefix: "Generative AI",
    suffix: "Engineer",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
    glow: "rgba(139,92,246,0.8)",
    bar: "#8b5cf6",
  },
  {
    prefix: "AI",
    suffix: "Consultant",
    icon: "💡",
    gradient: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
    glow: "rgba(14,165,233,0.8)",
    bar: "#0ea5e9",
  },
  {
    prefix: "AI",
    suffix: "Content Creator",
    icon: "🎬",
    gradient: "linear-gradient(135deg, #f97316, #eab308)",
    glow: "rgba(249,115,22,0.8)",
    bar: "#f97316",
  },
  {
    prefix: "AI",
    suffix: "Educator",
    icon: "🎓",
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    glow: "rgba(236,72,153,0.8)",
    bar: "#ec4899",
  },
  {
    prefix: "ML",
    suffix: "Engineer",
    icon: "🧠",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    glow: "rgba(16,185,129,0.8)",
    bar: "#10b981",
  },
];

/* ─── Social Links ─── */
const socials = [
  {
    label: "GitHub", href: "https://github.com/erenmenn",
    gradient: "linear-gradient(135deg,#4f46e5,#7c3aed)",
    shadow: "0 8px 24px rgba(124,58,237,0.65), 0 2px 8px rgba(79,70,229,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn", href: "https://www.linkedin.com/in/emirsyah-rafsanjani/",
    gradient: "linear-gradient(135deg,#0077b5,#00c6ff)",
    shadow: "0 8px 24px rgba(0,198,255,0.65), 0 2px 8px rgba(0,119,181,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram", href: "https://www.instagram.com/emirzyah/",
    gradient: "linear-gradient(135deg,#ff007f,#ff5e36,#ffa500)",
    shadow: "0 8px 24px rgba(255,0,127,0.65), 0 2px 8px rgba(255,94,54,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Email", href: "mailto:emirune2@Gmail.com",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    shadow: "0 8px 24px rgba(236,72,153,0.65), 0 2px 8px rgba(168,85,247,0.4)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

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

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT — Hero + Real-Time Instagram Social Feed
══════════════════════════════════════════════════════ */
const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  const role = ROLES[roleIdx];

  return (
  <section id="home" className="relative overflow-hidden pixel-grid">

    {/* ── Background clouds ── */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div animate={{ opacity: [0.22, 0.40, 0.22] }} transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-purple-400/30 blur-[120px] rounded-full" />
      <motion.div animate={{ opacity: [0.15, 0.30, 0.15] }} transition={{ duration: 20, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[20%] right-[10%] w-[700px] h-[700px] bg-blue-400/25 blur-[120px] rounded-full" />
      <motion.div animate={{ opacity: [0.12, 0.22, 0.12] }} transition={{ duration: 18, repeat: Infinity, delay: 4 }}
        className="absolute top-[50%] right-[20%] w-[400px] h-[400px] bg-pink-400/20 blur-[100px] rounded-full" />
    </div>

    <div className="container mx-auto px-6 relative z-10">

      {/* ══ PART 1: HERO ══ */}
      <div className="grid lg:grid-cols-2 gap-12 items-center py-24">

        {/* Left: Text + badges */}
        <div className="space-y-6">
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-violet-400/50 text-white font-extrabold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-default"
            style={{ background: "linear-gradient(135deg,#8b5cf6,#ec4899)" }}>
            <span className="bg-white/20 px-2 py-0.5 rounded-lg text-white">01</span>
            <span>AI Innovator &amp; Engineer</span>
            <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
          </motion.div>

          {/* Heading */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <h1 className="text-[3.2rem] md:text-[4.5rem] lg:text-[5.5rem] font-black tracking-tight leading-[0.92] text-slate-900 uppercase">
              <span className="block drop-shadow-sm text-slate-900">HELLO, I'M</span>

              {/* EMIRSYAH — neon glow blink */}
              <motion.span
                className="block font-black my-1 relative"
                style={{
                  backgroundImage: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #0ea5e9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 18px rgba(139,92,246,0.7))",
                }}
                animate={{
                  filter: [
                    "drop-shadow(0 0 14px rgba(139,92,246,0.6))",
                    "drop-shadow(0 0 32px rgba(236,72,153,0.95))",
                    "drop-shadow(0 0 14px rgba(14,165,233,0.7))",
                    "drop-shadow(0 0 32px rgba(139,92,246,0.95))",
                    "drop-shadow(0 0 14px rgba(139,92,246,0.6))",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                EMIRSYAH
              </motion.span>

              <span className="block text-slate-900 font-black">RAFSANJANI.</span>
            </h1>
          </motion.div>

          {/* Animated Role Ticker — Big & Bold */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="space-y-2"
          >
            {/* Static prefix */}
            <p className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
              — I&apos;M AN —
            </p>

            {/* Role display */}
            <div className="relative overflow-hidden" style={{ height: 56 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={roleIdx}
                  initial={{ y: 36, opacity: 0, scale: 0.92 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  exit={{ y: -36, opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 flex items-center gap-3"
                >
                  {/* Icon badge */}
                  <motion.span
                    className="text-2xl select-none"
                    animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {role.icon}
                  </motion.span>

                  {/* Prefix + Suffix text */}
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-slate-500 font-black text-xl md:text-2xl uppercase tracking-tight">
                      {role.prefix}
                    </span>
                    <motion.span
                      className="text-2xl md:text-3xl font-black uppercase tracking-tight"
                      style={{
                        backgroundImage: role.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        filter: `drop-shadow(0 0 16px ${role.glow})`,
                      }}
                    >
                      {role.suffix}
                    </motion.span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Animated underline bar */}
            <motion.div
              className="h-[3px] rounded-full w-full max-w-xs"
              style={{ background: role.bar, boxShadow: `0 0 12px ${role.glow}` }}
              key={`bar-${roleIdx}`}
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-slate-600 font-medium text-base md:text-lg max-w-lg leading-relaxed">
            Membangun sistem cerdas bukan hanya soal menulis kode, tapi tentang <span className="text-slate-900 font-bold">menerjemahkan masalah nyata</span> menjadi arsitektur AI yang bekerja mandiri.
          </motion.p>

          {/* Tags */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            className="flex flex-wrap gap-2.5">
            {[
              { name: "AI Engineer", icon: <Cpu className="w-4 h-4" />, color: "text-blue-700", border: "border-blue-300", shadow: "shadow-[3px_3px_0px_#93c5fd]" },
              { name: "AI Consultant", icon: <Briefcase className="w-4 h-4" />, color: "text-violet-700", border: "border-violet-300", shadow: "shadow-[3px_3px_0px_#c4b5fd]" },
              { name: "Tech Lover", icon: <Heart className="w-4 h-4" />, color: "text-pink-700", border: "border-pink-300", shadow: "shadow-[3px_3px_0px_#f9a8d4]" },
            ].map(tag => (
              <motion.div key={tag.name} whileHover={{ scale: 1.05, y: -2 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 ${tag.border} ${tag.shadow} cursor-default`}>
                <div className={`${tag.color} animate-pulse`}>{tag.icon}</div>
                <span className={`text-[10px] font-pixel ${tag.color} tracking-widest uppercase mt-0.5`}>{tag.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-hrd-chat"))}
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-pixel text-xs uppercase tracking-widest border-2 border-violet-800 shadow-[5px_5px_0px_#3b0764] hover:shadow-[2px_2px_0px_#3b0764] hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <Zap className="w-4 h-4" /> Hire Me
            </button>
            <a href="/asset/CV_Emirsyah_Rafsanjani.pdf" download
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl border-2 border-orange-500 text-white font-extrabold text-sm tracking-widest uppercase shadow-[5px_5px_0px_#c2410c] hover:shadow-[2px_2px_0px_#c2410c] hover:translate-x-1 hover:translate-y-1 transition-all"
              style={{ background: "linear-gradient(90deg,#ea580c,#ca8a04)" }}>
              <Download className="w-4 h-4" /> Download CV
            </a>
          </motion.div>
        </div>

        {/* Right: Photo + badges + socials */}
        <div className="relative flex justify-center items-center w-full min-h-[620px] z-10 pb-20">
          <div className="relative" style={{ width: 520, height: 580 }}>

            {/* Glow */}
            <motion.div animate={{ opacity: [0.4, 0.6, 0.4] }} transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-x-0 top-20 mx-auto rounded-full blur-[100px] pointer-events-none"
              style={{ width: 360, height: 360, background: "conic-gradient(from 0deg,#8B5CF6,#3B82F6,#EC4899,#8B5CF6)" }} />

            {/* Photo */}
            <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
              className="absolute rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)] border-4 border-white/40 z-10 group"
              style={{ width: 330, height: 480, top: 90, left: 95 }}>
              <img src="/asset/profile_baru.jpg" alt="Emir Profile"
                className="w-full h-full object-cover scale-125 transition-all duration-1000 group-hover:scale-140"
                style={{ objectPosition: "center 56%" }} />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-indigo-950/90 to-transparent flex flex-col justify-end items-center pb-6 px-5">
                <div className="backdrop-blur-xl bg-white/10 px-5 py-2.5 rounded-2xl border border-white/20 flex flex-col items-center">
                  <h3 className="text-white font-black text-base flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-yellow-300" /> Emirsyah Rafsanjani
                  </h3>
                  <span className="text-[9px] text-white font-black bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 rounded-full border border-white/30 uppercase tracking-widest flex items-center gap-1 mt-1">
                    <Cpu className="w-2.5 h-2.5" /> AI ENGINEER
                  </span>
                </div>
              </div>
            </motion.div>

            {/* IPK badge */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, type: "spring" }}
              className="absolute z-20 glass-card px-5 py-4 rounded-[2rem] shadow-2xl border-2 border-white/50 backdrop-blur-2xl flex flex-col items-center gap-1 group"
              style={{ top: 40, right: 10 }}>
              <div className="p-3 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-black text-foreground mt-2 leading-none">3.90+</div>
              <div className="text-[9px] font-pixel text-primary uppercase tracking-tight">IPK_Score</div>
            </motion.div>

            {/* Leader badge */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, type: "spring" }}
              className="absolute z-20 glass-card px-6 py-4 rounded-[2rem] shadow-2xl border-2 border-white/50 backdrop-blur-2xl flex flex-col items-center gap-1 group"
              style={{ bottom: 100, left: -20 }}>
              <div className="p-3 rounded-full shadow-lg group-hover:-rotate-12 transition-transform"
                style={{ background: "linear-gradient(to bottom right,#7c3aed,#db2777)" }}>
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-pixel text-foreground mt-2 leading-none">LEADER</div>
              <div className="text-[9px] font-bold text-blue-600 uppercase tracking-widest mt-1">INNOVATION</div>
            </motion.div>

            {/* ── Raw PNG Stickers ── */}
            {stickers.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, ...s.animation }}
                transition={{
                  opacity: { delay: 0.3 + i * 0.1, duration: 0.5 },
                  scale: { delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 },
                  y: { duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 },
                  rotate: (s.animation as any).rotate ? { duration: s.duration * 1.5, repeat: Infinity, ease: "easeInOut" } : undefined,
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

            {/* Social icons below photo */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="absolute flex items-center gap-3 justify-center w-full"
              style={{ bottom: -55 }}>
              {socials.map((s, i) => (
                <motion.a key={s.label} href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  initial={{ opacity: 0, y: 20, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1, type: "spring", bounce: 0.5 }}
                  whileHover={{ scale: 1.2, y: -6 }} whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ background: s.gradient, boxShadow: s.shadow }}>
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══ DIVIDER ══ */}
      <div className="flex items-center gap-4 pt-16 pb-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500 px-3 bg-white/80 py-1 rounded-full border border-slate-200 shadow-xs">
          Instagram Live Feed
        </span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      {/* ══ PART 2: REAL-TIME INSTAGRAM SOCIAL FEED ══ */}
      <div className="w-full">
        <SocialFeedSection />
      </div>

    </div>
  </section>
  );
};

export default HeroSection;
