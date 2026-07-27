"use client";

import { useEffect, useRef, useCallback } from "react";

const CARDS = [
  {
    label: "Founder & Creative Technologist",
    heading: "Ahash Mendis",
    description:
      "Led by Ahash, Growthscape builds technology-driven systems that turn brands into measurable growth engines — not just content.",
  },
  {
    label: "No Fluff. Just Results.",
    heading: "Measurable Growth",
    description:
      "Every project is measured by outcomes, not outputs. AI automation, web systems, and brand infrastructure designed to produce ROI — not just impressions.",
  },
  {
    label: "Operating Belief",
    heading: "Technology before trend",
    description:
      "Trends fade. Systems compound. The work is built around business goals, scalable infrastructure, and technology that works while you sleep.",
  },
] as const;

const STAGGER_DELAYS = ["0s", "0.08s", "0.16s"] as const;

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          const cards = cardsRef.current?.querySelectorAll(".manifesto-card");
          cards?.forEach((card) => {
            card.classList.add("animate-fade-in-up");
          });
        }
      }
    },
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [handleIntersection]);

  return (
    <section
      id="who"
      ref={sectionRef}
      className="manifesto-section px-[72px] py-[120px] max-w-[1440px] mx-auto max-md:px-6 max-md:py-20"
    >
      <div className="manifesto-layout flex gap-[80px] items-start max-md:flex-col max-md:gap-12">
        {/* Left Column */}
        <div className="manifesto-intro flex-[0_0_400px] max-md:flex-none max-md:w-full">
          <p className="section-label">Who Are We?</p>
          <h2
            className="mt-4 section-heading"
            style={{
              fontSize: "79.2px",
              fontWeight: 850,
              lineHeight: "72.864px",
              color: "#f7f7f2",
            }}
          >
            Technology First.
            <br />
            Results Driven.
          </h2>
          <p
            className="mt-6"
            style={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "rgba(247,247,242,0.66)",
            }}
          >
            Growthscape specialises in building scalable digital systems — AI
            automation, web platforms, brand identity, and content
            infrastructure — engineered for measurable growth, not vanity metrics.
          </p>
        </div>

        {/* Right Column */}
        <div
          ref={cardsRef}
          className="manifesto-cards flex-1 flex flex-col gap-4"
        >
          {CARDS.map((card, i) => (
            <article
              key={card.heading}
              className="manifesto-card card-glass opacity-0"
              style={{ padding: "40px", transitionDelay: STAGGER_DELAYS[i] }}
            >
              <div
                className="card-label uppercase tracking-widest"
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "rgba(247,247,242,0.56)",
                }}
              >
                {card.label}
              </div>
              <h3
                className="mt-3"
                style={{
                  fontSize: "37.44px",
                  fontWeight: 400,
                  lineHeight: "36.6912px",
                  color: "#f7f7f2",
                }}
              >
                {card.heading}
              </h3>
              <p
                className="mt-4"
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(247,247,242,0.66)",
                }}
              >
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
