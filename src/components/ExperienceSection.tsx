import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronRight, Share2, GitBranch, Zap } from "lucide-react";

type Branch = {
  title: string;
  subtitle?: string;
  event?: string;
  project?: string;
  tags: string[];
  whatWasBuilt: string;
  impact: string;
};

type Chapter = {
  id: string;
  year: string;
  chapterNum: string;
  title: string;
  role: string;
  date: string;
  location: string;
  description: string;
  image: string;
  color: string;
  gradFrom: string;
  gradTo: string;
  branchTitle: string;
  branches: Branch[];
};

const chapters: Chapter[] = [
  {
    id: "blockdev",
    year: "2026",
    chapterNum: "01",
    title: "BLOCKDEV - Builder Program",
    role: "AI Representative & Generative AI Leader",
    date: "2026 — Sekarang",
    location: "Bekasi",
    description:
      "Terpilih sebagai AI Leader Representative wilayah Bekasi dalam program AI Builder Lead dan resmi ditunjuk sebagai Generative AI Mentor setelah menyelesaikan pelatihan intensif Generative AI selama lebih dari 1,5 bulan.",
    image: "/asset/story/mentor-blockdev.jpeg",
    color: "#ec4899",
    gradFrom: "#ec4899",
    gradTo: "#a855f7",
    branchTitle: "MAIN -> MENTORING",
    branches: [
      {
        title: "Generative AI Mentor",
        tags: ["Workshop", "LLM", "RAG", "Agentic AI"],
        whatWasBuilt:
          "Memimpin 8 sesi workshop hands-on mencakup Large Language Models (LLM), Transformer Architecture, Retrieval-Augmented Generation (RAG), Agent RAG, LangChain, LangGraph, dan Agentic AI.",
        impact:
          "Mengimplementasikan pendekatan praktik langsung (learning-by-building) di setiap sesi.",
      },
      {
        title: "Project Manager",
        tags: ["Project Management", "Ideation", "Deployment"],
        whatWasBuilt:
          "Berperan sebagai Project Manager bagi tim-tim peserta sepanjang program, mendampingi proses pembangunan final project dari tahap ideation hingga deployment.",
        impact:
          "Membantu breakdown task, menjaga timeline tiap tim, serta memastikan kesiapan produk yang dibangun.",
      },
      {
        title: "Technical Communicator",
        tags: ["Mentoring", "Problem-Solving", "Collaboration"],
        whatWasBuilt:
          "Mengembangkan kemampuan komunikasi teknis, mentoring, serta penyampaian materi AI.",
        impact:
          "Membangun pendekatan kolaboratif, problem-solving, dan inovasi berbasis teknologi.",
      },
      {
        title: "Assessor",
        tags: ["Screening", "Interview", "Evaluation"],
        whatWasBuilt:
          "Berperan sebagai asesor dalam tahap screening dan wawancara kandidat.",
        impact:
          "Memastikan kesesuaian profil dan kesiapan peserta dalam menerima materi Generative AI secara intensif.",
      },
    ],
  },
  {
    id: "edufair-2026",
    year: "2026",
    chapterNum: "02",
    title: "National Edufair 2026",
    role: "Workshop Speaker — Generative AI for Digital Business",
    date: "2026",
    location: "Universitas Singaperbangsa Karawang",
    description:
      "Menjadi pemateri utama di hadapan ±200 peserta tingkat nasional, membawakan strategi integrasi Generative AI untuk kebutuhan bisnis digital modern.",
    image: "/asset/story/edufair-seminar.jpeg",
    color: "#10b981",
    gradFrom: "#10b981",
    gradTo: "#0ea5e9",
    branchTitle: "MAIN -> SPEAKING",
    branches: [
      {
        title: "Keynote Speaker",
        tags: ["Public Speaking", "Generative AI", "Digital Business", "National"],
        whatWasBuilt:
          "Menjadi pemateri utama di hadapan ±200 peserta tingkat nasional, membawakan strategi integrasi Generative AI untuk kebutuhan bisnis digital modern.",
        impact:
          "Menjangkau 200+ peserta dari berbagai universitas & institusi tingkat nasional dalam satu sesi.",
      },
      {
        title: "Hands-On Workshop Facilitator",
        tags: ["n8n", "Chatbot", "Automation", "Learning-by-Doing"],
        whatWasBuilt:
          "Memandu sesi hands-on secara interaktif, membimbing seluruh peserta membangun chatbot fungsional berbasis automation tool n8n secara langsung dari nol.",
        impact:
          "Menerapkan metode learning-by-doing untuk memastikan ±200 peserta tidak hanya memahami konsep, tetapi juga mampu mengimplementasikan AI secara teknis dan mandiri.",
      },
    ],
  },
  {
    id: "competitions",
    year: "2026",
    chapterNum: "03",
    title: "National Competitions",
    role: "Generative AI Engineer & Innovation Strategist",
    date: "2026",
    location: "National",
    description:
      "Kompetisi AI & inovasi tingkat nasional yang telah saya ikuti — masing-masing membentuk cabang (branch) pengalaman yang berbeda. Klik setiap branch untuk melihat project, role, dan impact-nya.",
    image: "/asset/story/hackaton.jpeg",
    color: "#f59e0b",
    gradFrom: "#f59e0b",
    gradTo: "#10b981",
    branchTitle: "MAIN -> COMPETITIONS",
    branches: [
      {
        title: "Top 20% Nasional",
        subtitle: "Generative AI Engineer",
        event: "Hackathon X Digdaya — Bank Indonesia",
        project: "Solusi Generative AI QRIS Ecosystem",
        tags: ["Generative AI", "Fintech", "QRIS", "Bank Indonesia", "Data-Driven"],
        whatWasBuilt:
          "Solusi AI berbasis data-driven yang dirancang untuk mendukung ekosistem QRIS dan interoperabilitas pembayaran lintas negara, dikembangkan dalam environment kompetisi bertekanan tinggi bersama tim lintas disiplin.",
        impact:
          "Terpilih sebagai Top 20% peserta terbaik dari seluruh peserta nasional. Diundang ke acara peluncuran QRIS dan inisiatif pembayaran lintas negara Indonesia–Tiongkok. Menyelesaikan Digdaya Essential Training intensif 6 jam: design thinking, leadership, collaborative problem solving, dan product development management.",
      },
      {
        title: "Juara 1 — 1st Place",
        subtitle: "Innovation & Business Strategist",
        event: "Nexora Business Society — National Competition",
        project: "Strategi Bisnis Syariah Modern",
        tags: ["Business Innovation", "Syariah", "Entrepreneurship", "Strategy", "National Winner"],
        whatWasBuilt:
          "Rancangan strategi bisnis syariah yang mengintegrasikan value-driven entrepreneurship, financial sustainability, dan inovasi digital dalam ekosistem bisnis modern.",
        impact:
          "Meraih Juara 1 pada kategori Bisnis Syariah di kompetisi inovasi bisnis tingkat nasional. Merancang model bisnis berkelanjutan dengan prinsip syariah sebagai fondasi. Mendemonstrasikan kemampuan berpikir strategis dan presentasi bisnis di hadapan juri nasional.",
      },
    ],
  },
  {
    id: "tutor-community",
    year: "2023",
    chapterNum: "04",
    title: "Tutor Student Community",
    role: "Tutor — Fisika, Matematika, Biologi",
    date: "2023",
    location: "High School",
    description:
      "Terpilih secara selektif dan dipercaya oleh tiga guru mata pelajaran untuk mengikuti program tutor — program pembelajaran tambahan di mana peserta bertugas membagikan kembali materi kepada siswa lain.",
    image: "/asset/story/tutor student.jpeg",
    color: "#0ea5e9",
    gradFrom: "#0ea5e9",
    gradTo: "#6366f1",
    branchTitle: "MAIN -> TEACHING",
    branches: [
      {
        title: "Peer Tutor",
        tags: ["Fisika", "Matematika", "Biologi", "Peer Learning"],
        whatWasBuilt:
          "Terpilih secara selektif dan dipercaya oleh tiga guru mata pelajaran untuk mengikuti program tutor. Bertugas membagikan kembali materi kepada siswa lain.",
        impact:
          "Menyelenggarakan sesi bimbingan belajar bagi teman sebaya sebagai wadah untuk bertanya, berdiskusi, dan memperdalam pemahaman materi yang sulit.",
      },
      {
        title: "Empathic Educator",
        tags: ["Communication", "Empathy", "Support"],
        whatWasBuilt:
          "Membangun komunikasi empatik dan lingkungan belajar yang suportif.",
        impact:
          "Berkontribusi pada peningkatan pemahaman dan performa akademik siswa secara kolektif.",
      },
    ],
  },
  {
    id: "english-club",
    year: "2022",
    chapterNum: "05",
    title: "English Club",
    role: "Pemateri & Organizer",
    date: "2022 — 2023",
    location: "High School",
    description:
      "Menyusun dan mengembangkan materi pembelajaran bahasa Inggris sebagai panduan utama bagi anggota dalam meningkatkan kemampuan dasar hingga menengah.",
    image: "/asset/story/english.jpeg",
    color: "#f97316",
    gradFrom: "#f97316",
    gradTo: "#ec4899",
    branchTitle: "MAIN -> ORGANIZING",
    branches: [
      {
        title: "Curriculum Designer",
        tags: ["Teaching", "English", "Material Development"],
        whatWasBuilt:
          "Menyusun dan mengembangkan materi pembelajaran bahasa Inggris sebagai panduan utama bagi anggota.",
        impact:
          "Meningkatkan kemampuan anggota dari level dasar hingga menengah secara terstruktur.",
      },
      {
        title: "Interactive Facilitator",
        tags: ["Games-Based Learning", "Interactive", "Facilitation"],
        whatWasBuilt:
          "Memfasilitasi beberapa sesi pembelajaran dengan pendekatan interaktif berbasis permainan, menciptakan suasana belajar yang aktif dan menyenangkan.",
        impact:
          "Mendukung peningkatan kepercayaan diri anggota dalam menggunakan bahasa Inggris melalui lingkungan belajar yang suportif dan partisipatif.",
      },
      {
        title: "Community Organizer",
        tags: ["Event Management", "Leadership"],
        whatWasBuilt:
          "Mengelola kegiatan komunitas belajar dengan memastikan sesi berjalan terarah, konsisten, dan nyaman bagi seluruh anggota.",
        impact:
          "Menciptakan ekosistem belajar yang berkelanjutan dan aktif di komunitas English Club.",
      },
    ],
  },
];

const floatingAssets = [
  { src: "/asset/rocket.png", size: 72, className: "top-12 right-16", animation: { y: [0, -20, 0], rotate: [-5, 5, -5] }, duration: 7 },
  { src: "/asset/sparkle.png", size: 50, className: "top-32 left-8", animation: { rotate: [0, 360] }, duration: 18 },
  { src: "/asset/api.png", size: 60, className: "bottom-32 right-12", animation: { y: [0, 15, 0], x: [0, -8, 0] }, duration: 9 },
  { src: "/asset/love.png", size: 55, className: "bottom-16 left-16", animation: { scale: [1, 1.15, 1], rotate: [-8, 8, -8] }, duration: 6 },
];

const ExperienceSection = () => {
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);

  if (typeof document !== "undefined") {
    document.body.style.overflow = activeChapter ? "hidden" : "auto";
  }

  return (
    <section id="experience" className="py-24 relative overflow-hidden pixel-grid">

      {/* ── Background Glow Orbs ── */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.3, 0.85, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[5%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
          style={{ background: "radial-gradient(circle, #ec4899, #a855f7)" }}
        />
        <motion.div
          animate={{ x: [0, -40, 25, 0], y: [0, 50, -20, 0], scale: [1, 0.9, 1.2, 1] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[5%] right-[5%] w-[550px] h-[550px] rounded-full blur-[130px] opacity-15"
          style={{ background: "radial-gradient(circle, #0ea5e9, #6366f1)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[45%] left-[45%] w-[300px] h-[300px] rounded-full blur-[100px] opacity-10"
          style={{ background: "radial-gradient(circle, #f59e0b, #f97316)" }}
        />
      </div>

      {/* ── Floating PNG Assets ── */}
      {floatingAssets.map((asset, i) => (
        <motion.img
          key={i}
          src={asset.src}
          alt=""
          aria-hidden="true"
          animate={asset.animation}
          transition={{ duration: asset.duration, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute ${asset.className} opacity-20 pointer-events-none select-none drop-shadow-lg`}
          style={{ width: asset.size, height: asset.size }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-indigo-400/50 text-white font-extrabold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(99,102,241,0.5)] mb-6 transition-all cursor-default"
            style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)" }}>
            <span className="bg-white/20 px-2 py-0.5 rounded-lg text-white">05</span> EXPERIENCE
          </div>
          <h2 className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black tracking-tighter leading-[0.85] text-slate-900 uppercase">
            <span className="block drop-shadow-sm">MY</span>
            <em className="font-black italic lowercase tracking-tight text-transparent bg-clip-text text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] ml-8 md:ml-16 leading-none block pb-4 pt-2 -mb-4"
              style={{ backgroundImage: "linear-gradient(135deg, #fde047, #f97316, #dc2626)", filter: "drop-shadow(0px 0px 15px rgba(249, 115, 22, 0.3)) drop-shadow(2px 2px 0px rgba(220, 38, 38, 0.15))" }}>
              experience.
            </em>
          </h2>
        </motion.div>

        {/* ── Timeline Container ── */}
        <div className="relative flex flex-col gap-16">

          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent -translate-x-1/2 hidden md:block" />

          {chapters.map((chapter, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={chapter.id}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 relative w-full ${isLeft ? "" : "md:flex-row-reverse"}`}
              >
                {/* Center Year Node */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex">
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg border-2 border-white"
                    style={{ background: `linear-gradient(135deg, ${chapter.gradFrom}, ${chapter.gradTo})` }}
                  >
                    {chapter.year}
                  </motion.div>
                </div>

                {/* ── Content Card ── */}
                <div className={`w-full md:w-1/2 flex flex-col ${isLeft ? "md:pr-10 md:items-end" : "md:pl-10 md:items-start"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -3 }}
                    className="relative group w-full max-w-sm cursor-pointer"
                    onClick={() => setActiveChapter(chapter)}
                  >
                    {/* Thin glow ring — appears on hover only */}
                    <div
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10 blur-md"
                      style={{ background: `linear-gradient(135deg, ${chapter.gradFrom}40, ${chapter.gradTo}40)` }}
                    />

                    <div
                      className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl border transition-all duration-300 group-hover:border-opacity-50"
                      style={{
                        borderWidth: 1,
                        borderColor: `${chapter.color}22`,
                        boxShadow: `0 2px 12px ${chapter.color}0d, 0 0 0 1px ${chapter.color}10`
                      }}
                    >
                      {/* Top meta */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 tracking-widest uppercase">
                          <span>{chapter.year}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full" />
                          <span>CHAPTER {chapter.chapterNum}</span>
                        </div>
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: `${chapter.color}18` }}
                        >
                          <Zap className="w-2.5 h-2.5" style={{ color: chapter.color }} />
                        </div>
                      </div>

                      {/* Thin gradient accent line */}
                      <div
                        className="w-8 h-0.5 rounded-full mb-3 transition-all duration-300 group-hover:w-16"
                        style={{ background: `linear-gradient(90deg, ${chapter.gradFrom}, ${chapter.gradTo})` }}
                      />

                      <h3 className="text-base font-black text-slate-800 mb-1 leading-snug">
                        {chapter.title}
                      </h3>
                      <div className="text-xs font-semibold mb-3" style={{ color: chapter.color }}>
                        &gt; {chapter.role}
                      </div>
                      <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
                        {chapter.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                          <GitBranch className="w-3 h-3" />
                          {chapter.branches.length} BRANCHES
                        </div>
                        <div
                          className="text-[10px] font-bold flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                          style={{ color: chapter.color }}
                        >
                          Open <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* ── Thumbnail ── */}
                <div className={`w-full md:w-1/2 flex ${isLeft ? "md:justify-start md:pl-10" : "md:justify-end md:pr-10"}`}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.88 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="relative w-full max-w-[420px] aspect-video rounded-3xl overflow-hidden border-2 border-white group"
                    style={{ boxShadow: `0 8px 40px ${chapter.color}22, 0 2px 12px rgba(0,0,0,0.08)` }}
                  >
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Color overlay on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ background: `linear-gradient(135deg, ${chapter.gradFrom}, ${chapter.gradTo})` }}
                    />
                    {/* Chapter badge */}
                    <div
                      className="absolute bottom-3 left-3 text-white text-[10px] font-black px-3 py-1.5 rounded-xl backdrop-blur-md border border-white/30"
                      style={{ background: `linear-gradient(135deg, ${chapter.gradFrom}CC, ${chapter.gradTo}CC)` }}
                    >
                      CHAPTER {chapter.chapterNum}
                    </div>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          MODAL / DIALOG
      ════════════════════════════════════════════════ */}
      <AnimatePresence>
        {activeChapter && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveChapter(null)}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: 48, scale: 0.93 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0.22 }}
              className="relative w-full max-w-3xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              style={{ boxShadow: `0 30px 80px ${activeChapter.color}30, 0 0 0 1px ${activeChapter.color}15` }}
            >
              {/* Top gradient strip */}
              <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${activeChapter.gradFrom}, ${activeChapter.gradTo})` }} />

              {/* Header */}
              <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-white/95 backdrop-blur-md sticky top-0 z-10">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest" style={{ color: activeChapter.color }}>
                  <GitBranch className="w-4 h-4" />
                  <span>{activeChapter.year} • CHAPTER {activeChapter.chapterNum}</span>
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-white text-[9px]" style={{ background: activeChapter.color }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    {activeChapter.branches.length} BRANCHES ACTIVE
                  </span>
                </div>
                <button
                  onClick={() => setActiveChapter(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Body */}
              <div className="overflow-y-auto">
                {/* Cover image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img src={activeChapter.image} alt={activeChapter.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${activeChapter.gradFrom}CC, transparent)` }} />
                  <div className="absolute bottom-4 left-6">
                    <div className="flex items-center gap-2 mb-1">
                      <GitBranch className="w-3.5 h-3.5 text-white/80" />
                      <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">{activeChapter.branches.length} branches</span>
                    </div>
                    <h3 className="text-white text-2xl font-black drop-shadow-lg">
                      <span className="italic">{activeChapter.title.split(" ")[0]}</span>{" "}
                      {activeChapter.title.split(" ").slice(1).join(" ")}
                    </h3>
                    <div className="text-white/90 text-sm font-semibold mt-0.5">&gt; {activeChapter.role}</div>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 flex flex-col gap-5">
                  {/* Description */}
                  <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <p className="text-slate-600 text-sm leading-relaxed">{activeChapter.description}</p>
                  </div>

                  {/* Branch Tree */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center text-white shadow" style={{ backgroundColor: activeChapter.color }}>
                        <GitBranch className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-xs font-black tracking-widest uppercase" style={{ color: activeChapter.color }}>
                        {activeChapter.branchTitle}
                      </span>
                    </div>

                    <div className="flex flex-col gap-4 pl-3 relative border-l-2 ml-2.5" style={{ borderColor: `${activeChapter.color}30` }}>
                      {activeChapter.branches.map((branch, i) => (
                        <div key={i} className="relative pl-6">
                          {/* Dot */}
                          <div
                            className="absolute left-[-5px] top-5 w-2.5 h-2.5 rounded-full ring-4 ring-slate-50"
                            style={{ backgroundColor: activeChapter.color }}
                          />

                          <motion.div
                            initial={{ opacity: 0, x: -12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                          >
                            {/* Branch Header */}
                            <div className="p-4 border-b border-slate-50">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span
                                  className="text-[9px] font-black text-white px-2.5 py-1 rounded-lg uppercase tracking-wider"
                                  style={{ background: `linear-gradient(135deg, ${activeChapter.gradFrom}, ${activeChapter.gradTo})` }}
                                >
                                  {branch.title}
                                </span>
                                {branch.subtitle && (
                                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">
                                    {branch.subtitle}
                                  </span>
                                )}
                              </div>

                              {branch.event && (
                                <h5 className="text-sm font-black text-slate-800 leading-snug mb-1">
                                  {branch.event}
                                </h5>
                              )}
                              {branch.project && (
                                <div className="flex items-center gap-1 text-xs font-semibold mb-2" style={{ color: activeChapter.color }}>
                                  <Share2 className="w-3 h-3" />
                                  <span>Project: {branch.project}</span>
                                </div>
                              )}

                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {branch.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="text-[8px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded uppercase tracking-wide"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Branch Body */}
                            <div className="p-4 bg-slate-50/60 flex flex-col gap-3">
                              <div>
                                <div className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                  WHAT WAS BUILT
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium">{branch.whatWasBuilt}</p>
                              </div>
                              <div>
                                <div className="text-[9px] font-black text-emerald-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                  IMPACT & ACHIEVEMENTS
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium">{branch.impact}</p>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
