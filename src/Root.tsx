import { Composition } from "remotion";
import { loadFont } from "@remotion/google-fonts/Inter";
import { Video } from "./Video";
import { VIDEO_CONFIG, getDurationInFrames } from "./config";

loadFont("normal", {
  weights: ["400", "600", "700"],
  subsets: ["latin"],
});

export const RemotionRoot = () => {
  return (
    <>
      {VIDEO_CONFIG.formats.includes("16:9") && (
        <Composition
          id="WolfcitoTrailer16x9"
          component={Video}
          width={VIDEO_CONFIG.sizes["16:9"].width}
          height={VIDEO_CONFIG.sizes["16:9"].height}
          fps={30}
          durationInFrames={getDurationInFrames(30)}
          defaultProps={{ format: "16:9" }}
        />
      )}
      {VIDEO_CONFIG.formats.includes("9:16") && (
        <Composition
          id="WolfcitoTrailer9x16"
          component={Video}
          width={VIDEO_CONFIG.sizes["9:16"].width}
          height={VIDEO_CONFIG.sizes["9:16"].height}
          fps={30}
          durationInFrames={getDurationInFrames(30)}
          defaultProps={{ format: "9:16" }}
        />
      )}
    </>
  );
};
