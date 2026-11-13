import { useEffect } from "react";
import ExperienceSection from "@/components/ExperienceSection";

const Experience = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-16 sm:pt-24 min-h-screen">
      <ExperienceSection />
    </div>
  );
};

export default Experience;
