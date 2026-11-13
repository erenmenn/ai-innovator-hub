import { useEffect } from "react";
import SocialFeedSection from "@/components/SocialFeedSection";

const Social = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="pt-20 sm:pt-28 pb-16 min-h-screen pixel-grid relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <SocialFeedSection />
      </div>
    </div>
  );
};

export default Social;

