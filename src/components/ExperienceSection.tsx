import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: "notion-productivity",
    company: "Personal Productivity",
    role: "Notion Architect & Time Planner",
    date: "Continuous",
    location: "Workspace",
    image: "/asset/exp_notion.png",
    color: "#d97706",
    description: [
      "Merancang ruang kerja produktivitas (Second Brain) di Notion untuk mengatur kalender akademis dan melacak kebiasaan harian secara sistematis.",
      "Menyusun kerangka Timeline riset AI dan timeline proyek aplikasi agar selalu tereksekusi rapi sesuai target yang ditetapkan.",
      "Membangun ekosistem database terintegrasi yang menyimpan resource materi belajar, ide inovasi, dan jejak progres koding secara terpusat.",
    ],
  },
  {
    id: "creative-artist",
    company: "Creative Design & Arts",
    role: "Visual Artist & UI Designer",
    date: "Life-long Passion",
    location: "Digital Space",
    image: "/asset/exp_artist.png",
    color: "#db2777",
    description: [
      "Mengeksplorasi seni secara mendalam melalui menggambar manual dan melukis dengan teknik estetika tingkat tinggi.",
      "Menguasai Colour Theory dan psikologi warna untuk menciptakan harmoni visual yang unik dan membangkitkan emosi positif.",
      "Menerapkan insting seni organik ke dunia digital melalui UI/UX Web Design dan perancangan Design System pixel-perfect di Figma.",
    ],
  },
  {
    id: "ai-coordinator",
    company: "Sistem Informasi",
    role: "Koordinator — Sistem Cerdas",
    date: "Sedang Berlangsung",
    location: "Campus",
    image: "/asset/exp_ai.png",
    color: "#7c3aed",
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
    image: "/asset/exp_biology.png",
    color: "#16a34a",
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
    image: "/asset/exp_english.png",
    color: "#ea580c",
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
    <section id="experience" className="py-32 relative overflow-hidden">

      {/* ── Ambient Background ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <AnimatePresence>
          <motion.div
            key={exp.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `radial-gradient(ellipse 60% 60% at 70% 30%, ${exp.color}18, transparent)`,
            }}
          />
        </AnimatePresence>

        {/* Floating assets */}
        <motion.img
          src="/asset/rocket.png" alt="" aria-hidden="true"
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-16 w-16 h-16 opacity-15 select-none"
        />
        <motion.img
          src="/asset/sparkle.png" alt="" aria-hidden="true"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-28 left-12 w-10 h-10 opacity-20 select-none"
        />
        <motion.img
          src="/asset/love.png" alt="" aria-hidden="true"
          animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-2/3 right-[8%] w-12 h-12 opacity-15 select-none"
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
            / JOURNEY
          </p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-800 leading-none">
            My{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: `linear-gradient(120deg, ${exp.color}, #a855f7)` }}
            >
              Experience
            </span>
          </h2>
        </motion.div>

        {/* ── Main Layout: Timeline Rail + Detail Card ── */}
        <div className="flex flex-col lg:flex-row gap-12 items-start max-w-6xl mx-auto">

          {/* ── Left: Vertical Timeline Rail ── */}
          <div className="relative flex flex-row lg:flex-col gap-0 lg:gap-0 w-full lg:w-72 shrink-0">
            {/* Vertical line (desktop) */}
            <div className="hidden lg:block absolute left-[18px] top-8 bottom-8 w-px bg-slate-200" />

            {experiences.map((e, i) => (
              <motion.button
                key={e.id}
                onClick={() => setActiveId(e.id)}
                className="relative flex items-center gap-4 py-4 lg:py-5 pr-4 text-left group w-full"
                whileHover={{ x: 4 }}
              >
                {/* Circle node on timeline */}
                <div className="relative shrink-0 z-10">
                  <motion.div
                    animate={activeId === e.id
                      ? { scale: [1, 1.2, 1], boxShadow: `0 0 0 6px ${e.color}30` }
                      : { scale: 1, boxShadow: "none" }
                    }
                    transition={{ duration: 0.5, repeat: activeId === e.id ? Infinity : 0 }}
                    className="w-9 h-9 rounded-full border-2 bg-white overflow-hidden shadow-sm transition-all duration-300"
                    style={{
                      borderColor: activeId === e.id ? e.color : "#e2e8f0",
                    }}
                  >
                    <img
                      src={e.image}
                      alt={e.company}
                      className="w-full h-full object-cover"
                      style={{ mixBlendMode: "multiply" }}
                    />
                  </motion.div>
                </div>

                {/* Text label */}
                <div className="hidden lg:block">
                  <p
                    className={`text-sm font-bold transition-colors leading-tight ${
                      activeId === e.id ? "text-slate-800" : "text-slate-400"
                    }`}
                  >
                    {e.company}
                  </p>
                  <p className="text-[10px] font-mono text-slate-400 mt-0.5 truncate max-w-[160px]">
                    {e.role}
                  </p>
                </div>

                {/* Active marker */}
                {activeId === e.id && (
                  <motion.div
                    layoutId="exp-marker"
                    className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-l-full"
                    style={{ background: e.color }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* ── Right: Detail Card ── */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="relative bg-white rounded-3xl overflow-hidden"
                style={{ boxShadow: `0 0 0 1px ${exp.color}30, 0 24px 60px ${exp.color}18` }}
              >
                {/* Top accent strip */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }} />

                <div className="p-8 md:p-10">

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
                    {/* Avatar */}
                    <motion.div
                      initial={{ scale: 0.7, rotate: -8 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", bounce: 0.5 }}
                      className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg"
                      style={{ background: `${exp.color}20`, border: `2px solid ${exp.color}40` }}
                    >
                      <img
                        src={exp.image}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                        style={{ mixBlendMode: "multiply" }}
                      />
                    </motion.div>

                    {/* Title area */}
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

                    {/* Meta tags */}
                    <div className="sm:ml-auto flex flex-wrap sm:flex-col gap-2 text-xs">
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

                  {/* Divider */}
                  <div className="w-full h-px mb-8" style={{ background: `linear-gradient(90deg, ${exp.color}40, transparent)` }} />

                  {/* Description points */}
                  <div className="space-y-5">
                    {exp.description.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                        className="flex gap-4 items-start group/point"
                      >
                        {/* Bullet */}
                        <div
                          className="mt-2 w-5 h-5 shrink-0 rounded-full flex items-center justify-center"
                          style={{ background: `${exp.color}15`, border: `1.5px solid ${exp.color}50` }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ background: exp.color }}
                          />
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
