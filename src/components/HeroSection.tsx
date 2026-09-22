import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download, Briefcase, Cpu, Heart, Sparkles, GraduationCap, Trophy,
  Target, Users, Lightbulb, BrainCircuit, LayoutTemplate,
  Send, Bot, User as UserIcon, Zap,
} from "lucide-react";

/* ─── Social Links ─── */
const socials = [
  {
    label: "GitHub", href: "https://github.com/erenmenn",
    gradient: "linear-gradient(135deg,#1a1a2e,#0f3460)",
    shadow: "rgba(15,52,96,0.5)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn", href: "https://www.linkedin.com/in/emirsyah-rafsanjani/",
    gradient: "linear-gradient(135deg,#0077b5,#00a0dc)",
    shadow: "rgba(0,119,181,0.5)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Instagram", href: "https://www.instagram.com/emirzyah/",
    gradient: "linear-gradient(135deg,#f09433,#dc2743,#bc1888)",
    shadow: "rgba(220,39,67,0.5)",
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
    gradient: "linear-gradient(135deg,#7c3aed,#ec4899)",
    shadow: "rgba(124,58,237,0.5)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

/* ─── Chat ─── */
const chatScript = [
  { user: "Gimana cara kamu kerja kalau ada masalah kompleks?", bot: "Aku break down masalahnya dulu jadi bagian kecil, cari root cause-nya, lalu rancang solusi yang terukur. Fokus ke impact nyata. 🎯" },
  { user: "Peran kamu di tim biasanya apa?", bot: "Aku sering jadi Leader & Project Designer — bangun visi tim, atur workflow, dan pastiin semua berjalan dari konsep sampai eksekusi. 👑" },
  { user: "Seberapa dalam kamu paham AI?", bot: "Aku udah implement NLP, computer vision, dan LLM pipelines. Prinsipku: AI harus solve masalah nyata, bukan hanya terlihat keren. 🚀" },
];

const traits = [
  { icon: Target,       label: "Problem Solving",  query: "Gimana kemampuan problem solving Emir?", bg: "linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC)", shadow: "rgba(67,100,247,0.5)" },
  { icon: Users,        label: "Leadership",        query: "Ka emir ada jiwa leadership ga?", bg: "linear-gradient(135deg, #00B4DB, #00F2FE)", shadow: "rgba(0,180,219,0.5)" },
  { icon: Lightbulb,    label: "Creative Thinking", query: "Bisa ceritakan kemampuan creative thinking Emir?", bg: "linear-gradient(135deg, #FF416C, #FF4B2B)", shadow: "rgba(255,65,108,0.5)" },
  { icon: BrainCircuit, label: "Analytical",        query: "Seberapa kuat kemampuan analytical Emir?", bg: "linear-gradient(135deg, #7F00FF, #E100FF)", shadow: "rgba(127,0,255,0.5)" },
  { icon: LayoutTemplate,label: "Project Design",  query: "Apakah Emir punya pengalaman dalam project design?", bg: "linear-gradient(135deg, #11998E, #38EF7D)", shadow: "rgba(17,153,142,0.5)" },
  { icon: Sparkles,     label: "AI Solutions",      query: "Apa saja AI Solutions yang pernah dibuat Emir?", bg: "linear-gradient(135deg, #FF007F, #FF758C)", shadow: "rgba(255,0,127,0.5)" },
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

function TypingDots() {
  return (
    <div className="flex items-end gap-2 mb-2">
      <div className="w-7 h-7 rounded-full bg-cyan-100 flex items-center justify-center">
        <Bot className="w-3.5 h-3.5 text-cyan-600" />
      </div>
      <div className="px-3 py-2.5 rounded-2xl rounded-bl-sm bg-white border border-slate-100 shadow-sm">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map(i => (
            <motion.div key={i} className="w-1.5 h-1.5 rounded-full bg-cyan-500"
              animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ChatBot() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>(() => {
    const seed: { role: "user" | "bot"; text: string }[] = [
      { role: "bot", text: "Hai! 👋 Tanya aku tentang cara kerja, skill, atau pengalaman di AI." },
    ];
    chatScript.forEach(s => {
      seed.push({ role: "user", text: s.user });
      seed.push({ role: "bot",  text: s.bot  });
    });
    return seed;
  });
  const [typing, setTyping] = useState(false);
  const [input, setInput]   = useState("");
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed || typing) return;
    setMessages(p => [...p, { role: "user", text: trimmed }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(p => [...p, { role: "bot", text: "Pertanyaan bagus! Silakan cek portofolio atau hubungi aku langsung ya. 😊" }]);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 shrink-0"
        style={{ background: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)" }}
      >
        <div className="w-9 h-9 rounded-full bg-white/25 backdrop-blur-md flex items-center justify-center border border-white/40 shrink-0 shadow-md">
          <Bot className="w-4.5 h-4.5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[13px] font-black text-white leading-none tracking-wide">Chat with Emir</p>
          <div className="flex items-center gap-1.5 mt-1">
            <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block"
              animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <span className="text-[10px] text-white/90 font-bold">online · AI Assistant</span>
          </div>
        </div>
        <div className="flex gap-1.5 shrink-0">
          {["bg-red-400", "bg-yellow-400", "bg-green-400"].map(c => (
            <div key={c} className={`w-2.5 h-2.5 rounded-full ${c} shadow-sm`} />
          ))}
        </div>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-3 py-3 min-h-0 space-y-2.5"
        style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #e0f2fe 100%)" }}
      >
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: i * 0.03 }}
              className={`flex items-end gap-1.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
              <div className={`w-6.5 h-6.5 rounded-full flex items-center justify-center shrink-0 shadow-md ${
                msg.role === "bot"
                  ? "bg-gradient-to-br from-cyan-500 to-blue-600"
                  : "bg-gradient-to-br from-slate-700 to-slate-900"
              }`}>
                {msg.role === "bot"
                  ? <Bot className="w-3.5 h-3.5 text-white" />
                  : <UserIcon className="w-3.5 h-3.5 text-white" />}
              </div>
              <div
                className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-[12px] leading-relaxed font-semibold shadow-md ${
                  msg.role === "user"
                    ? "text-white rounded-br-none"
                    : "text-slate-800 bg-white border border-cyan-100 rounded-bl-none"
                }`}
                style={msg.role === "user" ? { background: "linear-gradient(135deg, #0072ff, #00c6ff)" } : {}}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && <TypingDots />}
      </div>

      {/* Input */}
      <div className="flex gap-2 px-3 py-2.5 bg-white border-t border-slate-100 shrink-0">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder="Ketik pertanyaanmu..."
          className="flex-1 text-[12px] px-3.5 py-2 rounded-xl border border-cyan-200 bg-cyan-50/30 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 placeholder:text-slate-400 font-medium transition-all"
        />
        <motion.button whileTap={{ scale: 0.9 }} onClick={send} disabled={typing}
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white disabled:opacity-40 shrink-0 shadow-md"
          style={{ background: "linear-gradient(135deg, #0072ff, #00c6ff)" }}>
          <Send className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT — Hero + About merged
══════════════════════════════════════════════════════ */
const HeroSection = () => (
  <section id="home" className="relative overflow-hidden pixel-grid">

    {/* ── Background clouds ── */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div animate={{ opacity: [0.12, 0.25, 0.12] }} transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-[10%] left-[15%] w-[600px] h-[600px] bg-purple-400/20 blur-[120px] rounded-full" />
      <motion.div animate={{ opacity: [0.08, 0.18, 0.08] }} transition={{ duration: 20, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[20%] right-[10%] w-[700px] h-[700px] bg-blue-400/15 blur-[120px] rounded-full" />
    </div>

    <div className="container mx-auto px-6 relative z-10">

      {/* ══ PART 1: HERO ══ */}
      <div className="grid lg:grid-cols-2 gap-12 items-center py-24">

        {/* Left: Name + info + buttons */}
        <div className="space-y-8 z-10 w-full xl:pl-8 relative">

          {/* Status badge */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-white border-2 border-indigo-200 shadow-[4px_4px_0px_#818cf8] cursor-pointer">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </div>
            <span className="text-[10px] font-pixel text-indigo-600 tracking-widest uppercase mt-0.5">STATUS: INNOVATING...</span>
          </motion.div>

          {/* Name */}
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter">
            Hi, I'm<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 via-fuchsia-600 to-rose-600 inline-block"
              style={{ filter: "drop-shadow(3px 3px 0px rgba(139, 92, 246, 0.4)) drop-shadow(0px 15px 30px rgba(217, 70, 239, 0.5))" }}>
              Emirsyah<br />Rafsanjani
            </span>
          </motion.h1>

          {/* Sub info */}
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            className="flex flex-wrap items-center gap-2.5 text-slate-500 font-semibold text-sm md:text-base">
            <span>Universitas Singaperbangsa</span>
            <span className="text-slate-300">|</span>
            <span>Sistem Informasi</span>
            <span className="text-slate-300">|</span>
            <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100">Active Student</span>
          </motion.div>

          {/* Role tags */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3">
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
            <a href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-2xl font-pixel text-xs uppercase tracking-widest border-2 border-violet-800 shadow-[5px_5px_0px_#3b0764] hover:shadow-[2px_2px_0px_#3b0764] hover:translate-x-1 hover:translate-y-1 transition-all">
              <Zap className="w-4 h-4" /> Hire Me
            </a>
            <a href="/asset/Emirsyah_Rafsanjani_CV.pdf" download
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
                  style={{ background: s.gradient, boxShadow: `0 8px 20px ${s.shadow}` }}>
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══ DIVIDER ══ */}
      <div className="flex items-center gap-4 pb-4">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 px-2">About me</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* ══ PART 2: PASSIONATE ABOUT INTELLIGENCE ══ */}
      <div className="grid lg:grid-cols-2 gap-16 items-start py-16 max-w-7xl mx-auto" id="about">

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8">

          <h2 className="text-[2.4rem] md:text-[3.2rem] lg:text-[4rem] font-black tracking-tighter leading-[0.88] text-slate-900 uppercase mb-6">
            <span className="block drop-shadow-sm">PASSIONATE</span>
            <em className="font-playfair italic font-medium lowercase tracking-normal text-transparent bg-clip-text text-[2.8rem] md:text-[4rem] lg:text-[5.2rem] ml-6 md:ml-12 leading-none block pb-4 pt-1 -mb-4"
              style={{ backgroundImage: "linear-gradient(to right, #ec4899, #8b5cf6, #0ea5e9)" }}>about</em>
            <span className="block text-transparent bg-clip-text mt-2"
              style={{ backgroundImage: "linear-gradient(to right, #0a0a0f, #312e81, #4338ca)" }}>INTELLIGENCE.</span>
          </h2>

          {/* Quote */}
          <motion.div whileHover={{ y: -3 }} className="border-l-4 pl-5 py-1" style={{ borderColor: "#7c3aed" }}>
            <p className="text-slate-700 text-base md:text-lg leading-relaxed font-medium">
              Kita hidup di era AI, dan kuncinya adalah{" "}
              <span className="font-bold text-emerald-600">adaptasi</span>.
              AI bukan penghancur karir — melainkan{" "}
              <span className="font-bold text-slate-900">partner kolaborasi</span>.
              Manusia perlu menjadi{" "}
              <span className="font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg,#6366f1,#ec4899)" }}>AI Evaluator</span>{" "}
              — sutradara yang mengarahkan kecerdasan buatan untuk dampak nyata.
            </p>
          </motion.div>

          {/* Trait grid — ultra bright vibrant gradients with pure white text */}
          <div className="grid grid-cols-2 gap-3.5">
            {traits.map((t, i) => (
              <motion.div key={t.label}
                onClick={() => window.dispatchEvent(new CustomEvent("open-hrd-chat", { detail: t.query }))}
                initial={{ opacity: 0, y: 12, scale: 0.92 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 py-3.5 px-4 rounded-2xl cursor-pointer border-2 border-white/40 transition-all duration-200"
                style={{
                  background: t.bg,
                  boxShadow: `0 10px 25px ${t.shadow}, inset 0 1px 0 rgba(255,255,255,0.4)`,
                }}>
                <div className="w-8 h-8 rounded-xl bg-white/25 border border-white/40 flex items-center justify-center shrink-0 backdrop-blur-md pointer-events-none shadow-sm">
                  <t.icon className="w-4 h-4 text-white pointer-events-none" />
                </div>
                <span className="text-[13px] font-black text-white tracking-wide pointer-events-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
                  {t.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Chatbot — premium phone shape */}
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center group cursor-pointer"
          onClick={() => window.dispatchEvent(new CustomEvent("open-hrd-chat"))}>

          <div className="relative" style={{ width: 340 }}>
            {/* Decorative glow behind phone */}
            <div
              className="absolute inset-0 rounded-[3rem] blur-3xl opacity-25 -z-10"
              style={{ background: "linear-gradient(135deg,#6366f1,#a855f7,#ec4899)", transform: "scale(1.1) translateY(10px)" }}
            />

            {/* Phone frame */}
            <div
              className="relative rounded-[2.5rem] overflow-hidden border-[5px] transition-all duration-500 group-hover:scale-[1.03]"
              style={{
                height: 600,
                borderColor: "#1e1b4b",
                background: "#0f0c29",
                boxShadow: [
                  "0 40px 100px rgba(99,102,241,0.3)",
                  "0 0 0 1px rgba(139,92,246,0.15)",
                  "inset 0 1px 0 rgba(255,255,255,0.08)",
                ].join(", "),
              }}
            >
              {/* Phone notch */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 z-30 flex items-center justify-center pointer-events-none"
                style={{ background: "#1e1b4b", borderRadius: "0 0 1.2rem 1.2rem" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
                  <div className="w-10 h-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Side buttons */}
              <div className="absolute left-[-7px] top-28 w-1.5 h-8 rounded-l bg-slate-700" />
              <div className="absolute left-[-7px] top-40 w-1.5 h-12 rounded-l bg-slate-700" />
              <div className="absolute right-[-7px] top-32 w-1.5 h-16 rounded-r bg-slate-700" />

              {/* Hover overlay */}
              <div className="absolute inset-0 z-40 bg-transparent group-hover:bg-violet-900/10 transition-colors flex items-center justify-center">
                <motion.div
                  className="opacity-0 group-hover:opacity-100 px-5 py-2.5 bg-slate-900/90 backdrop-blur-md text-white font-black text-sm rounded-2xl pointer-events-none transition-all duration-300 border border-violet-500/30"
                  style={{ boxShadow: "0 8px 32px rgba(99,102,241,0.4)" }}
                >
                  💬 Buka Chat Lengkap
                </motion.div>
              </div>

              {/* Chat content */}
              <div className="h-full pt-6 pointer-events-none">
                <ChatBot />
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-24 h-1 rounded-full bg-white/20 pointer-events-none" />
            </div>

            {/* AI Live badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", bounce: 0.6 }}
              className="absolute -top-4 -right-6 z-20 px-3 py-2 rounded-2xl text-white text-[10px] font-black uppercase tracking-widest border border-white/20"
              style={{ background: "linear-gradient(135deg,#f43f5e,#fb923c)", boxShadow: "0 8px 24px rgba(244,63,94,0.5)" }}
            >
              🤖 AI Live
            </motion.div>
          </div>
        </motion.div>
      </div>

    </div>
  </section>
);

export default HeroSection;
