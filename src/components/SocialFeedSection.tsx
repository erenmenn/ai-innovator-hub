import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Instagram,
  Heart,
  MessageCircle,
  Share2,
  ExternalLink,
  Check,
  Bookmark,
  RefreshCw,
  Sparkle,
  Image as ImageIcon,
  Layers,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Play,
  Flame,
} from "lucide-react";
import { toast } from "sonner";

interface MetaPostChild {
  id: string;
  media_type: "IMAGE" | "VIDEO";
  media_url: string;
}

interface MetaPost {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "CAROUSEL_ALBUM" | "VIDEO";
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
  children?: {
    data: MetaPostChild[];
  };
}

const META_ACCESS_TOKEN =
  "IGAAUSoUPzlfZABZAGJtN2N6Q3Q3dFc3ZA0hodzV1UEliaTJZAalY3dUJYQ2J0N0NKMDVvOUJJTnRxblVEZAFJ2N211ZAVRFRmJIN1JzejlxYXBOMnNvTmpQYTFhcmgzN3RiejhIeEJfNWloTzNsc1QyRFU5WTh3WTlZAVGdCcEZAJRFlNYwZDZD";

const INSTAGRAM_GRAPH_URL = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,children{media_type,media_url}&limit=20&access_token=${META_ACCESS_TOKEN}`;

const SocialFeedSection = () => {
  const [posts, setPosts] = useState<MetaPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [likesCount, setLikesCount] = useState<Record<string, number>>({});
  const [bookmarkedPosts, setBookmarkedPosts] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // State navigasi slide per postingan
  const [slideIndices, setSlideIndices] = useState<Record<string, number>>({});

  const fetchInstagramFeed = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(INSTAGRAM_GRAPH_URL);
      if (!response.ok) throw new Error("Gagal mengambil data dari Instagram Graph API");
      const data = await response.json();
      if (data && data.data) {
        setPosts(data.data);

        const initialLikes: Record<string, number> = {};
        data.data.forEach((p: MetaPost, index: number) => {
          const fakeLike = 48 + ((index * 17) % 95);
          initialLikes[p.id] = fakeLike;
        });
        setLikesCount(initialLikes);
      }
    } catch (err: any) {
      console.error(err);
      setError("Tidak dapat memuat feed real-time saat ini.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramFeed();
  }, []);

  const toggleLike = (id: string) => {
    const isLiked = !likedPosts[id];
    setLikedPosts((prev) => ({ ...prev, [id]: isLiked }));
    setLikesCount((prev) => ({
      ...prev,
      [id]: isLiked ? (prev[id] || 0) + 1 : (prev[id] || 1) - 1,
    }));
    if (isLiked) {
      toast.success("❤️ Disukai!");
    }
  };

  const toggleBookmark = (id: string) => {
    const isBookmarked = !bookmarkedPosts[id];
    setBookmarkedPosts((prev) => ({ ...prev, [id]: isBookmarked }));
    toast.success(isBookmarked ? "Postingan disimpan ke bookmark!" : "Postingan dihapus dari bookmark.");
  };

  const handleCopyLink = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    toast.success("Link postingan berhasil disalin!");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatTime = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString("id-ID", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "Baru saja";
    }
  };

  const extractHashtags = (caption?: string) => {
    if (!caption) return [];
    const matches = caption.match(/#[a-zA-Z0-9_]+/g);
    return matches ? matches.slice(0, 3) : [];
  };

  const nextSlide = (postId: string, totalSlides: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSlideIndices((prev) => ({
      ...prev,
      [postId]: ((prev[postId] || 0) + 1) % totalSlides,
    }));
  };

  const prevSlide = (postId: string, totalSlides: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setSlideIndices((prev) => ({
      ...prev,
      [postId]: ((prev[postId] || 0) - 1 + totalSlides) % totalSlides,
    }));
  };

  return (
    <div id="social-feed" className="pt-4 sm:pt-6 pb-16 sm:pb-20 relative bg-transparent">
      {/* Subtle Ambient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[800px] h-[300px] sm:h-[500px] bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-amber-500/5 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none -z-10" />

      <div className="w-full relative">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-14">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-white font-extrabold text-[10px] sm:text-xs uppercase tracking-widest mb-4 sm:mb-5 shadow-[0_8px_25px_rgba(240,148,51,0.35)] border-2 border-white/40 cursor-default"
            style={{
              background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-300 animate-spin" />
            <span>INSTAGRAM LIVE FEED</span>
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300" />
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase"
          >
            <span className="text-slate-900 dark:text-white">CREATIVE</span>{" "}
            <span
              className="text-transparent bg-clip-text drop-shadow-sm"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #f09433 0%, #dc2743 45%, #bc1888 75%, #8b5cf6 100%)",
              }}
            >
              SOCIAL FEED
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto mt-2.5 sm:mt-4 font-medium px-2"
          >
            Aktivitas harian, eksplorasi Gemini AI, machine learning, dan momen kreatif langsung terhubung dari{" "}
            <strong className="text-pink-600 dark:text-pink-400 font-black">@emirzyah</strong>.
          </motion.p>
        </div>

        {/* Live Instagram Profile Header Banner — Fully Responsive Mobile & Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-14 rounded-3xl sm:rounded-[2.5rem] border-2 border-white/60 dark:border-slate-700/60 p-4 sm:p-6 md:p-8 shadow-2xl relative overflow-hidden backdrop-blur-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(255,245,252,0.95) 50%, rgba(255,251,235,0.93) 100%)",
            boxShadow:
              "0 8px 32px -8px rgba(220,39,67,0.12), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          {/* Subtle Decorative Background Accent */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-br from-pink-400/10 via-purple-400/8 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-5 sm:gap-7 relative z-10">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 w-full lg:w-auto text-center sm:text-left">
              {/* Responsive Profile Avatar with Glow Ring */}
              <div className="relative group shrink-0">
                <div
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full p-[3.5px] sm:p-[4px] shadow-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888, #8b5cf6)",
                    boxShadow: "0 10px 28px rgba(220,39,67,0.32)",
                  }}
                >
                  <img
                    src="https://cdn2.behold.pictures/NImjQ0kikgXIiY9UHL2kGqZf6LE3/17841407752096002/profile.webp"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/asset/profile_baru.jpg";
                    }}
                    alt="emirzyah"
                    className="w-full h-full rounded-full object-cover border-[3px] sm:border-4 border-white bg-slate-100"
                  />
                </div>
                <span
                  className="absolute bottom-0 right-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white"
                  style={{ background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)" }}
                >
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </div>

              {/* Bio & Colorful Pills */}
              <div className="space-y-2.5 sm:space-y-3 w-full">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-3">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                    emirzyah
                  </h3>
                  <span
                    className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-black text-white uppercase tracking-wider flex items-center gap-1 shadow-sm"
                    style={{ background: "linear-gradient(90deg, #10b981, #06b6d4)" }}
                  >
                    <Sparkle className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white text-white" />
                    <span>Official Live Account</span>
                  </span>
                </div>

                {/* Bio Pills */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5 sm:gap-2">
                  <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-xl text-[10px] sm:text-xs font-bold text-blue-700 bg-blue-100/90 border border-blue-200 shadow-2xs">
                    🧩 Google SA²⁶ <span className="font-semibold text-blue-950">@googleindonesia</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-xl text-[10px] sm:text-xs font-bold text-purple-700 bg-purple-100/90 border border-purple-200 shadow-2xs">
                    🎤 Gen AI leader ²⁶ <span className="font-semibold text-purple-950">@blockdev_org</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-xl text-[10px] sm:text-xs font-bold text-amber-800 bg-amber-100/90 border border-amber-200 shadow-2xs">
                    📚 Speaker Edufair ²⁶
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-xl text-[10px] sm:text-xs font-bold text-emerald-800 bg-emerald-100/90 border border-emerald-200 shadow-2xs">
                    🧀 Generative AI Engineer
                  </span>
                </div>

                {/* Counter Stats — 3 even columns on mobile, inline flex on desktop */}
                <div className="grid grid-cols-3 sm:flex items-center gap-2 sm:gap-4 pt-1 text-[11px] sm:text-xs font-bold text-slate-600">
                  <div className="px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-xl bg-white/85 border border-slate-200/80 shadow-2xs text-center">
                    <strong className="text-pink-600 text-xs sm:text-sm font-black block sm:inline sm:mr-1">
                      {posts.length || 12}
                    </strong>
                    <span>Kiriman</span>
                  </div>
                  <div className="px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-xl bg-white/85 border border-slate-200/80 shadow-2xs text-center">
                    <strong className="text-purple-600 text-xs sm:text-sm font-black block sm:inline sm:mr-1">
                      1.649
                    </strong>
                    <span>Pengikut</span>
                  </div>
                  <div className="px-2.5 sm:px-3 py-1.5 sm:py-1 rounded-xl bg-white/85 border border-slate-200/80 shadow-2xs text-center">
                    <strong className="text-blue-600 text-xs sm:text-sm font-black block sm:inline sm:mr-1">
                      1.090
                    </strong>
                    <span>Diikuti</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons — Side-by-side on mobile */}
            <div className="grid grid-cols-2 sm:flex lg:flex-col items-center gap-2.5 sm:gap-3 w-full lg:w-auto shrink-0">
              <a
                href="https://www.instagram.com/emirzyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 sm:px-7 py-3 sm:py-3.5 rounded-2xl text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-1.5 sm:gap-2.5 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/30"
                style={{
                  background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                  boxShadow: "0 10px 25px rgba(220,39,67,0.35)",
                }}
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span className="truncate">Follow @emirzyah</span>
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 hidden sm:inline shrink-0" />
              </a>

              <button
                onClick={fetchInstagramFeed}
                disabled={loading}
                className="w-full sm:w-auto px-4 sm:px-5 py-3 rounded-2xl text-[11px] sm:text-xs font-bold text-slate-800 bg-white hover:bg-slate-50 border-2 border-slate-200 shadow-md flex items-center justify-center gap-1.5 sm:gap-2 transition-all active:scale-95"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 shrink-0 ${
                    loading ? "animate-spin text-pink-500" : "text-slate-600"
                  }`}
                />
                <span className="truncate">{loading ? "Memuat..." : "Refresh Feed"}</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Loading Skeleton — 2 columns on mobile, 3 on lg */}
        {loading && posts.length === 0 && (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 md:gap-7 py-6 sm:py-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-2xl sm:rounded-[2rem] border-2 border-slate-100 bg-white p-2.5 sm:p-5 space-y-2.5 sm:space-y-4 animate-pulse shadow-md"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-7 h-7 sm:w-11 sm:h-11 rounded-full bg-slate-200 shrink-0" />
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="w-16 sm:w-24 h-2.5 sm:h-3.5 rounded bg-slate-200" />
                    <div className="w-12 sm:w-16 h-2 sm:h-2.5 rounded bg-slate-100" />
                  </div>
                </div>
                <div className="aspect-[4/5] rounded-xl sm:rounded-2xl bg-slate-100" />
                <div className="space-y-1.5">
                  <div className="w-full h-2.5 sm:h-3 rounded bg-slate-100" />
                  <div className="w-3/4 h-2.5 sm:h-3 rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && posts.length === 0 && (
          <div className="text-center py-10 p-6 sm:p-8 rounded-3xl border border-destructive/20 bg-destructive/5 max-w-lg mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-destructive mb-3">{error}</p>
            <button
              onClick={fetchInstagramFeed}
              className="px-6 py-2.5 rounded-xl text-xs font-bold bg-primary text-primary-foreground hover:opacity-90 transition-opacity shadow-md"
            >
              Coba Lagi
            </button>
          </div>
        )}

        {/* Real Live Feed Posts Grid — 2 Columns on Mobile ("2 postingan 2 postingan saat scroll"), 3 Columns on Desktop */}
        {posts.length > 0 && (
          <motion.div
            layout
            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 md:gap-7"
          >
            <AnimatePresence>
              {posts.map((post, idx) => {
                const isLiked = !likedPosts[post.id];
                const isBookmarked = !bookmarkedPosts[post.id];
                const currentLikes = likesCount[post.id] ?? 85;
                const hashtags = extractHashtags(post.caption);

                // Handling Media Slides untuk CAROUSEL_ALBUM
                const isCarousel =
                  post.media_type === "CAROUSEL_ALBUM" &&
                  post.children?.data &&
                  post.children.data.length > 0;
                const slides = isCarousel ? post.children!.data : [];
                const totalSlides = isCarousel ? slides.length : 1;
                const activeSlide = slideIndices[post.id] || 0;

                const currentMedia = isCarousel
                  ? slides[activeSlide]?.media_url
                  : post.media_url || post.thumbnail_url;

                const isCurrentVideo = isCarousel
                  ? slides[activeSlide]?.media_type === "VIDEO"
                  : post.media_type === "VIDEO";

                // Variasi warna aksen border atas kartu
                const gradientAccents = [
                  "linear-gradient(90deg, #f09433, #dc2743)",
                  "linear-gradient(90deg, #dc2743, #bc1888)",
                  "linear-gradient(90deg, #8b5cf6, #3b82f6)",
                  "linear-gradient(90deg, #06b6d4, #10b981)",
                  "linear-gradient(90deg, #f59e0b, #ef4444)",
                  "linear-gradient(90deg, #ec4899, #8b5cf6)",
                ];
                const cardAccent = gradientAccents[idx % gradientAccents.length];

                return (
                  <motion.div
                    layout
                    key={post.id}
                    initial={{ opacity: 0, scale: 0.95, y: 16 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -16 }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="flex flex-col rounded-2xl sm:rounded-[2rem] border sm:border-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 shadow-md hover:shadow-2xl group overflow-hidden hover:-translate-y-1"
                    style={{
                      boxShadow: "0 8px 24px -8px rgba(0,0,0,0.07)",
                    }}
                  >
                    {/* Top Vibrant Color Accent Line */}
                    <div className="h-1 sm:h-1.5 w-full shrink-0" style={{ background: cardAccent }} />

                    {/* Post Card Header — Compact on Mobile 2-Col */}
                    <div className="p-2 sm:p-4 flex items-center justify-between gap-1.5 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
                      <div className="flex items-center gap-1.5 sm:gap-3 min-w-0">
                        <div
                          className="w-6 h-6 sm:w-10 sm:h-10 rounded-full p-[1.5px] sm:p-[2.5px] shadow-xs shrink-0"
                          style={{ background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)" }}
                        >
                          <img
                            src="https://cdn2.behold.pictures/NImjQ0kikgXIiY9UHL2kGqZf6LE3/17841407752096002/profile.webp"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/asset/profile_baru.jpg";
                            }}
                            alt="emirzyah"
                            className="w-full h-full rounded-full object-cover border border-white"
                          />
                        </div>
                        <div className="min-w-0">
                          <h4 className="font-extrabold text-[10px] sm:text-xs text-slate-900 dark:text-white flex items-center gap-1 truncate">
                            <span className="truncate">emirzyah</span>
                            <Sparkle className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-pink-500 fill-pink-500 shrink-0" />
                          </h4>
                          <p className="text-[8px] sm:text-[10px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-0.5 sm:gap-1 truncate">
                            <Calendar className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-pink-500 shrink-0" />
                            <span className="truncate">{formatTime(post.timestamp)}</span>
                          </p>
                        </div>
                      </div>

                      {/* Media Type / Slide Indicator Badge */}
                      <div className="flex items-center gap-1 shrink-0">
                        {isCarousel && (
                          <span
                            className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-xl text-[8px] sm:text-[10px] font-black text-white shadow-2xs flex items-center gap-0.5 sm:gap-1"
                            style={{ background: "linear-gradient(135deg, #ec4899, #8b5cf6)" }}
                          >
                            <Layers className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                            <span>
                              {activeSlide + 1}/{totalSlides}
                            </span>
                          </span>
                        )}
                        {post.media_type === "VIDEO" && (
                          <span
                            className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-xl text-[8px] sm:text-[10px] font-black text-white shadow-2xs flex items-center gap-0.5 sm:gap-1"
                            style={{ background: "linear-gradient(135deg, #8b5cf6, #3b82f6)" }}
                          >
                            <Play className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white" />
                            <span className="hidden xs:inline">Video</span>
                          </span>
                        )}
                        <span
                          className="hidden sm:flex w-7 h-7 rounded-xl items-center justify-center text-white shadow-2xs"
                          style={{ background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)" }}
                        >
                          <Instagram className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    {/* Post Interactive Media & Carousel */}
                    <div className="relative aspect-[4/5] bg-slate-950 overflow-hidden group/media select-none">
                      {currentMedia ? (
                        isCurrentVideo ? (
                          <video
                            key={currentMedia}
                            src={currentMedia}
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                          />
                        ) : (
                          <img
                            key={currentMedia}
                            src={currentMedia}
                            alt={post.caption || "Instagram Post"}
                            className="w-full h-full object-cover transition-transform duration-500"
                            loading="lazy"
                          />
                        )
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                          <ImageIcon className="w-8 h-8 sm:w-12 sm:h-12 opacity-30" />
                        </div>
                      )}

                      {/* Carousel Controls */}
                      {isCarousel && totalSlides > 1 && (
                        <>
                          <button
                            onClick={(e) => prevSlide(post.id, totalSlides, e)}
                            className="absolute left-1.5 sm:left-2.5 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/65 hover:bg-pink-600 text-white backdrop-blur-md flex items-center justify-center shadow-lg transition-all active:scale-90 z-20"
                            aria-label="Slide Sebelumnya"
                          >
                            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>

                          <button
                            onClick={(e) => nextSlide(post.id, totalSlides, e)}
                            className="absolute right-1.5 sm:right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/65 hover:bg-pink-600 text-white backdrop-blur-md flex items-center justify-center shadow-lg transition-all active:scale-90 z-20"
                            aria-label="Slide Selanjutnya"
                          >
                            <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </button>

                          {/* Dots Indicator */}
                          <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 sm:gap-1.5 z-20 bg-black/60 backdrop-blur-md px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-white/20 max-w-[85%] overflow-hidden">
                            {slides.slice(0, 7).map((_, dotIdx) => (
                              <button
                                key={dotIdx}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setSlideIndices((prev) => ({ ...prev, [post.id]: dotIdx }));
                                }}
                                className={`h-1 sm:h-1.5 rounded-full transition-all shrink-0 ${
                                  dotIdx === activeSlide
                                    ? "bg-gradient-to-r from-pink-400 to-amber-300 w-3 sm:w-4"
                                    : "bg-white/60 w-1 sm:w-1.5"
                                }`}
                                aria-label={`Ke slide ${dotIdx + 1}`}
                              />
                            ))}
                          </div>
                        </>
                      )}

                      {/* Direct Link Overlay Badge */}
                      <a
                        href={post.permalink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-2 right-2 sm:top-3 sm:right-3 opacity-0 group-hover/media:opacity-100 transition-opacity duration-200 bg-black/75 hover:bg-pink-600 text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl backdrop-blur-md flex items-center gap-1 text-[9px] sm:text-[10px] font-black z-20 shadow-lg"
                      >
                        <span>Buka IG</span>
                        <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      </a>
                    </div>

                    {/* Post Caption & Content */}
                    <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between space-y-2 sm:space-y-3">
                      <div>
                        <p className="text-[10px] sm:text-xs text-slate-700 dark:text-slate-200 leading-snug sm:leading-relaxed line-clamp-2 sm:line-clamp-3 whitespace-pre-line font-medium">
                          {post.caption || "Momen seputar AI, ekosistem Google, dan creative coding."}
                        </p>

                        {/* Hashtags */}
                        {hashtags.length > 0 && (
                          <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-1.5 sm:mt-3">
                            {hashtags.slice(0, 2).map((tag, hIdx) => (
                              <span
                                key={hIdx}
                                className="text-[8px] sm:text-[10px] font-bold px-1.5 sm:px-2.5 py-0.5 rounded-md sm:rounded-lg bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-800 truncate max-w-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Post Interactive Footer — Compact on Mobile */}
                    <div className="p-2 px-2.5 sm:p-3.5 sm:px-5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 sm:gap-4">
                        {/* Like Action */}
                        <button
                          onClick={() => toggleLike(post.id)}
                          className={`flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold transition-all duration-200 hover:scale-110 active:scale-95 ${
                            isLiked ? "text-rose-500 font-black" : "text-slate-600 hover:text-rose-500"
                          }`}
                        >
                          <Heart
                            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${
                              isLiked ? "fill-rose-500 text-rose-500" : ""
                            }`}
                          />
                          <span>{currentLikes}</span>
                        </button>

                        {/* Open Post on Instagram */}
                        <a
                          href={post.permalink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-bold text-slate-600 hover:text-pink-600 transition-colors"
                          title="Komentar di Instagram"
                        >
                          <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          <span className="hidden sm:inline">Komentar</span>
                        </a>
                      </div>

                      <div className="flex items-center gap-0.5 sm:gap-2">
                        {/* Bookmark Button */}
                        <button
                          onClick={() => toggleBookmark(post.id)}
                          className={`p-1 sm:p-1.5 rounded-lg hover:bg-white transition-colors ${
                            isBookmarked ? "text-amber-500" : "text-slate-500 hover:text-slate-800"
                          }`}
                          title="Simpan postingan"
                        >
                          <Bookmark
                            className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                              isBookmarked ? "fill-amber-500" : ""
                            }`}
                          />
                        </button>

                        {/* Copy Link Button */}
                        <button
                          onClick={() => handleCopyLink(post.permalink, post.id)}
                          className="p-1 sm:p-1.5 rounded-lg hover:bg-white text-slate-500 hover:text-slate-800 transition-colors"
                          title="Salin tautan"
                        >
                          {copiedId === post.id ? (
                            <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-500" />
                          ) : (
                            <Share2 className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          )}
                        </button>

                        {/* Direct Instagram Link */}
                        <a
                          href={post.permalink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 sm:p-1.5 rounded-lg hover:bg-pink-50 text-pink-600 hover:text-pink-700 transition-colors"
                          title="Buka postingan asli di Instagram"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Instagram CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-16 text-center p-6 sm:p-8 md:p-10 rounded-3xl sm:rounded-[2.5rem] border-2 border-white shadow-2xl relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #fff1f2 0%, #ede9fe 50%, #e0f2fe 100%)",
            boxShadow: "0 25px 60px -15px rgba(139,92,246,0.25)",
          }}
        >
          <div className="max-w-md mx-auto space-y-2.5 sm:space-y-3 relative z-10">
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl mx-auto flex items-center justify-center text-white shadow-lg"
              style={{ background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)" }}
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <h4 className="font-black text-base sm:text-lg md:text-xl text-slate-900 tracking-tight">
              Ikuti Perjalanan &amp; Inovasi AI Saya ✨
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Dapatkan insight seputar Google Gemini AI, tips belajar NotebookLM, dan eksplorasi Machine Learning langsung di feed Instagram saya.
            </p>
            <div className="pt-2 sm:pt-3 flex justify-center">
              <a
                href="https://www.instagram.com/emirzyah/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl text-[11px] sm:text-xs font-black uppercase tracking-wider text-white shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all border border-white/30"
                style={{
                  background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)",
                  boxShadow: "0 10px 30px rgba(220,39,67,0.4)",
                }}
              >
                <Instagram className="w-4 h-4 shrink-0" />
                <span>Kunjungi @emirzyah di Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SocialFeedSection;
