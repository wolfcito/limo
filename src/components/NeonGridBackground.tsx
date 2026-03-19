import { AbsoluteFill, useCurrentFrame, useVideoConfig } from "remotion";
import { VIDEO_CONFIG } from "../config";

export const NeonGridBackground = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const drift = (frame / durationInFrames) * 40;

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(circle at 20% 20%, ${VIDEO_CONFIG.colors.accentSoft}, transparent 50%),
        radial-gradient(circle at 80% 0%, rgba(50, 209, 207, 0.18), transparent 45%),
        linear-gradient(120deg, ${VIDEO_CONFIG.colors.bg}, ${VIDEO_CONFIG.colors.bgAlt})`,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: -200,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(50, 209, 207, 0.08) 0 1px, transparent 1px 80px), repeating-linear-gradient(90deg, rgba(50, 209, 207, 0.08) 0 1px, transparent 1px 80px)",
          transform: `translate3d(0, ${-drift}px, 0)`,
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 50% 50%, rgba(50, 209, 207, 0.16), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />
    </AbsoluteFill>
  );
};
