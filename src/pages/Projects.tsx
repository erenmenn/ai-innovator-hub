import { useEffect } from "react";
import ProjectsSection from "@/components/ProjectsSection";
import DesignPortfolioSection from "@/components/DesignPortfolioSection";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-16 sm:pt-24 min-h-screen">
      <ProjectsSection />
      <DesignPortfolioSection />
    </div>
  );
};

export default Projects;
