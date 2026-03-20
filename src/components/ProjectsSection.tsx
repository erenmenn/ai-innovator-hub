import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, Brain, Eye, Film, BarChart3, X, Target, Wrench,
  Star, MessageSquare, ChevronLeft, ChevronRight, Gamepad2,
  ScrollText, Swords, Shield
} from "lucide-react";

type Category = "All" | "Professional" | "NLP" | "Computer Vision" | "Recommendation" | "Prediction" | "Time Series";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: Category;
  subcategory?: string;
  icon: typeof Brain;
  image: string;
  github: string;
  bgGradient: string;
  fullDescription: string;
  problem: string;
  solution: string;
  skills: string[];
  highlights: string[];
  dataset: string;
}

const projects: Project[] = [
  {
    title: "WangkuAI: Asisten Keuangan Pintar",
    description: "Finance tracker dengan NLP pipeline untuk chat sehari-hari",
    tech: ["Next.js", "IndoBERT", "Prisma"],
    category: "Professional",
    subcategory: "NLP",
    icon: Brain,
    image: "/asset_proyek/wangku.png",
    github: "https://github.com/erenmenn/WangkuAI-FinanceBot",
    bgGradient: "linear-gradient(135deg, #ef4444, #b91c1c)",
    fullDescription: "Asisten keuangan pribadi berbasis percakapan yang memungkinkan pencatatan dan pemantauan transaksi hanya dengan mengetik kalimat biasa. Dibangun dengan Next.js dan pipeline NLP dua lapis: IndoBERT (Zero-Shot) dan Regex Fallback.",
    problem: "Aplikasi konvensional terlalu banyak gesekan (klik tambah, pilih kategori, isi nominal) yang membuat pengguna malas dan tidak konsisten mencatat keuangan.",
    solution: "Cukup ketik transaksi (misal: 'beli baju 80rb & kopi 15rb'), sistem NLP akan memecah kalimat jadi 2 transaksi, mendeteksi uang, kategori, dan memperbarui saldo seketika tanpa form manual.",
    skills: ["HuggingFace IndoBERT", "Regex Pipeline", "Next.js", "Prisma", "TypeScript"],
    highlights: ["Satu pesan untuk multi-transaksi otomatis", "NLP berlapis anti-offline layaknya regex", "Pendeteksi harga & 25+ jenis kategori instan"],
    dataset: "Custom dataset berisi 106 test case kalimat transaksi keuangan harian orang Indonesia.",
  },
  {
    title: "MovieRec: Sistem Rekomendasi Film",
    description: "Hybrid recommendation model memakai 25 juta rating",
    tech: ["TensorFlow", "Scikit", "NMF"],
    category: "Recommendation",
    icon: Film,
    image: "/asset_proyek/recomendation.png",
    github: "https://github.com/erenmenn/RekomendasiFILM-collaborative-content",
    bgGradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    fullDescription: "Sistem rekomendasi berskala besar dengan dua paradigma. Content-Based berbasis cosine-similarity untuk mengatasi cold start, dipadu dengan Collaborative Filtering (Neural Matrix Factorization) untuk mempelajari history dari 25 juta iterasi rating.",
    problem: "Tanpa personalisasi yang tepat, penonton membuang waktu hanya untuk mencari film (scroll fatigue) yang berdampak negatif pada retensi platform.",
    solution: "Mengkombinasikan Cosine Similarity (19-dimensi vektor genre) untuk pengguna baru, dengan embedding NMF (64-dimensi) yang menggali pola laten secara presisi optimal untuk pengguna aktif jangka panjang.",
    skills: ["Neural Matrix Factorization", "Cosine Similarity", "TensorFlow", "Pandas", "Cold-Start Handling"],
    highlights: ["Memproses 25 Juta dataset secara efisien", "Penyelesaian cold-start problem secara native", "Prediksi NDCG@5 mencapai tingkat akurasi 1.000"],
    dataset: "Kaggle: Movie Recommendation System (62.423 film, 25 Juta rating dari 162.541 pengguna).",
  },
  {
    title: "MADUW: Prediksi Harga Madu",
    description: "Memprediksi harga madu dengan pemodelan Regresi",
    tech: ["Scikit-Learn", "Regression", "Data Viz"],
    category: "Prediction",
    icon: BarChart3,
    image: "/asset_proyek/honeyprice.png",
    github: "https://github.com/erenmenn/PrediksiHarga-MADUW",
    bgGradient: "linear-gradient(135deg, #eab308, #ea580c)",
    fullDescription: "Proyek komparatif dari empat skema model regresi untuk memprediksi harga pasar madu berdasarkan variabel fisik & kimia hasil uji lab—seperti viskositas, gula, kemurnian air, hingga konduktivitas elektrik.",
    problem: "Madu murni seringkali dicampur bahan aditif untuk memperkecil modal produksi. Ini membuat harga jadi subjektif dan sulit diukur transparansinya oleh konsumen maupun peternak.",
    solution: "Melatih 4 model berbeda (Linear, KNN, AdaBoost, Random Forest). Secara mengejutkan, Linear Regression menjadi sistem terefektif (MAPE 0.93%) setelah diterapkan Inverse Log Scale terhadap prediksi model advanced lainnya.",
    skills: ["Linear Regression", "AdaBoost", "Random Forest", "Data Inference Analysis", "Pandas"],
    highlights: ["Kompetisi 4 model evaluasi beda paradigma", "Linear membengkali algortima Ensemble pd skala Inverse", "Model ditraining atas > 240 Ribu data parameter madu"],
    dataset: "Kaggle: Predict Purity and Price of Honey oleh Stealth Technologies (247.903 baris data, 11 fitur kimia).",
  },
  {
    title: "TayloR: Semantic Lyrics Search",
    description: "Temukan lagu Taylor Swift pake sentimen emosimu",
    tech: ["SBERT", "FAISS", "Flask"],
    category: "NLP",
    icon: Brain,
    image: "/asset_proyek/lyrics.png",
    github: "https://github.com/erenmenn/SemanticSearch-Lyrics",
    bgGradient: "linear-gradient(135deg, #3b82f6, #6366f1)",
    fullDescription: "Mesin pencari semantik canggih yang dirancang mengeksplor diskografi musik dengan konteks perasaan asli manusia ketimbang keyword. Mengandalkan metode Dual-Field Adaptive Hybrid Search yang melewati 9 flow NLP pipeline komprehensif.",
    problem: "Pendengar sering kesulitan mencari lagu karena tidak tau keyword judul/lirik aslinya. Ketika merasa 'sedih di kamar', keyword 'sad bed' tak membawa makna filosofis lagu.",
    solution: "Mentransformasikan setiap lirik & mood lagu dalam basis vector. Memungkinkan search via slang ekspresi lokal spt 'galau', 'bucin', lalu disimilaritasi lewat indeks SBERT dan FAISS search ke 164 dataset anotasi mandiri.",
    skills: ["Sentence Transformers", "Vector FAISS", "Semantic Tuning", "Slang Translator", "React.js"],
    highlights: ["Bilingual query (Support slang indo + EN native)", "Menampung 50+ variasi kondisi/emosi", "Diversity injection fallback bila filter ketat"],
    dataset: "164 lagu dari 8 album utama Taylor Swift yang dianotasi secara manual dengan label situasi & intensitas (10+ label/lagu).",
  },
  {
    title: "FirstAid.ID: NLP Chunking Strategy",
    description: "Analisis riset strategik RAG di buku Panduan P3K",
    tech: ["RAG", "IndoBERT", "Python"],
    category: "Professional",
    subcategory: "NLP",
    icon: Brain,
    image: "/asset_proyek/firstaid.png",
    github: "https://github.com/erenmenn/ChungkingStrategy-FirstAIDbook",
    bgGradient: "linear-gradient(135deg, #ef4444, #991b1b)",
    fullDescription: "Proyek R&D krusial yang meninjau algoritma Chunking Text pada teknologi RAG (Retrieval Augmented Generation) di lingkup domain resiko tinggi, yakni dokumen darurat Medis-P3K. Dibangun untuk menganalisa split-pattern mana yang minim halusinasi.",
    problem: "Pada kecelakaan darurat RAG tak boleh salah memberi instruksi sedikitpun. Jika pemotongan paragraf teks jelek bertengah kalimat (noise / lepas konteks), pengguna bisa bahaya fatal.",
    solution: "Melakukan head-to-head strategi chunking: Sentence, Semantic, Fixed-Size. Berkat natur instruksional P3K (1 kalimat = 1 aksi), Sentence-based Chunking keluar juara dgn F1 BERTScore fantastis.",
    skills: ["LangChain", "Text Chunking", "BERTScore Evaluation", "IndoBERT Vector", "R&D Analysis"],
    highlights: ["Skenario validasi ketat manual ground truth", "Perbandingan Metrik pakai BERTScore semantic", "Mengoptimalisasi chunking domain prosedural medis"],
    dataset: "Buku PDF 'Panduan Pertolongan Pertama pada Kecelakaan Jalan' (Kemenkes 2019) dengan 20 QnA Ground Truth.",
  },
  {
    title: "EMIR: Emotion Image Classifier",
    description: "Deteksi ekspresi human dari foto dalam 200 milisekon",
    tech: ["TFLite", "MTCNN", "Flask"],
    category: "Computer Vision",
    icon: Eye,
    image: "/asset_proyek/emotion.png",
    github: "https://github.com/erenmenn/ImageClassification-EmosiMU",
    bgGradient: "linear-gradient(135deg, #f97316, #e11d48)",
    fullDescription: "Web platform computer-vision dengan Pipeline 5-Tahap interaktif untuk membaca muka & mood partisipan ke dalam kategori Angry, Fear, Happy, Sad, & Surprise bermodalkan upload gambar foto biasa berbackground apapun.",
    problem: "Analisa emosional subjek butuh validasi visual yang netral tanpa bias perantara. Pengidentifikasian via wajah seringkali meleset dan sistem lamban ketika dibebani resolusi foto.",
    solution: "Menggabungkan arsitektur Face Crop (MTCNN / Haar Cascade fallback) untuk crop paras detail secara presisi, lalu menjatuhkannya ke sistem TFLite Deep Learning yang terkompresi dari 27mb menjadi 4-Megabyte super cepat.",
    skills: ["Face Detection MTCNN", "TensorFlow Lite", "Flask REST API", "OpenCV Image Preprocess", "UI Layouting"],
    highlights: ["Akurasi inferensi < 200ms di CPU standar", "Dual API Endpoints untuk integrasi Front-End", "Terkondisi optimal dalam web interface partikel UX"],
    dataset: "Kaggle: Emotion Image Dataset (5 Kelas: Angry, Fear, Happy, Sad, Surprise).",
  },
  {
    title: "PlantCare: Scan Penyakit Daun",
    description: "Klasifikasi 35 tipe penyakit tanaman secara akurat",
    tech: ["CNN", "Keras", "Flask"],
    category: "Computer Vision",
    icon: Eye,
    image: "/asset_proyek/plantdesease.png",
    github: "https://github.com/erenmenn/ImageClassification-PlantCare",
    bgGradient: "linear-gradient(135deg, #22c55e, #0d9488)",
    fullDescription: "Sebuah program Computer Vision diagnostik andalan berbasis CNN Sequential. Platform PlantCare membantu petani mengatasi problematika identifikasi hama & defisiensi elemen pada 11 jenis spesies tumbuhan cukup dengan selembar foto dedaunan.",
    problem: "Sebagian besar petani lokal kekurangan ahli botani profesional. Evaluasi tanaman visual berjam-jam memakan operasional, bahkan sering telat mendiagnosa penyakit merugikan.",
    solution: "Men-deploy Deep Neural Network 5.3 juta parameter berlapis MaxPooling yang di-train menggunakan augmentasi PlantVillage. Petani difasilitasi return top-3 predictions bersama confidence rating tiap fotonya.",
    skills: ["Convolutional Neural Networks", "Image Augmentation", "TensorFlow Backend", "Pillow (PIL)", "REST Architecture"],
    highlights: ["Mencapai Precision > 94% secara stabil", "Model di-export portable dengan size cuma 5.3 MB", "Akomodasi 35 klasifikasi berbeda per sekali deteksi"],
    dataset: "Kaggle: PlantVillage Dataset (35 kategori penyakit dari 11 jenis tanaman dengan rasio split 80:20).",
  },
  {
    title: "Taylor Ophelia: Mass Sentiment",
    description: "Membedah emosi belasan ribu komen via API Scraping",
    tech: ["NLP", "SVM", "YouTube API"],
    category: "NLP",
    icon: MessageSquare,
    image: "/asset_proyek/sentimen.png",
    github: "https://github.com/erenmenn/SentimenAnalisis-TaylorOphelia",
    bgGradient: "linear-gradient(135deg, #10b981, #047857)",
    fullDescription: "Bot scraper automasi digabung NLP canggih yang berhasil menyedot & mensintesasi impresi terhadap sebuah Music Video secara kuantitatif. Menganalisis total kompilasi 15,000 baris komen youtube utuh menjadi sentimen terstruktur.",
    problem: "Produksi jutaan komen fans setiap detik merupakan rahim analitik emas, tapi amat sangat noise untuk dipilah baca satu per satu demi mengetes rasio rating positif/negatif perilisan.",
    solution: "Rancang bangun scraper dari public YouTube API -> Text Cleaning NLP -> Klasifikasi SVM dengan ekstraksi TF-IDF. Mampu menyaring komen berkelas, membantai performa Random Forest maupun representasi semantik Word2Vec.",
    skills: ["YouTube Data API", "Word2Vec / TF-IDF", "Support Vector Machine", "Tqdm Scraper", "Seaborn Viz"],
    highlights: ["TF-IDF merebut takhta juara akurasi (>91%)", "Koleksi auto 15rb komentar ter-scrap kilat", "Pengelompokan identitas komentar lokal vs global (langdetect)"],
    dataset: "Live Scraping via YouTube Data API v3 (15.000 komentar mentah dari video Taylor Swift - The Fate of Ophelia).",
  },
  {
    title: "CS Intent: Intelligent Router",
    description: "Benchmark Intent-Router bot pake 3 paradigma ML",
    tech: ["DistilBERT", "BiLSTM", "Naive Bayes"],
    category: "NLP",
    icon: Wrench,
    image: "/asset_proyek/customerchatbot.png",
    github: "https://github.com/erenmenn/IntentClass-CustomerServiceBOT",
    bgGradient: "linear-gradient(135deg, #6366f1, #312e81)",
    fullDescription: "Evaluator head-to-head terhadap Tiga Zaman AI—Classical ML (Naive Bayes), Deep Learning (BiLSTM), dan Transformer (DistilBERT)—untuk mencari the best architecture memecahkan pola 27 jenis komplain CS berbasis 21rb percakapan real.",
    problem: "Chatbot pasaran yg serba rule-based langsung blank saat user komplain ngetik panjang dengan typo atau bahasa membingungkan, imbasnya kepuasan merugi & agen manusia tekor beban kerja.",
    solution: "Mengekstrak model klasifikasi multi-kelas untuk mapping keluhan otomatis. Riset membuktikan gap Naive Bayes & BERT yg terpaut tipis 0.53% membawa revolusioner: 'Pilih Naive Bayes buat kecepatan Edge (2000x lebih cepat) & Bert utk komputasi awan kuat.'",
    skills: ["Transformer Fine-Tuning", "TF-IDF + Multinomial", "BiLSTM Neural Network", "Intent Mapping", "Comparative ML"],
    highlights: ["DistilBERT mencapai nilai absolut 99.8% Perfect", "Naive Bayes secepat kilat inference (0.001ms)", "Memiliki insight deployment paling aksi dan efisien"],
    dataset: "Kaggle: Bitext Customer Support Dataset (21.534 utterance Bahasa Inggris dengan 27 label intent berbeda).",
  },
];

const categories: Category[] = ["All", "Professional", "NLP", "Computer Vision", "Recommendation", "Prediction", "Time Series"];

const categoryMeta: Record<string, { emoji: string; color: string; grad: string; isSpecial?: boolean }> = {
  "All":             { emoji: "✦",  color: "#6366f1", grad: "linear-gradient(135deg,#6366f1,#a855f7)" },
  "Professional":    { emoji: "⚡", color: "#f59e0b", grad: "linear-gradient(135deg,#f59e0b,#ef4444,#a855f7)", isSpecial: true },
  "NLP":             { emoji: "🧠", color: "#ef4444", grad: "linear-gradient(135deg,#ef4444,#f97316)" },
  "Computer Vision": { emoji: "👁️", color: "#10b981", grad: "linear-gradient(135deg,#10b981,#06b6d4)" },
  "Recommendation":  { emoji: "🎬", color: "#ec4899", grad: "linear-gradient(135deg,#ec4899,#f43f5e)" },
  "Prediction":      { emoji: "📈", color: "#f59e0b", grad: "linear-gradient(135deg,#f59e0b,#ea580c)" },
  "Time Series":     { emoji: "⏱️", color: "#8b5cf6", grad: "linear-gradient(135deg,#8b5cf6,#6366f1)" },
};

// ── Project Modal — clean white inside ────────────────────────────────────────
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const images = [project.image, project.image, project.image];

  const nextImg = (e: React.MouseEvent) => { e.stopPropagation(); setImgIdx((p) => (p + 1) % images.length); };
  const prevImg = (e: React.MouseEvent) => { e.stopPropagation(); setImgIdx((p) => (p - 1 + images.length) % images.length); };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[95vh] overflow-y-auto rounded-3xl shadow-2xl flex flex-col bg-white"
      >
        {/* Gradient top bar — keeps the project's color identity */}
        <div
          className="w-full px-6 py-4 flex justify-between items-center sticky top-0 z-50 rounded-t-3xl"
          style={{ background: project.bgGradient }}
        >
          <div className="flex items-center gap-3">
            <project.icon className="w-5 h-5 text-white drop-shadow" />
            <span className="font-pixel text-[9px] tracking-widest text-white uppercase">
              {project.category}{project.subcategory ? ` · ${project.subcategory}` : ""}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center hover:bg-white/40 transition-colors active:scale-95"
          >
            <X className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Image Carousel */}
        <div className="relative h-60 md:h-72 flex-shrink-0 bg-slate-900 overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={images[imgIdx]}
              alt={project.title}
              initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
          </AnimatePresence>
          {/* Subtle gradient tint from card color */}
          <div className="absolute inset-0 opacity-15" style={{ background: project.bgGradient }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <button onClick={prevImg} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all">
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button onClick={nextImg} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 border border-white/20 flex items-center justify-center hover:bg-black/70 opacity-0 group-hover:opacity-100 transition-all">
            <ChevronRight className="w-5 h-5 text-white" />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md">
            {images.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full border border-white/50 transition-all ${imgIdx === i ? "bg-white scale-125" : "bg-transparent"}`} />
            ))}
          </div>
        </div>

        {/* ── Clean White Body ── */}
        <div className="p-7 md:p-9 space-y-6">

          {/* Title + tech tags */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-800 leading-tight mb-3">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[9px] font-pixel px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 text-slate-600">{t}</span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="rounded-2xl p-5 bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2 text-slate-400 font-pixel text-[9px] mb-3">
              <ScrollText className="w-4 h-4" /> OVERVIEW
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Problem / Solution */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl p-5 bg-red-50 border border-red-100 border-l-4" style={{ borderLeftColor: "#ef4444" }}>
              <div className="flex items-center gap-2 text-red-500 font-pixel text-[9px] mb-2">
                <Swords className="w-4 h-4" /> PROBLEM
              </div>
              <p className="text-sm text-slate-700 leading-relaxed italic">"{project.problem}"</p>
            </div>
            <div className="rounded-2xl p-5 bg-emerald-50 border border-emerald-100 border-l-4" style={{ borderLeftColor: "#10b981" }}>
              <div className="flex items-center gap-2 text-emerald-600 font-pixel text-[9px] mb-2">
                <Shield className="w-4 h-4" /> SOLUTION
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Dataset */}
          {project.dataset && (
            <div className="rounded-2xl p-5 bg-indigo-50 border border-indigo-100 border-l-4" style={{ borderLeftColor: "#6366f1" }}>
              <div className="flex items-center gap-2 text-indigo-600 font-pixel text-[9px] mb-2">
                <Brain className="w-4 h-4" /> DATASET SOURCE
              </div>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">{project.dataset}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <div className="flex items-center gap-2 text-slate-400 font-pixel text-[9px] mb-3">
              <Wrench className="w-4 h-4" /> TECH STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-xl text-xs font-semibold border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 cursor-default transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <div className="flex items-center gap-2 text-slate-400 font-pixel text-[9px] mb-3">
              <Target className="w-4 h-4" /> KEY HIGHLIGHTS
            </div>
            <div className="grid md:grid-cols-1 gap-3">
              {project.highlights.map((h, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-default group"
                >
                  <div className="flex flex-shrink-0 items-center justify-center w-8 h-8 rounded-full bg-amber-50 text-amber-500 group-hover:bg-amber-400 group-hover:text-white transition-colors">
                    <Star className="w-4 h-4" />
                  </div>
                  <p className="text-sm text-slate-700 font-semibold leading-relaxed pt-1">{h}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={project.github}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-pixel text-[10px] uppercase tracking-widest hover:-translate-y-1 transition-all shadow-lg"
            style={{ background: project.bgGradient }}
          >
            View Source Repository <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Main Section ───────────────────────────────────────────────────────────────
const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = active === "All"
    ? projects
    : projects.filter((p) => p.category === active || p.subcategory === active);

  return (
    <section id="projects" className="py-24 relative pixel-grid overflow-hidden">
      {/* Background smokes */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-[140px] bg-indigo-400/10" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full blur-[140px] bg-pink-300/10" />
      </div>

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-indigo-300 shadow-[3px_3px_0px_#6366f1] rounded-xl mb-4">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[9px] font-pixel text-indigo-600 tracking-widest uppercase">PORTFOLIO_EXPLORER_V3</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                FEATURED<br className="hidden xs:inline" />{" "}
                <span className="text-transparent bg-clip-text italic pr-2" style={{ backgroundImage: "linear-gradient(to right, #6366f1, #ec4899, #f59e0b)" }}>
                  WORKS
                </span>
              </h2>
              <p className="text-muted-foreground text-sm mt-2 font-medium">
                {filtered.length} project{filtered.length !== 1 ? "s" : ""} — click to explore
              </p>
            </div>

            {/* ── Filter Bar ── */}
            <div className="flex flex-wrap gap-2 max-w-xl">
              {categories.map((cat) => {
                const meta = categoryMeta[cat] ?? { emoji: "●", color: "#94a3b8", grad: "linear-gradient(135deg,#94a3b8,#64748b)" };
                const isActive = active === cat;
                const isSpecial = !!meta.isSpecial;

                return (
                  <motion.button
                    key={cat}
                    onClick={() => setActive(cat)}
                    whileHover={{ y: -2, scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex items-center gap-1.5 px-4 py-2.5 font-pixel text-[9px] uppercase tracking-widest border-2 transition-all duration-200"
                    style={{
                      borderRadius: isSpecial ? "999px" : "1rem",
                      ...(isActive
                        ? { background: meta.grad, color: "#fff", borderColor: "transparent", boxShadow: `0 4px 16px ${meta.color}50` }
                        : isSpecial
                          ? { background: meta.grad, color: "#fff", borderColor: "transparent", boxShadow: `0 2px 10px ${meta.color}30`, opacity: 0.85 }
                          : { background: "#fff", color: "#64748b", borderColor: "#e2e8f0", boxShadow: "3px 3px 0px #f1f5f9" }
                      )
                    }}
                  >
                    <span className="text-sm leading-none">{meta.emoji}</span>
                    {cat}
                    {isActive && (
                      <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 flex items-center justify-center"
                        style={{ borderColor: meta.color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: meta.color }} />
                      </span>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Creative Bento Grid — card fronts UNCHANGED ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] lg:auto-rows-[320px]"
          >
            {filtered.map((project, i) => {
              const meta = categoryMeta[project.category] || categoryMeta["All"];

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.85 }}
                  transition={{ duration: 0.35, delay: i * 0.04, type: "spring", bounce: 0.2 }}
                  onClick={() => setSelectedProject(project)}
                  className="relative group col-span-1 row-span-1"
                >
                  {/* Subtle Glow Behind Card */}
                  <div
                    className="absolute -inset-1 blur-2xl opacity-20 group-hover:opacity-50 transition-all duration-700 z-0 scale-95 group-hover:scale-100 pointer-events-none"
                    style={{ background: meta.grad }}
                  />

                  {/* Actual Card Body — identical to original */}
                  <div
                    className="relative z-10 h-full w-full rounded-3xl overflow-hidden cursor-pointer border-[3px] flex flex-col transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
                    style={{
                      borderColor: meta.color,
                      backgroundColor: "#fff",
                      boxShadow: `6px 6px 0px ${meta.color}`,
                    }}
                  >
                    {/* Image area */}
                    <div className="relative w-full h-[150px] shrink-0 border-b-[3px] bg-slate-50 overflow-hidden" style={{ borderColor: meta.color }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100"
                      />

                      {/* Colorful soft overlay */}
                      <div
                        className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-300 mix-blend-overlay"
                        style={{ background: meta.grad }}
                      />

                      {/* Smoke on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen overflow-hidden">
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 blur-[40px] rounded-full animate-pulse opacity-80" style={{ background: meta.color }} />
                        <div className="absolute top-10 -right-10 w-48 h-48 blur-[50px] rounded-full animate-pulse opacity-60" style={{ background: meta.color }} />
                        <div className="absolute -top-10 left-20 w-32 h-32 blur-[30px] rounded-full animate-pulse opacity-40 delay-150" style={{ background: meta.color }} />
                      </div>

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-30 group-hover:opacity-90 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-[1px] group-hover:backdrop-blur-sm z-10">
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <project.icon className="w-8 h-8 text-white drop-shadow-md mb-2" />
                          <span className="text-white font-pixel text-[9px] px-3 py-1.5 rounded-xl uppercase tracking-widest mt-1 border border-white/40 shadow-sm" style={{ background: meta.color }}>
                            [ EXPLORE ]
                          </span>
                        </div>
                      </div>

                      {/* Top meta bar */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border-2 bg-white/95 backdrop-blur-sm shadow-sm" style={{ borderColor: meta.color }}>
                          <span className="text-sm leading-none">{meta.emoji}</span>
                          <span className="text-[8px] font-pixel tracking-widest uppercase font-bold" style={{ color: meta.color }}>
                            {project.category}
                          </span>
                        </div>
                        <span className="font-pixel text-[10px] bg-white/95 px-2 py-1 rounded-xl shadow-sm border-2" style={{ color: meta.color, borderColor: meta.color }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Bottom white area */}
                    <div className="p-5 flex flex-col flex-grow justify-between relative bg-white">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-1 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                          </div>
                          <span className="text-[8px] font-pixel px-2 py-1 rounded-lg border uppercase font-bold opacity-80" style={{ color: meta.color, borderColor: meta.color, backgroundColor: `${meta.color}15` }}>
                            {meta.emoji} PROJECT.EXE
                          </span>
                        </div>
                        <h3 className="font-black text-slate-800 leading-tight mb-2 text-base sm:text-lg">
                          {project.title}
                        </h3>
                      </div>

                      <div className="mt-auto pt-2">
                        <p className="text-xs text-slate-500 font-medium line-clamp-2 md:line-clamp-3 mb-3 leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, 3).map((t) => (
                            <span key={t} className="text-[9px] font-pixel px-2 py-1 rounded-full border border-slate-200 text-slate-600 bg-slate-50 font-bold tracking-wide">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
