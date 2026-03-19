import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Brain, Eye, Film, BarChart3, Cpu, X, Lightbulb, Target, Wrench, AlertTriangle, Sparkles, Star, MessageSquare, ChevronLeft, ChevronRight, Gamepad2, ScrollText, Swords, Shield } from "lucide-react";

type Category = "All" | "NLP" | "Computer Vision" | "Recommendation" | "Prediction" | "Time Series";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: Category;
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
    category: "NLP",
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
    category: "NLP",
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

const categories: Category[] = ["All", "NLP", "Computer Vision", "Recommendation", "Prediction", "Time Series"];

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  const [imgIdx, setImgIdx] = useState(0);
  
  // Array 3 gambar untuk slider (Sengaja kita duplicate sebagai template/placeholder agar bisa digeser)
  // Anda dapat mengganti indeks ke-2 dan ke-3 dengan url photo lain dari dataset nantinya.
  const images = [project.image, project.image, project.image]; 

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((prev) => (prev + 1) % images.length);
  };
  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-3 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ duration: 0.4, type: "spring", bounce: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl max-h-[95vh] overflow-y-auto text-white rounded-[1.5rem] shadow-[0_0_80px_rgba(0,0,0,0.8)] border-4 border-white/30 flex flex-col"
        style={{ background: project.bgGradient }}
      >
        {/* Game Boy Top Bar */}
        <div className="w-full bg-black/30 backdrop-blur-md border-b-2 border-white/20 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
           <div className="flex items-center gap-3">
             <Gamepad2 className="w-5 h-5 text-white drop-shadow-md" />
             <span className="font-pixel text-[10px] tracking-widest text-white drop-shadow-md">EXPLORER_OS_V2.1</span>
           </div>
           <button onClick={onClose} className="w-8 h-8 rounded-full bg-red-500/80 backdrop-blur-sm hover:bg-red-400 flex items-center justify-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5)] border-2 border-white/40 transition-all active:scale-95"><X className="w-4 h-4 text-white font-black" /></button>
        </div>

        {/* Carousel Header */}
        <div className="relative h-64 md:h-80 flex-shrink-0 flex items-center justify-center overflow-hidden bg-zinc-900 group">
          <AnimatePresence mode="wait">
            <motion.img 
              key={imgIdx}
              src={images[imgIdx]} 
              alt={project.title} 
              initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen" 
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0" />
          
          <project.icon className="w-20 h-20 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] z-10" />
          
          {/* Controls */}
          <button onClick={prevImg} className="absolute left-4 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100"><ChevronLeft className="w-7 h-7" /></button>
          <button onClick={nextImg} className="absolute right-4 z-20 w-12 h-12 rounded-full bg-black/50 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-black/80 hover:scale-110 active:scale-95 transition-all opacity-0 group-hover:opacity-100"><ChevronRight className="w-7 h-7" /></button>
          
          {/* Dots */}
          <div className="absolute bottom-4 flex gap-2 z-20 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md">
             {images.map((_, i) => (
               <div key={i} className={`w-2.5 h-2.5 rounded-full border border-white/50 transition-all ${imgIdx === i ? 'bg-white scale-125' : 'bg-transparent'}`} />
             ))}
          </div>
          
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded bg-purple-600/80 backdrop-blur-md text-white text-[9px] font-pixel border border-purple-400 uppercase z-20 shadow-md">
            Lvl. {imgIdx + 1} / {images.length}
          </div>
        </div>

        {/* Main Content Formatted like a Quest Log */}
        <div className="p-6 md:p-10 space-y-8 relative flex-grow bg-black/10">
          <div>
            <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white mb-2 drop-shadow-lg">{project.title}</h3>
            
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-white/20 text-white rounded-md text-[10px] font-pixel uppercase border border-white/30 shadow-inner backdrop-blur-sm drop-shadow-sm">{project.category}</span>
            </div>
            
            <div className="bg-black/20 p-5 md:p-6 rounded-2xl border border-white/20 relative overflow-hidden shadow-inner backdrop-blur-md">
               <div className="flex items-center gap-3 text-white font-pixel text-xs mb-3"><ScrollText className="w-5 h-5 drop-shadow-md scale-110" /> QUEST_LORE</div>
               <p className="text-white/95 leading-relaxed font-medium text-sm md:text-base drop-shadow-sm">{project.fullDescription}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-black/20 rounded-2xl p-6 border-l-4 border-red-400 hover:bg-black/40 transition-colors shadow-lg backdrop-blur-md border-[1px] border-white/10">
              <div className="flex items-center gap-3 text-white font-pixel text-[10px] mb-3"><Swords className="w-5 h-5 drop-shadow-md text-red-300 scale-110" /> OBSTACLE</div>
              <p className="text-sm text-white/90 leading-relaxed italic drop-shadow-sm">"{project.problem}"</p>
            </div>
            <div className="bg-black/20 rounded-2xl p-6 border-l-4 border-emerald-400 hover:bg-black/40 transition-colors shadow-lg backdrop-blur-md border-[1px] border-white/10">
              <div className="flex items-center gap-3 text-white font-pixel text-[10px] mb-3"><Shield className="w-5 h-5 drop-shadow-md text-emerald-300 scale-110" /> STRATEGY</div>
              <p className="text-sm text-white/90 leading-relaxed drop-shadow-sm">{project.solution}</p>
            </div>
          </div>

          <div className="bg-black/20 p-6 rounded-2xl border border-white/20 shadow-inner backdrop-blur-md">
             <div className="text-[10px] font-pixel text-white mb-4 flex items-center gap-3"><Wrench className="w-5 h-5 drop-shadow-md scale-110" /> INVENTORY (Tech Stack)</div>
             <div className="flex flex-wrap gap-2">
                {project.skills.map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-md bg-white/20 text-white text-xs font-bold border border-white/30 hover:bg-white/30 transition-colors cursor-default shadow-sm drop-shadow-sm">
                    {skill}
                  </span>
                ))}
             </div>
          </div>

          <div>
             <div className="text-[10px] font-pixel text-white mb-4 flex items-center gap-3"><Target className="w-5 h-5 drop-shadow-md scale-110" /> ACHIEVEMENTS UNLOCKED</div>
             <div className="grid md:grid-cols-2 gap-3">
                {project.highlights.map(h => (
                  <div key={h} className="flex items-center gap-4 px-5 py-4 rounded-xl bg-black/20 border border-white/20 group hover:bg-black/40 transition-colors shadow-md backdrop-blur-sm">
                    <Star className="w-6 h-6 text-yellow-300 fill-current animate-pulse drop-shadow-lg scale-110" />
                    <span className="text-sm text-white font-medium group-hover:drop-shadow-md transition-colors">{h}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="pt-4 pb-2">
            <a href={project.github} className="flex items-center justify-center gap-3 w-full py-5 rounded-xl bg-white/20 border-2 border-white/50 text-white font-pixel text-[11px] hover:translate-y-[-4px] active:translate-y-[2px] shadow-[0_8px_0_rgba(255,255,255,0.2)] hover:shadow-[0_12px_0_rgba(255,255,255,0.2)] active:shadow-[0_0px_0_rgba(255,255,255,0.2)] transition-all uppercase backdrop-blur-sm hover:bg-white/30">
              [ENTER_SOURCE_REPOSITORY] <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  const categoryMeta: Record<string, { emoji: string; color: string; grad: string }> = {
    "All":              { emoji: "✦", color: "#6366f1", grad: "linear-gradient(135deg,#6366f1,#a855f7)" },
    "NLP":              { emoji: "🧠", color: "#ef4444", grad: "linear-gradient(135deg,#ef4444,#f97316)" },
    "Computer Vision":  { emoji: "👁️", color: "#10b981", grad: "linear-gradient(135deg,#10b981,#06b6d4)" },
    "Recommendation":   { emoji: "🎬", color: "#ec4899", grad: "linear-gradient(135deg,#ec4899,#f43f5e)" },
    "Prediction":       { emoji: "📈", color: "#f59e0b", grad: "linear-gradient(135deg,#f59e0b,#ea580c)" },
    "Time Series":      { emoji: "⏱️", color: "#8b5cf6", grad: "linear-gradient(135deg,#8b5cf6,#6366f1)" },
  };

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

            {/* ── Creative Sticker Filter Bar ── */}
            <div className="flex flex-wrap gap-2 max-w-lg">
              {categories.map((cat) => {
                const meta = categoryMeta[cat] ?? { emoji: "●", color: "#94a3b8", grad: "linear-gradient(135deg,#94a3b8,#64748b)" };
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className="relative flex items-center gap-1.5 px-4 py-2.5 rounded-2xl font-pixel text-[9px] uppercase tracking-widest border-2 transition-all duration-200 hover:scale-105 active:scale-95"
                    style={
                      isActive
                        ? { background: meta.grad, color: "#fff", borderColor: meta.color, boxShadow: `4px 4px 0px ${meta.color}88` }
                        : { background: "#fff", color: "#64748b", borderColor: "#e2e8f0", boxShadow: "3px 3px 0px #f1f5f9" }
                    }
                  >
                    <span className="text-sm leading-none">{meta.emoji}</span>
                    {cat}
                    {isActive && (
                      <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 flex items-center justify-center"
                        style={{ borderColor: meta.color }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: meta.color }} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* ── Creative Bento Grid ── */}
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
              const isFeatured = i === 0;
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
                  className={`relative group ${isFeatured ? "col-span-1 md:col-span-2 row-span-2" : "col-span-1 row-span-1"}`}
                >
                  {/* Subtle Glow/Smoke Effect Behind Card (Always visible like profile shadow) */}
                  <div 
                    className="absolute -inset-1 blur-2xl opacity-20 group-hover:opacity-50 transition-all duration-700 z-0 scale-95 group-hover:scale-100 pointer-events-none"
                    style={{ background: meta.grad }}
                  />

                  {/* Actual Card Body - Cute Motivation Style */}
                  <div 
                    className="relative z-10 h-full w-full rounded-3xl overflow-hidden cursor-pointer border-[3px] flex flex-col transition-all duration-300 group-hover:-translate-y-1.5 group-hover:scale-[1.02]"
                    style={{ 
                      borderColor: meta.color,
                      backgroundColor: "#fff",
                      boxShadow: `6px 6px 0px ${meta.color}`, 
                    }}
                  >
                    {/* Image container inside the card */}
                    <div className={`relative w-full ${isFeatured ? "h-64 md:h-80" : "h-[140px]"} shrink-0 border-b-[3px] bg-slate-50 overflow-hidden`} style={{ borderColor: meta.color }}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100"
                      />
                      
                      {/* Colorful soft overlay ALWAYS ON (30% to 60%) */}
                      <div 
                        className="absolute inset-0 opacity-40 group-hover:opacity-70 transition-opacity duration-300 mix-blend-overlay"
                        style={{ background: meta.grad }}
                      />
                      
                      {/* Interactive Smoke on Image */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen overflow-hidden">
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 blur-[40px] rounded-full animate-pulse opacity-80" style={{ background: meta.color }} />
                        <div className="absolute top-10 -right-10 w-48 h-48 blur-[50px] rounded-full animate-pulse opacity-60" style={{ background: meta.color }} />
                        <div className="absolute -top-10 left-20 w-32 h-32 blur-[30px] rounded-full animate-pulse opacity-40 delay-150" style={{ background: meta.color }} />
                      </div>
                      
                      {/* Dark gradient overlay covering the image from the bottom (like profile!) */}
                      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-30 group-hover:opacity-90 transition-opacity duration-500 flex flex-col items-center justify-center backdrop-blur-[1px] group-hover:backdrop-blur-sm z-10">
                        <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <project.icon className="w-8 h-8 text-white drop-shadow-md mb-2" />
                          <span className="text-white font-pixel text-[9px] px-3 py-1.5 rounded-xl uppercase tracking-widest mt-1 border border-white/40 shadow-sm" style={{ background: meta.color }}>
                            [ EXPLORE ]
                          </span>
                        </div>
                      </div>

                      {/* Meta top bar on top of image */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                        {/* Colored Category Tag */}
                        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border-2 bg-white/95 backdrop-blur-sm shadow-sm" style={{ borderColor: meta.color }}>
                          <span className="text-sm leading-none">{meta.emoji}</span>
                          <span 
                            className="text-[8px] font-pixel tracking-widest uppercase font-bold"
                            style={{ color: meta.color }}
                          >
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Number counter */}
                        <span className="font-pixel text-[10px] bg-white/95 px-2 py-1 rounded-xl shadow-sm border-2" style={{ color: meta.color, borderColor: meta.color }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>

                    {/* Bottom content area (Clean White) */}
                    <div className="p-5 md:p-6 flex flex-col flex-grow relative bg-white">
                      
                      {/* Title and cute dots */}
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex gap-1 bg-slate-100 px-2 py-1 rounded-lg border border-slate-200">
                            <div className="w-2 h-2 rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5)]" style={{ background: "#f87171" }} />
                            <div className="w-2 h-2 rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5)]" style={{ background: "#facc15" }} />
                            <div className="w-2 h-2 rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5)]" style={{ background: "#4ade80" }} />
                          </div>
                          <span className="text-[8px] font-pixel px-2 py-1 rounded-lg border uppercase font-bold opacity-80" style={{ color: meta.color, borderColor: meta.color, backgroundColor: `${meta.color}15` }}>
                            {meta.emoji} PROJECT.EXE
                          </span>
                        </div>

                        <h3 className={`font-black text-slate-800 leading-tight mb-2 ${isFeatured ? "text-2xl mt-4" : "text-sm sm:text-base"} group-hover:text-[${meta.color}] transition-colors`}>
                          {project.title}
                        </h3>
                      </div>

                      {/* Bottom Tags */}
                      <div className="mt-auto pt-2">
                        {isFeatured && (
                          <p className="text-sm text-slate-500 font-medium line-clamp-2 md:line-clamp-3 mb-4 leading-relaxed">{project.description}</p>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.slice(0, isFeatured ? 5 : 3).map((t) => (
                            <span 
                              key={t} 
                              className="text-[9px] font-pixel px-2 py-1 rounded-full border border-slate-200 text-slate-600 bg-slate-50 font-bold tracking-wide"
                            >
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
