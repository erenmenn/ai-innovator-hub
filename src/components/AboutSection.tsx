import { motion } from "framer-motion";
import { Lightbulb, Target, Users, BrainCircuit, Sparkles, LayoutTemplate, Quote, Zap } from "lucide-react";

const traits = [
  {
    icon: Users,
    title: "Leadership",
    shortDesc: "Empowering teams & driving vision.",
    features: [
      "Lead teams with clarity.",
      "Build vision across stakeholders.",
      "Drive execution and alignment."
    ],
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
    features: [
      "Analyze complex issues.",
      "Design clear and practical solutions.",
      "Deliver reliable impact."
    ],
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
    features: [
      "Generate original ideas.",
      "See fresh perspectives.",
      "Create memorable solutions."
    ],
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
    features: [
      "Interpret data with precision.",
      "Find patterns that matter.",
      "Make decisions based on logic."
    ],
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
    features: [
      "Structure systems from concept.",
      "Design user-centered workflows.",
      "Align product with execution."
    ],
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
    features: [
      "Translate AI into real outcomes.",
      "Build tech that solves real problems.",
      "Keep impact measurable and clear."
    ],
    fullDesc: "Menerjemahkan bottleneck dunia nyata menjadi kapabilitas komputasi buatan. Saya merancang dan mengeksekusi integrasi Pipeline AI (seperti NLP, Vision, dan LLM) yang paling relevan dan cost-effective guna menghasilkan Return on Investment maksimal bagi sistem.",
    grad: "linear-gradient(135deg, #ec4899 0%, #a855f7 50%, #6366f1 100%)",
    shadow: "#ec4899",
    hardShadow: "#9d174d",
    pill: "🩷 RARE",
    emoji: "🚀",
    sparkle: "✦",
  },
];

const AboutSection = () => {

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
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: "easeOut" }}
              className="relative rounded-3xl p-7 cursor-default overflow-hidden flex flex-col"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(148,163,184,0.16)",
                boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
              }}
            >
              {/* Top row: icon */}
              <div className="flex items-start mb-5 relative z-10">
                {/* Icon box */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm"
                  style={{ background: trait.grad }}
                >
                  <trait.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Pill tag */}
              <span className="self-start text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-200 mb-3 relative z-10 shadow-sm">
                {trait.pill}
              </span>

              {/* Title & desc */}
              <h3 className="font-semibold text-[22px] text-slate-900 mb-3 relative z-10 leading-tight">{trait.title}</h3>
              {trait.features?.map((line, idx) => (
                <p key={idx} className="text-[14px] text-slate-600 font-medium leading-relaxed relative z-10 mb-2">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default AboutSection;
