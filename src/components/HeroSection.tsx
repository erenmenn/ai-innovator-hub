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
  ArrowDown,
  Quote,
} from "lucide-react";
import { Link } from "react-router-dom";

const ROLES = [
  {
    prefix: "Generative AI",
    suffix: "Engineer",
    icon: "⚡",
    gradient: "linear-gradient(135deg, #2563eb, #4f46e5)",
    glow: "rgba(37,99,235,0.45)",
    bar: "#2563eb",
  },
  {
    prefix: "AI",
    suffix: "Consultant",
    icon: "💡",
    gradient: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
    glow: "rgba(14,165,233,0.45)",
    bar: "#0ea5e9",
  },
  {
    prefix: "AI",
    suffix: "Content Creator",
    icon: "🎬",
    gradient: "linear-gradient(135deg, #f97316, #eab308)",
    glow: "rgba(249,115,22,0.45)",
    bar: "#f97316",
  },
  {
    prefix: "AI",
    suffix: "Educator",
    icon: "🎓",
    gradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    glow: "rgba(236,72,153,0.45)",
    bar: "#ec4899",
  },
  {
    prefix: "ML",
    suffix: "Engineer",
    icon: "🧠",
    gradient: "linear-gradient(135deg, #10b981, #06b6d4)",
    glow: "rgba(16,185,129,0.45)",
    bar: "#10b981",
  },
];

/* ─── Keychain Floating Assets for the Top Blue Splash (No Glow) ─── */
const keychainHeroAssets = [
  {
    src: "/asset/keychain/keychain_star.png",
    alt: "Gemini Rainbow Star Keychain",
    className:
      "w-16 h-16 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 -left-4 sm:-left-12 md:-left-20 lg:-left-28 top-1 sm:top-2",
    initialRotate: -14,
    animate: {
      y: [0, -14, 0],
      rotate: [-14, -6, -14],
      scale: [1, 1.05, 1],
    },
    duration: 4.2,
  },
  {
    src: "/asset/keychain/keychain_bulb.png",
    alt: "Voxel Lightbulb Gemini Keychain",
    className:
      "w-16 h-20 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-32 lg:h-36 -right-3 sm:-right-12 md:-right-20 lg:-right-28 top-6 sm:top-8",
    initialRotate: 12,
    animate: {
      y: [0, -16, 0],
      rotate: [12, 4, 12],
      scale: [1, 1.06, 1],
    },
    duration: 4.8,
  },
  {
    src: "/asset/keychain/keychain_pc.png",
    alt: "Orange Retro AI Computer Keychain",
    className:
      "w-16 h-16 sm:w-22 sm:h-22 md:w-24 md:h-24 lg:w-28 lg:h-28 -left-2 sm:-left-10 md:-left-16 lg:-left-22 -bottom-5 sm:-bottom-4",
    initialRotate: -8,
    animate: {
      y: [0, -12, 0],
      rotate: [-8, 5, -8],
      scale: [1, 1.05, 1],
    },
    duration: 5.1,
  },
];

/* ─── Festive Confetti Pieces for the Opening Hero ─── */
const confettiPieces = [
  { left: "4%", top: "14%", color: "#fde047", shape: "rect", w: 12, h: 6, rot: 25, dur: 5.2, delay: 0.1 },
  { left: "9%", top: "34%", color: "#f472b6", shape: "circle", w: 9, h: 9, rot: 0, dur: 6.1, delay: 0.5 },
  { left: "14%", top: "18%", color: "#34d399", shape: "rect", w: 14, h: 6, rot: -32, dur: 4.8, delay: 0.2 },
  { left: "18%", top: "58%", color: "#fb923c", shape: "diamond", w: 10, h: 10, rot: 45, dur: 5.6, delay: 0.9 },
  { left: "23%", top: "12%", color: "#ffffff", shape: "circle", w: 8, h: 8, rot: 0, dur: 4.5, delay: 0.4 },
  { left: "28%", top: "72%", color: "#fde047", shape: "rect", w: 13, h: 5, rot: 18, dur: 5.9, delay: 1.1 },
  { left: "33%", top: "15%", color: "#38bdf8", shape: "rect", w: 12, h: 5, rot: -22, dur: 5.3, delay: 0.7 },
  { left: "39%", top: "10%", color: "#fb7185", shape: "diamond", w: 9, h: 9, rot: 45, dur: 4.9, delay: 0.3 },
  { left: "46%", top: "13%", color: "#fde047", shape: "circle", w: 8, h: 8, rot: 0, dur: 5.7, delay: 0.8 },
  { left: "54%", top: "11%", color: "#4ade80", shape: "rect", w: 13, h: 5, rot: 35, dur: 5.0, delay: 0.2 },
  { left: "61%", top: "14%", color: "#f472b6", shape: "rect", w: 11, h: 5, rot: -28, dur: 6.2, delay: 0.6 },
  { left: "68%", top: "12%", color: "#fde047", shape: "diamond", w: 10, h: 10, rot: 45, dur: 4.7, delay: 0.4 },
  { left: "74%", top: "20%", color: "#ffffff", shape: "circle", w: 9, h: 9, rot: 0, dur: 5.4, delay: 1.0 },
  { left: "79%", top: "62%", color: "#34d399", shape: "rect", w: 14, h: 6, rot: 22, dur: 5.8, delay: 0.3 },
  { left: "84%", top: "16%", color: "#fb923c", shape: "rect", w: 12, h: 6, rot: -40, dur: 4.6, delay: 0.5 },
  { left: "89%", top: "38%", color: "#fde047", shape: "circle", w: 10, h: 10, rot: 0, dur: 6.0, delay: 0.9 },
  { left: "93%", top: "22%", color: "#f472b6", shape: "diamond", w: 11, h: 11, rot: 45, dur: 5.1, delay: 0.2 },
  { left: "95%", top: "54%", color: "#38bdf8", shape: "rect", w: 13, h: 5, rot: 28, dur: 5.5, delay: 0.7 },
  { left: "7%", top: "68%", color: "#a78bfa", shape: "rect", w: 12, h: 5, rot: -18, dur: 5.3, delay: 0.6 },
  { left: "91%", top: "70%", color: "#4ade80", shape: "rect", w: 12, h: 5, rot: 15, dur: 5.7, delay: 0.4 },
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
    mobileClass: "w-14 h-14 sm:w-[100px] sm:h-[100px]",
    pos: { top: "11%", left: "-2%" },
    glow: "rgba(255, 107, 138, 0.5)",
    animation: { y: [0, -15, 0], rotate: [-8, 8, -8] },
    duration: 4.5,
  },
  {
    src: "/asset/sparkle.png",
    size: 65,
    mobileClass: "w-10 h-10 sm:w-[65px] sm:h-[65px]",
    pos: { top: "36%", left: "1%" },
    glow: "rgba(255, 215, 71, 0.5)",
    animation: { scale: [1, 1.2, 1], rotate: [0, 20, 0] },
    duration: 4,
  },
  {
    src: "/asset/smile emoji.png",
    size: 85,
    mobileClass: "w-12 h-12 sm:w-[85px] sm:h-[85px]",
    pos: { top: "31%", right: "-1%" },
    glow: "rgba(64, 201, 127, 0.4)",
    animation: { rotate: [-15, 15, -15], y: [0, -10, 0] },
    duration: 5.5,
  },
  {
    src: "/asset/api.png",
    size: 115,
    mobileClass: "w-16 h-16 sm:w-[115px] sm:h-[115px]",
    pos: { bottom: "14%", right: "-1%" },
    glow: "rgba(247, 103, 7, 0.5)",
    animation: { scale: [1, 1.15, 1], y: [0, -12, 0] },
    duration: 3.5,
  },
  {
    src: "/asset/rocket.png",
    size: 75,
    mobileClass: "w-11 h-11 sm:w-[75px] sm:h-[75px]",
    pos: { bottom: "30%", left: "1%" },
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

  const scrollToProfile = () => {
    const el = document.getElementById("profile-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden pixel-grid">
      {/* ══════════════════════════════════════════════════════════════════
          PART 0: GOOGLE-STYLE OPENING SPLASH (SMOOTH BLUE-TO-WHITE GRADIENT + CONFETTI)
      ══════════════════════════════════════════════════════════════════ */}
      <div className="relative w-full min-h-[90vh] sm:min-h-[94vh] flex flex-col items-center justify-center pt-28 sm:pt-32 pb-28 sm:pb-36 px-4 overflow-hidden">
        {/* ── Ultra-Smooth Blue-to-Light-Blue-to-White Gradient (Never Dark at Bottom) ── */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "linear-gradient(180deg, #1358d4 0%, #1a6ce8 26%, #2b82f6 48%, #5ba4fc 68%, #9fd0ff 82%, #ddf0ff 92%, rgba(255,255,255,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.78) 72%, rgba(0,0,0,0.35) 88%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.78) 72%, rgba(0,0,0,0.35) 88%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Soft Bright Sky Center Highlight */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 45% at 50% 34%, rgba(125, 211, 252, 0.25) 0%, rgba(59, 130, 246, 0.08) 55%, transparent 80%)",
          }}
        />

        {/* ── Festive Floating Confetti Layer ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10" aria-hidden="true">
          {confettiPieces.map((c, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: -20, rotate: c.rot }}
              animate={{
                opacity: [0.55, 0.95, 0.55],
                y: [0, 26, 0],
                x: [0, idx % 2 === 0 ? 12 : -12, 0],
                rotate: [c.rot, c.rot + (idx % 2 === 0 ? 140 : -140), c.rot],
              }}
              transition={{
                duration: c.dur,
                delay: c.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute shadow-2xs"
              style={{
                left: c.left,
                top: c.top,
                width: `${c.w}px`,
                height: `${c.h}px`,
                backgroundColor: c.color,
                borderRadius:
                  c.shape === "circle"
                    ? "9999px"
                    : c.shape === "diamond"
                    ? "2px"
                    : "3px",
              }}
            />
          ))}
        </div>

        {/* ── Main Centered Typography + Floating 3D Keychain Assets (No Glow) ── */}
        <div className="relative z-20 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Headline Wrapper with Floating 3D Keychains */}
          <div className="relative inline-block px-6 sm:px-12 md:px-16 py-2">
            {/* Floating 3D Keychain Assets from Google Drive — Crisp without Glow */}
            {keychainHeroAssets.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.4, rotate: item.initialRotate }}
                animate={{
                  opacity: 1,
                  scale: item.animate.scale,
                  y: item.animate.y,
                  rotate: item.animate.rotate,
                }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.15 + idx * 0.12 },
                  y: {
                    duration: item.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: item.duration * 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: item.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`absolute z-20 pointer-events-none select-none ${item.className}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="relative z-10 w-full h-full object-contain drop-shadow-[0_10px_18px_rgba(15,23,42,0.22)]"
                />
              </motion.div>
            ))}

            {/* Clean & Playfully Colored Geometric Headline (No Eyes) */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-extrabold uppercase tracking-[-0.03em] leading-[1.04] text-[2.35rem] sm:text-[4rem] md:text-[5.1rem] lg:text-[5.9rem] drop-shadow-[0_4px_16px_rgba(15,52,130,0.22)] select-none"
            >
              <span className="block text-white">
                HELLO,{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #fef08a 0%, #fde047 50%, #facc15 100%)",
                  }}
                >
                  IT&apos;S ME
                </span>
              </span>
              <span className="block text-white">EMIRSYAH</span>
              <span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #ffffff 0%, #fef08a 38%, #bae6fd 72%, #ffffff 100%)",
                }}
              >
                RAFSANJANI
              </span>
            </motion.h1>
          </div>

          {/* Subtitle Section — Colorful Accents & High Readability */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 max-w-2xl mx-auto space-y-2.5 sm:space-y-3 px-2"
          >
            <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight drop-shadow-[0_2px_10px_rgba(15,52,130,0.2)]">
              <span className="text-white">Lead, </span>
              <span className="text-[#fde047]">Innovate, </span>
              <span className="text-[#e0f2fe]">Inspire</span>
            </h2>
            <p className="font-body text-white text-xs sm:text-base md:text-lg font-semibold leading-relaxed drop-shadow-[0_2px_8px_rgba(15,52,130,0.22)]">
              Membangun inovasi berbasis{" "}
              <span className="text-[#fef08a] font-extrabold">Generative AI</span>,{" "}
              <span className="text-[#e0f2fe] font-extrabold">Agentic RAG</span> &amp;{" "}
              <span className="text-[#fde68a] font-extrabold">Machine Learning</span>.
              <br className="hidden sm:block" /> Shape the future of tech, dari riset kampus hingga dampak nyata di industri.
            </p>
          </motion.div>

          {/* "Detail ↓" Pill Button to Smooth-Scroll into Profile */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 sm:mt-10"
          >
            <button
              type="button"
              onClick={scrollToProfile}
              className="group inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-white font-display font-bold text-sm sm:text-base border-2 border-white/60 shadow-[0_10px_25px_rgba(29,110,231,0.35)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #1557c0 0%, #1d76f2 55%, #0ea5e9 100%)",
              }}
            >
              <span>Detail</span>
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4 text-white" />
              </motion.span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* ── Background clouds for the White Profile & Story Area ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ opacity: [0.16, 0.3, 0.16] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-[38%] left-[10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-blue-400/20 blur-[100px] sm:blur-[120px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 20, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[20%] right-[10%] w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-indigo-400/20 blur-[100px] sm:blur-[120px] rounded-full"
        />
      </div>

      <div id="profile-section" className="container mx-auto px-4 sm:px-6 relative z-10 scroll-mt-20">
        {/* ══ PART 1: PROFILE SECTION (REVEALED ON SCROLL) ══ */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center pt-6 sm:pt-12 lg:py-16 pb-10 sm:pb-16">
          {/* Left: Text + badges */}
          <div className="space-y-4 sm:space-y-5 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2.5 sm:gap-3 px-4 sm:px-5 py-2 rounded-full border border-sky-400/40 text-white font-display font-bold text-[10px] sm:text-xs tracking-wider uppercase shadow-[0_8px_24px_rgba(14,165,233,0.3)] cursor-default"
              style={{ background: "linear-gradient(135deg,#0284c7,#2563eb)" }}
            >
              <span className="bg-white/20 px-2 py-0.5 rounded-full text-white">01</span>
              <span>PROFILE • AI INNOVATOR &amp; ENGINEER</span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300" />
            </motion.div>

            {/* Clean Geometric Section Heading with Bright Blue Gradient Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
            >
              <h2 className="font-display font-extrabold text-[2.1rem] sm:text-[3.1rem] md:text-[4rem] lg:text-[4.6rem] tracking-[-0.03em] leading-[1.03] uppercase">
                <span className="block text-slate-900">HELLO, I&apos;M</span>
                <span
                  className="block text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #0055ff 0%, #0ea5e9 45%, #38bdf8 78%, #2563eb 100%)",
                  }}
                >
                  EMIRSYAH
                </span>
                <span
                  className="block text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, #1d4ed8 0%, #0284c7 50%, #06b6d4 100%)",
                  }}
                >
                  RAFSANJANI.
                </span>
              </h2>
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

              {/* ── Raw PNG Stickers — visible on BOTH mobile & desktop ── */}
              <div>
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
                    className="absolute z-30 pointer-events-none select-none flex items-center justify-center p-1 sm:p-2"
                    style={{ ...s.pos }}
                  >
                    <img
                      src={s.src}
                      alt="Sticker"
                      width={s.size}
                      height={s.size}
                      className={`relative z-10 object-contain drop-shadow-xl ${s.mobileClass}`}
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
