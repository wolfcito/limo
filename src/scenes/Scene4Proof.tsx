import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { GlassCard } from "../components/GlassCard";
import { Pill } from "../components/Pill";
import { VIDEO_CONFIG, VideoFormat, getFormatConfig } from "../config";

type Scene4ProofProps = {
  format: VideoFormat;
};

export const Scene4Proof = ({ format }: Scene4ProofProps) => {
  const frame = useCurrentFrame();
  const { safe } = getFormatConfig(format);
  const fadeIn = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const isVertical = format === "9:16";

  return (
    <AbsoluteFill style={{ padding: `${safe.y}px ${safe.x}px`, opacity: fadeIn }}>
      <div
        style={{
          display: "flex",
          flexDirection: isVertical ? "column" : "row",
          gap: isVertical ? 28 : 32,
          alignItems: isVertical ? "stretch" : "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: isVertical ? 16 : 20, flex: isVertical ? undefined : "1.1" }}>
          <div style={{ fontSize: isVertical ? 30 : 38, fontWeight: 700 }}>Built for Web3 builders</div>
          <div style={{ fontSize: isVertical ? 15 : 18, color: VIDEO_CONFIG.colors.muted }}>
            {VIDEO_CONFIG.proof.value}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {VIDEO_CONFIG.ecosystem.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </div>

        <GlassCard style={{ padding: isVertical ? "20px 20px" : "28px 28px", flex: isVertical ? undefined : "1" }}>
          <div style={{ fontSize: isVertical ? 14 : 16, color: VIDEO_CONFIG.colors.muted }}>
            Now shipping
          </div>
          <div style={{ marginTop: isVertical ? 12 : 16, display: "grid", gap: isVertical ? 10 : 12 }}>
            <div style={{ fontSize: isVertical ? 18 : 20, fontWeight: 600 }}>DenLabs (main)</div>
            <div style={{ fontSize: isVertical ? 14 : 16, color: VIDEO_CONFIG.colors.muted }}>
              Exploring agent payments + standards in public.
            </div>
            <div style={{ fontSize: isVertical ? 14 : 16, color: VIDEO_CONFIG.colors.muted }}>
              Looking for testers, integrations, and early users.
            </div>
          </div>
        </GlassCard>
      </div>
    </AbsoluteFill>
  );
};
