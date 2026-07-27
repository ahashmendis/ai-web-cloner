"use client";

const pills = [
  "15 min discovery call",
  "System architecture",
  "Growth roadmap",
];

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="final-cta-section"
      style={{
        padding: "120px 72px",
        background:
          "radial-gradient(at 50% 108%, rgba(255,255,255,0.18), rgba(0,0,0,0) 34%), radial-gradient(circle at 12% 16%, rgba(255,255,255,0.08), rgba(0,0,0,0) 28%)",
        textAlign: "center",
      }}
    >
      <div
        className="final-cta-card"
        style={{
          maxWidth: 700,
          margin: "0 auto",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(0,0,0,0) 34%), linear-gradient(rgba(255,255,255,0.043), rgba(255,255,255,0.016))",
          borderRadius: 40,
          padding: "60px 48px",
        }}
      >
        <p className="section-label">Final move</p>

        <h2
          className="section-heading"
          style={{
            fontSize: 79.2,
            fontWeight: 850,
            lineHeight: 1,
            color: "#f7f7f2",
            marginTop: 16,
          }}
        >
          Ready to make your brand impossible to ignore?
        </h2>

        {/* Pills */}
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 32,
          }}
        >
          {pills.map((pill) => (
            <span
              key={pill}
              style={{
                fontSize: 14,
                padding: "8px 16px",
                borderRadius: 100,
                background: "rgba(247,247,242,0.08)",
                color: "rgba(247,247,242,0.7)",
              }}
            >
              {pill}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <button
          className="btn-3d"
          style={{
            marginTop: 32,
            padding: "14px 32px",
            fontSize: 16,
            fontWeight: 600,
            borderRadius: 16,
            cursor: "pointer",
            border: "none",
          }}
        >
          Book a Call with Growthscape
        </button>

        {/* Closing text */}
        <p
          style={{
            fontSize: 16,
            color: "rgba(247,247,242,0.56)",
            marginTop: 24,
          }}
        >
          Be quick. A smarter system starts with one focused conversation.
        </p>
      </div>
    </section>
  );
}
