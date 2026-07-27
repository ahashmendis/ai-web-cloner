"use client";

import { useState, useCallback, useEffect } from "react";
import { cn } from "@/lib/utils";

/* ── Types ── */

interface TestimonialCardData {
  category: string;
  quote: string;
  client: string;
  variant: "dark" | "light";
}

/* ── Data ── */

const testimonials: TestimonialCardData[] = [
  {
    category: "Premium brand identity & web experience",
    quote: "You brought my vision to life better than I imagined.",
    client: "Finoptimize — Luthando Ndlovu",
    variant: "dark",
  },
  {
    category: "Modern branding & digital transformation",
    quote: "Our brand finally reflects the quality of our craftsmanship.",
    client: "Menro Furniture",
    variant: "light",
  },
  {
    category: "High-converting content & brand visuals",
    quote: "Fast, creative, and exactly what our brand needed.",
    client: "Active Edge",
    variant: "dark",
  },
];

/* ── Component ── */

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleCardClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ── Header ── */}
        <div className="mb-16 max-w-3xl">
          <p className="section-label mb-4">Client Energy</p>
          <h2 className="text-3xl font-semibold leading-snug tracking-tight text-[var(--color-warm)] sm:text-4xl lg:text-5xl">
            Proof that feels less like praise and more like momentum.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-warm-muted)] sm:text-lg">
            The best signal is not a polished compliment. It is what happens when
            a brand starts sounding sharper, moving faster, and being remembered
            by the right audience.
          </p>
        </div>

        {/* ── Cards stage ── */}
        <div className="testimonials-stage">
          {/* Desktop: all cards side-by-side */}
          <div className="hidden gap-6 md:flex">
            {testimonials.map((card, index) => (
              <button
                key={card.category}
                type="button"
                onClick={() => handleCardClick(index)}
                className={cn(
                  "testimonial-card group flex flex-1 cursor-pointer flex-col rounded-[30px] p-10 text-left transition-all duration-400",
                  card.variant === "light"
                    ? "testimonial-card-light text-[#030303]"
                    : "text-[var(--color-warm)]",
                  activeIndex === index
                    ? "scale-[1.02] opacity-100"
                    : "scale-100 opacity-70 hover:opacity-90"
                )}
              >
                <span
                  className={cn(
                    "text-xs font-medium uppercase tracking-[0.05em]",
                    card.variant === "light"
                      ? "text-[rgba(3,3,3,0.5)]"
                      : "text-[rgba(247,247,242,0.56)]"
                  )}
                >
                  {card.category}
                </span>
                <p
                  className={cn(
                    "mt-5 text-[20px] leading-[30px] italic",
                    card.variant === "light"
                      ? "text-[#030303]"
                      : "text-[var(--color-warm)]"
                  )}
                >
                  &ldquo;{card.quote}&rdquo;
                </p>
                <div className="mt-7">
                  <strong
                    className={cn(
                      "text-base font-semibold",
                      card.variant === "light"
                        ? "text-[#030303]"
                        : "text-[var(--color-warm)]"
                    )}
                  >
                    {card.client}
                  </strong>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile/Tablet: single card carousel with dot indicators */}
          <div className="md:hidden">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((card) => (
                  <div key={card.category} className="w-full shrink-0 px-1">
                    <button
                      type="button"
                      className={cn(
                        "testimonial-card flex w-full cursor-pointer flex-col rounded-[30px] p-10 text-left",
                        card.variant === "light"
                          ? "testimonial-card-light text-[#030303]"
                          : "text-[var(--color-warm)]"
                      )}
                    >
                      <span
                        className={cn(
                          "text-xs font-medium uppercase tracking-[0.05em]",
                          card.variant === "light"
                            ? "text-[rgba(3,3,3,0.5)]"
                            : "text-[rgba(247,247,242,0.56)]"
                        )}
                      >
                        {card.category}
                      </span>
                      <p
                        className={cn(
                          "mt-5 text-[20px] leading-[30px] italic",
                          card.variant === "light"
                            ? "text-[#030303]"
                            : "text-[var(--color-warm)]"
                        )}
                      >
                        &ldquo;{card.quote}&rdquo;
                      </p>
                      <div className="mt-7">
                        <strong
                          className={cn(
                            "text-base font-semibold",
                            card.variant === "light"
                              ? "text-[#030303]"
                              : "text-[var(--color-warm)]"
                          )}
                        >
                          {card.client}
                        </strong>
                      </div>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="mt-8 flex items-center justify-center gap-3">
              {testimonials.map((card, index) => (
                <button
                  key={card.category}
                  type="button"
                  aria-label={`Go to testimonial ${index + 1}`}
                  onClick={() => handleCardClick(index)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300",
                    activeIndex === index
                      ? "w-8 bg-[var(--color-warm)]"
                      : "w-2.5 bg-[rgba(247,247,242,0.25)] hover:bg-[rgba(247,247,242,0.4)]"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
