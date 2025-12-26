import { cn } from "@/lib/utils";

type Status = "active" | "mvp" | "paused" | "collabs" | "main";

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

const statusConfig: Record<Status, { label: string; className: string }> = {
  active: {
    label: "Active",
    className: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  },
  main: {
    label: "Main",
    className: "bg-accent/15 text-accent border-accent/30",
  },
  mvp: {
    label: "MVP",
    className: "bg-amber-500/15 text-amber-400 border-amber-500/30",
  },
  paused: {
    label: "Paused",
    className: "bg-muted text-muted-foreground border-muted",
  },
  collabs: {
    label: "Collabs",
    className: "bg-violet-500/15 text-violet-400 border-violet-500/30",
  },
};

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
