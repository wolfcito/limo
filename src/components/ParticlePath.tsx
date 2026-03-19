import { interpolate, useCurrentFrame } from "remotion";
import { VIDEO_CONFIG } from "../config";

type ParticlePathProps = {
  path: string;
  strokeWidth?: number;
  startFrame: number;
  endFrame: number;
  glow?: boolean;
};

export const ParticlePath = ({
  path,
  strokeWidth = 3,
  startFrame,
  endFrame,
  glow = true,
}: ParticlePathProps) => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [startFrame, endFrame], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dash = 1200;
  const dashOffset = Math.round(dash - dash * progress);

  return (
    <svg
      viewBox="0 0 1200 400"
      style={{
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
    >
      {glow && (
        <path
          d={path}
          fill="none"
          stroke={VIDEO_CONFIG.colors.accentSoft}
          strokeWidth={strokeWidth * 4}
          strokeLinecap="round"
          strokeDasharray={dash}
          strokeDashoffset={dashOffset}
        />
      )}
      <path
        d={path}
        fill="none"
        stroke={VIDEO_CONFIG.colors.accent}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={dash}
        strokeDashoffset={dashOffset}
      />
    </svg>
  );
};
