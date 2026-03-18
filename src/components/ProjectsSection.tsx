import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Brain, Eye, Film, BarChart3, Cpu, X, Lightbulb, Target, Wrench, AlertTriangle } from "lucide-react";

type Category = "All" | "NLP" | "Computer Vision" | "Recommendation" | "Prediction" | "AI System";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: Category;
  icon: typeof Brain;
  github: string;
  color: string;
  fullDescription: string;
  problem: string;
  solution: string;
  skills: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "WangkuAI-FinanceBot",
    description: "AI chatbot for financial insights powered by LLMs",
    tech: ["NLP", "LLM", "Python"],
    category: "NLP",
    icon: Brain,
    github: "#",
    color: "from-[hsl(var(--color-purple))] to-[hsl(var(--color-blue))]",
    fullDescription: "An intelligent financial chatbot that leverages Large Language Models to provide real-time financial insights, answer complex financial questions, and help users make informed decisions about their finances.",
    problem: "People struggle to understand complex financial data and need quick, reliable answers to financial questions without consulting expensive advisors.",
    solution: "Built an LLM-powered chatbot that processes financial queries using NLP, retrieves relevant data, and generates clear, actionable financial insights in natural language.",
    skills: ["Natural Language Processing", "Large Language Models", "Python", "API Integration", "Prompt Engineering", "Financial Analysis"],
    highlights: ["Real-time financial data processing", "Context-aware conversations", "Multi-turn dialogue support"],
  },
  {
    title: "ImageClassification-PlantCare",
    description: "Classifies plant health from leaf images",
    tech: ["CNN", "TensorFlow"],
    category: "Computer Vision",
    icon: Eye,
    github: "#",
    color: "from-[hsl(var(--color-green))] to-[hsl(var(--color-cyan))]",
    fullDescription: "A deep learning system that analyzes plant leaf images to detect diseases and assess plant health, helping farmers and gardeners take proactive care of their plants.",
    problem: "Early detection of plant diseases is crucial for agriculture, but manual inspection is time-consuming and requires expert knowledge.",
    solution: "Developed a CNN-based image classifier trained on thousands of plant leaf images to accurately identify common plant diseases and health issues.",
    skills: ["Convolutional Neural Networks", "TensorFlow", "Image Processing", "Data Augmentation", "Transfer Learning", "Python"],
    highlights: ["95%+ classification accuracy", "Supports multiple plant species", "Mobile-friendly inference"],
  },
  {
    title: "RekomendasiFILM",
    description: "Movie recommendation with collaborative filtering",
    tech: ["Collaborative Filtering"],
    category: "Recommendation",
    icon: Film,
    github: "#",
    color: "from-[hsl(var(--color-pink))] to-[hsl(var(--color-orange))]",
    fullDescription: "A hybrid movie recommendation engine that combines collaborative and content-based filtering to suggest personalized movies based on user preferences and viewing history.",
    problem: "Users face decision fatigue when choosing movies from thousands of options, leading to poor viewing experiences.",
    solution: "Implemented a hybrid recommendation system combining collaborative filtering (user-user and item-item) with content-based features for accurate, personalized suggestions.",
    skills: ["Collaborative Filtering", "Content-Based Filtering", "Matrix Factorization", "Python", "Pandas", "Similarity Metrics"],
    highlights: ["Hybrid approach for better accuracy", "Cold-start handling", "Scalable architecture"],
  },
  {
    title: "ImageClassification-EmosiMU",
    description: "Emotion detection from facial images",
    tech: ["Deep Learning", "CNN"],
    category: "Computer Vision",
    icon: Eye,
    github: "#",
    color: "from-[hsl(var(--color-orange))] to-[hsl(var(--color-pink))]",
    fullDescription: "A facial emotion recognition system that detects and classifies human emotions from images using deep learning, applicable in UX research, mental health, and interactive systems.",
    problem: "Understanding human emotions in real-time is essential for many applications but traditionally requires manual observation and expert interpretation.",
    solution: "Built a deep CNN model trained on facial expression datasets to classify emotions like happiness, sadness, anger, surprise, and more from static images.",
    skills: ["Deep Learning", "CNN", "Face Detection", "Emotion Analysis", "OpenCV", "Data Preprocessing"],
    highlights: ["7 emotion categories", "Real-time capable", "Robust to lighting variations"],
  },
  {
    title: "SemanticSearch-Lyrics",
    description: "Search lyrics by meaning using semantic embeddings",
    tech: ["NLP", "Embeddings"],
    category: "NLP",
    icon: Brain,
    github: "#",
    color: "from-[hsl(var(--color-blue))] to-[hsl(var(--color-purple))]",
    fullDescription: "A semantic search engine for song lyrics that goes beyond keyword matching — users can search by meaning, mood, or theme to find songs that match their feelings.",
    problem: "Traditional keyword-based lyric search fails when users want to find songs by theme or emotion rather than exact words.",
    solution: "Implemented semantic embeddings (sentence transformers) to encode lyrics into vector space, enabling meaning-based similarity search across a large lyrics database.",
    skills: ["Sentence Transformers", "Vector Embeddings", "Semantic Search", "NLP", "Python", "FAISS"],
    highlights: ["Meaning-based search", "Mood & theme discovery", "Fast vector similarity"],
  },
  {
    title: "IntentClass-CustomerServiceBOT",
    description: "Intent classification for customer service chatbots",
    tech: ["NLP", "Classification"],
    category: "NLP",
    icon: Brain,
    github: "#",
    color: "from-[hsl(var(--color-cyan))] to-[hsl(var(--color-blue))]",
    fullDescription: "An NLP-powered intent classification system that automatically categorizes customer service messages, enabling faster routing and automated responses for common queries.",
    problem: "Customer service teams are overwhelmed with repetitive queries, leading to slow response times and poor customer satisfaction.",
    solution: "Trained a text classification model to detect customer intent from messages, enabling automatic routing and response suggestions for common service categories.",
    skills: ["Text Classification", "NLP", "Scikit-learn", "Feature Engineering", "Python", "Data Labeling"],
    highlights: ["Multi-class intent detection", "Auto-routing support", "Continuous learning pipeline"],
  },
  {
    title: "SentimenAnalisis-TaylorOphelia",
    description: "Sentiment analysis system for text data",
    tech: ["NLP"],
    category: "NLP",
    icon: Brain,
    github: "#",
    color: "from-[hsl(var(--primary))] to-[hsl(var(--color-pink))]",
    fullDescription: "A sentiment analysis project that analyzes public opinions and emotions in text data, with a fun twist — applied to analyze fan sentiments around Taylor Swift and related cultural topics.",
    problem: "Understanding public sentiment at scale requires processing thousands of text entries, which is impossible to do manually.",
    solution: "Built a sentiment analysis pipeline using NLP techniques to classify text as positive, negative, or neutral, with visualization of sentiment trends over time.",
    skills: ["Sentiment Analysis", "NLP", "Text Preprocessing", "Visualization", "Python", "NLTK/spaCy"],
    highlights: ["Positive/Negative/Neutral classification", "Trend visualization", "Social media data processing"],
  },
  {
    title: "PrediksiHarga-MADUW",
    description: "Price prediction model using regression",
    tech: ["Regression", "ML"],
    category: "Prediction",
    icon: BarChart3,
    github: "#",
    color: "from-[hsl(var(--color-orange))] to-[hsl(var(--gold))]",
    fullDescription: "A machine learning model that predicts honey (madu) prices based on various features like quality, origin, season, and market conditions using regression techniques.",
    problem: "Honey price fluctuations are hard to predict, causing challenges for both producers and buyers in pricing and purchasing decisions.",
    solution: "Developed regression models (Linear, Random Forest, Gradient Boosting) to predict honey prices with feature engineering on quality and market data.",
    skills: ["Regression Analysis", "Feature Engineering", "Scikit-learn", "Pandas", "Data Visualization", "Model Evaluation"],
    highlights: ["Multiple model comparison", "Feature importance analysis", "Cross-validation"],
  },
  {
    title: "ChungkingStrategy-FirstAIDbook",
    description: "Strategy-based knowledge model system",
    tech: ["ML", "Knowledge System"],
    category: "AI System",
    icon: Cpu,
    github: "#",
    color: "from-[hsl(var(--color-green))] to-[hsl(var(--color-blue))]",
    fullDescription: "A knowledge-based AI system that organizes and retrieves first-aid information using intelligent chunking strategies, making critical health knowledge accessible and searchable.",
    problem: "First-aid information is scattered across long documents, making it hard to quickly find relevant procedures during emergencies.",
    solution: "Built a chunking-strategy system that breaks down first-aid knowledge into structured, searchable segments with intelligent retrieval for quick access.",
    skills: ["Knowledge Systems", "Information Retrieval", "ML", "Text Chunking", "Python", "System Design"],
    highlights: ["Smart document chunking", "Fast retrieval", "Structured knowledge base"],
  },
];

const categories: Category[] = ["All", "NLP", "Computer Vision", "Recommendation", "Prediction", "AI System"];

const catColors: Record<Category, string> = {
  All: "gold-gradient",
  NLP: "bg-gradient-to-r from-[hsl(var(--color-purple))] to-[hsl(var(--color-blue))]",
  "Computer Vision": "bg-gradient-to-r from-[hsl(var(--color-green))] to-[hsl(var(--color-cyan))]",
  Recommendation: "bg-gradient-to-r from-[hsl(var(--color-pink))] to-[hsl(var(--color-orange))]",
  Prediction: "bg-gradient-to-r from-[hsl(var(--color-orange))] to-[hsl(var(--gold))]",
  "AI System": "bg-gradient-to-r from-[hsl(var(--color-cyan))] to-[hsl(var(--color-blue))]",
};

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-card rounded-3xl shadow-2xl border border-border"
      >
        {/* Header with gradient */}
        <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
          <project.icon className="w-20 h-20 text-primary-foreground/50" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-foreground/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <span className="absolute bottom-4 left-6 px-3 py-1 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-xs font-semibold">
            {project.category}
          </span>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {/* Title */}
          <div>
            <h3 className="font-display text-2xl font-bold">{project.title}</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">{project.fullDescription}</p>
          </div>

          {/* Problem */}
          <div className="glass-card rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-accent font-semibold text-sm">
              <AlertTriangle className="w-4 h-4" />
              Problem
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="glass-card rounded-xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-primary font-semibold text-sm">
              <Lightbulb className="w-4 h-4" />
              Solution
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>

          {/* Highlights */}
          <div>
            <div className="flex items-center gap-2 font-semibold text-sm mb-3">
              <Target className="w-4 h-4 text-primary" />
              Key Highlights
            </div>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span key={h} className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  ✦ {h}
                </span>
              ))}
            </div>
          </div>

          {/* Skills Required */}
          <div>
            <div className="flex items-center gap-2 font-semibold text-sm mb-3">
              <Wrench className="w-4 h-4 text-primary" />
              Skills & Technologies Used
            </div>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((s) => (
                <span key={s} className="px-3 py-1.5 rounded-lg text-xs font-medium bg-muted text-muted-foreground border border-border">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
            {project.tech.map((t) => (
              <span key={t} className={`px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r ${project.color} text-primary-foreground`}>
                {t}
              </span>
            ))}
          </div>

          {/* GitHub Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl gold-gradient text-primary-foreground font-semibold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Github className="w-5 h-5" /> View on GitHub <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute top-20 left-0 w-[300px] h-[300px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(330 80% 60%), transparent 70%)" }} />
      <div className="absolute bottom-20 right-0 w-[350px] h-[350px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, hsl(210 95% 58%), transparent 70%)" }} />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="gold-text">Work</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? `${catColors[cat]} text-primary-foreground shadow-lg`
                  : "glass-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(project)}
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className={`h-40 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="w-16 h-16 text-primary-foreground/60 group-hover:text-primary-foreground/80 transition-colors group-hover:scale-110 transform duration-300" />
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to explore →
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display font-semibold text-lg leading-tight">{project.title}</h3>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary whitespace-nowrap ml-2">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-muted text-muted-foreground font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
