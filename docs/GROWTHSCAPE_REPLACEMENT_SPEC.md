# Growthscape Replacement Specification — Phase 2.5

> **Date:** 2026-07-26
> **Source:** CONTENT_MIGRATION_REPORT.md, GROWTHSCAPE_CONTENT_MAPPING.md, GROWTHSCAPE_BRAND_SYSTEM.md
> **Objective:** One-to-one replacement blueprint for every content element on the Organic website
> **Status:** Specification only. No copy. No design. No implementation.

---

## HOW TO USE THIS DOCUMENT

This is a migration checklist. Every element currently on the Organic website has a Growthscape replacement defined below. Phase 3B (copy generation) and Phase 4 (implementation) will use this as their source of truth.

**Notation:**
- `[GS]` = Growthscape replacement (to be generated in Phase 3B)
- `[VERIFY]` = Requires stakeholder input before implementation
- `[ASSET]` = Requires new asset (image, video, logo, etc.)
- `[COPY]` = Requires copy generation in Phase 3B
- `[SAME]` = Structure/behavior stays the same, content changes
- `[REMOVE]` = Element does not exist in Growthscape version
- `[NEW]` = New element not in Organic version

---

## 1. PAGE METADATA

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 1.1 | Page Title: `Organic - Sri Lanka's First Organic Content Marketing Agency` | ↓ | `Growthscape — [Primary Tagline]` | Replace Organic positioning with Growthscape positioning | [VERIFY] Growthscape primary tagline | `[COPY]` |
| 1.2 | Meta Description: `Purpose-driven video content that humanises brands and builds genuine organic audiences.` | ↓ | `[Value proposition in ≤160 chars]` | Replace Organic value prop with Growthscape value prop | [COPY] Growthscape meta description | `[COPY]` |
| 1.3 | Favicon: `/seo/favicon.png` (Organic logo) | ↓ | `[ASSET] Growthscape favicon` | Replace Organic brand mark | [ASSET] Growthscape favicon (.ico + .png 32×32) | `[ASSET]` |
| 1.4 | OG Image: `/seo/og-image.png` (Organic branded) | ↓ | `[ASSET] Growthscape OG image` | Replace Organic brand visual | [ASSET] Growthscape OG image (1200×630) | `[ASSET]` |
| 1.5 | Canonical URL: `https://www.organicslk.com/` | ↓ | `https://[VERIFY].com/` | Replace Organic domain | [VERIFY] Growthscape domain name | `[VERIFY]` |

---

## 2. NAVIGATION — DESKTOP

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 2.1 | Logo: SVG text "ORGANIC" → `#hero` | ↓ | `[ASSET] Growthscape logo (SVG)` → `#hero` | Replace brand identity | [ASSET] Growthscape logo SVG | `[ASSET]` |
| 2.2 | Nav Link: `Who We Are` → `#who` | ↓ | `About` → `#about` | Update section name and anchor | [COPY] None needed — label only | `[SAME]` |
| 2.3 | Nav Link: `Our Work` → `#work` | ↓ | `Work` → `#work` | Shorten label | [COPY] None needed — label only | `[SAME]` |
| 2.4 | Nav Link: `How We Work` → `#process` | ↓ | `Services` → `#services` | Rename to match Growthscape positioning | [COPY] None needed — label only | `[SAME]` |
| 2.5 | Nav Link: `Packages` → `#packages` | ↓ | `Pricing` → `#pricing` | Rename to match Growthscape positioning | [COPY] None needed — label only | `[SAME]` |
| 2.6 | Nav Link: `FAQ` → `#faq` | ↓ | `FAQ` → `#faq` | No change needed | None | `[SAME]` |
| 2.7 | Nav Link: `Contact` → `#contact` | ↓ | `Contact` → `#contact` | No change needed | None | `[SAME]` |
| 2.8 | CTA Button: `Book a Strategy Call` → `#contact` | ↓ | `[COPY] Start Your Growth System` → `#contact` | Replace service-oriented CTA with outcome-oriented CTA per brand system | [COPY] Primary CTA text | `[COPY]` |

---

## 3. NAVIGATION — MOBILE

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 3.1 | Hamburger Icon: `aria-label="Open menu"` | ↓ | Same pattern, same aria-label | Behavior unchanged | None | `[SAME]` |
| 3.2 | Mobile Nav Links: Same 6 as desktop | ↓ | Same 6 as desktop (updated labels) | Match desktop nav | Same as desktop | `[SAME]` |
| 3.3 | Mobile CTA: `Book a Strategy Call` | ↓ | `[COPY] Same as desktop CTA` | Match desktop CTA | Same as desktop | `[COPY]` |

---

## 4. HERO SECTION

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 4.1 | Eyebrow Label: *(none)* | ↓ | `[COPY] Optional section label` | Add context — Organic had none | [COPY] Optional: e.g., "Content Growth Agency" | `[COPY]` |
| 4.2 | H1 Part 1: `Meet the brand` | ↓ | `[COPY] Growthscape H1 Part 1` | Replace Organic headline with Growthscape value proposition | [COPY] Primary headline part 1 (3–8 words) | `[COPY]` |
| 4.3 | H1 Part 2: `people remember.` | ↓ | `[COPY] Growthscape H1 Part 2` | Complete Growthscape headline | [COPY] Primary headline part 2 (3–8 words) | `[COPY]` |
| 4.4 | Subheading: `Strategy, production, and monthly storytelling for brands that need attention to turn into trust.` | ↓ | `[COPY] Growthscape subheading` | Replace Organic value prop with Growthscape value prop | [COPY] Supporting subheading (15–25 words) | `[COPY]` |
| 4.5 | Primary CTA: `Book a Strategy Call` → `#contact` (3D Button) | ↓ | `[COPY] Start Your Growth System` → `#contact` (3D Button) | Replace service CTA with outcome CTA | [COPY] Primary CTA text | `[COPY]` |
| 4.6 | Secondary CTA: `Watch the Work` → `#work` (Ghost Link) | ↓ | `[COPY] See Our Work` → `#work` (Ghost Link) | Update CTA text per brand system | [COPY] Secondary CTA text | `[COPY]` |
| 4.7 | Background: `/images/hero-video-still.webp` (Organic hero still) | ↓ | `[ASSET] Growthscape hero visual` | Replace Organic hero imagery | [ASSET] Growthscape hero image or video (min 1600×844) | `[ASSET]` |

---

## 5. LOGO MARQUEE — FIRST

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 5.1 | Section Label: `Brands that trust Organic` | ↓ | `[COPY] Growthscape trust phrase` | Replace brand name and context | [COPY] Trust phrase (e.g., "Trusted by 200+ brands") | `[COPY]` |
| 5.2 | Logo Strip: 36 Organic client logos (Mezo, Bluefort, Thambili Island, Culture by Ari, Kannadi, Comfort World, Land Rover, Sarigama, Glow, Tathya, Upali's, Liv, Satya Collection, Lactoboost, Playdium, Rush, John Keells Group, Hamilton Sciences, TEJA, talentstudio, Supreme, Divide, The Commons, Hybrid House, Luxonix, Momo, MOB, Punchi's, Hydrion, Nomad, Orbit 88, Rough, KFL, Emperors Den, Foster & Reed, VibeX) | ↓ | `[ASSET] Growthscape client logos (minimum 12, ideally 24+)` | Replace all Organic client logos with Growthscape clients | [ASSET] Growthscape client logo files (WebP/PNG, 512×512, transparent bg) | `[ASSET]` |
| 5.3 | Hover behavior: grayscale → color (3 dual-image swaps: Liv, Orbit 88, Emperors Den) | ↓ | Same behavior pattern | Keep the interaction pattern | None | `[SAME]` |

---

## 6. WHO WE ARE → ABOUT

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 6.1 | Section Label: `Who Are We?` | ↓ | `[COPY] About` or `Who We Are` | Update section label | [COPY] Section label | `[COPY]` |
| 6.2 | H2 Heading: `Purpose Led Content. Human First Brands.` | ↓ | `[COPY] Growthscape positioning statement (2 lines)` | Replace Organic positioning with Growthscape positioning | [COPY] Brand positioning H2 (4–8 words per line) | `[COPY]` |
| 6.3 | Description: `Organic specialises in personifying brands and humanising them. Every video is created with a clear strategic objective, not a borrowed trend or generic content pattern.` | ↓ | `[COPY] Growthscape mission description (2–3 sentences)` | Replace Organic mission with Growthscape mission | [COPY] Mission description (40–60 words) | `[COPY]` |

### Card 1 — Founder / Leadership

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 6.4 | Card Label: `Founder & Creative Director` | ↓ | `[COPY] Growthscape leadership title` | Replace role title | [COPY] Leadership title | `[COPY]` |
| 6.5 | Card H3: `Amantha Perera` | ↓ | `[VERIFY] Growthscape founder/leader name` | Replace personal name | [VERIFY] Founder name | `[VERIFY]` |
| 6.6 | Card Description: `Led by Amantha and his team, Organic builds content systems that turn brands into recognisable personalities people remember.` | ↓ | `[COPY] Growthscape founder bio (1–2 sentences)` | Replace Organic founder description | [COPY] Founder bio (20–30 words) | `[COPY]` |
| 6.7 | *(no founder photo in WhoWeAre component)* | ↓ | `[ASSET] Growthscape founder/team photo` | Add team photo if desired | [ASSET] Founder/team portrait (min 400×400) | `[ASSET]` |

### Card 2 — Core Differentiator

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 6.8 | Card Label: `Organic Attention` | ↓ | `[COPY] Growthscape differentiator label` | Replace Organic-specific label | [COPY] Differentiator label (2–4 words) | `[COPY]` |
| 6.9 | Card H3: `No Paid Media` | ↓ | `[COPY] Growthscape core differentiator` | Replace Organic differentiator | [COPY] Core differentiator (2–5 words) | `[COPY]` |
| 6.10 | Card Description: `Every view earned. No boosts, no budgets, no shortcuts. Just organic content people stopped scrolling for and kept coming back to watch.` | ↓ | `[COPY] Growthscape differentiator explanation (1–2 sentences)` | Replace Organic description | [COPY] Differentiator explanation (20–30 words) | `[COPY]` |

### Card 3 — Operating Philosophy

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 6.11 | Card Label: `Operating Belief` | ↓ | `[COPY] Growthscape philosophy label` | Replace label | [COPY] Philosophy label (2–4 words) | `[COPY]` |
| 6.12 | Card H3: `Audience before algorithm` | ↓ | `[COPY] Growthscape core belief` | Replace Organic belief | [COPY] Core belief (3–6 words) | `[COPY]` |
| 6.13 | Card Description: `Views matter, but memorability matters more. The work is planned around business goals, brand voice, and cultural relevance.` | ↓ | `[COPY] Growthscape philosophy explanation (1–2 sentences)` | Replace Organic description | [COPY] Philosophy explanation (20–30 words) | `[COPY]` |

---

## 7. CASE STUDIES → PORTFOLIO

### Section Header

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 7.1 | Section Label: `Our Work` | ↓ | `Work` | Shorten label | None needed | `[SAME]` |
| 7.2 | H2 Heading: `Case studies built like scenes, not slides.` | ↓ | `[COPY] Growthscape portfolio heading` | Replace Organic narrative heading with Growthscape evidence-led heading | [COPY] Portfolio H2 (5–10 words) | `[COPY]` |

### Case Study 1

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 7.3 | Scene Number: `Scene 01` | ↓ | `01` or `Project 01` | Remove "Scene" metaphor (Organic's storytelling brand) | None needed | `[COPY]` |
| 7.4 | External Link: `View on Instagram` → `instagram.com/p/DVOGmYijUH9/` | ↓ | `[VERIFY] Growthscape project link` | Replace with Growthscape project URL | [VERIFY] Live project URL | `[VERIFY]` |
| 7.5 | Badge: `Organic proof` | ↓ | `[COPY] Growthscape proof label` | Replace brand-specific badge | [COPY] Proof badge text (e.g., "Growthscape proof") | `[COPY]` |
| 7.6 | Client Name: `Upali's by Nawaloka` | ↓ | `[VERIFY] Growthscape client name` | Replace with Growthscape client | [VERIFY] Client name | `[VERIFY]` |
| 7.7 | Location: `Melbourne & Colombo` | ↓ | `[VERIFY] Growthscape project location(s)` | Replace location | [VERIFY] Project location(s) | `[VERIFY]` |
| 7.8 | H3 Heading: `From a restaurant feed to a cultural memory lane.` | ↓ | `[COPY] Growthscape project headline` | Replace narrative headline with evidence-led headline | [COPY] Project headline (6–12 words) | `[COPY]` |
| 7.9 | Description: `Organic moved the brand beyond food shots by introducing Sinhala retro cues, old songs, staff stories, founder-led moments, and Sri Lankan cultural nostalgia.` | ↓ | `[COPY] Growthscape project description (2–3 sentences)` | Replace Organic description | [COPY] Project description (30–50 words) | `[COPY]` |
| 7.10 | Tag Pill 1: `Personified the brand` | ↓ | `[COPY] Growthscape deliverable/outcome tag 1` | Replace deliverable tag | [COPY] Tag (2–5 words) | `[COPY]` |
| 7.11 | Tag Pill 2: `Moved beyond showcasing food` | ↓ | `[COPY] Growthscape deliverable/outcome tag 2` | Replace deliverable tag | [COPY] Tag (2–5 words) | `[COPY]` |
| 7.12 | Tag Pill 3: `Introduced a Sinhala retro theme` | ↓ | `[COPY] Growthscape deliverable/outcome tag 3` | Replace deliverable tag | [COPY] Tag (2–5 words) | `[COPY]` |
| 7.13 | Tag Pill 4: `Featured staff and founder` | ↓ | `[COPY] Growthscape deliverable/outcome tag 4` | Replace deliverable tag | [COPY] Tag (2–5 words) | `[COPY]` |
| 7.14 | Stat 1: `7,000` / `started at` | ↓ | `[VERIFY] Growthscape metric` / `[COPY] label` | Replace with verified metric | [VERIFY] Project metric + label | `[VERIFY]` |
| 7.15 | Stat 2: `12,800+` / `current followers` | ↓ | `[VERIFY] Growthscape metric` / `[COPY] label` | Replace with verified metric | [VERIFY] Project metric + label | `[VERIFY]` |
| 7.16 | Stat 3: `04months` / `timeline` | ↓ | `[VERIFY] Growthscape metric` / `[COPY] label` | Replace with verified metric | [VERIFY] Project metric + label | `[VERIFY]` |
| 7.17 | Stat 4: `153k` / `top reel views` | ↓ | `[VERIFY] Growthscape metric` / `[COPY] label` | Replace with verified metric | [VERIFY] Project metric + label | `[VERIFY]` |
| 7.18 | Video: `/videos/gallery/upalis-reel-fixed.mp4` | ↓ | `[ASSET] Growthscape project 1 video` | Replace Organic project video | [ASSET] Project video (MP4) | `[ASSET]` |

### Case Study 2

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 7.19 | Scene Number: `Scene 02` | ↓ | `02` or `Project 02` | Remove "Scene" metaphor | None needed | `[COPY]` |
| 7.20 | External Link: `View on Instagram` → `instagram.com/reels/DIykt0DtWUG/` | ↓ | `[VERIFY] Growthscape project link` | Replace with Growthscape project URL | [VERIFY] Live project URL | `[VERIFY]` |
| 7.21 | Badge: `Organic proof` | ↓ | `[COPY] Growthscape proof label` | Replace brand-specific badge | [COPY] Same as #7.5 | `[COPY]` |
| 7.22 | Client Name: `Sarigama` | ↓ | `[VERIFY] Growthscape client name` | Replace with Growthscape client | [VERIFY] Client name | `[VERIFY]` |
| 7.23 | Location: *(not specified)* | ↓ | `[VERIFY] Growthscape project location(s)` | Add location if available | [VERIFY] Project location(s) | `[VERIFY]` |
| 7.24 | H3 Heading: `Sri Lanka's premier live music concert series in Colombo` | ↓ | `[COPY] Growthscape project headline` | Replace with Growthscape headline | [COPY] Project headline (6–12 words) | `[COPY]` |
| 7.25 | Description: `A fully sold-out live concert campaign built from zero — no prior band awareness, no paid advertising. All awareness and ticket sales were driven entirely through organic Instagram content created by our team.` | ↓ | `[COPY] Growthscape project description (2–3 sentences)` | Replace Organic description | [COPY] Project description (30–50 words) | `[COPY]` |
| 7.26 | Tag Pill 1: `100% organic growth` | ↓ | `[COPY] Growthscape deliverable/outcome tag 1` | Replace tag | [COPY] Tag (2–5 words) | `[COPY]` |
| 7.27 | Tag Pill 2: `Zero awareness to fully sold-out concerts` | ↓ | `[COPY] Growthscape deliverable/outcome tag 2` | Replace tag | [COPY] Tag (2–5 words) | `[COPY]` |
| 7.28 | Tag Pill 3: `World-class production` | ↓ | `[COPY] Growthscape deliverable/outcome tag 3` | Replace tag | [COPY] Tag (2–5 words) | `[COPY]` |
| 7.29 | Tag Pill 4: `Retention-first video structure` | ↓ | `[COPY] Growthscape deliverable/outcome tag 4` | Replace tag | [COPY] Tag (2–5 words) | `[COPY]` |
| 7.30 | Stat 1: `100%` / `tickets sold` | ↓ | `[VERIFY] Growthscape metric` / `[COPY] label` | Replace with verified metric | [VERIFY] Project metric + label | `[VERIFY]` |
| 7.31 | Stat 2: `3,500` / `people attended` | ↓ | `[VERIFY] Growthscape metric` / `[COPY] label` | Replace with verified metric | [VERIFY] Project metric + label | `[VERIFY]` |
| 7.32 | Stat 3: `264K` / `top reel views` | ↓ | `[VERIFY] Growthscape metric` / `[COPY] label` | Replace with verified metric | [VERIFY] Project metric + label | `[VERIFY]` |
| 7.33 | Stat 4: `800K+` / `total organic views` | ↓ | `[VERIFY] Growthscape metric` / `[COPY] label` | Replace with verified metric | [VERIFY] Project metric + label | `[VERIFY]` |
| 7.34 | Video: `/videos/gallery/sarigamaCS-casestudy.mp4` | ↓ | `[ASSET] Growthscape project 2 video` | Replace Organic project video | [ASSET] Project video (MP4) | `[ASSET]` |

### Carousel Controls

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 7.35 | Prev Arrow: `aria-label="Previous videos"` | ↓ | Same pattern | Behavior unchanged | None | `[SAME]` |
| 7.36 | Next Arrow: `aria-label="Next videos"` | ↓ | Same pattern | Behavior unchanged | None | `[SAME]` |

---

## 8. PROCESS STEPS → SERVICES

### Section Header

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 8.1 | Section Label: `How We Work` | ↓ | `How We Work` or `Our Process` | Keep or rename | [COPY] Section label | `[COPY]` |
| 8.2 | H2 Heading: `A repeatable system built for results every month.` | ↓ | `[COPY] Growthscape process heading` | Replace with Growthscape process positioning | [COPY] Process H2 (6–12 words) | `[COPY]` |
| 8.3 | Description: `Strategy, production, delivery, and iteration are treated as one loop. The story keeps moving because the system keeps moving.` | ↓ | `[COPY] Growthscape process description (1–2 sentences)` | Replace with Growthscape description | [COPY] Process description (20–35 words) | `[COPY]` |

### Step 01

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 8.4 | Step Number: `01` | ↓ | `01` | No change | None | `[SAME]` |
| 8.5 | H3 Heading: `Strategy & Planning` | ↓ | `[COPY] Growthscape step 1 name` | Replace with Growthscape step name | [COPY] Step name (2–4 words) | `[COPY]` |
| 8.6 | Description: `We get under the skin of the brand first: audience, voice, offer, and the business outcome every video has to serve.` | ↓ | `[COPY] Growthscape step 1 description (1 sentence)` | Replace Organic description | [COPY] Step description (15–25 words) | `[COPY]` |
| 8.7 | Tag Pill 1: `Discovery Call` | ↓ | `[COPY] Growthscape sub-task 1` | Replace sub-task tag | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.8 | Tag Pill 2: `Brand Audit` | ↓ | `[COPY] Growthscape sub-task 2` | Replace sub-task tag | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.9 | Tag Pill 3: `Content Pillars` | ↓ | `[COPY] Growthscape sub-task 3` | Replace sub-task tag | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.10 | Tag Pill 4: `Content Calendar` | ↓ | `[COPY] Growthscape sub-task 4` | Replace sub-task tag | [COPY] Sub-task (2–4 words) | `[COPY]` |

### Step 02

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 8.11 | Step Number: `02` | ↓ | `02` | No change | None | `[SAME]` |
| 8.12 | H3 Heading: `Production Planning` | ↓ | `[COPY] Growthscape step 2 name` | Replace step name | [COPY] Step name (2–4 words) | `[COPY]` |
| 8.13 | Description: `Scripts, locations, talent, and approvals are prepared before shoot day so the work feels sharp, not improvised.` | ↓ | `[COPY] Growthscape step 2 description (1 sentence)` | Replace description | [COPY] Step description (15–25 words) | `[COPY]` |
| 8.14 | Tag Pill 1: `Script Writing` | ↓ | `[COPY] Growthscape sub-task 1` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.15 | Tag Pill 2: `Influencer Coordination` | ↓ | `[COPY] Growthscape sub-task 2` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.16 | Tag Pill 3: `Client Feedback` | ↓ | `[COPY] Growthscape sub-task 3` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.17 | Tag Pill 4: `Shoot Planning` | ↓ | `[COPY] Growthscape sub-task 4` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |

### Step 03

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 8.18 | Step Number: `03` | ↓ | `03` | No change | None | `[SAME]` |
| 8.19 | H3 Heading: `Production Execution` | ↓ | `[COPY] Growthscape step 3 name` | Replace step name | [COPY] Step name (2–4 words) | `[COPY]` |
| 8.20 | Description: `The team directs and captures every frame with Sony A7 IV cameras so the brand feels cinematic without losing its human pulse.` | ↓ | `[COPY] Growthscape step 3 description (1 sentence)` | Replace description | [COPY] Step description (15–25 words) | `[COPY]` |
| 8.21 | Tag Pill 1: `Shoot Execution` | ↓ | `[COPY] Growthscape sub-task 1` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.22 | Tag Pill 2: `Sony A7 IV Production` | ↓ | `[COPY] Growthscape sub-task 2` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.23 | Tag Pill 3: `Direction` | ↓ | `[COPY] Growthscape sub-task 3` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.24 | Tag Pill 4: `Premium Capture` | ↓ | `[COPY] Growthscape sub-task 4` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |

### Step 04

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 8.25 | Step Number: `04` | ↓ | `04` | No change | None | `[SAME]` |
| 8.26 | H3 Heading: `Post-Production & Delivery` | ↓ | `[COPY] Growthscape step 4 name` | Replace step name | [COPY] Step name (2–4 words) | `[COPY]` |
| 8.27 | Description: `Footage is edited, refined, delivered, and then fed back into the next month of consistent organic growth.` | ↓ | `[COPY] Growthscape step 4 description (1 sentence)` | Replace description | [COPY] Step description (15–25 words) | `[COPY]` |
| 8.28 | Tag Pill 1: `Share Raw Footage` | ↓ | `[COPY] Growthscape sub-task 1` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.29 | Tag Pill 2: `Edit` | ↓ | `[COPY] Growthscape sub-task 2` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.30 | Tag Pill 3: `Final Delivery` | ↓ | `[COPY] Growthscape sub-task 3` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |
| 8.31 | Tag Pill 4: `Repeat Monthly` | ↓ | `[COPY] Growthscape sub-task 4` | Replace sub-task | [COPY] Sub-task (2–4 words) | `[COPY]` |

---

## 9. GALLERY

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 9.1 | Section Label: `Gallery` | ↓ | `Gallery` or `Our Work` | Keep or rename | [COPY] Section label | `[COPY]` |
| 9.2 | H2 Heading: `Creators, campaigns, and frames with Organic flare.` | ↓ | `[COPY] Growthscape gallery heading` | Replace Organic-branded heading | [COPY] Gallery H2 (6–12 words) | `[COPY]` |
| 9.3 | Description: `A moving wall of founder films, campaign systems, production moments, and brand stories built to feel alive before you even click.` | ↓ | `[COPY] Growthscape gallery description (1 sentence)` | Replace Organic description | [COPY] Gallery description (15–25 words) | `[COPY]` |
| 9.4 | Thumbnails: 12 Organic video thumbnails (`/images/gallery/thumbnail1-12.webp`) | ↓ | `[ASSET] Growthscape project thumbnails × 12` | Replace all Organic thumbnails | [ASSET] 12 project thumbnails (WebP, various sizes) | `[ASSET]` |
| 9.5 | Gallery Videos: 12 Organic project videos (referenced by thumbnails) | ↓ | `[ASSET] Growthscape project videos × 12` | Replace all Organic videos | [ASSET] 12 project videos (MP4) | `[ASSET]` |
| 9.6 | Marquee behavior: 3 rows, alternating scroll directions, varying speeds | ↓ | Same behavior pattern | Keep the interaction pattern | None | `[SAME]` |
| 9.7 | Video modal: Click thumbnail → opens video player overlay | ↓ | Same behavior pattern | Keep the interaction pattern | None | `[SAME]` |

---

## 10. PACKAGES → PRICING

### Section Header

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 10.1 | Section Label: `Our Packages` | ↓ | `Services` or `Pricing` | Rename per brand system | [COPY] Section label | `[COPY]` |
| 10.2 | H2 Heading: `Packages built for consistent organic growth.` | ↓ | `[COPY] Growthscape pricing heading` | Replace with Growthscape pricing positioning | [COPY] Pricing H2 (5–10 words) | `[COPY]` |

### Tier 1 — Standard / Core

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 10.3 | Tag: `Full content engine` | ↓ | `[COPY] Growthscape tier 1 descriptor` | Replace descriptor | [COPY] Tier descriptor (2–4 words) | `[COPY]` |
| 10.4 | H3 Heading: `Standard` | ↓ | `[COPY] Growthscape tier 1 name` | Replace tier name | [COPY] Tier name | `[COPY]` |
| 10.5 | Pricing Context: `Per month` | ↓ | `[COPY] Growthscape pricing model` | Confirm pricing model | [COPY] Pricing model | `[COPY]` |
| 10.6 | Feature 1: `08 - 10 videos` | ↓ | `[COPY] Growthscape tier 1 feature 1` | Replace feature | [COPY] Feature text | `[COPY]` |
| 10.7 | Feature 2: `06 - 08 static posts` | ↓ | `[COPY] Growthscape tier 1 feature 2` | Replace feature | [COPY] Feature text | `[COPY]` |
| 10.8 | Feature 3: `Monthly consulting` | ↓ | `[COPY] Growthscape tier 1 feature 3` | Replace feature | [COPY] Feature text | `[COPY]` |
| 10.9 | Feature 4: `Assigned account manager` | ↓ | `[COPY] Growthscape tier 1 feature 4` | Replace feature | [COPY] Feature text | `[COPY]` |
| 10.10 | Feature 5: `Raw footage for stories and repurposing` | ↓ | `[COPY] Growthscape tier 1 feature 5` | Replace feature | [COPY] Feature text | `[COPY]` |
| 10.11 | CTA Button: `Book a Call` → `#contact` | ↓ | `[COPY] Start Your Growth System` → `#contact` | Replace CTA per brand system | [COPY] CTA text (same as hero primary) | `[COPY]` |
| 10.12 | Visual Style: Dark card (`.package-card-dark`) | ↓ | Same visual style | Keep card styling | None | `[SAME]` |

### Tier 2 — Personal Brand / Premium

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 10.13 | Tag: `Founder-led growth` | ↓ | `[COPY] Growthscape tier 2 descriptor` | Replace descriptor | [COPY] Tier descriptor (2–4 words) | `[COPY]` |
| 10.14 | H3 Heading: `Personal Brand` | ↓ | `[COPY] Growthscape tier 2 name` | Replace tier name | [COPY] Tier name | `[COPY]` |
| 10.15 | Pricing Context: `Per month` | ↓ | `[COPY] Growthscape pricing model` | Confirm pricing model | [COPY] Pricing model | `[COPY]` |
| 10.16 | Feature 1: `06 - 08 videos` | ↓ | `[COPY] Growthscape tier 2 feature 1` | Replace feature | [COPY] Feature text | `[COPY]` |
| 10.17 | Feature 2: `04 - 06 static posts` | ↓ | `[COPY] Growthscape tier 2 feature 2` | Replace feature | [COPY] Feature text | `[COPY]` |
| 10.18 | Feature 3: `Monthly consulting` | ↓ | `[COPY] Growthscape tier 2 feature 3` | Replace feature | [COPY] Feature text | `[COPY]` |
| 10.19 | Feature 4: `LinkedIn management` | ↓ | `[COPY] Growthscape tier 2 feature 4` | Replace feature | [COPY] Feature text | `[COPY]` |
| 10.20 | Feature 5: `Strategy-led personal positioning` | ↓ | `[COPY] Growthscape tier 2 feature 5` | Replace feature | [COPY] Feature text | `[COPY]` |
| 10.21 | CTA Button: `Book a Call` → `#contact` | ↓ | `[COPY] Start Your Growth System` → `#contact` | Replace CTA | [COPY] CTA text | `[COPY]` |
| 10.22 | Visual Style: Light card (`.package-card-light`) | ↓ | Same visual style | Keep card styling | None | `[SAME]` |

### Package Disclaimer

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 10.23 | Disclaimer: `All packages include onboarding, content strategy, and full production.` | ↓ | `[COPY] Growthscape universal inclusion statement` | Replace with Growthscape inclusions | [COPY] Inclusion statement (1 sentence) | `[COPY]` |

---

## 11. TESTIMONIALS → SOCIAL PROOF

### Section Header

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 11.1 | Section Label: `Client Energy` | ↓ | `Testimonials` or `What Clients Say` | Replace playful label with clear label | [COPY] Section label | `[COPY]` |
| 11.2 | H2 Heading: `Proof that feels less like praise and more like momentum.` | ↓ | `[COPY] Growthscape testimonials heading` | Replace Organic poetic heading with Growthscape direct heading | [COPY] Testimonials H2 (5–10 words) | `[COPY]` |
| 11.3 | Description: `The best signal is not a polished compliment. It is what happens when a brand starts sounding sharper, moving faster, and being remembered by the right audience.` | ↓ | `[COPY] Growthscape testimonials description (1 sentence)` | Replace Organic description | [COPY] Testimonials description (15–25 words) | `[COPY]` |

### Testimonial 1

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 11.4 | Category: `Restaurant Campaign` | ↓ | `[VERIFY] Growthscape project category` | Replace category | [VERIFY] Project industry/category | `[VERIFY]` |
| 11.5 | Quote: `"Organic moved the brand beyond food shots into cultural memory, staff stories, and founder-led moments people actually wanted to watch."` | ↓ | `[VERIFY] Real Growthscape client quote (1–2 sentences)` | Replace with real Growthscape client quote — DO NOT fabricate | [VERIFY] Client quote | `[VERIFY]` |
| 11.6 | Client Name: `Upali's by Nawaloka` | ↓ | `[VERIFY] Growthscape client name` | Replace client name | [VERIFY] Client name | `[VERIFY]` |
| 11.7 | Metric: `153k top reel views` | ↓ | `[VERIFY] Growthscape verified metric` | Replace with verified metric | [VERIFY] Project metric | `[VERIFY]` |

### Testimonial 2

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 11.8 | Category: `Branded Series` | ↓ | `[VERIFY] Growthscape project category` | Replace category | [VERIFY] Project industry/category | `[VERIFY]` |
| 11.9 | Quote: `"A simple product became an episodic story. The content gave people a reason to come back, follow the plot, and remember the brand."` | ↓ | `[VERIFY] Real Growthscape client quote (1–2 sentences)` | Replace with real client quote | [VERIFY] Client quote | `[VERIFY]` |
| 11.10 | Client Name: `Bluefort` | ↓ | `[VERIFY] Growthscape client name` | Replace client name | [VERIFY] Client name | `[VERIFY]` |
| 11.11 | Metric: `5 episodes shipped` | ↓ | `[VERIFY] Growthscape verified metric` | Replace with verified metric | [VERIFY] Project metric | `[VERIFY]` |

### Testimonial 3

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 11.12 | Category: `Founder-Led Brands` | ↓ | `[VERIFY] Growthscape project category` | Replace category | [VERIFY] Project industry/category | `[VERIFY]` |
| 11.13 | Quote: `"The difference is the system. Strategy, production, editing, and monthly iteration feel connected instead of random posts on a calendar."` | ↓ | `[VERIFY] Real Growthscape client quote (1–2 sentences)` | Replace with real client quote | [VERIFY] Client quote | `[VERIFY]` |
| 11.14 | Client Name: `Organic Network` | ↓ | `[VERIFY] Growthscape client name` | Replace client name | [VERIFY] Client name | `[VERIFY]` |
| 11.15 | Metric: `35+ brands shaped` | ↓ | `[VERIFY] Growthscape verified metric` | Replace with verified metric | [VERIFY] Project metric | `[VERIFY]` |

### Carousel Indicators

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 11.16 | Dot 1: `aria-label="Go to testimonial 1"` | ↓ | Same pattern | Behavior unchanged | None | `[SAME]` |
| 11.17 | Dot 2: `aria-label="Go to testimonial 2"` | ↓ | Same pattern | Behavior unchanged | None | `[SAME]` |
| 11.18 | Dot 3: `aria-label="Go to testimonial 3"` | ↓ | Same pattern | Behavior unchanged | None | `[SAME]` |

---

## 12. SECOND LOGO MARQUEE

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 12.1 | Identical to first marquee (36 logos) | ↓ | Same as first Growthscape marquee (#5) | Duplicate section — same assets | Same as #5.2 | `[ASSET]` |

---

## 13. FAQ

### Section Header

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 13.1 | Section Label: `FAQ` | ↓ | `FAQ` | No change | None | `[SAME]` |
| 13.2 | H2 Heading: `Questions before the first frame?` | ↓ | `[COPY] Growthscape FAQ heading` | Replace Organic cinematic heading with Growthscape direct heading | [COPY] FAQ H2 (3–8 words) | `[COPY]` |

### FAQ Item 1

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 13.3 | Question: `Do you only work with Sri Lankan brands?` | ↓ | `[COPY] Growthscape FAQ question 1` | Replace geographic objection with Growthscape-relevant objection | [COPY] Question (5–12 words) | `[COPY]` |
| 13.4 | Answer: `No. Organic is based in Sri Lanka but works with brands across regions. The content system adapts to any market where the audience is active on social media.` | ↓ | `[COPY] Growthscape FAQ answer 1 (1–2 sentences)` | Replace Organic answer | [COPY] Answer (20–40 words) | `[COPY]` |

### FAQ Item 2

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 13.5 | Question: `Can you help if we do not know what to post?` | ↓ | `[COPY] Growthscape FAQ question 2` | Replace content planning objection | [COPY] Question (5–12 words) | `[COPY]` |
| 13.6 | Answer: `Yes. Strategy is the first step. Organic builds content pillars, calendars, and production plans before a single frame is shot.` | ↓ | `[COPY] Growthscape FAQ answer 2 (1–2 sentences)` | Replace Organic answer | [COPY] Answer (20–40 words) | `[COPY]` |

### FAQ Item 3

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 13.7 | Question: `Do we receive raw footage?` | ↓ | `[COPY] Growthscape FAQ question 3` | Replace asset ownership objection | [COPY] Question (5–12 words) | `[COPY]` |
| 13.8 | Answer: `Yes. Every package includes raw footage so brands can repurpose content for stories, ads, and internal use.` | ↓ | `[COPY] Growthscape FAQ answer 3 (1–2 sentences)` | Replace Organic answer | [COPY] Answer (20–40 words) | `[COPY]` |

### FAQ Item 4

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 13.9 | Question: `Is this only short-form video?` | ↓ | `[COPY] Growthscape FAQ question 4` | Replace format objection | [COPY] Question (5–12 words) | `[COPY]` |
| 13.10 | Answer: `Organic specialises in short-form for platforms like Instagram, TikTok, and YouTube Shorts. Long-form and campaign content can be arranged as part of a custom package.` | ↓ | `[COPY] Growthscape FAQ answer 4 (1–2 sentences)` | Replace Organic answer | [COPY] Answer (20–40 words) | `[COPY]` |

### FAQ Behavior

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 13.11 | Accordion: Click to expand/collapse, Plus/Minus icon toggle | ↓ | Same behavior pattern | Keep interaction | None | `[SAME]` |

---

## 14. CONTACT → GET IN TOUCH

### Section Header

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 14.1 | Section Label: `Get in Touch` | ↓ | `Contact` or `Get in Touch` | Keep or rename | [COPY] Section label | `[COPY]` |
| 14.2 | H2 Heading: `Let's build something unforgettable together.` | ↓ | `[COPY] Growthscape contact heading` | Replace with Growthscape contact positioning | [COPY] Contact H2 (5–10 words) | `[COPY]` |
| 14.3 | Description: `Tell us about your brand and Organic will shape a content strategy around your goals. Expect a message within 24 hours.` | ↓ | `[COPY] Growthscape contact description (1–2 sentences)` | Replace Organic description | [COPY] Contact description (20–30 words) | `[COPY]` |

### Contact Info

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 14.4 | Phone 1: `+94 77 736 3074` → `tel:+94777363074` | ↓ | `[VERIFY] Growthscape phone number` → `tel:[number]` | Replace Organic phone | [VERIFY] Phone number | `[VERIFY]` |
| 14.5 | Phone 2: `+94 71 668 5171` → `tel:+94716685171` | ↓ | `[VERIFY] Growthscape secondary phone` → `tel:[number]` | Replace Organic phone | [VERIFY] Secondary phone (optional) | `[VERIFY]` |
| 14.6 | Email: `info@organicslk.com` → `mailto:info@organicslk.com` | ↓ | `[VERIFY] Growthscape email` → `mailto:[email]` | Replace Organic email | [VERIFY] Email address | `[VERIFY]` |
| 14.7 | Address: `497 Negombo-Colombo Main Rd, Peliyagoda 11300` | ↓ | `[VERIFY] Growthscape address` | Replace Organic address | [VERIFY] Physical address | `[VERIFY]` |

### Contact Form

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 14.8 | Field 1 Label: `Your Name` | ↓ | `Your Name` | No change needed | None | `[SAME]` |
| 14.9 | Field 2 Label: `Brand / Company Name` | ↓ | `Brand / Company Name` | No change needed | None | `[SAME]` |
| 14.10 | Field 3 Label: `Email Address` | ↓ | `Email Address` | No change needed | None | `[SAME]` |
| 14.11 | Field 4 Label: `Phone Number` | ↓ | `Phone Number` | No change needed | None | `[SAME]` |
| 14.12 | Field 5 Label: `Which package interests you?` | ↓ | `[COPY] Growthscape select label` | Update to reference Growthscape tiers | [COPY] Select label | `[COPY]` |
| 14.13 | Select Default: `Select a package` (disabled) | ↓ | `[COPY] Growthscape default option` | Update option text | [COPY] Default option text | `[COPY]` |
| 14.14 | Select Option 1: `Standard` | ↓ | `[COPY] Growthscape tier 1 name` | Match tier 1 name from #10.4 | [COPY] Same as #10.4 | `[COPY]` |
| 14.15 | Select Option 2: `Personal Brand` | ↓ | `[COPY] Growthscape tier 2 name` | Match tier 2 name from #10.14 | [COPY] Same as #10.14 | `[COPY]` |
| 14.16 | Select Option 3: `Custom` | ↓ | `Custom` | No change needed | None | `[SAME]` |
| 14.17 | Select Option 4: `Not sure yet` | ↓ | `Not sure yet` | No change needed | None | `[SAME]` |
| 14.18 | Field 6 Label: `What are you looking to achieve?` | ↓ | `[COPY] Growthscape textarea label` | Update label | [COPY] Textarea label | `[COPY]` |
| 14.19 | Textarea Placeholder: `Grow our Instagram following, launch a new product, build brand awareness...` | ↓ | `[COPY] Growthscape placeholder text` | Replace Organic examples with Growthscape examples | [COPY] Placeholder text (1 sentence) | `[COPY]` |
| 14.20 | Submit Button: `Send Message` | ↓ | `[COPY] Growthscape submit text` | Update button text | [COPY] Submit text | `[COPY]` |

---

## 15. FINAL CTA

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 15.1 | Section Label: `Final move` | ↓ | `[COPY] Growthscape final CTA label` | Replace Organic label | [COPY] CTA label (2–4 words) | `[COPY]` |
| 15.2 | H2 Heading: `Ready to make your brand impossible to ignore?` | ↓ | `[COPY] Growthscape final CTA heading` | Replace Organic heading with Growthscape urgency heading | [COPY] Final CTA H2 (5–10 words) | `[COPY]` |
| 15.3 | Pill Badge 1: `15 min strategy call` | ↓ | `[COPY] Growthscape CTA benefit 1` | Replace benefit pill | [COPY] Benefit (2–4 words) | `[COPY]` |
| 15.4 | Pill Badge 2: `Brand direction` | ↓ | `[COPY] Growthscape CTA benefit 2` | Replace benefit pill | [COPY] Benefit (2–4 words) | `[COPY]` |
| 15.5 | Pill Badge 3: `Content system map` | ↓ | `[COPY] Growthscape CTA benefit 3` | Replace benefit pill | [COPY] Benefit (2–4 words) | `[COPY]` |
| 15.6 | CTA Button: `Book a Call with Amantha` → `#contact` (with founder photo) | ↓ | `[COPY] Growthscape CTA text` → `#contact` (with founder/team photo) | Replace Organic CTA with Growthscape CTA | [COPY] CTA text | `[COPY]` |
| 15.7 | Founder Photo: `/images/amantha.png` (Amantha Perera, 128×219) | ↓ | `[ASSET] Growthscape founder/team photo` | Replace Organic founder photo | [ASSET] Founder/team circular photo (min 128×128) | `[ASSET]` |
| 15.8 | Closing Line: `Be quick. A sharper content month starts with one focused conversation.` | ↓ | `[COPY] Growthscape urgency closing (1 sentence)` | Replace Organic urgency with Growthscape urgency | [COPY] Closing line (8–15 words) | `[COPY]` |

---

## 16. FOOTER — BRAND COLUMN

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 16.1 | Logo: `ORGANIC` (SVG) | ↓ | `[ASSET] Growthscape logo (SVG)` | Replace brand mark | [ASSET] Growthscape logo SVG | `[ASSET]` |
| 16.2 | Tagline: `Sri Lanka's first organic content marketing agency. Founder-led content systems, cinematic production, and brand stories people remember.` | ↓ | `[COPY] Growthscape tagline (1–2 sentences)` | Replace Organic tagline | [COPY] Footer tagline (20–35 words) | `[COPY]` |
| 16.3 | Social 1: `Instagram` → `https://instagram.com` | ↓ | `Instagram` → `[VERIFY] Growthscape Instagram URL` | Replace Organic social URL | [VERIFY] Instagram URL | `[VERIFY]` |
| 16.4 | Social 2: `LinkedIn` → `https://linkedin.com` | ↓ | `LinkedIn` → `[VERIFY] Growthscape LinkedIn URL` | Replace Organic social URL | [VERIFY] LinkedIn URL | `[VERIFY]` |

---

## 17. FOOTER — CONTACT COLUMN

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 17.1 | Address: `497 Negombo-Colombo Main Rd, Peliyagoda 11300` | ↓ | `[VERIFY] Growthscape address` | Replace Organic address | [VERIFY] Same as #14.7 | `[VERIFY]` |
| 17.2 | Phone 1: `+94 77 736 3074` | ↓ | `[VERIFY] Growthscape phone` | Replace Organic phone | [VERIFY] Same as #14.4 | `[VERIFY]` |
| 17.3 | Phone 2: `+94 71 668 5171` | ↓ | `[VERIFY] Growthscape secondary phone` | Replace Organic phone | [VERIFY] Same as #14.5 | `[VERIFY]` |
| 17.4 | Email: `info@organicslk.com` | ↓ | `[VERIFY] Growthscape email` | Replace Organic email | [VERIFY] Same as #14.6 | `[VERIFY]` |

---

## 18. FOOTER — COMPANY NAVIGATION

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 18.1 | Link: `Who We Are` → `#who` | ↓ | `About` → `#about` | Match desktop nav | Same as #2.2 | `[SAME]` |
| 18.2 | Link: `Our Work` → `#work` | ↓ | `Work` → `#work` | Match desktop nav | Same as #2.3 | `[SAME]` |
| 18.3 | Link: `How We Work` → `#process` | ↓ | `Services` → `#services` | Match desktop nav | Same as #2.4 | `[SAME]` |
| 18.4 | Link: `Packages` → `#packages` | ↓ | `Pricing` → `#pricing` | Match desktop nav | Same as #2.5 | `[SAME]` |

---

## 19. FOOTER — RESOURCES NAVIGATION

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 19.1 | Link: `Case Studies` → `#work` | ↓ | `Work` → `#work` | Rename to match nav | None | `[SAME]` |
| 19.2 | Link: `Gallery` → `#gallery` | ↓ | `Gallery` → `#gallery` | No change | None | `[SAME]` |
| 19.3 | Link: `FAQ` → `#faq` | ↓ | `FAQ` → `#faq` | No change | None | `[SAME]` |
| 19.4 | Link: `Contact` → `#contact` | ↓ | `Contact` → `#contact` | No change | None | `[SAME]` |

---

## 20. FOOTER — BOTTOM BAR

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 20.1 | Left: `Made in Sri Lanka` | ↓ | `[COPY] Growthscape origin statement` | Replace Organic origin | [COPY] Origin statement (2–5 words) | `[COPY]` |
| 20.2 | Center: `Copyright © 2026 Organic.` | ↓ | `Copyright © 2026 Growthscape.` | Replace brand name | None — just swap "Organic" → "Growthscape" | `[SAME]` |
| 20.3 | Right: `A Solution By Opti5 Labs` → `https://opti5labs.com` | ↓ | `[VERIFY] Growthscape parent/agency credit` → `[VERIFY] URL` | Replace Organic parent company | [VERIFY] Parent/agency name + URL | `[VERIFY]` |

---

## 21. GLOBAL VISUAL ASSETS

| # | Current Organic Asset | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|----------------------|---|------------------------|--------|---------------------|--------|
| 21.1 | `/images/logo.svg` — "ORGANIC" text SVG (848×236) | ↓ | `[ASSET] Growthscape logo SVG` | Replace brand mark | [ASSET] Logo SVG | `[ASSET]` |
| 21.2 | `/images/hero-video-still.webp` — Hero background (1600×844) | ↓ | `[ASSET] Growthscape hero image` | Replace hero visual | [ASSET] Hero image (min 1600×844) or video | `[ASSET]` |
| 21.3 | `/images/amantha.png` — Founder portrait (128×219) | ↓ | `[ASSET] Growthscape founder/team photo` | Replace founder photo | [ASSET] Circular portrait (min 128×128) | `[ASSET]` |
| 21.4 | `/seo/favicon.png` — Organic favicon | ↓ | `[ASSET] Growthscape favicon` | Replace favicon | [ASSET] Favicon (.ico + .png) | `[ASSET]` |
| 21.5 | `/seo/og-image.png` — Organic OG image | ↓ | `[ASSET] Growthscape OG image` | Replace OG image | [ASSET] OG image (1200×630) | `[ASSET]` |

---

## 22. CLIENT LOGO ASSETS

| # | Current Organic Asset | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|----------------------|---|------------------------|--------|---------------------|--------|
| 22.1 | `/images/brands/brand1.webp` — Mezo (512×512) | ↓ | `[ASSET] Growthscape client logo 1` | Replace Organic client | [ASSET] Client logo (WebP/PNG, 512×512) | `[ASSET]` |
| 22.2 | `/images/brands/brand2.webp` — Bluefort (512×512) | ↓ | `[ASSET] Growthscape client logo 2` | Replace Organic client | [ASSET] Client logo | `[ASSET]` |
| 22.3 | `/images/brands/brand3.webp` — Thambili Island (512×512) | ↓ | `[ASSET] Growthscape client logo 3` | Replace Organic client | [ASSET] Client logo | `[ASSET]` |
| 22.4 | `/images/brands/brand4.webp` — Culture by Ari (512×512) | ↓ | `[ASSET] Growthscape client logo 4` | Replace Organic client | [ASSET] Client logo | `[ASSET]` |
| 22.5 | `/images/brands/brand5.webp` — Kannadi (512×512) | ↓ | `[ASSET] Growthscape client logo 5` | Replace Organic client | [ASSET] Client logo | `[ASSET]` |
| 22.6 | `/images/brands/brand6.webp` — Comfort World (512×512) | ↓ | `[ASSET] Growthscape client logo 6` | Replace Organic client | [ASSET] Client logo | `[ASSET]` |
| 22.7 | `/images/brands/brand7.webp` — Land Rover (512×512) | ↓ | `[ASSET] Growthscape client logo 7` | Replace Organic client | [ASSET] Client logo | `[ASSET]` |
| 22.8 | `/images/brands/brand8.webp` — Sarigama (512×512) | ↓ | `[ASSET] Growthscape client logo 8` | Replace Organic client | [ASSET] Client logo | `[ASSET]` |
| 22.9 | `/images/brands/brand9.webp` — Glow (512×512) | ↓ | `[ASSET] Growthscape client logo 9` | Replace Organic client | [ASSET] Client logo | `[ASSET]` |
| 22.10 | `/images/brands/brand10.webp` — Tathya (512×512) | ↓ | `[ASSET] Growthscape client logo 10` | Replace Organic client | [ASSET] Client logo | `[ASSET]` |
| 22.11 | `/images/brands/brand11.webp` — Upali's (512×512) | ↓ | `[ASSET] Growthscape client logo 11` | Replace Organic client | [ASSET] Client logo | `[ASSET]` |
| 22.12 | `/images/brands/brand12.webp` + `brand12-2.webp` — Liv + hover (512×512) | ↓ | `[ASSET] Growthscape client logo 12 + hover variant` | Replace Organic client (dual-image) | [ASSET] Client logo + hover variant | `[ASSET]` |
| 22.13–22.36 | Remaining 24 Organic client logos (brand13–brand36) | ↓ | `[ASSET] Growthscape client logos 13–36` | Replace all remaining Organic clients | [ASSET] 24 client logos (or minimum 12 total) | `[ASSET]` |

---

## 23. VIDEO ASSETS

| # | Current Organic Asset | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|----------------------|---|------------------------|--------|---------------------|--------|
| 23.1 | `/videos/gallery/upalis-reel-fixed.mp4` — Case study 1 video | ↓ | `[ASSET] Growthscape project 1 video` | Replace Organic project video | [ASSET] MP4 video | `[ASSET]` |
| 23.2 | `/videos/gallery/sarigamaCS-casestudy.mp4` — Case study 2 video | ↓ | `[ASSET] Growthscape project 2 video` | Replace Organic project video | [ASSET] MP4 video | `[ASSET]` |
| 23.3 | 12 gallery videos (referenced by thumbnails) | ↓ | `[ASSET] Growthscape gallery videos × 12` | Replace all Organic gallery videos | [ASSET] 12 MP4 videos | `[ASSET]` |

---

## 24. GALLERY THUMBNAIL ASSETS

| # | Current Organic Asset | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|----------------------|---|------------------------|--------|---------------------|--------|
| 24.1 | `/images/gallery/thumbnail1.webp` (621×910) | ↓ | `[ASSET] Growthscape thumbnail 1` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.2 | `/images/gallery/thumbnail2.webp` (867×446) | ↓ | `[ASSET] Growthscape thumbnail 2` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.3 | `/images/gallery/thumbnail3.webp` (802×599) | ↓ | `[ASSET] Growthscape thumbnail 3` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.4 | `/images/gallery/thumbnail4.webp` (4032×2268) | ↓ | `[ASSET] Growthscape thumbnail 4` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.5 | `/images/gallery/thumbnail5.webp` (621×633) | ↓ | `[ASSET] Growthscape thumbnail 5` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.6 | `/images/gallery/thumbnail6.webp` (620×394) | ↓ | `[ASSET] Growthscape thumbnail 6` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.7 | `/images/gallery/thumbnail7.webp` (838×624) | ↓ | `[ASSET] Growthscape thumbnail 7` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.8 | `/images/gallery/thumbnail8.webp` (839×922) | ↓ | `[ASSET] Growthscape thumbnail 8` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.9 | `/images/gallery/thumbnail9.webp` (786×621) | ↓ | `[ASSET] Growthscape thumbnail 9` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.10 | `/images/gallery/thumbnail10.webp` (679×464) | ↓ | `[ASSET] Growthscape thumbnail 10` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.11 | `/images/gallery/thumbnail11.webp` (805×617) | ↓ | `[ASSET] Growthscape thumbnail 11` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |
| 24.12 | `/images/gallery/thumbnail12.webp` (826×571) | ↓ | `[ASSET] Growthscape thumbnail 12` | Replace Organic thumbnail | [ASSET] WebP thumbnail | `[ASSET]` |

---

## 25. ICONS

| # | Current Organic Element | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|------------------------|---|------------------------|--------|---------------------|--------|
| 25.1 | InstagramIcon (used in case study links) | ↓ | Same icon | Keep standard icon | None | `[SAME]` |
| 25.2 | ArrowLeftIcon / ArrowRightIcon (carousel controls) | ↓ | Same icons | Keep standard icons | None | `[SAME]` |
| 25.3 | Plus/Minus icons (FAQ accordion) | ↓ | Same icons | Keep standard icons | None | `[SAME]` |
| 25.4 | Social icons (Instagram, LinkedIn in footer) | ↓ | Same icons | Keep standard icons | None | `[SAME]` |
| 25.5 | Hamburger menu icon (mobile nav) | ↓ | Same icon | Keep standard icon | None | `[SAME]` |
| 25.6 | Play icon (gallery video overlay) | ↓ | Same icon | Keep standard icon | None | `[SAME]` |

---

## 26. CSS / VISUAL BEHAVIORS

| # | Current Organic Behavior | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|-------------------------|---|------------------------|--------|---------------------|--------|
| 26.1 | `.card-glass` — Glass-morphism cards | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.2 | `.btn-3d` — 3D button (white/light) | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.3 | `.btn-3d-dark` — 3D button (dark) | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.4 | `.case-card` — Case study card gradient | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.5 | `.process-card` — Process step card | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.6 | `.testimonial-card` — Testimonial card | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.7 | `.package-card-dark` / `.package-card-light` | ↓ | Same classes | Keep visual style | None | `[SAME]` |
| 26.8 | `.tag-pill` — Tag pill styling | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.9 | `.section-label` — Section label pill | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.10 | `.faq-item` — FAQ accordion item | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.11 | `.form-input` — Contact form input | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.12 | `.nav-pill` — Glass-morphism nav | ↓ | Same class | Keep visual style | None | `[SAME]` |
| 26.13 | Marquee animations (`animate-marquee`, `animate-marquee-reverse`, `animate-marquee-slow`) | ↓ | Same animations | Keep animation | None | `[SAME]` |
| 26.14 | Scroll fade-in animation (`.animate-fade-in-up` + IntersectionObserver) | ↓ | Same animation | Keep animation | None | `[SAME]` |
| 26.15 | Hero grid/wave overlays (`.hero-grid-overlay`, `.hero-wave-overlay`) | ↓ | Same overlays | Keep visual style | None | `[SAME]` |
| 26.16 | Responsive breakpoints (768px: footer grid collapse, heading scale) | ↓ | Same breakpoints | Keep responsive behavior | None | `[SAME]` |
| 26.17 | Scrollbar hiding (`.scrollbar-hide`) | ↓ | Same utility | Keep utility | None | `[SAME]` |

---

## 27. NAVIGATION BEHAVIOR

| # | Current Organic Behavior | ↓ | Growthscape Replacement | Reason | Required Information | Status |
|---|-------------------------|---|------------------------|--------|---------------------|--------|
| 27.1 | Fixed top nav with glass-morphism on scroll | ↓ | Same behavior | Keep navigation pattern | None | `[SAME]` |
| 27.2 | Scroll-based nav background opacity transition | ↓ | Same behavior | Keep transition | None | `[SAME]` |
| 27.3 | Smooth scroll to section anchors | ↓ | Same behavior | Keep scroll behavior | None | `[SAME]` |
| 27.4 | Mobile hamburger → overlay menu | ↓ | Same behavior | Keep mobile pattern | None | `[SAME]` |
| 27.5 | Active section highlighting in nav | ↓ | Same behavior | Keep UX pattern | None | `[SAME]` |

---

## 28. COMPONENT STRUCTURE

| # | Current Organic Component | ↓ | Growthscape Component | File | Change Type |
|---|--------------------------|---|----------------------|------|-------------|
| 28.1 | `Navbar.tsx` | ↓ | `Navbar.tsx` | `src/components/Navbar.tsx` | Content swap only |
| 28.2 | `HeroSection.tsx` | ↓ | `HeroSection.tsx` | `src/components/HeroSection.tsx` | Content swap only |
| 28.3 | `LogoMarquee.tsx` | ↓ | `LogoMarquee.tsx` | `src/components/LogoMarquee.tsx` | Asset swap (logos) |
| 28.4 | `WhoWeAre.tsx` | ↓ | `WhoWeAre.tsx` | `src/components/WhoWeAre.tsx` | Content swap only |
| 28.5 | `CaseStudies.tsx` | ↓ | `CaseStudies.tsx` | `src/components/CaseStudies.tsx` | Content + asset swap |
| 28.6 | `ProcessSteps.tsx` | ↓ | `ProcessSteps.tsx` | `src/components/ProcessSteps.tsx` | Content swap only |
| 28.7 | `Gallery.tsx` | ↓ | `Gallery.tsx` | `src/components/Gallery.tsx` | Asset swap (12 thumbnails + videos) |
| 28.8 | `Packages.tsx` | ↓ | `Packages.tsx` | `src/components/Packages.tsx` | Content swap only |
| 28.9 | `Testimonials.tsx` | ↓ | `Testimonials.tsx` | `src/components/Testimonials.tsx` | Content swap only |
| 28.10 | `FAQ.tsx` | ↓ | `FAQ.tsx` | `src/components/FAQ.tsx` | Content swap only |
| 28.11 | `ContactSection.tsx` | ↓ | `ContactSection.tsx` | `src/components/ContactSection.tsx` | Content swap only |
| 28.12 | `FinalCTA.tsx` | ↓ | `FinalCTA.tsx` | `src/components/FinalCTA.tsx` | Content + asset swap |
| 28.13 | `Footer.tsx` | ↓ | `Footer.tsx` | `src/components/Footer.tsx` | Content swap only |
| 28.14 | `globals.css` | ↓ | `globals.css` | `src/app/globals.css` | No structural changes |
| 28.15 | `layout.tsx` | ↓ | `layout.tsx` | `src/app/layout.tsx` | Metadata swap only |
| 28.16 | `icons.tsx` | ↓ | `icons.tsx` | `src/components/icons.tsx` | No changes |

---

## 29. GLOBAL STATS DISPLAY (Verified Metrics)

These Growthscape metrics may appear in multiple sections. Use ONLY these verified numbers.

| # | Metric | Value | Usage Locations |
|---|--------|-------|-----------------|
| 29.1 | Projects Completed | `150+` | Hero, About, Footer, Stats bar |
| 29.2 | Clients Served | `200+` | Hero, About, Footer, Trust strip |
| 29.3 | Client Satisfaction | `99%` | Hero, Testimonials, Footer |
| 29.4 | Years in Operation | `5+` | About, Footer, Trust strip |

---

## 30. MIGRATION SUMMARY

| Category | Total Elements | Content Swap | Asset Swap | Verified Input | Same Behavior |
|----------|---------------|-------------|-----------|---------------|--------------|
| **Page Metadata** | 5 | 3 | 2 | 1 | 0 |
| **Navigation (Desktop)** | 8 | 5 | 1 | 0 | 2 |
| **Navigation (Mobile)** | 3 | 1 | 0 | 0 | 2 |
| **Hero** | 7 | 6 | 1 | 0 | 0 |
| **Logo Marquee** | 3 | 1 | 1 | 0 | 1 |
| **About (Who We Are)** | 13 | 10 | 1 | 1 | 2 |
| **Case Studies** | 36 | 20 | 4 | 12 | 2 |
| **Process** | 31 | 24 | 0 | 0 | 7 |
| **Gallery** | 7 | 3 | 2 | 0 | 4 |
| **Pricing (Packages)** | 23 | 16 | 0 | 0 | 7 |
| **Testimonials** | 18 | 12 | 0 | 6 | 6 |
| **FAQ** | 11 | 9 | 0 | 0 | 2 |
| **Contact** | 20 | 10 | 0 | 5 | 10 |
| **Final CTA** | 8 | 7 | 1 | 0 | 1 |
| **Footer** | 14 | 8 | 1 | 5 | 5 |
| **Global Visual Assets** | 5 | 0 | 5 | 0 | 0 |
| **Client Logos** | 36 | 0 | 36 | 0 | 0 |
| **Video Assets** | 3 | 0 | 3 | 0 | 0 |
| **Gallery Thumbnails** | 12 | 0 | 12 | 0 | 0 |
| **Icons** | 6 | 0 | 0 | 0 | 6 |
| **CSS Behaviors** | 17 | 0 | 0 | 0 | 17 |
| **Nav Behavior** | 5 | 0 | 0 | 0 | 5 |
| **Component Structure** | 16 | 0 | 0 | 0 | 16 |
| **TOTAL** | **276** | **115** | **69** | **30** | **87** |

---

## 31. BLOCKERS — Items Requiring Stakeholder Input Before Phase 3B

These items have `[VERIFY]` status and MUST be resolved before copy generation can begin.

| # | Item | Type | Required Action |
|---|------|------|-----------------|
| B1 | Growthscape domain name | Verify | Confirm exact domain (growable.com, growthscape.co, etc.) |
| B2 | Growthscape founder/leader name | Verify | Confirm name and title for About section and Final CTA |
| B3 | Growthscape phone number(s) | Verify | Provide 1–2 phone numbers |
| B4 | Growthscape email address | Verify | Provide contact email |
| B5 | Growthscape physical address | Verify | Provide address (or remove if remote) |
| B6 | Growthscape Instagram URL | Verify | Provide Instagram profile URL |
| B7 | Growthscape LinkedIn URL | Verify | Provide LinkedIn profile URL |
| B8 | Growthscape parent/agency credit | Verify | Confirm if Opti5 Labs credit stays, changes, or is removed |
| B9 | Growthscape case study projects (×2) | Verify | Provide 2 real projects with client names, locations, verified metrics, and live URLs |
| B10 | Growthscape testimonials (×3) | Verify | Provide 3 real client quotes with client names, industries, and metrics |
| B11 | Growthscape pricing tiers | Verify | Confirm tier names, features, and pricing model (public pricing or "contact for quote") |

---

*End of Growthscape Replacement Specification — Phase 2.5*
