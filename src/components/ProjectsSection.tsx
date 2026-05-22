import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, Brain, Eye, Film, BarChart3, X, Target, Wrench,
  Star, MessageSquare, ChevronLeft, ChevronRight, Gamepad2,
  ScrollText, Swords, Shield, Calendar, Layers, Crown, Sparkles, Database, Code2, CheckCircle2, Github
} from "lucide-react";

type Concept = "Production" | "ML/DL";
type Category = "All" | "NLP" | "Computer Vision" | "Recommendation" | "Regression" | "LLM";

interface Project {
  title: string;
  description: string;
  tech: string[];
  concepts: Concept[];
  category: Category;
  icon: any;
  image: string;
  images?: string[];
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
    title: "SatuTani - Intelligent Agricultural Agent System",
    description: "AI Agent untuk sektor pertanian berbasis LangChain dengan multi-tool orchestration",
    tech: ["LangChain", "RAG", "BMKG API", "Python"],
    concepts: ["Production", "ML/DL"],
    category: "LLM",
    icon: Brain,
    image: "/asset/poster/logo_satutani.png",
    github: "https://github.com/erenmenn/SatuTani-AgriAI",
    bgGradient: "linear-gradient(135deg, #22c55e, #16a34a)",
    fullDescription: "SatuTani adalah sistem AI Agent terintegrasi untuk sektor pertanian yang menggunakan arsitektur multi-tool orchestration berbasis LangChain. Platform ini menggabungkan data cuaca real-time dari BMKG, data agrikultur dari FAO dan Kementerian Pertanian Indonesia, serta RAG system untuk knowledge base terkait hama, pupuk, dan pestisida.",
    problem: "Petani Indonesia menghadapi tantangan dalam mengambil keputusan pertanian yang tepat karena terbatasnya akses ke informasi cuaca real-time, harga komoditas, dan rekomendasi pengelolaan hama yang terintegrasi. Keputusan yang salah berakibat pada kerugian panen dan pendapatan yang tidak optimal.",
    solution: "Mengembangkan AI Pricing & Yield Advisor yang memberikan rekomendasi komoditas berdasarkan lokasi, prediksi cuaca, estimasi hasil panen, dan proyeksi keuntungan. Dibangun Gaussian Scoring Engine sebagai core decision-making system yang mengolah parameter agrikultur menjadi rekomendasi terukur dan data-driven melalui agentic AI workflow.",
    skills: ["LangChain Agent Orchestration", "RAG Pipeline", "Real-time API Integration", "Gaussian Scoring Model", "Multi-source Data Processing", "Python"],
    highlights: ["Multi-tool orchestration untuk integrasi data real-time", "AI Yield & Pricing Advisor berbasis machine learning", "Gaussian Scoring Engine untuk decision-making terukur", "Knowledge base terstruktur untuk hama & pestisida", "Workflow agentic AI penuh otomasi"],
    dataset: "Integrasi data dari BMKG (cuaca), FAO (data agrikultur global), dan Kementerian Pertanian Indonesia (data lokal pertanian nasional).",
  },
  {
    title: "JavaMart AI - Governed Chatbot (LangGraph Hybrid System)",
    description: "Chatbot berbasis LangGraph dengan governance dan controlled agent workflow",
    tech: ["LangGraph", "LLM", "Guardrails", "Python"],
    concepts: ["Production", "ML/DL"],
    category: "LLM",
    icon: MessageSquare,
    image: "/asset/poster/lang.png",
    github: "https://github.com/erenmenn/JavaMart-GovernedChatbot",
    bgGradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    fullDescription: "JavaMart AI adalah sistem chatbot enterprise-grade yang dibangun menggunakan LangGraph dengan fokus pada AI governance, controlled agent workflow, dan structured reasoning pipeline. Sistem ini menjamin setiap respons tetap konsisten, aman, dan dapat dievaluasi melalui multiple evaluation layers dan guardrails proteksi data.",
    problem: "Chatbot tradisional sering menghasilkan output yang tidak konsisten, tidak terkontrol, dan sulit dievaluasi kualitasnya. Dalam konteks enterprise dengan data sensitif, diperlukan mekanisme governance yang ketat untuk memastikan safety, compliance, dan reliability sistem AI.",
    solution: "Mengimplementasikan LangGraph orchestration dengan state management dan routing decision yang terstruktur. Sistem ini dilengkapi guardrails untuk proteksi data sensitif serta evaluation layer multi-aspek (relevansi, akurasi, safety) untuk menilai kualitas output LLM secara objektif dan measurable.",
    skills: ["LangGraph Orchestration", "State Management", "AI Guardrails", "Evaluation Framework", "LLM Safety & Compliance", "Python"],
    highlights: ["Controlled agent workflow dengan LangGraph state machine", "Multi-layer guardrails untuk proteksi data sensitif", "Evaluation layer terstruktur (relevansi, akurasi, safety)", "Hybrid LangChain architecture scalable", "Governance framework enterprise-ready"],
    dataset: "Custom evaluation dataset untuk testing governance policy, safety compliance, dan response quality metrics di berbagai skenario percakapan.",
  },
  {
    title: "Sisibuk AI: Asisten Jadwal Cerdas",
    description: "Asisten manajemen jadwal bertenaga Groq AI (LLaMA 3.3)",
    tech: ["Next.js", "Groq AI", "Supabase"],
    concepts: ["Production", "ML/DL"],
    category: "LLM",
    icon: Calendar,
    image: "/asset_proyek/sisibuk/image1.png",
    images: [
      "/asset_proyek/sisibuk/image1.png",
      "/asset_proyek/sisibuk/image2.png",
      "/asset_proyek/sisibuk/image3.png",
    ],
    github: "https://github.com/erenmenn/Sisibuk-AI-PenjadwalanOtomatis",
    bgGradient: "linear-gradient(135deg, #f43f5e, #be123c)",
    fullDescription: "Sisibuk AI adalah asisten manajemen produktivitas berbasis percakapan yang menggabungkan natural language input, gamifikasi, dan sistem klasifikasi cerdas. Dibangun di atas Next.js 15 (App Router) dengan pemrosesan inferensi berkecepatan tinggi Groq (LLaMA 3.3 70B).",
    problem: "Mahasiswa sering lupa deadline akibat jadwal berserakan, kelelahan setup database manual (Notion Fatigue), dan tidak menyadari adanya jadwal yang saling tumpang tindih.",
    solution: "Cukup ketik dengan bahasa alami (misal: 'tanggal 2 april ada submit proposal'), AI akan secara otomatis mengenali Intent, mendeteksi konflik waktu, membuat reverse planner, & menyusun notifikasi pintar (Email/Push).",
    skills: ["Groq API (LLaMA 3.3)", "Next.js 15", "Supabase", "Zustand", "TailwindCSS v4"],
    highlights: ["Sistem Klasifikasi Intent via chip LPU Groq (< 1 detik)", "Conflict Checker & Reverse Study Planner Pintar", "Gamifikasi Produktivitas (XP, Level & Badge)", "Otomasi System Notifikasi (Email & Push)"],
    dataset: "Logika Deterministik AI terintegrasi dengan Relational Database via Supabase.",
  },
  {
    title: "WangkuAI: Asisten Keuangan Pintar",
    description: "Finance tracker dengan NLP pipeline untuk chat sehari-hari",
    tech: ["Next.js", "IndoBERT", "Prisma"],
    concepts: ["Production", "ML/DL"],
    category: "NLP",
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
    concepts: ["ML/DL"],
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
    concepts: ["ML/DL"],
    category: "Regression",
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
    title: "FirstAid.ID: NLP Chunking Strategy",
    description: "Analisis riset strategik RAG di buku Panduan P3K",
    tech: ["RAG", "IndoBERT", "Python"],
    concepts: ["ML/DL"],
    category: "NLP",
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
    concepts: ["ML/DL"],
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
    concepts: ["ML/DL"],
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
    concepts: ["ML/DL"],
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
    concepts: ["ML/DL"],
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

const conceptsList: Concept[] = ["ML/DL", "Production"];
const categories: Category[] = ["All", "NLP", "Computer Vision", "Recommendation", "Regression", "LLM"];

const categoryMeta: Record<string, { icon: any; color: string; grad: string; isSpecial?: boolean; textColor?: string }> = {
  "All":             { icon: Layers,  color: "#6366f1", grad: "linear-gradient(135deg,#6366f1,#a855f7)", textColor: "#fff" },
  "NLP":             { icon: Brain, color: "#ef4444", grad: "linear-gradient(135deg,#ef4444,#f97316)", textColor: "#fff" },
  "Computer Vision": { icon: Eye, color: "#10b981", grad: "linear-gradient(135deg,#10b981,#06b6d4)", textColor: "#fff" },
  "Recommendation":  { icon: Target, color: "#ec4899", grad: "linear-gradient(135deg,#ec4899,#f43f5e)", textColor: "#fff" },
  "Regression":      { icon: BarChart3, color: "#f59e0b", grad: "linear-gradient(135deg,#f59e0b,#ea580c)", textColor: "#fff" },
  "LLM":             { icon: Crown, color: "#8b5cf6", grad: "linear-gradient(135deg,#8b5cf6,#6366f1)", textColor: "#fff" },
};

// ── Project Modal — clean white inside ────────────────────────────────────────
const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const images = project.images && project.images.length > 1
    ? project.images
    : [project.image];

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
              {project.category}
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
        <div className="relative w-full flex-shrink-0 bg-slate-50 overflow-hidden group">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={images[imgIdx]}
              alt={project.title}
              initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -80, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-auto block"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none opacity-50 transition-opacity group-hover:opacity-100" />

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

        {/* ── Clean Elegant Body ── */}
        <div className="p-7 md:p-9 space-y-7 relative bg-white overflow-hidden shrink-0">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-pink-500/5 blur-[100px] rounded-full pointer-events-none" />

          {/* Title + tech tags */}
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight mb-4">{project.title}</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-sans font-bold px-3 py-1.5 rounded-full border border-slate-200/60 bg-slate-50/80 backdrop-blur-sm text-slate-600 shadow-sm">{t}</span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="relative z-10 rounded-2xl p-6 bg-gradient-to-br from-slate-50/80 to-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02),inset_0_1px_0_rgba(255,255,255,1)]">
            <div className="flex items-center gap-2 text-slate-500 font-sans font-bold uppercase tracking-widest text-xs mb-3">
              <ScrollText className="w-4 h-4 text-indigo-500" /> OVERVIEW
            </div>
            <p className="text-slate-600 text-[15px] leading-relaxed font-medium">{project.fullDescription}</p>
          </div>

          {/* Problem / Solution - Soft thick gradients */}
          <div className="grid md:grid-cols-2 gap-5 relative z-10">
            <div className="rounded-2xl p-6 bg-gradient-to-br from-red-50/80 to-red-50/10 border border-red-100 shadow-[0_4px_20px_-10px_rgba(239,68,68,0.2),inset_0_1px_0_rgba(255,255,255,0.7)]">
              <div className="flex items-center gap-2 text-red-500 font-sans font-bold uppercase tracking-widest text-xs mb-3">
                <Swords className="w-4 h-4" /> PROBLEM
              </div>
              <p className="text-[14.5px] text-slate-700 leading-relaxed font-medium">"{project.problem}"</p>
            </div>
            <div className="rounded-2xl p-6 bg-gradient-to-br from-emerald-50/80 to-emerald-50/10 border border-emerald-100 shadow-[0_4px_20px_-10px_rgba(16,185,129,0.2),inset_0_1px_0_rgba(255,255,255,0.7)]">
              <div className="flex items-center gap-2 text-emerald-600 font-sans font-bold uppercase tracking-widest text-xs mb-3">
                <Sparkles className="w-4 h-4" /> SOLUTION
              </div>
              <p className="text-[14.5px] text-slate-700 leading-relaxed font-medium">{project.solution}</p>
            </div>
          </div>

          {/* Dataset */}
          {project.dataset && (
            <div className="relative z-10 rounded-2xl p-6 bg-gradient-to-br from-indigo-50/80 to-purple-50/10 border border-indigo-100 shadow-[0_2px_10px_rgba(99,102,241,0.05),inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div className="flex items-center gap-2 text-indigo-600 font-sans font-bold uppercase tracking-widest text-xs mb-3">
                <Database className="w-4 h-4" /> DATASET SOURCE
              </div>
              <p className="text-[14.5px] text-slate-700 leading-relaxed font-semibold">{project.dataset}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-slate-500 font-sans font-bold uppercase tracking-widest text-xs mb-4">
              <Code2 className="w-4 h-4 text-slate-400" /> TECH STACK
            </div>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((s) => (
                <span key={s} className="relative overflow-hidden px-4 py-2 rounded-xl text-[11px] font-bold text-white shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] cursor-default transition-all" style={{ background: project.bgGradient }}>
                  <span className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 100%)" }} />
                  <span className="relative z-10">{s}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="relative z-10">
            <div className="flex items-center gap-2 text-slate-500 font-sans font-bold uppercase tracking-widest text-xs mb-4">
              <Target className="w-4 h-4 text-amber-500" /> KEY HIGHLIGHTS
            </div>
            <div className="grid md:grid-cols-1 gap-3">
              {project.highlights.map((h, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.01, x: 4 }}
                  className="flex items-start gap-3.5 p-4.5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all cursor-default group"
                >
                  <div className="flex flex-shrink-0 items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-amber-100 to-amber-50 text-amber-500 shadow-inner group-hover:from-amber-400 group-hover:to-amber-500 group-hover:text-white transition-all">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <p className="text-[14.5px] text-slate-700 font-semibold leading-relaxed pt-1.5">{h}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href={project.github}
            className="group flex items-center justify-center gap-3 w-full py-4 rounded-2xl text-white font-sans font-bold text-[13px] uppercase tracking-wider hover:-translate-y-1 transition-all shadow-lg overflow-hidden relative z-10"
            style={{ 
              background: "linear-gradient(135deg, #a855f7, #7e22ce, #6b21a8)",
              boxShadow: "0 6px 20px rgba(147, 51, 234, 0.4)"
            }}
          >
            {/* Shimmer on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.2) 50%,transparent 70%)", backgroundSize: "200% 100%", animation: "shimmer 2s infinite" }} />
            <Github className="w-5 h-5 relative z-10" /> 
            <span className="relative z-10">View Source Repository</span>
            <ExternalLink className="w-4 h-4 opacity-70 relative z-10" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Main Section ───────────────────────────────────────────────────────────────
const ProjectsSection = () => {
  const [activeConcept, setActiveConcept] = useState<Concept>("ML/DL");
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter based on concept first, then category
  const filtered = projects.filter((p) => {
    // Check if project belongs to active concept
    const inConcept = p.concepts.includes(activeConcept);
    if (!inConcept) return false;

    // Check category if in ML/DL concept and category is not "All"
    if (activeConcept === "ML/DL" && activeCategory !== "All") {
      return p.category === activeCategory;
    }
    
    return true;
  });

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
          <div className="flex flex-col items-center text-center gap-6">
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
            </div>

            {/* ── Concept Tabs (Big 3) ── */}
            <div className="flex bg-slate-100/50 p-1.5 rounded-full border border-slate-200/60 shadow-sm backdrop-blur-sm max-w-full overflow-x-auto">
              {conceptsList.map((concept) => {
                const isActive = activeConcept === concept;
                return (
                  <button
                    key={concept}
                    onClick={() => {
                      setActiveConcept(concept);
                      setActiveCategory("All"); // reset category when changing concept
                    }}
                    className={`relative px-6 py-3 rounded-full text-sm font-black tracking-wide uppercase transition-all duration-300 whitespace-nowrap ${
                      isActive ? "text-white shadow-md" : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeConceptBg"
                        className="absolute inset-0 rounded-full"
                        style={{ background: "linear-gradient(135deg, #6366f1, #ec4899)" }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {concept === "Production" && <Crown className="w-4 h-4" />}
                      {concept === "ML/DL" && <Brain className="w-4 h-4" />}
                      {concept}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* ── ML/DL Subcategory Filters ── */}
            <AnimatePresence>
              {activeConcept === "ML/DL" && (
                <motion.div 
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  className="flex flex-wrap justify-center gap-2 max-w-2xl mt-2"
                >
                  {categories.map((cat) => {
                    const meta = categoryMeta[cat] ?? { icon: Layers, color: "#94a3b8", grad: "linear-gradient(135deg,#94a3b8,#64748b)", textColor: "#fff", isSpecial: false };
                    const isActive = activeCategory === cat;

                    return (
                      <motion.button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        whileHover={{ y: -2, scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative flex items-center gap-1.5 px-4 py-2 font-sans text-[10px] sm:text-xs uppercase tracking-widest transition-all duration-300 overflow-hidden"
                        style={{
                          borderRadius: "999px",
                          background: isActive ? meta.grad : `${meta.color}10`,
                          color: isActive ? "#fff" : meta.color,
                          border: isActive ? "1px solid transparent" : `1px solid ${meta.color}30`,
                          boxShadow: isActive
                            ? `0 6px 20px ${meta.color}40, inset 0 1px 0 rgba(255,255,255,0.4)`
                            : `0 2px 8px ${meta.color}05`,
                          fontWeight: 800,
                        }}
                      >
                        <meta.icon className="w-3.5 h-3.5 relative z-10" strokeWidth={2.5} />
                        <span className="relative z-10 pt-[1px]">{cat}</span>
                      </motion.button>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-muted-foreground text-sm mt-4 font-medium">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""} — click to explore
            </p>
          </div>
        </motion.div>

        {/* ── Creative Bento Grid — card fronts END UNIFORM ── */}
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="w-full py-20 flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">Belum ada inovasi di sini</h3>
              <p className="text-slate-500 max-w-sm">
                Ide-ide cemerlang sedang diracik. Kembali lagi nanti untuk melihat inovasi AI terbaru!
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeConcept + activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
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

                  {/* Actual Card Body (Creative Colorful) */}
                  <div
                    className="relative z-10 h-full w-full rounded-[2rem] overflow-hidden cursor-pointer flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]"
                    style={{
                      background: "#ffffff",
                      border: `1.5px solid ${meta.color}30`,
                      boxShadow: `0 6px 30px -8px ${meta.color}30, inset 0 1px 0 rgba(255,255,255,1)`,
                      transition: "box-shadow 0.4s ease, transform 0.4s ease, border-color 0.4s ease",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 16px 50px -10px ${meta.color}50, 0 0 0 1.5px ${meta.color}60, inset 0 1px 0 rgba(255,255,255,1)`;
                      (e.currentTarget as HTMLDivElement).style.borderColor = `${meta.color}70`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = `0 6px 30px -8px ${meta.color}30, inset 0 1px 0 rgba(255,255,255,1)`;
                      (e.currentTarget as HTMLDivElement).style.borderColor = `${meta.color}30`;
                    }}
                  >
                    {/* Colored gradient stripe at very top */}
                    <div className="w-full h-1 shrink-0" style={{ background: meta.grad }} />

                    {/* Image area */}
                    <div className="relative w-full h-[160px] md:h-[180px] shrink-0 bg-slate-50 overflow-hidden">
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

                      {/* Interactive sleek overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center backdrop-blur-sm z-10">
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(255,255,255,0.3)]" style={{ background: meta.grad }}>
                            <project.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-white font-sans font-bold text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest border border-white/20 bg-white/10 backdrop-blur-md shadow-sm">
                            View Project
                          </span>
                        </div>
                      </div>

                      {/* Top meta bar — number only */}
                      <div className="absolute top-4 right-4 z-20">
                        <span className="font-sans font-black tracking-tighter text-[11px] bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm" style={{ color: meta.color }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Bottom content area — soft tinted bg */}
                    <div className="p-5 pb-6 flex flex-col gap-3 relative" style={{ background: `linear-gradient(to bottom, ${meta.color}06 0%, #ffffff 40%)` }}>

                      {/* Thin decorative separator line (colored) */}
                      <div className="w-10 h-[3px] rounded-full mb-1" style={{ background: meta.grad }} />

                      {/* Category labels */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {project.concepts.includes("Production") && (
                          <span
                            className="relative overflow-hidden flex items-center gap-1.5 px-3 py-1 rounded-full text-white font-sans text-[10px] uppercase tracking-wider font-extrabold"
                            style={{
                              background: "linear-gradient(135deg, #f43f5e, #a855f7, #3b82f6)",
                              boxShadow: "0 4px 15px rgba(168, 85, 247, 0.35)",
                            }}
                          >
                            <span className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 40%, rgba(0,0,0,0.1) 100%)" }} />
                            <Star className="w-3 h-3 fill-white/80 relative z-10" />
                            <span className="relative z-10">PRODUCTION</span>
                          </span>
                        )}
                        <span
                          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full font-sans text-[9px] uppercase tracking-wider font-bold border"
                          style={{
                            color: meta.color,
                            backgroundColor: `${meta.color}12`,
                            borderColor: `${meta.color}35`
                          }}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-extrabold text-slate-800 leading-snug text-[15px] md:text-base">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-[12.5px] text-slate-500 font-medium leading-relaxed line-clamp-2">{project.description}</p>

                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="text-[9px] uppercase tracking-wider font-sans px-2.5 py-1.5 rounded-lg font-bold shadow-sm"
                            style={{ color: meta.color, backgroundColor: `${meta.color}10`, border: `1px solid ${meta.color}25` }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
