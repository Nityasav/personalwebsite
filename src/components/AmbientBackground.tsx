"use client";

/**
 * Full-page ambient layer: floating orbs, gradient shift, grid, grain.
 * Purely decorative; does not change content or structure.
 */
export const AmbientBackground = () => (
  <div
    className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    aria-hidden="true"
  >
    {/* Subtle grid — slow drift */}
    <div
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        animation: "grain 40s linear infinite",
      }}
    />
    {/* Animated gradient blob — soft glow that moves */}
    <div
      className="absolute -left-1/4 top-1/4 h-[80vmax] w-[80vmax] rounded-full bg-white/[0.03] blur-[80px]"
      style={{
        animation: "gradientShift 18s ease-in-out infinite",
      }}
    />
    <div
      className="absolute -right-1/4 bottom-1/4 h-[70vmax] w-[70vmax] rounded-full bg-white/[0.025] blur-[100px]"
      style={{
        animation: "gradientShift 22s ease-in-out infinite 3s",
      }}
    />
    <div
      className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.02] blur-[120px]"
      style={{
        animation: "pulseGlow 12s ease-in-out infinite 1s",
      }}
    />

    {/* Floating orbs — different sizes and positions */}
    <div
      className="absolute left-[15%] top-[20%] h-64 w-64 rounded-full bg-white/[0.04] blur-3xl md:h-80 md:w-80"
      style={{
        animation: "float 20s ease-in-out infinite",
      }}
    />
    <div
      className="absolute right-[20%] top-[60%] h-48 w-48 rounded-full bg-white/[0.03] blur-2xl"
      style={{
        animation: "floatSlow 25s ease-in-out infinite 2s",
      }}
    />
    <div
      className="absolute bottom-[25%] left-[25%] h-56 w-56 rounded-full bg-white/[0.035] blur-3xl"
      style={{
        animation: "float 22s ease-in-out infinite 4s",
      }}
    />
    <div
      className="absolute left-[60%] top-[15%] h-40 w-40 rounded-full bg-white/[0.025] blur-2xl"
      style={{
        animation: "floatSlow 28s ease-in-out infinite 1s",
      }}
    />
    <div
      className="absolute right-[10%] bottom-[30%] h-72 w-72 rounded-full bg-white/[0.02] blur-[60px]"
      style={{
        animation: "drift 24s ease-in-out infinite 5s",
      }}
    />

    {/* Subtle grain overlay */}
    <div
      className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        animation: "grain 30s linear infinite",
      }}
    />
  </div>
);
