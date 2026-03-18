import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Users, BrainCircuit } from "lucide-react";

const traits = [
  { icon: Lightbulb, title: "Innovative Leader", desc: "Strong communication skills with a passion for driving impactful solutions." },
  { icon: Target, title: "Solution-Oriented", desc: "Analytical and creative, translating real-world problems into AI-powered solutions." },
  { icon: BrainCircuit, title: "AI Builder", desc: "Experienced in NLP, Computer Vision, and Predictive Systems across multiple domains." },
  { icon: Users, title: "AI Consultant", desc: "Helping businesses understand where AI fits and how to implement it effectively." },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-widest uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Passionate About <span className="gold-text">Intelligence</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I am an innovative leader who understands real-world problems and identifies where AI can be
            applied effectively. Creative, analytical, and solution-oriented — I build intelligent systems
            and act as a light AI consultant, helping translate problems into AI solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <trait.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{trait.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
