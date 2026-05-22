import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Target, Users, BrainCircuit, Sparkles, LayoutTemplate, X, Quote, Zap } from "lucide-react";

const traits = [
  {
    icon: Users,
    title: "Leadership",
    shortDesc: "Empowering teams & driving vision.",
    fullDesc: "Saya memimpin dengan empati dan komunikasi yang terstruktur. Fokus saya adalah pada kolaborasi tim, membangun lingkungan yang suportif, serta mengarahkan setiap individu untuk bersinergi mencapai visi bersama secara efektif dan efisien tanpa micromanagement.",
    grad: "linear-gradient(135deg, #6366f1 0%, #3b82f6 50%, #06b6d4 100%)",
    shadow: "#3b82f6",
    hardShadow: "#1d4ed8",
    pill: "🔵 CORE ROLE",
    emoji: "👑",
    sparkle: "⭐",
  },
  {
    icon: Target,
    title: "Problem Solving",
    shortDesc: "Menyelesaikan tantangan kompleks.",
    fullDesc: "Saya terbiasa memecah masalah berskala besar menjadi komponen-komponen logis yang dapat dieksekusi. Dengan mencari akar permasalahan (root cause), saya menyusun solusi taktis yang terstruktur, anti-rapuh, dan dapat diukur keberhasilannya di dunia nyata.",
    grad: "linear-gradient(135deg, #f43f5e 0%, #fb7185 40%, #f97316 100%)",
    shadow: "#f43f5e",
    hardShadow: "#be123c",
    pill: "🔴 TOP SKILL",
    emoji: "🧩",
    sparkle: "✦",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    shortDesc: "Ideasi out-of-the-box.",
    fullDesc: "Selalu mengeksplorasi sudut pandang dari berbagai multi-disiplin ilmu. Pemikiran kreatif memungkinkan saya untuk merancang inovasi yang tidak konvensional, menembus batas standar industri, dan memberikan 'wow-factor' pada fungsionalitas serta estetika sistem.",
    grad: "linear-gradient(135deg, #f59e0b 0%, #f97316 50%, #fb923c 100%)",
    shadow: "#f59e0b",
    hardShadow: "#d97706",
    pill: "🟡 RARE",
    emoji: "💡",
    sparkle: "✧",
  },
  {
    icon: BrainCircuit,
    title: "Analytical Thinking",
    shortDesc: "Analisa mendalam & logis.",
    fullDesc: "Saya tidak menebak-nebak. Saya mengandalkan kumpulan data dan landasan logika first-principles untuk mengambil setiap keputusan. Objektivitas dan kepekaan terhadap pola tersembunyi memastikan setiap langkah arsitektur terhindar dari bias yang berisiko.",
    grad: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #d946ef 100%)",
    shadow: "#8b5cf6",
    hardShadow: "#6d28d9",
    pill: "🟣 MASTER",
    emoji: "🔬",
    sparkle: "★",
  },
  {
    icon: LayoutTemplate,
    title: "Project Designer",
    shortDesc: "Merancang fondasi ekosistem.",
    fullDesc: "Lebih dari sekadar coding, saya bertindak sebagai konseptor yang menstrukturkan alur kerja sistem, mendesain cetak biru manajemen proyek, dan merumuskan User Experience agar selaras penuh dengan objektif psikologis pengguna akhir.",
    grad: "linear-gradient(135deg, #10b981 0%, #14b8a6 50%, #06b6d4 100%)",
    shadow: "#10b981",
    hardShadow: "#065f46",
    pill: "🟢 PRO",
    emoji: "🎨",
    sparkle: "◆",
  },
  {
    icon: Sparkles,
    title: "AI Solutions",
    shortDesc: "Menjembatani AI & dunia nyata.",
    fullDesc: "Menerjemahkan bottleneck dunia nyata menjadi kapabilitas komputasi buatan. Saya merancang dan mengeksekusi integrasi Pipeline AI (seperti NLP, Vision, dan LLM) yang paling relevan dan cost-effective guna menghasilkan Return on Investment maksimal bagi sistem.",
    grad: "linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #6366f1 100%)",
    shadow: "#ec4899",
    hardShadow: "#9d174d",
    pill: "🩷 RARE",
    emoji: "🚀",
    sparkle: "✦",
  },
];

/* ─── small floating pixel dots ─── */
const PixelDots = ({ color }: { color: string }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
    {[
      { top: "12%", left: "8%", size: 5 },
      { top: "18%", right: "10%", size: 4 },
      { bottom: "20%", left: "14%", size: 6 },
      { bottom: "14%", right: "8%", size: 4 },
      { top: "48%", right: "5%", size: 3 },
    ].map((p, i) => (
      <motion.div
        key={i}
        animate={{ opacity: [0.25, 0.65, 0.25], scale: [1, 1.4, 1] }}
        transition={{ duration: 3 + i * 0.7, repeat: Infinity, delay: i * 0.5 }}
        className="absolute rounded-sm"
        style={{
          ...p,
          width: p.size,
          height: p.size,
          backgroundColor: color,
          top: (p as any).top,
          left: (p as any).left,
          right: (p as any).right,
          bottom: (p as any).bottom,
        }}
      />
    ))}
  </div>
);

const AboutSection = () => {
  const [selectedTrait, setSelectedTrait] = useState<typeof traits[0] | null>(null);

  return (
    <section id="about" className="py-24 relative overflow-hidden pixel-grid">

      {/* ── Vivid Background Blobs ── */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.3, 0.55, 0.3], x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-8%] right-[-6%] w-[550px] h-[550px] blur-[130px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(236,72,153,0.25) 60%, transparent 100%)" }}
        />
        <motion.div
          animate={{ opacity: [0.25, 0.45, 0.25], x: [0, -20, 0], y: [0, 25, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[-10%] left-[-6%] w-[500px] h-[500px] blur-[130px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, rgba(16,185,129,0.2) 60%, transparent 100%)" }}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.38, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 8 }}
          className="absolute top-[45%] left-[38%] w-[380px] h-[380px] blur-[120px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Pixel badge */}
          <motion.span
            whileHover={{ scale: 1.07, rotate: -2 }}
            className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest px-5 py-2.5 rounded-2xl border-[3px] border-amber-400 shadow-[4px_4px_0px_#f59e0b] cursor-default"
            style={{ background: "linear-gradient(135deg, #fef3c7, #fde68a)", color: "#92400e" }}
          >
            <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }}>✨</motion.span>
            SOFTSKILLS &amp; ROLES
            <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>⚡</motion.span>
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-8 tracking-tight text-slate-800">
            PASSIONATE ABOUT{" "}
            <span
              className="text-transparent bg-clip-text block md:inline pr-2"
              style={{ backgroundImage: "linear-gradient(135deg, #ec4899 0%, #8b5cf6 50%, #3b82f6 100%)" }}
            >
              INTELLIGENCE
            </span>
          </h2>

          {/* Quote box */}
          <motion.div
            whileHover={{ scale: 1.015, rotate: -0.4 }}
            className="mt-12 max-w-4xl mx-auto relative group overflow-hidden rounded-[2.5rem] border-[3px] border-indigo-200 bg-white transition-all duration-300"
            style={{ boxShadow: "8px 8px 0px #c7d2fe" }}
          >

            <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 relative z-10">
              <div className="w-20 h-20 shrink-0 rounded-[1.5rem] bg-indigo-100 flex items-center justify-center border-[4px] border-indigo-200 shadow-lg rotate-[-5deg] group-hover:rotate-[5deg] transition-transform duration-300">
                <Quote className="w-8 h-8 text-indigo-500 fill-indigo-200" />
              </div>
              <p className="text-[17px] md:text-xl text-slate-700 leading-relaxed font-bold text-left">
                <span className="text-transparent bg-clip-text font-black text-2xl"
                  style={{ backgroundImage: "linear-gradient(135deg, #f43f5e, #a855f7)" }}>
                  Kita hidup di era AI,
                </span>{" "}dan kuncinya adalah{" "}
                <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-xl border-2 border-emerald-300 shadow-sm inline-block rotate-2 my-1">adaptasi</span>.{" "}
                AI bukanlah alat penghancur karir, melainkan partner kolaborasi. Manusia kini perlu berevolusi menjadi{" "}
                <span className="underline decoration-wavy decoration-4 decoration-pink-400 text-slate-900 font-black">AI Evaluator</span>{" "}
                 bukan sekadar eksekutor, tetapi sutradara yang mengarahkan kecerdasan buatan untuk menciptakan dampak nyata yang{" "}
                <span className="italic text-amber-500 text-2xl">luar biasa!</span> 
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ══════════ COLORFUL PIXEL GRADIENT CARDS ══════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 max-w-6xl mx-auto px-2">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, scale: 0.85, y: 50, rotate: i % 2 === 0 ? -3 : 3 }}
              whileInView={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, type: "spring", bounce: 0.45 }}
              whileHover={{ y: -10, scale: 1.03, rotate: i % 2 === 0 ? -1 : 1 }}
              whileTap={{ scale: 0.96, y: 2 }}
              onClick={() => setSelectedTrait(trait)}
              className="relative rounded-[2rem] p-7 cursor-pointer overflow-hidden flex flex-col group"
              style={{
                background: trait.grad,
                border: `3px solid rgba(255,255,255,0.35)`,
                boxShadow: `6px 6px 0px ${trait.hardShadow}, 0 20px 40px ${trait.shadow}40`,
              }}
            >
              {/* Shine sweep on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"
                style={{ background: "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)" }} />

              {/* Top row: icon */}
              <div className="flex items-start mb-5 relative z-10">
                {/* Icon box — white bg */}
                <motion.div
                  whileHover={{ rotate: -12, scale: 1.1 }}
                  className="w-16 h-16 rounded-[1.2rem] bg-white/25 border-[3px] border-white/50 flex items-center justify-center shadow-[3px_3px_0px_rgba(0,0,0,0.15)] backdrop-blur-sm"
                >
                  <trait.icon className="w-8 h-8 text-white drop-shadow-md" />
                </motion.div>
              </div>

              {/* Pill tag */}
              <span className="self-start text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-white/25 border-[2px] border-white/40 text-white mb-3 relative z-10 backdrop-blur-sm shadow-[2px_2px_0px_rgba(0,0,0,0.1)]">
                {trait.pill}
              </span>

              {/* Title & desc */}
              <h3 className="font-black text-[22px] text-white mb-2 relative z-10 leading-tight drop-shadow-md">{trait.title}</h3>
              <p className="text-[14px] text-white/85 font-semibold leading-relaxed relative z-10 flex-1 mb-5">{trait.shortDesc}</p>

              {/* Footer */}
              <div className="mt-auto pt-4 relative z-10 flex items-center justify-between border-t-2 border-white/20">
                <span className="text-[11px] font-black uppercase tracking-widest text-white/90 group-hover:text-white transition-colors">
                  EXPLORE ROLE
                </span>
                <motion.div
                  whileHover={{ rotate: 90, scale: 1.2 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                  className="w-9 h-9 rounded-xl bg-white/25 border-[2px] border-white/50 flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.15)]"
                >
                  <Zap className="w-4 h-4 text-white fill-white" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ══════════ COLORFUL MODAL ══════════ */}
      <AnimatePresence>
        {selectedTrait && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedTrait(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-xl" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 60, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40, rotate: 3 }}
              transition={{ type: "spring", bounce: 0.42, duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden flex flex-col rounded-[2.5rem] border-[4px] border-white/60"
              style={{
                background: "#fff",
                boxShadow: `8px 8px 0px ${selectedTrait.hardShadow}, 0 40px 80px ${selectedTrait.shadow}40`,
              }}
            >
              {/* ── Gradient Header ── */}
              <div
                className="relative h-48 w-full overflow-hidden"
                style={{ background: selectedTrait.grad }}
              >
                {/* Pixel dots in header */}
                <PixelDots color="rgba(255,255,255,0.6)" />

                {/* Shine */}
                <div className="absolute inset-0 opacity-30"
                  style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 60%)" }} />

                {/* Big floating emoji */}
                <motion.div
                  animate={{ y: [0, -14, 0], rotate: [0, 12, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                  className="absolute -bottom-6 right-6 text-[100px] opacity-25 drop-shadow-2xl select-none"
                >
                  {selectedTrait.emoji}
                </motion.div>

                {/* Close */}
                <button
                  onClick={() => setSelectedTrait(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/25 border-2 border-white/50 flex items-center justify-center text-white hover:bg-white hover:text-slate-800 transition-all z-30 shadow-md hover:scale-110 active:scale-90 backdrop-blur-sm"
                >
                  <X className="w-5 h-5" strokeWidth={3} />
                </button>

                {/* Pill in header */}
                <div className="absolute top-4 left-5">
                  <span className="text-[10px] font-black uppercase tracking-widest bg-white/25 border-2 border-white/40 text-white px-3 py-1.5 rounded-xl backdrop-blur-sm">
                    {selectedTrait.pill}
                  </span>
                </div>
              </div>

              {/* ── Content ── */}
              <div className="relative px-8 pb-8">
                {/* Floating icon badge */}
                <motion.div
                  initial={{ scale: 0.5, rotate: -15 }}
                  animate={{ scale: 1, rotate: -6 }}
                  transition={{ type: "spring", bounce: 0.55, delay: 0.1 }}
                  className="absolute -top-10 left-8 w-20 h-20 rounded-[1.5rem] flex items-center justify-center border-[4px] border-white shadow-xl"
                  style={{
                    background: selectedTrait.grad,
                    boxShadow: `4px 4px 0px ${selectedTrait.hardShadow}, 0 12px 30px ${selectedTrait.shadow}50`
                  }}
                >
                  <selectedTrait.icon className="w-10 h-10 text-white drop-shadow-lg" />
                </motion.div>

                <div className="mt-14">
                  {/* Title gradient */}
                  <h3
                    className="text-3xl md:text-4xl font-black mb-1 leading-tight text-transparent bg-clip-text"
                    style={{ backgroundImage: selectedTrait.grad }}
                  >
                    {selectedTrait.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-400 mb-5">{selectedTrait.shortDesc}</p>

                  {/* Description box with gradient left border */}
                  <div
                    className="relative rounded-2xl p-6 bg-slate-50 border-[3px] border-slate-100"
                    style={{ borderLeftColor: selectedTrait.shadow, borderLeftWidth: 4 }}
                  >
                    <Quote className="absolute top-3 left-3 w-10 h-10 text-slate-200 fill-slate-100" />
                    <p className="text-[15px] text-slate-700 leading-relaxed font-semibold relative z-10">
                      {selectedTrait.fullDesc}
                    </p>
                  </div>

                  {/* CTA close button */}
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97, y: 1 }}
                    onClick={() => setSelectedTrait(null)}
                    className="mt-5 w-full py-4 rounded-2xl font-black text-sm text-white uppercase tracking-widest border-[3px] border-white/30 transition-all"
                    style={{
                      background: selectedTrait.grad,
                      boxShadow: `4px 4px 0px ${selectedTrait.hardShadow}`
                    }}
                  >
                    {selectedTrait.emoji} Got it! ✓
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AboutSection;
