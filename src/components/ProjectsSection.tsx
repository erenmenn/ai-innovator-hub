import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Brain, Eye, Film, BarChart3, Cpu } from "lucide-react";

type Category = "All" | "NLP" | "Computer Vision" | "Recommendation" | "Prediction" | "AI System";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: Category;
  icon: typeof Brain;
  github: string;
  color: string;
}

const projects: Project[] = [
  { title: "WangkuAI-FinanceBot", description: "AI chatbot for financial insights powered by LLMs", tech: ["NLP", "LLM", "Python"], category: "NLP", icon: Brain, github: "#", color: "from-[hsl(var(--color-purple))] to-[hsl(var(--color-blue))]" },
  { title: "ImageClassification-PlantCare", description: "Classifies plant health from leaf images", tech: ["CNN", "TensorFlow"], category: "Computer Vision", icon: Eye, github: "#", color: "from-[hsl(var(--color-green))] to-[hsl(var(--color-cyan))]" },
  { title: "RekomendasiFILM", description: "Movie recommendation with collaborative filtering", tech: ["Collaborative Filtering"], category: "Recommendation", icon: Film, github: "#", color: "from-[hsl(var(--color-pink))] to-[hsl(var(--color-orange))]" },
  { title: "ImageClassification-EmosiMU", description: "Emotion detection from facial images", tech: ["Deep Learning", "CNN"], category: "Computer Vision", icon: Eye, github: "#", color: "from-[hsl(var(--color-orange))] to-[hsl(var(--color-pink))]" },
  { title: "SemanticSearch-Lyrics", description: "Search lyrics by meaning using semantic embeddings", tech: ["NLP", "Embeddings"], category: "NLP", icon: Brain, github: "#", color: "from-[hsl(var(--color-blue))] to-[hsl(var(--color-purple))]" },
  { title: "IntentClass-CustomerServiceBOT", description: "Intent classification for customer service chatbots", tech: ["NLP", "Classification"], category: "NLP", icon: Brain, github: "#", color: "from-[hsl(var(--color-cyan))] to-[hsl(var(--color-blue))]" },
  { title: "SentimenAnalisis-TaylorOphelia", description: "Sentiment analysis system for text data", tech: ["NLP"], category: "NLP", icon: Brain, github: "#", color: "from-[hsl(var(--primary))] to-[hsl(var(--color-pink))]" },
  { title: "PrediksiHarga-MADUW", description: "Price prediction model using regression", tech: ["Regression", "ML"], category: "Prediction", icon: BarChart3, github: "#", color: "from-[hsl(var(--color-orange))] to-[hsl(var(--gold))]" },
  { title: "ChungkingStrategy-FirstAIDbook", description: "Strategy-based knowledge model system", tech: ["ML", "Knowledge System"], category: "AI System", icon: Cpu, github: "#", color: "from-[hsl(var(--color-green))] to-[hsl(var(--color-blue))]" },
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

const ProjectsSection = () => {
  const [active, setActive] = useState<Category>("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Color blobs */}
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
                className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className={`h-40 bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center relative overflow-hidden`}>
                  <project.icon className="w-16 h-16 text-primary-foreground/60 group-hover:text-primary-foreground/80 transition-colors group-hover:scale-110 transform duration-300" />
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

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline mt-2"
                  >
                    <Github className="w-4 h-4" /> View on GitHub <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
