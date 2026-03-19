import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import {
  BrainCircuit, Eye, BarChart3, Layers, Code2, Database,
  Lightbulb, MessageSquare, Crown, Globe, Cpu,
  Palette, Monitor, Brush
} from "lucide-react";

/* ── Data ────────────────────────────────────────────────────────────── */
const skillCategories = [
  {
    id: "ai",
    title: "AI & TECH",
    class: "INTELLIGENCE",
    emoji: "🤖",
    gradient: "linear-gradient(135deg, #a855f7, #4f46e5)",
    accent: "#a855f7",
    glow: "rgba(168,85,247,0.25)",
    count: 6,
    items: [
      { icon: BrainCircuit,  name: "Machine Learning", level: 90, xp: 9000, tag: "CORE" },
      { icon: Layers,        name: "Deep Learning",    level: 85, xp: 8500, tag: "CORE" },
      { icon: Cpu,           name: "LLMs & RAG",       level: 88, xp: 8800, tag: "RARE" },
      { icon: MessageSquare, name: "NLP",              level: 88, xp: 8800, tag: "RARE" },
      { icon: Eye,           name: "Computer Vision",  level: 80, xp: 8000, tag: "SKILL" },
      { icon: BarChart3,     name: "Data Analysis",    level: 92, xp: 9200, tag: "PRO"  },
    ],
  },
  {
    id: "dev",
    title: "TOOLS & DEV",
    class: "ENGINEER",
    emoji: "💻",
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    accent: "#3b82f6",
    glow: "rgba(59,130,246,0.25)",
    count: 6,
    items: [
      { icon: Code2,    name: "Python",               level: 95, xp: 9500, tag: "MASTER" },
      { icon: Code2,    name: "LangChain & AI Tools", level: 85, xp: 8500, tag: "RARE"   },
      { icon: Database, name: "TensorFlow/PyTorch",   level: 85, xp: 8500, tag: "CORE"   },
      { icon: Code2,    name: "Scikit-learn",         level: 90, xp: 9000, tag: "PRO"    },
      { icon: Database, name: "Pandas / NumPy",       level: 92, xp: 9200, tag: "PRO"    },
      { icon: Globe,    name: "API Integration",      level: 82, xp: 8200, tag: "SKILL"  },
    ],
  },
  {
    id: "art",
    title: "CREATIVE ART",
    class: "ARTIST",
    emoji: "🎨",
    gradient: "linear-gradient(135deg, #ec4899, #d946ef)",
    accent: "#ec4899",
    glow: "rgba(236,72,153,0.25)",
    count: 6,
    items: [
      { icon: Palette,  name: "Colour Theory",     level: 95, xp: 9500, tag: "MASTER" },
      { icon: Monitor,  name: "UI/UX & Figma",     level: 90, xp: 9000, tag: "PRO"    },
      { icon: Brush,    name: "Canva Design",      level: 92, xp: 9200, tag: "PRO"    },
      { icon: Palette,  name: "Drawing & Sketch",  level: 88, xp: 8800, tag: "RARE"   },
      { icon: Brush,    name: "Fine Art Painting", level: 85, xp: 8500, tag: "RARE"   },
      { icon: Monitor,  name: "Web Design",        level: 90, xp: 9000, tag: "PRO"    },
    ],
  },
  {
    id: "soft",
    title: "SOFT SKILLS",
    class: "LEADER",
    emoji: "🌟",
    gradient: "linear-gradient(135deg, #f59e0b, #ea580c)",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.25)",
    count: 4,
    items: [
      { icon: Lightbulb,     name: "Innovative Thinking", level: 95, xp: 9500, tag: "MASTER" },
      { icon: Lightbulb,     name: "Problem Solving",     level: 93, xp: 9300, tag: "PRO"    },
      { icon: Crown,         name: "Leadership",          level: 88, xp: 8800, tag: "RARE"   },
      { icon: MessageSquare, name: "Communication",       level: 90, xp: 9000, tag: "PRO"    },
    ],
  },
];

const tagColors: Record<string, string> = {
  MASTER: "#f43f5e",
  RARE:   "#a855f7",
  PRO:    "#3b82f6",
  CORE:   "#10b981",
  SKILL:  "#64748b",
};

/* ── Skill Card Component ────────────────────────────────────────────── */
const SkillCard = ({
  skill, accent, gradient, delay,
}: {
  skill: (typeof skillCategories)[0]["items"][0];
  accent: string;
  gradient: string;
  delay: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.94 }}
      transition={{ delay, duration: 0.35, type: "spring", bounce: 0.25 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-3xl overflow-hidden cursor-default border-2 transition-all duration-300"
      style={{
        borderColor: hovered ? accent : "#e2e8f0",
        background: hovered ? `linear-gradient(135deg, white, ${accent}10)` : "white",
        boxShadow: hovered ? `0 8px 28px ${accent}33` : "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      {/* Card top color band */}
      <div className="h-1.5 w-full" style={{ background: gradient }} />

      {/* Inside glow on hover */}
      <div
        className="absolute bottom-0 right-0 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-opacity duration-300"
        style={{ background: accent, opacity: hovered ? 0.12 : 0 }}
      />

      <div className="p-4 relative z-10">
        {/* Top row: icon + tag */}
        <div className="flex items-center justify-between mb-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center text-white shadow-md"
            style={{ background: gradient }}
          >
            <skill.icon className="w-5 h-5" />
          </div>
          <span
            className="text-[8px] font-pixel px-2 py-1 rounded-lg text-white border border-white/30"
            style={{ background: tagColors[skill.tag] ?? "#64748b" }}
          >
            ★ {skill.tag}
          </span>
        </div>

        {/* Skill name */}
        <h4 className="font-black text-slate-800 text-sm leading-tight mb-1">{skill.name}</h4>

        {/* XP */}
        <p className="text-[9px] font-pixel text-slate-400 mb-3">XP {skill.xp.toLocaleString()}</p>

        {/* Bubbly progress bar */}
        <div className="w-full h-3 rounded-full bg-slate-100 border border-slate-200 overflow-hidden p-0.5">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: "easeOut", delay }}
            className="h-full rounded-full relative"
            style={{ background: gradient }}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full" style={{ height: "50%", top: 0 }} />
          </motion.div>
        </div>

        {/* Level badge */}
        <div className="flex items-center justify-between mt-2.5">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-sm transition-all duration-300"
                style={{
                  background: i < Math.round(skill.level / 20) ? accent : "#e2e8f0",
                  transform: hovered && i < Math.round(skill.level / 20) ? "scaleY(1.2)" : "scaleY(1)",
                }}
              />
            ))}
          </div>
          <span
            className="text-[10px] font-pixel font-black text-white px-2 py-0.5 rounded-lg"
            style={{ background: accent }}
          >
            LV.{Math.round(skill.level / 10)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* ── Main Section ────────────────────────────────────────────────────── */
const SkillsSection = () => {
  const [active, setActive] = useState(0);
  const cat = skillCategories[active];

  return (
    <section id="skills" className="py-28 relative overflow-hidden pixel-grid">
      {/* Static smoke blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div
          className="absolute top-1/4 right-[5%] w-[500px] h-[500px] rounded-full blur-[140px] opacity-20 transition-all duration-700"
          style={{ background: cat.accent }}
        />
        <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full blur-[130px] bg-slate-300/30" />
        <img src="/asset/sparkle.png" className="absolute top-12 left-10 w-10 h-10 opacity-30" alt="" />
        <img src="/asset/bintang.png" className="absolute bottom-14 right-14 w-12 h-12 opacity-25" alt="" />
      </div>

      <div className="container mx-auto px-6">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border-2 border-violet-300 shadow-[3px_3px_0px_#a855f7] rounded-xl mb-5">
            <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
            <span className="text-[9px] font-pixel text-violet-600 tracking-widest uppercase">SKILL_CARD_COLLECTION</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            MY{" "}
            <span
              className="text-transparent bg-clip-text italic pr-2"
              style={{ backgroundImage: "linear-gradient(to right, #7c3aed, #d946ef, #ec4899)" }}
            >
              TOOLKIT
            </span>
          </h2>
          <p className="text-muted-foreground mt-2 text-sm font-medium">
            Hover cards to see glow · Click class to switch deck
          </p>
        </motion.div>

        {/* ── Class Selector — Big game-card style ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
          {skillCategories.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className="relative rounded-3xl border-2 p-4 text-left transition-all duration-300 overflow-hidden"
              style={
                active === i
                  ? {
                      background: c.gradient,
                      borderColor: c.accent,
                      boxShadow: `0 8px 24px ${c.glow}`,
                      color: "white",
                    }
                  : {
                      background: "white",
                      borderColor: "#e2e8f0",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                      color: "#475569",
                    }
              }
            >
              {/* Glow blob inside active button */}
              {active === i && (
                <div className="absolute -right-4 -bottom-4 w-20 h-20 rounded-full blur-xl bg-white/20 pointer-events-none" />
              )}
              {/* Pixel corner indicator */}
              {active === i && (
                <div
                  className="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-white animate-pulse"
                />
              )}
              <div className="text-3xl mb-2">{c.emoji}</div>
              <div
                className="text-[9px] font-pixel mb-1 opacity-80"
                style={{ color: active === i ? "rgba(255,255,255,0.8)" : "#94a3b8" }}
              >
                CLASS: {c.class}
              </div>
              <div className="font-black text-sm leading-tight">{c.title}</div>
              <div
                className="text-[8px] font-pixel mt-1.5"
                style={{ color: active === i ? "rgba(255,255,255,0.7)" : "#94a3b8" }}
              >
                {c.count} SKILLS
              </div>
            </button>
          ))}
        </div>

        {/* ── Skill Card Grid ── */}
        <div className="max-w-5xl mx-auto relative">
          {/* Section smoke glow behind the grid */}
          <div
            className="absolute inset-0 rounded-3xl blur-[80px] pointer-events-none -z-10 transition-all duration-700"
            style={{ background: cat.glow, opacity: 0.6 }}
          />

          {/* Active category header pill */}
          <AnimatePresence mode="wait">
            <motion.div
              key={cat.id + "-header"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-4 mb-6 px-6 py-4 rounded-2xl border-2"
              style={{ background: cat.gradient, borderColor: cat.accent }}
            >
              <div className="text-3xl">{cat.emoji}</div>
              <div className="text-white">
                <div className="font-black text-xl leading-none">{cat.title}</div>
                <div className="text-[9px] font-pixel opacity-75 mt-0.5 uppercase tracking-widest">CLASS: {cat.class}</div>
              </div>
              <div className="ml-auto hidden md:flex items-center gap-2 bg-black/20 px-4 py-2 rounded-xl border border-white/20">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[8px] font-pixel text-white">{cat.count} CARDS UNLOCKED</span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={cat.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {cat.items.map((skill, i) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  accent={cat.accent}
                  gradient={cat.gradient}
                  delay={i * 0.06}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
