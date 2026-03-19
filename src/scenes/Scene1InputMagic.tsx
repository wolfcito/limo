import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import { GlassCard } from "../components/GlassCard";
import { ParticlePath } from "../components/ParticlePath";
import { VIDEO_CONFIG, VideoFormat, getFormatConfig } from "../config";

type Scene1InputMagicProps = {
  format: VideoFormat;
};

export const Scene1InputMagic = ({ format }: Scene1InputMagicProps) => {
  const frame = useCurrentFrame();
  const { safe } = getFormatConfig(format);
  const isVertical = format === "9:16";
  const prompt = VIDEO_CONFIG.promptLine;
  const typedCount = Math.min(
    prompt.length,
    Math.floor(interpolate(frame, [6, 48], [0, prompt.length], { extrapolateRight: "clamp" }))
  );
  const typedText = prompt.slice(0, typedCount);
  const cursorOpacity = Math.sin(frame / 3) > 0 ? 1 : 0.2;
  const successOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateRight: "clamp",
  });
  const underlineWidth = Math.round(
    interpolate(frame, [56, 76], [0, isVertical ? 160 : 220], { extrapolateRight: "clamp" })
  );

  return (
    <AbsoluteFill style={{ padding: `${safe.y}px ${safe.x}px` }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          gap: isVertical ? 24 : 32,
        }}
      >
        <GlassCard style={{ maxWidth: isVertical ? "100%" : 820 }}>
          <div style={{ color: VIDEO_CONFIG.colors.muted, fontSize: isVertical ? 14 : 16 }}>
            Prompt
          </div>
          <div
            style={{
              fontSize: isVertical ? 22 : 28,
              fontWeight: 600,
              color: VIDEO_CONFIG.colors.text,
              marginTop: isVertical ? 10 : 12,
              letterSpacing: -0.4,
            }}
          >
            {typedText}
            <span style={{ opacity: cursorOpacity }}>|</span>
          </div>
        </GlassCard>

        <div style={{ display: "flex", alignItems: "center", gap: isVertical ? 14 : 18 }}>
          <div
            style={{
              padding: isVertical ? "10px 20px" : "12px 24px",
              borderRadius: 999,
              background: VIDEO_CONFIG.colors.accent,
              color: VIDEO_CONFIG.colors.bg,
              fontWeight: 700,
              fontSize: isVertical ? 14 : 16,
              letterSpacing: 0.4,
              boxShadow: `0 0 30px ${VIDEO_CONFIG.colors.accentSoft}`,
            }}
          >
            Generate
          </div>
          <div style={{ color: VIDEO_CONFIG.colors.muted, fontSize: isVertical ? 12 : 14 }}>
            3 steps
          </div>
        </div>

        <div style={{ position: "relative", height: isVertical ? 120 : 140 }}>
          <div style={{ position: "absolute", inset: 0 }}>
            <ParticlePath
              path={isVertical ? "M40 80 C 180 30 320 30 460 80 S 700 130 860 50" : "M80 90 C 260 40 420 40 600 90 S 940 150 1120 60"}
              startFrame={20}
              endFrame={70}
            />
          </div>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: isVertical ? 5 : 10,
              textAlign: "right",
              opacity: successOpacity,
            }}
          >
            <div style={{ fontSize: isVertical ? 22 : 28, fontWeight: 600 }}>
              {VIDEO_CONFIG.successText}
            </div>
            <div
              style={{
                height: isVertical ? 3 : 4,
                width: underlineWidth,
                borderRadius: 999,
                background: VIDEO_CONFIG.colors.accent,
                marginLeft: "auto",
                marginTop: isVertical ? 6 : 8,
              }}
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
