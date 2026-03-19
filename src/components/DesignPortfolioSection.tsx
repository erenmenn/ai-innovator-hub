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
}

const designWorks: DesignWork[] = [
  {
    title: "Aesthetic UI/UX Design System",
    subtitle: "Figma · Canva · Web Design",
    description:
      "A holistic digital product design built on colour psychology and pixel-perfect design systems. Every component tells a visual story — focused on emotion, harmony, and interaction.",
    tags: ["Figma", "Design System", "Colour Theory", "UI/UX"],
    icon: Monitor,
    accent: "#6366f1",
    gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    badge: "WEB DESIGN",
    asset: "/asset/box.png",
    images: ["/asset/box.png", "/asset/sparkle.png", "/asset/bintang.png"],
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
    title: "Fine Art & Illustration Portfolio",
    subtitle: "Seni Terapan · Painting · Sketching",
    description:
      "A personal collection rooted in bloodline artistry — manual illustration, detailed line art, acrylic & watercolour paintings reflecting deep sensitivity to form, contrast, and colour emotion.",
    tags: ["Melukis", "Drawing", "Seni Terapan", "Illustration"],
    icon: Brush,
    accent: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #d946ef)",
    badge: "FINE ART",
    asset: "/asset/bintang.png",
    images: ["/asset/bintang.png", "/asset/rocket.png", "/asset/love.png"],
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
              className="absolute inset-0 w-full h-full object-contain p-6"
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
    <section id="design" className="py-28 relative overflow-hidden pixel-grid">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none -z-10">

        <div className="absolute top-1/3 left-[5%] w-[400px] h-[400px] rounded-full blur-[130px] bg-pink-300/10" />
        <div className="absolute bottom-1/3 right-[5%] w-[400px] h-[400px] rounded-full blur-[130px] bg-violet-300/10" />
        <img src="/asset/love.png"    className="absolute top-16 right-24 w-10 h-10 opacity-20" alt="" />
        <img src="/asset/sparkle.png" className="absolute bottom-20 left-16 w-10 h-10 opacity-20" alt="" />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border-2 border-pink-300 shadow-[3px_3px_0px_#ec4899] rounded-xl mb-5">
            <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            <span className="text-[10px] font-pixel text-pink-600 tracking-widest uppercase">ART_BLOODLINE</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            DESIGN{" "}
            <span className="text-transparent bg-clip-text italic pr-2" style={{ backgroundImage: "linear-gradient(to right, #ec4899, #d946ef, #8b5cf6)" }}>
              PORTFOLIO
            </span>
          </h2>
          <p className="text-muted-foreground text-sm mt-3 font-medium max-w-md mx-auto">
            Where AI meets artistic bloodline — designs rooted in colour theory, aesthetic sensibility, and pure creativity.
          </p>
          <p className="text-[10px] font-pixel text-pink-400 tracking-widest uppercase mt-3">
            ✦ Click any card to view the gallery ✦
          </p>
        </motion.div>

        {/* Horizontal Cards */}
        <div className="flex flex-col gap-10 max-w-5xl mx-auto">
          {designWorks.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setSelected(work)}
              className={`group relative flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} bg-white rounded-3xl border-4 border-slate-100 hover:border-slate-200 cursor-pointer hover:-translate-y-1.5 transition-all duration-300 overflow-hidden`}
              style={{ boxShadow: "6px 6px 0px #e2e8f0" }}
            >
              {/* Coloured Side Panel */}
              <div
                className="relative w-full md:w-56 min-h-[180px] flex flex-col items-center justify-center gap-4 p-6 shrink-0"
                style={{ background: work.gradient }}
              >
                {/* Badge top-left */}
                <span className="absolute top-3 left-3 text-[8px] font-pixel text-white bg-black/30 px-2 py-1 rounded border border-white/20 tracking-widest">
                  {work.badge}
                </span>
                {/* Click hint */}
                <div className="absolute top-3 right-3 bg-white/20 border border-white/30 rounded-lg px-2 py-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Image className="w-3 h-3 text-white" />
                  <span className="text-[8px] font-pixel text-white">GALLERY</span>
                </div>
                {/* Asset floating image */}
                <img
                  src={work.asset}
                  alt=""
                  className="w-16 h-16 object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                />
                {/* Icon box */}
                <div className="w-14 h-14 bg-white/20 border-2 border-white/40 rounded-2xl flex items-center justify-center shadow-inner">
                  <work.icon className="w-7 h-7 text-white drop-shadow-md" />
                </div>
              </div>

              {/* Text Body */}
              <div className="flex flex-col justify-between p-7 md:p-9 flex-1 gap-5">
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-black text-xl text-slate-800 leading-tight">{work.title}</h3>
                      <p className="text-[10px] font-pixel text-slate-400 uppercase tracking-widest mt-1">{work.subtitle}</p>
                    </div>
                    {/* Pixel Number Badge */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center font-pixel text-white text-lg border-2 border-white/50 shadow-md shrink-0"
                      style={{ background: work.gradient }}
                    >
                      0{i + 1}
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{work.description}</p>
                </div>

                {/* Tags + CTA */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-pixel px-3 py-1.5 rounded-xl border-2 uppercase tracking-widest text-white"
                        style={{ background: work.accent + "cc", borderColor: work.accent }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-[10px] font-pixel uppercase tracking-widest text-white px-5 py-2.5 rounded-xl border-2 border-white/50 shadow-md"
                    style={{ background: work.accent }}
                  >
                    <Image className="w-3 h-3" /> VIEW GALLERY
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
