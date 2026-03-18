import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BrainCircuit, Eye, BarChart3, Layers, Code2, Database,
  Lightbulb, MessageSquare, Crown, Globe, Languages,
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Tech Skills",
    gradient: "from-[hsl(var(--color-purple))] to-[hsl(var(--primary))]",
    dot: "bg-[hsl(var(--color-purple))]",
    items: [
      { icon: BrainCircuit, name: "Machine Learning" },
      { icon: Layers, name: "Deep Learning" },
      { icon: MessageSquare, name: "NLP" },
      { icon: Eye, name: "Computer Vision" },
      { icon: BarChart3, name: "Data Analysis" },
      { icon: Layers, name: "AI System Design" },
    ],
  },
  {
    title: "Programming & Tools",
    gradient: "from-[hsl(var(--color-blue))] to-[hsl(var(--color-cyan))]",
    dot: "bg-[hsl(var(--color-blue))]",
    items: [
      { icon: Code2, name: "Python" },
      { icon: Database, name: "TensorFlow / PyTorch" },
      { icon: Code2, name: "Scikit-learn" },
      { icon: Database, name: "Pandas / NumPy" },
      { icon: Globe, name: "API Integration" },
    ],
  },
  {
    title: "Soft Skills",
    gradient: "from-[hsl(var(--color-pink))] to-[hsl(var(--color-orange))]",
    dot: "bg-[hsl(var(--color-pink))]",
    items: [
      { icon: Lightbulb, name: "Innovative Thinking" },
      { icon: Lightbulb, name: "Problem Solving" },
      { icon: Crown, name: "Leadership" },
      { icon: MessageSquare, name: "Communication" },
    ],
  },
  {
    title: "Languages",
    gradient: "from-[hsl(var(--color-green))] to-[hsl(var(--color-cyan))]",
    dot: "bg-[hsl(var(--color-green))]",
    items: [
      { icon: Languages, name: "Advanced English" },
      { icon: Languages, name: "Basic French" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 grid-pattern opacity-30" />
      {/* Colorful smoke blobs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, hsl(260 85% 60% / 0.5), transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, hsl(185 85% 50% / 0.5), transparent 70%)" }} />

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

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${cat.dot}`} />
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/5 transition-colors group cursor-default"
                  >
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${cat.gradient} opacity-80 flex items-center justify-center group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                      <skill.icon className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
