# Remotion Trailer - Internal Brief

## One-liner value prop
Wolfcito builds DenLabs: onchain tools and mini-products for Web3 builders.

## Target user
Web3 builders and ecosystem collaborators.

## Key features (max 6 words)
- Onchain tools lab
- Token spray distribution
- Identity primitives
- Treasury rails
- Agent payment standards
- x402 / ERC-8004 experiments

## Proof point
Building in public • Open experiments • Real prototypes

## CTA
Collabs / Work with me - https://wolfcito.vercel.app/collab

---

# Remotion Video Instructions

## Quick Start

```bash
# Install dependencies
pnpm install

# Start preview
pnpm run video:preview
# or
npx remotion preview
```

## Available Compositions

| Composition | FPS | Size | Duration |
|-------------|-----|------|----------|
| WolfcitoTrailer16x9 | 30 | 1920x1080 | 18 sec |
| WolfcitoTrailer9x16 | 30 | 1080x1920 | 18 sec |

## Project Structure

```
src/
├── remotion.tsx        # Remotion entry point
├── Root.tsx            # Compositions registry
├── Video.tsx           # Main video composition
├── config.ts           # All copy, colors, timings, toggles
├── scenes/
│   ├── Scene0Brand.tsx     # Cold open (0-1.2s)
│   ├── Scene1InputMagic.tsx # Prompt → Build (1.2-4s)
│   ├── Scene2Features.tsx   # Features montage (4-7s)
│   ├── Scene3Flow.tsx       # How it works (7-11s)
│   ├── Scene4Proof.tsx      # Credibility (11-15s)
│   └── Scene5CTA.tsx        # CTA lock-in (15-18s)
└── components/
    ├── BrandBug.tsx         # Persistent brand overlay
    ├── NeonGridBackground.tsx
    ├── FilmGrain.tsx
    ├── GlassCard.tsx
    ├── GlowSweep.tsx
    ├── ParticlePath.tsx
    └── Pill.tsx
```

## Customization

### Edit Copy, Colors, and Timings

All configuration is centralized in `src/config.ts`:

```typescript
// Change project name and tagline
projectName: "Wolfcito",
tagline: "Building DenLabs: onchain tools & mini-products.",

// Update CTA
cta: {
  text: "Collabs / Work with me",
  link: "https://wolfcito.vercel.app/collab",
  subtext: "Collabs via form only...",
},

// Adjust colors
colors: {
  bg: "#0a0a0a",
  accent: "#32d1cf",
  // ...
},

// Modify scene durations (in seconds)
scenes: {
  scene0: 1.2,
  scene1: 2.8,
  scene2: 3.0,
  scene3: 4.0,
  scene4: 4.0,
  scene5: 3.0,
},

// Enable/disable formats
formats: ["16:9", "9:16"],  // or ["16:9"] for horizontal only
```

### Assets

Place assets in `public/`:
- `avatar.png` - Profile image for brand bug and CTA
- `banner.png` - Background banner for cold open

## Render Commands (DO NOT RUN UNLESS REQUESTED)

```bash
# Render 16:9 horizontal format
npx remotion render WolfcitoTrailer16x9 out/wolfcito-trailer-16x9.mp4

# Render 9:16 vertical format
npx remotion render WolfcitoTrailer9x16 out/wolfcito-trailer-9x16.mp4

# Render with custom quality
npx remotion render WolfcitoTrailer16x9 out/trailer-hq.mp4 --crf=18

# Render specific frame range
npx remotion render WolfcitoTrailer16x9 out/trailer.mp4 --frames=0-90
```

## Scene Breakdown

### Scene 0: Brand Cold Open (0-1.2s)
- Neon grid background activates
- Large project name with scale punch effect
- Tagline fades in
- Blurred banner background

### Scene 1: Input → Magic (1.2-4s)
- Typing animation in prompt card
- Generate button with glow
- Particle path animation
- Success text reveal with underline

### Scene 2: Features Montage (4-7s)
- Stacked card carousel
- Highlight cycle through 6 features
- Smooth transitions between cards

### Scene 3: Flow Diagram (7-11s)
- Inputs → Platform → Outputs flow
- Animated particle path
- Responsive layout for 9:16

### Scene 4: Credibility (11-15s)
- "Built for Web3 builders" headline
- Proof statement
- Ecosystem pills
- "Now shipping" card

### Scene 5: CTA (15-18s)
- Strong CTA headline
- URL button with glow
- Avatar + handle lockup
- Glow sweep animation

## Troubleshooting

### Multiple lockfiles error
Remove extra lockfiles and keep only one:
```bash
rm package-lock.json bun.lockb
pnpm install
```

### Zod version mismatch
```bash
pnpm add zod@3.22.3
```

### Preview not starting
```bash
npx remotion --version  # Verify installation
pnpm exec remotion preview  # Try with pnpm exec
```
