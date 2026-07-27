# Growthscape Stakeholder Input — Phase 2.75

> **Date:** 2026-07-26
> **Source:** GROWTHSCAPE_REPLACEMENT_SPEC.md (all `[VERIFY]` fields)
> **Purpose:** Consolidated list of every field requiring stakeholder input before Phase 3B can begin
> **Status:** THIS IS THE ONLY DOCUMENT WHERE STAKEHOLDER INFORMATION IS ENTERED

---

## How This Document Works

1. **Stakeholder:** Enter answers in the `Your Input` column below each item
2. **Phase 3B:** Reads this document to fill all `[VERIFY]` placeholders in the replacement spec
3. **Phase 4:** Reads the updated replacement spec to implement the final website

**Rules:**
- Do NOT invent or assume any value — if you do not know, leave `Your Input` blank
- Do NOT write polished copy here — just provide the raw facts (name, number, URL, quote)
- Each item includes an example placeholder to show the expected format
- Items marked **Critical** block ALL copy generation if unresolved
- Items marked **High** block specific sections if unresolved
- Items marked **Medium** can use sensible defaults (noted per item)

---

## 1. COMPANY INFORMATION

| # | Field | Why Blocked | Where It Appears | Priority | Recommended Format | Example Placeholder | Your Input |
|---|-------|-------------|------------------|----------|-------------------|-------------------|------------|
| C1 | **Growthscape domain name** | Canonical URL, metadata, and every internal link depend on this | Page metadata (§1.5), all anchor links | **Critical** | Full URL without protocol | `growable.com` | |
| C2 | **Growthscape parent/agency credit** | Determines footer bottom bar right-side text | Footer bottom bar (§20.3) | **Medium** | Credit line + URL, or "REMOVE" | `A Solution By Opti5 Labs` → `https://opti5labs.com` | |

---

## 2. CONTACT INFORMATION

These fields appear in both the Contact section (§14) and Footer Contact column (§17). Each value is used in both locations.

| # | Field | Why Blocked | Where It Appears | Priority | Recommended Format | Example Placeholder | Your Input |
|---|-------|-------------|------------------|----------|-------------------|-------------------|------------|
| T1 | **Primary phone number** | Contact section + footer need real phone | Contact section (§14.4), Footer contact (§17.2) | **Critical** | International format with country code | `+1 555 123 4567` | |
| T2 | **Secondary phone number** (optional) | Second phone line, if any | Contact section (§14.5), Footer contact (§17.3) | **Medium** | International format, or "REMOVE" if none | `+1 555 987 6543` | |
| T3 | **Email address** | Contact form and footer display this | Contact section (§14.6), Footer contact (§17.4) | **Critical** | Standard email format | `hello@growable.com` | |
| T4 | **Physical address** | Contact section and footer display this | Contact section (§14.7), Footer contact (§17.1) | **Medium** | Street address + city + postal code, or "REMOTE" if no office | `123 Main St, Suite 100, New York, NY 10001` | |

---

## 3. SOCIAL MEDIA

| # | Field | Why Blocked | Where It Appears | Priority | Recommended Format | Example Placeholder | Your Input |
|---|-------|-------------|------------------|----------|-------------------|-------------------|------------|
| S1 | **Instagram URL** | Footer social link + potential case study links | Footer brand column (§16.3) | **High** | Full Instagram profile URL | `https://instagram.com/growable` | |
| S2 | **LinkedIn URL** | Footer social link | Footer brand column (§16.4) | **High** | Full LinkedIn company page URL | `https://linkedin.com/company/growable` | |

---

## 4. FOUNDER / LEADERSHIP

| # | Field | Why Blocked | Where It Appears | Priority | Recommended Format | Example Placeholder | Your Input |
|---|-------|-------------|------------------|----------|-------------------|-------------------|------------|
| F1 | **Founder / leader name** | About section card, Final CTA button text | About section card 1 (§6.5), Final CTA (§15.6) | **Critical** | Full name (first + last) | `Jane Smith` | |
| F2 | **Founder / leader title** | Card label in About section | About section card 1 (§6.4) | **High** | Role title | `CEO & Founder` | |

---

## 5. PORTFOLIO — CASE STUDY 1

Two real projects are needed. Each project requires: client name, location, project URL, 4 verified metrics with labels, and a video asset.

| # | Field | Why Blocked | Where It Appears | Priority | Recommended Format | Example Placeholder | Your Input |
|---|-------|-------------|------------------|----------|-------------------|-------------------|------------|
| P1 | **Client name** | Case study card header | Case study 1 (§7.6) | **Critical** | Company/brand name | `Acme Corp` | |
| P2 | **Project location(s)** | Case study card location tag | Case study 1 (§7.7) | **High** | City, Country (or "Global" if remote) | `New York & London` | |
| P3 | **Live project URL** | External link on case study card | Case study 1 (§7.4) | **Critical** | Full URL (Instagram, website, etc.) | `https://instagram.com/p/abc123/` | |
| P4 | **Metric 1 value** | Case study stat display | Case study 1 (§7.14) | **Critical** | Number + optional suffix | `10,000` | |
| P5 | **Metric 1 label** | Case study stat label | Case study 1 (§7.14) | **Critical** | Short descriptor (2–4 words) | `starting followers` | |
| P6 | **Metric 2 value** | Case study stat display | Case study 1 (§7.15) | **Critical** | Number + optional suffix | `25,000+` | |
| P7 | **Metric 2 label** | Case study stat label | Case study 1 (§7.15) | **Critical** | Short descriptor (2–4 words) | `current followers` | |
| P8 | **Metric 3 value** | Case study stat display | Case study 1 (§7.16) | **Critical** | Number + optional suffix | `06months` | |
| P9 | **Metric 3 label** | Case study stat label | Case study 1 (§7.16) | **Critical** | Short descriptor (2–4 words) | `timeline` | |
| P10 | **Metric 4 value** | Case study stat display | Case study 1 (§7.17) | **Critical** | Number + optional suffix | `200K` | |
| P11 | **Metric 4 label** | Case study stat label | Case study 1 (§7.17) | **Critical** | Short descriptor (2–4 words) | `top reel views` | |

---

## 6. PORTFOLIO — CASE STUDY 2

| # | Field | Why Blocked | Where It Appears | Priority | Recommended Format | Example Placeholder | Your Input |
|---|-------|-------------|------------------|----------|-------------------|-------------------|------------|
| P12 | **Client name** | Case study card header | Case study 2 (§7.22) | **Critical** | Company/brand name | `Beta Inc` | |
| P13 | **Project location(s)** | Case study card location tag | Case study 2 (§7.23) | **High** | City, Country (or "Global" if remote) | `Singapore` | |
| P14 | **Live project URL** | External link on case study card | Case study 2 (§7.20) | **Critical** | Full URL | `https://example.com/project` | |
| P15 | **Metric 1 value** | Case study stat display | Case study 2 (§7.30) | **Critical** | Number + optional suffix | `100%` | |
| P16 | **Metric 1 label** | Case study stat label | Case study 2 (§7.30) | **Critical** | Short descriptor (2–4 words) | `conversion rate` | |
| P17 | **Metric 2 value** | Case study stat display | Case study 2 (§7.31) | **Critical** | Number + optional suffix | `5,000` | |
| P18 | **Metric 2 label** | Case study stat label | Case study 2 (§7.31) | **Critical** | Short descriptor (2–4 words) | `event attendees` | |
| P19 | **Metric 3 value** | Case study stat display | Case study 2 (§7.32) | **Critical** | Number + optional suffix | `350K` | |
| P20 | **Metric 3 label** | Case study stat label | Case study 2 (§7.32) | **Critical** | Short descriptor (2–4 words) | `top reel views` | |
| P21 | **Metric 4 value** | Case study stat display | Case study 2 (§7.33) | **Critical** | Number + optional suffix | `1.2M+` | |
| P22 | **Metric 4 label** | Case study stat label | Case study 2 (§7.33) | **Critical** | Short descriptor (2–4 words) | `total organic views` | |

---

## 7. TESTIMONIALS

Three real client quotes are needed. Each requires: project category, exact client quote, client name, and a verified metric.

**Important:** These must be REAL quotes from REAL clients. Do not fabricate or paraphrase. If a quote is not available, leave the field blank and the testimonial slot will be removed.

| # | Field | Why Blocked | Where It Appears | Priority | Recommended Format | Example Placeholder | Your Input |
|---|-------|-------------|------------------|----------|-------------------|-------------------|------------|
| W1 | **Testimonial 1 — Project category** | Category tag above quote | Testimonial 1 (§11.4) | **High** | Industry or project type (2–4 words) | `E-commerce Brand` | |
| W2 | **Testimonial 1 — Client quote** | Core testimonial text (1–2 sentences) | Testimonial 1 (§11.5) | **Critical** | Exact client quote in quotation marks | `"Growthscape transformed our content strategy..."` | |
| W3 | **Testimonial 1 — Client name** | Attribution below quote | Testimonial 1 (§11.6) | **Critical** | Name + optional title | `Sarah Johnson, CMO at Acme` | |
| W4 | **Testimonial 1 — Verified metric** | Stat pill next to testimonial | Testimonial 1 (§11.7) | **High** | Number + short label | `3x engagement growth` | |
| W5 | **Testimonial 2 — Project category** | Category tag above quote | Testimonial 2 (§11.8) | **High** | Industry or project type | `SaaS Startup` | |
| W6 | **Testimonial 2 — Client quote** | Core testimonial text (1–2 sentences) | Testimonial 2 (§11.9) | **Critical** | Exact client quote | `"The systems they built kept producing results..."` | |
| W7 | **Testimonial 2 — Client name** | Attribution below quote | Testimonial 2 (§11.10) | **Critical** | Name + optional title | `David Lee, Founder of Beta` | |
| W8 | **Testimonial 2 — Verified metric** | Stat pill next to testimonial | Testimonial 2 (§11.11) | **High** | Number + short label | `200% ROI in 6 months` | |
| W9 | **Testimonial 3 — Project category** | Category tag above quote | Testimonial 3 (§11.12) | **High** | Industry or project type | `Restaurant Chain` | |
| W10 | **Testimonial 3 — Client quote** | Core testimonial text (1–2 sentences) | Testimonial 3 (§11.13) | **Critical** | Exact client quote | `"Their process is unlike anything we've tried..."` | |
| W11 | **Testimonial 3 — Client name** | Attribution below quote | Testimonial 3 (§11.14) | **Critical** | Name + optional title | `Maria Garcia, VP Marketing at Gamma` | |
| W12 | **Testimonial 3 — Verified metric** | Stat pill next to testimonial | Testimonial 3 (§11.15) | **High** | Number + short label | `50K new followers in 3 months` | |

---

## 8. PRICING

Pricing tier information is needed to populate the Packages section. If pricing is not public, the section can display "Contact for custom pricing" instead.

| # | Field | Why Blocked | Where It Appears | Priority | Recommended Format | Example Placeholder | Your Input |
|---|-------|-------------|------------------|----------|-------------------|-------------------|------------|
| R1 | **Tier 1 name** | Package card heading | Pricing section (§10.4) | **Critical** | Tier name (1–2 words) | `Growth` | |
| R2 | **Tier 1 descriptor** | Tag pill above tier name | Pricing section (§10.3) | **High** | Short descriptor (2–4 words) | `Full content engine` | |
| R3 | **Tier 1 features (×5)** | Package card feature list | Pricing section (§10.6–10.10) | **Critical** | One feature per line (5–10 words each) | `10–12 videos per month` | |
| R4 | **Tier 2 name** | Package card heading | Pricing section (§10.14) | **Critical** | Tier name (1–2 words) | `Brand Builder` | |
| R5 | **Tier 2 descriptor** | Tag pill above tier name | Pricing section (§10.13) | **High** | Short descriptor (2–4 words) | `Founder-led growth` | |
| R6 | **Tier 2 features (×5)** | Package card feature list | Pricing section (§10.16–10.20) | **Critical** | One feature per line (5–10 words each) | `8–10 videos per month` | |
| R7 | **Pricing model** | Determines how price is displayed | Pricing section (§10.5, §10.15) | **Critical** | "Per month" / "Starting at $X/mo" / "Contact for quote" | `Per month` | |
| R8 | **Universal inclusion statement** | Disclaimer below pricing cards | Pricing section (§10.23) | **Medium** | 1 sentence covering what all tiers include | `All packages include onboarding and strategy.` | |

---

## 9. VERIFIED METRICS (Global)

These 4 metrics appear across multiple sections (Hero, About, Footer, Stats bar). They are already verified and do NOT need stakeholder input — listed here for reference only.

| # | Metric | Value | Status |
|---|--------|-------|--------|
| M1 | Projects Completed | `150+` | **VERIFIED** |
| M2 | Clients Served | `200+` | **VERIFIED** |
| M3 | Client Satisfaction | `99%` | **VERIFIED** |
| M4 | Years in Operation | `5+` | **VERIFIED** |

---

## RESOLUTION SUMMARY

| Category | Total Fields | Critical | High | Medium | Resolved | Remaining |
|----------|-------------|----------|------|--------|----------|-----------|
| Company Information | 2 | 1 | 0 | 1 | 0 | 2 |
| Contact | 4 | 2 | 0 | 2 | 0 | 4 |
| Social Media | 2 | 0 | 2 | 0 | 0 | 2 |
| Founder / Leadership | 2 | 1 | 1 | 0 | 0 | 2 |
| Portfolio — Case Study 1 | 8 | 6 | 2 | 0 | 0 | 8 |
| Portfolio — Case Study 2 | 8 | 6 | 2 | 0 | 0 | 8 |
| Testimonials (×3) | 12 | 6 | 6 | 0 | 0 | 12 |
| Pricing | 8 | 5 | 2 | 1 | 0 | 8 |
| **TOTAL** | **46** | **27** | **15** | **4** | **0** | **46** |

---

## WHAT HAPPENS NEXT

1. **Stakeholder fills in `Your Input` columns** — even partial input unblocks Phase 3B for those sections
2. **Phase 3B reads this document** — generates copy for every `[COPY]` field, using verified inputs for every `[VERIFY]` field
3. **Unresolved Critical items** — those sections will use placeholder text marked `[PENDING VERIFICATION]`
4. **Unresolved Medium items** — sensible defaults will be applied (noted per item above)
5. **Once all Critical items are resolved** — Phase 4 (implementation) begins

---

*End of Growthscape Stakeholder Input — Phase 2.75*
