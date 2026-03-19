import { staticFile } from "remotion";
import { VIDEO_CONFIG, VideoFormat, getFormatConfig } from "../config";

type BrandBugProps = {
  format: VideoFormat;
};

export const BrandBug = ({ format }: BrandBugProps) => {
  const { safe } = getFormatConfig(format);

  return (
    <div
      style={{
        position: "absolute",
        top: safe.y,
        left: safe.x,
        display: "flex",
        alignItems: "center",
        gap: 12,
        zIndex: 50,
        padding: "10px 14px",
        borderRadius: 999,
        border: `1px solid ${VIDEO_CONFIG.colors.glassBorder}`,
        background: "rgba(10, 10, 10, 0.5)",
        backdropFilter: "blur(6px)",
      }}
    >
      <img
        src={staticFile(VIDEO_CONFIG.brandBug.logo)}
        alt={VIDEO_CONFIG.brandBug.name}
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          objectFit: "cover",
          border: `1px solid ${VIDEO_CONFIG.colors.glassBorder}`,
        }}
      />
      <div
        style={{
          fontSize: 14,
          letterSpacing: 0.6,
          textTransform: "uppercase",
          color: VIDEO_CONFIG.colors.text,
        }}
      >
        {VIDEO_CONFIG.brandBug.name}
      </div>
    </div>
  );
};
