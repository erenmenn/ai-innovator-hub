import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink, Brain, Eye, Film, BarChart3, Target, Wrench,
  Star, MessageSquare, Calendar, Layers, Crown, Sparkles, Code2, Github, X, Target as TargetIcon, CheckCircle2, ChevronLeft, ChevronRight
} from "lucide-react";

type Concept = "Production" | "ML/DL" | "Gen AI" | "Computer Vision" | "NLP" | "Regression" | "Recommendation" | "Workshop";
type Category = "All" | "Machine Learning" | "Deep Learning" | "Gen AI";

interface NodeDetail {
  name: string;
  role: string;
  description: string;
  color: string;
}

interface Project {
  title: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  tech: string[];
  concepts: Concept[];
  category: Category;
  icon: any;
  image: string;
  github: string;
  demoUrl?: string;
  colabUrl?: string;
  nodeDetails?: NodeDetail[];
  whyLanggraph?: string;
  gallery?: string[];
}

const projects: Project[] = [
  {
    title: "Flantara: AI Export Copilot for Indonesia's Spice Economy",
    description: "Platform Smart E-Commerce yang menghubungkan petani rempah premium Indonesia dengan buyer internasional secara langsung, transparan, dan berbasis data AI.",
    overview: "Flantara adalah platform Smart B2B E-Commerce yang menghubungkan petani rempah premium Indonesia (Kakao Nusantara & Vanili) langsung ke buyer internasional — executive chef, boutique hotel, premium bar, dan produsen artisanal — dengan cara yang transparan dan terverifikasi.",
    problem: "Petani rempah Indonesia kesulitan mengakses pasar premium global, sementara buyer internasional sulit menemukan rempah berkualitas tinggi dengan asal-usul (origin) dan kredibilitas yang terverifikasi. Gap ini menyebabkan nilai tambah rempah Indonesia tidak optimal.",
    solution: "Flantara mengintegrasikan: (1) Menu-to-Ingredient Matcher — AI yang mencocokkan kebutuhan resep buyer dengan rempah & petani yang sesuai, (2) Farmer Story Generator — membangun narasi asal-usul produk berbasis dokumen terverifikasi, (3) Trust Score & Computer Vision — untuk verifikasi kualitas, (4) Negotiable Price Assistant — asisten negosiasi harga berbasis data, dan (5) RAG System — retrieval informasi produk & regulasi ekspor. Business model: Boutique B2B subscription + transaction fee + premium listing.",
    tech: ["Next.js", "TypeScript", "RAG", "Computer Vision", "Supabase", "OpenAI API", "Tailwind CSS"],
    concepts: ["Gen AI", "Computer Vision", "Production"],
    category: "Gen AI",
    icon: Sparkles,
    image: "/asset_proyek/flantara.jpg",
    github: "#",
  },
  {
    title: "Scentara: E-Commerce Parfum RAG Dual System",
    description: "Platform e-commerce khusus parfum yang menerapkan arsitektur RAG Dual System untuk rekomendasi dan Q&A spesifik.",
    overview: "Scentara adalah e-commerce cerdas khusus parfum yang menggunakan RAG Dual System. Sistem ini dapat menjawab secara akurat mengenai detail produk maupun informasi umum toko.",
    problem: "Dalam e-commerce, chatbot sering kesulitan membedakan antara pertanyaan spesifik produk (harga, aroma) dengan pertanyaan umum toko (kontak, jam buka), sehingga jawabannya kurang relevan.",
    solution: "Menerapkan RAG (Retrieval-Augmented Generation) Dual System. Sistem memisahkan data terstruktur (JSON) untuk deskripsi detail parfum seperti harga dan notes, serta data tidak terstruktur (TXT) untuk informasi general toko seperti kontak. Agent kemudian menavigasi pertanyaan ke sumber yang tepat.",
    tech: ["RAG", "LLM", "Next.js", "Python"],
    concepts: ["Production", "Gen AI"],
    category: "Gen AI",
    icon: Sparkles,
    image: "/asset_proyek/scentara.png",
    github: "https://github.com/Couraa0/Perfume-Lab",
  },
  {
    title: "AI Holiday Planner: Agent vs RAG",
    description: "Demo ReAct Agent (LangChain + Groq Llama 3.3 70B) dengan 8 tools generik untuk merencanakan liburan lintas negara secara mandiri.",
    overview: "Materi interaktif untuk sesi mengajar (Session 6) yang mendemonstrasikan secara konkret perbedaan RAG (retrieve-generate-stop) dan Agent (Think → Act → Observe). Agent ini mampu merencanakan liburan ke Jepang, Thailand, atau Amerika Serikat tanpa perlu mengubah instruksi.",
    problem: "Banyak yang mengira RAG dan Agent adalah hal yang sama. Selain itu, membuat agent perencana liburan sering berujung pada sistem yang di-hardcode untuk satu destinasi dan tidak memiliki perlindungan dari infinite loop.",
    solution: "Membangun agent dengan pola ReAct yang dibekali 8 tools generik: Tavily (search), Frankfurter (kurs), calculator, geopy (jarak), image search, note (stateful), Open-Meteo (cuaca), dan deep-translator. Agent secara mandiri memilih tool dan urutannya. Ditambah demo failure mode (max_iterations=2) untuk mengajarkan pentingnya safety net.",
    tech: ["LangChain", "Llama 3.3 70B", "ReAct", "Python"],
    concepts: ["Workshop", "Gen AI"],
    category: "Gen AI",
    icon: Calendar,
    image: "/asset_proyek/holiday_planner.png",
    github: "#",
    colabUrl: "https://colab.research.google.com/drive/1aHQ9ZjvuTSj2v28kYHayHBGPNVlAihyu",
    whyLanggraph: "Proyek ini mendemonstrasikan jantung dari Agentic Flow: siklus Think → Act → Observe. Lewat 8 tools generik, agent dibiarkan memutuskan sendiri langkahnya (cari destinasi → convert kurs → hitung budget → cek cuaca → translate). Demo failure mode dengan max_iterations yang disengaja kecil menjadi bukti nyata mengapa kita butuh kontrol dan safety net—sebuah pengantar sempurna sebelum siswa melangkah ke pembuatan graph dan state machine yang lebih robust dengan LangGraph."
  },
  {
    title: "Healthy Food Recommendation Agent",
    description: "LangGraph agent end-to-end yang mem-parsing teks bebas, memvalidasi data biometrik, mencari referensi dari dua sumber (PDF RAG + Tavily), lalu menghasilkan rekomendasi menu personal yang aman.",
    overview: "Agent rekomendasi makanan sehat berbasis LangGraph (Session 6/7 Workshop). User cukup mengetik pesan bebas — sistem otomatis mem-parsing, memvalidasi, mencari referensi, dan menghasilkan menu personal yang aman.",
    problem: "Memberikan rekomendasi diet yang personal dan aman memerlukan validasi data biometrik, referensi dari sumber terpercaya, serta kemampuan menangani dua jenis kebutuhan sekaligus: edukasi gizi umum dan rekomendasi personal — sesuatu yang sulit dilakukan chatbot linear biasa.",
    solution: "Membangun stateful agent dengan 8 node di LangGraph: input_parser → guardrail (+ clarification loop) → book_search & web_search paralel → validation (loop retry hingga 2x) → recommendation → audit. Agent cukup pintar untuk membedakan intent 'general_info' vs 'personalized_diet' dan melayani keduanya dalam satu bot.",
    tech: ["LangGraph", "ChromaDB", "Tavily API", "RAG", "Python"],
    concepts: ["Gen AI", "Workshop"],
    category: "Gen AI",
    icon: Brain,
    image: "/asset_proyek/healthy_food_agent.png",
    github: "#",
    colabUrl: "https://colab.research.google.com/drive/1BuQX8iLA4ljgmPRAOCnR-pc0FS5wWA2x",
    nodeDetails: [
      { name: "input_parser_node", role: "Processing", description: "Mengubah teks bebas jadi JSON terstruktur plus klasifikasi intent (general_info vs personalized_diet).", color: "#6366f1" },
      { name: "guardrail_node", role: "Validation", description: "Mengecek kelengkapan dan kewajaran data (TB, BB, usia) serta menghitung BMI. Gagal → lempar ke clarification_node.", color: "#f59e0b" },
      { name: "clarification_node", role: "Interaction", description: "Menyusun pertanyaan balik yang ramah ke user saat data biometrik tidak lengkap atau tidak masuk akal.", color: "#ec4899" },
      { name: "book_search_node", role: "Retrieval", description: "Menarik data dari ChromaDB hasil indexing buku gizi PDF via RAG.", color: "#8b5cf6" },
      { name: "web_search_node", role: "Tool Call", description: "Mencari info terkini lewat Tavily API untuk melengkapi referensi buku.", color: "#0ea5e9" },
      { name: "validation_node", role: "Logic", description: "Mengekstrak & mencari irisan keyword makanan dari buku+web. Jika irisan <2 atau ada konflik, loop balik ke book_search_node (maks 2x retry).", color: "#10b981" },
      { name: "recommendation_node", role: "Generation", description: "Menyusun jawaban final secara adaptif sesuai intent user — edukasi umum atau rekomendasi menu personal.", color: "#f97316" },
      { name: "audit_node", role: "Logging", description: "Mencatat seluruh jejak aktivitas ke audit_log untuk keperluan debugging dan transparansi.", color: "#64748b" }
    ],
    whyLanggraph: "LangGraph memungkinkan hal-hal yang sulit dilakukan chain biasa: (1) percabangan berdasarkan kondisi — intent user menentukan node mana yang dieksekusi; (2) loop yang terkontrol — validasi bisa mencoba ulang pencarian tanpa restart dari nol; (3) shared state yang bisa dibaca-tulis semua node tanpa passing manual; dan (4) human-in-the-loop lewat clarification_node. LangGraph mengubah agent dari 'pipa linear satu arah' jadi state machine yang bisa berpikir, mengevaluasi ulang, dan beradaptasi di tengah jalan — persis seperti cara dokter spesialis bekerja dengan satu rekam medis yang sama."
  },
  {
    title: "InvestAI: Platform Edukasi & Simulasi Saham",
    description: "Mengembangkan platform edukasi investasi berbasis AI yang menggabungkan XGBoost, LangGraph Agent, dan Large Language Models (LLM).",
    overview: "InvestAI adalah platform edukasi investasi pintar yang membimbing pengguna awam dari 0 hingga mahir dalam memahami pasar saham Indonesia.",
    problem: "Banyak investor ritel pemula kehilangan uang di pasar modal karena kurangnya literasi finansial, tidak tahu cara membaca sentimen berita, dan salah memilih waktu trading.",
    solution: "Membangun sistem AI hibrida (XGBoost + LLM + LangGraph). XGBoost memprediksi arah harga berdasarkan data historis, sementara LLM dan LangGraph bertugas sebagai AI Mentor interaktif untuk menjelaskan mengapa sebuah saham diprediksi naik atau turun berdasarkan analisis sentimen berita terkini secara real-time.",
    tech: ["XGBoost", "LangGraph", "LLM", "Next.js"],
    concepts: ["Production", "Gen AI", "ML/DL"],
    category: "Gen AI",
    icon: Brain,
    image: "/asset_proyek/investai.png",
    github: "https://github.com/Couraa0/Invest",
    demoUrl: "https://drive.google.com/drive/folders/12HcoUcLk38naMAfwFkbC5dEw5LNU_Cb6?usp=sharing",
    whyLanggraph: "InvestAI memanfaatkan LangGraph untuk mensimulasikan peran sebagai AI Mentor yang adaptif. Berbeda dengan chatbot biasa yang sekadar menjawab pertanyaan, agent berbasis LangGraph ini dapat membagi tugas (seperti menarik data saham real-time, menganalisis sentimen berita, dan merumuskan saran edukatif) ke dalam node-node spesifik. Jika pengguna meminta penjelasan lebih lanjut atau datanya kurang, agent dapat melakukan 'looping' untuk mencari informasi tambahan secara otomatis, menciptakan pengalaman belajar investasi yang benar-benar interaktif dan terarah layaknya mentor manusia."
  },
  {
    title: "Sisibuk AI: Intelligent Scheduling Assistant",
    description: "Mengembangkan AI Scheduling Assistant berbasis Next.js 15 dengan natural language understanding menggunakan LLaMA 3.3.",
    overview: "AI asisten penjadwalan otomatis yang bisa memahami instruksi natural lewat teks seperti 'Jadwalkan meeting dengan tim UI/UX besok jam 3 sore'.",
    problem: "Mengatur jadwal seringkali memakan waktu lama karena proses back-and-forth dan input manual ke kalender yang rentan bentrok.",
    solution: "Mengimplementasikan LLaMA 3.3 via Groq untuk mengekstraksi entitas (waktu, peserta, topik) dari prompt pengguna dan mengintegrasikannya langsung ke sistem kalender pintar (Supabase) secara seamless, mengurangi waktu penjadwalan hingga 90%.",
    tech: ["Next.js", "LLaMA 3.3", "Groq", "Supabase"],
    concepts: ["Production", "Gen AI"],
    category: "Gen AI",
    icon: Calendar,
    image: "/asset_proyek/sisibuk/image0_thumbnail.png",
    gallery: ["/asset_proyek/sisibuk/image1.png", "/asset_proyek/sisibuk/image2.png", "/asset_proyek/sisibuk/image3.png"],
    github: "https://github.com/erenmenn/Sisibuk-AI-PenjadwalanOtomatis",
    demoUrl: "https://drive.google.com/file/d/1Ilgi9sx2lY6Gh79NyWcLYg2lHgg8Sx_U/view?usp=sharing",
    whyLanggraph: "Sisibuk AI mengandalkan kapabilitas agentic reasoning untuk memecah instruksi penjadwalan yang kompleks. Ketika pengguna memberikan input dalam bahasa natural, sistem tidak hanya melakukan Named Entity Recognition (NER), melainkan mengevaluasi kondisi (state) kalender secara dinamis. Arsitektur agentic-nya memungkinkan sistem untuk menangani alur 'back-and-forth'—misalnya menanyakan ulang jika terjadi bentrok jadwal atau informasi peserta kurang lengkap—sebelum akhirnya menyimpan data persisten ke dalam database."
  },
  {
    title: "SatuTani - Intelligent Agricultural Agent System",
    description: "AI Agent untuk sektor pertanian berbasis LangChain dengan multi-tool orchestration. Sistem prediksi cuaca real-time dan analisis panen.",
    overview: "Sistem pendukung keputusan bagi petani berbasis AI Agent yang memiliki akses ke berbagai tools seperti cuaca, harga pasar, dan database penyakit tanaman.",
    problem: "Petani seringkali kesulitan mendapatkan informasi terkini dan komprehensif mengenai cuaca, penanganan hama, dan prediksi pasar dalam satu tempat.",
    solution: "Membangun agentic workflow menggunakan LangChain yang mampu memanggil tool eksternal (BMKG API) dan melakukan RAG pada dokumen agrikultur. Petani cukup bertanya lewat chat dan Agent akan melakukan observasi, reasoning, dan memberikan jawaban akurat beserta referensi.",
    tech: ["LangChain", "RAG", "BMKG API", "Python"],
    concepts: ["Production", "Gen AI", "ML/DL"],
    category: "Gen AI",
    icon: Brain,
    image: "/asset_proyek/satutani.png",
    github: "https://github.com/Couraa0/satutani-mobile",
    colabUrl: "https://colab.research.google.com/drive/1bFPdFLbP4vQCeqWU9Bjsxa-CNEN954Hh#scrollTo=cm4b_uIKZyQ8",
    whyLanggraph: "SatuTani menggunakan agentic workflow (LangChain/LangGraph) untuk memecahkan masalah pertanian yang dinamis dan kompleks. Alih-alih hanya merangkum dokumen (RAG biasa), agent dapat mengambil keputusan (reasoning) untuk memanggil API eksternal (seperti cuaca BMKG) atau mencari database penyakit tanaman berdasarkan pertanyaan spesifik petani. Kemampuan orkestrasi multi-tools ini memungkinkan SatuTani memberikan rekomendasi cerdas—misalnya, menyarankan penundaan pemupukan karena agen cuaca mendeteksi prediksi hujan lebat keesokan harinya."
  },
  {
    title: "JavaMart AI - Governed Chatbot",
    description: "Chatbot berbasis LangGraph dengan governance dan controlled agent workflow untuk skala enterprise.",
    overview: "Chatbot Customer Service untuk retail yang dijamin aman, sopan, dan patuh pada pedoman (SOP) perusahaan.",
    problem: "LLM konvensional sering berhalusinasi atau memberikan jawaban di luar konteks bisnis yang dapat membahayakan reputasi perusahaan.",
    solution: "Menerapkan arsitektur LangGraph untuk membuat stateful dan governed agent. Ditambah dengan sistem guardrails untuk mendeteksi dan memblokir output yang mengandung halusinasi, toksisitas, atau kebocoran data sensitif.",
    tech: ["LangGraph", "LLM", "Guardrails", "Python"],
    concepts: ["Gen AI"],
    category: "Gen AI",
    icon: MessageSquare,
    image: "/asset/poster/lang.png",
    github: "https://github.com/erenmenn/JavaMart-GovernedChatbot",
    whyLanggraph: "LangGraph sangat penting untuk kasus enterprise seperti JavaMart karena kita membutuhkan workflow yang terkontrol (governed). Dengan LangGraph, kita bisa mengatur state machine di mana setiap jawaban LLM harus melewati node guardrails dan validasi SOP terlebih dahulu sebelum dikembalikan ke pengguna. Hal ini secara efektif mencegah LLM memberikan jawaban halusinasi, toksik, atau membocorkan data sensitif, sebuah kontrol yang sangat sulit dijamin jika hanya menggunakan chain LLM biasa."
  },
  {
    title: "WangkuAI: Asisten Keuangan Pintar",
    description: "Finance tracker dengan NLP pipeline untuk chat sehari-hari menggunakan model IndoBERT.",
    overview: "Aplikasi pelacak keuangan yang memahami bahasa gaul/santai Indonesia (contoh: 'tadi abis jajan boba 25rb').",
    problem: "Banyak orang malas mencatat pengeluaran karena UX aplikasi tracker konvensional terlalu kaku dan butuh banyak klik.",
    solution: "Memanfaatkan model IndoBERT yang di-fine-tune untuk Named Entity Recognition (NER) pada bahasa sehari-hari. Model ini dapat mengekstrak nominal, kategori, dan deskripsi hanya dari satu kalimat, lalu mencatatnya otomatis ke dalam database.",
    tech: ["Next.js", "IndoBERT", "Prisma"],
    concepts: ["Production", "Gen AI"],
    category: "Gen AI",
    icon: Brain,
    image: "/asset_proyek/wangku.png",
    github: "https://github.com/erenmenn/WangkuAI-FinanceBot",
    whyLanggraph: "Pada WangkuAI, pendekatan terstruktur sangat diperlukan untuk menerjemahkan bahasa gaul (slang) menjadi format data keuangan baku. Dengan alur pemrosesan multi-tahap (agentic pipeline), model AI pertama-tama mengekstrak entitas (nominal, deskripsi), lalu node berikutnya memvalidasi dan memetakan kategori pengeluaran secara logis, sebelum berinteraksi dengan database (Prisma). Pemisahan tugas ke dalam tahapan (state) ini membuat ekstraksi data keuangan menjadi jauh lebih stabil dan tahan terhadap berbagai variasi pengetikan bahasa sehari-hari pengguna."
  },
  {
    title: "MovieRec: Sistem Rekomendasi Film",
    description: "Hybrid recommendation model memakai 25 juta rating yang mengombinasikan Content-Based dan Collaborative Filtering.",
    overview: "Mesin rekomendasi film berskala besar yang menyeimbangkan antara personalisasi dan eksplorasi genre baru.",
    problem: "Model rekomendasi tunggal sering terjebak dalam 'filter bubble' atau kesulitan merekomendasikan film baru (cold start problem).",
    solution: "Membangun sistem Hybrid. Collaborative Filtering (NMF) menangkap preferensi tersembunyi dari user similar, sementara Content-Based filtering memastikan film-film baru dengan metadata yang relevan tetap direkomendasikan.",
    tech: ["TensorFlow", "Scikit", "NMF"],
    concepts: ["ML/DL", "Recommendation"],
    category: "Machine Learning",
    icon: Film,
    image: "/asset_proyek/recomendation.png",
    github: "https://github.com/erenmenn/RekomendasiFILM-collaborative-content",
  },
  {
    title: "MADUW: Prediksi Harga Madu",
    description: "Memprediksi harga madu dengan pemodelan Regresi menggunakan Random Forest, AdaBoost, dan arsitektur regresi linear.",
    overview: "Sistem analitik cerdas untuk memprediksi fluktuasi harga komoditas madu berdasarkan data multi-variabel.",
    problem: "Peternak lebah dan distributor sering mengalami kerugian karena ketidakstabilan harga pasar dan sulit memprediksi tren masa depan.",
    solution: "Mengembangkan ensemble regression model (Random Forest & AdaBoost) yang menganalisis pola historis harga, faktor iklim, dan data produksi untuk memberikan forecast harga yang akurat, lengkap dengan visualisasi dashboard.",
    tech: ["Scikit-Learn", "Regression", "Data Viz"],
    concepts: ["ML/DL", "Regression"],
    category: "Machine Learning",
    icon: BarChart3,
    image: "/asset_proyek/honeyprice.png",
    github: "https://github.com/erenmenn/PrediksiHarga-MADUW",
  },
  {
    title: "EMIR: Emotion Image Classifier",
    description: "Deteksi ekspresi human dari foto dalam 200 milisekon dengan MTCNN crop layer dan TensorFlow Lite inference.",
    overview: "Sistem deteksi emosi wajah real-time yang sangat ringan dan dapat dijalankan di edge device.",
    problem: "Model pengenalan emosi seringkali terlalu berat (latency tinggi) untuk berjalan di perangkat dengan spesifikasi rendah atau web browser.",
    solution: "Menggunakan pipeline dua tahap: MTCNN untuk face cropping presisi tinggi, dilanjutkan dengan model CNN ringan yang di-quantize ke format TensorFlow Lite, mencapai latensi inferensi di bawah 200ms dengan akurasi memuaskan.",
    tech: ["TFLite", "MTCNN", "Flask"],
    concepts: ["Computer Vision"],
    category: "Deep Learning",
    icon: Eye,
    image: "/asset_proyek/emotion.png",
    github: "https://github.com/erenmenn/ImageClassification-EmosiMU",
  },
  {
    title: "PlantCare: Scan Penyakit Daun",
    description: "Klasifikasi 35 tipe penyakit tanaman secara akurat menggunakan CNN MobileNet transfer learning via Keras.",
    overview: "Aplikasi cerdas bagi petani untuk mendiagnosis penyakit tanaman hanya dengan memfoto daunnya.",
    problem: "Petani sering terlambat mendiagnosis penyakit tanaman secara visual, mengakibatkan gagal panen dan kerugian masif.",
    solution: "Menerapkan teknik Transfer Learning menggunakan arsitektur MobileNetV2 yang dilatih ulang (fine-tuning) pada dataset 35+ kelas penyakit daun. Sistem ini digabungkan ke dalam backend Flask untuk API klasifikasi real-time.",
    tech: ["CNN", "Keras", "Flask"],
    concepts: ["Computer Vision"],
    category: "Deep Learning",
    icon: Eye,
    image: "/asset_proyek/plantdesease.png",
    github: "https://github.com/erenmenn/ImageClassification-PlantCare",
  },
  {
    title: "CS Intent: Intelligent Router",
    description: "Benchmark Intent-Router bot menggunakan DistilBERT, BiLSTM, dan Classical ML untuk routing customer service 24/7.",
    overview: "Sistem triase otomatis untuk mengarahkan tiket keluhan pelanggan ke departemen yang tepat.",
    problem: "Customer service sering kewalahan dengan volume tiket yang besar, di mana 60% waktu habis hanya untuk membaca dan meneruskan keluhan ke divisi terkait.",
    solution: "Mengevaluasi dan men-deploy model klasifikasi teks terbaik (DistilBERT) yang mampu memahami intent pelanggan dari keluhan mereka, dan secara otomatis meroute tiket tersebut ke divisi yang sesuai dalam hitungan milidetik.",
    tech: ["DistilBERT", "BiLSTM", "Naive Bayes"],
    concepts: ["ML/DL", "NLP"],
    category: "Deep Learning",
    icon: Wrench,
    image: "/asset_proyek/customerchatbot.png",
    github: "https://github.com/erenmenn/IntentClass-CustomerServiceBOT",
  }
];

const categories: Category[] = ["All", "Machine Learning", "Deep Learning", "Gen AI"];

// ── Per-category color config ──────────────────────────────────────────
const categoryConfig: Record<Category, {
  gradient: string;   // for filter pill active bg
  glow: string;       // card outer glow shadow
  borderColor: string;// card border
  tagBg: string;      // tech tag bg
  tagText: string;    // tech tag text
  badgeBg: string;    // category badge background
  badgeText: string;  // category badge text
  lightBar: string;   // subtle top bar gradient
}> = {
  All: {
    gradient: "linear-gradient(135deg,#6366f1,#a855f7,#ec4899)",
    glow: "rgba(139,92,246,0.18)",
    borderColor: "rgba(139,92,246,0.25)",
    tagBg: "#f5f3ff",
    tagText: "#7c3aed",
    badgeBg: "linear-gradient(135deg,#6366f1,#a855f7)",
    badgeText: "#fff",
    lightBar: "linear-gradient(90deg,#6366f1,#a855f7,#ec4899)",
  },
  "Gen AI": {
    gradient: "linear-gradient(135deg,#7c3aed,#a855f7,#c026d3)",
    glow: "rgba(168,85,247,0.2)",
    borderColor: "rgba(168,85,247,0.3)",
    tagBg: "#faf5ff",
    tagText: "#9333ea",
    badgeBg: "linear-gradient(135deg,#7c3aed,#c026d3)",
    badgeText: "#fff",
    lightBar: "linear-gradient(90deg,#7c3aed,#a855f7,#ec4899)",
  },
  "Machine Learning": {
    gradient: "linear-gradient(135deg,#2563eb,#0ea5e9,#06b6d4)",
    glow: "rgba(14,165,233,0.18)",
    borderColor: "rgba(14,165,233,0.28)",
    tagBg: "#eff6ff",
    tagText: "#2563eb",
    badgeBg: "linear-gradient(135deg,#2563eb,#06b6d4)",
    badgeText: "#fff",
    lightBar: "linear-gradient(90deg,#2563eb,#0ea5e9,#06b6d4)",
  },
  "Deep Learning": {
    gradient: "linear-gradient(135deg,#059669,#10b981,#34d399)",
    glow: "rgba(16,185,129,0.18)",
    borderColor: "rgba(16,185,129,0.28)",
    tagBg: "#ecfdf5",
    tagText: "#059669",
    badgeBg: "linear-gradient(135deg,#059669,#34d399)",
    badgeText: "#fff",
    lightBar: "linear-gradient(90deg,#059669,#10b981,#34d399)",
  }
};

const getCfg = (cat: Category) => categoryConfig[cat] ?? categoryConfig["All"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Prevent scrolling when modal or fullscreen is open
  useEffect(() => {
    if (selectedProject || fullScreenImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject, fullScreenImage]);

  useEffect(() => {
    if (selectedProject) {
      setGalleryIndex(0);
    }
  }, [selectedProject]);

  const filtered = [...projects]
    .sort((a, b) => {
      const aIsProd = a.concepts.includes("Production") ? 1 : 0;
      const bIsProd = b.concepts.includes("Production") ? 1 : 0;
      return bIsProd - aIsProd;
    })
    .filter((p) => {
      if (activeCategory !== "All") return p.category === activeCategory;
      return true;
    });

  return (
    <section id="projects" className="py-24 relative overflow-hidden pixel-grid" style={{ background: "#f8fafc" }}>

      {/* ── Animated colorful smoke glows ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.15, 0.92, 1] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blur-[130px]" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, rgba(168,85,247,0.12) 50%, transparent 80%)" }} />
        <motion.div animate={{ x: [0, -50, 30, 0], y: [0, 25, -40, 0], scale: [1, 0.88, 1.1, 1] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }} className="absolute top-20 -right-40 w-[450px] h-[450px] rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(236,72,153,0.18) 0%, rgba(244,114,182,0.1) 50%, transparent 80%)" }} />
        <motion.div animate={{ x: [0, 60, -20, 0], y: [0, -15, 35, 0], scale: [1, 1.2, 0.95, 1] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 6 }} className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-[110px]" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.15) 0%, rgba(14,165,233,0.08) 50%, transparent 80%)" }} />
        <motion.div animate={{ x: [0, -30, 50, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.08, 1] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 9 }} className="absolute -bottom-20 right-1/4 w-[380px] h-[380px] rounded-full blur-[120px]" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.13) 0%, rgba(251,146,60,0.07) 50%, transparent 80%)" }} />
        <motion.div animate={{ x: [0, -20, 30, 0], y: [0, -40, 10, 0], scale: [1, 1.1, 0.97, 1] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[130px]" style={{ background: "radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)" }} />
      </div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">

        {/* ── MAXIMALIST HEADER ── */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-blue-400/50 text-white font-extrabold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(59,130,246,0.5)] mb-6 transition-all cursor-default"
            style={{ background: "linear-gradient(135deg,#3b82f6,#06b6d4)" }}>
            <span className="bg-white/20 px-2 py-0.5 rounded-lg text-white">03</span> PROJECTS
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              {/* big gradient title */}
              <h2 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-black tracking-tighter leading-[0.85] text-slate-900 uppercase">
                <span className="block drop-shadow-sm">MY</span>
                <em className="font-black italic lowercase tracking-tight text-transparent bg-clip-text text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] ml-8 md:ml-16 leading-none block pb-4 pt-2 -mb-4"
                  style={{ backgroundImage: "linear-gradient(135deg, #fde047, #f97316, #dc2626)", filter: "drop-shadow(0px 0px 15px rgba(249, 115, 22, 0.3)) drop-shadow(2px 2px 0px rgba(220, 38, 38, 0.15))" }}>
                  projects.
                </em>
              </h2>
              {/* subtle shimmer underline */}
              <div className="mt-3 h-1 w-40 rounded-full"
                style={{ background: "linear-gradient(90deg,#6366f1,#a855f7,#ec4899)" }} />
              <div className="flex items-center gap-2 mt-4 text-slate-500 font-semibold text-sm">
                <motion.div animate={{ scale: [1, 1.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-violet-500" />
                Showing <span className="text-slate-800 font-black">{filtered.length}</span> project{filtered.length !== 1 ? "s" : ""}
              </div>
            </div>

            {/* ── CATEGORY FILTER PILLS ── */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const cfg = getCfg(cat);
                const isActive = activeCategory === cat;
                return (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    className="px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 border"
                    style={isActive ? {
                      background: cfg.gradient,
                      color: "#fff",
                      borderColor: "transparent",
                      boxShadow: `0 4px 16px ${cfg.glow}`,
                    } : {
                      background: "#fff",
                      color: "#64748b",
                      borderColor: "#e2e8f0",
                    }}
                  >
                    {cat}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── CARDS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          <AnimatePresence>
            {filtered.map((project, i) => {
              const cfg = getCfg(project.category);
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  onClick={() => setSelectedProject(project)}
                  className="flex flex-col rounded-2xl overflow-hidden group relative cursor-pointer"
                  style={{
                    background: "#fff",
                    border: `1.5px solid ${cfg.borderColor}`,
                    boxShadow: `0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px ${cfg.borderColor}, 0 8px 32px ${cfg.glow}`,
                    transition: "box-shadow 0.3s, border-color 0.3s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 40px ${cfg.glow}, 0 0 0 2px ${cfg.borderColor}`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 2px 8px rgba(0,0,0,0.04), 0 0 0 1px ${cfg.borderColor}, 0 8px 32px ${cfg.glow}`;
                  }}
                >
                  <div className="h-[3px] w-full shrink-0" style={{ background: cfg.lightBar }} />

                  <div className="relative w-full h-[210px] bg-slate-100 overflow-hidden shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10">
                      <div className="text-[10px] font-bold px-3 py-1 rounded-full text-white shadow-sm"
                        style={{ background: cfg.badgeBg }}>
                        {project.category}
                      </div>
                      {project.concepts.includes("ML/DL") && project.category !== "Machine Learning" && (
                        <div className="text-[9px] font-black px-2.5 py-1 rounded-md text-white shadow-sm flex items-center gap-1 uppercase tracking-widest"
                          style={{ background: categoryConfig["Machine Learning"].badgeBg }}>
                          MACHINE LEARNING
                        </div>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 flex gap-1.5 flex-wrap justify-end max-w-[70%] z-10">
                      {project.concepts.includes("Production") && (
                        <div className="bg-white/95 backdrop-blur text-[9px] font-black px-2.5 py-1 rounded-md flex items-center gap-1 shadow-md border border-slate-100 text-slate-800 uppercase tracking-widest">
                          <Crown className="w-3 h-3 fill-yellow-400 text-yellow-500" />
                          PRODUCTION READY
                        </div>
                      )}
                    </div>
                    
                    {/* Overlay on hover indicating clickability */}
                    <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                       <div className="bg-white/90 text-slate-800 text-xs font-bold px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                         Click to View Details
                       </div>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-[17px] font-bold text-slate-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[13px] text-slate-500 leading-relaxed mb-5 line-clamp-2">
                      {project.overview}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                          <span key={t} className="px-2.5 py-1 text-[11px] font-bold rounded-full"
                            style={{ background: cfg.tagBg, color: cfg.tagText }}>
                            {t}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="px-2.5 py-1 bg-slate-100 text-slate-500 text-[11px] font-bold rounded-full">
                            +{project.tech.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* ── PROJECT DETAILS MODAL ── */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[500] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/40 hover:bg-black/60 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Side: Image (cropped with smoky fade) — click for fullscreen */}
              <div
                className="w-full relative shrink-0 overflow-hidden group"
                style={{ height: "160px" }}
              >
                {selectedProject.gallery ? (
                  <>
                    <div className="w-full h-full relative" onClick={() => setFullScreenImage(selectedProject.gallery![galleryIndex])}>
                      <img
                        src={selectedProject.gallery[galleryIndex]}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 cursor-zoom-in"
                      />
                    </div>
                    {selectedProject.gallery.length > 1 && (
                      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none z-20">
                         <button 
                            className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center pointer-events-auto backdrop-blur-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setGalleryIndex((prev) => prev === 0 ? selectedProject.gallery!.length - 1 : prev - 1);
                            }}
                         >
                           <ChevronLeft className="w-5 h-5" />
                         </button>
                         <button 
                            className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center pointer-events-auto backdrop-blur-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              setGalleryIndex((prev) => prev === selectedProject.gallery!.length - 1 ? 0 : prev + 1);
                            }}
                         >
                           <ChevronRight className="w-5 h-5" />
                         </button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full relative cursor-zoom-in" onClick={() => setFullScreenImage(selectedProject.image)}>
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Dark overlay with title & badges */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />

                {/* Smoky white fade at the very bottom — blends into modal bg */}
                <div
                  className="absolute bottom-0 left-0 w-full h-16 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.55) 60%, rgba(255,255,255,0.95) 100%)",
                    backdropFilter: "blur(2px)",
                    WebkitBackdropFilter: "blur(2px)",
                  }}
                />

                {/* Hover hint */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white/90 text-slate-800 px-4 py-2 rounded-full font-bold text-xs opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-xl flex items-center gap-2">
                    <Eye className="w-4 h-4" /> Lihat foto penuh
                  </div>
                </div>

                {/* Title & badges */}
                <div className="absolute top-0 left-0 p-4 w-full">
                  <h2 className="text-xl font-black text-white leading-tight mb-2 drop-shadow-md">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <span
                      className="text-[10px] font-bold px-3 py-1 rounded-full text-white shadow-sm border border-white/20"
                      style={{ background: getCfg(selectedProject.category).badgeBg }}
                    >
                      {selectedProject.category}
                    </span>
                    {selectedProject.concepts.map(concept => {
                      if (concept === "Production") {
                        return (
                          <span key="prod" className="bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md border border-yellow-300/50">
                            <Crown className="w-3 h-3 fill-white" />
                            PRODUCTION READY
                          </span>
                        );
                      }
                      if (concept === "Workshop") return null;
                      return (
                        <span key={concept} className="bg-white/20 backdrop-blur-md text-white border border-white/30 text-[10px] font-bold px-3 py-1 rounded-full flex items-center shadow-sm">
                          {concept}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Bottom Side: Details */}
              <div className="w-full p-6 sm:p-8 overflow-y-auto custom-scrollbar flex flex-col gap-8 relative bg-white" style={{
                backgroundImage: `radial-gradient(circle at 100% 0%, ${getCfg(selectedProject.category).glow} 0%, transparent 40%)`
              }}>
                
                {/* Overview */}
                <div className="shrink-0">
                  <p className="text-slate-700 text-[16px] leading-relaxed font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500">
                    {selectedProject.overview || selectedProject.description}
                  </p>
                </div>

                {/* Problem & Solution Blocks */}
                <div className="grid sm:grid-cols-2 gap-6 shrink-0">
                  {/* Problem - Vibrant red glow */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 to-white border border-rose-200 rounded-2xl p-6 shadow-[0_10px_40px_rgba(244,63,94,0.15)] hover:shadow-[0_10px_40px_rgba(244,63,94,0.25)] transition-shadow">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-rose-400 to-rose-600" />
                    <div className="flex items-center gap-2 text-rose-600 font-black text-sm mb-3 uppercase tracking-wider">
                      <TargetIcon className="w-5 h-5" />
                      The Problem
                    </div>
                    <p className="text-slate-700 text-[13.5px] leading-relaxed font-medium">
                      {selectedProject.problem}
                    </p>
                  </div>

                  {/* Solution - Vibrant green glow */}
                  <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-6 shadow-[0_10px_40px_rgba(16,185,129,0.15)] hover:shadow-[0_10px_40px_rgba(16,185,129,0.25)] transition-shadow">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-400 to-emerald-600" />
                    <div className="flex items-center gap-2 text-emerald-600 font-black text-sm mb-3 uppercase tracking-wider">
                      <CheckCircle2 className="w-5 h-5" />
                      The Solution
                    </div>
                    <p className="text-slate-700 text-[13.5px] leading-relaxed font-medium">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="shrink-0">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-bold rounded-lg shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Node Details – only for projects that have them */}
                {selectedProject.nodeDetails && (
                  <div className="shrink-0">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">8 Node Architecture</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedProject.nodeDetails.map((node) => (
                        <div key={node.name} className="flex gap-3 p-3 rounded-xl border border-slate-100 bg-slate-50/80">
                          <div className="w-2 shrink-0 rounded-full mt-1" style={{ background: node.color, minHeight: '100%' }} />
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono text-[11px] font-black text-slate-800">{node.name}</span>
                              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full text-white" style={{ background: node.color }}>{node.role}</span>
                            </div>
                            <p className="text-[12px] text-slate-500 leading-snug mt-1">{node.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Why LangGraph – only for projects that have it */}
                {selectedProject.whyLanggraph && (
                  <div className="relative overflow-hidden bg-gradient-to-br from-violet-50 to-white border border-violet-200 rounded-2xl p-6 shadow-[0_10px_40px_rgba(139,92,246,0.12)] shrink-0">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-violet-400 to-purple-600 z-10" />
                    <div className="flex items-center gap-2 text-violet-700 font-black text-sm mb-3 uppercase tracking-wider relative z-20">
                      <Sparkles className="w-5 h-5" />
                      Kenapa LangGraph & Agentic Flow?
                    </div>
                    <p className="text-slate-800 text-[13.5px] leading-relaxed font-medium relative z-20">{selectedProject.whyLanggraph}</p>
                  </div>
                )}

                {/* Links */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-4 mt-auto shrink-0">
                  {selectedProject.github !== "#" && (
                    <a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20"
                    >
                      <Github className="w-4 h-4" /> View Source
                    </a>
                  )}
                  {selectedProject.colabUrl && (
                    <a 
                      href={selectedProject.colabUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-white font-bold text-sm hover:brightness-110 transition-all shadow-[0_8px_20px_rgba(249,115,22,0.25)]"
                      style={{ background: "linear-gradient(135deg,#f97316,#ea580c)" }}
                    >
                      <ExternalLink className="w-4 h-4" /> Open in Colab
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a 
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 min-w-[180px] flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-white font-bold text-sm hover:brightness-110 transition-all shadow-[0_8px_20px_rgba(0,0,0,0.12)]"
                      style={{ background: getCfg(selectedProject.category).badgeBg }}
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── FULL SCREEN IMAGE LIGHTBOX ── */}
      <AnimatePresence>
        {fullScreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setFullScreenImage(null)}
          >
            <button 
              className="absolute top-6 right-6 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-colors"
              onClick={() => setFullScreenImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={fullScreenImage} 
              alt="Full screen" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
