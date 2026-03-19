import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  BrainCircuit, Eye, BarChart3, Layers, Code2, Database,
  Lightbulb, MessageSquare, Crown, Globe, Cpu,
  Palette, Monitor, Brush
} from "lucide-react";

const skillCategories = [
  {
    id: "ai",
    label: "AI & Tech",
    accent: "#7c3aed",
    gradFrom: "#7c3aed",
    gradTo: "#4f46e5",
    glow: "rgba(124,58,237,0.18)",
    smokeColor: "bg-violet-400/10",
    items: [
      { icon: BrainCircuit,  name: "Machine Learning", level: 90, tag: "CORE" },
      { icon: Layers,        name: "Deep Learning",    level: 85, tag: "CORE" },
      { icon: Cpu,           name: "LLMs & RAG",       level: 88, tag: "RARE" },
      { icon: MessageSquare, name: "NLP",              level: 88, tag: "RARE" },
      { icon: Eye,           name: "Computer Vision",  level: 80, tag: "SKILL" },
      { icon: BarChart3,     name: "Data Analysis",    level: 92, tag: "PRO"  },
    ],
  },
  {
    id: "dev",
    label: "Tools & Dev",
    accent: "#2563eb",
    gradFrom: "#2563eb",
    gradTo: "#06b6d4",
    glow: "rgba(37,99,235,0.15)",
    smokeColor: "bg-blue-400/10",
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
    id: "art",
    label: "Creative Art",
    accent: "#db2777",
    gradFrom: "#db2777",
    gradTo: "#d946ef",
    glow: "rgba(219,39,119,0.15)",
    smokeColor: "bg-pink-400/10",
    items: [
      { icon: Palette, name: "Colour Theory",    level: 95, tag: "MASTER" },
      { icon: Monitor, name: "UI/UX & Figma",    level: 90, tag: "PRO"    },
      { icon: Brush,   name: "Canva Design",     level: 92, tag: "PRO"    },
      { icon: Palette, name: "Drawing & Sketch", level: 88, tag: "RARE"   },
      { icon: Brush,   name: "Fine Art",         level: 85, tag: "RARE"   },
      { icon: Monitor, name: "Web Design",       level: 90, tag: "PRO"    },
    ],
  },
  {
    id: "soft",
    label: "Soft Skills",
    accent: "#d97706",
    gradFrom: "#d97706",
    gradTo: "#ea580c",
    glow: "rgba(217,119,6,0.15)",
    smokeColor: "bg-amber-400/10",
    items: [
      { icon: Lightbulb,     name: "Innovative Thinking", level: 95, tag: "MASTER" },
      { icon: Lightbulb,     name: "Problem Solving",     level: 93, tag: "PRO"    },
      { icon: Crown,         name: "Leadership",          level: 88, tag: "RARE"   },
      { icon: MessageSquare, name: "Communication",       level: 90, tag: "PRO"    },
    ],
  },
];

const tagStyle: Record<string, string> = {
  MASTER: "bg-rose-100 text-rose-600 border-rose-200",
  RARE:   "bg-purple-100 text-purple-600 border-purple-200",
  PRO:    "bg-blue-100 text-blue-600 border-blue-200",
  CORE:   "bg-emerald-100 text-emerald-600 border-emerald-200",
  SKILL:  "bg-slate-100 text-slate-500 border-slate-200",
};

const SkillsSection = () => {
  const [active, setActive] = useState(0);
  const cat = skillCategories[active];

  return (
    <section id="skills" className="py-32 relative overflow-hidden pixel-grid">

      {/* ── Soft smoke background — matching other sections ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          key={cat.id + "-smoke1"}
          animate={{ x: [0, 30, -20, 0], y: [0, -20, 25, 0], scale: [1, 1.15, 0.92, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-[10%] right-[8%] w-[450px] h-[450px] rounded-full blur-[110px] ${cat.smokeColor}`}
        />
        <motion.div
          key={cat.id + "-smoke2"}
          animate={{ x: [0, -25, 30, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full blur-[120px] bg-slate-300/15"
        />
      </div>

      {/* ── Floating PNG Decorations ── */}
      <motion.img
        src="/asset/api.png" alt="" aria-hidden="true"
        animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-12 w-16 h-16 opacity-20 pointer-events-none select-none drop-shadow-lg"
      />
      <motion.img
        src="/asset/rocket.png" alt="" aria-hidden="true"
        animate={{ y: [0, 18, 0], x: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-20 left-10 w-14 h-14 opacity-15 pointer-events-none select-none drop-shadow-lg"
      />
      <motion.img
        src="/asset/sparkle.png" alt="" aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-[4%] w-8 h-8 opacity-25 pointer-events-none select-none"
      />

      <div className="container mx-auto px-6">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/70 backdrop-blur border border-primary/20 shadow-sm rounded-full mb-5">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: cat.accent }} />
            <span className="text-[9px] font-pixel text-primary tracking-widest uppercase">SKILL_COLLECTION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
            My{" "}
            <span
              className="text-transparent bg-clip-text italic pr-2"
              style={{ backgroundImage: `linear-gradient(120deg, ${cat.gradFrom}, ${cat.gradTo})` }}
            >
              Toolkit
            </span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Hover cards to explore · Click tab to switch category
          </p>
        </motion.div>

        {/* ── Layout: Sidebar + Grid ── */}
        <div className="flex flex-col lg:flex-row gap-10 items-start max-w-6xl mx-auto">

          {/* ── Vertical Tab Selector ── */}
          <div className="flex flex-row lg:flex-col gap-3 w-full lg:w-56 shrink-0 lg:sticky lg:top-28">
            {skillCategories.map((c, i) => (
              <motion.button
                key={c.id}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                className={`
                  relative flex items-center gap-3 px-5 py-4 rounded-2xl text-left
                  transition-all duration-300 border text-sm font-semibold w-full
                  ${active === i
                    ? "bg-white/80 backdrop-blur border-transparent shadow-lg"
                    : "bg-white/30 border-white/40 text-slate-500 hover:bg-white/60"
                  }
                `}
                style={active === i ? { boxShadow: `0 4px 20px ${c.glow}, 0 1px 3px rgba(0,0,0,0.06)` } : {}}
              >
                {active === i && (
                  <motion.div
                    layoutId="skills-tab-indicator"
                    className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
                    style={{ background: `linear-gradient(180deg, ${c.gradFrom}, ${c.gradTo})` }}
                  />
                )}
                <span
                  className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all ${active === i ? "scale-125" : "opacity-40"}`}
                  style={{ background: c.accent }}
                />
                <span className={active === i ? "text-slate-800" : ""}>{c.label}</span>
                {active === i && (
                  <span
                    className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full text-white"
                    style={{ background: `linear-gradient(135deg, ${c.gradFrom}, ${c.gradTo})` }}
                  >
                    {c.items.length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* ── Skill Cards Grid ── */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.28 }}
                className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4"
              >
                {cat.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.93, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.07, type: "spring", bounce: 0.3 }}
                    whileHover={{ y: -6 }}
                    className="group relative rounded-2xl p-5 cursor-default transition-all duration-300 overflow-hidden"
                    style={{
                      background: "rgba(255,255,255,0.7)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.6)",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.05)"
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${cat.glow}, 0 2px 8px rgba(0,0,0,0.06)`;
                      (e.currentTarget as HTMLElement).style.border = `1px solid ${cat.accent}30`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                      (e.currentTarget as HTMLElement).style.border = "1px solid rgba(255,255,255,0.6)";
                    }}
                  >
                    {/* Gradient hint in corner on hover */}
                    <div
                      className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle, ${cat.gradFrom}40, transparent)` }}
                    />

                    {/* Top Row */}
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-md group-hover:shadow-lg transition-shadow"
                        style={{ background: `linear-gradient(135deg, ${cat.gradFrom}, ${cat.gradTo})` }}
                      >
                        <skill.icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[9px] font-mono font-bold px-2.5 py-1 rounded-lg border ${tagStyle[skill.tag]}`}>
                        {skill.tag}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <h4 className="font-bold text-slate-800 text-sm mb-4 leading-snug relative z-10">
                      {skill.name}
                    </h4>

                    {/* Level Bar */}
                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-[10px] text-slate-400 font-mono">Proficiency</span>
                        <span className="text-[10px] font-bold" style={{ color: cat.accent }}>{skill.level}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: i * 0.08 }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${cat.gradFrom}, ${cat.gradTo})` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
