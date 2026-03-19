import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Leaf, Mic, Calendar, MapPin, Sparkles, LayoutList } from "lucide-react";

const experiences = [
  {
    id: "ai-coordinator",
    company: "Jurusan Informatika",
    role: "Academic Coordinator — Sistem Cerdas",
    date: "University Period",
    location: "Campus",
    icon: BrainCircuit,
    bgGradient: "linear-gradient(135deg, #a855f7, #3b82f6)",
    description: [
      "Directed academic scheduling and organized coursework for the 'Sistem Cerdas' (Artificial Intelligence) class.",
      "Served as the primary liaison between the professor and students to ensure seamless educational flow.",
      "Guided peers through complex AI concepts and helped manage overall class progression and practical tasks.",
      "Developed and distributed structured learning modules and supplementary materials, resulting in a significant improvement in the overall class median score."
    ],
  },
  {
    id: "english-club",
    company: "English Club",
    role: "Core Speaker & Event Organizer",
    date: "High School Period",
    location: "High School",
    icon: Mic,
    bgGradient: "linear-gradient(135deg, #f97316, #ec4899)",
    description: [
      "Spearheaded the planning and execution of club activities, language workshops, and weekly speaking sessions.",
      "Delivered engaging presentations as a core speaker to significantly improve members' English capabilities.",
      "Fostered a collaborative environment to build student confidence in public speaking and active debate.",
      "Successfully organized cross-school debate tournaments and managed over 50+ active members, focusing on building an inclusive environment for beginners."
    ],
  },
  {
    id: "biology-peer",
    company: "Biology Class",
    role: "Course Coordinator & Peer Tutor",
    date: "High School Period",
    location: "High School",
    icon: Leaf,
    bgGradient: "linear-gradient(135deg, #22c55e, #06b6d4)",
    description: [
      "Collaborated directly with the biology teacher to seamlessly plan classroom schedules, practical sessions, and learning materials.",
      "Acted as the designated class representative to manage the daily operational flow of the biology course.",
      "Tutored classmates to quickly understand complex biological concepts and supported them in completing academic tasks.",
      "Ensured smooth communication between the student body and faculty, organizing interactive group study sessions before major examinations."
    ],
  },
  {
    id: "notion-productivity",
    company: "Personal Productivity",
    role: "Notion Architect & Time Planner",
    date: "Continuous",
    location: "Workspace Workspace",
    icon: LayoutList,
    bgGradient: "linear-gradient(135deg, #fbbf24, #ea580c)",
    description: [
      "Engineered comprehensive Notion workspaces to meticulously organize study materials, track personal habits, and manage project timelines.",
      "Implemented effective productivity methodologies to optimize daily academic routines and hyper-focus on skill building.",
      "Structured detailed roadmaps and personal databases acting as a 'second brain' for holistic project and life management.",
      "Constantly refined the system to integrate advanced AI-learning roadmaps, creating an interconnected web of notes, resources, and milestone trackers."
    ],
  },
];

const ExperienceSection = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);

  const activeExp = experiences.find((e) => e.id === activeId)!;

  return (
    <section id="experience" className="py-24 relative overflow-hidden pixel-grid">
      
      {/* ── Bubbly Background Clouds ── */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <motion.div
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -30, 0], scale: [1, 1.1, 0.9, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[10%] w-[500px] h-[500px] smoke-glow bg-blue-500/10 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, 40, -40, 0], y: [0, -40, 40, 0], scale: [1, 0.9, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] smoke-glow bg-amber-500/10 blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-pixel text-primary tracking-tighter bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            MY_JOURNEY
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-6 tracking-tight relative inline-block">
            MY <span className="gold-text italic block md:inline pr-2">EXPERIENCE</span>
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -left-16 opacity-30">
               <Sparkles className="w-12 h-12 text-pink-400" />
            </motion.div>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col items-center relative">
          
          {/* Top Filter Buttons / Tabs (Bubbly UI) */}
          <div className="flex flex-wrap justify-center gap-4 mb-14 w-full relative z-20">
            {experiences.map((exp) => (
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`relative px-6 py-4 rounded-[2rem] font-bold text-sm transition-all duration-300 flex items-center gap-3 border-4 overflow-hidden ${
                  activeId === exp.id
                    ? "text-white border-white/50 shadow-[0_15px_30px_-5px_rgba(var(--primary),0.5)] z-10"
                    : "glass-card text-muted-foreground border-white/10 hover:border-white/30"
                }`}
                style={activeId === exp.id ? { background: exp.bgGradient, color: "#fff" } : {}}
              >
                {/* Glow effect on active button */}
                {activeId === exp.id && (
                   <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }} className="absolute inset-0 opacity-20 pointer-events-none select-none">
                      <Sparkles className="w-full h-full text-white" />
                   </motion.div>
                )}
                
                <div className={`p-2 rounded-xl transition-colors ${activeId === exp.id ? 'bg-black/20 text-white' : 'bg-primary/10 text-primary'}`}>
                  <exp.icon className="w-5 h-5" />
                </div>
                {exp.company}
              </motion.button>
            ))}
          </div>

          {/* Bottom Card Content (Super Interactive Display) */}
          <div className="w-full relative min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                className="absolute inset-0 w-full glass-card rounded-[3rem] p-8 md:p-12 border-4 border-white/20 shadow-2xl overflow-hidden group"
              >
                {/* Floating decorative gradient inside the card */}
                <motion.div 
                  initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} transition={{ duration: 1 }}
                  className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-[80px]" style={{ background: activeExp.bgGradient }} 
                />
                
                {/* Card Header */}
                <div className="flex flex-col md:flex-row lg:items-center justify-between gap-6 mb-10 relative z-10 border-b border-white/10 pb-8">
                   <div className="flex items-start md:items-center gap-6">
                      <motion.div 
                        initial={{ rotate: -45, scale: 0.5 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", bounce: 0.6 }}
                        className="w-20 h-20 rounded-[1.5rem] flex items-center justify-center shadow-2xl shrink-0 border-2 border-white/40"
                        style={{ background: activeExp.bgGradient }}
                      >
                         <activeExp.icon className="w-10 h-10 text-white drop-shadow-md" />
                      </motion.div>
                      <div>
                         <h3 className="text-3xl md:text-3xl font-black bg-clip-text text-transparent mb-1" style={{ background: activeExp.bgGradient, WebkitBackgroundClip: "text" }}>
                            {activeExp.company}
                         </h3>
                         <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 font-bold text-foreground text-sm tracking-tight">
                            {activeExp.role}
                         </div>
                      </div>
                   </div>
                   
                   {/* Info tags */}
                   <div className="flex flex-col gap-3 text-sm font-semibold text-muted-foreground bg-black/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-inner">
                      <div className="flex items-center gap-3">
                         <Calendar className="w-4 h-4 text-primary" /> 
                         <span className="font-silkscreen text-[10px] tracking-widest text-foreground">{activeExp.date}</span>
                      </div>
                      <div className="flex items-center gap-3">
                         <MapPin className="w-4 h-4 text-primary" /> 
                         <span className="font-pixel text-[9px] uppercase">{activeExp.location}</span>
                      </div>
                   </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-4 relative z-10 w-full">
                   {activeExp.description.map((point, index) => (
                      <motion.div 
                         key={index}
                         initial={{ opacity: 0, x: -20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.1 + (index * 0.1), type: "spring" }}
                         className="flex gap-4 p-5 rounded-2xl hover:bg-white/10 transition-colors border border-transparent hover:border-white/10 group/point"
                      >
                         <div className="mt-1">
                            <motion.div 
                              whileHover={{ scale: 1.5 }}
                              className="w-3 h-3 rounded-full mt-1.5 shadow-sm border border-white/50" 
                              style={{ background: activeExp.bgGradient }} 
                            />
                         </div>
                         <p className="text-muted-foreground leading-relaxed font-medium group-hover/point:text-foreground transition-colors text-base">
                            {point}
                         </p>
                      </motion.div>
                   ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
