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

// ── Modal ─────────────────────────────────────────────────────────────────────
const DesignModal = ({ work, onClose }: { work: DesignWork; onClose: () => void }) => {
  const [idx, setIdx] = useState(0);
  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((p) => (p - 1 + work.images.length) % work.images.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setIdx((p) => (p + 1) % work.images.length); };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />
      <motion.div
        initial={{ scale: 0.88, y: 36, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.88, y: 36, opacity: 0 }}
        transition={{ type: "spring", bounce: 0.28, duration: 0.5 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl overflow-hidden shadow-2xl w-full max-w-2xl"
        style={{ border: `3px solid ${work.accent}20` }}
      >
        <div className="flex items-center justify-between px-7 py-4 text-white"
          style={{ background: `linear-gradient(135deg, ${work.gradFrom}, ${work.gradTo})` }}>
          <div className="flex items-center gap-3">
            <span className="text-2xl">{work.sticker}</span>
            <span className="font-pixel text-[10px] tracking-widest uppercase">{work.badge}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-pixel opacity-70">{idx + 1} / {work.images.length}</span>
            <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/20 border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="relative h-72 md:h-96 bg-slate-50 group overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img key={idx} src={work.images[idx]} alt={`slide ${idx + 1}`}
              initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -60, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 w-full h-full ${work.imageFit === "cover" ? "object-cover" : "object-contain p-6"}`} />
          </AnimatePresence>
          <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
            <ChevronLeft className="w-5 h-5 text-slate-700" />
          </button>
          <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center hover:scale-110 transition-all opacity-0 group-hover:opacity-100">
            <ChevronRight className="w-5 h-5 text-slate-700" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {work.images.map((_, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                className="w-2.5 h-2.5 rounded-full border-2 border-white transition-all"
                style={{ background: i === idx ? work.accent : "rgba(255,255,255,0.4)" }} />
            ))}
          </div>
        </div>
        <div className="p-7 space-y-4">
          <div>
            <h3 className="font-black text-xl text-slate-800">{work.title}</h3>
            <p className="text-[10px] font-pixel text-slate-400 uppercase tracking-widest mt-0.5">{work.subtitle}</p>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{work.description}</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {work.tags.map((tag) => (
              <span key={tag} className="text-[9px] font-pixel px-3 py-1.5 rounded-xl text-white tracking-widest"
                style={{ background: `linear-gradient(135deg, ${work.gradFrom}, ${work.gradTo})` }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ── Main ──────────────────────────────────────────────────────────────────────
const DesignPortfolioSection = () => {
  const [selected, setSelected] = useState<DesignWork | null>(null);

  return (
    <section id="design" className="py-28 relative overflow-hidden pixel-grid">
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] rounded-full blur-[120px] bg-indigo-300/12 animate-pulse" />
        <div className="absolute bottom-[5%] right-[-8%] w-[450px] h-[450px] rounded-full blur-[130px] bg-rose-300/10" />
        {/* Floating cute stickers */}
        <motion.img src="/asset/love.png" alt="" aria-hidden
          animate={{ y: [0, -12, 0], rotate: [-5, 5, -5] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-28 right-[14%] w-11 h-11 opacity-30 select-none pointer-events-none drop-shadow-lg" />
        <motion.img src="/asset/sparkle.png" alt="" aria-hidden
          animate={{ rotate: [0, 360] }} transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-[8%] w-10 h-10 opacity-25 select-none pointer-events-none drop-shadow-lg" />
        <motion.img src="/asset/bintang.png" alt="" aria-hidden
          animate={{ y: [0, 14, 0], scale: [1, 1.15, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 right-[5%] w-8 h-8 opacity-20 select-none pointer-events-none drop-shadow-lg" />
      </div>

      <div className="container mx-auto px-6 relative">

        {/* ── Header — cute style ── */}
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          {/* Cute pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 border-2 border-white shadow-[4px_4px_0px_rgba(99,102,241,0.2)] bg-white/90">
            <span className="text-lg">✨</span>
            <span className="text-[9px] font-pixel text-indigo-500 tracking-widest uppercase">creative works</span>
            <span className="text-lg">🎨</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight leading-none">
            Design{" "}
            <span className="text-transparent bg-clip-text italic pr-3"
              style={{ backgroundImage: "linear-gradient(to right, #6366f1, #d946ef, #fb7185)" }}>
              Portfolio
            </span>
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-sm mx-auto leading-relaxed">
            Where code meets fine art ✦ branding, UI systems & hand-crafted illustrations
          </p>
        </motion.div>

        {/* ── Cards — cute sticker style ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {designWorks.map((work, i) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 40, rotate: i === 1 ? 0 : i === 0 ? -1 : 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: i === 1 ? 0 : i === 0 ? -1 : 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              onClick={() => setSelected(work)}
              whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
              className="relative cursor-pointer group"
            >
              {/* Card */}
              <div
                className="relative rounded-3xl overflow-hidden bg-white"
                style={{
                  border: `3px solid ${work.accent}25`,
                  boxShadow: `6px 8px 0px ${work.accent}30, 0 2px 20px ${work.accent}12`
                }}
              >
                {/* Image — uniform height */}
                <div className="relative w-full h-52 overflow-hidden">
                  <img src={work.asset} alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700" />
                  {/* Soft color tint */}
                  <div className="absolute inset-0 opacity-15 group-hover:opacity-30 transition-opacity duration-400"
                    style={{ background: `linear-gradient(135deg, ${work.gradFrom}, ${work.gradTo})`, mixBlendMode: "multiply" }} />
                  {/* "Click to view" on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-all duration-300">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 flex items-center gap-2 shadow-lg">
                      <ImageIcon className="w-4 h-4" style={{ color: work.accent }} />
                      <span className="font-pixel text-[9px] uppercase tracking-widest" style={{ color: work.accent }}>
                        View Gallery ({work.images.length})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  {/* Badge row — cute sticker style */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-[8px] font-pixel px-3 py-1.5 rounded-full border-2 font-bold tracking-widest"
                      style={{ color: work.accent, borderColor: `${work.accent}30`, backgroundColor: work.badgeBg }}
                    >
                      {work.sticker} {work.badge}
                    </span>
                    <span className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black"
                      style={{ background: `linear-gradient(135deg, ${work.gradFrom}, ${work.gradTo})` }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Gradient accent line */}
                  <div className="w-8 h-1 rounded-full mb-3" style={{ background: `linear-gradient(90deg, ${work.gradFrom}, ${work.gradTo})` }} />

                  <h3 className="font-black text-slate-800 text-base leading-snug mb-1">{work.title}</h3>
                  <p className="text-[10px] font-pixel text-slate-400 uppercase tracking-widest mb-3">{work.subtitle}</p>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{work.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {work.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-pixel px-2.5 py-1 rounded-lg text-white tracking-widest"
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
