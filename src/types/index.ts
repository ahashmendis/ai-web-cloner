/* ── Site-wide TypeScript interfaces for Growthscape ── */

export interface NavLink {
  label: string;
  href: string;
}

export interface BrandLogo {
  src: string;
  alt: string;
  hoverSrc?: string;
}

export interface WhoCard {
  label: string;
  heading: string;
  description: string;
}

export interface CaseStudy {
  scene: string;
  clientName: string;
  location?: string;
  heading: string;
  description: string;
  tags: string[];
  impactStats: ImpactStat[];
  videoUrl: string;
  instagramUrl?: string;
}

export interface ImpactStat {
  value: string;
  label: string;
}

export interface ProcessStep {
  number: string;
  heading: string;
  description: string;
  tags: string[];
}

export interface GalleryTile {
  videoUrl: string;
  thumbnailUrl: string;
  index: number;
}

export interface Package {
  type: string;
  name: string;
  frequency: string;
  features: string[];
  variant: "dark" | "light";
}

export interface Testimonial {
  category: string;
  quote: string;
  clientName: string;
  stat: string;
  statLabel: string;
  variant: "dark" | "light";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  phones: { label: string; href: string }[];
  email: { label: string; href: string };
  address: string;
}

export interface FooterLink {
  label: string;
  href: string;
}
