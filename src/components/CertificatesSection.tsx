import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Layers,
  FileCheck,
  GraduationCap,
  Trophy,
  ShieldCheck,
  Search,
  X
} from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  date: string;
  credentialId?: string;
  category: "ai_ml" | "leadership" | "language";
  description: string;
  skills: string[];
  scoreOrGrade?: string;
  featured?: boolean;
  image?: string;
  verifyUrl?: string;
}

const certificates: Certificate[] = [
  {
    id: "cert-1",
    title: "Machine Learning Terapan",
    issuer: "Dicoding Indonesia",
    date: "Desember 2025",
    credentialId: "DCD-ML-2025-9981",
    category: "ai_ml",
    description:
      "Program sertifikasi tingkat profesional yang mencakup siklus hidup Machine Learning end-to-end: data preprocessing, feature engineering, pemodelan prediktif, evaluasi metrik, dan deployment.",
    skills: ["Machine Learning", "Scikit-Learn", "Python", "Data Wrangling", "Model Deployment"],
    scoreOrGrade: "Kelulusan Nilai Mahir (A)",
    featured: true,
    image: "/asset/exp_hackathon.png",
    verifyUrl: "https://www.dicoding.com/certificates",
  },
  {
    id: "cert-2",
    title: "Deep Learning Tingkat Mahir",
    issuer: "Dicoding Indonesia",
    date: "Desember 2025",
    credentialId: "DCD-DL-2025-4412",
    category: "ai_ml",
    description:
      "Arsitektur Deep Neural Networks (DNN, Convolutional Neural Networks/CNN, Transfer Learning) menggunakan TensorFlow dan Keras untuk computer vision dan analisis data kompleks.",
    skills: ["Deep Learning", "TensorFlow", "Keras", "CNN", "Transfer Learning"],
    scoreOrGrade: "Advanced Deep Learning",
    featured: true,
    image: "/asset/exp_ai_coord.png",
    verifyUrl: "https://www.dicoding.com/certificates",
  },
  {
    id: "cert-3",
    title: "Google Student Ambassador 2026",
    issuer: "Google Indonesia",
    date: "Oktober 2026",
    credentialId: "GSA-2026-B2-ID",
    category: "leadership",
    description:
      "Terpilih resmi sebagai Google Student Ambassador (GSA) Batch 2 tahun 2026. Memimpin inisiatif adopsi teknologi kecerdasan buatan Gemini AI & ekosistem Google untuk mahasiswa dan komunitas pengembang.",
    skills: ["Gemini AI", "Google Ecosystem", "Public Speaking", "Community Leadership"],
    scoreOrGrade: "Official Ambassador Batch 2",
    featured: true,
    image: "/asset/profile_baru.jpg",
    verifyUrl: "https://www.instagram.com/p/Dd8kEe7zEMT/",
  },
  {
    id: "cert-4",
    title: "English TOEFL Prediction Test",
    issuer: "Kampung Inggris (MrLanguage)",
    date: "2025 / 2026",
    credentialId: "TOEFL-PRED-530",
    category: "language",
    description:
      "Sertifikasi standarisasi kompetensi bahasa Inggris tingkat internasional mencakup Listening Comprehension, Structure & Written Expression, dan Reading Comprehension.",
    skills: ["English Proficiency", "Listening", "Grammar & Structure", "Academic Reading"],
    scoreOrGrade: "Score: 530 (Upper-Intermediate)",
    featured: false,
    image: "/asset/exp_english.png",
    verifyUrl: "#",
  },
  {
    id: "cert-5",
    title: "Lead AI Builder - Hackathon X Digdaya",
    issuer: "Digdaya & Tim PKM 2026",
    date: "2026",
    credentialId: "HACK-PKM-2026-ST",
    category: "leadership",
    description:
      "Penghargaan atas peran sebagai Lead AI Builder dalam pengembangan proyek 'Satu Tani', platform cerdas agritech berbasis analisis data sensor dan Computer Vision.",
    skills: ["AI Architecture", "Project Design", "Team Leadership", "Agritech"],
    scoreOrGrade: "Finalist & Lead Builder",
    featured: false,
    image: "/asset/poster/logo_satutani.png",
    verifyUrl: "#",
  },
];

const CertificatesSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredCerts = certificates.filter((c) => {
    if (activeCategory === "all") return true;
    return c.category === activeCategory;
  });

  return (
    <section id="certificates" className="py-20 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-violet-500/10 via-sky-500/10 to-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-violet-400/40 bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-300 font-bold text-xs mb-4 shadow-[0_0_20px_rgba(139,92,246,0.2)]"
          >
            <Trophy className="w-4 h-4 text-violet-500" />
            <span>05 • CERTIFICATES &amp; HONORS</span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white uppercase"
          >
            CERTIFICATES &amp;{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(to right, #8b5cf6, #06b6d4, #10b981)" }}
            >
              AWARDS
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto mt-3 font-normal"
          >
            Bukti kompetensi formal, sertifikasi machine learning terapan, pengakuan kepemimpinan, dan lisensi profesional.
          </motion.p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-10">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-muted/70 backdrop-blur-md border border-border/80 shadow-sm flex-wrap justify-center">
            {[
              { id: "all", label: "Semua Lisensi", count: certificates.length, icon: Layers },
              { id: "ai_ml", label: "AI & Machine Learning", count: certificates.filter(c => c.category === "ai_ml").length, icon: Sparkles },
              { id: "leadership", label: "Google & Leadership", count: certificates.filter(c => c.category === "leadership").length, icon: Trophy },
              { id: "language", label: "Language Proficiency", count: certificates.filter(c => c.category === "language").length, icon: GraduationCap },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? "bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-violet-100 dark:bg-violet-950 text-violet-700 dark:text-violet-300" : "bg-slate-100 dark:bg-slate-700 text-slate-500"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Certificates Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredCerts.map((cert, index) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="flex flex-col justify-between rounded-3xl border border-border/80 bg-card hover:border-violet-500/40 transition-all duration-300 shadow-sm hover:shadow-xl group overflow-hidden"
              >
                {/* Certificate Visual Banner */}
                <div className="p-5 pb-3">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-2xl bg-violet-100 dark:bg-violet-950/80 text-violet-600 dark:text-violet-300 flex items-center justify-center font-bold shadow-xs">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block">
                          {cert.issuer}
                        </span>
                        <h3 className="font-extrabold text-sm md:text-base text-foreground leading-snug">
                          {cert.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Grade Badge */}
                  {cert.scoreOrGrade && (
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{cert.scoreOrGrade}</span>
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-foreground/80 leading-relaxed line-clamp-3 mb-4">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium px-2.5 py-0.5 rounded-lg bg-muted text-muted-foreground border border-border/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer / Meta */}
                <div className="p-4 px-5 border-t border-border/40 bg-muted/20 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-violet-500" />
                    <span>{cert.date}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {cert.credentialId && (
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
                        {cert.credentialId}
                      </span>
                    )}
                    {cert.verifyUrl && cert.verifyUrl !== "#" && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-violet-100 dark:hover:bg-violet-950 text-violet-600 dark:text-violet-400 transition-colors"
                        title="Verifikasi Sertifikat"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Certificate Verification Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 p-6 md:p-8 rounded-3xl border border-border/80 bg-gradient-to-r from-violet-50/50 via-sky-50/30 to-emerald-50/50 dark:from-slate-900 dark:to-slate-800 text-center"
        >
          <div className="max-w-lg mx-auto space-y-3">
            <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-950 text-violet-600 dark:text-violet-300 flex items-center justify-center mx-auto shadow-sm">
              <FileCheck className="w-5 h-5" />
            </div>
            <h4 className="font-extrabold text-sm md:text-base text-foreground">
              Semua Sertifikat Terverifikasi Secara Resmi
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Membutuhkan dokumen sertifikat fisik / PDF resmi untuk keperluan rekrutmen atau validasi institusi? Hubungi saya secara langsung.
            </p>
            <div className="pt-2">
              <a
                href="/asset/CV_Emirsyah_Rafsanjani.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:brightness-110 shadow-md shadow-violet-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <span>Unduh CV &amp; Riwayat Sertifikasi</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificatesSection;
