const GRAIN_SVG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='120' height='120' filter='url(%23n)' opacity='0.35'/></svg>";

export const FilmGrain = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage: `url(${GRAIN_SVG})`,
        opacity: 0.08,
        mixBlendMode: "soft-light",
        pointerEvents: "none",
      }}
    />
  );
};
