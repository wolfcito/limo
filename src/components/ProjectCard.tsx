import { StatusBadge } from "./StatusBadge";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectLink {
  type: "demo" | "repo" | "x";
  url: string;
}

interface ProjectCardProps {
  title: string;
  status: "active" | "mvp" | "paused" | "collabs" | "main";
  description: string;
  tags: string[];
  links: ProjectLink[];
  isMain?: boolean;
}

export function ProjectCard({
  title,
  status,
  description,
  tags,
  links,
  isMain,
}: ProjectCardProps) {
  const getIcon = (type: string) => {
    switch (type) {
      case "repo":
        return <Github className="w-3.5 h-3.5" />;
      case "x":
        return (
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      default:
        return <ExternalLink className="w-3.5 h-3.5" />;
    }
  };

  const getLabel = (type: string) => {
    switch (type) {
      case "repo":
        return "Repo";
      case "x":
        return "X";
      default:
        return "Demo";
    }
  };

  return (
    <div
      className={`glass-card-hover p-5 ${
        isMain ? "ring-1 ring-accent/20 glow-accent" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <StatusBadge status={status} />
      </div>

      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-md bg-secondary text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {links.map((link) => (
          <Button
            key={link.url}
            variant="glass"
            size="sm"
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {getIcon(link.type)}
              {getLabel(link.type)}
            </a>
          </Button>
        ))}
      </div>
    </div>
  );
}
