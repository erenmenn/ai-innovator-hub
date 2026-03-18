import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Users, BrainCircuit } from "lucide-react";

const traits = [
  { icon: Lightbulb, title: "Innovative Leader", desc: "Strong communication skills with a passion for driving impactful solutions.", color: "from-[hsl(var(--color-orange))] to-[hsl(var(--color-pink))]" },
  { icon: Target, title: "Solution-Oriented", desc: "Analytical and creative, translating real-world problems into AI-powered solutions.", color: "from-[hsl(var(--color-blue))] to-[hsl(var(--color-cyan))]" },
  { icon: BrainCircuit, title: "AI Builder", desc: "Experienced in NLP, Computer Vision, and Predictive Systems across multiple domains.", color: "from-[hsl(var(--color-purple))] to-[hsl(var(--primary))]" },
  { icon: Users, title: "AI Consultant", desc: "Helping businesses understand where AI fits and how to implement it effectively.", color: "from-[hsl(var(--color-green))] to-[hsl(var(--color-cyan))]" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Smoke */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 25, 0], scale: [1, 1.15, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, hsl(25 95% 58%), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 30, 0], y: [0, 25, -15, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, hsl(270 80% 65%), transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative">
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
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-2 hover:shadow-xl"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${trait.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
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
