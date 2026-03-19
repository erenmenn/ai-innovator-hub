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
    glow: "rgba(124,58,237,0.3)",
    dot: "bg-violet-500",
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
    glow: "rgba(37,99,235,0.3)",
    dot: "bg-blue-500",
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
    glow: "rgba(219,39,119,0.3)",
    dot: "bg-pink-500",
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
    glow: "rgba(217,119,6,0.3)",
    dot: "bg-amber-500",
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
    <section id="skills" className="py-32 relative overflow-hidden">

      {/* ── Ambient background ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          key={cat.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[160px]"
          style={{ background: cat.glow }}
        />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[140px] bg-slate-200/50" />

        {/* Floating PNG decorations */}
        <motion.img
          src="/asset/sparkle.png" alt="" aria-hidden="true"
          animate={{ y: [0, -18, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-12 w-12 h-12 opacity-25 select-none"
        />
        <motion.img
          src="/asset/bintang.png" alt="" aria-hidden="true"
          animate={{ y: [0, 14, 0], rotate: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-16 w-14 h-14 opacity-20 select-none"
        />
        <motion.img
          src="/asset/api.png" alt="" aria-hidden="true"
          animate={{ x: [0, 12, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-[5%] w-16 h-16 opacity-10 select-none"
        />
      </div>

      <div className="container mx-auto px-6">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase text-slate-400 mb-4">
            / CAPABILITIES
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-800 leading-none">
            My{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(120deg, ${cat.accent}, #ec4899)` }}
            >
              Toolkit
            </span>
          </h2>
        </motion.div>

        {/* ── Main Layout: Sidebar Tabs + Skill Grid ── */}
        <div className="flex flex-col lg:flex-row gap-10 items-start">

          {/* ── Left: Vertical Tab Selector ── */}
          <div className="flex lg:flex-col gap-3 w-full lg:w-56 shrink-0">
            {skillCategories.map((c, i) => (
              <motion.button
                key={c.id}
                onClick={() => setActive(i)}
                whileHover={{ x: 4 }}
                className={`
                  relative flex items-center gap-3 px-5 py-4 rounded-2xl text-left
                  transition-all duration-300 border text-sm font-semibold w-full
                  ${active === i
                    ? "bg-white border-transparent shadow-lg"
                    : "bg-transparent border-slate-200 text-slate-500 hover:bg-white/60 hover:border-slate-300"
                  }
                `}
                style={active === i ? { boxShadow: `0 4px 24px ${c.glow}` } : {}}
              >
                {/* Active indicator line */}
                {active === i && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full"
                    style={{ background: c.accent }}
                  />
                )}
                <span
                  className={`w-2.5 h-2.5 rounded-full shrink-0 transition-all ${
                    active === i ? "scale-125" : "opacity-40"
                  }`}
                  style={{ background: c.accent }}
                />
                <span className={active === i ? "text-slate-800" : ""}>{c.label}</span>
                {active === i && (
                  <span
                    className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded-full text-white"
                    style={{ background: c.accent }}
                  >
                    {c.items.length}
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* ── Right: Skill Cards ── */}
          <div className="flex-1 relative min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4"
              >
                {cat.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.92, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ delay: i * 0.07, type: "spring", bounce: 0.3 }}
                    whileHover={{ y: -5, boxShadow: `0 16px 40px ${cat.glow}` }}
                    className="group relative bg-white rounded-2xl p-5 border border-slate-100 cursor-default transition-all duration-300"
                    style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                  >
                    {/* Inner glow on hover */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: `radial-gradient(circle at 80% 20%, ${cat.glow}, transparent 70%)` }}
                    />

                    {/* Top Row */}
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm"
                        style={{ background: `linear-gradient(135deg, ${cat.accent}dd, ${cat.accent}88)` }}
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
                          style={{ background: `linear-gradient(90deg, ${cat.accent}, ${cat.accent}88)` }}
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
