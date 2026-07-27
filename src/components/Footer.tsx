"use client";

import Image from "next/image";
import { InstagramIcon, LinkedinIcon } from "@/components/icons";

const companyLinks = [
  { label: "Who We Are", href: "#who" },
  { label: "Our Work", href: "#work" },
  { label: "How We Work", href: "#process" },
  { label: "Packages", href: "#packages" },
];

const resourceLinks = [
  { label: "Case Studies", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer
      className="footer-section"
      style={{
        background: "#030303",
        padding: "58px 72px 0",
        color: "rgba(247,247,242,0.62)",
        position: "relative",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background:
            "radial-gradient(at 50% 0%, rgba(255,255,255,0.08), rgba(0,0,0,0) 34%)",
        }}
      />

      {/* 4-column grid */}
      <div
        className="footer-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
          gap: "0 57.6px",
          maxWidth: 1440,
          margin: "0 auto",
        }}
      >
        {/* ── Col 1: Brand ── */}
        <div className="footer-brand">
          {/* Logo */}
          <Image
            src="/images/GROW/LONG WHITE.png"
            alt="Growthscape Logo"
            width={140}
            height={24}
            className="block"
            style={{ height: 32, width: "auto", transform: "translateX(-20px) scale(9)", transformOrigin: "left center" }}
          />

          <p
            style={{
              fontSize: 14,
              lineHeight: "22px",
              marginTop: 16,
              maxWidth: 300,
            }}
          >
            Creative technology studio delivering AI automation, web design,
            brand identity, and content systems — engineered for measurable growth.
          </p>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 20,
            }}
          >
            <a
              href="https://instagram.com/growthscape"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                color: "rgba(247,247,242,0.62)",
                transition: "color 0.2s",
              }}
            >
              <InstagramIcon width={20} height={20} />
            </a>
            <a
              href="https://facebook.com/growthscape"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{
                color: "rgba(247,247,242,0.62)",
                transition: "color 0.2s",
              }}
            >
              <LinkedinIcon width={20} height={20} />
            </a>
          </div>
        </div>

        {/* ── Col 2: Contact ── */}
        <div className="footer-contact">
          <div style={{ marginBottom: 16 }}>
            <strong
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#f7f7f2",
                display: "block",
                marginBottom: 16,
              }}
            >
              Phone
            </strong>
            <a
              href="tel:+94701987004"
              style={{
                fontSize: 14,
                color: "rgba(247,247,242,0.62)",
                textDecoration: "none",
                display: "block",
                padding: "4px 0",
              }}
            >
              +94 70 198 7004
            </a>
          </div>

          <div>
            <strong
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#f7f7f2",
                display: "block",
                marginBottom: 16,
              }}
            >
              Email
            </strong>
            <a
              href="mailto:growthscape.co@gmail.com"
              style={{
                fontSize: 14,
                color: "rgba(247,247,242,0.62)",
                textDecoration: "none",
                display: "block",
                padding: "4px 0",
              }}
            >
              growthscape.co@gmail.com
            </a>
          </div>
        </div>

        {/* ── Col 3: Company nav ── */}
        <nav className="footer-company">
          <strong
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#f7f7f2",
              display: "block",
              marginBottom: 16,
            }}
          >
            Company
          </strong>
          {companyLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                color: "rgba(247,247,242,0.62)",
                textDecoration: "none",
                display: "block",
                padding: "4px 0",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* ── Col 4: Resources nav ── */}
        <nav className="footer-resources">
          <strong
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "#f7f7f2",
              display: "block",
              marginBottom: 16,
            }}
          >
            Resources
          </strong>
          {resourceLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: 14,
                color: "rgba(247,247,242,0.62)",
                textDecoration: "none",
                display: "block",
                padding: "4px 0",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="footer-bottom"
        style={{
          marginTop: 60,
          padding: "24px 0",
          borderTop: "1px solid rgba(247,247,242,0.08)",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 12,
          maxWidth: 1440,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <span>Made in Sri Lanka</span>
        <span>Copyright &copy; 2026 Growthscape.</span>
        <span>
          A{" "}
          <a
            href="https://lenscapestudios.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#f7f7f2", textDecoration: "none" }}
          >
            Lenscape Studios
          </a>{" "}
          Venture
        </span>
      </div>
    </footer>
  );
}
