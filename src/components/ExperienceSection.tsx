import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: "ai-engineer-path",
    company: "Dicoding Academy",
    role: "AI Engineer Path Graduate",
    date: "Selesai",
    location: "Online",
    image: "/asset/exp_ai_path.png",
    color: "#0ea5e9",
    gradFrom: "#0ea5e9",
    gradTo: "#3b82f6",
    description: [
      "Memulai perjalanan dari dasar Python hingga pengenalan library tools esensial untuk pengembangan Machine Learning dan AI.",
      "Mengeksplorasi berbagai domain AI tingkat lanjut seperti NLP, Recommendation System, Time Series Forecasting, hingga Image Classification.",
      "Menghadapi tantangan penggunaan tools Deep Learning baru, membangun custom layer untuk model Time Series, dan menulis laporan ilmiah komprehensif dari hasil proyek.",
      "Berhasil menyelesaikan seluruh rangkaian pelatihan dan meraih sertifikasi kompetensi untuk Machine Learning Terapan serta Deep Learning Mahir."
    ],
  },
  {
    id: "hackathon-pkm",
    company: "HACKATHON X Digdaya & Lomba PKM",
    role: "Lead AI Builder & Tech",
    date: "2026",
    location: "Tingkat Nasional",
    image: "/asset/exp_hackathon.png",
    color: "#10b981",
    gradFrom: "#10b981",
    gradTo: "#34d399",
    description: [
      "Membangun proyek 'Satu Tani' yang memanfaatkan AI Demand Forecasting untuk membantu sektor pertanian memprediksi kebutuhan pasar secara akurat.",
      "Memimpin tim kolaborasi sebagai Lead AI Builder & Tech, menguatkan kerja sama tim (team collaboration) untuk menyelaraskan visi teknis proyek dan inovasi.",
      "Mengasah kemampuan critical thinking dan problem-solving dalam mendesain arsitektur solusi AI yang solutif serta inovatif untuk kompetisi.",
    ],
  },
  {
    id: "tutor-student-community",
    company: "Tutor Student Community",
    role: "Tutor (Fisika, MTK, Biologi)",
    date: "2023",
    location: "High School",
    image: "/asset/exp_tutor.png",
    color: "#0284c7",
    gradFrom: "#0284c7",
    gradTo: "#0ea5e9",
    description: [
      "Ditunjuk secara khusus oleh guru sebagai perwakilan kelas untuk mengikuti kelas tambahan intensif pada 3 mata pelajaran (Fisika, Matematika, dan Biologi).",
      "Bertindak sebagai tutor sebaya untuk membantu teman sekelas yang mengalami kesulitan dalam memahami materi rumit dan untuk persiapan ujian sekolah.",
      "Mendapatkan kepercayaan penuh dari guru dan melatih soft skill certainty, resiliensi, serta kemampuan komunikasi saat mengajar rekan sebaya.",
    ],
  },
  {
    id: "creative-artist",
    company: "Creative Design & Arts",
    role: "Visual Artist & UI Designer",
    date: "Life-long Passion",
    location: "Digital Space",
    image: "/asset/exp_artist_new.png",
    color: "#db2777",
    gradFrom: "#db2777",
    gradTo: "#d946ef",
    description: [
      "Mengeksplorasi seni secara mendalam melalui menggambar manual dan melukis dengan teknik estetika tingkat tinggi.",
      "Menguasai Colour Theory dan psikologi warna untuk menciptakan harmoni visual yang unik dan membangkitkan emosi positif.",
      "Menerapkan insting seni ke dunia digital melalui UI/UX Web Design dan perancangan Design System pixel-perfect di Figma & Canva.",
    ],
  },
  {
    id: "ai-coordinator",
    company: "Sistem Informasi",
    role: "Koordinator — Sistem Cerdas",
    date: "Sedang Berlangsung",
    location: "Campus",
    image: "/asset/exp_ai_coord.png",
    color: "#7c3aed",
    gradFrom: "#7c3aed",
    gradTo: "#4f46e5",
    description: [
      "Bertanggung jawab atas penjadwalan rutin kelas dan distribusi silabus untuk mata kuliah Sistem Cerdas.",
      "Bertindak sebagai jembatan informasi utama yang mencatat dan meneruskan intisari materi kepada seluruh mahasiswa kelas.",
      "Mendukung progres belajar kelas secara kolaboratif, berkontribusi pada peningkatan median nilai rata-rata rekan sekelas secara positif.",
    ],
  },
  {
    id: "biology-peer",
    company: "Kelas Biologi",
    role: "Course Coordinator & Tutor",
    date: "2022 – 2023",
    location: "High School",
    image: "/asset/exp_biology_new.png",
    color: "#16a34a",
    gradFrom: "#16a34a",
    gradTo: "#06b6d4",
    description: [
      "Berkolaborasi dengan guru untuk merumuskan teknik simulasi pembelajaran Biologi agar lebih mudah dipahami siswa.",
      "Membangun dan memimpin forum belajar ekstra (Peer Tutoring) sebelum ujian untuk membongkar konsep yang dirasa rumit.",
      "Diberi kepercayaan untuk menggantikan peran guru mengajar di depan kelas, termasuk membawakan kisi-kisi krusial ujian.",
    ],
  },
  {
    id: "english-club",
    company: "English Club",
    role: "Pemateri Inti & Organizer",
    date: "2022 – 2023",
    location: "High School",
    image: "/asset/exp_tutor.png",
    color: "#ea580c",
    gradFrom: "#ea580c",
    gradTo: "#ec4899",
    description: [
      "Menghidupkan ekskul bahasa Inggris dengan mengemas kurikulum Public Speaking layaknya sebuah Game yang seru untuk dieksplorasi.",
      "Menjadi penggerak utama suksesnya latihan debat antar-sekolah, mengelola dan menjaga retensi 50+ peserta agar tetap aktif.",
      "Berperan sebagai Core Speaker yang mendorong rasa percaya diri, keberanian public speaking, dan kebersamaan antar siswa.",
    ],
  },
];

const ExperienceSection = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);
  const exp = experiences.find((e) => e.id === activeId)!;

  return (
    <section id="experience" className="py-32 relative overflow-hidden pixel-grid">

      {/* ── Soft smoke — matches other sections ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -25, 30, 0], scale: [1, 1.2, 0.9, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[8%] left-[5%] w-[450px] h-[450px] rounded-full blur-[110px] bg-pink-400/10"
        />
        <motion.div
          animate={{ x: [0, -30, 40, 0], y: [0, 35, -20, 0], scale: [1, 0.9, 1.15, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-[8%] right-[5%] w-[500px] h-[500px] rounded-full blur-[120px] bg-violet-400/10"
        />
      </div>

      {/* ── Floating PNG Decorations ── */}
      <motion.img
        src="/asset/rocket.png" alt="" aria-hidden="true"
        animate={{ y: [0, -22, 0], x: [0, 8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-14 w-16 h-16 opacity-20 pointer-events-none select-none drop-shadow-lg"
      />
      <motion.img
        src="/asset/api.png" alt="" aria-hidden="true"
        animate={{ y: [0, 14, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-24 left-10 w-16 h-16 opacity-15 pointer-events-none select-none drop-shadow-lg"
      />
      <motion.img
        src="/asset/sparkle.png" alt="" aria-hidden="true"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 right-[5%] w-9 h-9 opacity-20 pointer-events-none select-none"
      />

      <div className="container mx-auto px-6">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/70 backdrop-blur border border-primary/20 shadow-sm rounded-full mb-5">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: exp.color }} />
            <span className="text-[9px] font-pixel text-primary tracking-widest uppercase">MY_JOURNEY.EXE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
            My{" "}
            <span
              className="text-transparent bg-clip-text italic pr-2"
              style={{ backgroundImage: `linear-gradient(120deg, ${exp.gradFrom}, ${exp.gradTo})` }}
            >
              Experience
            </span>
          </h2>
        </motion.div>

        {/* ── Main Layout: Timeline Rail + Detail Card ── */}
        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">

          {/* ── Left: Timeline Rail ── */}
          <div className="relative flex flex-row lg:flex-col gap-0 w-full lg:w-72 shrink-0">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-[17px] top-8 bottom-8 w-px bg-slate-200" />

            {experiences.map((e) => (
              <motion.button
                key={e.id}
                onClick={() => setActiveId(e.id)}
                whileHover={{ x: 4 }}
                className="relative flex items-center gap-4 py-4 lg:py-5 pr-4 text-left group w-full"
              >
                {/* Circle node */}
                <div className="relative shrink-0 z-10">
                  <motion.div
                    animate={activeId === e.id
                      ? { scale: [1, 1.18, 1] }
                      : { scale: 1 }
                    }
                    transition={{ duration: 1.5, repeat: activeId === e.id ? Infinity : 0, ease: "easeInOut" }}
                    className="w-9 h-9 rounded-full border-2 overflow-hidden shadow-sm transition-all duration-300"
                    style={{
                      borderColor: activeId === e.id ? e.color : "#e2e8f0",
                      boxShadow: activeId === e.id ? `0 0 0 4px ${e.color}25` : "none",
                      background: activeId === e.id ? `${e.color}15` : "white",
                    }}
                  >
                    <img src={e.image} alt={e.company} className="w-full h-full object-cover" style={{ mixBlendMode: "multiply" }} />
                  </motion.div>
                </div>

                {/* Label */}
                <div className="hidden lg:block">
                  <p className={`text-sm font-bold transition-colors leading-tight ${activeId === e.id ? "text-slate-800" : "text-slate-400"}`}>
                    {e.company}
                  </p>
                  <p className="text-[10px] font-mono text-slate-400 mt-0.5 truncate max-w-[160px]">
                    {e.date}
                  </p>
                </div>

                {/* Active right marker */}
                {activeId === e.id && (
                  <motion.div
                    layoutId="exp-marker"
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-l-full"
                    style={{ background: `linear-gradient(180deg, ${e.gradFrom}, ${e.gradTo})` }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* ── Right: Detail Card (with floating stickers orbiting it) ── */}
          <div className="flex-1 relative">

            {/* ── Floating stickers around the card ── */}
            <motion.div
              className="absolute -top-8 -right-8 z-30 pointer-events-none select-none"
              animate={{ y: [0, -16, 0], rotate: [-8, 8, -8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl opacity-60" style={{ backgroundColor: `${exp.gradFrom}80`, transform: "scale(0.9)" }} />
                <img src="/asset/rocket.png" alt="" width={72} height={72} className="relative z-10 drop-shadow-2xl" />
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-4 -left-8 z-30 pointer-events-none select-none"
              animate={{ scale: [1, 1.18, 1], rotate: [0, 18, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl opacity-50" style={{ backgroundColor: "rgba(255,215,71,0.7)", transform: "scale(0.9)" }} />
                <img src="/asset/sparkle.png" alt="" width={50} height={50} className="relative z-10 drop-shadow-2xl" />
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-10 -left-6 z-30 pointer-events-none select-none"
              animate={{ y: [0, 14, 0], x: [0, -8, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl opacity-55" style={{ backgroundColor: `${exp.gradTo}80`, transform: "scale(0.85)" }} />
                <img src="/asset/api.png" alt="" width={78} height={78} className="relative z-10 drop-shadow-2xl" />
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -right-4 z-30 pointer-events-none select-none"
              animate={{ rotate: [-10, 10, -10], y: [0, -12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl opacity-45" style={{ backgroundColor: "rgba(255,107,138,0.5)", transform: "scale(0.85)" }} />
                <img src="/asset/love.png" alt="" width={130} height={130} className="relative z-10 drop-shadow-2xl" />
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(20px)",
                  border: `1px solid ${exp.color}25`,
                  boxShadow: `0 0 0 1px ${exp.color}15, 0 20px 50px ${exp.color}12, 0 4px 16px rgba(0,0,0,0.05)`
                }}
              >
                {/* Top gradient strip */}
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${exp.gradFrom}, ${exp.gradTo}, transparent)` }} />

                {/* Gradient hint in top-right corner */}
                <div
                  className="absolute top-0 right-0 w-60 h-60 rounded-full blur-3xl opacity-20 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${exp.gradFrom}, transparent 70%)` }}
                />

                <div className="p-8 md:p-10 relative z-10">

                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                    {/* Avatar */}
                    <motion.div
                      initial={{ scale: 0.7, rotate: -8 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${exp.gradFrom}25, ${exp.gradTo}15)`,
                        border: `2px solid ${exp.color}30`
                      }}
                    >
                      <img src={exp.image} alt={exp.company} className="w-full h-full object-cover" style={{ mixBlendMode: "multiply" }} />
                    </motion.div>

                    {/* Title */}
                    <div className="space-y-2">
                      <h3 className="text-2xl md:text-3xl font-black text-slate-800 leading-tight">
                        {exp.company}
                      </h3>
                      <p
                        className="inline-block text-sm font-semibold px-3 py-1 rounded-full"
                        style={{ color: exp.color, background: `${exp.color}15` }}
                      >
                        {exp.role}
                      </p>
                    </div>

                    {/* Meta */}
                    <div className="sm:ml-auto flex flex-wrap sm:flex-col gap-2 text-xs shrink-0">
                      <div className="flex items-center gap-2 font-mono text-slate-500">
                        <Calendar className="w-3.5 h-3.5" style={{ color: exp.color }} />
                        {exp.date}
                      </div>
                      <div className="flex items-center gap-2 font-mono text-slate-500">
                        <MapPin className="w-3.5 h-3.5" style={{ color: exp.color }} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Divider with gradient */}
                  <div className="w-full h-px mb-8" style={{ background: `linear-gradient(90deg, ${exp.color}40, transparent)` }} />

                  {/* Description */}
                  <div className="space-y-5">
                    {exp.description.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -14 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                        className="flex gap-4 items-start group/point hover:bg-white/50 rounded-xl p-2 -mx-2 transition-colors"
                      >
                        <div className="mt-2 w-5 h-5 shrink-0 rounded-full flex items-center justify-center"
                          style={{ background: `${exp.color}15`, border: `1.5px solid ${exp.color}40` }}>
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.color }} />
                        </div>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
