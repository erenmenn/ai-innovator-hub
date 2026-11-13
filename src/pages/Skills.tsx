import { useEffect } from "react";
import SkillsSection from "@/components/SkillsSection";

const Skills = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-16 sm:pt-24 min-h-screen">
      <SkillsSection />
    </div>
  );
};

export default Skills;
