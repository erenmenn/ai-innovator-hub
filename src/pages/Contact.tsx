import { useEffect } from "react";
import CertificatesSection from "@/components/CertificatesSection";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-16 sm:pt-24 min-h-screen">
      <CertificatesSection />
      <ContactSection />
    </div>
  );
};

export default Contact;
