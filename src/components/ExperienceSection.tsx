import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrainCircuit, Leaf, Mic, Calendar, MapPin, Sparkles, LayoutList, Palette } from "lucide-react";

const experiences = [
  {
    id: "notion-productivity",
    company: "Personal Productivity",
    role: "Notion Architect & Time Planner",
    date: "Continuous",
    location: "Workspace",
    image: "/asset/exp_notion.png",
    color: "#f59e0b", // amber
    bgGradient: "linear-gradient(135deg, #fbbf24, #ea580c)",
    description: [
      "Merancang ruang kerja produktivitas (Second Brain) di Notion untuk mengatur kalender akademis dan melacak kebiasaan (habit) harian.",
      "Menyusun kerangka Timeline riset AI dan timeline proyek aplikasi agar selalu tereksekusi rapi sesuai target.",
      "Membangun ekosistem database terintegrasi yang menyimpan sekumpulan resource materi belajar, ide inovasi, dan jejak progres koding secara terpusat."
    ],
  },
  {
    id: "creative-artist",
    company: "Creative Design & Arts",
    role: "Visual Artist & UI Designer",
    date: "Life-long Passion",
    location: "Digital Space",
    image: "/asset/exp_artist.png",
    color: "#ec4899", // pink
    bgGradient: "linear-gradient(135deg, #ec4899, #8b5cf6)",
    description: [
      "Mengeksplorasi garis keturunan (bloodline) seni secara mendalam melalui menggambar manual dan melukis (seni terapan) dengan teknik estetika tingkat tinggi.",
      "Menguasai penuh Colour Theory dan psikologi warna untuk menciptakan harmoni visual yang unik, cute, aesthetic, dan membangkitkan emosi.",
      "Menerapkan insting seni organik ke dunia digital (Figma & Canva) melalui UI/UX Web Design dan perancangan Design System pixel-perfect."
    ],
  },
  {
    id: "ai-coordinator",
    company: "Sistem Informasi",
    role: "Koordinator — Sistem Cerdas",
    date: "Sedang Berlangsung",
    location: "Campus",
    image: "/asset/exp_ai.png",
    color: "#a855f7", // purple
    bgGradient: "linear-gradient(135deg, #a855f7, #3b82f6)",
    description: [
      "Bertanggung jawab atas penjadwalan rutin kelas dan distribusi silabus untuk mata kuliah Sistem Cerdas.",
      "Bertindak sebagai jembatan informasi utama yang sigap mencatat dan meneruskan intisari materi dari pengampu kepada seluruh mahasiswa kelas.",
      "Mendukung progres belajar kelas secara kolaboratif, yang sukses berkontribusi pada peningkatan median nilai rata-rata rekan sekelas secara positif."
    ],
  },
  {
    id: "biology-peer",
    company: "Kelas Biologi",
    role: "Course Coordinator & Tutor",
    date: "2022 - 2023",
    location: "High School",
    image: "/asset/exp_biology.png",
    color: "#22c55e", // green
    bgGradient: "linear-gradient(135deg, #22c55e, #06b6d4)",
    description: [
      "Secara aktif berkolaborasi dengan guru mata pelajaran untuk merumuskan teknik simulasi pembelajaran Biologi agar lebih mudah dipahami siswa.",
      "Membangun dan memimpin forum belajar ekstra (Peer Tutoring) sebelum jadwal ujian dimulai guna membongkar konsep biologis yang dirasa rumit.",
      "Diberi tingkat kepercayaan penuh untuk sesekali menggantikan peran guru mengajar utuh di depan kelas, termasuk membawakan pemaparan kisi-kisi krusial penentu ujian."
    ],
  },
  {
    id: "english-club",
    company: "English Club",
    role: "Pemateri Inti & Organizer",
    date: "2022 - 2023",
    location: "High School",
    image: "/asset/exp_english.png",
    color: "#f97316", // orange
    bgGradient: "linear-gradient(135deg, #f97316, #ec4899)",
    description: [
      "Menghidupkan atmosfer ekskul bahasa Inggris dengan mengemas kurikulum Public Speaking layaknya sebuah Game yang seru untuk dieksplorasi.",
      "Menjadi penggerak utama suksesnya latihan debat antar-sekolah secara inklusif, rutin mengelola dan menjaga retensi 50+ peserta mendaftar agar tetap aktif.",
      "Memainkan peran sebagai pembicara kunci (Core Speaker) yang sukses mendorong rasa percaya diri, keberanian public speaking, serta kebersamaan erat antar siswa."
    ],
  },
];

const ExperienceSection = () => {
  const [activeId, setActiveId] = useState(experiences[0].id);

  const activeExp = experiences.find((e) => e.id === activeId)!;

  return (
    <section id="experience" className="py-24 relative overflow-hidden pixel-grid">
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-pixel text-slate-500 tracking-widest bg-white px-4 py-2 rounded-xl border-2 border-slate-200 shadow-[2px_2px_0px_#e2e8f0]">
            MY_JOURNEY.EXE
          </span>
          <h2 className="text-4xl md:text-6xl font-black mt-8 tracking-tight relative inline-block text-slate-800">
            MY <span className="text-transparent bg-clip-text italic block md:inline pr-2" style={{ backgroundImage: "linear-gradient(to right, #6366f1, #ec4899, #f59e0b)" }}>EXPERIENCE</span>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-16 opacity-50">
               <Sparkles className="w-12 h-12 text-yellow-400 fill-yellow-400" />
            </motion.div>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col items-center relative">
          
          {/* Top Filter Buttons / Tabs (Cute Pixel UI) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 w-full relative z-20">
            {experiences.map((exp) => (
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={`relative px-4 py-3 md:px-5 md:py-3.5 rounded-2xl font-bold text-xs md:text-sm transition-all duration-300 flex items-center gap-3 border-[3px] overflow-hidden ${
                  activeId === exp.id
                    ? "bg-white z-10"
                    : "bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-500"
                }`}
                style={activeId === exp.id ? { 
                  borderColor: exp.color, 
                  boxShadow: `4px 4px 0px ${exp.color}`,
                  color: exp.color
                } : {}}
              >
                <div className={`shrink-0 relative w-8 h-8 md:w-10 md:h-10 rounded-lg border-2 overflow-hidden ${activeId === exp.id ? 'border-slate-900 shadow-[2px_2px_0_rgba(0,0,0,1)] scale-110' : 'border-transparent'}`} style={{ background: exp.color }}>
                  <img src={exp.image} alt={exp.company} className="w-full h-full object-cover mix-blend-screen" />
                </div>
                <span className="hidden sm:inline-block max-w-[150px] truncate text-left">{exp.company}</span>
              </motion.button>
            ))}
          </div>

          {/* Bottom Card Content (Cute Colorful Pixel Motivation Style) */}
          <div className="w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                className="w-full relative bg-white rounded-[2.5rem] p-6 md:p-12 border-[4px] flex flex-col group overflow-hidden"
                style={{ 
                  borderColor: activeExp.color, 
                  boxShadow: `8px 8px 0px ${activeExp.color}` 
                }}
              >
                
                {/* Background Subtle Color Glow Overlay */}
                <div 
                  className="absolute inset-0 opacity-[0.03] rounded-[2.5rem] pointer-events-none"
                  style={{ background: activeExp.bgGradient }}
                />

                {/* Card Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-10 relative z-10 border-b-[3px] border-slate-100 pb-8">
                   
                   <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      {/* Huge Pixel Avatar generated image */}
                      <motion.div 
                        initial={{ rotate: -10, scale: 0.5 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", bounce: 0.6 }}
                        className="w-24 h-24 md:w-32 md:h-32 shrink-0 rounded-[1.5rem] overflow-hidden border-4 border-slate-900 shadow-[6px_6px_0px_rgba(0,0,0,1)] group-hover:-translate-y-2 transition-transform duration-300"
                        style={{ background: activeExp.color }}
                      >
                         <img src={activeExp.image} alt={activeExp.company} className="w-[120%] h-[120%] -ml-[10%] -mt-[10%] object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 mix-blend-screen" />
                      </motion.div>
                      
                      {/* Titles */}
                      <div>
                         <h3 className="text-3xl md:text-4xl font-black mb-3 tracking-tight transition-colors duration-300 text-slate-800">
                            {activeExp.company}
                         </h3>
                         
                         <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border-[3px] bg-white text-sm md:text-base font-black tracking-wide shadow-[3px_3px_0_rgba(0,0,0,0.1)]" style={{ borderColor: activeExp.color, color: activeExp.color }}>
                            <div className="w-2.5 h-2.5 rounded-full animate-pulse border border-slate-900" style={{ background: activeExp.color }}/>
                            {activeExp.role}
                         </div>
                      </div>
                   </div>
                   
                   {/* Info tags */}
                   <div className="flex flex-row md:flex-col flex-wrap gap-4 text-xs md:text-sm font-bold bg-slate-50 border-[3px] border-slate-200 p-5 rounded-2xl shadow-inner shrink-0">
                      <div className="flex items-center gap-3 text-slate-700">
                         <div className="p-1.5 rounded-lg bg-white border-2 border-slate-200 shadow-sm">
                           <Calendar className="w-4 h-4" style={{ color: activeExp.color }} /> 
                         </div>
                         <span>{activeExp.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-slate-700">
                         <div className="p-1.5 rounded-lg bg-white border-2 border-slate-200 shadow-sm">
                           <MapPin className="w-4 h-4" style={{ color: activeExp.color }} /> 
                         </div>
                         <span className="font-pixel text-[10px] uppercase pt-1">{activeExp.location}</span>
                      </div>
                   </div>

                </div>

                {/* Bullet Points */}
                <div className="space-y-4 md:space-y-5 relative z-10 w-full">
                   {activeExp.description.map((point, index) => (
                      <motion.div 
                         key={index}
                         initial={{ opacity: 0, x: -20 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.1 + (index * 0.1), type: "spring" }}
                         className="flex items-start gap-4 p-5 rounded-2xl border-[3px] border-transparent hover:border-slate-200 hover:bg-slate-50 transition-colors group/point"
                      >
                         <div className="shrink-0 mt-1.5">
                            <motion.div 
                              whileHover={{ scale: 1.2, rotate: 90 }}
                              className="w-4 h-4 md:w-5 md:h-5 rounded-md border-[3px] shadow-[2px_2px_0_rgba(0,0,0,0.2)] flex items-center justify-center transition-transform" 
                              style={{ borderColor: activeExp.color, background: "#fff" }} 
                            >
                               <div className="w-1.5 h-1.5 rounded-sm" style={{ background: activeExp.color }} />
                            </motion.div>
                         </div>
                         <p className="text-slate-600 font-semibold leading-relaxed transition-colors text-sm md:text-base pt-0.5">
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
