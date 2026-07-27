"use client";

import GradientBlinds from "@/components/GradientBlinds/GradientBlinds";
import TrueFocus from "@/components/TrueFocus/TrueFocus";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-section relative flex w-full items-center justify-center overflow-hidden bg-black"
      style={{ height: "100vh", minHeight: 700 }}
    >
      {/* ── Gradient Blinds background ── */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <GradientBlinds
          gradientColors={["#FF6B00", "#FF8C40", "#FF6B00"]}
          angle={-10}
          noise={0.5}
          blindCount={14}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        />
      </div>

      {/* ── Gradient overlays ── */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "radial-gradient(at 50% 34%, rgba(255,255,255,0.06), rgba(255,255,255,0) 50%), linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.5) 90%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.15) 48%, rgba(0,0,0,0.5))",
        }}
      />

      {/* ── Grid + wave overlays ── */}
      <div className="pointer-events-none hero-grid-overlay absolute inset-0 z-[3]" />
      <div className="pointer-events-none hero-wave-overlay absolute inset-0 z-[4]" />

      {/* ── Centered content ── */}
      <div className="pointer-events-none relative z-10 mx-auto max-w-[900px] -mt-24 px-6 text-center">
        <TrueFocus
          sentence="Growth, Engineered."
          animationDuration={2}
          pauseBetweenAnimations={1}
          blurAmount={5}
          borderColor="#FF6B00"
          glowColor="rgba(255, 107, 0, 0.6)"
          className="mx-auto max-w-[800px]"
        />

        <p
          className="mx-auto mt-6 max-w-[560px] text-[18px] leading-[28px]"
          style={{ color: "rgba(247, 247, 242, 0.72)" }}
        >
          AI automation, web design, brand identity, and content systems
          built to produce measurable results, not just presence.
        </p>

        <div className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            className="btn-3d rounded-2xl px-7 font-bold"
            style={{
              height: 52,
              fontSize: 14.4,
            }}
          >
            Start Your Growth System
          </button>

          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-2xl px-7 font-bold text-[#f7f7f2] transition-all"
            style={{
              height: 52,
              fontSize: 14.4,
              border: "1px solid rgba(247, 247, 242, 0.2)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(247,247,242,0.4)";
              e.currentTarget.style.background = "rgba(247,247,242,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(247,247,242,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
