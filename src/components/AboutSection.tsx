import { motion } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Target, Users, BrainCircuit, Sparkles, Star } from "lucide-react";

const traits = [
  { icon: Lightbulb, title: "Innovative Leader", desc: "Driving impactful solutions with creative thinking & sharp communication.", bgGradient: "linear-gradient(135deg, #f97316, #ec4899)" },
  { icon: Target, title: "Solution-Oriented", desc: "Translating real-world problems into highly effective AI-powered systems.", bgGradient: "linear-gradient(135deg, #3b82f6, #06b6d4)" },
  { icon: BrainCircuit, title: "AI Builder", desc: "Deep expertise in NLP, LLMs, Vision, and scalable Predictive Architectures.", bgGradient: "linear-gradient(135deg, #a855f7, #ec4899)" },
  { icon: Users, title: "AI Consultant", desc: "Guiding businesses to seamlessly integrate AI for maximum ROI and efficiency.", bgGradient: "linear-gradient(135deg, #22c55e, #06b6d4)" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden pixel-grid">
      {/* ── Innovative Smoke Background ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
           animate={{ x: [0, 40, -20, 0], y: [0, -20, 35, 0], scale: [1, 1.2, 0.9, 1] }}
           transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[10%] left-[5%] w-[450px] h-[450px] smoke-glow bg-pink-500/10 blur-[100px]"
        />
        <motion.div
           animate={{ x: [0, -30, 40, 0], y: [0, 35, -25, 0], scale: [1, 0.9, 1.15, 1] }}
           transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
           className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] smoke-glow bg-purple-500/10 blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[10px] font-pixel text-primary tracking-tighter bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            WHO_AM_I
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-6 tracking-tight">
            PASSIONATE ABOUT <span className="gold-text italic block md:inline pr-2">INTELLIGENCE</span>
          </h2>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-8 glass-card rounded-[2.5rem] p-8 max-w-3xl mx-auto border-2 border-white/20 shadow-2xl relative group overflow-hidden"
          >
             {/* Floating PNG Asset Box equivalent */}
             <motion.div animate={{ rotate: 10, y: [0,-10,0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -top-6 -left-6 opacity-30">
                <div className="w-20 h-20 rounded-[1.5rem] rotate-12 flex items-center justify-center border-4 border-white/40 shadow-xl" style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}>
                   <Sparkles className="w-10 h-10 text-white" />
                </div>
             </motion.div>

             <motion.div animate={{ rotate: -15, y: [0,-15,0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }} className="absolute -bottom-10 -right-6 opacity-30">
                <div className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-white/40 shadow-xl" style={{ background: "linear-gradient(135deg, #3b82f6, #06b6d4)" }}>
                   <Star className="w-12 h-12 text-white fill-current" />
                </div>
             </motion.div>

             <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium relative z-10">
               <span className="text-primary font-black font-silkscreen text-2xl mr-2">"</span>
               I am an <span className="text-foreground font-black">innovative leader</span> who understands real-world problems and identifies where AI can be applied effectively. 
               <span className="text-purple-500 font-bold"> Creative, analytical, and solution-oriented</span> — I build intelligent systems and act as a light AI consultant, helping translate problems into impactful AI solutions.
               <span className="text-primary font-black font-silkscreen text-2xl ml-2">"</span>
             </p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {traits.map((trait, i) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", bounce: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="glass-card rounded-[2.5rem] p-8 border-2 border-white/10 hover:border-white/40 transition-all duration-300 group shadow-lg flex flex-col items-center text-center cursor-default bg-white/5"
            >
              <div 
                 className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-6 shadow-xl group-hover:rotate-12 group-hover:scale-110 transition-transform duration-500"
                 style={{ background: trait.bgGradient }}
              >
                <trait.icon className="w-8 h-8 text-white drop-shadow-md" />
              </div>
              <h3 className="font-black text-lg xl:text-xl mb-3 group-hover:text-primary transition-colors">{trait.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">{trait.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
