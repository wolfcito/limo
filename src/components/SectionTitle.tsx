interface SectionTitleProps {
  children: React.ReactNode;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
      {children}
    </h2>
  );
}
