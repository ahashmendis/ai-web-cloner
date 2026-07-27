"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@/components/icons";

const faqData = [
  {
    question: "What services does Growthscape offer?",
    answer:
      "Growthscape builds four core systems: AI Automation, Web Design & Development, Brand Identity, and Content Systems. Every engagement is engineered for measurable growth, not vanity metrics.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. Growthscape is based in Sri Lanka but works with brands globally. Our systems are built to scale across markets and timezones.",
  },
  {
    question: "How does AI automation work for my business?",
    answer:
      "We audit your operations, identify repetitive workflows, and build custom AI systems — chatbots, process automation, data pipelines — that eliminate manual work and scale without adding headcount.",
  },
  {
    question: "What does a typical project look like?",
    answer:
      "Every project starts with Discovery & Strategy — understanding your business, audience, and tech stack. Then we move through Design, Build, and Optimize phases. Timelines depend on scope, but most projects run 4–12 weeks.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="faq-section"
      style={{
        padding: "10px 68px",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 48 }}>
        <p className="section-label">FAQ</p>
        <h2
          className="section-heading"
          style={{
            fontSize: 80,
            fontWeight: 850,
            lineHeight: 1,
            color: "#f7f7f2",
            marginTop: 12,
          }}
        >
          Questions before the first build?
        </h2>
      </div>

      {/* FAQ List */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="faq-item"
              role="group"
            >
              {/* Question row */}
              <div
                onClick={() => handleToggle(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleToggle(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "22px",
                }}
              >
                <span
                  style={{
                    fontSize: 16,
                    fontWeight: 760,
                    color: "#f7f7f2",
                  }}
                >
                  {item.question}
                </span>
                <span
                  className="faq-icon"
                  style={{
                    fontSize: 24,
                    color: "rgba(247,247,242,0.56)",
                    flexShrink: 0,
                    marginLeft: 16,
                    display: "flex",
                    alignItems: "center",
                    transition: "transform 0.3s",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  {isOpen ? (
                    <MinusIcon width={24} height={24} />
                  ) : (
                    <PlusIcon width={24} height={24} />
                  )}
                </span>
              </div>

              {/* Answer */}
              <div
                style={{
                  maxHeight: isOpen ? 300 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.4s ease, padding-top 0.3s",
                  paddingTop: isOpen ? 0 : 0,
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: "24px",
                    padding: "0 22px 24px",
                    color: "rgba(247,247,242,0.68)",
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
