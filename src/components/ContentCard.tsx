import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface ContentCardProps {
  title: string;
  description: string;
  url: string;
  icon: React.ReactNode;
}

export function ContentCard({ title, description, url, icon }: ContentCardProps) {
  return (
    <div className="glass-card-hover p-4 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground">
          {icon}
        </div>
        <h3 className="font-medium text-foreground text-sm">{title}</h3>
      </div>
      <p className="text-xs text-muted-foreground mb-3 flex-1">{description}</p>
      <Button variant="glass" size="sm" asChild className="w-full">
        <a href={url} target="_blank" rel="noopener noreferrer">
          Open
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </Button>
    </div>
  );
}
