"use client";

import { useEffect, useRef, useState } from "react";

/* ── Step data ── */

interface ProcessStep {
  number: string;
  heading: string;
  description: string;
  tags: string[];
}

const steps: ProcessStep[] = [
  {
    number: "01",
    heading: "Discovery & Strategy",
    description:
      "We audit your business, audience, and tech stack first — mapping goals to systems before a single line of code is written.",
    tags: ["Business Audit", "Technical Discovery", "Goal Mapping", "System Architecture"],
  },
  {
    number: "02",
    heading: "Design & Architecture",
    description:
      "Wireframes, brand systems, and technical blueprints are prepared so the build is intentional — not improvised.",
    tags: ["UI/UX Design", "Brand Identity", "Technical Planning", "Content Strategy"],
  },
  {
    number: "03",
    heading: "Build & Deploy",
    description:
      "AI automations, web platforms, and content systems are developed, tested, and launched — engineered for speed and scale.",
    tags: ["Web Development", "AI Automation", "Quality Assurance", "Production Deploy"],
  },
  {
    number: "04",
    heading: "Optimize & Scale",
    description:
      "Performance is measured, systems are refined, and growth loops are tightened — because the best work compounds over time.",
    tags: ["Analytics & Reporting", "Performance Tuning", "System Iteration", "Growth Scaling"],
  },
];

/* ── Component ── */

export default function ProcessSteps() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState<boolean[]>(new Array(steps.length).fill(false));

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;

    const cards = node.querySelectorAll<HTMLElement>(".process-step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Array.from(cards).indexOf(entry.target as HTMLElement);
            if (idx !== -1) {
              setVisible((prev) => {
                const next = [...prev];
                next[idx] = true;
                return next;
              });
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      className="process-section px-6 py-[72px] md:px-[72px] md:py-[120px]"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* ── Header ── */}
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4">How We Work</p>
          <h2 className="mb-4 text-[32px] font-medium leading-[40px] tracking-tight text-warm md:text-[42px] md:leading-[50px]">
            A repeatable system built for measurable results.
          </h2>
          <p className="text-base leading-6 text-warm/66">
            Discovery, design, build, and optimization are treated as one loop. The system
            keeps compounding because every phase feeds the next.
          </p>
        </div>

        {/* ── Process Grid ── */}
        <div
          ref={gridRef}
          className="process-grid grid grid-cols-1 gap-4 md:grid-cols-2"
        >
          {steps.map((step, i) => (
            <article
              key={step.number}
              className="process-step process-card p-10"
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.9s, transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)",
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              {/* Step number pill */}
              <span
                className="inline-block rounded-full border border-warm/14 px-3.5 py-1.5 text-sm font-semibold text-warm/48"
              >
                {step.number}
              </span>

              {/* Heading */}
              <h3 className="mt-5 text-[28px] font-medium leading-[36px] text-warm">
                {step.heading}
              </h3>

              {/* Description */}
              <p className="mt-3 text-base leading-6 text-warm/66">
                {step.description}
              </p>

              {/* Tag pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
