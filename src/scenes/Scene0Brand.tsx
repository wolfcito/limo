import { AbsoluteFill, interpolate, staticFile, useCurrentFrame } from "remotion";
import { GlowSweep } from "../components/GlowSweep";
import { VIDEO_CONFIG, VideoFormat, getFormatConfig } from "../config";

type Scene0BrandProps = {
  format: VideoFormat;
};

export const Scene0Brand = ({ format }: Scene0BrandProps) => {
  const frame = useCurrentFrame();
  const { safe } = getFormatConfig(format);
  const isVertical = format === "9:16";

  // Faster fade-in for impactful cold open
  const fadeIn = interpolate(frame, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });
  const slideUp = Math.round(interpolate(frame, [0, 10], [20, 0], {
    extrapolateRight: "clamp",
  }));

  // Scale punch effect
  const scalePunch = interpolate(frame, [0, 6, 12], [0.95, 1.02, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ padding: `${safe.y}px ${safe.x}px` }}>
      <GlowSweep start={10} end={36} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.25,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          filter: "blur(10px)",
        }}
      >
        <img
          src={staticFile("banner.png")}
          alt="Banner"
          style={{ width: isVertical ? "95%" : "90%", borderRadius: 24, objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: isVertical ? "center" : "flex-start",
          textAlign: isVertical ? "center" : "left",
          gap: isVertical ? 16 : 20,
          transform: `translate3d(0, ${slideUp}px, 0) scale(${scalePunch})`,
          opacity: fadeIn,
          transformOrigin: isVertical ? "center center" : "left center",
        }}
      >
        <div
          style={{
            fontSize: isVertical ? 56 : 80,
            fontWeight: 700,
            letterSpacing: -1,
            color: VIDEO_CONFIG.colors.text,
          }}
        >
          {VIDEO_CONFIG.projectName}
        </div>
        <div
          style={{
            fontSize: isVertical ? 20 : 26,
            color: VIDEO_CONFIG.colors.muted,
            maxWidth: isVertical ? 400 : 720,
            lineHeight: 1.3,
          }}
        >
          {VIDEO_CONFIG.tagline}
        </div>
      </div>
    </AbsoluteFill>
  );
};
