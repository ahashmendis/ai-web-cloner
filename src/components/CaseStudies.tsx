"use client";

import { useRef, useCallback, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon, InstagramIcon } from "./icons";

interface CaseStudyStat {
  value: string;
  label: string;
}

interface CaseStudy {
  scene: string;
  client: string;
  location?: string;
  heading: string;
  description: string;
  tags: string[];
  stats: CaseStudyStat[];
  video: string;
  instagram: string;
}

const stackStudies: CaseStudy[] = [
  {
    scene: "OUR OWN",
    client: "Growthscape",
    location: "Digital Studio",
    heading: "Built our own brand system from scratch.",
    description:
      "The Growthscape website and brand identity — designed, developed, and deployed as a statement of what this studio stands for: technology-first, results-driven, no fluff.",
    tags: [
      "Full-stack web development",
      "Brand identity system",
      "AI-powered content pipeline",
      "Next.js + Tailwind architecture",
    ],
    stats: [
      { value: "[TODO]", label: "project timeline" },
      { value: "[TODO]", label: "key metric" },
      { value: "[TODO]", label: "outcome" },
      { value: "[TODO]", label: "result" },
    ],
    video: "[TODO – STAKEHOLDER INPUT]",
    instagram: "[TODO – STAKEHOLDER INPUT]",
  },
  {
    scene: "THE MAIN ONE",
    client: "Lenscape Studios",
    location: "Creative Agency",
    heading: "Parent studio — full creative technology infrastructure.",
    description:
      "Built the digital backbone for Lenscape Studios — from brand systems to web platforms.",
    tags: [
      "Creative technology studio",
      "Brand infrastructure",
      "Web platform development",
      "Operational systems",
    ],
    stats: [
      { value: "[TODO]", label: "project timeline" },
      { value: "[TODO]", label: "key metric" },
      { value: "[TODO]", label: "outcome" },
      { value: "[TODO]", label: "result" },
    ],
    video: "[TODO – STAKEHOLDER INPUT]",
    instagram: "[TODO – STAKEHOLDER INPUT]",
  },
];

/* Reel data for "More of our work" card */
const reelVideos = [
  { src: "[TODO – STAKEHOLDER INPUT]", label: "Reel 01" },
  { src: "[TODO – STAKEHOLDER INPUT]", label: "Reel 02" },
  { src: "[TODO – STAKEHOLDER INPUT]", label: "Reel 03" },
  { src: "[TODO – STAKEHOLDER INPUT]", label: "Reel 04" },
  { src: "[TODO – STAKEHOLDER INPUT]", label: "Reel 05" },
  { src: "[TODO – STAKEHOLDER INPUT]", label: "Reel 06" },
];

function StackCard({ study }: { study: CaseStudy }) {
  return (
    <div className="stack-card">
      {/* Left: Video */}
      <div className="stack-card-media">
        <video
          src={study.video}
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        {/* Bottom buttons */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <a
            href={
              study.instagram === "[TODO – STAKEHOLDER INPUT]"
                ? "#"
                : study.instagram
            }
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase" as const,
              color: "#f7f7f2",
              background: "rgba(0,0,0,0.45)",
              padding: "10px 18px",
              borderRadius: 100,
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(247,247,242,0.12)",
              textDecoration: "none",
              transition: "background 0.2s",
              width: "fit-content",
            }}
          >
            <InstagramIcon style={{ width: 14, height: 14 }} />
            View on Instagram
          </a>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              color: "rgba(247,247,242,0.5)",
              padding: "0 4px",
            }}
          >
            Growthscape proof
          </span>
        </div>
      </div>

      {/* Right: Content */}
      <div className="stack-card-content">
        <span className="stack-scene-label">{study.scene}</span>

        <p className="stack-client">
          {study.client.toUpperCase()}
          {study.location && (
            <span style={{ opacity: 0.6 }}>
              {" "}
              &nbsp;{study.location.toUpperCase()}
            </span>
          )}
        </p>

        <h3 className="stack-heading">{study.heading}</h3>

        <p className="stack-description">{study.description}</p>

        <div className="stack-tags">
          {study.tags.map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReelCarouselCard() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  const scroll = useCallback((dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    if (dir === "next" && visibleCount < reelVideos.length) {
      setVisibleCount((c) => {
        const next = Math.min(c + 1, reelVideos.length);
        requestAnimationFrame(() => {
          el.scrollBy({ left: 190, behavior: "smooth" });
        });
        return next;
      });
    } else {
      el.scrollBy({ left: dir === "next" ? 190 : -190, behavior: "smooth" });
    }
  }, [visibleCount]);

  return (
    <div className="stack-reel-card">
      <p className="stack-reel-label">More of our work</p>

      <div className="stack-reel-track" ref={trackRef}>
        {reelVideos.slice(0, visibleCount).map((reel, i) => (
          <div key={i} className="stack-reel-item">
            <video
              src={reel.src}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Reel label overlay */}
            <span
              style={{
                position: "absolute",
                bottom: 12,
                left: 12,
                fontSize: 12,
                fontWeight: 600,
                color: "#f7f7f2",
                textShadow: "0 1px 6px rgba(0,0,0,0.6)",
                letterSpacing: "0.03em",
              }}
            >
              {reel.label}
            </span>
          </div>
        ))}
      </div>

      <div className="stack-reel-nav">
        <button type="button" aria-label="Previous reels" onClick={() => scroll("prev")}>
          <ArrowLeftIcon style={{ width: 18, height: 18 }} />
        </button>
        <button type="button" aria-label="Next reels" onClick={() => scroll("next")}>
          <ArrowRightIcon style={{ width: 18, height: 18 }} />
        </button>
      </div>
    </div>
  );
}

export default function CaseStudies() {
  return (
    <section
      id="work"
      style={{
        background:
          "linear-gradient(rgba(247,247,242,0.05), rgba(0,0,0,0) 22%)",
      }}
    >
      {/* Header — sits above the sticky stack */}
      <div style={{ padding: "120px 72px 0" }}>
        <p className="section-label">Our Work</p>
        <h2
          className="section-heading"
          style={{
            fontSize: 79.2,
            fontWeight: 850,
            lineHeight: "72.86px",
            color: "#f7f7f2",
            marginTop: 12,
            maxWidth: 820,
          }}
        >
          Projects engineered to move brands forward.
        </h2>
      </div>

      {/* CSS Sticky Stack — pure CSS, no JS scroll calculations */}
      <div className="case-studies-stack">
        {stackStudies.map((study, i) => (
          <figure
            key={study.scene}
            className="sticky top-0 h-screen w-full grid place-content-center"
            style={{ zIndex: i + 1 }}
          >
            <div className="w-full px-16">
              <StackCard study={study} />
            </div>
          </figure>
        ))}

        {/* Final card: More of our work — reel carousel */}
        <figure
          className="sticky top-0 h-screen w-full grid place-content-center"
          style={{ zIndex: stackStudies.length + 1 }}
        >
          <div className="w-full px-16">
            <ReelCarouselCard />
          </div>
        </figure>
      </div>
    </section>
  );
}
