import { ExternalLink } from "lucide-react";

export function Footer() {
  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <footer className="py-12 text-center border-t border-glass-border animate-fade-in" style={{ animationDelay: "0.5s" }}>
      <a
        href="https://akawolfcito.eth.limo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors mb-3"
      >
        akawolfcito.eth.limo
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
      <p className="text-xs text-muted-foreground">
        Last updated: {currentDate}
      </p>
    </footer>
  );
}
