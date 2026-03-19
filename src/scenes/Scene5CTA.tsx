import { AbsoluteFill, interpolate, staticFile, useCurrentFrame } from "remotion";
import { GlowSweep } from "../components/GlowSweep";
import { VIDEO_CONFIG, VideoFormat, getFormatConfig } from "../config";

type Scene5CTAProps = {
  format: VideoFormat;
};

export const Scene5CTA = ({ format }: Scene5CTAProps) => {
  const frame = useCurrentFrame();
  const { safe } = getFormatConfig(format);
  const fadeIn = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: "clamp" });
  const isVertical = format === "9:16";

  return (
    <AbsoluteFill style={{ padding: `${safe.y}px ${safe.x}px`, opacity: fadeIn }}>
      <GlowSweep start={10} end={40} />
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: isVertical ? "center" : "flex-start",
          textAlign: isVertical ? "center" : "left",
          gap: isVertical ? 22 : 28,
        }}
      >
        <div style={{ fontSize: isVertical ? 34 : 44, fontWeight: 700 }}>{VIDEO_CONFIG.cta.text}</div>
        <div style={{ fontSize: isVertical ? 15 : 18, color: VIDEO_CONFIG.colors.muted, maxWidth: isVertical ? 320 : undefined }}>
          {VIDEO_CONFIG.cta.subtext}
        </div>
        <div
          style={{
            padding: isVertical ? "12px 22px" : "14px 26px",
            borderRadius: 999,
            background: VIDEO_CONFIG.colors.accent,
            color: VIDEO_CONFIG.colors.bg,
            fontWeight: 700,
            fontSize: isVertical ? 15 : 18,
            width: "fit-content",
            boxShadow: `0 0 30px ${VIDEO_CONFIG.colors.accentSoft}`,
          }}
        >
          {VIDEO_CONFIG.cta.link}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: isVertical ? 12 : 16, marginTop: isVertical ? 16 : 20 }}>
          <img
            src={staticFile("avatar.png")}
            alt={VIDEO_CONFIG.projectName}
            style={{ width: isVertical ? 40 : 48, height: isVertical ? 40 : 48, borderRadius: "50%", objectFit: "cover" }}
          />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: isVertical ? 18 : 22, fontWeight: 600 }}>{VIDEO_CONFIG.projectName}</div>
            <div style={{ fontSize: isVertical ? 14 : 16, color: VIDEO_CONFIG.colors.muted }}>
              {VIDEO_CONFIG.handle}
            </div>
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
