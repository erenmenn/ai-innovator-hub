import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Sparkles,
  ExternalLink,
  Calendar,
  Layers,
  FileCheck,
  Trophy,
  ShieldCheck,
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Mic,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string;
  category: "ai_cloud" | "hackathon" | "leadership_speaker" | "dicoding";
  description: string;
  skills: string[];
  metaBadges?: string[];
  badgeText: string;
  image: string;
  accentFrom: string;
  accentTo: string;
}

const mainCertificates: Certificate[] = [
  {
    id: "cert-azure-ai",
    title: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    issuer: "Microsoft",
    date: "27 Sep 2026 — 28 Sep 2027",
    credentialId: "325A01B7E4EFFEA",
    category: "ai_cloud",
    description:
      "Sertifikasi resmi tingkat Associate dari Microsoft untuk pengembangan aplikasi AI (AI Apps) dan arsitektur multi-agent berbasis cloud Azure.",
    skills: [
      "Azure AI Services",
      "AI Agents Architecture",
      "RAG & Vector Search",
      "Cloud AI Deployment",
      "LLM Orchestration",
      "Responsible AI",
    ],
    metaBadges: ["Microsoft Official", "Level: Associate", "Online Verifiable"],
    badgeText: "Associate Certified",
    image: "/asset/certificates/cert-azure-ai-associate.jpg",
    accentFrom: "#0078D4",
    accentTo: "#00BCF2",
  },
  {
    id: "cert-ms-elevate",
    title: "Top 10 AI Impact Challenge (Hackathon) — Proyek InvestAI",
    issuer: "Microsoft Elevate • KOMDIGI • Dicoding",
    date: "18 Juni 2026",
    credentialId: "elevate/certificate/2026/HCKRX9K6TQP",
    category: "hackathon",
    description:
      "Terpilih sebagai Top 10 terbaik nasional kategori Hackathon pada AI Impact Challenge melalui pengembangan platform analisis investasi berbasis AI (InvestAI).",
    skills: [
      "Generative AI",
      "AI Financial Advisor",
      "Full-Stack AI App",
      "Pitching & MVP",
      "Microsoft Azure",
      "Rapid Prototyping",
    ],
    metaBadges: ["Top 10 Nasional", "Kategori Hackathon", "Verified"],
    badgeText: "Top 10 Finalist",
    image: "/asset/certificates/cert-microsoft-elevate-top10.jpg",
    accentFrom: "#6366f1",
    accentTo: "#ec4899",
  },
  {
    id: "cert-nexora-juara1",
    title: "Juara 1 Nasional — Ultimate Showdown (Bisnis Islam/Syariah)",
    issuer: "Nexora Business Society • PUSBISNAS",
    date: "Maret — April 2026",
    credentialId: "NEXORA-ULTIMATE-2026-01",
    category: "hackathon",
    description:
      "Meraih Juara 1 tingkat nasional pada kompetisi Ultimate Showdown sub-tema Bisnis Islam/Syariah dengan inovasi strategi bisnis modern berbasis nilai berkelanjutan.",
    skills: [
      "Sharia Business Strategy",
      "Business Model Innovation",
      "Financial Sustainability",
      "Market Validation",
      "Competitive Pitching",
      "Value-Driven Growth",
    ],
    metaBadges: ["1st Place Winner", "Tingkat Nasional", "Business Strategy"],
    badgeText: "Juara 1 Nasional",
    image: "/asset/certificates/cert-nexora-juara1.jpg",
    accentFrom: "#7c3aed",
    accentTo: "#f59e0b",
  },
  {
    id: "cert-fasilkomfest-juara2",
    title: "Juara II — Business Plan Competition Fasilkom Fest 2026 (GEM4)",
    issuer: "BEM Fasilkom UNSIKA • Fasilkom Fest 2026",
    date: "02 Oktober 2026",
    credentialId: "0015/TPA-FASILKOM.FESTIVAL/BEM-FASILKOM/X/2026",
    category: "hackathon",
    description:
      'Meraih Juara II bersama Tim GEM4 pada Business Plan Competition Fasilkom Fest 2026 bertema "The Intelligent Games: Competing with Soul and Integrity".',
    skills: [
      "Business Plan Architecture",
      "Tech Startup Ideation",
      "Go-To-Market Strategy",
      "Financial Projection",
      "Product Validation",
      "Team Collaboration",
    ],
    metaBadges: ["2nd Place Winner", "Tim GEM4", "Business Plan"],
    badgeText: "Juara II Business Plan",
    image: "/asset/certificates/cert-fasilkomfest-juara2.jpg",
    accentFrom: "#2563eb",
    accentTo: "#06b6d4",
  },
  {
    id: "cert-digdaya-practitioner",
    title: "Practitioner Training Program — DIGDAYA x HACKATHON 2026",
    issuer: "LPPI • Bank Indonesia • PIDI",
    date: "24 Juni — 11 Agustus 2026",
    credentialId: "2316/PLT2260383/PRACTITIONER/2026",
    category: "hackathon",
    description:
      "Menyelesaikan Practitioner Training Program (Intermediate) inisiasi Pusat Inovasi Digital Indonesia (PIDI) — Bank Indonesia & LPPI untuk kesiapan solusi AI & Fintech skala global.",
    skills: [
      "LLM & RAG Frameworks for MVP",
      "Build AI-Powered PaaS",
      "Global Financial Product Design",
      "Startup Business Dev",
      "Ekspor Jasa Digital & Kreatif",
      "Productivity & Resilience",
    ],
    metaBadges: ["Issued by LPPI & BI", "Level: Intermediate", "Format: Hybrid"],
    badgeText: "Practitioner • Intermediate",
    image: "/asset/certificates/cert-digdaya-practitioner.jpg",
    accentFrom: "#0284c7",
    accentTo: "#6366f1",
  },
  {
    id: "cert-digdaya-essential",
    title: "Essential Training Program — DIGDAYA x HACKATHON 2026",
    issuer: "LPPI • Bank Indonesia • PIDI",
    date: "2 Mei — 23 Juni 2026",
    credentialId: "0950/PLT2260383/ESSENTIAL/2026",
    category: "hackathon",
    description:
      "Menyelesaikan Essential Training Program dalam rangka DIGDAYA x HACKATHON 2026 inisiasi Pusat Inovasi Digital Indonesia (PIDI) — Bank Indonesia & LPPI.",
    skills: [
      "From Idea to Code: AI Solutions",
      "Design Thinking",
      "Project Management Mastery",
      "Scalable Startup Journey",
      "Produktivitas & Ketahanan Pangan",
      "Digital Innovation",
    ],
    metaBadges: ["Issued by LPPI & BI", "Level: Essential", "Format: Hybrid"],
    badgeText: "Essential Program • PIDI",
    image: "/asset/certificates/cert-digdaya-essential.jpg",
    accentFrom: "#0369a1",
    accentTo: "#0ea5e9",
  },
  {
    id: "cert-blockdev-lead",
    title: "Lead of BlockDevId Builder Program 2026",
    issuer: "BlockDevId Builder Program",
    date: "2026",
    credentialId: "BLOCKDEVID-LEAD-2026",
    category: "leadership_speaker",
    description:
      "Apresiasi resmi sebagai Lead & Generative AI Mentor dalam membimbing peserta merancang, membangun, dan men-deploy proyek AI ke produksi.",
    skills: [
      "AI Program Leadership",
      "Generative AI Mentoring",
      "Technical Curriculum",
      "Hands-On Code Review",
      "Project Roadmapping",
      "Developer Community",
    ],
    metaBadges: ["Program Lead", "Gen AI Mentor", "8 Hands-On Sessions"],
    badgeText: "Program Lead",
    image: "/asset/certificates/cert-blockdev-lead.jpg",
    accentFrom: "#8b5cf6",
    accentTo: "#f59e0b",
  },
  {
    id: "cert-edufair-speaker",
    title: "Pemateri Workshop — National Education Fair 2026",
    issuer: "HIMSIKA Universitas Singaperbangsa Karawang",
    date: "Mei 2026",
    credentialId: "003/TPA-EDUFAIR/HIMSIKA/V/2026",
    category: "leadership_speaker",
    description:
      'Pemateri utama Seminar Workshop Nasional bertema "Transforming Digital Business with Generative AI: From Strategy to Hands-On Solutions".',
    skills: [
      "Public Speaking",
      "Generative AI Strategy",
      "Digital Business Transformation",
      "Live AI Demo",
      "Prompt Engineering",
      "Tech Education",
    ],
    metaBadges: ["National Speaker", "Hands-On Workshop", "UNSIKA"],
    badgeText: "Keynote & Workshop Speaker",
    image: "/asset/certificates/cert-edufair-2026.jpg",
    accentFrom: "#10b981",
    accentTo: "#0ea5e9",
  },
  {
    id: "cert-haidesa-volunteer",
    title: "Volunteer Pengabdian Masyarakat — HAI DESA 8.0",
    issuer: "BEM Fasilkom UNSIKA • HAI DESA 8.0",
    date: "Mei — Agustus 2026",
    credentialId: "031/TPA-HAIDESA8.0/BEM-FASILKOM/VIII/2026",
    category: "leadership_speaker",
    description:
      'Kontribusi aktif sebagai Volunteer pengabdian masyarakat pada program HAI DESA 8.0 bertema "Bersinergi dan Mengabdi untuk Desa yang Edukatif, Sehat, dan Berdaya".',
    skills: [
      "Community Empowerment",
      "Rural Digital Literacy",
      "Educational Outreach",
      "Social Impact Program",
      "Cross-Team Synergy",
      "Public Service",
    ],
    metaBadges: ["Social Impact", "Mei–Agu 2026", "BEM Fasilkom UNSIKA"],
    badgeText: "HAI DESA 8.0 Volunteer",
    image: "/asset/certificates/cert-haidesa-volunteer.jpg",
    accentFrom: "#059669",
    accentTo: "#10b981",
  },
];

const dicodingCertificates: Certificate[] = [
  {
    id: "dicoding-genai-llm",
    title: "Pengembangan Generative AI berbasis LLM",
    issuer: "Dicoding Indonesia • Bank Indonesia & LPPI",
    date: "25 Juli 2026 — 25 Juli 2029",
    credentialId: "RVZK0V2OEZD5",
    verifyUrl: "https://www.dicoding.com/certificates/RVZK0V2OEZD5",
    category: "dicoding",
    description:
      "Kompetensi pengembangan sistem Generative AI modern berbasis Large Language Models (LLM), RAG pipeline, dan integrasi aplikasi cerdas.",
    skills: ["Generative AI", "LLM", "RAG", "Bank Indonesia Scholarship"],
    badgeText: "Gen AI & LLM",
    image: "/asset/certificates/dicoding-genai-llm.jpg",
    accentFrom: "#0f172a",
    accentTo: "#0284c7",
  },
  {
    id: "dicoding-prompt-engineer",
    title: "Prompt Engineering untuk Software Developer",
    issuer: "Dicoding Indonesia • Bank Indonesia & LPPI",
    date: "03 Juni 2026 — 03 Juni 2029",
    credentialId: "JMZVL2LGQXN9",
    verifyUrl: "https://www.dicoding.com/certificates/JMZVL2LGQXN9",
    category: "dicoding",
    description:
      "Teknik perancangan prompt sistematis, structured output, few-shot reasoning, dan optimasi instruksi LLM dalam siklus pengembangan perangkat lunak.",
    skills: ["Prompt Engineering", "LLM Optimization", "Software Dev", "AI Workflow"],
    badgeText: "Prompt Engineering",
    image: "/asset/certificates/dicoding-prompt-engineer.jpg",
    accentFrom: "#0284c7",
    accentTo: "#6366f1",
  },
  {
    id: "dicoding-deep-learning",
    title: "Membangun Proyek Deep Learning Tingkat Mahir",
    issuer: "Dicoding Indonesia",
    date: "26 Nov 2025 — 26 Nov 2028",
    credentialId: "L4PQ274VOZO1",
    verifyUrl: "https://www.dicoding.com/certificates/L4PQ274VOZO1",
    category: "dicoding",
    description:
      "Perancangan arsitektur jaringan saraf tiruan tingkat mahir (CNN, NLP, Transfer Learning) serta deployment model Deep Learning end-to-end.",
    skills: ["Deep Learning", "TensorFlow", "Neural Networks", "Tingkat Mahir"],
    badgeText: "Deep Learning Mahir",
    image: "/asset/certificates/dicoding-deep-learning.jpg",
    accentFrom: "#4f46e5",
    accentTo: "#9333ea",
  },
  {
    id: "dicoding-ml-mahir",
    title: "Machine Learning Terapan",
    issuer: "Dicoding Indonesia",
    date: "20 Nov 2025 — 20 Nov 2028",
    credentialId: "KEXL2VGK0ZG2",
    verifyUrl: "https://www.dicoding.com/certificates/KEXL2VGK0ZG2",
    category: "dicoding",
    description:
      "Implementasi algoritma Machine Learning terapan untuk penyelesaian kasus industri: sistem rekomendasi, pemodelan prediktif, dan evaluasi metrik.",
    skills: ["Machine Learning", "Predictive Modeling", "Recommender System", "Python"],
    badgeText: "ML Terapan",
    image: "/asset/certificates/dicoding-ml-mahir.jpg",
    accentFrom: "#059669",
    accentTo: "#0ea5e9",
  },
  {
    id: "dicoding-web-dasar",
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "29 Nov 2025 — 29 Nov 2028",
    credentialId: "1RXYQJD5KZVM",
    verifyUrl: "https://www.dicoding.com/certificates/1RXYQJD5KZVM",
    category: "dicoding",
    description:
      "Fondasi arsitektur pengembangan antarmuka web semantik, tata letak responsif modern (Flexbox/Grid), dan standar aksesibilitas frontend.",
    skills: ["Web Development", "Responsive Layout", "HTML5 & CSS3", "Frontend"],
    badgeText: "Web Programming",
    image: "/asset/certificates/dicoding-course-123.jpg",
    accentFrom: "#0ea5e9",
    accentTo: "#10b981",
  },
];

const allCertificates: Certificate[] = [...mainCertificates, ...dicodingCertificates];

const CertificatesSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.overflow = selectedCert ? "hidden" : "auto";
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
      }
    };
  }, [selectedCert]);

  const showMainSection = activeCategory === "all" || activeCategory !== "dicoding";
  const showDicodingSection = activeCategory === "all" || activeCategory === "dicoding";

  const filteredMain = mainCertificates.filter((c) => {
    if (activeCategory === "all") return true;
    return c.category === activeCategory;
  });

  const currentIdx = selectedCert
    ? allCertificates.findIndex((c) => c.id === selectedCert.id)
    : -1;

  const prevCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIdx < 0) return;
    setSelectedCert(
      allCertificates[(currentIdx - 1 + allCertificates.length) % allCertificates.length]
    );
  };

  const nextCert = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIdx < 0) return;
    setSelectedCert(allCertificates[(currentIdx + 1) % allCertificates.length]);
  };

  return (
    <section id="certificates" className="py-14 sm:py-20 relative overflow-hidden pixel-grid">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[250px] sm:h-[350px] bg-gradient-to-r from-violet-500/10 via-sky-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full border border-violet-400/40 text-white font-extrabold text-[11px] sm:text-xs mb-4 shadow-[0_8px_20px_rgba(139,92,246,0.3)]"
            style={{ background: "linear-gradient(135deg, #8b5cf6, #06b6d4)" }}
          >
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300" />
            <span>05 • CERTIFICATES &amp; HONORS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase"
          >
            CERTIFICATES &amp;{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(to right, #8b5cf6, #06b6d4, #10b981)" }}
            >
              AWARDS
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2.5 sm:mt-3 font-medium px-2"
          >
            Sertifikasi profesional Microsoft Azure AI, penghargaan Hackathon Nasional, rekognisi kepemimpinan, serta lisensi kelulusan resmi Dicoding Academy.
          </motion.p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10 sm:mb-12">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/90 backdrop-blur-md border-2 border-slate-100 shadow-md flex-wrap justify-center gap-1">
            {[
              { id: "all", label: "Semua", count: allCertificates.length, icon: Layers },
              {
                id: "ai_cloud",
                label: "Microsoft Certified",
                count: mainCertificates.filter((c) => c.category === "ai_cloud").length,
                icon: Sparkles,
              },
              {
                id: "hackathon",
                label: "Hackathon & Lomba",
                count: mainCertificates.filter((c) => c.category === "hackathon").length,
                icon: Trophy,
              },
              {
                id: "leadership_speaker",
                label: "Lead, Speaker & Impact",
                count: mainCertificates.filter((c) => c.category === "leadership_speaker").length,
                icon: Mic,
              },
              {
                id: "dicoding",
                label: "Dicoding Academy",
                count: dicodingCertificates.length,
                icon: GraduationCap,
              },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-[11px] sm:text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 1: FEATURED LICENSES, HACKATHON & LEADERSHIP AWARDS
        ══════════════════════════════════════════════════════════ */}
        {showMainSection && filteredMain.length > 0 && (
          <div className="mb-14 sm:mb-20">
            <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0"
                  style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}
                >
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 uppercase tracking-tight">
                    Global Certifications, Hackathon &amp; Leadership
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    Lisensi profesional Microsoft Azure AI, pemenang Hackathon Nasional, dan apresiasi pembicara/lead.
                  </p>
                </div>
              </div>
            </div>

            <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              <AnimatePresence mode="popLayout">
                {filteredMain.map((cert, index) => (
                  <motion.div
                    layout
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    onClick={() => setSelectedCert(cert)}
                    className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 sm:border-2 sm:border-slate-100 bg-white hover:border-violet-300 transition-all duration-300 shadow-md sm:shadow-lg hover:shadow-2xl group overflow-hidden cursor-pointer hover:-translate-y-1"
                  >
                    <div>
                      <div
                        className="h-1 sm:h-1.5 w-full"
                        style={{
                          background: `linear-gradient(90deg, ${cert.accentFrom}, ${cert.accentTo})`,
                        }}
                      />

                      <div className="relative aspect-[16/10] w-full bg-slate-900/5 overflow-hidden border-b border-slate-100 flex items-center justify-center p-1.5 sm:p-3">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain rounded-lg sm:rounded-xl shadow-xs transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />

                        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-10">
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[9.5px] font-black text-white uppercase tracking-wider shadow-md"
                            style={{
                              background: `linear-gradient(135deg, ${cert.accentFrom}, ${cert.accentTo})`,
                            }}
                          >
                            <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                            <span className="truncate max-w-[105px] sm:max-w-none">{cert.badgeText}</span>
                          </span>
                        </div>

                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 hidden sm:flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/95 text-slate-900 px-3.5 py-2 rounded-full text-xs font-extrabold shadow-xl flex items-center gap-1.5">
                            <ZoomIn className="w-3.5 h-3.5 text-violet-600" />
                            <span>Lihat Sertifikat Penuh</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-2.5 sm:p-5 pb-2.5 sm:pb-3.5">
                        <div className="flex items-start gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
                          <div
                            className="hidden sm:flex w-8 h-8 rounded-xl items-center justify-center text-white shrink-0 shadow-sm mt-0.5"
                            style={{
                              background: `linear-gradient(135deg, ${cert.accentFrom}, ${cert.accentTo})`,
                            }}
                          >
                            <Award className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[8px] sm:text-[9.5px] font-extrabold text-slate-400 uppercase tracking-wider sm:tracking-widest block truncate">
                              {cert.issuer}
                            </span>
                            <h3 className="font-black text-[11px] sm:text-[15px] text-slate-900 leading-tight sm:leading-snug line-clamp-2 group-hover:text-violet-600 transition-colors">
                              {cert.title}
                            </h3>
                          </div>
                        </div>

                        {cert.metaBadges && cert.metaBadges.length > 0 && (
                          <div className="hidden sm:flex flex-wrap gap-1 mb-2">
                            {cert.metaBadges.map((badge, bIdx) => (
                              <span
                                key={bIdx}
                                className="inline-flex items-center gap-1 text-[9px] font-extrabold px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200/70"
                              >
                                <CheckCircle2 className="w-2.5 h-2.5 text-violet-600 shrink-0" />
                                <span>{badge}</span>
                              </span>
                            ))}
                          </div>
                        )}

                        <p className="text-[10px] sm:text-[11.5px] text-slate-600 leading-snug sm:leading-relaxed mb-2 sm:mb-3 line-clamp-2">
                          {cert.description}
                        </p>

                        {/* Mobile: Top 2 Skills | Desktop: All 6 Skills */}
                        <div className="space-y-1">
                          <span className="hidden sm:block text-[9px] font-black uppercase tracking-wider text-slate-400">
                            Skills &amp; Kompetensi ({cert.skills.length})
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {cert.skills.slice(0, 2).map((skill, sIdx) => (
                              <span
                                key={`m-${sIdx}`}
                                className="sm:hidden text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 truncate max-w-full"
                              >
                                {skill}
                              </span>
                            ))}
                            {cert.skills.length > 2 && (
                              <span className="sm:hidden text-[8.5px] font-extrabold px-1.5 py-0.5 rounded bg-violet-50 text-violet-600">
                                +{cert.skills.length - 2}
                              </span>
                            )}
                            {cert.skills.map((skill, sIdx) => (
                              <span
                                key={`d-${sIdx}`}
                                className="hidden sm:inline-block text-[9.5px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 leading-snug"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-2 px-2.5 sm:p-3.5 sm:px-6 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between gap-1 text-[9.5px] sm:text-xs text-slate-500">
                      <div className="flex items-center gap-1 text-[9px] sm:text-[11px] font-semibold truncate">
                        <Calendar className="w-3 h-3 text-violet-500 shrink-0" />
                        <span className="truncate">{cert.date}</span>
                      </div>

                      {cert.credentialId && (
                        <span className="hidden sm:inline-block text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-200/80 px-2 py-0.5 rounded-md truncate max-w-[180px]">
                          ID: {cert.credentialId}
                        </span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* ══════════════════════════════════════════════════════════
            SECTION 2: DEDICATED DICODING ACADEMY SECTION
        ══════════════════════════════════════════════════════════ */}
        {showDicodingSection && (
          <div className="pt-2">
            {/* Dedicated Dicoding Section Header Banner */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-7 sm:mb-9 p-5 sm:p-7 rounded-3xl border-2 border-slate-200/80 bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-sky-500/20 blur-3xl pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white text-slate-900 flex items-center justify-center font-black text-xl sm:text-2xl shadow-lg shrink-0">
                    g
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-sky-500/25 text-sky-300 border border-sky-400/30">
                        Dedicated Section • Dicoding Academy
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        5 Sertifikat Kelulusan
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-2xl font-black tracking-tight text-white">
                      Dicoding Indonesia — AI, ML &amp; Software Engineering
                    </h3>
                    <p className="text-xs text-slate-300 mt-0.5 max-w-2xl">
                      Rangkaian sertifikat kompetensi kelulusan resmi Dicoding Academy (termasuk program beasiswa Bank Indonesia &amp; LPPI) pada jalur Generative AI, Prompt Engineering, Deep Learning, dan Machine Learning Terapan.
                    </p>
                  </div>
                </div>

                <a
                  href="https://drive.google.com/drive/folders/1U33EWBmaww_p-FePIvyUJqn0IZJy4IaG?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-extrabold border border-white/20 backdrop-blur-md transition-all shrink-0 self-start sm:self-auto"
                >
                  <span>Buka Folder Drive</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Dicoding Certificates Grid */}
            <motion.div
              layout
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6"
            >
              <AnimatePresence mode="popLayout">
                {dicodingCertificates.map((cert, index) => (
                  <motion.div
                    layout
                    key={cert.id}
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    onClick={() => setSelectedCert(cert)}
                    className="flex flex-col justify-between rounded-2xl sm:rounded-3xl border border-slate-200/90 sm:border-2 sm:border-slate-100 bg-white hover:border-sky-300 transition-all duration-300 shadow-md hover:shadow-2xl group overflow-hidden cursor-pointer hover:-translate-y-1"
                  >
                    <div>
                      <div
                        className="h-1 sm:h-1.5 w-full"
                        style={{
                          background: `linear-gradient(90deg, ${cert.accentFrom}, ${cert.accentTo})`,
                        }}
                      />

                      {/* Certificate Image */}
                      <div className="relative aspect-[16/11] w-full bg-slate-900/5 overflow-hidden border-b border-slate-100 flex items-center justify-center p-1.5 sm:p-2">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-contain rounded-lg sm:rounded-xl shadow-xs transition-transform duration-500 group-hover:scale-[1.03]"
                          loading="lazy"
                        />

                        <div className="absolute top-2 left-2 sm:top-2.5 sm:left-2.5 z-10">
                          <span
                            className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 rounded-full text-[7.5px] sm:text-[9px] font-black text-white uppercase tracking-wider shadow-sm"
                            style={{
                              background: `linear-gradient(135deg, ${cert.accentFrom}, ${cert.accentTo})`,
                            }}
                          >
                            <ShieldCheck className="w-2.5 h-2.5 shrink-0" />
                            <span className="truncate max-w-[100px] sm:max-w-none">{cert.badgeText}</span>
                          </span>
                        </div>

                        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 hidden sm:flex items-center justify-center">
                          <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/95 text-slate-900 px-3 py-1.5 rounded-full text-[11px] font-extrabold shadow-xl flex items-center gap-1.5">
                            <ZoomIn className="w-3.5 h-3.5 text-sky-600" />
                            <span>Perbesar</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-2.5 sm:p-5 pb-2.5 sm:pb-3">
                        <span className="text-[8px] sm:text-[9px] font-extrabold text-sky-600 uppercase tracking-wider sm:tracking-widest block truncate mb-0.5 sm:mb-1">
                          {cert.issuer}
                        </span>
                        <h4 className="font-black text-[11px] sm:text-[15px] text-slate-900 leading-tight sm:leading-snug mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-sky-600 transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-[10px] sm:text-[11.5px] text-slate-600 leading-snug sm:leading-relaxed mb-2 sm:mb-3 line-clamp-2">
                          {cert.description}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {cert.skills.slice(0, 2).map((skill, sIdx) => (
                            <span
                              key={`m-${sIdx}`}
                              className="sm:hidden text-[8.5px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 truncate"
                            >
                              {skill}
                            </span>
                          ))}
                          {cert.skills.map((skill, sIdx) => (
                            <span
                              key={`d-${sIdx}`}
                              className="hidden sm:inline-block text-[9px] font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="p-2 px-2.5 sm:p-3 sm:px-5 border-t border-slate-100 bg-slate-50/70 flex items-center justify-between gap-1.5 text-[10px] sm:text-[11px] text-slate-500">
                      <span className="font-mono font-bold text-[8.5px] sm:text-[10px] text-slate-600 bg-white border border-slate-200/80 px-1.5 sm:px-2 py-0.5 rounded truncate">
                        {cert.credentialId}
                      </span>

                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[10px] font-extrabold text-sky-600 hover:text-sky-700 shrink-0"
                          title="Verifikasi di Dicoding"
                        >
                          <span>Verifikasi</span>
                          <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        )}

        {/* Certificate Verification Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-3xl border-2 border-slate-100 bg-white/90 backdrop-blur-xl shadow-lg text-center"
        >
          <div className="max-w-lg mx-auto space-y-2.5 sm:space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-violet-100 text-violet-600 flex items-center justify-center mx-auto shadow-xs">
              <FileCheck className="w-5 h-5" />
            </div>
            <h4 className="font-black text-sm sm:text-base text-slate-900">
              Dokumen &amp; Kredensial Resmi Terverifikasi
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Klik pada kartu sertifikat di atas untuk memperbesar tampilan sertifikat asli, atau unduh CV lengkap di bawah ini.
            </p>
            <div className="pt-1.5">
              <a
                href="/asset/CV_Emirsyah_Rafsanjani.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-extrabold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-110 shadow-md shadow-violet-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Unduh CV &amp; Riwayat Lengkap</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Fullscreen Certificate Lightbox Modal ── */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[600] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            >
              {/* Modal Header */}
              <div className="px-4 sm:px-6 py-3.5 border-b border-slate-100 flex items-center justify-between gap-3 bg-white">
                <div className="min-w-0">
                  <span className="text-[10px] font-black uppercase tracking-widest text-violet-600 block">
                    {selectedCert.issuer} • {selectedCert.date}
                  </span>
                  <h4 className="font-black text-xs sm:text-base text-slate-900 truncate">
                    {selectedCert.title}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={prevCert}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
                    title="Sebelumnya"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextCert}
                    className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors"
                    title="Selanjutnya"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="w-8 h-8 rounded-full bg-rose-50 hover:bg-rose-100 flex items-center justify-center text-rose-600 transition-colors ml-1"
                    title="Tutup"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Certificate Full Image */}
              <div className="flex-1 overflow-auto bg-slate-900/95 p-3 sm:p-6 flex items-center justify-center min-h-[260px]">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-4 sm:px-6 py-3.5 bg-slate-50 border-t border-slate-100 space-y-2.5 max-h-[32vh] overflow-y-auto">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <p className="text-xs text-slate-600 font-medium">{selectedCert.description}</p>
                  <div className="flex items-center gap-2 shrink-0 self-start sm:self-auto">
                    {selectedCert.credentialId && (
                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-200 px-2.5 py-1 rounded-lg">
                        ID: {selectedCert.credentialId}
                      </span>
                    )}
                    {selectedCert.verifyUrl && (
                      <a
                        href={selectedCert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-sky-600 text-white text-[10px] font-extrabold hover:bg-sky-700 transition-colors"
                      >
                        <span>Verifikasi Resmi</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {selectedCert.metaBadges && selectedCert.metaBadges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.metaBadges.map((b, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 text-[9.5px] font-extrabold px-2 py-0.5 rounded-full bg-violet-100/80 text-violet-700"
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-violet-600" />
                        <span>{b}</span>
                      </span>
                    ))}
                  </div>
                )}

                {selectedCert.skills && selectedCert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-0.5">
                    {selectedCert.skills.map((s, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
