"use client";

import { useState } from "react";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/icons";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    phone: "",
    package: "",
    goals: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Frontend-only — no real submission
    alert("Thank you! We will get back to you within 24 hours.");
  }

  return (
    <section
      id="contact"
      className="contact-section"
      style={{
        padding: "120px 72px",
        background:
          "radial-gradient(circle at 18% 40%, rgba(255,255,255,0.13), rgba(0,0,0,0) 28%)",
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 80,
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* ── Left column: Info ── */}
        <div style={{ flex: "0 1 400px", minWidth: 280, maxWidth: 480 }}>
          <p className="section-label">Get in Touch</p>
          <h2
            className="section-heading"
            style={{
              fontSize: 70.2,
              fontWeight: 850,
              lineHeight: 1,
              color: "#f7f7f2",
              marginTop: 12,
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            Let&apos;s build something unforgettable together.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: "24px",
              color: "rgba(247,247,242,0.66)",
              marginTop: 24,
            }}
          >
            Tell us about your project and Growthscape will shape a system
            around your goals. Expect a response within 24 hours.
          </p>

          {/* Contact details */}
          <div
            style={{
              marginTop: 40,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <a
              href="tel:+94701987004"
              style={{
                fontSize: 16,
                color: "#f7f7f2",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <PhoneIcon width={18} height={18} />
              +94 70 198 7004
            </a>
            <a
              href="mailto:growthscape.co@gmail.com"
              style={{
                fontSize: 16,
                color: "#f7f7f2",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <MailIcon width={18} height={18} />
              growthscape.co@gmail.com
            </a>
            <div
              style={{
                fontSize: 16,
                color: "rgba(247,247,242,0.66)",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <MapPinIcon
                width={18}
                height={18}
                style={{ flexShrink: 0, marginTop: 2 }}
              />
              Sri Lanka
            </div>
          </div>
        </div>

        {/* ── Right column: Form ── */}
        <div style={{ flex: 1, minWidth: 320 }}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            {/* Name */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(247,247,242,0.56)",
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                style={{ border: "1px solid rgba(247,247,242,0.08)" }}
                required
              />
            </div>

            {/* Brand */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(247,247,242,0.56)",
                }}
              >
                Brand / Company Name
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="form-input"
                style={{ border: "1px solid rgba(247,247,242,0.08)" }}
                required
              />
            </div>

            {/* Email */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(247,247,242,0.56)",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                style={{ border: "1px solid rgba(247,247,242,0.08)" }}
                required
              />
            </div>

            {/* Phone */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(247,247,242,0.56)",
                }}
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                style={{ border: "1px solid rgba(247,247,242,0.08)" }}
              />
            </div>

            {/* Package select */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(247,247,242,0.56)",
                }}
              >
                Which service interests you?
              </label>
              <select
                name="package"
                value={formData.package}
                onChange={handleChange}
                className="form-input"
                style={{
                  border: "1px solid rgba(247,247,242,0.08)",
                  appearance: "none",
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(247,247,242,0.56)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 15px center",
                }}
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="ai-automation">AI Automation</option>
                <option value="web-development">Web Design & Development</option>
                <option value="brand-identity">Brand Identity</option>
                <option value="content-systems">Content Systems</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            {/* Goals */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <label
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "rgba(247,247,242,0.56)",
                }}
              >
                What are you looking to achieve?
              </label>
              <textarea
                name="goals"
                value={formData.goals}
                onChange={handleChange}
                className="form-input"
                rows={4}
                placeholder="Tell us about your project goals..."
                style={{
                  border: "1px solid rgba(247,247,242,0.08)",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn-3d"
              style={{
                width: "100%",
                marginTop: 8,
                padding: "14px 24px",
                fontSize: 16,
                fontWeight: 600,
                borderRadius: 16,
                cursor: "pointer",
                border: "none",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
