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
}

const projects: Project[] = [
  {
    title: "WangkuAI: Intelligent Financial Chatbot",
    description: "AI chatbot for financial insights powered by LLMs",
    tech: ["NLP", "LLM", "Python"],
    category: "Professional",
    subcategory: "NLP",
    icon: Brain,
    image: "/asset_proyek/wangku.png",
    github: "#",
    bgGradient: "linear-gradient(135deg, #ef4444, #b91c1c)",
    fullDescription: "An intelligent financial chatbot that leverages Large Language Models to provide real-time financial insights, answer complex financial questions, and help users make informed decisions about their finances.",
    problem: "People struggle to understand complex financial data and need quick, reliable answers to financial questions without consulting expensive advisors.",
    solution: "Built an LLM-powered chatbot that processes financial queries using NLP, retrieves relevant data, and generates clear, actionable financial insights in natural language.",
    skills: ["Natural Language Processing", "Large Language Models", "Python", "API Integration", "Prompt Engineering"],
    highlights: ["Real-time financial data processing", "Context-aware conversations", "Multi-turn dialogue support"],
  },
  {
    title: "PlantCare: Leaf Disease Detection",
    description: "Classifies plant health from leaf images",
    tech: ["CNN", "TensorFlow"],
    category: "Computer Vision",
    icon: Eye,
    image: "/asset_proyek/plantdesease.png",
    github: "#",
    bgGradient: "linear-gradient(135deg, #22c55e, #0d9488)",
    fullDescription: "A deep learning system that analyzes plant leaf images to detect diseases and assess plant health, helping farmers and gardeners take proactive care of their plants.",
    problem: "Early detection of plant diseases is crucial for agriculture, but manual inspection is time-consuming and requires expert knowledge.",
    solution: "Developed a CNN-based image classifier trained on thousands of plant leaf images to accurately identify common plant diseases and health issues.",
    skills: ["Convolutional Neural Networks", "TensorFlow", "Image Processing", "Data Augmentation", "Transfer Learning"],
    highlights: ["95%+ classification accuracy", "Supports multiple plant species", "Mobile-friendly inference"],
  },
  {
    title: "MovieRec: Hybrid Recommendation",
    description: "Movie recommendation with collaborative filtering",
    tech: ["Collaborative Filtering"],
    category: "Recommendation",
    icon: Film,
    image: "/asset_proyek/recomendation.png",
    github: "#",
    bgGradient: "linear-gradient(135deg, #ec4899, #f43f5e)",
    fullDescription: "A hybrid movie recommendation engine that combines collaborative and content-based filtering to suggest personalized movies based on user preferences and viewing history.",
    problem: "Users face decision fatigue when choosing movies from thousands of options, leading to poor viewing experiences.",
    solution: "Implemented a hybrid recommendation system combining collaborative filtering (user-user and item-item) with content-based features for accurate, personalized suggestions.",
    skills: ["Collaborative Filtering", "Content-Based Filtering", "Matrix Factorization", "Python", "Similarity Metrics"],
    highlights: ["Hybrid approach for better accuracy", "Cold-start handling", "Scalable architecture"],
  },
  {
    title: "EmosiMU: Facial Expression AI",
    description: "Emotion detection from facial images",
    tech: ["Deep Learning", "CNN"],
    category: "Computer Vision",
    icon: Eye,
    image: "/asset_proyek/emotion.png",
    github: "#",
    bgGradient: "linear-gradient(135deg, #f97316, #e11d48)",
    fullDescription: "A facial emotion recognition system that detects and classifies human emotions from images using deep learning, applicable in UX research, mental health, and interactive systems.",
    problem: "Understanding human emotions in real-time is essential for many applications but traditionally requires manual observation and expert interpretation.",
    solution: "Built a deep CNN model trained on facial expression datasets to classify emotions like happiness, sadness, anger, surprise, and more from static images.",
    skills: ["Deep Learning", "CNN", "Face Detection", "Emotion Analysis", "OpenCV"],
    highlights: ["7 emotion categories", "Real-time capable", "Robust to lighting variations"],
  },
  {
    title: "LyricsSearch: Semantic Vector Finder",
    description: "Search lyrics by meaning using semantic embeddings",
    tech: ["NLP", "Embeddings"],
    category: "NLP",
    icon: Brain,
    image: "/asset_proyek/lyrics.png",
    github: "#",
    bgGradient: "linear-gradient(135deg, #3b82f6, #6366f1)",
    fullDescription: "A semantic search engine for song lyrics that goes beyond keyword matching — users can search by meaning, mood, or theme to find songs that match their feelings.",
    problem: "Traditional keyword-based lyric search fails when users want to find songs by theme or emotion rather than exact words.",
    solution: "Implemented semantic embeddings (sentence transformers) to encode lyrics into vector space, enabling meaning-based similarity search across a large lyrics database.",
    skills: ["Sentence Transformers", "Vector Embeddings", "Semantic Search", "NLP", "FAISS"],
    highlights: ["Meaning-based search", "Mood & theme discovery", "Fast vector similarity"],
  },
  {
    title: "MADUW: Honey Market Predictor",
    description: "Price prediction model using regression",
    tech: ["Regression", "ML"],
    category: "Prediction",
    icon: BarChart3,
    image: "/asset_proyek/honeyprice.png",
    github: "#",
    bgGradient: "linear-gradient(135deg, #eab308, #ea580c)",
    fullDescription: "A machine learning model that predicts honey (madu) prices based on various features like quality, origin, season, and market conditions using regression techniques.",
    problem: "Honey price fluctuations are hard to predict, causing challenges for both producers and buyers in pricing and purchasing decisions.",
    solution: "Developed regression models (Linear, Random Forest, Gradient Boosting) to predict honey prices with feature engineering on quality and market data.",
    skills: ["Regression Analysis", "Feature Engineering", "Scikit-learn", "Pandas", "Model Evaluation"],
    highlights: ["Multiple model comparison", "Feature importance analysis", "Cross-validation"],
  },
  {
    title: "FirstAid.ID: Medical Search RAG",
    description: "Semantic chunking pipeline for Indonesian First Aid manuals",
    tech: ["NLP", "RAG", "LLM"],
    category: "Professional",
    subcategory: "NLP",
    icon: Brain,
    image: "/asset_proyek/firstaid.png",
    github: "#",
    bgGradient: "linear-gradient(135deg, #ef4444, #991b1b)",
    fullDescription: "A specialized data processing pipeline using advanced semantic chunking techniques to convert the comprehensive Indonesian First Aid Protocol (Buku Panduan Pertolongan Pertama) into an AI-ready vector database.",
    problem: "During emergencies, reading through dense PDF manuals to find immediate, life-saving answers is slow and impractical.",
    solution: "Designed an intelligent document chunking system that perfectly isolates discrete medical procedures, symptoms, and actions into retrievable vectors for an emergency RAG Chatbot.",
    skills: ["LangChain", "Text Chunking", "Vector Databases", "Embeddings", "Information Retrieval"],
    highlights: ["Context-aware text splitting", "High retrieval accuracy", "Optimized for Indonesian Medical NLP"],
  },
  {
    title: "YouTube Sentiment: Mass Comment Classifier",
    description: "Deep sentiment analysis on massive YouTube comments",
    tech: ["NLP", "Scraping", "Deep Learning"],
    category: "NLP",
    icon: MessageSquare,
    image: "/asset_proyek/sentimen.png",
    github: "#",
    bgGradient: "linear-gradient(135deg, #10b981, #047857)",
    fullDescription: "An end-to-end analytical tool tailored to extract, process, and classify the sentiment of thousands of YouTube comments in real-time, helping creators understand audience reception instantly.",
    problem: "Content creators and brands struggle to gauge authentic audience feedback hidden within thousands of noisy, unstructured YouTube comments.",
    solution: "Built an automated extraction pipeline using YouTube APIs and applied deep learning models to predict comment sentiments (Positive, Neutral, Negative) accurately.",
    skills: ["YouTube Data API", "Sentiment Classification", "Data Cleaning", "Text Preprocessing", "NLP Models"],
    highlights: ["API-based real-time scraping", "Robust text normalization", "Interactive distribution dashboards"],
  },
  {
    title: "CS Intent: Intelligent Support Routing",
    description: "Intent classification engine for Customer Service chatbots",
    tech: ["NLP", "Classification"],
    category: "NLP",
    icon: Wrench,
    image: "/asset_proyek/customerchatbot.png",
    github: "#",
    bgGradient: "linear-gradient(135deg, #6366f1, #312e81)",
    fullDescription: "A machine learning pipeline designed to train and deploy highly accurate intent classification models, automatically interpreting user queries to route them inside a complex customer service environment.",
    problem: "Standard rule-based chatbots frustrate users because they fail to understand the true intent behind varied, conversational customer inquiries.",
    solution: "Trained advanced NLP classification algorithms on historical chat logs to accurately map diverse user expressions into clear, actionable intent categories.",
    skills: ["Intent Classification", "Supervised Learning", "TF-IDF / Word2Vec", "Scikit-Learn", "Model Training"],
    highlights: ["High precision routing", "Supports messy, unstructured text", "Scalable CS architecture"],
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
            <div className="grid md:grid-cols-3 gap-3">
              {project.highlights.map((h) => (
                <div key={h} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400 shrink-0" />
                  <span className="text-xs text-slate-700 font-medium">{h}</span>
                </div>
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
