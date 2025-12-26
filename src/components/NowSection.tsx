import { SectionTitle } from "./SectionTitle";
import { Zap } from "lucide-react";

export function NowSection() {
  const items = [
    "Shipping DenLabs (main).",
    "Exploring agent payments + standards in public.",
    "Looking for testers, integrations, and early users.",
  ];

  return (
    <section className="py-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <SectionTitle>Now</SectionTitle>
      <div className="glass-card p-5">
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground/90">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
