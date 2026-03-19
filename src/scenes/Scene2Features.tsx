import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { GlassCard } from "../components/GlassCard";
import { VIDEO_CONFIG, VideoFormat, getFormatConfig } from "../config";

type Scene2FeaturesProps = {
  format: VideoFormat;
};

export const Scene2Features = ({ format }: Scene2FeaturesProps) => {
  const frame = useCurrentFrame();
  const { safe } = getFormatConfig(format);
  const highlightDuration = 18;
  const activeIndex = Math.floor(frame / highlightDuration) % VIDEO_CONFIG.features.length;
  const isVertical = format === "9:16";

  return (
    <AbsoluteFill style={{ padding: `${safe.y}px ${safe.x}px` }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: isVertical ? 20 : 26,
        }}
      >
        <div style={{ fontSize: isVertical ? 32 : 40, fontWeight: 700 }}>Core modules</div>
        <div style={{ position: "relative", height: isVertical ? 420 : 360 }}>
          {VIDEO_CONFIG.features.map((feature, index) => {
            const distance = index - activeIndex;
            const opacity = interpolate(Math.abs(distance), [0, 2], [1, 0.3]);
            const translateY = Math.round(distance * (isVertical ? 60 : 50));
            const scale = interpolate(Math.abs(distance), [0, 2], [1, 0.92]);

            return (
              <GlassCard
                key={feature}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity,
                  transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                  padding: isVertical ? "20px 24px" : "26px 32px",
                }}
              >
                <div style={{ fontSize: isVertical ? 22 : 28, fontWeight: 600 }}>{feature}</div>
                <div
                  style={{
                    fontSize: isVertical ? 12 : 14,
                    color: VIDEO_CONFIG.colors.muted,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {index === activeIndex ? "Highlight" : "Module"}
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </AbsoluteFill>
  );
};
