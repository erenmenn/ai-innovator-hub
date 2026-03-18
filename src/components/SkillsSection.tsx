import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  BrainCircuit, Eye, BarChart3, Layers, Code2, Database,
  Lightbulb, MessageSquare, Crown, Globe, Languages, ChevronRight,
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Tech Skills",
    emoji: "🤖",
    gradient: "from-[hsl(var(--color-purple))] to-[hsl(var(--color-blue))]",
    dot: "bg-[hsl(var(--color-purple))]",
    items: [
      { icon: BrainCircuit, name: "Machine Learning", level: 90, desc: "Supervised, unsupervised, reinforcement learning" },
      { icon: Layers, name: "Deep Learning", level: 85, desc: "Neural networks, CNNs, RNNs, Transformers" },
      { icon: MessageSquare, name: "NLP", level: 88, desc: "Text classification, embeddings, LLMs" },
      { icon: Eye, name: "Computer Vision", level: 80, desc: "Image classification, object detection" },
      { icon: BarChart3, name: "Data Analysis", level: 92, desc: "Statistical analysis, visualization, insights" },
      { icon: Layers, name: "AI System Design", level: 78, desc: "End-to-end AI pipeline architecture" },
    ],
  },
  {
    title: "Programming & Tools",
    emoji: "💻",
    gradient: "from-[hsl(var(--color-blue))] to-[hsl(var(--color-cyan))]",
    dot: "bg-[hsl(var(--color-blue))]",
    items: [
      { icon: Code2, name: "Python", level: 95, desc: "Primary language for AI/ML development" },
      { icon: Database, name: "TensorFlow / PyTorch", level: 85, desc: "Deep learning frameworks" },
      { icon: Code2, name: "Scikit-learn", level: 90, desc: "Classical ML algorithms & pipelines" },
      { icon: Database, name: "Pandas / NumPy", level: 92, desc: "Data manipulation & computation" },
      { icon: Globe, name: "API Integration", level: 82, desc: "REST APIs, webhooks, third-party services" },
    ],
  },
  {
    title: "Soft Skills",
    emoji: "🌟",
    gradient: "from-[hsl(var(--color-pink))] to-[hsl(var(--color-orange))]",
    dot: "bg-[hsl(var(--color-pink))]",
    items: [
      { icon: Lightbulb, name: "Innovative Thinking", level: 95, desc: "Creative approaches to complex problems" },
      { icon: Lightbulb, name: "Problem Solving", level: 93, desc: "Analytical & structured problem decomposition" },
      { icon: Crown, name: "Leadership", level: 88, desc: "Team management & project coordination" },
      { icon: MessageSquare, name: "Communication", level: 90, desc: "Clear technical & non-technical articulation" },
    ],
  },
  {
    title: "Languages",
    emoji: "🌍",
    gradient: "from-[hsl(var(--color-green))] to-[hsl(var(--color-cyan))]",
    dot: "bg-[hsl(var(--color-green))]",
    items: [
      { icon: Languages, name: "Advanced English", level: 90, desc: "Professional communication & writing" },
      { icon: Languages, name: "Basic French", level: 35, desc: "Français débutant — conversational basics" },
    ],
  },
];

const SkillBar = ({ level, gradient, inView }: { level: number; gradient: string; inView: boolean }) => (
  <div className="w-full h-2 rounded-full bg-muted/60 overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={inView ? { width: `${level}%` } : { width: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
    />
  </div>
);

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeCat = skillCategories[activeTab];

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Smoke effects */}
      <motion.div
        animate={{ x: [0, 20, -15, 0], y: [0, -15, 20, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, hsl(260 85% 60%), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -25, 15, 0], y: [0, 20, -20, 0], scale: [1, 0.95, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-0 left-[5%] w-[450px] h-[450px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, hsl(185 85% 50%), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 15, -20, 0], y: [0, -10, 15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute top-[40%] left-[50%] w-[350px] h-[350px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, hsl(330 80% 60%), transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="gold-text">Toolkit</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === i
                    ? `bg-gradient-to-r ${cat.gradient} text-primary-foreground shadow-lg scale-105`
                    : "glass-card text-muted-foreground hover:text-foreground hover:scale-[1.02]"
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.title}
              </button>
            ))}
          </motion.div>

          {/* Active category content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl">{activeCat.emoji}</span>
                <h3 className="font-display font-bold text-xl">{activeCat.title}</h3>
                <span className={`w-2 h-2 rounded-full ${activeCat.dot} animate-pulse`} />
              </div>

              <div className="space-y-4">
                {activeCat.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group p-4 rounded-xl hover:bg-muted/40 transition-all cursor-default"
                  >
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activeCat.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-md`}>
                        <skill.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-sm">{skill.name}</span>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: hoveredSkill === skill.name ? 1 : 0.5 }}
                            className="text-xs font-bold text-primary"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <SkillBar level={skill.level} gradient={activeCat.gradient} inView={isInView} />
                      </div>
                      <ChevronRight className={`w-4 h-4 text-muted-foreground transition-all ${hoveredSkill === skill.name ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`} />
                    </div>

                    {/* Description on hover */}
                    <AnimatePresence>
                      {hoveredSkill === skill.name && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-xs text-muted-foreground pl-14 leading-relaxed"
                        >
                          {skill.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
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
