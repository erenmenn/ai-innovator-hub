import { Sparkles } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 text-center space-y-4">
      <div className="flex items-center justify-center gap-2 font-display text-lg font-bold">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="gold-text">Portfolio</span>
      </div>
      <p className="text-muted-foreground italic text-sm">
        "Building intelligence, not just code."
      </p>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
