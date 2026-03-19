import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import { BrandBug } from "./components/BrandBug";
import { FilmGrain } from "./components/FilmGrain";
import { NeonGridBackground } from "./components/NeonGridBackground";
import { VIDEO_CONFIG, VideoFormat, getSceneFrames } from "./config";
import { Scene0Brand } from "./scenes/Scene0Brand";
import { Scene1InputMagic } from "./scenes/Scene1InputMagic";
import { Scene2Features } from "./scenes/Scene2Features";
import { Scene3Flow } from "./scenes/Scene3Flow";
import { Scene4Proof } from "./scenes/Scene4Proof";
import { Scene5CTA } from "./scenes/Scene5CTA";

export type VideoProps = {
  format: VideoFormat;
};

export const Video = ({ format }: VideoProps) => {
  const { fps } = useVideoConfig();
  const { frames, from } = getSceneFrames(fps);

  return (
    <AbsoluteFill
      style={{
        fontFamily: "Inter, system-ui, sans-serif",
        background: VIDEO_CONFIG.colors.bg,
      }}
    >
      <NeonGridBackground />
      <FilmGrain />

      <Sequence from={from[0]} durationInFrames={frames[0]}>
        <Scene0Brand format={format} />
      </Sequence>
      <Sequence from={from[1]} durationInFrames={frames[1]}>
        <Scene1InputMagic format={format} />
      </Sequence>
      <Sequence from={from[2]} durationInFrames={frames[2]}>
        <Scene2Features format={format} />
      </Sequence>
      <Sequence from={from[3]} durationInFrames={frames[3]}>
        <Scene3Flow format={format} />
      </Sequence>
      <Sequence from={from[4]} durationInFrames={frames[4]}>
        <Scene4Proof format={format} />
      </Sequence>
      <Sequence from={from[5]} durationInFrames={frames[5]}>
        <Scene5CTA format={format} />
      </Sequence>

      <BrandBug format={format} />
    </AbsoluteFill>
  );
};
