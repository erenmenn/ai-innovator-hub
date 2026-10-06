import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Target, Users, Lightbulb, BrainCircuit, LayoutTemplate, Sparkles,
  Send, Bot, User as UserIcon,
} from "lucide-react";

/* ─── Chat Script ─── */
const chatScript = [
  {
    user: "Gimana cara kamu kerja kalau ada masalah kompleks?",
    bot:  "Aku break down masalahnya dulu jadi bagian kecil, cari root cause-nya, lalu rancang solusi yang terukur. Fokus ke impact nyata. 🎯",
  },
  {
    user: "Peran kamu di tim biasanya apa?",
    bot:  "Aku sering jadi Leader & Project Designer — bangun visi tim, atur workflow, dan pastiin semua berjalan dari konsep sampai eksekusi. 👑",
  },
  {
    user: "Seberapa dalam kamu paham AI?",
    bot:  "Aku udah implement NLP, computer vision, dan LLM pipelines. Prinsipku: AI harus solve masalah nyata, bukan hanya terlihat keren. 🚀",
  },
];

const traits = [
  { icon: Target,        label: "Problem Solving",   color: "#f43f5e" },
  { icon: Users,         label: "Leadership",         color: "#6366f1" },
  { icon: Lightbulb,     label: "Creative Thinking",  color: "#f59e0b" },
  { icon: BrainCircuit,  label: "Analytical",         color: "#8b5cf6" },
  { icon: LayoutTemplate,label: "Project Design",     color: "#10b981" },
  { icon: Sparkles,      label: "AI Solutions",       color: "#ec4899" },
];

/* ─── Typing Dots ─── */
function TypingDots() {
  return (
    <div className="flex items-end gap-2 mb-2">
      <div className="w-7 h-7 rounded-full bg-violet-100 flex items-center justify-center">
        <Bot className="w-3.5 h-3.5 text-violet-500" />
      </div>
      <div className="px-3 py-2.5 rounded-2xl rounded-bl-sm bg-white border border-slate-100 shadow-sm">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map(i => (
            <motion.div key={i}
              className="w-1.5 h-1.5 rounded-full bg-violet-400"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── ChatBot ─── */
function ChatBot() {
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([]);
  const [step, setStep]         = useState(0);
  const [typing, setTyping]     = useState(false);
  const [input, setInput]       = useState("");
  const messagesContainerRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setMessages([{ role: "bot", text: "Hai! 👋 Tanya aku tentang cara kerja, skill, atau pengalaman di AI." }]);
    }, 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, typing]);

  const send = () => {
    if (step >= chatScript.length || typing) return;
    const q = chatScript[step];
    setMessages(p => [...p, { role: "user", text: input.trim() || q.user }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(p => [...p, { role: "bot", text: q.bot }]);
      setStep(s => s + 1);
    }, 1100 + Math.random() * 500);
  };

  const suggestion = step < chatScript.length ? chatScript[step].user : null;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-slate-100">
        <div className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)" }}>
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800 leading-none">Chat with Emir</p>
          <div className="flex items-center gap-1 mt-0.5">
            <motion.span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"
              animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <span className="text-[10px] text-slate-400 font-medium">online</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-0 min-h-0 bg-slate-50/60">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              className={`flex items-end gap-2 mb-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${
                msg.role === "bot" ? "bg-violet-100" : "bg-slate-100"
              }`}>
                {msg.role === "bot"
                  ? <Bot className="w-3.5 h-3.5 text-violet-500" />
                  : <UserIcon className="w-3.5 h-3.5 text-slate-500" />}
              </div>
              <div className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed font-medium
                ${msg.role === "user"
                  ? "text-white rounded-br-sm"
                  : "text-slate-700 bg-white border border-slate-100 rounded-bl-sm shadow-sm"
                }`}
                style={msg.role === "user" ? {
                  background: "linear-gradient(135deg,#6366f1,#a855f7)",
                } : {}}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {typing && <TypingDots />}
        <div ref={bottomRef} />
      </div>

      {/* Suggestion */}
      <AnimatePresence>
        {suggestion && !typing && (
          <motion.div key={step}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="px-3 pt-2 pb-1 bg-white border-t border-slate-100"
          >
            <p className="text-[9px] font-semibold text-violet-400 uppercase tracking-widest mb-1.5">Saran pertanyaan</p>
            <button onClick={send}
              className="w-full text-left text-[12px] text-slate-600 font-medium px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:border-violet-300 hover:bg-violet-50 transition-all"
            >
              {suggestion}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input */}
      <div className="flex gap-2 px-3 py-3 bg-white border-t border-slate-100">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder={step < chatScript.length ? "Ketik pesan..." : "Selesai 🎉"}
          disabled={step >= chatScript.length}
          className="flex-1 text-[13px] px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:border-violet-300 placeholder:text-slate-300 font-medium transition-colors"
        />
        <motion.button whileTap={{ scale: 0.9 }} onClick={send}
          disabled={step >= chatScript.length || typing}
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white disabled:opacity-30"
          style={{ background: "linear-gradient(135deg,#6366f1,#a855f7)" }}
        >
          <Send className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden pixel-grid">

    {/* Subtle bg blobs */}
    <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-[120px] opacity-20"
        style={{ background: "radial-gradient(circle,#8b5cf6,transparent)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-[100px] opacity-15"
        style={{ background: "radial-gradient(circle,#3b82f6,transparent)" }} />
    </div>

    <div className="container mx-auto px-6 relative z-10">

      {/* Badge */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-amber-300/50 text-white font-extrabold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(245,158,11,0.5)] transition-all cursor-default"
          style={{ background: "linear-gradient(135deg,#f59e0b,#ef4444)" }}>
          <span className="bg-white/20 px-2 py-0.5 rounded-lg text-white">01</span> ABOUT ME
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid lg:grid-cols-[1fr_360px] gap-10 lg:gap-16 items-start max-w-6xl mx-auto">

        {/* ── LEFT ── */}
        <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-8 md:space-y-10"
        >
          {/* Heading */}
          <div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900">
              Passionate<br />
              <em className="not-italic bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg,#6366f1,#a855f7,#ec4899)" }}>
                about
              </em><br />
              <span className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg,#0ea5e9,#6366f1)" }}>
                intelligence.
              </span>
            </h2>
          </div>

          {/* Quote */}
          <motion.div whileHover={{ y: -3 }}
            className="border-l-4 pl-4 sm:pl-5 py-1"
            style={{ borderColor: "#8b5cf6" }}
          >
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
              Kita hidup di era AI, dan kuncinya adalah{" "}
              <span className="font-bold text-emerald-600">adaptasi</span>.
              AI bukan penghancur karir — melainkan{" "}
              <span className="font-bold text-slate-900">partner kolaborasi</span>.
              Manusia perlu menjadi{" "}
              <span className="font-bold bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg,#6366f1,#ec4899)" }}>
                AI Evaluator
              </span>{" "}
              — sutradara yang mengarahkan kecerdasan buatan untuk dampak nyata.
            </p>
          </motion.div>

          {/* Trait list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {traits.map((t, i) => (
              <motion.div key={t.label}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-white border border-slate-100 shadow-sm cursor-default"
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${t.color}15` }}>
                  <t.icon className="w-4 h-4" style={{ color: t.color }} />
                </div>
                <span className="text-[13px] font-semibold text-slate-700">{t.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── RIGHT: Chat ── */}
        <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl"
            style={{ height: 480 }}>
            <ChatBot />
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutSection;
