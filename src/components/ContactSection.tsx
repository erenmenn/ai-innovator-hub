import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const socials = [
  { icon: Mail, label: "Email", value: "emirune2@com", href: "mailto:emirune2@com", bgGrad: "linear-gradient(135deg, #fb7185, #e11d48)" },
  { icon: MessageCircle, label: "WhatsApp", value: "0859-5415-1718", href: "https://wa.me/6285954151718", bgGrad: "linear-gradient(135deg, #4ade80, #059669)" },
  { icon: Linkedin, label: "LinkedIn", value: "emirsyah-rafsanjani", href: "https://www.linkedin.com/in/emirsyah-rafsanjani-bab663371/", bgGrad: "linear-gradient(135deg, #60a5fa, #0891b2)" },
  { icon: Github, label: "GitHub", value: "erenmenn", href: "https://github.com/erenmenn", bgGrad: "linear-gradient(135deg, #8b5cf6, #9333ea)" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden pixel-grid" ref={ref}>
      {/* Smoke */}
      <motion.div
        animate={{ x: [0, 25, -15, 0], y: [0, -20, 25, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[5%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, hsl(260 85% 60%), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 30, 0], y: [0, 30, -15, 0], scale: [1, 0.95, 1.1, 1] }}
        transition={{ duration: 23, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute bottom-[5%] left-[5%] w-[350px] h-[350px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, hsl(330 80% 60%), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, 15, -25, 0], y: [0, -15, 20, 0] }}
        transition={{ duration: 21, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        className="absolute top-[50%] left-[40%] w-[300px] h-[300px] rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, hsl(185 85% 50%), transparent 70%)" }}
      />

      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-2xl border border-emerald-400/50 text-white font-extrabold text-xs tracking-widest uppercase shadow-[0_0_30px_rgba(16,185,129,0.5)] mb-6 transition-all cursor-default"
            style={{ background: "linear-gradient(135deg,#10b981,#0ea5e9)" }}>
            <span className="bg-white/20 px-2 py-0.5 rounded-lg text-white">06</span> CONTACT
          </div>
          <h2 className="text-[2.2rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-black mt-6 tracking-tighter leading-[0.9] text-slate-900 uppercase">
            <span className="block drop-shadow-sm">LET'S</span>
            <em className="font-playfair italic font-medium lowercase tracking-normal text-transparent bg-clip-text text-[2.6rem] sm:text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] ml-2 sm:ml-8 md:ml-16 leading-none block pb-4 pt-1 -mb-3"
              style={{ backgroundImage: "linear-gradient(to right, #10b981, #0ea5e9)" }}>
              connect!
            </em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed text-lg font-medium">
              Saya sangat terbuka untuk berdiskusi seputar literasi AI, rekayasa data, berkolaborasi inovasi, atau sekadar berbagi koneksi IT. Kirim pesan sekarang! 🚀
            </p>

            <div className="space-y-4">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/30 transition-all group hover:-translate-y-1"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
                    style={{ background: item.bgGrad }}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required maxLength={100} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm" placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required maxLength={255} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm" placeholder="your@email.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>

              <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required maxLength={1000} rows={4} className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm resize-none" placeholder="Tell me about your project..." />
            </div>
            <button type="submit" className="w-full py-3 rounded-xl gold-gradient text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
