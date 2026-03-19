import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  BrainCircuit, Eye, BarChart3, Layers, Code2, Database,
  Lightbulb, MessageSquare, Crown, Globe, Sparkles, Star, Cpu
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & TECH",
    emoji: "🤖",
    bgGradient: "linear-gradient(135deg, #a855f7, #4f46e5)",
    glow: "rgba(139, 92, 246, 0.4)",
    items: [
      { icon: BrainCircuit, name: "Machine Learning", level: 90, desc: "Supervised, unsupervised, reinforcement learning" },
      { icon: Layers, name: "Deep Learning", level: 85, desc: "Neural networks, CNNs, RNNs, Transformers" },
      { icon: Cpu, name: "LLMs & RAG", level: 88, desc: "LangChain, Vector DBs, Prompt Engineering, RAG Systems" },
      { icon: MessageSquare, name: "NLP", level: 88, desc: "Text classification, embeddings, LLMs deployment" },
      { icon: Eye, name: "Computer Vision", level: 80, desc: "Image classification, object detection" },
      { icon: BarChart3, name: "Data Analysis", level: 92, desc: "Statistical analysis, visualization, insights" },
    ],
  },
  {
    title: "TOOLS & DEV",
    emoji: "💻",
    bgGradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    glow: "rgba(59, 130, 246, 0.4)",
    items: [
      { icon: Code2, name: "Python", level: 95, desc: "Primary language for AI/ML development" },
      { icon: Code2, name: "LangChain & AI Tools", level: 85, desc: "Building agentic AI and connected LLM workflows" },
      { icon: Database, name: "TensorFlow / PyTorch", level: 85, desc: "Deep learning frameworks" },
      { icon: Code2, name: "Scikit-learn", level: 90, desc: "Classical ML algorithms & pipelines" },
      { icon: Database, name: "Pandas / NumPy", level: 92, desc: "Data manipulation & computation" },
      { icon: Globe, name: "API Integration", level: 82, desc: "REST APIs, webhooks, third-party services" },
    ],
  },
  {
    title: "SOFT SKILLS",
    emoji: "🌟",
    bgGradient: "linear-gradient(135deg, #ec4899, #f97316)",
    glow: "rgba(236, 72, 153, 0.4)",
    items: [
      { icon: Lightbulb, name: "Innovative Thinking", level: 95, desc: "Creative approaches to complex problems" },
      { icon: Lightbulb, name: "Problem Solving", level: 93, desc: "Analytical & structured problem decomposition" },
      { icon: Crown, name: "Leadership", level: 88, desc: "Team management & project coordination" },
      { icon: MessageSquare, name: "Communication", level: 90, desc: "Clear technical & non-technical articulation" },
    ],
  },
];

const SkillBar = ({ level, bgGradient }: { level: number; bgGradient: string }) => (
  <div className="w-full h-4 rounded-full bg-muted/40 overflow-hidden shadow-inner border 2 border-white/10 relative p-1 mt-1">
    <motion.div
      initial={{ width: "0%" }}
      whileInView={{ width: `${level}%` }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.5, ease: "easeOut", type: "spring", bounce: 0.3 }}
      className={`h-full rounded-full shadow-[0_0_20px_rgba(255,255,255,0.4)] relative border border-white/50`}
      style={{ background: bgGradient }}
    >
        {/* Cute shine effect on bar */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-white/30 rounded-full" />
    </motion.div>
  </div>
);

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeCat = skillCategories[activeTab];

  return (
    <section id="skills" className="py-24 relative overflow-hidden pixel-grid">
      
      {/* ── Innovative Static Smoke Background (Animasi Dihapus Agar Tidak Lag) ── */}
      <div className="absolute inset-x-0 top-0 h-full w-full pointer-events-none -z-10">
        <div className="absolute top-1/4 right-[5%] w-[600px] h-[600px] bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-[5%] w-[550px] h-[550px] bg-blue-500/10 blur-[120px]" />
        
        {/* Floating Asset Objects (Static/Hover only) */}
        <div className="absolute top-32 left-10 opacity-60 hover:scale-110 transition-transform">
           <img src="/asset/sparkle.png" alt="Sparkle" width={80} height={80} className="drop-shadow-xl" />
        </div>
        
        <div className="absolute bottom-20 right-10 opacity-50 hover:rotate-12 transition-transform">
           <img src="/asset/bintang.png" alt="Star Object" width={100} height={100} className="drop-shadow-xl" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 relative"
        >
          <span className="text-[10px] font-pixel text-primary tracking-tighter bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            SYSTEM_CAPABILITIES
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-6 tracking-tight relative inline-block">
            MY <span className="gold-text italic pr-2">TOOLKIT</span>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-10 opacity-30">
               <Sparkles className="w-12 h-12 text-primary" />
            </motion.div>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Cute tab navigation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-14"
          >
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(i)}
                className={`relative px-8 py-4 rounded-[2rem] text-xs font-pixel transition-all duration-500 flex items-center gap-3 border-4 ${
                  activeTab === i
                    ? `text-white border-white/50 shadow-[0_15px_30px_-5px_rgba(var(--primary),0.4)] scale-110 z-10`
                    : "glass-card text-muted-foreground border-white/10 hover:border-white/30 hover:scale-105"
                }`}
                style={activeTab === i ? { background: cat.bgGradient, color: "#fff" } : {}}
              >
                <span className="text-xl">{cat.emoji}</span>
                {cat.title}
                {activeTab === i && (
                   <motion.div layoutId="tab-glow" className="absolute -inset-1 blur-md bg-white/20 rounded-[2.1rem] -z-10" />
                )}
              </button>
            ))}
          </motion.div>

          {/* Active category content with Smooth Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="relative glass-card rounded-[3rem] p-8 md:p-12 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] border-4 border-white/20 mb-10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/5" />
              <div className="relative flex items-center gap-4 mb-10">
                <div 
                  className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center text-4xl shadow-inner border-2 border-white/40 group relative overflow-hidden"
                  style={{ backgroundColor: activeCat.glow }}
                >
                   <div className="absolute inset-0 opacity-20"><Sparkles className="w-full h-full text-white" /></div>
                   <span className="relative z-10 drop-shadow-xl">{activeCat.emoji}</span>
                </div>
                <div>
                   <h3 className="text-3xl font-black text-foreground font-silkscreen drop-shadow-md">{activeCat.title}</h3>
                   <div className="flex items-center gap-2 mt-2">
                      <div className="w-3 h-3 rounded-full bg-green-400 border border-white/50 shadow-[0_0_10px_rgba(74,222,128,0.8)] animate-pulse" />
                      <span className="text-[10px] font-pixel text-muted-foreground shadow-sm">MODULE_LOADED_100%</span>
                   </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 relative z-10">
                {activeCat.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group relative cursor-crosshair"
                  >
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <div 
                              className="p-2.5 rounded-xl text-white shadow-lg border border-white/30 group-hover:scale-110 transition-transform"
                              style={{ background: activeCat.bgGradient, color: "#fff" }}
                            >
                               <skill.icon className="w-5 h-5" />
                            </div>
                            <span className="font-bold text-sm tracking-tight group-hover:text-primary transition-colors">{skill.name}</span>
                         </div>
                         <span className="text-xs font-black text-primary font-silkscreen bg-primary/10 px-2 py-1 rounded-lg border border-primary/20">{skill.level}%</span>
                      </div>
                      <SkillBar level={skill.level} bgGradient={activeCat.bgGradient} />
                      
                      <AnimatePresence>
                        {hoveredSkill === skill.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="absolute -bottom-10 left-0 bg-background/90 backdrop-blur-md px-4 py-2 rounded-xl text-[11px] text-muted-foreground leading-relaxed italic border border-white/10 shadow-xl z-50 w-full"
                          >
                             {skill.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
