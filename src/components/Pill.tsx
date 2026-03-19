import { ReactNode } from "react";
import { VIDEO_CONFIG } from "../config";

type PillProps = {
  children: ReactNode;
  active?: boolean;
};

export const Pill = ({ children, active = false }: PillProps) => {
  return (
    <div
      style={{
        padding: "6px 14px",
        borderRadius: 999,
        border: `1px solid ${active ? VIDEO_CONFIG.colors.accent : VIDEO_CONFIG.colors.glassBorder}`,
        color: active ? VIDEO_CONFIG.colors.text : VIDEO_CONFIG.colors.muted,
        background: active ? "rgba(50, 209, 207, 0.16)" : "rgba(255, 255, 255, 0.03)",
        fontSize: 14,
        letterSpacing: 0.4,
        textTransform: "uppercase",
      }}
    >
      {children}
    </div>
  );
};
