import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Download,
  Briefcase,
  Cpu,
  Heart,
  Sparkles,
  GraduationCap,
  Trophy,
  Zap,
  BookOpen,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

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
    label: "GitHub",
    href: "https://github.com/erenmenn",
    gradient: "linear-gradient(135deg,#4f46e5,#7c3aed)",
    shadow: "0 8px 24px rgba(124,58,237,0.65), 0 2px 8px rgba(79,70,229,0.4)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/emirsyah-rafsanjani/",
    gradient: "linear-gradient(135deg,#0077b5,#00c6ff)",
    shadow: "0 8px 24px rgba(0,198,255,0.65), 0 2px 8px rgba(0,119,181,0.4)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/emirzyah/",
    gradient: "linear-gradient(135deg,#ff007f,#ff5e36,#ffa500)",
    shadow: "0 8px 24px rgba(255,0,127,0.65), 0 2px 8px rgba(255,94,54,0.4)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:emirune2@Gmail.com",
    gradient: "linear-gradient(135deg,#a855f7,#ec4899)",
    shadow: "0 8px 24px rgba(236,72,153,0.65), 0 2px 8px rgba(168,85,247,0.4)",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4 sm:w-5 sm:h-5"
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

const stickers = [
  {
    src: "/asset/love.png",
    size: 100,
    pos: { top: 80, left: 30 },
    glow: "rgba(255, 107, 138, 0.5)",
    animation: { y: [0, -15, 0], rotate: [-8, 8, -8] },
    duration: 4.5,
  },
  {
    src: "/asset/sparkle.png",
    size: 65,
    pos: { top: 210, left: 35 },
    glow: "rgba(255, 215, 71, 0.5)",
    animation: { scale: [1, 1.2, 1], rotate: [0, 20, 0] },
    duration: 4,
  },
  {
    src: "/asset/smile emoji.png",
    size: 85,
    pos: { top: 185, right: 30 },
    glow: "rgba(64, 201, 127, 0.4)",
    animation: { rotate: [-15, 15, -15], y: [0, -10, 0] },
    duration: 5.5,
  },
  {
    src: "/asset/api.png",
    size: 115,
    pos: { bottom: 85, right: 30 },
    glow: "rgba(247, 103, 7, 0.5)",
    animation: { scale: [1, 1.15, 1], y: [0, -12, 0] },
    duration: 3.5,
  },
  {
    src: "/asset/rocket.png",
    size: 75,
    pos: { bottom: 165, left: 30 },
    glow: "rgba(116, 143, 252, 0.5)",
    animation: { x: [0, -10, 0], y: [0, -20, 0] },
    duration: 6,
  },
];

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT — Hero + Real-Time Instagram Social Feed
══════════════════════════════════════════════════════ */
const HeroSection = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2400);
    return () => clearInterval(t);
  }, []);
  const role = ROLES[roleIdx];

  return (
    <section id="home" className="relative overflow-hidden pixel-grid">
      {/* ── Background clouds ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ opacity: [0.22, 0.4, 0.22] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[10%] left-[10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purple-400/30 blur-[100px] sm:blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[20%] right-[10%] w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-blue-400/25 blur-[100px] sm:blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 18, repeat: Infinity, delay: 4 }}
          className="absolute top-[50%] right-[20%] w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-pink-400/20 blur-[90px] sm:blur-[100px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* ══ PART 1: HERO ══ */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-8 sm:pt-16 lg:py-20 pb-10 sm:pb-16">
          {/* Left: Text + badges */}
          <div className="space-y-4 sm:space-y-5 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 rounded-2xl border border-violet-400/50 text-white font-extrabold text-[10px] sm:text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(139,92,246,0.5)] cursor-default"
              style={{ background: "linear-gradient(135deg,#8b5cf6,#ec4899)" }}
            >
              <span className="bg-white/20 px-2 py-0.5 rounded-lg text-white">01</span>
              <span>AI Innovator &amp; Engineer</span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300 animate-spin" />
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-[2.15rem] sm:text-[3.2rem] md:text-[4.5rem] lg:text-[5.2rem] font-black tracking-tight leading-[0.94] text-slate-900 uppercase">
                <span className="block drop-shadow-sm text-slate-900">HELLO, I&apos;M</span>

                {/* EMIRSYAH — neon glow blink */}
                <motion.span
                  className="block font-black my-1 relative"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #0ea5e9 100%)",
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
              className="space-y-1.5 sm:space-y-2"
            >
              {/* Static prefix */}
              <p className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.25em] text-slate-400">
                — I&apos;M AN —
              </p>

              {/* Role display */}
              <div className="relative overflow-hidden h-12 sm:h-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIdx}
                    initial={{ y: 36, opacity: 0, scale: 0.92 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: -36, opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 flex items-center gap-2 sm:gap-3 justify-center lg:justify-start"
                  >
                    {/* Icon badge */}
                    <motion.span
                      className="text-xl sm:text-2xl select-none"
                      animate={{ rotate: [0, -8, 8, 0], scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {role.icon}
                    </motion.span>

                    {/* Prefix + Suffix text */}
                    <div className="flex items-baseline gap-1.5 sm:gap-2 flex-wrap justify-center lg:justify-start">
                      <span className="text-slate-500 font-black text-base sm:text-xl md:text-2xl uppercase tracking-tight">
                        {role.prefix}
                      </span>
                      <motion.span
                        className="text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight"
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
                className="h-[3px] rounded-full mx-auto lg:mx-0 w-full max-w-[180px] sm:max-w-xs"
                style={{ background: role.bar, boxShadow: `0 0 12px ${role.glow}` }}
                key={`bar-${roleIdx}`}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 font-medium text-xs sm:text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed px-1 sm:px-0"
            >
              Membangun sistem cerdas bukan hanya soal menulis kode, tapi tentang{" "}
              <span className="text-slate-900 font-bold">menerjemahkan masalah nyata</span> menjadi
              arsitektur AI yang bekerja mandiri.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="flex flex-wrap gap-2 sm:gap-2.5 justify-center lg:justify-start"
            >
              {[
                {
                  name: "AI Engineer",
                  icon: <Cpu className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
                  color: "text-blue-700",
                  border: "border-blue-300",
                  shadow: "shadow-[3px_3px_0px_#93c5fd]",
                },
                {
                  name: "AI Consultant",
                  icon: <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
                  color: "text-violet-700",
                  border: "border-violet-300",
                  shadow: "shadow-[3px_3px_0px_#c4b5fd]",
                },
                {
                  name: "Tech Lover",
                  icon: <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />,
                  color: "text-pink-700",
                  border: "border-pink-300",
                  shadow: "shadow-[3px_3px_0px_#f9a8d4]",
                },
              ].map((tag) => (
                <motion.div
                  key={tag.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white border-2 ${tag.border} ${tag.shadow} cursor-default`}
                >
                  <div className={`${tag.color} animate-pulse`}>{tag.icon}</div>
                  <span
                    className={`text-[9px] sm:text-[10px] font-pixel ${tag.color} tracking-widest uppercase mt-0.5`}
                  >
                    {tag.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start pt-1"
            >
              <button
                onClick={() => window.dispatchEvent(new CustomEvent("open-hrd-chat"))}
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-7 py-3 sm:py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-pixel text-[10px] sm:text-xs uppercase tracking-widest border-2 border-violet-800 shadow-[4px_4px_0px_#3b0764] sm:shadow-[5px_5px_0px_#3b0764] hover:shadow-[2px_2px_0px_#3b0764] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <Zap className="w-4 h-4" /> Hire Me
              </button>
              <a
                href="/asset/CV_Emirsyah_Rafsanjani.pdf"
                download
                className="inline-flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl border-2 border-orange-500 text-white font-extrabold text-xs sm:text-sm tracking-widest uppercase shadow-[4px_4px_0px_#c2410c] sm:shadow-[5px_5px_0px_#c2410c] hover:shadow-[2px_2px_0px_#c2410c] hover:translate-x-1 hover:translate-y-1 transition-all"
                style={{ background: "linear-gradient(90deg,#ea580c,#ca8a04)" }}
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </motion.div>
          </div>

          {/* Right: Responsive Photo + Floating Badges + Socials */}
          <div className="relative flex justify-center items-center w-full mt-2 lg:mt-0 pb-12 sm:pb-16">
            <div className="relative w-full max-w-[300px] h-[380px] sm:max-w-[380px] sm:h-[470px] md:max-w-[440px] md:h-[530px] lg:max-w-[500px] lg:h-[570px] mx-auto">
              {/* Glow */}
              <motion.div
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute inset-x-0 top-8 mx-auto rounded-full blur-[65px] sm:blur-[80px] pointer-events-none"
                style={{
                  width: "70%",
                  height: "70%",
                  background: "conic-gradient(from 0deg,#8B5CF6,#3B82F6,#EC4899,#8B5CF6)",
                }}
              />

              {/* Profile Photo Card — Responsive Width & Height */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.35 }}
                className="absolute inset-x-[9%] sm:inset-x-[15%] top-[6%] sm:top-[8%] bottom-[13%] sm:bottom-[10%] rounded-[2.25rem] sm:rounded-[3.25rem] overflow-hidden shadow-[0_25px_70px_-15px_rgba(0,0,0,0.4)] border-4 border-white/60 z-10 group bg-slate-900"
              >
                <img
                  src="/asset/profile_baru.jpg"
                  alt="Emirsyah Rafsanjani Profile"
                  className="w-full h-full object-cover scale-110 sm:scale-120 transition-all duration-1000 group-hover:scale-125"
                  style={{ objectPosition: "center 52%" }}
                />
                <div className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-indigo-950/95 via-indigo-950/50 to-transparent flex flex-col justify-end items-center pb-4 sm:pb-6 px-3 sm:px-5">
                  <div className="backdrop-blur-xl bg-white/15 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-2xl border border-white/25 flex flex-col items-center w-full max-w-[220px] sm:max-w-[260px]">
                    <h3 className="text-white font-black text-xs sm:text-base flex items-center gap-1.5 whitespace-nowrap">
                      <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300 shrink-0" />
                      <span>Emirsyah Rafsanjani</span>
                    </h3>
                    <span className="text-[8px] sm:text-[9px] text-white font-black bg-gradient-to-r from-violet-600 to-fuchsia-600 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/30 uppercase tracking-widest flex items-center gap-1 mt-1">
                      <Cpu className="w-2.5 h-2.5" /> AI ENGINEER
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* IPK badge */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="absolute z-20 glass-card px-3 py-2.5 sm:px-5 sm:py-4 rounded-2xl sm:rounded-[2rem] shadow-2xl border-2 border-white/60 backdrop-blur-2xl flex flex-col items-center gap-0.5 sm:gap-1 group top-2 right-0 sm:top-4 sm:right-2"
              >
                <div className="p-2 sm:p-3 bg-gradient-to-br from-yellow-300 to-amber-500 rounded-full shadow-lg group-hover:rotate-12 transition-transform">
                  <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-sm sm:text-xl font-black text-foreground mt-1 leading-none">
                  3.90+
                </div>
                <div className="text-[7px] sm:text-[9px] font-pixel text-primary uppercase tracking-tight">
                  IPK_Score
                </div>
              </motion.div>

              {/* Leader badge */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute z-20 glass-card px-3 py-2.5 sm:px-6 sm:py-4 rounded-2xl sm:rounded-[2rem] shadow-2xl border-2 border-white/60 backdrop-blur-2xl flex flex-col items-center gap-0.5 sm:gap-1 group bottom-16 left-0 sm:bottom-20 sm:-left-2"
              >
                <div
                  className="p-2 sm:p-3 rounded-full shadow-lg group-hover:-rotate-12 transition-transform"
                  style={{ background: "linear-gradient(to bottom right,#7c3aed,#db2777)" }}
                >
                  <Trophy className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-[10px] sm:text-sm font-pixel text-foreground mt-1 sm:mt-2 leading-none">
                  LEADER
                </div>
                <div className="text-[8px] sm:text-[9px] font-bold text-blue-600 uppercase tracking-widest mt-0.5">
                  INNOVATION
                </div>
              </motion.div>

              {/* ── Raw PNG Stickers — visible on tablet/desktop ── */}
              <div className="hidden sm:block">
                {stickers.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, ...s.animation }}
                    transition={{
                      opacity: { delay: 0.3 + i * 0.1, duration: 0.5 },
                      scale: { delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 },
                      y: {
                        duration: s.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.1,
                      },
                      rotate: (s.animation as any).rotate
                        ? { duration: s.duration * 1.5, repeat: Infinity, ease: "easeInOut" }
                        : undefined,
                    }}
                    className="absolute z-30 pointer-events-none select-none flex items-center justify-center p-2"
                    style={{ ...s.pos }}
                  >
                    <div
                      className="absolute inset-0 rounded-full blur-2xl opacity-50"
                      style={{ backgroundColor: s.glow, transform: "scale(0.8)" }}
                    />
                    <img
                      src={s.src}
                      alt="Sticker"
                      width={s.size}
                      height={s.size}
                      className="relative z-10 object-contain drop-shadow-2xl"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Social icons below photo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute flex items-center gap-2.5 sm:gap-3 justify-center w-full -bottom-5 sm:-bottom-10"
              >
                {socials.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.label !== "Email" ? "_blank" : undefined}
                    rel={s.label !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    initial={{ opacity: 0, y: 20, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.9 + i * 0.1,
                      type: "spring",
                      bounce: 0.5,
                    }}
                    whileHover={{ scale: 1.2, y: -6 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                    style={{ background: s.gradient, boxShadow: s.shadow }}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ══ DIVIDER ══ */}
        <div className="flex items-center gap-3 sm:gap-4 pt-6 sm:pt-12 pb-8 sm:pb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-white px-4 py-1.5 rounded-full shadow-md"
            style={{ background: "linear-gradient(135deg, #7c3aed, #ec4899, #f97316)" }}
          >
            <BookOpen className="w-3.5 h-3.5 text-yellow-200" />
            <span>02 • MY STORY &amp; JOURNEY</span>
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>

        {/* ══ PART 2: PERSONAL STORYTELLING + 5 SPACED-OUT POLAROID GALLERY ══ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="pb-20 sm:pb-28 max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* ── LEFT: 5 POLAROID MOODBOARD (SPACED APART, NO OVERLAP) (6 Columns) ── */}
            <div className="lg:col-span-6 relative">
              {/* Soft Ambient Glow Behind Polaroid Wall */}
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-violet-500/15 via-pink-500/15 to-amber-400/15 blur-3xl pointer-events-none -z-10" />

              <div className="grid grid-cols-2 gap-3.5 sm:gap-7 items-start px-1 sm:px-0">
                {[
                  {
                    src: "/asset/story/google-gsa.jpg",
                    pos: "center 55%",
                    caption: "Vibes @ Google Office",
                    tag: "Google GSA",
                    tagColor: "#4285F4",
                    rotate: -2.5,
                    offsetClass: "",
                  },
                  {
                    src: "/asset/story/pidi-digdaya.jpg",
                    pos: "center 50%",
                    caption: "Tim Hackathon @ BI",
                    tag: "Hackathon",
                    tagColor: "#f59e0b",
                    rotate: 2.5,
                    offsetClass: "translate-y-2.5 sm:translate-y-5",
                  },
                  {
                    src: "/asset/story/jiep-intern.jpg",
                    pos: "center center",
                    caption: "Life as AI Intern @ JIEP",
                    tag: "Internship",
                    tagColor: "#0072ff",
                    rotate: 2,
                    offsetClass: "",
                  },
                  {
                    src: "/asset/story/mentor-blockdev.jpeg",
                    pos: "center center",
                    caption: "Sharing Session • BlockDev",
                    tag: "Mentoring",
                    tagColor: "#ec4899",
                    rotate: -2.5,
                    offsetClass: "translate-y-2.5 sm:translate-y-5",
                  },
                  {
                    src: "/asset/story/edufair-seminar.jpeg",
                    pos: "center center",
                    caption: "Workshop & Ngobrol Bareng",
                    tag: "Community",
                    tagColor: "#10b981",
                    rotate: -1.5,
                    offsetClass: "col-span-2 max-w-[200px] sm:max-w-[270px] mx-auto mt-1 sm:mt-2",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 24, rotate: item.rotate }}
                    whileInView={{ opacity: 1, y: 0, rotate: item.rotate }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, type: "spring", stiffness: 150 }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 0,
                      y: -4,
                      transition: { duration: 0.22 },
                    }}
                    className={`relative w-full bg-white p-2 sm:p-3 pb-3 sm:pb-4 rounded-2xl shadow-[0_14px_34px_-8px_rgba(15,23,42,0.16)] border border-slate-200/90 cursor-pointer group ${item.offsetClass}`}
                  >
                    {/* Translucent Washi Tape Accent on Top */}
                    <div
                      className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 sm:w-14 h-4 sm:h-5 rounded-xs opacity-80 backdrop-blur-xs shadow-2xs pointer-events-none"
                      style={{
                        background:
                          idx % 3 === 0
                            ? "rgba(96, 165, 250, 0.42)"
                            : idx % 3 === 1
                            ? "rgba(251, 191, 36, 0.45)"
                            : "rgba(244, 114, 182, 0.42)",
                        transform: `translateX(-50%) rotate(${idx % 2 === 0 ? "-2deg" : "3deg"})`,
                      }}
                    />

                    {/* Polaroid Photo Window */}
                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900">
                      <img
                        src={item.src}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                        style={{ objectPosition: item.pos }}
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2">
                        <span
                          className="px-2 py-0.5 rounded-full text-[8px] sm:text-[8.5px] font-black uppercase tracking-wider text-white shadow-sm"
                          style={{ backgroundColor: item.tagColor }}
                        >
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Polaroid Bottom Caption Strip */}
                    <div className="pt-2.5 px-1 flex items-center justify-between gap-1.5">
                      <p className="text-[10.5px] sm:text-xs font-extrabold text-slate-800 truncate">
                        {item.caption}
                      </p>
                      <span className="text-[8.5px] font-pixel text-slate-400 shrink-0">
                        0{idx + 1}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: WARM & AUTHENTIC STORYTELLING CARD (6 Columns) ── */}
            <div className="lg:col-span-6">
              <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-white/95 backdrop-blur-2xl border-2 border-slate-200/80 shadow-[0_25px_70px_-15px_rgba(99,102,241,0.14)] overflow-hidden p-6 sm:p-9 md:p-10">
                {/* Top Rainbow Accent Bar */}
                <div
                  className="absolute top-0 inset-x-0 h-2"
                  style={{
                    background:
                      "linear-gradient(90deg, #ffbe0b 0%, #fb5607 33%, #ff006e 66%, #8338ec 100%)",
                  }}
                />

                {/* Badge + Heading */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-[10px] font-black uppercase tracking-widest mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-fuchsia-500" />
                  <span>Get To Know Me • Sedikit Cerita Tentangku</span>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-[1.14] mb-5">
                  Suka Ngulik AI, Bikin Karya, &amp;{" "}
                  <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, #7c3aed 0%, #ec4899 50%, #f97316 100%)",
                    }}
                  >
                    Tumbuh Bareng Komunitas.
                  </span>
                </h2>

                {/* 3 Grounded, Personal & Relatable Story Points */}
                <div className="space-y-3.5 mb-6">
                  {[
                    {
                      num: "01",
                      title: "Senang Eksperimen & Ngulik Hal Baru",
                      color: "#7c3aed",
                      text: (
                        <>
                          Aku tipe orang yang gampang penasaran kalau lihat teknologi baru—apalagi seputar{" "}
                          <strong className="text-slate-900 font-bold">Generative AI</strong>. Dari yang awalnya cuma suka coba-coba *prompt* dan ngulik cara kerja LLM, lama-kelamaan jadi hobi merakit sistem AI yang beneran bisa mempermudah pekerjaan sehari-hari.
                        </>
                      ),
                    },
                    {
                      num: "02",
                      title: "Suka Mengubah Ide Jadi Produk Nyata",
                      color: "#ec4899",
                      text: (
                        <>
                          Selain ngoding, aku menikmati banget proses kreatif dari nol: mulai dari *brainstorming* ide bisnis, mendesain tampilan visualnya, sampai seru-seruan bangun prototipe bareng teman-teman di berbagai *hackathon* maupun proyek magang.
                        </>
                      ),
                    },
                    {
                      num: "03",
                      title: "Paling Semangat Kalau Ngobrol & Sharing",
                      color: "#f97316",
                      text: (
                        <>
                          Buatku, belajar teknologi bakal jauh lebih asyik kalau dibagiin ke orang lain. Makanya aku suka banget terlibat di kegiatan komunitas, ngisi *workshop*, bikin konten kreatif di media sosial, dan terjun ke kegiatan pengabdian masyarakat.
                        </>
                      ),
                    },
                  ].map((ch) => (
                    <div
                      key={ch.num}
                      className="p-3.5 sm:p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 hover:border-violet-200 transition-colors flex items-start gap-3.5"
                    >
                      <span
                        className="w-7 h-7 rounded-xl text-[10px] font-black text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs"
                        style={{ backgroundColor: ch.color }}
                      >
                        {ch.num}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-xs sm:text-sm font-black text-slate-900 mb-0.5">
                          {ch.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-medium">
                          {ch.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quote Strip */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white mb-6 relative overflow-hidden">
                  <Quote className="w-7 h-7 text-pink-400/25 absolute top-2.5 right-3" />
                  <p className="text-xs sm:text-[13px] text-slate-200 italic leading-relaxed relative z-10">
                    &ldquo;Tetap penasaran, berani mencoba hal baru, dan selalu nikmati setiap proses belajarnya.&rdquo;
                  </p>
                </div>

                {/* ── VIBRANT GRADIENT CTA BUTTONS (EXPERIENCE & SOCIAL FEED) ── */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  <Link
                    to="/experience"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_12px_28px_-6px_rgba(124,58,237,0.55)] hover:shadow-[0_16px_34px_-4px_rgba(124,58,237,0.75)] hover:-translate-y-0.5 active:translate-y-0 transition-all border border-white/25 group"
                    style={{
                      background:
                        "linear-gradient(135deg, #4f46e5 0%, #9333ea 50%, #ec4899 100%)",
                    }}
                  >
                    <Briefcase className="w-4 h-4 shrink-0" />
                    <span>Explore My Experience</span>
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/social"
                    className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_12px_28px_-6px_rgba(255,0,110,0.5)] hover:shadow-[0_16px_34px_-4px_rgba(251,86,7,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all border border-white/25 group"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff006e 0%, #fb5607 52%, #ffbe0b 100%)",
                    }}
                  >
                    <Sparkles className="w-4 h-4 shrink-0" />
                    <span>Lihat Social Media Feed</span>
                    <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
