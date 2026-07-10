import { motion } from "framer-motion";
import { BrainCircuit, Zap, Layout, Server } from "lucide-react";

/* ─── Skill Categories ─────────────────────────────── */
const categories = [
  {
    id: "ml",
    label: "Machine Learning / DL",
    Icon: BrainCircuit,
    grad:  "linear-gradient(135deg,#6366f1 0%,#8b5cf6 100%)",
    border: "#6366f1",
    light:  "rgba(99,102,241,0.08)",
    skills: [
      { name: "Python",            icon: "https://cdn.simpleicons.org/python/3776AB" },
      { name: "TensorFlow",        icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
      { name: "PyTorch",           icon: "https://cdn.simpleicons.org/pytorch/EE4C2C" },
      { name: "Scikit-Learn",      icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Keras",             icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
      { name: "OpenCV",            icon: "https://cdn.simpleicons.org/opencv/5C3EE8" },
      { name: "Pandas",            icon: "https://cdn.simpleicons.org/pandas/150458" },
      { name: "Jupyter",           icon: "https://cdn.simpleicons.org/jupyter/F37626" },
    ],
  },
  {
    id: "genai",
    label: "Generative AI",
    Icon: Zap,
    grad:  "linear-gradient(135deg,#ec4899 0%,#f97316 100%)",
    border: "#ec4899",
    light:  "rgba(236,72,153,0.08)",
    skills: [
      { name: "OpenAI",            icon: "https://cdn.simpleicons.org/openai/000000" },
      { name: "LangChain",         icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
      { name: "HuggingFace",       icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "Groq",              icon: "https://cdn.simpleicons.org/groq/F55036" },
      { name: "FAISS",             icon: "https://cdn.simpleicons.org/meta/0467DF" },
      { name: "LangGraph",         icon: "https://cdn.simpleicons.org/langchain/1C3C3C" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    Icon: Layout,
    grad:  "linear-gradient(135deg,#06b6d4 0%,#3b82f6 100%)",
    border: "#06b6d4",
    light:  "rgba(6,182,212,0.08)",
    skills: [
      { name: "Next.js",           icon: "https://cdn.simpleicons.org/nextdotjs/000000" },
      { name: "React",             icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "TypeScript",        icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "Tailwind CSS",      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Figma",             icon: "https://cdn.simpleicons.org/figma/F24E1E" },
      { name: "Canva",             icon: "https://cdn.simpleicons.org/canva/00C4CC" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    Icon: Server,
    grad:  "linear-gradient(135deg,#10b981 0%,#06b6d4 100%)",
    border: "#10b981",
    light:  "rgba(16,185,129,0.08)",
    skills: [
      { name: "FastAPI",           icon: "https://cdn.simpleicons.org/fastapi/009688" },
      { name: "Flask",             icon: "https://cdn.simpleicons.org/flask/000000" },
      { name: "Supabase",          icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
      { name: "PostgreSQL",        icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "Prisma",            icon: "https://cdn.simpleicons.org/prisma/2D3748" },
      { name: "Docker",            icon: "https://cdn.simpleicons.org/docker/2496ED" },
      { name: "Git",               icon: "https://cdn.simpleicons.org/git/F05032" },
    ],
  },
];

/* ─── Skill Chip ─────────────────────────────────────── */
function SkillChip({
  name, icon, grad, delay,
}: { name: string; icon: string; grad: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay }}
      whileHover={{ y: -3, scale: 1.05 }}
      className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl cursor-default select-none border border-white/30"
      style={{
        background: grad,
        boxShadow: "0 4px 14px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.15)",
      }}
    >
      <div className="w-6 h-6 rounded-lg bg-white/20 flex items-center justify-center shrink-0 p-0.5">
        <img
          src={icon}
          alt={name}
          className="w-full h-full object-contain brightness-0 invert"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      </div>
      <span className="text-[13px] font-semibold text-white whitespace-nowrap drop-shadow-sm">{name}</span>
    </motion.div>
  );
}

/* ─── Category Block ─────────────────────────────────── */
function CategoryBlock({ cat, i }: { cat: typeof categories[0]; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-md"
          style={{ background: cat.grad }}
        >
          <cat.Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-base font-bold text-slate-800">{cat.label}</h3>
        <div className="flex-1 h-px bg-slate-100" />
        <span
          className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white"
          style={{ background: cat.grad }}
        >
          {cat.skills.length} tools
        </span>
      </div>

      {/* Chips */}
      <div className="flex flex-wrap gap-2.5 pl-1">
        {cat.skills.map((s, j) => (
          <SkillChip
            key={s.name}
            name={s.name}
            icon={s.icon}
            grad={cat.grad}
            delay={i * 0.1 + j * 0.04}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ─── Main Section ─────────────────────────────────── */
const SkillsSection = () => {
  const total = categories.reduce((acc, c) => acc + c.skills.length, 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden pixel-grid">

      {/* Subtle blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[130px] opacity-10"
          style={{ background: "radial-gradient(circle,#8b5cf6,transparent)" }} />
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full blur-[110px] opacity-10"
          style={{ background: "radial-gradient(circle,#06b6d4,transparent)" }} />
      </div>

      <div className="container mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-end justify-between">
            <div>
              <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-violet-400/50 text-white font-extrabold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(139,92,246,0.5)] mb-6 transition-all cursor-default"
                style={{ background: "linear-gradient(135deg,#8b5cf6,#d946ef)" }}>
                <span className="bg-white/20 px-2 py-0.5 rounded-lg text-white">02</span> TECHNICAL SKILLS
              </div>
              <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black tracking-tighter leading-[0.85] text-slate-900 uppercase">
                <span className="block drop-shadow-sm">TECHNICAL</span>
                <em className="font-playfair italic font-medium lowercase tracking-normal text-transparent bg-clip-text text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] ml-8 md:ml-20 leading-none block pb-6 pt-2 -mb-6"
                  style={{ backgroundImage: "linear-gradient(to right, #06b6d4, #6366f1)" }}>
                  arsenal.
                </em>
              </h2>
            </div>

            {/* Total counter */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hidden md:flex flex-col items-end"
            >
              <span className="text-5xl font-black text-transparent bg-clip-text"
                style={{ backgroundImage: "linear-gradient(135deg,#6366f1,#06b6d4)" }}>
                {total}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                Tools in the arsenal
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Categories ── */}
        <div className="max-w-5xl mx-auto space-y-12">
          {categories.map((cat, i) => (
            <CategoryBlock key={cat.id} cat={cat} i={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
