// A restrained, geometric stand-in for product photography: faceted
// polygons echo raw crystal/powder form without claiming to be a photo
// of actual stock. Kept license-free and infinitely reusable per grade.
export default function CrystalGlyph({ color, large = false }: { color: string; large?: boolean }) {
  const id = color.replace("#", "");
  return (
    <svg
      viewBox="0 0 240 240"
      width="100%"
      height="100%"
      role="img"
      aria-hidden="true"
      className={large ? "crystal-glyph crystal-glyph--large" : "crystal-glyph"}
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color} stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <polygon points="120,20 190,70 170,150 120,190 70,150 50,70" fill={`url(#g-${id})`} />
      <polygon points="120,20 190,70 120,95" fill={color} fillOpacity="0.35" />
      <polygon points="50,70 120,95 70,150" fill={color} fillOpacity="0.2" />
      <polygon points="120,95 170,150 120,190 70,150" fill={color} fillOpacity="0.5" />
      <circle cx="185" cy="185" r="6" fill={color} fillOpacity="0.6" />
      <circle cx="200" cy="165" r="3.5" fill={color} fillOpacity="0.5" />
      <circle cx="35" cy="95" r="4.5" fill={color} fillOpacity="0.5" />
      <circle cx="55" cy="185" r="3" fill={color} fillOpacity="0.4" />
    </svg>
  );
}
