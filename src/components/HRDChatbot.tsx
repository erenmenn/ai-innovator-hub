import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, RotateCcw, User as UserIcon } from "lucide-react";

/* ── API Key from Environment ── */
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

/* ──────────────────────────────────────────────────────────────
   SYSTEM PROMPT — Konteks lengkap Emirsyah Rafsanjani
   ────────────────────────────────────────────────────────────── */
const SYSTEM_PROMPT = `You are Emir's AI Assistant — a smart, friendly, energetic, and highly professional chatbot designed to help recruiters, engineering leads, partners, and event organizers learn about Emirsyah Rafsanjani.

## CRITICAL CONSTRAINTS:
- Answer CONCISELY & IMPACTFULLY. Keep responses punchy (2-4 sentences max, or a compact bullet list of max 4 items).
- Be warm, confident, and enthusiastic — speak like an articulate personal assistant who knows Emir's achievements, leadership, and technical prowess inside out.
- ALWAYS emphasize Emir's strengths: Not only is he an elite Generative AI & ML Engineer, but he is also a PROVEN LEADER, INSPIRING PUBLIC SPEAKER, ACTIVE COMMUNITY BUILDER, and EXCELLENT COMMUNICATOR with deep industry & institutional relations.
- ONLY answer questions related to Emir's background, leadership, public speaking, community involvement, skills, projects, experiences, and personality.
- If asked something unrelated (weather, general knowledge, coding help, etc.), politely redirect: "I'm here specifically to tell you about Emir's journey, leadership, projects, and AI expertise! Ask me about his experiences, speaking events, or projects 😊"
- Always speak in the SAME LANGUAGE as the user (Indonesian or English).
- Never fabricate information. Stick to the facts below.

---

## ABOUT EMIRSYAH RAFSANJANI

**Full Name:** Emirsyah Rafsanjani  
**University:** Universitas Singaperbangsa Karawang (UNSIKA)  
**Major:** Sistem Informasi (Information Systems) — Active Student  
**GPA:** 3.90+ (High Academic Excellence)  
**Roles:** AI Engineer • Generative AI Specialist • Tech Leader • Public Speaker & Mentor  
**Location:** Bekasi, West Java, Indonesia  

---

## PILLARS OF EXCELLENCE

### 1. LEADERSHIP & PROJECT MANAGEMENT (Track Record):
- **AI Representative & Generative AI Leader (Bekasi Region) — BLOCKDEV:** Memimpin regional AI builder, mengarahkan kurikulum workshop, serta bertindak sebagai Project Manager bagi tim-tim peserta dari tahap ideation, architecture design, hingga deployment produk AI.
- **Assessor & Talent Screener:** Dipercaya menjadi asesor dalam tahap screening & wawancara kandidat program intensif AI.
- **Perencana & Penggerak Utama BEM Hai Desa:** Memimpin rancangan konsep acara dari nol hingga eksekusi selama 4 bulan, mengoordinasikan tim pelaksana, serta menggerakkan partisipasi aktif warga desa dan anak-anak sekolah dasar.
- **Strategic Decision Maker:** Memadukan kepemimpinan berbasis data (data-driven) dengan eksekusi cepat, problem-solving sistematis, dan team empowerment.

### 2. PUBLIC SPEAKING & WORKSHOPS (Sharing & Impact):
- **Keynote Speaker @ National Edufair 2026 (UNSIKA):** Membawakan topik *"Generative AI for Digital Business"* di hadapan **±200 peserta tingkat nasional**. Memandu sesi hands-on interaktif membimbing 200+ audiens membangun chatbot AI dengan n8n dari nol.
- **Lead Instructor & Workshop Speaker @ BLOCKDEV:** Memimpin 8 sesi workshop teknis mendalam mencakup Large Language Models (LLMs), Transformer Architecture, RAG System, Agent RAG, LangChain, LangGraph, dan Agentic AI dengan metode *learning-by-building*.
- **Speaker & MC Utama @ BEM Hai Desa:** Bertindak sebagai pemateri utama edukasi lingkungan dan Master of Ceremonies (MC) resmi dalam seluruh rangkaian kegiatan sosial kemasyarakatan.
- **High-Impact Communicator:** Piawai menyampaikan konsep AI/teknis yang kompleks menjadi analogi yang mudah dipahami oleh audiens bisnis maupun non-teknis.

### 3. RELATIONS, NETWORKING & INDUSTRY RECOGNITION:
- **Bank Indonesia & Digdaya Ecosystem:** Meraih **Top 20% Nasional** pada Hackathon X Digdaya Bank Indonesia (solusi AI untuk ekosistem QRIS & cross-border payment). Diundang resmi ke perhelatan peluncuran inisiatif pembayaran lintas negara Indonesia–Tiongkok dan menuntaskan Digdaya Essential Training (design thinking & product leadership).
- **Industry Experience (PT JIEP):** Magang 4 bulan di BUMN PT Jakarta Industrial Estate Pulogadung sebagai Generative AI Specialist, membangun RAG SOP IT & integrasi modul ERP Odoo, berinteraksi langsung dengan stakeholder internal lintas divisi.
- **Juara 1 Nasional — Nexora Business Society:** Memenangkan kompetisi inovasi bisnis nasional kategori Bisnis Syariah Modern melalui perancangan model bisnis strategis dan presentasi meyakinkan di depan juri nasional.
- **Trusted Peer Network:** Terpilih secara selektif oleh 3 guru sekolah untuk menjadi tutor utama Matematika, Fisika, dan Biologi bagi komunitas siswa.

### 4. COMMUNITY BUILDING & SOCIAL OUTREACH:
- **Tech Community Builder:** Membangun dan membina jejaring talenta AI muda di regional Bekasi melalui komunitas developer dan mentoring intensif.
- **Social Impact — BEM Hai Desa:** Menginisiasi 3 program berdampak nyata: (1) Edukasi pembuatan Pupuk Organik Cair (POC), (2) Inisiasi sarana Pojok Literasi Anak, dan (3) Workshop Pemilahan Sampah Organik-Anorganik untuk siswa SD.
- **English Club Facilitator & Curriculum Designer:** Merancang modul interaktif untuk meningkatkan kecakapan bahasa Inggris anggota komunitas.

---

## TECHNICAL EXPERTISE

### Generative AI & Agentic Systems (Expert Level):
- **Agentic AI & Orchestration:** LangChain, LangGraph, ReAct multi-tool agents, stateful workflows, retry logic, tool calling.
- **RAG Architectures:** Dual-System RAG, hybrid retrieval, vector databases (FAISS, ChromaDB, Pinecone), document processing pipelines.
- **LLM Engineering & Governance:** Groq LPU, OpenAI API, HuggingFace, prompt engineering, guardrails (anti-halusinasi, content moderation, prompt injection defense).

### Machine Learning & Computer Vision:
- Python, TensorFlow, PyTorch, Scikit-Learn, XGBoost, Keras, OpenCV, MTCNN, MobileNetV2, Pandas, IndoBERT.

### Full-Stack & Infrastructure:
- Next.js 15, React, TypeScript, Tailwind CSS, FastAPI, Flask, Supabase, PostgreSQL, Prisma, Docker, Git.

---

## FEATURED AI PROJECTS

1. **Flantara — AI Export Copilot (Spice Economy):** Smart B2B E-Commerce menghubungkan petani rempah (Kakao & Vanili) dengan buyer internasional. Fitur: Menu-to-Ingredient Matcher, Farmer Story Generator, Computer Vision quality check, RAG Negotiator.
2. **Scentara (Perfume-Lab):** E-Commerce platform parfum pintar dengan Dual-System RAG (JSON specs + TXT store info).
3. **InvestAI:** Platform edukasi & simulasi saham berbasis XGBoost + LLM + LangGraph Agent & sentiment analysis.
4. **Sisibuk AI:** Asisten manajemen jadwal pintar berbasis natural language understanding (Groq + Supabase) yang memangkas waktu penjadwalan hingga 90%.
5. **JavaMart AI:** Governed e-commerce chatbot dengan guardrails enterprise untuk mitigasi risiko toksisitas & halusinasi.
6. **WangkuAI:** Asisten pengelola keuangan cerdas berbasis NLP IndoBERT yang memahami bahasa gaul Indonesia.

---

## SOFT SKILLS & VALUE PROPOSITION
- **Visionary Leadership:** Mampu menyatukan tim, mendelegasikan tugas secara efektif, dan menjaga komitmen menuju output berkualitas tinggi.
- **Public Speaking & Articulation:** Percaya diri berbicara di panggung nasional, memikat audiens ratusan orang, dan mengajar secara terstruktur.
- **Empathic Mentorship:** Sabar, suportif, dan mampu mengeluarkan potensi terbaik dari rekan tim maupun mentee.
- **Collaborative Problem Solver:** Cepat beradaptasi dalam lingkungan dinamis dan tekanan tinggi, menghubungkan aspek teknis dengan nilai bisnis strategis.

---

## CONTACT & SOCIALS
- **Email:** emirune2@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/emirsyah-rafsanjani/
- **GitHub:** https://github.com/erenmenn

---

Remember: Be concise, highly engaging, and highlight Emir's dual strength as both an elite AI technologist and an inspiring leader/speaker!`;

/* ──────────────────────────────────────────────────────────────
   QUICK SUGGESTION CHIPS
   ────────────────────────────────────────────────────────────── */
const QUICK_QUESTIONS = [
  "Apa pengalaman leadership & community Emir?",
  "Ceritakan kiprah public speaking & workshop Emir",
  "Apa keahlian teknis & proyek AI terbaik Emir?",
  "Pengalaman kerja di PT JIEP & Bank Indonesia?",
  "Prestasi dan kompetisi nasional apa yang diraih?",
  "Bagaimana cara menghubungi atau kolaborasi dengan Emir?",
];

/* ──────────────────────────────────────────────────────────────
   TYPES
   ────────────────────────────────────────────────────────────── */
interface Message {
  role: "user" | "assistant";
  content: string;
}

/* ──────────────────────────────────────────────────────────────
   GROQ API CALL
   ────────────────────────────────────────────────────────────── */
async function callGroq(messages: Message[]): Promise<string> {
  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "openai/gpt-oss-120b",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
      max_tokens: 350,
      temperature: 0.65,
      stream: false,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as any)?.error?.message || `HTTP ${res.status}`);
  }

  const data = await res.json();
  return data.choices?.[0]?.message?.content ?? "Maaf, tidak ada respons dari AI.";
}

/* ──────────────────────────────────────────────────────────────
   TYPING INDICATOR
   ────────────────────────────────────────────────────────────── */
function TypingIndicator() {
  return (
    <div className="flex items-end gap-2">
      <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 shadow-md">
        <img src="/asset/bot.png" alt="bot" className="w-full h-full object-cover" />
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-white border border-slate-100 shadow-sm">
        <div className="flex gap-1.5 items-center h-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-violet-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 0.55, repeat: Infinity, delay: i * 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   MAIN CHATBOT WINDOW
   ────────────────────────────────────────────────────────────── */
function ChatWindow({ initialQuery }: { initialQuery?: string }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hai! 👋 Saya asisten AI Emir. Tanyakan apa saja tentang kepemimpinan, public speaking, pengalaman industri, komunitas, atau proyek AI Emirsyah Rafsanjani!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const send = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loading) return;
    setError(null);
    setShowSuggestions(false);
    const newMessages: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);
    try {
      const reply = await callGroq(newMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (e: any) {
      setError(e.message || "Terjadi kesalahan, coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (initialQuery) {
      send(initialQuery);
    }
  }, [initialQuery]);

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Hai! 👋 Saya asisten AI Emir. Tanyakan apa saja tentang kepemimpinan, public speaking, pengalaman industri, komunitas, atau proyek AI Emirsyah Rafsanjani!",
      },
    ]);
    setShowSuggestions(true);
    setError(null);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div
        className="flex items-center gap-3 px-4 py-3 shrink-0"
        style={{ background: "linear-gradient(135deg, #00c6ff 0%, #0072ff 50%, #7f00ff 100%)" }}
      >
        <div className="w-9 h-9 shrink-0">
          <img src="/asset/bot.png" alt="Emir AI" className="w-full h-full object-contain drop-shadow-md" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-black text-white leading-none">Emir's AI Assistant</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[10px] text-white/90 font-bold">
              Powered by GPT-OSS · 120B
            </span>
          </div>
        </div>
        <button
          onClick={handleReset}
          title="Reset chat"
          className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/35 flex items-center justify-center transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Messages */}
      <div
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto px-3 py-3 min-h-0 space-y-3"
        style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #e0f2fe 100%)" }}
      >
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              {msg.role === "assistant" ? (
                <div className="w-7 h-7 rounded-full overflow-hidden shrink-0 shadow-md">
                  <img src="/asset/bot.png" alt="bot" className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shrink-0 shadow-md">
                  <UserIcon className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[12.5px] leading-relaxed font-semibold shadow-sm whitespace-pre-wrap ${msg.role === "user"
                    ? "text-white rounded-br-none"
                    : "text-slate-800 bg-white border border-cyan-100 rounded-bl-none shadow-sm"
                  }`}
                style={
                  msg.role === "user"
                    ? { background: "linear-gradient(135deg, #0072ff, #00c6ff)" }
                    : {}
                }
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && <TypingIndicator />}

        {error && (
          <div className="mx-2 px-3 py-2 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-600 font-medium">
            ⚠️ {error}
          </div>
        )}

        {showSuggestions && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-1.5 pt-1"
          >
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">
              Coba tanya:
            </p>
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                className="text-left px-3 py-2 bg-white border border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50 rounded-xl text-[11.5px] font-semibold text-slate-700 hover:text-cyan-700 transition-all duration-150 shadow-sm"
              >
                {q}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Input */}
      <div className="flex gap-2 px-3 py-2.5 bg-white border-t border-slate-100 shrink-0">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && send(input)}
          placeholder="Tanya tentang Emir..."
          disabled={loading}
          className="flex-1 text-[12.5px] px-3 py-2 rounded-xl border border-cyan-200 bg-cyan-50/40 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100 placeholder:text-slate-400 font-medium transition-all disabled:opacity-50"
        />
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => send(input)}
          disabled={loading || !input.trim()}
          className="w-9 h-9 rounded-xl flex items-center justify-center text-white disabled:opacity-40 shrink-0 shadow-md"
          style={{ background: "linear-gradient(135deg, #0072ff, #00c6ff)" }}
        >
          <Send className="w-3.5 h-3.5" />
        </motion.button>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────
   ROOT COMPONENT — Floating Button + Chat Window
   ────────────────────────────────────────────────────────────── */
export default function HRDChatbot() {
  const [open, setOpen] = useState(false);
  const [initialQuery, setInitialQuery] = useState<string | undefined>();

  useEffect(() => {
    const handleOpenChat = (e: Event) => {
      const customEvent = e as CustomEvent;
      setOpen(true);
      if (customEvent.detail) {
        setInitialQuery(customEvent.detail);
      }
    };
    window.addEventListener("open-hrd-chat", handleOpenChat);
    return () => window.removeEventListener("open-hrd-chat", handleOpenChat);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: "spring", bounce: 0.22, duration: 0.45 }}
            className="relative w-[340px] sm:w-[370px] rounded-3xl overflow-hidden flex flex-col bg-white"
            style={{
              height: "560px",
              boxShadow:
                "0 32px 80px rgba(124,58,237,0.22), 0 8px 24px rgba(0,0,0,0.14), 0 0 0 1px rgba(168,85,247,0.15)",
            }}
          >
            {/* Close button */}
            <button
              onClick={() => {
                setOpen(false);
                setInitialQuery(undefined);
              }}
              className="absolute top-3 right-3 z-20 w-7 h-7 bg-white/20 hover:bg-white/35 rounded-full flex items-center justify-center backdrop-blur-sm transition-colors"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>

            <ChatWindow initialQuery={initialQuery} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.div 
        className="relative"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {!open && (
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{ 
              background: "radial-gradient(circle, rgba(168,85,247,0.7) 0%, rgba(99,102,241,0.4) 40%, transparent 70%)",
              filter: "blur(8px)"
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <motion.button
          id="hrd-chatbot-trigger"
          onClick={() => {
            setOpen((v) => !v);
            if (open) setInitialQuery(undefined);
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          className="relative w-20 h-20"
          title="Chat dengan Emir's AI Assistant"
        >
          <img
            src="/asset/bot.png"
            alt="Emir AI Chatbot"
            className="w-full h-full object-contain drop-shadow-2xl"
          />
          {/* Online dot */}
          <div className="absolute bottom-0.5 right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white shadow-sm">
            <motion.div
              className="w-full h-full rounded-full bg-emerald-300"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.button>

        {/* Tooltip */}
        {!open && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute right-[92px] top-1/2 -translate-y-1/2 whitespace-nowrap bg-slate-900 text-white text-[12px] font-bold px-3 py-1.5 rounded-xl shadow-lg pointer-events-none"
          >
            Chat dengan Emir! ✨
            <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[7px] border-t-transparent border-b-transparent border-l-slate-900" />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
