import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  BrainCircuit, Eye, BarChart3, Layers, Code2, Database,
  Lightbulb, MessageSquare, Crown, Globe, Cpu,
  Palette, Monitor, Brush, Zap, Users, ChevronDown, Sparkles
} from "lucide-react";

// ── Hard Skills ───────────────────────────────────────────────────────────────
const hardSkillCategories = [
  {
    id: "ai", label: "AI & Tech", emoji: "🤖",
    accent: "#7c3aed", gradFrom: "#7c3aed", gradTo: "#4f46e5",
    glow: "rgba(124,58,237,0.08)", smokeColor: "bg-violet-400/5",
    items: [
      { icon: BrainCircuit,  name: "Machine Learning", level: 90, tag: "CORE"   },
      { icon: Layers,        name: "Deep Learning",    level: 85, tag: "CORE"   },
      { icon: Cpu,           name: "LLMs & RAG",       level: 88, tag: "RARE"   },
      { icon: MessageSquare, name: "NLP",              level: 88, tag: "RARE"   },
      { icon: Eye,           name: "Computer Vision",  level: 80, tag: "SKILL"  },
      { icon: BarChart3,     name: "Data Analysis",    level: 92, tag: "PRO"    },
    ],
  },
  {
    id: "dev", label: "Tools & Dev", emoji: "⚙️",
    accent: "#2563eb", gradFrom: "#2563eb", gradTo: "#06b6d4",
    glow: "rgba(37,99,235,0.08)", smokeColor: "bg-blue-400/5",
    items: [
      { icon: Code2,    name: "Python",             level: 95, tag: "MASTER" },
      { icon: Code2,    name: "LangChain",          level: 85, tag: "RARE"   },
      { icon: Database, name: "TensorFlow/PyTorch", level: 85, tag: "CORE"   },
      { icon: Code2,    name: "Scikit-learn",       level: 90, tag: "PRO"    },
      { icon: Database, name: "Pandas / NumPy",     level: 92, tag: "PRO"    },
      { icon: Globe,    name: "API Integration",    level: 82, tag: "SKILL"  },
    ],
  },
  {
    id: "art", label: "Creative Art", emoji: "🎨",
    accent: "#db2777", gradFrom: "#db2777", gradTo: "#d946ef",
    glow: "rgba(219,39,119,0.08)", smokeColor: "bg-pink-400/5",
    items: [
      { icon: Palette, name: "Colour Theory",    level: 95, tag: "MASTER" },
      { icon: Monitor, name: "UI/UX & Figma",    level: 90, tag: "PRO"    },
      { icon: Brush,   name: "Canva Design",     level: 92, tag: "PRO"    },
      { icon: Palette, name: "Drawing & Sketch", level: 88, tag: "RARE"   },
      { icon: Brush,   name: "Fine Art",         level: 85, tag: "RARE"   },
      { icon: Monitor, name: "Web Design",       level: 90, tag: "PRO"    },
    ],
  },
];

// Removed soft skills array as it was moved to AboutSection

const tagStyle: Record<string, { bg: string; text: string; border: string }> = {
  MASTER: { bg: "#fff1f2", text: "#e11d48", border: "#fecdd3" },
  RARE:   { bg: "#f5f3ff", text: "#7c3aed", border: "#e9d5ff" },
  PRO:    { bg: "#eff6ff", text: "#2563eb", border: "#bfdbfe" },
  CORE:   { bg: "#f0fdf4", text: "#15803d", border: "#bbf7d0" },
  SKILL:  { bg: "#f8fafc", text: "#64748b", border: "#e2e8f0" },
};

// ── Component ─────────────────────────────────────────────────────────────────
const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const cat = hardSkillCategories[activeTab];

  return (
    <section id="skills" className="py-32 relative overflow-hidden pixel-grid">

      {/* Ambient smoke — dikurangi banget (ANIMASI DIMATIKAN UNTUK ANTI LAG) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          key={cat.id + "-s1"}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[8%] right-[6%] w-[420px] h-[420px] rounded-full blur-[140px] ${cat.smokeColor}`}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[8%] left-[4%] w-[380px] h-[380px] rounded-full blur-[140px] bg-slate-400/10"
        />
      </div>

      {/* Floating PNGs — opacity diturunin dikit */}
      <motion.img src="/asset/api.png" alt="" aria-hidden
        animate={{ y: [0, -14, 0], rotate: [0, 10, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-12 right-10 w-14 h-14 opacity-10 pointer-events-none select-none drop-shadow-sm" />
      <motion.img src="/asset/rocket.png" alt="" aria-hidden
        animate={{ y: [0, 16, 0], x: [0, -8, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-16 left-8 w-12 h-12 opacity-10 pointer-events-none select-none drop-shadow-sm" />
      <motion.img src="/asset/sparkle.png" alt="" aria-hidden
        animate={{ rotate: [0, 360] }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-[3%] w-7 h-7 opacity-15 pointer-events-none select-none" />

      <div className="container mx-auto px-6">

        {/* ── Header ── */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
            My{" "}
            <span className="text-transparent bg-clip-text italic pr-2"
              style={{ backgroundImage: `linear-gradient(120deg, ${cat.gradFrom}, ${cat.gradTo})` }}>
              Playground
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">Hard skills · Soft skills · Click to explore experience</p>
        </motion.div>

        {/* ── Technical Skills Layout ── */}
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-full">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
              <span className="text-[10px] md:text-xs font-pixel text-slate-400 uppercase tracking-widest whitespace-nowrap">⚙ Technical Skills Overview</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
            </div>

            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {hardSkillCategories.map((c, i) => (
                <button
                  key={c.id} onClick={() => setActiveTab(i)}
                  className="flex items-center gap-2 px-5 py-3 rounded-2xl text-sm font-semibold border-2 transition-colors duration-300"
                  style={activeTab === i
                    ? { background: `linear-gradient(135deg, ${c.gradFrom}, ${c.gradTo})`, color: "#fff", borderColor: "transparent", boxShadow: `0 2px 8px ${c.glow}` }
                    : { background: "rgba(255,255,255,0.75)", color: "#64748b", borderColor: "#e2e8f0", boxShadow: "none" }
                  }
                >
                  <span className="text-lg leading-none">{c.emoji}</span>
                  {c.label}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="relative w-full">
  

              <AnimatePresence mode="wait">
                <motion.div key={cat.id}
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                  {cat.items.map((skill, i) => {
                    const ts = tagStyle[skill.tag];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.05, type: "spring", bounce: 0.2 }}
                        className="group relative rounded-2xl p-5 cursor-default overflow-hidden transition-colors duration-300"
                        style={{
                          background: "rgba(255,255,255,0.75)",
                          backdropFilter: "blur(4px)",
                          border: "1px solid rgba(255,255,255,0.6)",
                          boxShadow: "0 1px 4px rgba(0,0,0,0.02)"
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.border = `1px solid ${cat.accent}30`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.6)";
                        }}
                      >
                        <div className="flex items-start justify-between mb-4 relative z-10">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-sm"
                            style={{ background: `linear-gradient(135deg, ${cat.gradFrom}, ${cat.gradTo})` }}>
                            <skill.icon className="w-6 h-6" />
                          </div>
                          <span className="text-[9px] font-pixel font-bold px-2.5 py-1.5 rounded-lg border"
                            style={{ background: ts.bg, color: ts.text, borderColor: ts.border }}>
                            {skill.tag}
                          </span>
                        </div>
                        <h4 className="font-extrabold text-slate-800 text-[15px] mb-4 relative z-10 leading-snug">{skill.name}</h4>
                        <div className="relative z-10">
                          <div className="flex justify-between items-center mb-1.5">
                            <span className="text-[11px] text-slate-400 font-mono">Proficiency</span>
                            <span className="text-[11px] font-bold" style={{ color: cat.accent }}>{skill.level}%</span>
                          </div>
                          <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.05 }}
                              className="h-full rounded-full"
                              style={{ background: `linear-gradient(90deg, ${cat.gradFrom}, ${cat.gradTo})` }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
