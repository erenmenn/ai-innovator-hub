import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Palette, Monitor, Brush, Sparkles, X, ChevronLeft, ChevronRight, Heart, Camera, Wand2, Image as ImageIcon } from "lucide-react";

interface DesignWork {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: typeof Palette;
  accent: string;
  gradFrom: string;
  gradTo: string;
  badge: string;
  badgeBg: string;
  asset: string;
  images: string[];
  imageFit?: "contain" | "cover";
  sticker: string; // emoji sticker
}

const designWorks: DesignWork[] = [
  {
    title: "EcoLink UI/UX Dashboard",
    subtitle: "Figma · Design System · Web Dashboard",
    description: "A pixel-perfect UI/UX design for a professional environmental management dashboard. Focusing on clarity, data visualization, and accessibility.",
    tags: ["Figma", "UI/UX", "Dashboard"],
    icon: Monitor,
    accent: "#6366f1",
    gradFrom: "#6366f1",
    gradTo: "#8b5cf6",
    badge: "WEB DESIGN",
    badgeBg: "#ede9fe",
    sticker: "🖥️",
    asset: "/asset/web_design/web0.png",
    images: [
      "/asset/web_design/web0.png",
      "/asset/web_design/web1.png",
      "/asset/web_design/web2.png",
      "/asset/web_design/web3.png",
      "/asset/web_design/web4.png",
      "/asset/web_design/web5.png",
    ],
  },
  {
    title: "Colour Theory & Branding Kit",
    subtitle: "Canva · Brand Guidelines · Poster Design",
    description: "Brand identity and poster design leveraging colour harmonies — triadic, split-complementary, monochromatic — to craft memorable visual experiences.",
    tags: ["Canva", "Branding", "Colour Theory"],
    icon: Palette,
    accent: "#f43f5e",
    gradFrom: "#f43f5e",
    gradTo: "#f97316",
    badge: "GRAPHIC DESIGN",
    badgeBg: "#fff1f2",
    sticker: "🎨",
    imageFit: "cover",
    asset: "/asset/poster/logo_satutani.png",
    images: [
      "/asset/poster/logo_satutani.png",
      "/asset/poster/wa_main.jpeg",
      "/asset/poster/wa_1.jpeg",
      "/asset/poster/wa_2.jpeg",
      "/asset/poster/wa_3.jpeg",
      "/asset/poster/wa_4.jpeg",
      "/asset/poster/wa_5.jpeg",
      "/asset/poster/screenshot_704.png",
      "/asset/poster/wallpaper_tab.png",
    ],
  },
  {
    title: "Bloodline Fine Art & Illustration",
    subtitle: "Manual Painting · Sketching · Line Art",
    description: "A personal collection rooted in artistic heritage — manual illustration, line art, acrylic and watercolour paintings, carrying forward a legacy of artistic instinct.",
    tags: ["Fine Art", "Illustration", "Painting"],
    icon: Brush,
    accent: "#8b5cf6",
    gradFrom: "#8b5cf6",
    gradTo: "#d946ef",
    badge: "FINE ART",
    badgeBg: "#f5f3ff",
    sticker: "🖌️",
    imageFit: "cover",
    asset: "/asset/art/WhatsApp Image 2026-03-19 at 23.52.35.jpeg",
    images: [
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.35.jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.36 (1).jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.36.jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.37 (1).jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.37.jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.38 (1).jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.38 (2).jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.38.jpeg",
    ],
  },
];

// ── Elegant Modal with Dynamic Background & Fullscreen Zoom ────────────────────────
const DesignModal = ({ work, onClose }: { work: DesignWork; onClose: () => void }) => {
  const [idx, setIdx] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((p) => (p - 1 + work.images.length) % work.images.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((p) => (p + 1) % work.images.length); };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-[500] flex items-center justify-center p-4 md:p-8" 
        onClick={onClose}
      >
        {/* Simple lightweight dark backdrop */}
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-all duration-300" />

        <motion.div
          initial={{ scale: 0.95, y: 10, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 10, opacity: 0 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-5xl bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-white/60 flex flex-col overflow-hidden max-h-[90vh] z-10"
        >
          {/* Header Strip */}
          <div className="relative flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 md:px-8 md:py-5 border-b border-slate-100 bg-white">
            <div className="absolute inset-0 opacity-[0.05]" style={{ background: `linear-gradient(90deg, ${work.gradFrom}, transparent)` }} />
            <div className="relative flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-white text-2xl shadow-sm shrink-0"
                style={{ background: `linear-gradient(135deg, ${work.gradFrom}, ${work.gradTo})` }}>
                <work.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="font-extrabold text-slate-800 text-sm sm:text-lg leading-tight truncate">{work.title}</h3>
                <p className="text-[9px] sm:text-[10px] font-pixel text-slate-500 uppercase tracking-widest mt-1">
                  {idx + 1} of {work.images.length} • {work.badge}
                </p>
              </div>
            </div>
            <button onClick={onClose} className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors shrink-0 ml-2">
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Fixed Height Image Display — Lightweight Static Background */}
          <div className="relative flex-1 min-h-[250px] sm:min-h-[350px] md:min-h-[450px] group flex items-center justify-center overflow-hidden"
               style={{ background: `linear-gradient(135deg, ${work.gradFrom}10, ${work.gradTo}10)` }}>
               
             {/* Static subtle glow instead of animated orbs */}
             <div className="absolute inset-0 opacity-30"
                style={{ background: `radial-gradient(circle at center, ${work.accent}40, transparent 70%)` }}
             />

             <div className="relative w-full h-full flex items-center justify-center p-3 sm:p-6 md:p-10 pointer-events-none z-10">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={idx}
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 1.02 }}
                   transition={{ duration: 0.2 }}
                   className="relative w-full h-full pointer-events-auto cursor-zoom-in flex items-center justify-center"
                   onClick={() => setIsFullscreen(true)}
                 >
                   <img 
                     src={work.images[idx]} 
                     alt="" 
                     className="max-w-full max-h-full w-auto h-auto object-contain mx-auto drop-shadow-xl rounded-lg"
                   />
                   {/* Hint for fullscreen */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
                     <div className="bg-white/95 text-slate-800 px-4 py-2 sm:px-6 sm:py-3 rounded-2xl text-[9px] sm:text-[10px] font-pixel uppercase tracking-widest flex items-center gap-2 shadow-xl border border-slate-100 scale-95 hover:scale-100 transition-transform">
                       <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: work.accent }} /> Click to Enlarge
                     </div>
                   </div>
                 </motion.div>
               </AnimatePresence>
             </div>

             {/* Nav Arrows */}
             <button onClick={prev} className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform border border-slate-100 z-20 text-slate-800">
               <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
             </button>
             <button onClick={next} className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform border border-slate-100 z-20 text-slate-800">
               <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
             </button>
          </div>

          {/* Footer Info & Progress */}
          <div className="relative z-20 px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 bg-white border-t border-slate-100 flex flex-col md:flex-row gap-4 sm:gap-6 items-center">
             <div className="flex-1 text-center md:text-left">
               <p className="text-slate-600 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                 {work.description}
               </p>
             </div>
             {/* Simple Progress Dots */}
             <div className="flex gap-2 bg-slate-50 p-2 rounded-full border border-slate-100 flex-wrap justify-center">
               {work.images.map((_, i) => (
                 <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                   className="transition-all duration-300 rounded-full h-2"
                   style={{ 
                     width: i === idx ? 24 : 8, 
                     backgroundColor: i === idx ? work.accent : "#cbd5e1" 
                   }}
                 />
               ))}
             </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Fullscreen High-Fidelity Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[600] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsFullscreen(false)}
          >
            <motion.button 
              className="absolute top-8 right-8 w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={() => setIsFullscreen(false)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={work.images[idx]} 
              className="max-w-full max-h-full object-contain shadow-2xl rounded-xl" 
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 text-white/80 font-pixel text-[10px] tracking-widest uppercase px-6 py-2.5 rounded-full border border-white/20">
              Original View • {idx + 1} / {work.images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// ── Main ──────────────────────────────────────────────────────────────────────
const DesignPortfolioSection = () => {
  const [selected, setSelected] = useState<DesignWork | null>(null);

  return (
    <section id="design" className="py-16 sm:py-24 relative overflow-hidden pixel-grid">
      {/* Ambient blobs (Static for performance) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[120px] bg-indigo-300/10" />
        <div className="absolute bottom-[5%] right-[-8%] w-[450px] h-[450px] rounded-full blur-[130px] bg-rose-300/08" />
        {/* Static cute stickers */}
        <img src="/asset/love.png" alt="" aria-hidden
          className="hidden sm:block absolute top-28 right-[14%] w-11 h-11 opacity-20 select-none pointer-events-none drop-shadow-lg" />
        <img src="/asset/sparkle.png" alt="" aria-hidden
          className="hidden sm:block absolute bottom-32 left-[8%] w-10 h-10 opacity-15 select-none pointer-events-none drop-shadow-lg" />
        <img src="/asset/bintang.png" alt="" aria-hidden
          className="hidden sm:block absolute top-1/2 right-[5%] w-8 h-8 opacity-15 select-none pointer-events-none drop-shadow-lg" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">

        {/* ── Header — cute style ── */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-pink-400/50 text-white font-extrabold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(236,72,153,0.5)] mb-6 transition-all cursor-default"
            style={{ background: "linear-gradient(135deg,#ec4899,#f43f5e)" }}>
            <span className="bg-white/20 px-2 py-0.5 rounded-lg text-white">04</span> DESIGN
          </div>
          <h2 className="text-[2.2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black tracking-tighter leading-[0.9] text-slate-900 uppercase">
            <span className="block drop-shadow-sm">DESIGN</span>
            <em className="font-playfair italic font-medium lowercase tracking-normal text-transparent bg-clip-text text-[2.6rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] ml-2 sm:ml-8 md:ml-16 leading-none block pb-4 pt-1 -mb-3"
              style={{ backgroundImage: "linear-gradient(to right, #6366f1, #d946ef, #fb7185)" }}>
              portfolio.
            </em>
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-sm mx-auto leading-relaxed">
            Where code meets fine art ✦ branding, UI systems & hand-crafted illustrations
          </p>
        </motion.div>

        {/* ── Cards — cute sticker style (2-by-2 on mobile, 3-col on desktop) ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-8 max-w-5xl mx-auto">
          {designWorks.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(work)}
              whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
              className="relative cursor-pointer group"
            >
              {/* Card */}
              <div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white h-full flex flex-col justify-between"
                style={{
                  border: `2.5px solid ${work.accent}25`,
                  boxShadow: `4px 6px 0px ${work.accent}30, 0 2px 20px ${work.accent}12`
                }}
              >
                {/* Image — uniform height */}
                <div className="relative w-full h-32 sm:h-52 overflow-hidden shrink-0">
                  <img src={work.asset} alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700" />
                  {/* Soft color tint */}
                  <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-400"
                    style={{ background: `linear-gradient(135deg, ${work.gradFrom}, ${work.gradTo})`, mixBlendMode: "multiply" }} />
                  {/* "Click to view" on hover */}
                  <div className="absolute inset-0 hidden sm:flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-lg">
                      <ImageIcon className="w-4 h-4" style={{ color: work.accent }} />
                      <span className="font-pixel text-[9px] uppercase tracking-widest" style={{ color: work.accent }}>
                        View Gallery ({work.images.length})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Badge row — cute sticker style */}
                    <div className="flex items-center justify-between mb-2 sm:mb-3 gap-1">
                      <span
                        className="text-[7px] sm:text-[8px] font-pixel px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border sm:border-2 font-bold tracking-wider sm:tracking-widest truncate"
                        style={{ color: work.accent, borderColor: `${work.accent}30`, backgroundColor: work.badgeBg }}
                      >
                        {work.sticker} {work.badge}
                      </span>
                      <span className="w-5 h-5 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-white text-[9px] sm:text-xs font-black shrink-0"
                        style={{ background: `linear-gradient(135deg, ${work.gradFrom}, ${work.gradTo})` }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Gradient accent line */}
                    <div className="w-6 sm:w-8 h-1 rounded-full mb-2 sm:mb-3" style={{ background: `linear-gradient(90deg, ${work.gradFrom}, ${work.gradTo})` }} />

                    <h3 className="font-black text-slate-800 text-xs sm:text-base leading-snug mb-0.5 sm:mb-1 line-clamp-2">{work.title}</h3>
                    <p className="text-[8px] sm:text-[10px] font-pixel text-slate-400 uppercase tracking-wider sm:tracking-widest mb-1.5 sm:mb-3 truncate">{work.subtitle}</p>
                    <p className="text-[10px] sm:text-xs text-slate-500 leading-snug sm:leading-relaxed line-clamp-2">{work.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-2 sm:mt-3">
                    {work.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[7.5px] sm:text-[9px] font-pixel px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg text-white tracking-wider sm:tracking-widest"
                        style={{ background: `linear-gradient(135deg, ${work.gradFrom}cc, ${work.gradTo}cc)` }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Cute floating heart on card — shows on hover */}
              <motion.div
                className="absolute -top-4 -right-3 z-20 pointer-events-none"
                initial={{ scale: 0, rotate: 15 }}
                whileInView={{ scale: 1, rotate: 15 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center shadow-lg border-2 border-white"
                  style={{ background: `linear-gradient(135deg, ${work.gradFrom}, ${work.gradTo})` }}>
                  <Heart className="w-4 h-4 text-white fill-white" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom cute stamp */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex justify-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur border-2 border-fuchsia-200 shadow-[4px_4px_0px_#f0abfc] px-7 py-3.5 rounded-2xl">
            <span className="text-lg">🎨</span>
            <span className="font-pixel text-[9px] text-fuchsia-600 tracking-widest uppercase">
              crafted with colour theory &amp; artistic instinct
            </span>
            <span className="text-lg">✨</span>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <DesignModal work={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default DesignPortfolioSection;
