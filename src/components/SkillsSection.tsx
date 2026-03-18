import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BrainCircuit, Eye, BarChart3, Layers, Code2, Database,
  Lightbulb, MessageSquare, Crown, Globe, Languages,
} from "lucide-react";

const skillCategories = [
  {
    title: "AI & Tech Skills",
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
    items: [
      { icon: Lightbulb, name: "Innovative Thinking" },
      { icon: Lightbulb, name: "Problem Solving" },
      { icon: Crown, name: "Leadership" },
      { icon: MessageSquare, name: "Communication" },
    ],
  },
  {
    title: "Languages",
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
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display font-semibold text-lg mb-5 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full gold-gradient" />
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/60 transition-colors group cursor-default"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="w-4 h-4 text-primary" />
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
