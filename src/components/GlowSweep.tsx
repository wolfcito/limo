import { interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { VIDEO_CONFIG } from "../config";

type GlowSweepProps = {
  start: number;
  end: number;
};

export const GlowSweep = ({ start, end }: GlowSweepProps) => {
  const frame = useCurrentFrame();
  const { width } = useVideoConfig();
  const progress = interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const translateX = Math.round((progress - 0.5) * width * 1.2);

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "35%",
          transform: `translate3d(${translateX}px, 0, 0)`,
          background: `linear-gradient(90deg, transparent, ${VIDEO_CONFIG.colors.accentSoft}, transparent)`
        }}
      />
    </div>
  );
};
