import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BrainCircuit,
  Zap,
  Layout,
  Server,
  Target,
  Users,
  Lightbulb,
  LayoutTemplate,
  Sparkles,
  Award,
  Cpu,
  Compass,
  CheckCircle2,
  Code2,
  Database,
  Layers,
  Search,
  Flame,
  Star
} from "lucide-react";

/* ─── Skill Categories Data ─────────────────────────── */
const categories = [
  {
    id: "genai",
    label: "Generative AI & LLM Systems",
    shortLabel: "Generative AI",
    badge: "Core Specialization",
    Icon: Zap,
    grad: "linear-gradient(135deg, #ec4899 0%, #f97316 100%)",
    glow: "rgba(236,72,153,0.35)",
    border: "border-pink-300 dark:border-pink-800",
    bgAccent: "bg-pink-500/10",
    description: "Arsitektur RAG modular, multi-agent orchestration, reranking hybrid, dan integrasi model fondasi tingkat lanjut.",
    skills: [
      { name: "OpenAI API", level: "Production", icon: "https://cdn.simpleicons.org/openai/000000" },
      { name: "LangChain", level: "Expert", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "LangGraph", level: "Advanced", icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "Groq LPU", level: "Ultra-Fast", icon: "https://cdn.simpleicons.org/groq/F55036" },
      { name: "FAISS Vector DB", level: "Expert", icon: "https://cdn.simpleicons.org/meta/0467DF" },
      { name: "HuggingFace", level: "Models Hub", icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "Prompt Engineering", level: "Mastered", icon: "https://cdn.simpleicons.org/anthropic/000000" },
      { name: "Modular RAG", level: "Architecture", icon: "https://cdn.simpleicons.org/blueprint/137CBD" },
    ],
  },
  {
    id: "ml",
    label: "Machine Learning & Deep Learning",
    shortLabel: "Machine Learning",
    badge: "Certified Mahir",
    Icon: BrainCircuit,
    grad: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
    glow: "rgba(99,102,241,0.35)",
    border: "border-indigo-300 dark:border-indigo-800",
    bgAccent: "bg-indigo-500/10",
    description: "Pipeline training data, Convolutional Neural Networks (CNN), evaluasi metrik, dan model prediksi terapan.",
    skills: [
      { name: "Python", level: "Primary", icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "TensorFlow", level: "Certified", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
      { name: "PyTorch", level: "Advanced", icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "Scikit-Learn", level: "Expert", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Keras", level: "Deep Neural", icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
      { name: "OpenCV", level: "Computer Vision", icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
      { name: "Pandas & NumPy", level: "Data Science", icon: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "Jupyter Notebook", level: "Analysis", icon: "https://cdn.simpleicons.org/jupyter/F37626" },
    ],
  },
  {
    id: "frontend",
    label: "Modern Frontend & UI/UX Design",
    shortLabel: "Frontend & UI",
    badge: "Pixel-Perfect",
    Icon: Layout,
    grad: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    glow: "rgba(6,182,212,0.35)",
    border: "border-cyan-300 dark:border-cyan-800",
    bgAccent: "bg-cyan-500/10",
    description: "Antarmuka responsif berperforma tinggi, animasi interaktif dengan Framer Motion, dan visual design system.",
    skills: [
      { name: "Next.js 15", level: "App Router", icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "React 18/19", level: "Component Flow", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript", level: "Strict Typing", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS", level: "Utility Styling", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Framer Motion", level: "Micro-Animation", icon: "https://cdn.simpleicons.org/framer/0055FF" },
      { name: "Figma", level: "Design System", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Canva Pro", level: "Visual Identity", icon: "https://cdn.simpleicons.org/canva/00C4CC" },
      { name: "Lucide Icons", level: "Design Kit", icon: "https://cdn.simpleicons.org/feather/000000" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Data Infrastructure",
    shortLabel: "Backend & Data",
    badge: "Scalable APIs",
    Icon: Server,
    grad: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
    glow: "rgba(16,185,129,0.35)",
    border: "border-emerald-300 dark:border-emerald-800",
    bgAccent: "bg-emerald-500/10",
    description: "Microservices REST API, database relasional & vektor, ORM modern, serta containerized deployment.",
    skills: [
      { name: "FastAPI", level: "Async REST", icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Flask", level: "Microframework", icon: "https://cdn.simpleicons.org/flask/000000" },
      { name: "Supabase", level: "BaaS & Auth", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
      { name: "PostgreSQL", level: "Relational DB", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Prisma ORM", level: "Data Modeling", icon: "https://cdn.simpleicons.org/prisma/2D3748" },
      { name: "Docker", level: "Container", icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Git & GitHub", level: "Version Control", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "RESTful API", level: "Integration", icon: "https://cdn.simpleicons.org/postman/FF6C37" },
    ],
  },
];

/* ─── Soft Skills / Core Traits ─────────────────────── */
const softTraits = [
  {
    icon: Target,
    label: "Problem Solving",
    subtitle: "Root Cause & Impact Focus",
    detail: "Menganalisis inti masalah kompleks sebelum melompat ke solusi teknis. Selalu memprioritaskan dampak bisnis nyata.",
    query: "Gimana kemampuan problem solving Emir?",
    bg: "linear-gradient(135deg, #0052D4, #4364F7, #6FB1FC)",
    shadow: "rgba(67,100,247,0.4)"
  },
  {
    icon: Users,
    label: "Leadership & Direction",
    subtitle: "Team Vision & Empowerment",
    detail: "Berpengalaman memimpin tim hackathon dan koordinator akademik dalam merancang visi proyek dan workflow kerja yang solid.",
    query: "Ka emir ada jiwa leadership ga?",
    bg: "linear-gradient(135deg, #00B4DB, #00F2FE)",
    shadow: "rgba(0,180,219,0.4)"
  },
  {
    icon: Lightbulb,
    label: "Creative Thinking",
    subtitle: "Out-of-the-box Innovation",
    detail: "Menghubungkan domain yang tampaknya berbeda (seperti Agritech + AI, atau Brand Identity + Algoritma) untuk melahirkan inovasi baru.",
    query: "Bisa ceritakan kemampuan creative thinking Emir?",
    bg: "linear-gradient(135deg, #FF416C, #FF4B2B)",
    shadow: "rgba(255,65,108,0.4)"
  },
  {
    icon: BrainCircuit,
    label: "Analytical Logic",
    subtitle: "Mathematical Rigor & Data Flow",
    detail: "Kuat dalam logika matematika terapan, representasi vektor berdimensi tinggi, serta arsitektur alur data yang konsisten.",
    query: "Seberapa kuat kemampuan analytical Emir?",
    bg: "linear-gradient(135deg, #7F00FF, #E100FF)",
    shadow: "rgba(127,0,255,0.4)"
  },
  {
    icon: LayoutTemplate,
    label: "Project & Product Design",
    subtitle: "From Idea to Functional System",
    detail: "Menerjemahkan ide abstrak menjadi cetak biru produk, user flow, wireframe, hingga prototype yang siap dideploy.",
    query: "Apakah Emir punya pengalaman dalam project design?",
    bg: "linear-gradient(135deg, #11998E, #38EF7D)",
    shadow: "rgba(17,153,142,0.4)"
  },
  {
    icon: Sparkles,
    label: "AI Solutions Architecture",
    subtitle: "Contextual & Practical AI Engine",
    detail: "Membangun sistem AI yang hemat biaya, reliabel terhadap halusinasi, dan terintegrasi mulus dengan user experience.",
    query: "Apa saja AI Solutions yang pernah dibuat Emir?",
    bg: "linear-gradient(135deg, #FF007F, #FF758C)",
    shadow: "rgba(255,0,127,0.4)"
  },
];

/* ─── Main Skills Section ────────────────────────────── */
const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const totalTechSkills = categories.reduce((acc, c) => acc + c.skills.length, 0);

  const filteredCategories = categories.filter((cat) => {
    if (activeTab !== "all" && cat.id !== activeTab) return false;
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const matchCat = cat.label.toLowerCase().includes(query) || cat.description.toLowerCase().includes(query);
    const matchSkills = cat.skills.some((s) => s.name.toLowerCase().includes(query) || s.level.toLowerCase().includes(query));
    return matchCat || matchSkills;
  });

  return (
    <section id="skills" className="py-16 sm:py-24 relative overflow-hidden pixel-grid">
      {/* Background ambient lighting orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[800px] h-[350px] sm:h-[500px] bg-gradient-to-r from-violet-500/15 via-pink-500/15 to-sky-500/15 rounded-full blur-[110px] sm:blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[280px] sm:w-[450px] h-[280px] sm:h-[450px] bg-indigo-500/10 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* ── Unified Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2.5 sm:gap-3 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-white font-black text-[10px] sm:text-xs tracking-widest uppercase shadow-[0_8px_25px_rgba(139,92,246,0.35)] mb-4 sm:mb-6 transition-all border-2 border-white/40 cursor-default"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #ec4899, #f97316)" }}
              >
                <span className="bg-white/25 px-2 py-0.5 rounded-lg text-white font-mono">02</span>
                <span>SKILLS &amp; ARSENAL</span>
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300 animate-spin" />
              </div>
              
              <h1 className="font-display font-extrabold text-[2.1rem] sm:text-[3.3rem] md:text-[4.3rem] lg:text-[4.9rem] tracking-[-0.03em] leading-[1.03] text-slate-900 uppercase">
                <span className="block text-slate-900">SOFT &amp; TECHNICAL</span>
                <span className="block text-[#1967d2]">EXPERTISE</span>
              </h1>
            </div>

            {/* Total Counter Badge (Pixel Brutalist Style) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3.5 sm:gap-4 p-4 sm:p-5 px-5 sm:px-7 rounded-2xl sm:rounded-[2rem] bg-white/90 backdrop-blur-xl border-2 border-slate-100 shadow-xl self-start md:self-auto hover:-translate-y-1 transition-transform"
            >
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg font-black text-xl sm:text-2xl shrink-0"
                style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
              >
                {totalTechSkills}
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <span>Tech Arsenal</span>
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                </span>
                <span className="text-[11px] text-muted-foreground font-semibold">
                  + 6 Core Leadership Traits
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            BAGIAN 1 (ATAS): SOFT SKILLS & PHILOSOPHY
        ══════════════════════════════════════════════════════════ */}
        <div className="mb-14 sm:mb-20 space-y-6 sm:space-y-8">
          {/* Section Sub-header */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3 sm:gap-3.5">
              <div
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center text-white shadow-md font-black shrink-0"
                style={{ background: "linear-gradient(135deg, #8b5cf6, #3b82f6)" }}
              >
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <h2 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight flex items-center gap-2">
                  <span>1. Soft Skills &amp; Cognitive Mindset</span>
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                </h2>
                <p className="text-[11px] sm:text-xs text-muted-foreground font-medium">
                  Prinsip kepemimpinan, adaptasi cerdas, dan filosofi problem-solving dalam merancang sistem AI.
                </p>
              </div>
            </div>
          </div>

          {/* Quote & Philosophy Banner */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-5 sm:p-7 md:p-9 rounded-3xl sm:rounded-[2.5rem] border-2 border-white/80 bg-gradient-to-br from-white via-indigo-50/40 to-pink-50/30 shadow-xl relative overflow-hidden backdrop-blur-md"
            style={{
              boxShadow: "0 20px 50px -15px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <div className="border-l-4 pl-4 sm:pl-6 py-1" style={{ borderColor: "#8b5cf6" }}>
              <p className="text-slate-800 text-sm sm:text-base md:text-lg leading-relaxed font-semibold">
                "Kita hidup di era transformasi AI, dan kuncinya adalah{" "}
                <span className="text-emerald-600 font-black underline decoration-emerald-300 underline-offset-4">adaptasi terarah</span>.
                AI bukanlah pengganti manusia — melainkan{" "}
                <span className="text-slate-950 font-black">partner akselerasi kognitif</span>.
                Peran manusia berevolusi menjadi{" "}
                <span
                  className="font-black bg-clip-text text-transparent px-1"
                  style={{ backgroundImage: "linear-gradient(90deg, #6366f1, #ec4899)" }}
                >
                  AI Evaluator &amp; Strategic Architect
                </span>{" "}
                — sutradara yang mengarahkan kecerdasan komputasi untuk memberikan dampak nyata yang terukur."
              </p>
            </div>
          </motion.div>

          {/* Soft Skills Interactive Traits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {softTraits.map((t, i) => (
              <motion.div
                key={t.label}
                onClick={() => window.dispatchEvent(new CustomEvent("open-hrd-chat", { detail: t.query }))}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, type: "spring", bounce: 0.4 }}
                whileHover={{ y: -5, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-3xl sm:rounded-[2rem] cursor-pointer border-2 border-white/50 transition-all duration-300 shadow-xl group select-none relative overflow-hidden"
                style={{
                  background: t.bg,
                  boxShadow: `0 12px 30px ${t.shadow}, inset 0 1px 0 rgba(255,255,255,0.4)`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 sm:mb-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-white/25 border border-white/40 flex items-center justify-center shrink-0 backdrop-blur-md shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <t.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white pointer-events-none" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-white/90 bg-white/20 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Klik untuk Tanya
                    </span>
                  </div>

                  <h3 className="text-base font-black text-white tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.35)]">
                    {t.label}
                  </h3>
                  <p className="text-xs font-bold text-white/90 mt-0.5 mb-2">
                    {t.subtitle}
                  </p>
                  <p className="text-[11.5px] text-white/80 leading-relaxed font-medium">
                    {t.detail}
                  </p>
                </div>

                <div className="pt-3.5 sm:pt-4 mt-2 border-t border-white/20 flex items-center justify-between text-[11px] font-extrabold text-white/90">
                  <span>Chat dengan AI Bot 💬</span>
                  <span className="group-hover:translate-x-1 transition-transform">➔</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══ DIVIDER SECTION ══ */}
        <div className="flex items-center gap-3 sm:gap-4 py-4 sm:py-8 mb-8 sm:mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-600 px-3.5 sm:px-5 bg-white py-2 rounded-full border-2 border-slate-100 shadow-sm flex items-center gap-1.5 sm:gap-2">
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600 shrink-0" />
            <span>Technical Frameworks &amp; Stack</span>
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>

        {/* ══════════════════════════════════════════════════════════
            BAGIAN 2 (BAWAH): TECHNICAL ARSENAL
        ══════════════════════════════════════════════════════════ */}
        <div className="space-y-6 sm:space-y-8">
          {/* Controls Bar (Filter Tabs + Live Search) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-3.5 sm:gap-4">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-white border-2 border-slate-100 shadow-sm w-full md:w-auto">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-black transition-all ${
                  activeTab === "all"
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Semua ({totalTechSkills})
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-black transition-all flex items-center gap-1.5 ${
                    activeTab === cat.id
                      ? "text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  style={activeTab === cat.id ? { background: cat.grad } : {}}
                >
                  <cat.Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{cat.shortLabel}</span>
                </button>
              ))}
            </div>

            {/* Quick Search Box */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari tools atau library..."
                className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-white border-2 border-slate-100 text-xs font-medium text-slate-800 placeholder:text-slate-400 outline-none focus:border-purple-400 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Technical Categories Cards Grid */}
          <div className="space-y-6 sm:space-y-8">
            <AnimatePresence>
              {filteredCategories.map((cat, i) => (
                <motion.div
                  layout
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="p-4 sm:p-7 md:p-9 rounded-3xl sm:rounded-[2.5rem] border-2 border-slate-100 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-slate-100">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                      <div
                        className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0 group-hover:scale-105 group-hover:rotate-3 transition-transform"
                        style={{ background: cat.grad, boxShadow: `0 8px 20px ${cat.glow}` }}
                      >
                        <cat.Icon className="w-5 h-5 sm:w-7 sm:h-7" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-base sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                            {cat.label}
                          </h3>
                          <span
                            className="px-2.5 sm:px-3 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black text-white uppercase tracking-wider"
                            style={{ background: cat.grad }}
                          >
                            {cat.badge}
                          </span>
                        </div>
                        <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-1 leading-relaxed">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    <span className="text-[11px] sm:text-xs font-mono font-bold text-slate-500 px-3 py-1 bg-slate-50 rounded-xl self-start sm:self-auto border border-slate-100 shrink-0">
                      {cat.skills.length} Tools
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3.5 pt-4 sm:pt-6">
                    {cat.skills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.03, y: -2 }}
                        className="flex items-center justify-between p-2.5 sm:p-3.5 sm:px-4 rounded-xl sm:rounded-2xl bg-slate-50/80 hover:bg-white border sm:border-2 border-slate-100 hover:border-purple-300 shadow-2xs hover:shadow-md transition-all group/skill cursor-default"
                      >
                        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shrink-0 p-1 sm:p-1.5 shadow-2xs group-hover/skill:scale-110 transition-transform">
                            <img
                              src={skill.icon}
                              alt={skill.name}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = "none";
                              }}
                            />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[11px] sm:text-xs font-extrabold text-slate-900 block truncate">
                              {skill.name}
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-semibold text-slate-400 block truncate">
                              {skill.level}
                            </span>
                          </div>
                        </div>

                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500 shrink-0 opacity-0 group-hover/skill:opacity-100 transition-opacity ml-1 hidden sm:block" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
