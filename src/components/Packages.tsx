"use client";

const SERVICES = [
  {
    label: "Intelligence",
    name: "AI Automation",
    description:
      "Custom AI workflows, chatbots, and process automation that eliminate repetitive tasks and scale your operations without adding headcount.",
    features: [
      "AI-powered workflows and integrations",
      "Custom chatbots and virtual assistants",
      "Process automation and optimization",
      "Data-driven decision systems",
    ],
  },
  {
    label: "Digital",
    name: "Web Design & Development",
    description:
      "High-performance websites and web applications built with modern frameworks — engineered for speed, conversion, and scale.",
    features: [
      "Next.js and React applications",
      "E-commerce and SaaS platforms",
      "Performance-optimized architecture",
      "Responsive, accessible design",
    ],
  },
  {
    label: "Identity",
    name: "Brand Identity",
    description:
      "Complete brand systems — from strategy and positioning to visual identity — designed to be unmistakable and unforgettable.",
    features: [
      "Brand strategy and positioning",
      "Visual identity systems",
      "Logo design and guidelines",
      "Brand voice and messaging",
    ],
  },
  {
    label: "Systems",
    name: "Content Systems",
    description:
      "Scalable content infrastructure — from CMS setup to content strategy — that turns your message into a growth engine.",
    features: [
      "Content strategy and planning",
      "CMS setup and configuration",
      "Editorial workflow design",
      "Content production pipelines",
    ],
  },
] as const;

interface ServiceCardProps {
  label: string;
  name: string;
  description: string;
  features: readonly string[];
  variant: "dark" | "light";
  buttonClass: string;
}

function ServiceCard({
  label,
  name,
  description,
  features,
  variant,
  buttonClass,
}: ServiceCardProps) {
  const cardClass = variant === "dark" ? "package-card-dark" : "package-card-light";
  const textColor = variant === "dark" ? "text-[#f7f7f2]" : "text-[#030303]";
  const mutedColor = variant === "dark" ? "rgba(247,247,242,0.56)" : "rgba(0,0,0,0.56)";
  const borderColor =
    variant === "dark"
      ? "border-b border-solid border-[rgba(247,247,242,0.08)]"
      : "border-b border-solid border-[rgba(0,0,0,0.08)]";

  return (
    <article
      className={`${cardClass} ${textColor} flex flex-1 flex-col rounded-[30px] p-12`}
    >
      <span
        className="text-xs font-medium uppercase tracking-[0.05em]"
        style={{ color: mutedColor }}
      >
        {label}
      </span>

      <h3 className="mt-2 text-[37.44px] leading-[36.7px] font-normal">{name}</h3>

      <p className="mt-4 text-base leading-6" style={{ color: mutedColor }}>
        {description}
      </p>

      <ul className="mt-6 list-none p-0">
        {features.map((feature, i) => (
          <li
            key={feature}
            className={`py-2 text-base leading-6 ${i < features.length - 1 ? borderColor : ""}`}
          >
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className={`${buttonClass} mt-8 w-full cursor-pointer rounded-xl border-none px-6 py-3.5 text-center text-base font-medium no-underline`}
      >
        Start Your Growth System
      </a>
    </article>
  );
}

export default function Packages() {
  return (
    <section className="mx-auto max-w-[1440px] px-[72px] py-[120px]">
      <div className="mb-10">
        <p className="section-label">What We Build</p>
        <h2 className="mt-2 text-4xl leading-tight font-normal">
          Systems engineered for growth.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {SERVICES.map((service, i) => (
          <ServiceCard
            key={service.name}
            label={service.label}
            name={service.name}
            description={service.description}
            features={service.features}
            variant={i % 2 === 0 ? "dark" : "light"}
            buttonClass={i % 2 === 0 ? "btn-3d" : "btn-3d-dark"}
          />
        ))}
      </div>

      <p className="mt-8 text-center text-sm" style={{ color: "rgba(247,247,242,0.56)" }}>
        Every engagement starts with understanding your business. No cookie-cutter solutions.
      </p>
    </section>
  );
}
