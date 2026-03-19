import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { GlassCard } from "../components/GlassCard";
import { ParticlePath } from "../components/ParticlePath";
import { Pill } from "../components/Pill";
import { VIDEO_CONFIG, VideoFormat, getFormatConfig } from "../config";

type Scene3FlowProps = {
  format: VideoFormat;
};

export const Scene3Flow = ({ format }: Scene3FlowProps) => {
  const frame = useCurrentFrame();
  const { safe } = getFormatConfig(format);
  const fadeIn = interpolate(frame, [0, 16], [0, 1], { extrapolateRight: "clamp" });
  const isVertical = format === "9:16";

  return (
    <AbsoluteFill style={{ padding: `${safe.y}px ${safe.x}px`, opacity: fadeIn }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: isVertical ? "column" : "row",
          alignItems: "center",
          justifyContent: isVertical ? "center" : "space-between",
          gap: isVertical ? 32 : 24,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: isVertical ? 12 : 16, alignItems: isVertical ? "center" : "flex-start" }}>
          <div style={{ fontSize: isVertical ? 20 : 24, fontWeight: 600 }}>Inputs</div>
          <div style={{ display: "flex", flexDirection: isVertical ? "row" : "column", gap: isVertical ? 8 : 12, flexWrap: "wrap", justifyContent: "center" }}>
            {VIDEO_CONFIG.flows.inputs.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </div>

        <GlassCard
          style={{
            padding: isVertical ? "24px 20px" : "32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
            minWidth: isVertical ? 240 : undefined,
          }}
        >
          <div
            style={{
              fontSize: isVertical ? 16 : 22,
              textTransform: "uppercase",
              letterSpacing: 2,
              color: VIDEO_CONFIG.colors.muted,
            }}
          >
            Platform
          </div>
          <div style={{ fontSize: isVertical ? 22 : 28, fontWeight: 600, textAlign: "center" }}>
            {VIDEO_CONFIG.flows.platform}
          </div>
        </GlassCard>

        <div style={{ display: "flex", flexDirection: "column", gap: isVertical ? 12 : 16, alignItems: isVertical ? "center" : "flex-start" }}>
          <div style={{ fontSize: isVertical ? 20 : 24, fontWeight: 600 }}>Outputs</div>
          <div style={{ display: "flex", flexDirection: isVertical ? "row" : "column", gap: isVertical ? 8 : 12, flexWrap: "wrap", justifyContent: "center" }}>
            {VIDEO_CONFIG.flows.outputs.map((item) => (
              <Pill key={item}>{item}</Pill>
            ))}
          </div>
        </div>
      </div>

      {!isVertical && (
        <div
          style={{
            position: "absolute",
            left: "18%",
            right: "18%",
            top: "50%",
            height: 200,
            transform: "translateY(-50%)",
          }}
        >
          <ParticlePath
            path="M0 100 C 200 60 300 60 500 100 S 800 140 1000 90"
            startFrame={8}
            endFrame={70}
          />
        </div>
      )}

      {isVertical && (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "25%",
            bottom: "25%",
            width: 200,
            transform: "translateX(-50%) rotate(90deg)",
          }}
        >
          <ParticlePath
            path="M0 100 C 100 60 150 60 250 100 S 400 140 500 90"
            startFrame={8}
            endFrame={70}
          />
        </div>
      )}
    </AbsoluteFill>
  );
};
