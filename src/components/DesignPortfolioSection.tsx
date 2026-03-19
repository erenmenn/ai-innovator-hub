import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Palette, PenTool, Monitor, Brush, Sparkles, ExternalLink, Heart, X, ChevronLeft, ChevronRight, Image } from "lucide-react";

interface DesignWork {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: typeof Palette;
  accent: string;
  gradient: string;
  badge: string;
  asset: string;
  images: string[];  // slideshow images
  imageFit?: "contain" | "cover";
}

const designWorks: DesignWork[] = [
  {
    title: "EcoLink UI/UX Dashboard",
    subtitle: "Figma · Design System · Web Dashboard",
    description:
      "A pixel-perfect UI/UX design for a professional environmental management dashboard. Built on deep hierarchical information architecture and modern design systems, focusing on clarity, data visualization, and accessibility.",
    tags: ["Figma", "Web Design", "UI/UX", "Dashboard"],
    icon: Monitor,
    accent: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    badge: "WEB DESIGN",
    asset: "/asset/web_design/web0.png",
    images: [
      "/asset/web_design/web0.png",
      "/asset/web_design/web1.png",
      "/asset/web_design/web2.png",
      "/asset/web_design/web3.png",
      "/asset/web_design/web4.png",
      "/asset/web_design/web5.png"
    ],
  },
  {
    title: "Colour Theory & Branding Kit",
    subtitle: "Canva · Brand Guidelines · Poster Design",
    description:
      "Brand identity and poster design leveraging deep knowledge of colour harmonies — split-complementary, triadic, and monochromatic palettes — to craft memorable visual experiences with branding kits like Satu Tani and creative visual layouts.",
    tags: ["Canva", "Branding", "Colour Harmony", "Poster Design"],
    icon: Palette,
    accent: "#f43f5e",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
    badge: "GRAPHIC DESIGN",
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
      "/asset/poster/wallpaper_tab.png"
    ],
  },
  {
    title: "Bloodline Fine Art & Illustration",
    subtitle: "Manual Painting · Sketching · Line Art",
    description:
      "A personal collection rooted in artistic heritage — manual illustration, detailed line art, acrylic and watercolour paintings. Each piece reflects deep sensitivity to form, contrast, and colour emotion, carrying forward a legacy of artistic instinct.",
    tags: ["Melukis", "Manual Art", "Seni Terapan", "Illustration"],
    icon: Brush,
    accent: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #d946ef)",
    badge: "FINE ART",
    asset: "/asset/art/WhatsApp Image 2026-03-19 at 23.52.35.jpeg",
    images: [
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.35.jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.36 (1).jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.36.jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.37 (1).jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.37.jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.38 (1).jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.38 (2).jpeg",
      "/asset/art/WhatsApp Image 2026-03-19 at 23.52.38.jpeg"
    ],
    imageFit: "cover",
  },
];

// ── Image Slideshow Modal ──────────────────────────────────────────────────────
const DesignModal = ({ work, onClose }: { work: DesignWork; onClose: () => void }) => {
  const [idx, setIdx] = useState(0);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((p) => (p - 1 + work.images.length) % work.images.length);
  };
  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIdx((p) => (p + 1) % work.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

      <motion.div
        initial={{ scale: 0.85, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.85, y: 40, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl border-4 border-slate-100"
      >
        {/* Top bar */}
        <div
          className="flex items-center justify-between px-7 py-4 text-white"
          style={{ background: work.gradient }}
        >
          <div className="flex items-center gap-3">
            <work.icon className="w-5 h-5" />
            <span className="font-pixel text-[10px] tracking-widest uppercase">{work.badge}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-pixel opacity-70">
              {idx + 1} / {work.images.length}
            </span>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Slide area */}
        <div className="relative h-72 md:h-96 bg-slate-50 group overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={idx}
              src={work.images[idx]}
              alt={`${work.title} slide ${idx + 1}`}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 w-full h-full ${work.imageFit === 'cover' ? 'object-cover' : 'object-contain p-6'}`}
            />
          </AnimatePresence>

          {/* Prev / Next Arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center hover:border-slate-400 hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center hover:border-slate-400 hover:scale-110 transition-all opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {work.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className="w-2.5 h-2.5 rounded-full border-2 border-white transition-all"
                style={{ background: i === idx ? work.accent : "rgba(255,255,255,0.4)" }}
              />
            ))}
          </div>
        </div>

        {/* Info footer */}
        <div className="p-7 space-y-4">
          <div>
            <h3 className="font-black text-xl text-slate-800">{work.title}</h3>
            <p className="text-[10px] font-pixel text-slate-400 uppercase tracking-widest mt-0.5">{work.subtitle}</p>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{work.description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {work.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-pixel px-3 py-1.5 rounded-xl border-2 uppercase tracking-widest text-white"
                style={{ background: work.accent, borderColor: work.accent }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Main Section ───────────────────────────────────────────────────────────────
const DesignPortfolioSection = () => {
  const [selected, setSelected] = useState<DesignWork | null>(null);

  return (
    <section id="design" className="py-28 relative overflow-hidden bg-slate-50/50">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] bg-indigo-500/10 animate-pulse" />
        <div className="absolute top-1/2 right-[-10%] w-[600px] h-[600px] rounded-full blur-[150px] bg-fuchsia-500/10" />
        <div className="absolute bottom-[-10%] left-[10%] w-[450px] h-[450px] rounded-full blur-[130px] bg-rose-500/10 animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Floating Icons with subtle float animation */}
        <motion.img 
            src="/asset/love.png" 
            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-[15%] w-12 h-12 opacity-30 select-none" 
            alt="" 
        />
        <motion.img 
            src="/asset/sparkle.png" 
            animate={{ y: [0, 20, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-40 left-[10%] w-14 h-14 opacity-30 select-none" 
            alt="" 
        />
        <motion.img 
            src="/asset/bintang.png" 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-[40%] left-[5%] w-10 h-10 opacity-20 select-none" 
            alt="" 
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border-2 border-indigo-200 shadow-[4px_4px_0px_rgba(99,102,241,0.2)] rounded-2xl mb-6">
            <Sparkles className="w-4 h-4 text-indigo-500 fill-indigo-500/20" />
            <span className="text-[10px] font-pixel text-indigo-600 tracking-widest uppercase">CREATIVE_UNIVERSE</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-black tracking-tight leading-none">
            DESIGN{" "}
            <span className="text-transparent bg-clip-text italic pr-3" style={{ backgroundImage: "linear-gradient(to right, #6366f1, #d946ef, #fb7185)" }}>
              PORTFOLIO
            </span>
          </h2>
          <div className="h-1.5 w-32 bg-indigo-500/20 mx-auto mt-6 rounded-full overflow-hidden">
             <motion.div 
                initial={{ x: "-100%" }}
                whileInView={{ x: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="h-full w-full bg-indigo-500/60" 
             />
          </div>
          <p className="text-slate-500 text-sm mt-8 font-medium max-w-lg mx-auto leading-relaxed">
            A fusion of code and creativity — exploring digital aesthetics through color theory, 
            interactive systems, and purely manual artistic instinct.
          </p>
        </motion.div>

        {/* Horizontal Cards */}
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
            {designWorks.map((work, i) => (
              <motion.div
                key={work.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onClick={() => setSelected(work)}
                className={`group relative flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} bg-white rounded-[2rem] border-2 border-slate-100 hover:border-slate-200 cursor-pointer transition-all duration-500 overflow-hidden`}
                style={{ boxShadow: `10px 10px 0px ${work.accent}15` }}
                whileHover={{ y: -8, boxShadow: `15px 15px 0px ${work.accent}25` }}
              >
                {/* Full-width Cover Image */}
                <div className="relative z-10 w-full md:w-64 min-h-[220px] shrink-0 overflow-hidden border-b-4 md:border-b-0 md:border-r-4 border-slate-50">
                  <img
                    src={work.asset}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Overlay on hover only */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center backdrop-blur-[1px]">
                     <div className="bg-white/20 border border-white/40 rounded-2xl px-4 py-2 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                       <Image className="w-4 h-4 text-white" />
                       <span className="text-[10px] font-pixel text-white">VIEW GALLERY</span>
                     </div>
                  </div>

                  {/* Badge top-left */}
                  <span className="absolute top-4 left-4 z-20 text-[8px] font-pixel text-white px-3 py-2 rounded-xl border border-white/20 tracking-widest shadow-xl" style={{ background: work.gradient }}>
                    {work.badge}
                  </span>
                </div>

              {/* Text Body */}
              <div className="flex flex-col justify-between p-8 md:p-10 flex-1 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-black text-2xl text-slate-800 leading-tight">{work.title}</h3>
                      <p className="text-[10px] font-pixel text-slate-400 uppercase tracking-widest mt-1.5">{work.subtitle}</p>
                    </div>
                    {/* Pixel Number Badge */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-pixel text-white text-xl border-2 border-white/50 shadow-lg shrink-0"
                      style={{ background: work.gradient }}
                    >
                      0{i + 1}
                    </div>
                  </div>
                  <p className="text-slate-600 text-[15px] leading-relaxed font-medium">{work.description}</p>
                </div>

                {/* Tags + CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-50">
                  <div className="flex flex-wrap gap-2.5">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-pixel px-4 py-2 rounded-xl border border-white/30 uppercase tracking-widest text-white shadow-sm"
                        style={{ background: work.gradient }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-[10px] font-pixel uppercase tracking-widest text-white px-6 py-3 rounded-xl border-2 border-white/30 shadow-lg hover:scale-105 transition-transform"
                    style={{ background: work.gradient }}
                  >
                    <Image className="w-3.5 h-3.5" /> VIEW GALLERY
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-20"
        >
          <div className="inline-flex items-center gap-3 bg-white border-2 border-fuchsia-200 shadow-[4px_4px_0px_#d946ef] px-8 py-4 rounded-2xl">
            <Sparkles className="w-4 h-4 text-fuchsia-500" />
            <span className="font-pixel text-[10px] text-fuchsia-600 tracking-widest uppercase">
              Crafted with colour theory &amp; artistic instinct
            </span>
            <Sparkles className="w-4 h-4 text-fuchsia-500" />
          </div>
        </motion.div>
      </div>

      {/* Slideshow Modal */}
      <AnimatePresence>
        {selected && <DesignModal work={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
};

export default DesignPortfolioSection;
