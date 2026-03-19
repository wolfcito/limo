export type VideoFormat = "16:9" | "9:16";

export const VIDEO_CONFIG = {
  projectName: "Wolfcito",
  handle: "@akawolfcito",
  tagline: "Building DenLabs: onchain tools & mini-products.",
  cta: {
    text: "Collabs / Work with me",
    link: "https://wolfcito.vercel.app/collab",
    subtext: "Collabs via form only - helps me avoid scams & keep requests organized.",
  },
  proof: {
    label: "Proof",
    value: "Building in public • Open experiments • Real prototypes",
  },
  tone: "premium tech / cinematic UI trailer",
  features: [
    "Onchain tools lab",
    "Token spray distribution",
    "Identity primitives",
    "Treasury rails",
    "Agent payment standards",
    "x402 / ERC-8004 experiments",
  ],
  ecosystem: ["WalletConnect", "Alchemy", "Avalanche"],
  flows: {
    inputs: ["Builders", "Ideas", "Onchain data"],
    platform: "DenLabs platform",
    outputs: ["Prototypes", "Experiments", "Tools"],
  },
  promptLine: "Ship onchain tools faster",
  successText: "Success",
  colors: {
    bg: "#0a0a0a",
    bgAlt: "#0f0f0f",
    text: "#f7f7f7",
    muted: "#9aa0a6",
    accent: "#32d1cf",
    accentSoft: "rgba(50, 209, 207, 0.2)",
    glassBorder: "rgba(255, 255, 255, 0.12)",
  },
  scenes: {
    scene0: 1.2,
    scene1: 2.8,
    scene2: 3.0,
    scene3: 4.0,
    scene4: 4.0,
    scene5: 3.0,
  },
  formats: ["16:9", "9:16"],
  sizes: {
    "16:9": { width: 1920, height: 1080 },
    "9:16": { width: 1080, height: 1920 },
  },
  safeMargins: {
    "16:9": { x: 96, y: 80 },
    "9:16": { x: 72, y: 140 },
  },
  brandBug: {
    logo: "avatar.png",
    name: "Wolfcito",
  },
};

export const getDurationInFrames = (fps: number) => {
  const totalSeconds = Object.values(VIDEO_CONFIG.scenes).reduce(
    (sum, value) => sum + value,
    0
  );
  return Math.round(totalSeconds * fps);
};

export const getSceneFrames = (fps: number) => {
  const { scenes } = VIDEO_CONFIG;
  const sceneOrder = [
    scenes.scene0,
    scenes.scene1,
    scenes.scene2,
    scenes.scene3,
    scenes.scene4,
    scenes.scene5,
  ];

  const frames = sceneOrder.map((duration) => Math.round(duration * fps));
  const from = frames.reduce<number[]>((acc, value, index) => {
    if (index === 0) return [0];
    const prev = acc[index - 1] ?? 0;
    const prevDuration = frames[index - 1] ?? 0;
    return [...acc, prev + prevDuration];
  }, []);

  return { frames, from };
};

export const getFormatConfig = (format: VideoFormat) => {
  return {
    size: VIDEO_CONFIG.sizes[format],
    safe: VIDEO_CONFIG.safeMargins[format],
  };
};
