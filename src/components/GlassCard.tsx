import { ReactNode } from "react";
import { VIDEO_CONFIG } from "../config";

type GlassCardProps = {
  children: ReactNode;
  style?: React.CSSProperties;
};

export const GlassCard = ({ children, style }: GlassCardProps) => {
  return (
    <div
      style={{
        borderRadius: 24,
        border: `1px solid ${VIDEO_CONFIG.colors.glassBorder}`,
        background: "rgba(255, 255, 255, 0.04)",
        boxShadow: "0 24px 60px rgba(0, 0, 0, 0.35)",
        padding: 24,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
