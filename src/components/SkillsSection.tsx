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

// ── Soft Skills with expandable experience detail ─────────────────────────────
const softSkills = [
  {
    icon: Crown, name: "Gaya Kepemimpinan", emoji: "👑", color: "#ec4899",
    bgGrad: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
    tagline: "Partisipatif, tegas, dan hadir sebagai penggerak tim",
    experience: [
      "Bagi saya, kepemimpinan bukan soal posisi, tapi tentang kepekaan membaca situasi dan keberanian untuk bertindak di waktu yang tepat.",
      "Saya hadir sebagai penggerak yang memastikan setiap ide punya ruang untuk tumbuh, sekaligus menjaga arah tim tetap fokus pada tujuan utama. Dalam dinamika tim, saya terbiasa menyeimbangkan antara mendengar dan mengambil keputusan ,kapan harus membuka ruang diskusi, dan kapan harus melangkah dengan tegas.",
      "Pendekatan yang saya gunakan bersifat adaptif dan partisipatif: membangun kepercayaan, mendorong kontribusi aktif, dan memastikan setiap anggota merasa memiliki peran dalam hasil akhir. Bagi saya, kepemimpinan yang efektif adalah ketika tim tidak hanya bergerak bersama, tetapi juga berkembang bersama.",
    ],
  },
  {
    icon: Lightbulb, name: "Inovasi & Kreativitas", emoji: "💡", color: "#f59e0b",
    bgGrad: "linear-gradient(135deg, #f97316 0%, #eab308 100%)",
    tagline: "Berani mempertanyakan dan tidak puas dengan yang biasa",
    experience: [
      "Bagi saya, inovasi dimulai dari kepekaan melihat celah yang sering terlewat. Saya terbiasa mengurai masalah hingga ke akar, lalu membangun kembali pendekatan yang lebih sederhana, relevan, dan berdampak nyata.",
      "Kreativitas bukan sekadar menghasilkan ide baru, tetapi bagaimana memastikan solusi tersebut benar-benar menjawab kebutuhan. Saya selalu menguji setiap gagasan dengan pertanyaan mendasar: apakah ini menyelesaikan masalah, atau hanya terlihat menarik di permukaan?",
      "Saya terbiasa mengeksplorasi pendekatan yang belum lazim, termasuk membangun solusi dari nol ketika diperlukan. Dalam prosesnya, saya menggabungkan logika, eksperimen, dan keberanian mengambil risiko terukur untuk menemukan cara yang lebih efektif.",
      "Bagi saya, inovasi yang baik bukan yang paling kompleks, melainkan yang paling tepat guna dan mampu memberikan dampak yang bisa dirasakan.",
    ],
  },
  {
    icon: Zap, name: "Problem Solving", emoji: "⚡", color: "#3b82f6",
    bgGrad: "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
    tagline: "Wondering by default: Menelusuri masalah hingga ke akar",
    experience: [
      "Mengutamakan pemahaman akar masalah dengan selalu mengajukan pertanyaan yang tepat sebelum menentukan solusi",
      "Terbiasa mengeksplorasi “mengapa” sebelum “bagaimana”, memastikan pendekatan yang diambil tidak hanya menyelesaikan gejala",
      "Memecah masalah kompleks menjadi bagian yang terstruktur, lalu merangkainya kembali menjadi solusi yang logis dan berdampak",
    ],
  },
  {
    icon: Users, name: "Kolaborasi & Komunikasi", emoji: "🤝", color: "#10b981",
    bgGrad: "linear-gradient(135deg, #10b981 0%, #14b8a6 100%)",
    tagline: "Membangun kepercayaan sebelum membangun output",
    experience: [
      "Aktif membangun hubungan yang positif dalam tim dengan menciptakan suasana komunikasi yang terbuka, nyaman, dan saling menghargai",
      "Terbiasa berperan sebagai penghubung antara siswa dan pengajar, membantu menyampaikan kebutuhan serta menjembatani perbedaan pemahaman",
      "Mampu menyampaikan ide dengan cara yang jelas dan mudah diterima, sekaligus terbuka terhadap masukan untuk mencapai hasil terbaik bersama",
      "Memiliki kepekaan sosial dalam membaca situasi dan dinamika tim, sehingga dapat menyesuaikan pendekatan komunikasi secara efektif",
    ],
  },
];

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
  const [openSoft, setOpenSoft] = useState<number | null>(null);
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

        {/* ── Merged two-column layout ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-start">

          {/* ══ LEFT: Hard Skills ══ */}
          <div>
            {/* Section label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
              <span className="text-[9px] font-pixel text-slate-400 uppercase tracking-widest whitespace-nowrap">⚙ Technical Skills</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
            </div>

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
              {hardSkillCategories.map((c, i) => (
                <button
                  key={c.id} onClick={() => setActiveTab(i)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold border-2 transition-colors duration-300"
                  style={activeTab === i
                    ? { background: `linear-gradient(135deg, ${c.gradFrom}, ${c.gradTo})`, color: "#fff", borderColor: "transparent", boxShadow: `0 2px 8px ${c.glow}` }
                    : { background: "rgba(255,255,255,0.75)", color: "#64748b", borderColor: "#e2e8f0", boxShadow: "none" }
                  }
                >
                  <span className="text-base leading-none">{c.emoji}</span>
                  {c.label}
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="relative">
              {/* Orbiting stickers — ANIMASI BLUR DIMATIKAN AGAR TIDAK LAG */}
              <div className="absolute -top-6 -right-5 z-30 pointer-events-none">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-15" style={{ backgroundColor: cat.gradFrom, transform: "scale(0.8)" }} />
                  <img src="/asset/rocket.png" alt="" width={52} height={52} className="relative z-10 drop-shadow-sm" />
                </div>
              </div>
              <div className="absolute -top-4 -left-6 z-30 pointer-events-none">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-15" style={{ backgroundColor: "#fcd34d", transform: "scale(0.8)" }} />
                  <img src="/asset/sparkle.png" alt="" width={40} height={40} className="relative z-10 drop-shadow-sm" />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-4 z-30 pointer-events-none">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-15" style={{ backgroundColor: cat.gradTo, transform: "scale(0.7)" }} />
                  <img src="/asset/api.png" alt="" width={80} height={80} className="relative z-10" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-3 z-30 pointer-events-none">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-15" style={{ backgroundColor: "#818cf8", transform: "scale(0.7)" }} />
                  <img src="/asset/bintang.png" alt="" width={44} height={44} className="relative z-10 drop-shadow-sm" />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div key={cat.id}
                  initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-2 gap-3">
                  {cat.items.map((skill, i) => {
                    const ts = tagStyle[skill.tag];
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.95, y: 8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.05, type: "spring", bounce: 0.2 }}
                        className="group relative rounded-2xl p-4 cursor-default overflow-hidden transition-colors duration-300"
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
                        <div className="flex items-start justify-between mb-3 relative z-10">
                          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                            style={{ background: `linear-gradient(135deg, ${cat.gradFrom}, ${cat.gradTo})` }}>
                            <skill.icon className="w-5 h-5" />
                          </div>
                          <span className="text-[8px] font-pixel font-bold px-2 py-1 rounded-lg border"
                            style={{ background: ts.bg, color: ts.text, borderColor: ts.border }}>
                            {skill.tag}
                          </span>
                        </div>
                        <h4 className="font-bold text-slate-800 text-sm mb-3 relative z-10 leading-snug">{skill.name}</h4>
                        <div className="relative z-10">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[10px] text-slate-400 font-mono">Proficiency</span>
                            <span className="text-[10px] font-bold" style={{ color: cat.accent }}>{skill.level}%</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-slate-100 overflow-hidden">
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

          {/* ══ RIGHT: Soft Skills — cute pastel shelf ══ */}
          <motion.div
            initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.15 }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-200" />
              <span className="text-[9px] font-pixel text-slate-400 uppercase tracking-widest whitespace-nowrap">✦ Soft Skills</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-200" />
            </div>

            {/* Panel — cute dashed wrapper */}
            <div className="relative rounded-3xl p-6"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "2px dashed rgba(148,163,184,0.25)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.02)",
                backdropFilter: "blur(12px)"
              }}
            >
              {/* Panel header */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 rounded-[1.2rem] flex items-center justify-center text-white shadow-md relative"
                  style={{ background: "linear-gradient(135deg, #f59e0b, #ec4899, #8b5cf6)" }}>
                  <Sparkles className="w-6 h-6" />
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white" style={{ background: "#10b981" }} />
                </div>
                <div>
                  <p className="text-[10px] font-pixel text-slate-400 uppercase tracking-widest mb-0.5">beyond the code</p>
                  <h3 className="font-black text-slate-800 text-lg leading-tight">Click to explore</h3>
                </div>
              </div>

              {/* Accordion shelf */}
              <div className="flex flex-col gap-3 relative z-10">
                {softSkills.map((skill, i) => {
                  const isOpen = openSoft === i;
                  return (
                    <div key={skill.name}>
                      {/* Shelf row — Thick Solid Gradient Button! */}
                      <button
                        onClick={() => setOpenSoft(isOpen ? null : i)}
                        className="relative w-full flex items-center gap-4 p-3.5 rounded-2xl text-left group overflow-hidden transition-all duration-300"
                        style={{
                          background: skill.bgGrad, 
                          border: `2px solid ${skill.color}`,
                          boxShadow: isOpen ? `0 8px 25px ${skill.color}60` : `0 4px 12px ${skill.color}40`,
                        }}
                      >
                        {/* Icon Bubble - Glassy white over the thick gradient background */}
                        <div
                          className="w-12 h-12 rounded-[1rem] flex items-center justify-center text-white shrink-0 transition-all duration-300 shadow-sm"
                          style={{
                            background: "rgba(255, 255, 255, 0.2)",
                            backdropFilter: "blur(4px)"
                          }}
                        >
                          <skill.icon className="w-5 h-5 drop-shadow-sm" />
                        </div>

                        {/* Name + tagline */}
                        <div className="flex-1 min-w-0 ml-1.5">
                          <p className="font-extrabold text-white text-[15px] leading-tight transition-colors duration-300 drop-shadow-md">
                            {skill.name}
                          </p>
                          <p className="text-[11px] font-medium leading-snug mt-1 truncate transition-colors duration-300 text-white/95">
                            {skill.tagline}
                          </p>
                        </div>

                        {/* Chevron dot */}
                        <div
                          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                          style={{
                            background: "rgba(255, 255, 255, 0.25)",
                            backdropFilter: "blur(4px)",
                            transform: `rotate(${isOpen ? "180deg" : "0deg"})`,
                            boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
                          }}
                        >
                          <ChevronDown className="w-4 h-4 text-white drop-shadow-sm transition-colors duration-300" />
                        </div>
                      </button>

                      {/* Expandable experience card */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mx-2 mb-2 mt-2 rounded-[1.2rem] overflow-hidden bg-white"
                              style={{ border: `2px solid ${skill.color}25`, boxShadow: `0 8px 24px ${skill.color}15` }}>
                              {/* Colored header strip */}
                              <div className="px-5 py-3.5 flex items-center gap-2.5"
                                style={{ background: `linear-gradient(135deg, ${skill.color}15, ${skill.color}05)` }}>
                                <div className="w-1.5 h-4 rounded-full" style={{ background: skill.color }} />
                                <span className="text-[10px] font-pixel uppercase tracking-widest font-bold" style={{ color: skill.color }}>
                                  My Experience
                                </span>
                              </div>

                              {/* Bullets */}
                              <div className="p-5 pt-4 space-y-3.5">
                                {skill.experience.map((exp, ei) => (
                                  <motion.div key={ei}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: ei * 0.07, duration: 0.28 }}
                                    className="flex items-start gap-3"
                                  >
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: skill.color }} />
                                    <p className="text-sm text-slate-600 leading-relaxed font-medium">{exp}</p>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Fun tagline */}
              <div className="mt-5 p-4 rounded-2xl text-center relative z-10 bg-white"
                style={{ border: "2px dashed rgba(148,163,184,0.25)" }}>
                <p className="text-[10px] font-pixel tracking-widest text-slate-400">
                  ✦ skills that can't be measured, but always felt ✦
                </p>
              </div>
            </div> {/* end panel wrapper */}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
