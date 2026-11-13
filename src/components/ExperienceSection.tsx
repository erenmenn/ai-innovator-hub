import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  MapPin,
  Calendar,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Briefcase,
  Mic,
  Users,
  X,
  ZoomIn,
  ChevronRight,
  LayoutGrid,
  Rows3,
  Award,
  Zap,
} from "lucide-react";

type CategoryId = "all" | "ai_industry" | "speaking_comp" | "leadership_edu";

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
  category: Exclude<CategoryId, "all">;
  categoryLabel: string;
  highlightMetric: string;
  title: string;
  role: string;
  date: string;
  location: string;
  description: string;
  image: string;
  imagePosition?: string;
  color: string;
  gradFrom: string;
  gradTo: string;
  branchTitle: string;
  branches: Branch[];
};

const chapters: Chapter[] = [
  {
    id: "google-gsa",
    year: "2026",
    chapterNum: "01",
    category: "ai_industry",
    categoryLabel: "Google Ecosystem & Leadership",
    highlightMetric: "Top 150 dari 2.000+ Pendaftar",
    title: "Google — Google Student Ambassador",
    role: "Google Student Ambassador & Buddy Captain",
    date: "Okt 2026 — Saat ini",
    location: "Google Indonesia / UNSIKA",
    description:
      "Terpilih dari lebih dari 2.000 pendaftar nasional sebagai salah satu dari 150 perwakilan terbaik—dan termasuk dalam 50 penerima undangan fully-funded pada acara Inaugurasi resmi di Kantor Google—untuk mewakili Universitas Singaperbangsa Karawang (UNSIKA).",
    image: "/asset/story/google-gsa.jpg",
    imagePosition: "center 56%",
    color: "#4285F4",
    gradFrom: "#4285F4",
    gradTo: "#EA4335",
    branchTitle: "GOOGLE STUDENT AMBASSADOR",
    branches: [
      {
        title: "Pengembangan Komunitas & Pembicara",
        subtitle: "Community Builder & Tech Speaker",
        tags: ["Google Ecosystem", "Gemini AI", "Workshop Speaker", "Tech Community"],
        whatWasBuilt:
          "Menginisiasi serta menjadi pembicara dalam berbagai workshop dan sesi berbagi di kampus untuk membangun komunitas teknologi yang aktif dan kolaboratif.",
        impact:
          "Mendorong adopsi teknologi Google dan AI secara luas di kalangan mahasiswa melalui edukasi praktis dan ekosistem kolaboratif.",
      },
      {
        title: "Strategi Konten & Analisis Audiens",
        subtitle: "Creative Tech Creator & Strategist",
        tags: ["Content Strategy", "Audience Analytics", "Google Products", "Engagement"],
        whatWasBuilt:
          "Memproduksi dan memublikasikan konten kreatif seputar teknologi dan produk Google, serta melakukan analisis target audiens secara berkala.",
        impact:
          "Mengoptimalkan jangkauan (reach) dan tingkat interaksi (engagement) audiens digital terhadap inovasi produk-produk Google.",
      },
      {
        title: "Kepemimpinan Tim (Buddy Captain)",
        subtitle: "Regional Team Captain",
        tags: ["Buddy Captain", "Strategic Direction", "Team Leadership", "Program Coordination"],
        whatWasBuilt:
          "Dipercaya sebagai Captain untuk tim regional (Buddy), bertanggung jawab menentukan arah strategi (direction), mengoordinasikan program kerja, serta memimpin anggota tim.",
        impact:
          "Memastikan keselarasan eksekusi program regional dan memimpin anggota tim dalam mencapai target bersama secara konsisten.",
      },
    ],
  },
  {
    id: "jiep-internship",
    year: "2026",
    chapterNum: "02",
    category: "ai_industry",
    categoryLabel: "AI & Enterprise (BUMN)",
    highlightMetric: "4 Bulan BUMN AI Intern",
    title: "PT Jakarta Industrial Estate Pulogadung (JIEP)",
    role: "Generative AI Specialist & AI Engineer Intern",
    date: "4 Bulan (Internship)",
    location: "Jakarta / Pulogadung",
    description:
      "Magang 4 bulan di PT Jakarta Industrial Estate Pulogadung (JIEP) sebagai Generative AI Specialist. Mengembangkan RAG System untuk SOP Departemen IT dan modul Odoo ERP AI Chatbot Management untuk mengeliminasi bottleneck IT support dan meningkatkan efisiensi operasional perusahaan.",
    image: "/asset/story/jiep-intern.jpg",
    imagePosition: "center center",
    color: "#0072ff",
    gradFrom: "#0072ff",
    gradTo: "#00c6ff",
    branchTitle: "ENTERPRISE AI INTERNSHIP",
    branches: [
      {
        title: "AI Solution Development — SOP RAG System",
        subtitle: "Enterprise Knowledge Retrieval",
        tags: ["RAG System", "LLM", "SOP Management", "Python", "Vector DB"],
        whatWasBuilt:
          "Merancang dan menguji Retrieval-Augmented Generation (RAG) system yang disesuaikan secara spesifik untuk mengelola dan menjawab query Standard Operating Procedures (SOPs) departemen IT.",
        impact:
          "Sistem memberikan jawaban yang sangat akurat, relevan, dan berbasis konteks dokumen internal perusahaan secara strik tanpa risiko halusinasi.",
      },
      {
        title: "Operational Efficiency & Bottleneck Reduction",
        subtitle: "IT Support Automation",
        tags: ["Operational Efficiency", "IT Support", "Workplace Productivity"],
        whatWasBuilt:
          "Meminimalisir pencarian dokumen secara manual oleh tim IT dan mengeliminasi antrean (bottlenecks) pada tiket IT support internal.",
        impact:
          "Secara signifikan meningkatkan produktivitas tempat kerja dan pengalaman kerja karyawan (employee experience).",
      },
      {
        title: "Odoo ERP AI Chatbot Management Module",
        subtitle: "ERP & LLM Integration",
        tags: ["Odoo ERP", "Generative AI", "ERP Module", "LLM Integration"],
        whatWasBuilt:
          "Mengembangkan modul sistem ERP Odoo khusus untuk manajemen chatbot AI dan integrasi workflow otomatisasi operasional perusahaan.",
        impact:
          "Menghubungkan kecerdasan buatan LLM secara langsung ke dalam ekosistem sistem ERP perusahaan untuk otomatisasi manajemen bisnis.",
      },
    ],
  },
  {
    id: "competitions",
    year: "2026",
    chapterNum: "03",
    category: "speaking_comp",
    categoryLabel: "PIDI Digdaya & National Competitions",
    highlightMetric: "Top 20% BI & Juara Nasional",
    title: "PIDI Digdaya X Hackathon Bank Indonesia & Kompetisi Nasional",
    role: "Generative AI Engineer & Innovation Strategist",
    date: "2026",
    location: "Bank Indonesia / Nasional",
    description:
      "Kompetisi AI & inovasi tingkat nasional — terpilih sebagai Top 20% Nasional pada Digdaya X Hackathon Bank Indonesia (diundang resmi ke Peluncuran Pusat Inovasi Digital Indonesia & QRIS Antarnegara Indonesia–Tiongkok), lulus Practitioner & Essential Training LPPI, serta meraih Juara 1 & Juara 2 kompetisi bisnis nasional.",
    image: "/asset/story/pidi-digdaya.jpg",
    imagePosition: "center 52%",
    color: "#f59e0b",
    gradFrom: "#f59e0b",
    gradTo: "#10b981",
    branchTitle: "NATIONAL HACKATHON & AWARDS",
    branches: [
      {
        title: "Top 20% Nasional — Bank Indonesia",
        subtitle: "Generative AI Engineer",
        event: "PIDI Digdaya X Hackathon — Bank Indonesia & LPPI",
        project: "Solusi Generative AI QRIS Ecosystem",
        tags: ["Generative AI", "Fintech", "QRIS Antarnegara", "Bank Indonesia", "PIDI"],
        whatWasBuilt:
          "Solusi AI berbasis data-driven yang dirancang untuk mendukung ekosistem QRIS dan interoperabilitas pembayaran lintas negara dalam environment kompetisi bertekanan tinggi.",
        impact:
          "Terpilih sebagai Top 20% peserta terbaik nasional dan diundang langsung ke acara Peluncuran Pusat Inovasi Digital Indonesia (PIDI) & QRIS Antarnegara Indonesia–Tiongkok di Bank Indonesia.",
      },
      {
        title: "Practitioner & Essential Training — PIDI x LPPI",
        subtitle: "Intermediate & Essential Level • Hybrid",
        event: "PIDI Digdaya x Hackathon 2026 — Bank Indonesia & LPPI",
        project: "LLM & RAG MVP, AI PaaS & Global Product Design",
        tags: ["LLM & RAG MVP", "AI PaaS", "Global Product Design", "Startup Dev", "Design Thinking"],
        whatWasBuilt:
          "Menyelesaikan Essential & Practitioner Training Program (Intermediate) dari LPPI & Bank Indonesia mencakup implementasi RAG Frameworks untuk AI MVP, AI PaaS, Product Design skala global, dan Design Thinking.",
        impact:
          "Meraih 2 sertifikat kompetensi terverifikasi LPPI & Bank Indonesia (Practitioner & Essential 2026).",
      },
      {
        title: "Juara 1 Nasional — Ultimate Showdown",
        subtitle: "1st Place • Sub Tema Bisnis Islam/Syariah",
        event: "Nexora Business Society (Maret – April 2026)",
        project: "Strategi Bisnis Syariah Modern",
        tags: ["Juara 1 Nasional", "Bisnis Syariah", "Business Strategy", "Financial Sustainability", "Pitching"],
        whatWasBuilt:
          "Rancangan strategi bisnis syariah yang mengintegrasikan value-driven entrepreneurship, financial sustainability, dan inovasi digital dalam ekosistem bisnis modern.",
        impact:
          "Meraih Juara 1 pada kompetisi nasional Ultimate Showdown oleh Nexora Business Society.",
      },
      {
        title: "Juara II — Business Plan Competition (Tim GEM4)",
        subtitle: "2nd Place • Fasilkom Fest 2026",
        event: "BEM Fasilkom UNSIKA (02 Oktober 2026)",
        project: "The Intelligent Games: Business Plan Innovation",
        tags: ["Juara II", "Tim GEM4", "Business Plan", "Tech Startup", "Go-To-Market"],
        whatWasBuilt:
          'Merancang strategi perencanaan bisnis teknologi komprehensif bersama Tim GEM4 pada Fasilkom Fest 2026 bertema "The Intelligent Games: Competing with Soul and Integrity".',
        impact:
          "Berhasil meraih podium Juara II Business Plan Competition Fasilkom Fest 2026.",
      },
    ],
  },
  {
    id: "blockdev",
    year: "2026",
    chapterNum: "04",
    category: "ai_industry",
    categoryLabel: "AI Leadership & Mentoring",
    highlightMetric: "Lead & 8 Hands-On Sessions",
    title: "BLOCKDEV — AI Builder Program",
    role: "AI Representative & Generative AI Leader",
    date: "2026 — Sekarang",
    location: "Bekasi",
    description:
      "Terpilih sebagai AI Leader Representative wilayah Bekasi dalam program AI Builder Lead dan resmi ditunjuk sebagai Generative AI Mentor setelah menyelesaikan pelatihan intensif Generative AI selama lebih dari 1,5 bulan.",
    image: "/asset/story/mentor-blockdev.jpeg",
    imagePosition: "center center",
    color: "#ec4899",
    gradFrom: "#ec4899",
    gradTo: "#a855f7",
    branchTitle: "AI MENTORING & LEADERSHIP",
    branches: [
      {
        title: "Generative AI Mentor",
        subtitle: "8 Sesi Hands-On",
        tags: ["Workshop", "LLM", "RAG", "Agentic AI"],
        whatWasBuilt:
          "Memimpin 8 sesi workshop hands-on mencakup Large Language Models (LLM), Transformer Architecture, Retrieval-Augmented Generation (RAG), Agent RAG, LangChain, LangGraph, dan Agentic AI.",
        impact:
          "Mengimplementasikan pendekatan praktik langsung (learning-by-building) di setiap sesi.",
      },
      {
        title: "Project Manager",
        subtitle: "End-to-End Product Delivery",
        tags: ["Project Management", "Ideation", "Deployment"],
        whatWasBuilt:
          "Berperan sebagai Project Manager bagi tim-tim peserta sepanjang program, mendampingi proses pembangunan final project dari tahap ideation hingga deployment.",
        impact:
          "Membantu breakdown task, menjaga timeline tiap tim, serta memastikan kesiapan produk yang dibangun.",
      },
      {
        title: "Assessor & Talent Screener",
        subtitle: "Candidate Evaluation",
        tags: ["Screening", "Interview", "Evaluation", "Mentoring"],
        whatWasBuilt:
          "Berperan sebagai asesor dalam tahap screening dan wawancara kandidat serta membina komunikasi teknis lintas tim.",
        impact:
          "Memastikan kesesuaian profil dan kesiapan peserta dalam menerima materi Generative AI secara intensif.",
      },
    ],
  },
  {
    id: "edufair-2026",
    year: "2026",
    chapterNum: "05",
    category: "speaking_comp",
    categoryLabel: "National Public Speaking",
    highlightMetric: "±200 Peserta Nasional",
    title: "National Edufair 2026",
    role: "Workshop Speaker — Generative AI for Digital Business",
    date: "Mei 2026",
    location: "Universitas Singaperbangsa Karawang",
    description:
      "Menjadi pemateri utama di hadapan ±200 peserta tingkat nasional, membawakan strategi integrasi Generative AI untuk kebutuhan bisnis digital modern serta memandu praktek langsung pembuatan AI Chatbot.",
    image: "/asset/story/edufair-seminar.jpeg",
    imagePosition: "center center",
    color: "#0ea5e9",
    gradFrom: "#10b981",
    gradTo: "#0ea5e9",
    branchTitle: "NATIONAL KEYNOTE & WORKSHOP",
    branches: [
      {
        title: "Keynote Speaker",
        subtitle: "Seminar Nasional",
        tags: ["Public Speaking", "Generative AI", "Digital Business", "National"],
        whatWasBuilt:
          "Menjadi pemateri utama di hadapan ±200 peserta tingkat nasional, membawakan strategi integrasi Generative AI untuk kebutuhan bisnis digital modern.",
        impact:
          "Menjangkau 200+ peserta dari berbagai universitas & institusi tingkat nasional dalam satu sesi.",
      },
      {
        title: "Hands-On Workshop Facilitator",
        subtitle: "Live AI Chatbot Building",
        tags: ["n8n", "Chatbot", "Automation", "Learning-by-Doing"],
        whatWasBuilt:
          "Memandu sesi hands-on secara interaktif, membimbing seluruh peserta membangun chatbot fungsional berbasis automation tool n8n secara langsung dari nol.",
        impact:
          "Menerapkan metode learning-by-doing untuk memastikan ±200 peserta mampu mengimplementasikan AI secara teknis dan mandiri.",
      },
    ],
  },
  {
    id: "bem-haidesa",
    year: "2026",
    chapterNum: "06",
    category: "leadership_edu",
    categoryLabel: "Leadership & Social Impact",
    highlightMetric: "HAI DESA 8.0 • 4 Bulan",
    title: "BEM Fasilkom HAI DESA 8.0 — Perencana, Penggerak & Volunteer",
    role: "Perencana & Penggerak Utama, Speaker, MC & Volunteer",
    date: "Mei — Agustus 2026 (4 Bulan)",
    location: "Masyarakat Desa & Sekolah Dasar",
    description:
      'Menjadi perencana, penggerak utama, dan volunteer pada kegiatan pengabdian masyarakat HAI DESA 8.0 BEM Fasilkom UNSIKA bertema "Bersinergi dan Mengabdi untuk Desa yang Edukatif, Sehat, dan Berdaya" (Mei–Agustus 2026). Memimpin konsep acara, bertindak sebagai pemateri (speaker) dan MC dalam mengeksekusi 3 program unggulan.',
    image: "/asset/story/bem-haidesa.jpg",
    imagePosition: "center center",
    color: "#10b981",
    gradFrom: "#10b981",
    gradTo: "#0575e6",
    branchTitle: "COMMUNITY OUTREACH",
    branches: [
      {
        title: "Perencana & Penggerak Utama (Event Conceptor & MC)",
        subtitle: "Program Architecture",
        tags: ["Event Planning", "Initiator", "Public Speaking", "MC"],
        whatWasBuilt:
          "Merancang alur konsep acara dari ideation hingga eksekusi selama 4 bulan serta menjadi penggerak utama, Master of Ceremonies (MC), dan pemateri di hadapan warga & anak-anak SD.",
        impact:
          "Menggerakkan partisipasi aktif masyarakat dan memastikan seluruh rangkaian proker berjalan terstruktur dan berdampak luas.",
      },
      {
        title: "Workshop Pemilahan Sampah SD & Pembuatan POC",
        subtitle: "Environmental Education",
        tags: ["Pemilahan Sampah", "POC", "Edukasi Lingkungan", "Sekolah Dasar"],
        whatWasBuilt:
          "Menyampaikan materi praktis pemilahan sampah organik & anorganik khusus siswa SD serta menginisiasi edukasi pembuatan Pupuk Organik Cair (POC) bagi warga.",
        impact:
          "Menanamkan kepedulian lingkungan sejak dini pada anak-anak SD dan memberikan solusi praktis pengolahan sampah bagi masyarakat.",
      },
      {
        title: "Inisiasi Program Pojok Literasi Anak",
        subtitle: "Rural Literacy Initiative",
        tags: ["Pojok Literasi", "Edukasi Anak", "Literacy Outreach", "Social Impact"],
        whatWasBuilt:
          "Merancang dan menggerakkan pembuatan Pojok Literasi sebagai sarana membaca dan belajar interaktif bagi anak-anak di daerah sasaran.",
        impact:
          "Meningkatkan minat baca dan membuka akses bahan bacaan yang edukatif bagi anak-anak lingkungan desa.",
      },
    ],
  },
  {
    id: "tutor-community",
    year: "2023",
    chapterNum: "07",
    category: "leadership_edu",
    categoryLabel: "Academic Mentorship",
    highlightMetric: "3 Sains Utama",
    title: "Tutor Student Community",
    role: "Peer Tutor — Fisika, Matematika, Biologi",
    date: "2023",
    location: "High School",
    description:
      "Terpilih secara selektif dan dipercaya oleh tiga guru mata pelajaran untuk mengikuti program tutor — program pembelajaran tambahan di mana peserta bertugas membagikan kembali materi kepada siswa lain.",
    image: "/asset/story/tutor student.jpeg",
    imagePosition: "center center",
    color: "#6366f1",
    gradFrom: "#0ea5e9",
    gradTo: "#6366f1",
    branchTitle: "ACADEMIC PEER MENTORING",
    branches: [
      {
        title: "Selected Science Peer Tutor",
        subtitle: "Fisika, Matematika & Biologi",
        tags: ["Fisika", "Matematika", "Biologi", "Peer Learning"],
        whatWasBuilt:
          "Terpilih secara selektif dan dipercaya oleh tiga guru mata pelajaran untuk mengikuti program tutor serta membagikan kembali materi kepada siswa lain.",
        impact:
          "Menyelenggarakan sesi bimbingan belajar bagi teman sebaya sebagai wadah diskusi dan pendalaman materi.",
      },
      {
        title: "Empathic Educator",
        subtitle: "Collaborative Learning",
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
    chapterNum: "08",
    category: "leadership_edu",
    categoryLabel: "Community Organizing",
    highlightMetric: "Curriculum & Facilitator",
    title: "English Club Community",
    role: "Pemateri & Community Organizer",
    date: "2022 — 2023",
    location: "High School",
    description:
      "Menyusun dan mengembangkan materi pembelajaran bahasa Inggris sebagai panduan utama bagi anggota dalam meningkatkan kemampuan dasar hingga menengah dengan pendekatan interaktif.",
    image: "/asset/story/english.jpeg",
    imagePosition: "center center",
    color: "#f97316",
    gradFrom: "#f97316",
    gradTo: "#ec4899",
    branchTitle: "CURRICULUM & COMMUNITY",
    branches: [
      {
        title: "Curriculum Designer",
        subtitle: "Structured Learning Path",
        tags: ["Teaching", "English", "Material Development"],
        whatWasBuilt:
          "Menyusun dan mengembangkan materi pembelajaran bahasa Inggris sebagai panduan utama bagi anggota.",
        impact:
          "Meningkatkan kemampuan anggota dari level dasar hingga menengah secara terstruktur.",
      },
      {
        title: "Interactive Facilitator & Organizer",
        subtitle: "Game-Based Learning",
        tags: ["Games-Based Learning", "Interactive", "Facilitation", "Leadership"],
        whatWasBuilt:
          "Memfasilitasi sesi pembelajaran dengan pendekatan interaktif berbasis permainan serta mengelola kegiatan komunitas secara rutin.",
        impact:
          "Mendukung peningkatan kepercayaan diri anggota dalam menggunakan bahasa Inggris melalui lingkungan belajar yang partisipatif.",
      },
    ],
  },
];

const filterTabs: { id: CategoryId; label: string; shortLabel: string; icon: any }[] = [
  { id: "all", label: "Semua Pengalaman", shortLabel: "Semua", icon: Layers },
  { id: "ai_industry", label: "Google & AI Industri", shortLabel: "Google & AI", icon: Briefcase },
  { id: "speaking_comp", label: "Kompetisi & Speaker", shortLabel: "Kompetisi", icon: Mic },
  { id: "leadership_edu", label: "Leadership & Impact", shortLabel: "Leadership", icon: Users },
];

const ExperienceSection = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [viewMode, setViewMode] = useState<"editorial" | "bento">("editorial");
  // Track which branch tab is active per chapter card in Editorial view
  const [activeBranchIdx, setActiveBranchIdx] = useState<Record<string, number>>({});
  const [selectedChapterModal, setSelectedChapterModal] = useState<Chapter | null>(null);
  const [zoomImage, setZoomImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = selectedChapterModal || zoomImage ? "hidden" : "auto";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [selectedChapterModal, zoomImage]);

  const filteredChapters =
    activeCategory === "all"
      ? chapters
      : chapters.filter((ch) => ch.category === activeCategory);

  return (
    <section
      id="experience"
      className="py-14 sm:py-24 relative overflow-hidden pixel-grid select-none"
    >
      {/* Ambient Luxury Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[340px] sm:w-[820px] h-[280px] sm:h-[420px] bg-gradient-to-r from-violet-500/15 via-fuchsia-500/10 to-sky-500/15 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* ══ SECTION HEADER ══ */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-white font-extrabold text-[11px] sm:text-xs mb-4 shadow-[0_10px_25px_rgba(99,102,241,0.35)] border border-white/25"
            style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}
          >
            <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
            <span>03 • EXPERIENCE &amp; TRACK RECORD</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 uppercase leading-[1.04]"
          >
            CAREER &amp;{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, #4f46e5 0%, #ec4899 50%, #0ea5e9 100%)",
              }}
            >
              IMPACT JOURNEY
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-3 font-medium leading-relaxed px-2"
          >
            Jejak kontribusi nyata di ekosistem teknologi global, implementasi AI di BUMN, kompetisi nasional Bank Indonesia, hingga kepemimpinan komunitas.
          </motion.p>
        </div>

        {/* ══ FILTER & VIEW MODE BAR ══ */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-8 sm:mb-12">
          {/* Category Filter Pills */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar pb-1 md:pb-0">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-2xl bg-white/90 backdrop-blur-xl border-2 border-slate-200/80 shadow-md min-w-max mx-auto">
              {filterTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeCategory === tab.id;
                const count =
                  tab.id === "all"
                    ? chapters.length
                    : chapters.filter((c) => c.category === tab.id).length;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id)}
                    className={`flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-extrabold transition-all duration-200 ${
                      isActive
                        ? "bg-slate-900 text-white shadow-md scale-[1.02]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 shrink-0" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">{tab.shortLabel}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-black ${
                        isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Layout Switcher: Editorial Magazine vs Compact Bento Grid */}
          <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-white/90 backdrop-blur-xl border-2 border-slate-200/80 shadow-md shrink-0">
            <button
              onClick={() => setViewMode("editorial")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-extrabold transition-all ${
                viewMode === "editorial"
                  ? "bg-violet-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Rows3 className="w-3.5 h-3.5" />
              <span>Showcase Mode</span>
            </button>
            <button
              onClick={() => setViewMode("bento")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-extrabold transition-all ${
                viewMode === "bento"
                  ? "bg-violet-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Bento Grid</span>
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            MODE 1: LUXURY EDITORIAL SHOWCASE VIEW (DEFAULT)
        ══════════════════════════════════════════════════════════════ */}
        {viewMode === "editorial" ? (
          <div className="space-y-8 sm:space-y-12">
            <AnimatePresence mode="popLayout">
              {filteredChapters.map((chapter, idx) => {
                const currentBranchIndex = activeBranchIdx[chapter.id] ?? 0;
                const activeBranch =
                  chapter.branches[currentBranchIndex] || chapter.branches[0];
                const isEven = idx % 2 === 1;

                return (
                  <motion.article
                    layout
                    key={chapter.id}
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45 }}
                    className="group relative rounded-[2rem] sm:rounded-[2.5rem] bg-white/95 backdrop-blur-2xl border-2 border-slate-200/80 hover:border-violet-300 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.1)] hover:shadow-[0_28px_70px_-15px_rgba(99,102,241,0.18)] overflow-hidden transition-all duration-500"
                  >
                    {/* Top Gradient Accent Bar */}
                    <div
                      className="h-1.5 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${chapter.gradFrom}, ${chapter.gradTo})`,
                      }}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-12">
                      {/* ── VISUAL CINEMA PANEL (5 Columns on Desktop) ── */}
                      <div
                        className={`lg:col-span-5 relative min-h-[260px] sm:min-h-[340px] lg:min-h-[440px] bg-slate-950 overflow-hidden cursor-pointer ${
                          isEven ? "lg:order-2" : "lg:order-1"
                        }`}
                        onClick={() =>
                          setZoomImage({ src: chapter.image, title: chapter.title })
                        }
                      >
                        <img
                          src={chapter.image}
                          alt={chapter.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          style={{ objectPosition: chapter.imagePosition || "center center" }}
                          loading="lazy"
                        />

                        {/* Multi-layer Cinema Scrim */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-slate-950/30" />

                        {/* Top Floating Badges */}
                        <div className="absolute top-4 inset-x-4 flex items-center justify-between gap-2 z-10">
                          <span
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black text-white uppercase tracking-wider shadow-lg border border-white/25"
                            style={{
                              background: `linear-gradient(135deg, ${chapter.gradFrom}, ${chapter.gradTo})`,
                            }}
                          >
                            <span>CHAPTER {chapter.chapterNum}</span>
                            <span>•</span>
                            <span>{chapter.year}</span>
                          </span>

                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setZoomImage({ src: chapter.image, title: chapter.title });
                            }}
                            className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-transform hover:scale-110"
                            title="Perbesar Dokumentasi"
                          >
                            <ZoomIn className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Bottom Floating Info Overlay */}
                        <div className="absolute bottom-4 inset-x-4 z-10 space-y-2">
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white text-[10px] sm:text-[11px] font-extrabold shadow-md">
                            <Award className="w-3.5 h-3.5 text-amber-300 shrink-0" />
                            <span>{chapter.highlightMetric}</span>
                          </div>

                          <div className="flex flex-wrap items-center gap-2 text-[11px] text-white/90 font-semibold">
                            <span className="inline-flex items-center gap-1 bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                              <Calendar className="w-3 h-3 text-sky-300" />
                              {chapter.date}
                            </span>
                            <span className="inline-flex items-center gap-1 bg-black/45 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                              <MapPin className="w-3 h-3 text-rose-300" />
                              {chapter.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* ── EDITORIAL CONTENT & INTERACTIVE MILESTONES (7 Columns on Desktop) ── */}
                      <div
                        className={`lg:col-span-7 p-5 sm:p-7 md:p-8 flex flex-col justify-between bg-white ${
                          isEven ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <div>
                          {/* Category + Role Header */}
                          <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                            <span
                              className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border"
                              style={{
                                color: chapter.color,
                                borderColor: `${chapter.color}35`,
                                backgroundColor: `${chapter.color}10`,
                              }}
                            >
                              {chapter.categoryLabel}
                            </span>

                            <button
                              type="button"
                              onClick={() => setSelectedChapterModal(chapter)}
                              className="inline-flex items-center gap-1 text-[11px] font-extrabold text-slate-500 hover:text-violet-600 transition-colors"
                            >
                              <span>Lihat Semua Detail</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Organization & Role Title */}
                          <h3 className="text-xl sm:text-2xl md:text-[26px] font-black text-slate-900 tracking-tight leading-snug">
                            {chapter.title}
                          </h3>
                          <p
                            className="text-xs sm:text-sm font-extrabold mt-1 mb-3.5"
                            style={{ color: chapter.color }}
                          >
                            {chapter.role}
                          </p>

                          {/* Executive Summary */}
                          <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed mb-5 font-medium">
                            {chapter.description}
                          </p>

                          {/* ── INTERACTIVE MILESTONE SELECTOR TABS ── */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                                Pilih Fokus Pencapaian &amp; Peran ({chapter.branches.length})
                              </span>
                            </div>

                            {/* Milestone Pill Buttons */}
                            <div className="flex flex-wrap gap-1.5">
                              {chapter.branches.map((b, bIndex) => {
                                const isBranchActive = currentBranchIndex === bIndex;
                                return (
                                  <button
                                    key={bIndex}
                                    type="button"
                                    onClick={() =>
                                      setActiveBranchIdx((prev) => ({
                                        ...prev,
                                        [chapter.id]: bIndex,
                                      }))
                                    }
                                    className={`px-3 py-1.5 rounded-xl text-[11px] font-extrabold transition-all flex items-center gap-1.5 text-left ${
                                      isBranchActive
                                        ? "text-white shadow-md scale-[1.01]"
                                        : "bg-slate-100 hover:bg-slate-200/80 text-slate-700"
                                    }`}
                                    style={
                                      isBranchActive
                                        ? {
                                            background: `linear-gradient(135deg, ${chapter.gradFrom}, ${chapter.gradTo})`,
                                          }
                                        : undefined
                                    }
                                  >
                                    <span
                                      className={`text-[9px] px-1.5 py-0.2 rounded-md font-black ${
                                        isBranchActive
                                          ? "bg-white/25 text-white"
                                          : "bg-white text-slate-500"
                                      }`}
                                    >
                                      0{bIndex + 1}
                                    </span>
                                    <span className="truncate max-w-[190px] sm:max-w-[240px]">
                                      {b.title}
                                    </span>
                                  </button>
                                );
                              })}
                            </div>

                            {/* Active Milestone Spotlight Box */}
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={`${chapter.id}-${currentBranchIndex}`}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.22 }}
                                className="rounded-2xl bg-slate-50/90 border border-slate-200/80 p-4 sm:p-5 space-y-3"
                              >
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <div>
                                    <h4 className="font-black text-xs sm:text-sm text-slate-900">
                                      {activeBranch.title}
                                    </h4>
                                    {(activeBranch.subtitle || activeBranch.event) && (
                                      <p className="text-[11px] font-bold text-slate-500">
                                        {activeBranch.subtitle}
                                        {activeBranch.event ? ` • ${activeBranch.event}` : ""}
                                      </p>
                                    )}
                                  </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                  <div className="p-3 rounded-xl bg-white border border-slate-200/70">
                                    <span className="text-[9.5px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                                      Eksekusi &amp; Inisiatif
                                    </span>
                                    <p className="text-slate-700 leading-relaxed text-[11.5px] font-medium">
                                      {activeBranch.whatWasBuilt}
                                    </p>
                                  </div>

                                  <div
                                    className="p-3 rounded-xl border"
                                    style={{
                                      backgroundColor: `${chapter.color}08`,
                                      borderColor: `${chapter.color}25`,
                                    }}
                                  >
                                    <span
                                      className="text-[9.5px] font-black uppercase tracking-wider flex items-center gap-1 mb-1"
                                      style={{ color: chapter.color }}
                                    >
                                      <CheckCircle2 className="w-3 h-3" />
                                      <span>Impact &amp; Hasil</span>
                                    </span>
                                    <p className="text-slate-700 leading-relaxed text-[11.5px] font-semibold">
                                      {activeBranch.impact}
                                    </p>
                                  </div>
                                </div>

                                {/* Branch Skill Tags */}
                                <div className="flex flex-wrap gap-1.5 pt-0.5">
                                  {activeBranch.tags.map((tag, tIdx) => (
                                    <span
                                      key={tIdx}
                                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-lg bg-white border border-slate-200 text-slate-700"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </motion.div>
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Card Footer */}
                        <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                            {chapter.branchTitle}
                          </span>
                          <button
                            type="button"
                            onClick={() => setSelectedChapterModal(chapter)}
                            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-violet-600 hover:text-violet-700 group/btn"
                          >
                            <span>Buka Rincian Penuh ({chapter.branches.length} Fokus)</span>
                            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* ══════════════════════════════════════════════════════════════
             MODE 2: COMPACT BENTO GRID VIEW
          ══════════════════════════════════════════════════════════════ */
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredChapters.map((chapter, idx) => (
                <motion.div
                  layout
                  key={chapter.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  onClick={() => setSelectedChapterModal(chapter)}
                  className="group rounded-3xl bg-white border-2 border-slate-100 hover:border-violet-300 shadow-lg hover:shadow-2xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all hover:-translate-y-1"
                >
                  <div>
                    <div
                      className="h-1.5 w-full"
                      style={{
                        background: `linear-gradient(90deg, ${chapter.gradFrom}, ${chapter.gradTo})`,
                      }}
                    />

                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                      <img
                        src={chapter.image}
                        alt={chapter.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        style={{ objectPosition: chapter.imagePosition || "center center" }}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                      <div className="absolute top-3 left-3">
                        <span
                          className="px-2.5 py-1 rounded-full text-[9.5px] font-black text-white uppercase tracking-wider shadow-md"
                          style={{
                            background: `linear-gradient(135deg, ${chapter.gradFrom}, ${chapter.gradTo})`,
                          }}
                        >
                          {chapter.chapterNum} • {chapter.highlightMetric}
                        </span>
                      </div>

                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-[10px] text-white/90 font-bold">
                        <span>{chapter.date}</span>
                        <span>{chapter.location}</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <span
                        className="text-[9.5px] font-black uppercase tracking-widest block mb-1"
                        style={{ color: chapter.color }}
                      >
                        {chapter.categoryLabel}
                      </span>
                      <h3 className="font-black text-base text-slate-900 leading-snug line-clamp-2 group-hover:text-violet-600 transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="text-xs font-bold text-slate-500 mt-0.5 mb-2.5">
                        {chapter.role}
                      </p>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                        {chapter.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-violet-600">
                    <span>{chapter.branches.length} Fokus Pencapaian</span>
                    <span className="inline-flex items-center gap-1">
                      Detail <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      {/* ══ MODAL 1: FULL CHAPTER DETAIL DRAWER / MODAL ══ */}
      <AnimatePresence>
        {selectedChapterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedChapterModal(null)}
            className="fixed inset-0 z-[500] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Modal Top Bar */}
              <div
                className="px-5 sm:px-7 py-4 text-white flex items-center justify-between gap-3 shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${selectedChapterModal.gradFrom}, ${selectedChapterModal.gradTo})`,
                }}
              >
                <div className="min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/85 block">
                    CHAPTER {selectedChapterModal.chapterNum} • {selectedChapterModal.date} •{" "}
                    {selectedChapterModal.location}
                  </span>
                  <h3 className="font-black text-base sm:text-xl text-white truncate">
                    {selectedChapterModal.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedChapterModal(null)}
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                  <div className="md:col-span-5 rounded-2xl overflow-hidden aspect-[16/11] bg-slate-900">
                    <img
                      src={selectedChapterModal.image}
                      alt={selectedChapterModal.title}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition:
                          selectedChapterModal.imagePosition || "center center",
                      }}
                    />
                  </div>
                  <div className="md:col-span-7 space-y-2.5">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-xs font-extrabold">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{selectedChapterModal.role}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {selectedChapterModal.description}
                    </p>
                  </div>
                </div>

                {/* All Branches / Pillars */}
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Seluruh Pencapaian &amp; Fokus Peran ({selectedChapterModal.branches.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {selectedChapterModal.branches.map((b, i) => (
                      <div
                        key={i}
                        className="p-4 sm:p-5 rounded-2xl border-2 border-slate-100 bg-slate-50/70 space-y-2.5 flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <span
                              className="w-6 h-6 rounded-lg text-[10px] font-black text-white flex items-center justify-center shrink-0"
                              style={{
                                background: `linear-gradient(135deg, ${selectedChapterModal.gradFrom}, ${selectedChapterModal.gradTo})`,
                              }}
                            >
                              0{i + 1}
                            </span>
                            <h5 className="font-black text-sm text-slate-900 leading-snug">
                              {b.title}
                            </h5>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            {b.whatWasBuilt}
                          </p>
                          <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 font-semibold">
                            <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600 block mb-0.5">
                              Impact:
                            </span>
                            {b.impact}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 pt-1">
                          {b.tags.map((t, idx) => (
                            <span
                              key={idx}
                              className="text-[9.5px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ══ MODAL 2: PHOTO LIGHTBOX ══ */}
      <AnimatePresence>
        {zoomImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomImage(null)}
            className="fixed inset-0 z-[600] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl w-full flex flex-col items-center">
              <button
                onClick={() => setZoomImage(null)}
                className="self-end mb-3 px-4 py-2 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-extrabold flex items-center gap-1.5 backdrop-blur-md"
              >
                <X className="w-4 h-4" />
                <span>Tutup Foto</span>
              </button>
              <img
                src={zoomImage.src}
                alt={zoomImage.title}
                className="max-h-[80vh] w-auto object-contain rounded-2xl shadow-2xl border border-white/15"
              />
              <p className="text-white/90 text-xs sm:text-sm font-bold mt-3 text-center">
                {zoomImage.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;
