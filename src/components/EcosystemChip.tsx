import { ExternalLink } from "lucide-react";

interface EcosystemChipProps {
  name: string;
  url: string;
}

export function EcosystemChip({ name, url }: EcosystemChipProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-secondary/50 border border-glass-border text-sm text-foreground hover:bg-secondary hover:border-foreground/15 transition-all duration-200"
    >
      {name}
      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
    </a>
  );
}
