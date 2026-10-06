import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-24 min-h-screen">
      <HeroSection />
    </div>
  );
};

export default Index;


