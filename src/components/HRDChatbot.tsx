import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, RotateCcw, User as UserIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";

/* ── API Key from Environment ── */
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY || "";

/* ──────────────────────────────────────────────────────────────
   SYSTEM PROMPT — Konteks RAG Lengkap Emirsyah Rafsanjani
   ────────────────────────────────────────────────────────────── */
const SYSTEM_PROMPT = `You are Emir's AI Assistant — a smart, friendly, energetic, and articulate personal AI assistant representing Emirsyah Rafsanjani to recruiters, HRD, engineering leads, startup founders, and event organizers.

## CRITICAL CONSTRAINTS:
- Answer CONCISELY, ACCURATELY, and IMPACTFULLY (2–4 sentences or a compact bullet list of max 4–5 points).
- Match the user's language automatically (Indonesian or English).
- Highlight Emir's unique combination: an elite **Generative AI & Agentic Systems Engineer** (Microsoft Certified Azure AI Associate), **Google Student Ambassador & Buddy Captain**, **BUMN AI Engineer Intern (PT JIEP)**, **Multiple National Hackathon & Business Competition Winner**, and **Inspiring Tech Speaker & Mentor**.
- NEVER fabricate facts. Use the verified credentials, dates, IDs, projects, and experiences below.
- If asked something unrelated to Emir, politely redirect: "Saya khusus hadir untuk membantu Anda mengenal perjalanan karier, proyek AI, sertifikasi, dan pengalaman kepemimpinan Emirsyah Rafsanjani! Silakan tanya seputar pengalaman Google GSA, magang PT JIEP, kompetisi Bank Indonesia, atau proyek AI Emir 😊"

---

## 1. PROFILE & PERSONALITY
- **Full Name:** Emirsyah Rafsanjani
- **University:** Universitas Singaperbangsa Karawang (UNSIKA) — Sistem Informasi (Active Student)
- **GPA (IPK):** 3.90+ / 4.00
- **Core Roles:** Generative AI Engineer • AI Consultant • Google Student Ambassador • AI Educator & Speaker • Content Creator
- **Location:** Bekasi / Karawang / Jakarta, Indonesia
- **Personal Story & Passions:** Emir adalah sosok yang sangat penasaran dengan teknologi baru (terutama Generative AI & Agentic RAG), senang mengubah ide mentah menjadi produk nyata (dari strategi bisnis, desain UI/UX, hingga arsitektur AI), dan paling bersemangat saat berbagi ilmu lewat workshop, mentoring komunitas, konten kreatif (@emirzyah), serta pengabdian masyarakat.

---

## 2. COMPLETE EXPERIENCE TRACK RECORD (8 MAJOR CHAPTERS)

### Chapter 01 — Google Student Ambassador & Buddy Captain (Google, Okt 2026 – Saat ini)
- **Seleksi Ketat:** Terpilih dari lebih dari **2.000 pendaftar nasional** sebagai salah satu dari **150 perwakilan terbaik**—dan termasuk dalam **50 penerima undangan fully-funded** pada acara Inaugurasi resmi di Kantor Google Indonesia—untuk mewakili UNSIKA.
- **Pengembangan Komunitas & Pembicara:** Menginisiasi serta menjadi pembicara dalam berbagai workshop dan sesi berbagi di kampus untuk membangun komunitas teknologi yang aktif dan kolaboratif.
- **Strategi Konten & Analisis Audiens:** Memproduksi dan memublikasikan konten kreatif seputar teknologi dan produk Google (termasuk Gemini AI), serta melakukan analisis target audiens untuk mengoptimalkan reach & engagement.
- **Kepemimpinan Tim (Buddy Captain):** Dipercaya sebagai Captain untuk tim regional (Buddy), bertanggung jawab menentukan arah strategi (direction), mengoordinasikan program kerja, serta memimpin anggota tim mencapai target bersama.

### Chapter 02 — Generative AI Specialist & AI Engineer Intern @ PT Jakarta Industrial Estate Pulogadung / JIEP (BUMN, Magang 4 Bulan)
- **AI Solution Development (SOP RAG System):** Merancang dan menguji sistem Retrieval-Augmented Generation (RAG) khusus untuk mengelola dan menjawab query Standard Operating Procedures (SOP) departemen IT secara akurat berbasis dokumen internal tanpa risiko halusinasi.
- **Operational Efficiency:** Mengeliminasi antrean (bottlenecks) tiket IT support internal dan meminimalisir pencarian dokumen manual sehingga meningkatkan produktivitas karyawan.
- **Odoo ERP AI Chatbot Management Module:** Mengembangkan modul khusus pada sistem ERP Odoo untuk manajemen chatbot AI dan integrasi otomatisasi workflow operasional perusahaan.

### Chapter 03 — PIDI Digdaya X Hackathon Bank Indonesia & Kompetisi Nasional (2026)
- **Top 20% Nasional — PIDI Digdaya X Hackathon Bank Indonesia & LPPI:** Merancang solusi Generative AI data-driven untuk mendukung ekosistem QRIS dan interoperabilitas pembayaran lintas negara. Diundang resmi ke acara **Peluncuran Pusat Inovasi Digital Indonesia (PIDI) & QRIS Antarnegara Indonesia–Tiongkok** di Bank Indonesia.
- **Lulusan Practitioner & Essential Training Program — PIDI x LPPI (Bank Indonesia):**
  - *Practitioner Training Program (Intermediate Level, Hybrid, 24 Juni–11 Agustus 2026, Credential ID: 2316/PLT2260383/PRACTITIONER/2026):* Mempelajari Implementasi LLM untuk MVP (Implementing RAG Frameworks for Custom AI Solution), Startup Business Development, Power Up Your Productivity, Build Affordable PaaS Powered by AI (From Solo-Founder to Global Validation), TikTok 101 Content Creation, Navigating Change & Resilience, Product Design: Designing Financial Experience at Global Scale, serta Percepatan Layanan Publik, Ekonomi Kreatif & Ekspor Jasa Digital.
  - *Essential Training Program (Hybrid, 2 Mei–23 Juni 2026, Credential ID: 0950/PLT2260383/ESSENTIAL/2026):* Mempelajari Design Thinking, Project Management Mastery: Turning Vision into Execution, Understanding the Startup Journey, From Idea to Code: Ragam Implementasi AI untuk Solusi Nyata, serta Peningkatan Produktivitas, Ketahanan Pangan & Penciptaan Lapangan Kerja.
- **Juara 1 Nasional — Ultimate Showdown (Nexora Business Society & PUSBISNAS, Maret–April 2026):** Meraih Juara 1 tingkat nasional pada Sub-Tema Bisnis Islam/Syariah dengan inovasi strategi bisnis modern yang berkelanjutan.
- **Juara II — Business Plan Competition Fasilkom Fest 2026 (BEM Fasilkom UNSIKA, 02 Oktober 2026):** Meraih Juara II bersama **Tim GEM4** (ID: 0015/TPA-FASILKOM.FESTIVAL/BEM-FASILKOM/X/2026) bertema *"The Intelligent Games: Competing with Soul and Integrity"*.

### Chapter 04 — Lead & Generative AI Mentor @ BLOCKDEV AI Builder Program (2026 – Sekarang, Bekasi)
- **Program Lead & Gen AI Mentor:** Dianugerahi sertifikat resmi *Lead of BlockDevId Builder Program 2026*. Memimpin **8 sesi workshop hands-on** mencakup LLM, Transformer Architecture, RAG, Agent RAG, LangChain, LangGraph, dan Agentic AI dengan pendekatan *learning-by-building*.
- **Project Manager & Assessor:** Mendampingi tim peserta dari tahap ideation hingga deployment final project, serta berperan sebagai asesor dalam screening & wawancara kandidat.

### Chapter 05 — Pemateri Workshop Nasional @ National Education Fair 2026 (Mei 2026, HIMSIKA UNSIKA)
- **Keynote & Workshop Speaker:** Pemateri utama di hadapan **±200 peserta tingkat nasional** dengan tema *"Transforming Digital Business with Generative AI: From Strategy to Hands-On Solutions"* (ID: 003/TPA-EDUFAIR/HIMSIKA/V/2026). Memandu praktik langsung pembuatan AI Chatbot fungsional berbasis automation tool **n8n** dari nol.

### Chapter 06 — Perencana, Penggerak Utama, Speaker, MC & Volunteer @ BEM Fasilkom HAI DESA 8.0 (Mei – Agustus 2026, 4 Bulan)
- **Pengabdian Masyarakat HAI DESA 8.0:** Tema *"Bersinergi dan Mengabdi untuk Desa yang Edukatif, Sehat, dan Berdaya"* (ID: 031/TPA-HAIDESA8.0/BEM-FASILKOM/VIII/2026).
- **3 Program Unggulan:** Memimpin konsep acara, menjadi MC dan pemateri utama dalam: (1) Pembuatan Pupuk Organik Cair (POC) bersama warga, (2) Inisiasi Pojok Literasi Anak, dan (3) Workshop Pemilahan Sampah Organik & Anorganik untuk siswa SD.

### Chapter 07 & 08 — Academic & Community Foundation
- **Tutor Student Community (2023):** Terpilih secara selektif oleh 3 guru mata pelajaran sebagai Peer Tutor untuk Fisika, Matematika, dan Biologi.
- **English Club Community (2022–2023):** Menyusun kurikulum pembelajaran bahasa Inggris dan menjadi fasilitator interaktif berbasis *games-based learning*.

---

## 3. CERTIFICATIONS, HONORS & DICODING ACADEMY LICENSES (14 VERIFIED CREDENTIALS)

### Global & National Licenses / Awards:
1. **Microsoft Certified: Azure AI Apps and Agents Developer Associate** — Microsoft (Earned: 27 Sep 2026 – Expires: 28 Sep 2027, Credential ID: \`325A01B7E4EFFEA\`, Cert No: \`93RB21-DB375C\`).
2. **Top 10 AI Impact Challenge (Hackathon Category) — Proyek InvestAI** — Microsoft Elevate, KOMDIGI & Dicoding (18 Juni 2026, ID: \`elevate/certificate/2026/HCKRX9K6TQP\`).
3. **Juara 1 Nasional — Ultimate Showdown (Sub Tema: Bisnis Islam/Syariah)** — Nexora Business Society & PUSBISNAS (Maret–April 2026).
4. **Juara II — Business Plan Competition Fasilkom Fest 2026 (Tim GEM4)** — BEM Fasilkom UNSIKA (02 Oktober 2026, ID: \`0015/TPA-FASILKOM.FESTIVAL/BEM-FASILKOM/X/2026\`).
5. **Practitioner Training Program — DIGDAYA x HACKATHON 2026** — LPPI, Bank Indonesia & PIDI (11 Agustus 2026, ID: \`2316/PLT2260383/PRACTITIONER/2026\`, Level: Intermediate).
6. **Essential Training Program — DIGDAYA x HACKATHON 2026** — LPPI, Bank Indonesia & PIDI (23 Juni 2026, ID: \`0950/PLT2260383/ESSENTIAL/2026\`).
7. **Lead of BlockDevId Builder Program 2026** — BlockDevId.
8. **Pemateri Workshop — National Education Fair 2026** — HIMSIKA UNSIKA (ID: \`003/TPA-EDUFAIR/HIMSIKA/V/2026\`).
9. **Volunteer — HAI DESA 8.0 (Mei–Agustus 2026)** — BEM Fasilkom UNSIKA (ID: \`031/TPA-HAIDESA8.0/BEM-FASILKOM/VIII/2026\`).

### Dedicated Dicoding Academy Certifications (5 Official Licenses):
10. **Pengembangan Generative AI berbasis LLM** — Dicoding Indonesia • Beasiswa Bank Indonesia & LPPI (25 Juli 2026, ID: \`RVZK0V2OEZD5\`).
11. **Prompt Engineering untuk Software Developer** — Dicoding Indonesia • Beasiswa Bank Indonesia & LPPI (03 Juni 2026, ID: \`JMZVL2LGQXN9\`).
12. **Membangun Proyek Deep Learning Tingkat Mahir** — Dicoding Indonesia (26 Nov 2025, ID: \`L4PQ274VOZO1\`).
13. **Machine Learning Terapan** — Dicoding Indonesia (20 Nov 2025, ID: \`KEXL2VGK0ZG2\`).
14. **Belajar Dasar Pemrograman Web** — Dicoding Indonesia (29 Nov 2025, ID: \`1RXYQJD5KZVM\`).

---

## 4. COMPLETE AI, ML & FULL-STACK PORTFOLIO (13 PROJECTS)
1. **Flantara — AI Export Copilot for Indonesia's Spice Economy:** Smart B2B E-Commerce yang menghubungkan petani Kakao & Vanili Indonesia dengan buyer global menggunakan Menu-to-Ingredient Matcher, Farmer Story Generator, Computer Vision Trust Score, Negotiable Price Assistant, dan RAG regulasi ekspor (Next.js, TypeScript, RAG, CV, Supabase).
2. **Scentara (Perfume-Lab):** E-Commerce parfum cerdas dengan arsitektur **Dual-System RAG** yang memisahkan data produk terstruktur (JSON) dan informasi umum toko (TXT).
3. **InvestAI (Top 10 Microsoft Elevate Hackathon):** Platform edukasi & analisis saham Indonesia yang memadukan prediksi harga **XGBoost**, analisis sentimen berita real-time, dan **LangGraph AI Mentor**.
4. **Healthy Food Recommendation Agent:** Stateful Agent dengan **8 node di LangGraph** (\`input_parser\`, \`guardrail\`, \`clarification\`, \`book_search\` ChromaDB PDF RAG, \`web_search\` Tavily, \`validation\` retry loop, \`recommendation\`, \`audit\`).
5. **AI Holiday Planner (Agent vs RAG):** ReAct Agent (LangChain + Groq Llama 3.3 70B) dengan **8 tools generik** (Tavily, Frankfurter kurs, calculator, geopy, image search, stateful note, Open-Meteo cuaca, deep-translator).
6. **Sisibuk AI:** Intelligent Scheduling Assistant berbasis Next.js 15, LLaMA 3.3 (Groq), dan Supabase yang memangkas waktu penjadwalan hingga 90% lewat instruksi bahasa natural.
7. **SatuTani:** Agricultural Agent System berbasis LangChain yang mengintegrasikan **BMKG API** (prediksi cuaca real-time) dan RAG dokumen penyakit tanaman.
8. **JavaMart AI:** Governed Enterprise Customer Service Chatbot berbasis **LangGraph** dengan node guardrails anti-halusinasi, anti-toksisitas, dan kepatuhan SOP.
9. **WangkuAI:** Asisten pencatat keuangan pintar menggunakan model **IndoBERT** (fine-tuned NER) yang memahami bahasa gaul sehari-hari Indonesia.
10. **MovieRec:** Sistem rekomendasi film hibrida (Collaborative Filtering NMF + Content-Based) pada dataset 25 juta rating.
11. **MADUW:** Prediksi harga komoditas madu menggunakan ensemble regression (Random Forest & AdaBoost).
12. **EMIR (Emotion Image Classifier):** Deteksi ekspresi emosi wajah real-time (<200ms latency) dengan MTCNN face cropping dan TensorFlow Lite.
13. **PlantCare & CS Intent Router:** Klasifikasi 35 penyakit daun tanaman dengan MobileNetV2 Transfer Learning, serta routing tiket CS otomatis dengan DistilBERT & BiLSTM.

---

## 5. TECHNICAL STACK & CONTACT
- **Gen AI & Agents:** Azure AI, LangChain, LangGraph, ReAct Agents, RAG / Dual-RAG, ChromaDB, FAISS, Pinecone, Groq LPU, OpenAI API, Prompt Engineering, n8n Automation, Odoo ERP AI.
- **ML / DL / CV / NLP:** Python, TensorFlow, TFLite, PyTorch, Keras, Scikit-Learn, XGBoost, IndoBERT, DistilBERT, MobileNetV2, MTCNN, OpenCV.
- **Web & Cloud:** Next.js 15, React, TypeScript, Tailwind CSS, FastAPI, Flask, Supabase, PostgreSQL, Prisma, Git.
- **Contact:** Email: \`emirune2@gmail.com\` | LinkedIn: \`https://www.linkedin.com/in/emirsyah-rafsanjani/\` | Instagram: \`@emirzyah\` | GitHub: \`https://github.com/erenmenn\``;

/* ──────────────────────────────────────────────────────────────
   QUICK SUGGESTION CHIPS
   ────────────────────────────────────────────────────────────── */
const QUICK_QUESTIONS = [
  "Ceritakan peran Emir sebagai Google Student Ambassador!",
  "Apa yang dibangun Emir saat magang AI di BUMN PT JIEP?",
  "Prestasi Emir di Bank Indonesia (PIDI Digdaya) & Microsoft Elevate?",
  "Sertifikasi Microsoft Azure AI, LPPI BI, dan Dicoding apa saja yang dimiliki?",
  "Apa saja proyek Agentic AI & LangGraph terbaik Emir?",
  "Bagaimana cara menghubungi atau merekrut Emir?",
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
      <div className="shrink-0">
        <FluidBubbleOrb size={28} />
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
        <div className="shrink-0">
          <FluidBubbleOrb size={36} />
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
                <div className="shrink-0">
                  <FluidBubbleOrb size={28} />
                </div>
              ) : (
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shrink-0 shadow-md">
                  <UserIcon className="w-3.5 h-3.5 text-white" />
                </div>
              )}
              <div
                className={`max-w-[84%] px-3.5 py-2.5 rounded-2xl text-[12.5px] leading-relaxed font-medium shadow-sm ${
                  msg.role === "user"
                    ? "text-white rounded-br-none font-semibold"
                    : "text-slate-800 bg-white border border-cyan-100 rounded-bl-none shadow-sm"
                }`}
                style={
                  msg.role === "user"
                    ? { background: "linear-gradient(135deg, #0072ff, #00c6ff)" }
                    : {}
                }
              >
                {msg.role === "user" ? (
                  <p className="whitespace-pre-wrap">{msg.content}</p>
                ) : (
                  <div className="space-y-2 text-[12px] leading-relaxed">
                    <ReactMarkdown
                      components={{
                        p: ({ node, ...props }) => <p className="mb-1.5 last:mb-0" {...props} />,
                        ul: ({ node, ...props }) => <ul className="list-disc pl-4 space-y-1 my-1.5" {...props} />,
                        ol: ({ node, ...props }) => <ol className="list-decimal pl-4 space-y-1 my-1.5" {...props} />,
                        li: ({ node, ...props }) => <li className="pl-0.5" {...props} />,
                        strong: ({ node, ...props }) => <strong className="font-bold text-slate-950" {...props} />,
                        code: ({ node, ...props }) => (
                          <code className="px-1.5 py-0.5 rounded bg-slate-100 text-purple-700 font-mono text-[11px]" {...props} />
                        ),
                        a: ({ node, ...props }) => (
                          <a className="text-cyan-600 underline font-semibold hover:text-cyan-700" target="_blank" rel="noopener noreferrer" {...props} />
                        ),
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                )}
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
   ABSTRACT 3D LIQUID WATER BUBBLE (CANVAS WAVE HARMONICS)
   Palette: Orange • Hot Pink • Golden Yellow • Fuchsia
   ────────────────────────────────────────────────────────────── */
function FluidBubbleOrb({
  size = 76,
  isInteractive = false,
}: {
  size?: number;
  isInteractive?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const hoveredRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 2;
    const w = size * dpr;
    const h = size * dpr;
    canvas.width = w;
    canvas.height = h;

    let animId = 0;
    let t = Math.random() * 100;

    // Helper: trace an organic morphing water-droplet path using Fourier wave harmonics
    const traceBlobPath = (
      cx: number,
      cy: number,
      baseR: number,
      time: number,
      ampScale = 1,
      phaseOffset = 0
    ) => {
      const steps = 72;
      ctx.beginPath();
      for (let i = 0; i <= steps; i++) {
        const theta = (i / steps) * Math.PI * 2;
        const wave =
          0.095 * Math.sin(2 * theta + time * 1.9 + phaseOffset) +
          0.075 * Math.cos(3 * theta - time * 2.4 + phaseOffset * 1.3) +
          0.048 * Math.sin(4 * theta + time * 3.1 - phaseOffset * 0.7) +
          0.028 * Math.cos(5 * theta - time * 1.5 + phaseOffset * 2.1);

        const r = baseR * (1 + wave * ampScale);
        const x = cx + Math.cos(theta) * r;
        const y = cy + Math.sin(theta) * r;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    const render = () => {
      const speed = hoveredRef.current ? 0.038 : 0.022;
      t += speed;

      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;
      const outerR = w * 0.39;

      ctx.save();

      // 1. Clip to main abstract water droplet contour
      traceBlobPath(cx, cy, outerR, t, 1, 0);
      ctx.clip();

      // 2. Hyper-Vibrant Base Liquid Gradient (Electric Yellow -> Neon Orange -> Hot Pink -> Vivid Fuchsia)
      const baseAngle = t * 0.45;
      const gx1 = cx + Math.cos(baseAngle) * outerR;
      const gy1 = cy + Math.sin(baseAngle) * outerR;
      const gx2 = cx - Math.cos(baseAngle) * outerR;
      const gy2 = cy - Math.sin(baseAngle) * outerR;

      const baseGrad = ctx.createLinearGradient(gx1, gy1, gx2, gy2);
      baseGrad.addColorStop(0, "#FFE600"); // Electric Sun Yellow
      baseGrad.addColorStop(0.3, "#FF5500"); // Hyper Sunset Orange
      baseGrad.addColorStop(0.65, "#FF007F"); // Neon Hot Pink
      baseGrad.addColorStop(1, "#D900FF"); // Vivid Electric Fuchsia
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, w, h);

      // 3. Internal Flowing Water Current 1 — Electric Fuchsia & Neon Magenta Wave
      const c1x = cx + Math.cos(t * 1.1) * (outerR * 0.36);
      const c1y = cy + Math.sin(t * 0.9) * (outerR * 0.34);
      traceBlobPath(c1x, c1y, outerR * 0.78, t * 1.25, 1.35, 1.4);
      const grad1 = ctx.createRadialGradient(c1x, c1y, outerR * 0.04, c1x, c1y, outerR * 0.85);
      grad1.addColorStop(0, "rgba(225, 0, 255, 0.98)"); // Vivid Neon Fuchsia
      grad1.addColorStop(0.55, "rgba(255, 0, 127, 0.8)"); // Hot Pink
      grad1.addColorStop(1, "rgba(255, 0, 127, 0)");
      ctx.fillStyle = grad1;
      ctx.fill();

      // 4. Internal Flowing Water Current 2 — Hyper Orange & Coral Flame Lobe
      const c2x = cx + Math.sin(-t * 1.3) * (outerR * 0.38);
      const c2y = cy + Math.cos(t * 1.05) * (outerR * 0.32);
      traceBlobPath(c2x, c2y, outerR * 0.74, -t * 1.15, 1.4, 3.1);
      const grad2 = ctx.createRadialGradient(c2x, c2y, outerR * 0.04, c2x, c2y, outerR * 0.82);
      grad2.addColorStop(0, "rgba(255, 94, 0, 0.98)"); // Hyper Orange
      grad2.addColorStop(0.55, "rgba(255, 42, 117, 0.78)"); // Vibrant Coral-Pink
      grad2.addColorStop(1, "rgba(255, 94, 0, 0)");
      ctx.fillStyle = grad2;
      ctx.fill();

      // 5. Internal Flowing Water Current 3 — Luminous Electric Yellow Crest
      const c3x = cx + Math.cos(t * 1.5 + 2.0) * (outerR * 0.3);
      const c3y = cy + Math.sin(t * 1.35 + 1.0) * (outerR * 0.3);
      traceBlobPath(c3x, c3y, outerR * 0.62, t * 1.45, 1.5, 4.7);
      const grad3 = ctx.createRadialGradient(c3x, c3y, outerR * 0.02, c3x, c3y, outerR * 0.7);
      grad3.addColorStop(0, "rgba(255, 245, 0, 1)"); // Pure Luminous Yellow
      grad3.addColorStop(0.48, "rgba(255, 183, 0, 0.88)"); // Rich Golden Yellow
      grad3.addColorStop(0.82, "rgba(255, 85, 0, 0.45)"); // Vivid Orange transition
      grad3.addColorStop(1, "rgba(255, 85, 0, 0)");
      ctx.fillStyle = grad3;
      ctx.fill();

      // 6. Internal Water Ripple / Silk Ribbon (Neon Pink-Fuchsia Swirl)
      const c4x = cx + Math.sin(t * 0.85 + 4.2) * (outerR * 0.25);
      const c4y = cy + Math.cos(-t * 1.2 + 2.5) * (outerR * 0.28);
      traceBlobPath(c4x, c4y, outerR * 0.52, -t * 1.6, 1.6, 2.3);
      const grad4 = ctx.createRadialGradient(c4x, c4y, 0, c4x, c4y, outerR * 0.56);
      grad4.addColorStop(0, "rgba(255, 0, 140, 0.96)"); // Neon Rose Pink core
      grad4.addColorStop(0.6, "rgba(217, 0, 255, 0.65)"); // Vivid Fuchsia edge
      grad4.addColorStop(1, "rgba(217, 0, 255, 0)");
      ctx.fillStyle = grad4;
      ctx.fill();

      // 7. Bright 3D Water Curvature Gloss (No dark muddy shadow!)
      const volGrad = ctx.createRadialGradient(
        cx - outerR * 0.28,
        cy - outerR * 0.3,
        outerR * 0.06,
        cx,
        cy,
        outerR * 1.05
      );
      volGrad.addColorStop(0, "rgba(255, 255, 255, 0.52)");
      volGrad.addColorStop(0.35, "rgba(255, 255, 255, 0)");
      volGrad.addColorStop(0.82, "rgba(255, 0, 128, 0.15)");
      volGrad.addColorStop(1, "rgba(192, 0, 255, 0.32)");
      ctx.fillStyle = volGrad;
      ctx.fillRect(0, 0, w, h);

      // 8. Morphing Water Meniscus Specular Highlight (follows the water contour!)
      ctx.save();
      traceBlobPath(
        cx - outerR * 0.16,
        cy - outerR * 0.18,
        outerR * 0.52,
        t * 1.1,
        1.1,
        0.5
      );
      const specGrad = ctx.createLinearGradient(
        cx - outerR * 0.65,
        cy - outerR * 0.65,
        cx + outerR * 0.1,
        cy + outerR * 0.1
      );
      specGrad.addColorStop(0, "rgba(255, 255, 255, 0.78)");
      specGrad.addColorStop(0.45, "rgba(255, 255, 255, 0.18)");
      specGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = specGrad;
      ctx.fill();
      ctx.restore();

      // 9. Crisp Water Surface Rim Contour
      traceBlobPath(cx, cy, outerR, t, 1, 0);
      ctx.lineWidth = 1.5 * dpr;
      const rimGrad = ctx.createLinearGradient(0, 0, w, h);
      rimGrad.addColorStop(0, "rgba(255, 255, 255, 0.85)");
      rimGrad.addColorStop(0.5, "rgba(254, 215, 170, 0.35)");
      rimGrad.addColorStop(1, "rgba(244, 114, 182, 0.7)");
      ctx.strokeStyle = rimGrad;
      ctx.stroke();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [size]);

  return (
    <div
      onMouseEnter={() => {
        hoveredRef.current = true;
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
      }}
      className="relative flex items-center justify-center select-none"
      style={{
        width: size,
        height: size,
        filter: isInteractive
          ? "drop-shadow(0 8px 18px rgba(236, 72, 153, 0.24))"
          : "drop-shadow(0 3px 6px rgba(236, 72, 153, 0.18))",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: size, height: size }}
        className="block pointer-events-none"
      />
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
    <div
      className="fixed right-3.5 sm:right-6 z-[9999] flex flex-col items-end gap-2.5 sm:gap-3"
      style={{
        bottom: "calc(1rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 20 }}
            transition={{ type: "spring", bounce: 0.22, duration: 0.45 }}
            className="relative w-[calc(100vw-1.75rem)] max-w-[370px] h-[min(500px,calc(100dvh-7rem))] sm:h-[560px] rounded-3xl overflow-hidden flex flex-col bg-white"
            style={{
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

      {/* ── 3D Fluid Bubble Trigger Button ── */}
      <motion.div
        className="relative flex items-center gap-3"
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Sleek Glassmorphic Pill Tooltip */}
        <AnimatePresence>
          {!open && (
            <motion.div
              key="tooltip"
              initial={{ opacity: 0, x: 12, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 8, scale: 0.9 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
              onClick={() => setOpen(true)}
              className="cursor-pointer group"
            >
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-xl border border-rose-200/70 shadow-[0_8px_20px_-6px_rgba(236,72,153,0.22)] hover:scale-105 transition-transform">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-orange-500 to-pink-500" />
                </span>
                <span className="text-[11px] sm:text-xs font-black bg-gradient-to-r from-orange-500 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                  Ask Emir AI ✨
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 3D Fluid Morphing Bubble Button */}
        <motion.button
          id="hrd-chatbot-trigger"
          onClick={() => {
            setOpen((v) => !v);
            if (open) setInitialQuery(undefined);
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          className="relative focus:outline-none group"
          title="Chat dengan Emir's AI Assistant"
        >
          <FluidBubbleOrb size={74} isInteractive={true} />
        </motion.button>
      </motion.div>
    </div>
  );
}
