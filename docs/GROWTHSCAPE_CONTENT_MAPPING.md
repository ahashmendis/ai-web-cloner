# Growthscape Content Mapping — Phase 2

> **Date:** 2026-07-26
> **Source:** CONTENT_INVENTORY.md (canonical content architecture)
> **Objective:** Map Organic content structure → Growthscape content requirements
> **Status:** Information architecture only. No copy. No design. No implementation.

---

## TABLE OF CONTENTS

1. [Page Metadata](#1-page-metadata)
2. [Navigation](#2-navigation)
3. [Hero Section](#3-hero-section)
4. [Logo Marquee](#4-logo-marquee)
5. [Who We Are → About](#5-who-we-are--about)
6. [Case Studies → Portfolio](#6-case-studies--portfolio)
7. [Process Steps → How We Work](#7-process-steps--how-we-work)
8. [Gallery → Visual Portfolio](#8-gallery--visual-portfolio)
9. [Packages → Services & Pricing](#9-packages--services--pricing)
10. [Testimonials → Social Proof](#10-testimonials--social-proof)
11. [FAQ](#11-faq)
12. [Contact → Get In Touch](#12-contact--get-in-touch)
13. [Final CTA](#13-final-cta)
14. [Footer](#14-footer)
15. [Global Assets](#15-global-assets)
16. [Content Requirements Summary](#16-content-requirements-summary)

---

## 1. PAGE METADATA

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Page Title** | Organic - Sri Lanka's First Organic Content Marketing Agency | Growthscape — [Primary Tagline] | SEO + browser tab identity | P0 |
| **Meta Description** | Purpose-driven video content that humanises brands and builds genuine organic audiences. | [Value proposition in ≤160 chars] | Search engine snippet | P0 |
| **Favicon** | Organic logo favicon | Growthscape logo favicon | Browser tab icon | P0 |
| **OG Image** | Organic branded OG image | Growthscape branded OG image | Social media sharing preview | P1 |
| **Canonical URL** | organicslk.com | growthscape.com (or .co) | SEO canonical | P0 |

**Required Information for Phase 3:**
- Growthscape domain name
- Growthscape primary tagline (for title)
- Growthscape meta description (≤160 chars)
- Growthscape logo (favicon format: .ico, 32×32 + 16×16)
- Growthscape OG image (1200×630)

---

## 2. NAVIGATION

### 2A. Desktop Navigation

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Logo** | "ORGANIC" SVG text logo | Growthscape logo (SVG or image) | Brand identity + home link | P0 |
| **Nav Link 1** | Who We Are → #who | About → #about | Company introduction | P0 |
| **Nav Link 2** | Our Work → #work | Work → #work | Portfolio/projects | P0 |
| **Nav Link 3** | How We Work → #process | Services → #services | Service offerings | P0 |
| **Nav Link 4** | Packages → #packages | Pricing → #pricing | Pricing tiers | P0 |
| **Nav Link 5** | FAQ → #faq | FAQ → #faq | Objection handling | P1 |
| **Nav Link 6** | Contact → #contact | Contact → #contact | Lead capture | P0 |
| **CTA Button** | Book a Strategy Call → #contact | [Primary CTA] → #contact | Conversion | P0 |

**Growthscape Navigation Architecture:**
```
Home → #hero
About → #about
Work → #work
Services → #services
Pricing → #pricing
FAQ → #faq
Contact → #contact
[CTA Button] → #contact
```

**Required Information for Phase 3:**
- Growthscape logo asset (SVG preferred, transparent background)
- Growthscape CTA button text (e.g., "Start Your Project", "Get a Quote", "Let's Talk")
- Confirm navigation structure matches Growthscape sitemap

### 2B. Mobile Navigation

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Hamburger Menu** | Open menu (aria-label) | Same pattern | Mobile menu toggle | P0 |
| **Mobile Links** | Same as desktop | Same as desktop | Mobile wayfinding | P0 |
| **Mobile CTA** | Book a Strategy Call | [Same as desktop CTA] | Mobile conversion | P0 |

**Required Information for Phase 3:**
- Same CTA text as desktop
- Same nav structure as desktop

---

## 3. HERO SECTION

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Eyebrow Label** | *(none)* | [Optional: section label] | Context setting | P2 |
| **H1 Part 1** | "Meet the brand" | [Growthscape primary headline — part 1] | Value proposition | P0 |
| **H1 Part 2** | "people remember." | [Growthscape primary headline — part 2] | Value proposition completion | P0 |
| **Subheading** | Strategy, production, and monthly storytelling for brands that need attention to turn into trust. | [Growthscape supporting value proposition — 1 sentence] | Explanation | P0 |
| **Primary CTA** | Book a Strategy Call → #contact | [Growthscape primary CTA] → #contact | Primary conversion | P0 |
| **Secondary CTA** | Watch the Work → #work | [Growthscape secondary CTA] → #work | Exploration | P1 |
| **Background** | Hero video still image | [Growthscape hero visual — image or video] | Visual impact | P0 |

**Content Requirements:**

| Field | Specification |
|-------|--------------|
| **Headline Category** | Primary value proposition introducing Growthscape as a [service type] |
| **Headline Tone** | Confident, direct, memorable |
| **Headline Length** | 4–8 words total (split across 2 lines) |
| **Subheading Category** | 1-sentence explanation of what Growthscape does and who it serves |
| **Subheading Length** | 15–25 words |
| **Primary CTA** | Action-oriented, conversion-focused |
| **Secondary CTA** | Exploration-oriented, lower commitment |
| **Hero Visual** | Professional image or video representing Growthscape's work/ethos |

**Required Information for Phase 3:**
- Growthscape primary headline (2 parts, split for visual hierarchy)
- Growthscape subheading (1 sentence, 15–25 words)
- Primary CTA text
- Secondary CTA text
- Hero visual asset (image: min 1600×844 / video: mp4 or webm)

---

## 4. LOGO MARquee

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Section Label** | "Brands that trust Organic" | "Brands that trust Growthscape" (or equivalent) | Context | P0 |
| **Logo Strip** | 36 client logos (grayscale, color on hover) | [Growthscape client logos] | Social proof | P0 |

**Content Requirements:**

| Field | Specification |
|-------|--------------|
| **Label Text** |的信任短语 (trust phrase) |
| **Logo Count** | Minimum 12, ideally 24–36 for visual density |
| **Logo Format** | WebP or PNG, transparent background, grayscale-compatible |
| **Logo Size** | 512×512px (scaled to ~100×40 display) |
| **Hover Behavior** | Grayscale → full color (or dual-image swap for select brands) |
| **Animation** | Infinite horizontal marquee scroll |

**Required Information for Phase 3:**
- Growthscape trust phrase (e.g., "Trusted by industry leaders", "Clients who trust us")
- Growthscape client logos (minimum 12, ideally 24+)
- Logo file format and naming convention
- List of brands with hover variants (if any)

---

## 5. WHO WE ARE → ABOUT

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Section Label** | "Who Are We?" | "About" or "Who We Are" | Navigation context | P0 |
| **H2 Heading** | "Purpose Led Content. Human First Brands." | [Growthscape positioning statement — 2 lines] | Brand positioning | P0 |
| **Description** | Organic specialises in personifying brands and humanising them. Every video is created with a clear strategic objective, not a borrowed trend or generic content pattern. | [Growthscape mission/description — 2–3 sentences] | Company explanation | P0 |

### Card 1 — Founder / Leadership

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Label** | "Founder & Creative Director" | [Growthscape leadership title] | Role context | P0 |
| **H3 Heading** | "Amantha Perera" | [Growthscape founder/leader name] | Personal branding | P0 |
| **Description** | "Led by Amantha and his team, Organic builds content systems that turn brands into recognisable personalities people remember." | [Growthscape founder bio — 1–2 sentences] | Credibility | P0 |

### Card 2 — Core Differentiator

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Label** | "Organic Attention" | [Growthscape differentiator label] | Differentiation | P0 |
| **H3 Heading** | "No Paid Media" | [Growthscape core differentiator — short phrase] | Key selling point | P0 |
| **Description** | "Every view earned. No boosts, no budgets, no shortcuts. Just organic content people stopped scrolling for and kept coming back to watch." | [Growthscape differentiator explanation — 1–2 sentences] | Explanation | P0 |

### Card 3 — Operating Philosophy

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Label** | "Operating Belief" | [Growthscape philosophy label] | Values | P1 |
| **H3 Heading** | "Audience before algorithm" | [Growthscape core belief — short phrase] | Philosophy | P1 |
| **Description** | "Views matter, but memorability matters more. The work is planned around business goals, brand voice, and cultural relevance." | [Growthscape philosophy explanation — 1–2 sentences] | Explanation | P1 |

**Required Information for Phase 3:**
- Growthscape positioning statement (H2, 2 lines)
- Growthscape mission description (2–3 sentences)
- Founder/leader name and title
- Founder/leader bio (1–2 sentences)
- Core differentiator label and explanation
- Operating philosophy label and explanation
- Founder/team photography (portrait, min 400×400)

---

## 6. CASE STUDIES → PORTFOLIO

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Section Label** | "Our Work" | "Work" or "Portfolio" | Navigation context | P0 |
| **H2 Heading** | "Case studies built like scenes, not slides." | [Growthscape portfolio heading] | Portfolio positioning | P0 |

### Case Study Slot 1

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Scene/Number** | "Scene 01" | "01" or "Project 01" | Ordering | P0 |
| **External Link** | View on Instagram → [URL] | [Growthscape project link — live site, Behance, etc.] | External proof | P1 |
| **Badge** | "Organic proof" | [Growthscape proof label] | Verification | P1 |
| **Client Name** | "Upali's by Nawaloka" | [Growthscape client name] | Attribution | P0 |
| **Location** | "Melbourne & Colombo" | [Project location(s)] | Context | P2 |
| **H3 Heading** | "From a restaurant feed to a cultural memory lane." | [Growthscape project headline — descriptive] | Project summary | P0 |
| **Description** | 2–3 sentences describing the work and approach | [Growthscape project description — 2–3 sentences] | Explanation | P0 |
| **Tag Pill 1** | "Personified the brand" | [Growthscape deliverable/outcome tag] | Scannable detail | P0 |
| **Tag Pill 2** | "Moved beyond showcasing food" | [Growthscape deliverable/outcome tag] | Scannable detail | P0 |
| **Tag Pill 3** | "Introduced a Sinhala retro theme" | [Growthscape deliverable/outcome tag] | Scannable detail | P0 |
| **Tag Pill 4** | "Featured staff and founder" | [Growthscape deliverable/outcome tag] | Scannable detail | P0 |
| **Video/Media** | MP4 video embed | [Growthscape project video or image carousel] | Visual proof | P0 |

**Impact Stats — Slot 1:**

| Stat | Organic (Current) | Growthscape (Required) | Priority |
|------|-------------------|----------------------|----------|
| Stat 1 Value | 7,000 | [Verified metric] | P0 |
| Stat 1 Label | "started at" | [Metric label] | P0 |
| Stat 2 Value | 12,800+ | [Verified metric] | P0 |
| Stat 2 Label | "current followers" | [Metric label] | P0 |
| Stat 3 Value | 04months | [Verified metric] | P1 |
| Stat 3 Label | "timeline" | [Metric label] | P1 |
| Stat 4 Value | 153k | [Verified metric] | P0 |
| Stat 4 Label | "top reel views" | [Metric label] | P0 |

### Case Study Slot 2

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Scene/Number** | "Scene 02" | "02" or "Project 02" | Ordering | P0 |
| **External Link** | View on Instagram → [URL] | [Growthscape project link] | External proof | P1 |
| **Badge** | "Organic proof" | [Growthscape proof label] | Verification | P1 |
| **Client Name** | "Sarigama" | [Growthscape client name] | Attribution | P0 |
| **Location** | *(not specified)* | [Project location(s)] | Context | P2 |
| **H3 Heading** | "Sri Lanka's premier live music concert series in Colombo" | [Growthscape project headline] | Project summary | P0 |
| **Description** | 2–3 sentences | [Growthscape project description — 2–3 sentences] | Explanation | P0 |
| **Tag Pills × 4** | Various | [Growthscape deliverables/outcomes] | Scannable detail | P0 |
| **Video/Media** | MP4 video embed | [Growthscape project video or image] | Visual proof | P0 |

**Impact Stats — Slot 2:**

| Stat | Organic (Current) | Growthscape (Required) | Priority |
|------|-------------------|----------------------|----------|
| Stat 1 Value | 100% | [Verified metric] | P0 |
| Stat 1 Label | "tickets sold" | [Metric label] | P0 |
| Stat 2 Value | 3,500 | [Verified metric] | P0 |
| Stat 2 Label | "people attended" | [Metric label] | P0 |
| Stat 3 Value | 264K | [Verified metric] | P0 |
| Stat 3 Label | "top reel views" | [Metric label] | P0 |
| Stat 4 Value | 800K+ | [Verified metric] | P0 |
| Stat 4 Label | "total organic views" | [Metric label] | P0 |

**Required Information for Phase 3:**
- Minimum 2 case studies / projects
- Per project: client name, headline, description (2–3 sentences), 4 tag pills, 4 impact stats, video or image
- Verified metrics only (no fabricated numbers)
- Project video/image assets

---

## 7. PROCESS STEPS → HOW WE WORK

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Section Label** | "How We Work" | "How We Work" or "Our Process" | Navigation context | P0 |
| **H2 Heading** | "A repeatable system built for results every month." | [Growthscape process heading] | Process positioning | P0 |
| **Description** | "Strategy, production, delivery, and iteration are treated as one loop. The story keeps moving because the system keeps moving." | [Growthscape process description — 1–2 sentences] | Process explanation | P0 |

### Step 01

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Number** | 01 | 01 | Ordering | P0 |
| **H3 Heading** | "Strategy & Planning" | [Growthscape step 1 name] | Step identification | P0 |
| **Description** | "We get under the skin of the brand first: audience, voice, offer, and the business outcome every video has to serve." | [Growthscape step 1 description — 1 sentence] | Explanation | P0 |
| **Tag Pill 1** | "Discovery Call" | [Growthscape step 1 sub-task] | Detail | P0 |
| **Tag Pill 2** | "Brand Audit" | [Growthscape step 1 sub-task] | Detail | P0 |
| **Tag Pill 3** | "Content Pillars" | [Growthscape step 1 sub-task] | Detail | P0 |
| **Tag Pill 4** | "Content Calendar" | [Growthscape step 1 sub-task] | Detail | P0 |

### Step 02

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Number** | 02 | 02 | Ordering | P0 |
| **H3 Heading** | "Production Planning" | [Growthscape step 2 name] | Step identification | P0 |
| **Description** | "Scripts, locations, talent, and approvals are prepared before shoot day so the work feels sharp, not improvised." | [Growthscape step 2 description — 1 sentence] | Explanation | P0 |
| **Tag Pills × 4** | Script Writing, Influencer Coordination, Client Feedback, Shoot Planning | [Growthscape step 2 sub-tasks × 4] | Detail | P0 |

### Step 03

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Number** | 03 | 03 | Ordering | P0 |
| **H3 Heading** | "Production Execution" | [Growthscape step 3 name] | Step identification | P0 |
| **Description** | "The team directs and captures every frame with Sony A7 IV cameras so the brand feels cinematic without losing its human pulse." | [Growthscape step 3 description — 1 sentence] | Explanation | P0 |
| **Tag Pills × 4** | Shoot Execution, Sony A7 IV Production, Direction, Premium Capture | [Growthscape step 3 sub-tasks × 4] | Detail | P0 |

### Step 04

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Number** | 04 | 04 | Ordering | P0 |
| **H3 Heading** | "Post-Production & Delivery" | [Growthscape step 4 name] | Step identification | P0 |
| **Description** | "Footage is edited, refined, delivered, and then fed back into the next month of consistent organic growth." | [Growthscape step 4 description — 1 sentence] | Explanation | P0 |
| **Tag Pills × 4** | Share Raw Footage, Edit, Final Delivery, Repeat Monthly | [Growthscape step 4 sub-tasks × 4] | Detail | P0 |

**Required Information for Phase 3:**
- 4-step process (name, description, 4 sub-tasks per step)
- Process must reflect Growthscape's actual workflow
- Each step: 1 name (2–4 words), 1 description (1 sentence, 15–25 words), 4 sub-task tags (2–4 words each)

---

## 8. GALLERY → VISUAL PORTFOLIO

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Section Label** | "Gallery" | "Gallery" or "Our Work" | Navigation context | P1 |
| **H2 Heading** | "Creators, campaigns, and frames with Organic flare." | [Growthscape gallery heading] | Gallery positioning | P1 |
| **Description** | "A moving wall of founder films, campaign systems, production moments, and brand stories built to feel alive before you even click." | [Growthscape gallery description — 1 sentence] | Gallery explanation | P1 |

### Gallery Grid

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Row 1** | 4 video thumbnails (scrolling left) | [4 project thumbnails] | Visual portfolio | P1 |
| **Row 2** | 4 video thumbnails (scrolling right) | [4 project thumbnails] | Visual portfolio | P1 |
| **Row 3** | 4 video thumbnails (scrolling left, slower) | [4 project thumbnails] | Visual portfolio | P1 |
| **Total Unique** | 12 thumbnails | 12+ thumbnails | Visual density | P1 |

**Content Requirements:**

| Field | Specification |
|-------|--------------|
| **Thumbnail Count** | 12 minimum (4 per row × 3 rows) |
| **Thumbnail Format** | WebP, various aspect ratios |
| **Thumbnail Alt Text** | "Video thumbnail N" or descriptive |
| **Click Behavior** | Opens video modal |
| **Video Format** | MP4, hosted locally |

**Required Information for Phase 3:**
- 12+ project thumbnail images
- 12+ corresponding video files (MP4)
- Alt text for each thumbnail
- Video modal behavior (same as Organic)

---

## 9. PACKAGES → SERVICES & PRICING

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Section Label** | "Our Packages" | "Services" or "Pricing" | Navigation context | P0 |
| **H2 Heading** | "Packages built for consistent organic growth." | [Growthscape pricing heading] | Pricing positioning | P0 |

### Tier 1 — Standard / Core

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Tag** | "Full content engine" | [Growthscape tier 1 descriptor] | Tier context | P0 |
| **H3 Heading** | "Standard" | [Growthscape tier 1 name] | Tier identification | P0 |
| **Pricing Context** | "Per month" | [Growthscape pricing model] | Pricing clarity | P0 |
| **Feature 1** | "08 - 10 videos" | [Growthscape tier 1 feature] | Feature list | P0 |
| **Feature 2** | "06 - 08 static posts" | [Growthscape tier 1 feature] | Feature list | P0 |
| **Feature 3** | "Monthly consulting" | [Growthscape tier 1 feature] | Feature list | P0 |
| **Feature 4** | "Assigned account manager" | [Growthscape tier 1 feature] | Feature list | P0 |
| **Feature 5** | "Raw footage for stories and repurposing" | [Growthscape tier 1 feature] | Feature list | P0 |
| **CTA Button** | "Book a Call" → #contact | [Growthscape tier 1 CTA] → #contact | Conversion | P0 |
| **Visual Style** | Dark card | [Growthscape tier 1 visual style] | Visual differentiation | P0 |

### Tier 2 — Personal Brand / Premium

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Tag** | "Founder-led growth" | [Growthscape tier 2 descriptor] | Tier context | P0 |
| **H3 Heading** | "Personal Brand" | [Growthscape tier 2 name] | Tier identification | P0 |
| **Pricing Context** | "Per month" | [Growthscape pricing model] | Pricing clarity | P0 |
| **Feature 1** | "06 - 08 videos" | [Growthscape tier 2 feature] | Feature list | P0 |
| **Feature 2** | "04 - 06 static posts" | [Growthscape tier 2 feature] | Feature list | P0 |
| **Feature 3** | "Monthly consulting" | [Growthscape tier 2 feature] | Feature list | P0 |
| **Feature 4** | "LinkedIn management" | [Growthscape tier 2 feature] | Feature list | P0 |
| **Feature 5** | "Strategy-led personal positioning" | [Growthscape tier 2 feature] | Feature list | P0 |
| **CTA Button** | "Book a Call" → #contact | [Growthscape tier 2 CTA] → #contact | Conversion | P0 |
| **Visual Style** | Light card | [Growthscape tier 2 visual style] | Visual differentiation | P0 |

### Package Disclaimer

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Disclaimer** | "All packages include onboarding, content strategy, and full production." | [Growthscape universal inclusion statement] | Clarification | P0 |

**Required Information for Phase 3:**
- 2 pricing tiers (names, descriptors, pricing model)
- 5 features per tier
- CTA text for each tier
- Universal inclusion statement
- Pricing transparency decision (show prices or "contact for quote")

---

## 10. TESTIMONIALS → SOCIAL PROOF

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Section Label** | "Client Energy" | "Testimonials" or "What Clients Say" | Navigation context | P0 |
| **H2 Heading** | "Proof that feels less like praise and more like momentum." | [Growthscape testimonials heading] | Testimonial positioning | P0 |
| **Description** | "The best signal is not a polished compliment. It is what happens when a brand starts sounding sharper, moving faster, and being remembered by the right audience." | [Growthscape testimonials description — 1 sentence] | Context | P0 |

### Testimonial 1

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Category** | "Restaurant Campaign" | [Growthscape project category] | Context | P0 |
| **Quote** | "Organic moved the brand beyond food shots into cultural memory, staff stories, and founder-led moments people actually wanted to watch." | [Growthscape client quote — 1–2 sentences] | Social proof | P0 |
| **Client Name** | "Upali's by Nawaloka" | [Growthscape client name] | Attribution | P0 |
| **Metric** | "153k top reel views" | [Growthscape verified metric] | Quantified proof | P0 |

### Testimonial 2

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Category** | "Branded Series" | [Growthscape project category] | Context | P0 |
| **Quote** | "A simple product became an episodic story. The content gave people a reason to come back, follow the plot, and remember the brand." | [Growthscape client quote — 1–2 sentences] | Social proof | P0 |
| **Client Name** | "Bluefort" | [Growthscape client name] | Attribution | P0 |
| **Metric** | "5 episodes shipped" | [Growthscape verified metric] | Quantified proof | P0 |

### Testimonial 3

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Category** | "Founder-Led Brands" | [Growthscape project category] | Context | P0 |
| **Quote** | "The difference is the system. Strategy, production, editing, and monthly iteration feel connected instead of random posts on a calendar." | [Growthscape client quote — 1–2 sentences] | Social proof | P0 |
| **Client Name** | "Organic Network" | [Growthscape client name] | Attribution | P0 |
| **Metric** | "35+ brands shaped" | [Growthscape verified metric] | Quantified proof | P0 |

**Required Information for Phase 3:**
- 3 testimonials minimum
- Per testimonial: category, quote (1–2 sentences), client name, verified metric
- Real client quotes only (no fabricated testimonials)
- Client logos (optional but recommended)

---

## 11. FAQ

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Section Label** | "FAQ" | "FAQ" | Navigation context | P1 |
| **H2 Heading** | "Questions before the first frame?" | [Growthscape FAQ heading] | FAQ positioning | P1 |

### FAQ Item 1

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Question** | "Do you only work with Sri Lankan brands?" | [Growthscape FAQ question — objection handling] | Objection | P0 |
| **Answer** | "No. Organic is based in Sri Lanka but works with brands across regions. The content system adapts to any market where the audience is active on social media." | [Growthscape FAQ answer — 1–2 sentences] | Resolution | P0 |

### FAQ Item 2

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Question** | "Can you help if we do not know what to post?" | [Growthscape FAQ question] | Objection | P0 |
| **Answer** | "Yes. Strategy is the first step. Organic builds content pillars, calendars, and production plans before a single frame is shot." | [Growthscape FAQ answer] | Resolution | P0 |

### FAQ Item 3

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Question** | "Do we receive raw footage?" | [Growthscape FAQ question] | Objection | P1 |
| **Answer** | "Yes. Every package includes raw footage so brands can repurpose content for stories, ads, and internal use." | [Growthscape FAQ answer] | Resolution | P1 |

### FAQ Item 4

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Question** | "Is this only short-form video?" | [Growthscape FAQ question] | Objection | P1 |
| **Answer** | "Organic specialises in short-form for platforms like Instagram, TikTok, and YouTube Shorts. Long-form and campaign content can be arranged as part of a custom package." | [Growthscape FAQ answer] | Resolution | P1 |

**Required Information for Phase 3:**
- 4 FAQ items minimum
- Per item: question (objection), answer (1–2 sentences, resolution)
- Questions should address: geographic scope, service flexibility, asset ownership, format/platform coverage

---

## 12. CONTACT → GET IN TOUCH

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Section Label** | "Get in Touch" | "Contact" or "Get in Touch" | Navigation context | P0 |
| **H2 Heading** | "Let's build something unforgettable together." | [Growthscape contact heading] | Contact positioning | P0 |
| **Description** | "Tell us about your brand and Organic will shape a content strategy around your goals. Expect a message within 24 hours." | [Growthscape contact description — 1–2 sentences] | Expectation setting | P0 |

### Contact Info

| Field | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Phone 1** | +94 77 736 3074 | [Growthscape phone] | Direct contact | P0 |
| **Phone 2** | +94 71 668 5171 | [Growthscape secondary phone] | Direct contact | P1 |
| **Email** | info@organicslk.com | [Growthscape email] | Email contact | P0 |
| **Address** | 497 Negombo-Colombo Main Rd, Peliyagoda 11300 | [Growthscape address] | Physical location | P1 |

### Contact Form

| Field | Organic (Current) | Growthscape (Required) | Type | Priority |
|-------|-------------------|----------------------|------|----------|
| **Field 1** | Your Name | [Label] | Text input | P0 |
| **Field 2** | Brand / Company Name | [Label] | Text input | P0 |
| **Field 3** | Email Address | [Label] | Email input | P0 |
| **Field 4** | Phone Number | [Label] | Tel input | P1 |
| **Field 5** | Which package interests you? | [Label] | Select dropdown | P0 |
| **Field 6** | What are you looking to achieve? | [Label] | Textarea | P0 |
| **Submit Button** | "Send Message" | [Growthscape submit text] | Button | P0 |

### Select Dropdown Options

| Option | Organic (Current) | Growthscape (Required) | Priority |
|--------|-------------------|----------------------|----------|
| Default | "Select a package" (disabled) | [Growthscape default option] | P0 |
| Option 1 | "Standard" | [Growthscape tier 1 name] | P0 |
| Option 2 | "Personal Brand" | [Growthscape tier 2 name] | P0 |
| Option 3 | "Custom" | "Custom" or [Growthscape option] | P0 |
| Option 4 | "Not sure yet" | "Not sure yet" | P0 |

### Textarea Placeholder

| Element | Organic (Current) | Growthscape (Required) | Priority |
|---------|-------------------|----------------------|----------|
| **Placeholder** | "Grow our Instagram following, launch a new product, build brand awareness..." | [Growthscape placeholder text — example goals] | P0 |

**Required Information for Phase 3:**
- Growthscape phone number(s)
- Growthscape email
- Growthscape address
- Form field labels (may stay the same)
- Select dropdown options (mapped to Growthscape tiers)
- Textarea placeholder text
- Submit button text
- Response time promise (e.g., "Expect a message within 24 hours")

---

## 13. FINAL CTA

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Section Label** | "Final move" | [Growthscape final CTA label] | Urgency framing | P1 |
| **H2 Heading** | "Ready to make your brand impossible to ignore?" | [Growthscape final CTA heading] | Conversion push | P0 |
| **Pill Badge 1** | "15 min strategy call" | [Growthscape CTA benefit 1] | Value reinforcement | P0 |
| **Pill Badge 2** | "Brand direction" | [Growthscape CTA benefit 2] | Value reinforcement | P0 |
| **Pill Badge 3** | "Content system map" | [Growthscape CTA benefit 3] | Value reinforcement | P0 |
| **CTA Button** | "Book a Call with Amantha" → #contact (with founder photo) | [Growthscape CTA text] → #contact (with founder/team photo) | Final conversion | P0 |
| **Closing Line** | "Be quick. A sharper content month starts with one focused conversation." | [Growthscape urgency closing — 1 sentence] | Urgency | P1 |

**Required Information for Phase 3:**
- Final CTA label
- Final CTA heading
- 3 benefit pills (2–4 words each)
- CTA button text
- Founder/team photo for button
- Urgency closing line

---

## 14. FOOTER

### Brand Column

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Logo** | ORGANIC (SVG) | Growthscape logo | Brand identity | P0 |
| **Tagline** | "Sri Lanka's first organic content marketing agency. Founder-led content systems, cinematic production, and brand stories people remember." | [Growthscape tagline — 1–2 sentences] | Brand summary | P0 |
| **Social 1** | Instagram → instagram.com | [Growthscape Instagram URL] | Social proof | P0 |
| **Social 2** | LinkedIn → linkedin.com | [Growthscape LinkedIn URL] | Professional network | P0 |

### Contact Column

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Address** | 497 Negombo-Colombo Main Rd, Peliyagoda 11300 | [Growthscape address] | Location | P1 |
| **Phone 1** | +94 77 736 3074 | [Growthscape phone] | Contact | P0 |
| **Phone 2** | +94 71 668 5171 | [Growthscape secondary phone] | Contact | P1 |
| **Email** | info@organicslk.com | [Growthscape email] | Contact | P0 |

### Company Navigation

| Link | Organic (Current) | Growthscape (Required) | Destination | Priority |
|------|-------------------|----------------------|-------------|----------|
| Link 1 | Who We Are | About | #about | P0 |
| Link 2 | Our Work | Work | #work | P0 |
| Link 3 | How We Work | Services | #services | P0 |
| Link 4 | Packages | Pricing | #pricing | P0 |

### Resources Navigation

| Link | Organic (Current) | Growthscape (Required) | Destination | Priority |
|------|-------------------|----------------------|-------------|----------|
| Link 1 | Case Studies | Work | #work | P0 |
| Link 2 | Gallery | Gallery | #gallery | P1 |
| Link 3 | FAQ | FAQ | #faq | P1 |
| Link 4 | Contact | Contact | #contact | P0 |

### Bottom Bar

| Element | Organic (Current) | Growthscape (Required) | Purpose | Priority |
|---------|-------------------|----------------------|---------|----------|
| **Left** | "Made in Sri Lanka" | [Growthscape origin/location] | Origin pride | P2 |
| **Center** | "Copyright © 2026 Organic." | "Copyright © 2026 Growthscape." | Legal | P0 |
| **Right** | "A Solution By Opti5 Labs" → opti5labs.com | [Growthscape parent/agency credit] → [URL] | Attribution | P1 |

**Required Information for Phase 3:**
- Growthscape logo (footer format)
- Growthscape tagline
- Growthscape social URLs (Instagram, LinkedIn, + others)
- Growthscape address
- Growthscape phone/email
- Growthscape origin statement
- Growthscape parent/agency credit (if applicable)

---

## 15. GLOBAL ASSETS

### Images Required

| Asset | Organic (Current) | Growthscape (Required) | Format | Priority |
|-------|-------------------|----------------------|--------|----------|
| **Logo** | "ORGANIC" SVG text | Growthscape logo | SVG (preferred) or PNG transparent | P0 |
| **Favicon** | Organic favicon | Growthscape favicon | .ico + .png (32×32, 16×16) | P0 |
| **OG Image** | Organic OG image | Growthscape OG image | PNG/JPG 1200×630 | P1 |
| **Hero Image/Video** | Hero video still | Growthscape hero visual | Image (min 1600×844) or Video (mp4) | P0 |
| **Founder Photo** | Amantha Perera portrait | Growthscape founder/team photo | PNG/JPG min 400×400 | P0 |
| **Client Logos** | 36 brand logos | Growthscape client logos | WebP/PNG 512×512 | P0 |
| **Gallery Thumbnails** | 12 video thumbnails | Growthscape project thumbnails | WebP, various sizes | P1 |
| **Gallery Videos** | 12 videos | Growthscape project videos | MP4 | P1 |

### Videos Required

| Asset | Organic (Current) | Growthscape (Required) | Format | Priority |
|-------|-------------------|----------------------|--------|----------|
| **Case Study 1 Video** | upalis-reel-fixed.mp4 | [Growthscape project 1 video] | MP4 | P0 |
| **Case Study 2 Video** | sarigamaCS-casestudy.mp4 | [Growthscape project 2 video] | MP4 | P0 |
| **Gallery Videos ×12** | 12 production videos | [Growthscape portfolio videos ×12] | MP4 | P1 |

---

## 16. CONTENT REQUIREMENTS SUMMARY

### P0 — Must Have Before Launch

| Category | Items Required | Count |
|----------|---------------|-------|
| **Page Metadata** | Title, description, favicon, canonical URL | 4 |
| **Logo** | Primary logo (SVG), favicon | 2 |
| **Navigation** | 6 nav links + 1 CTA | 7 |
| **Hero** | Headline (2 parts), subheading, 2 CTAs, hero visual | 5 |
| **About** | Positioning statement, mission, founder bio, 2 differentiators | 4 |
| **Portfolio** | 2 case studies (client, headline, description, 4 tags, 4 stats, video each) | 2 projects |
| **Process** | 4 steps (name, description, 4 sub-tasks each) | 4 steps |
| **Pricing** | 2 tiers (name, descriptor, 5 features each, CTA) | 2 tiers |
| **Testimonials** | 3 testimonials (category, quote, client, metric) | 3 |
| **FAQ** | 4 Q&A pairs | 4 |
| **Contact** | Phone, email, address, form fields | 6 fields |
| **Final CTA** | Heading, 3 benefits, CTA text, closing line | 4 |
| **Footer** | Logo, tagline, socials, contact info, nav, legal | 8 |
| **Client Logos** | Minimum 12 brand logos | 12+ |

### P1 — Should Have Before Launch

| Category | Items Required | Count |
|----------|---------------|-------|
| **OG Image** | Social sharing image | 1 |
| **Gallery** | 12 thumbnails + 12 videos | 24 assets |
| **Case Study External Links** | Live project URLs | 2 |
| **Additional Testimonials** | Beyond minimum 3 | Optional |

### P2 — Nice to Have

| Category | Items Required | Count |
|----------|---------------|-------|
| **Newsletter Signup** | Email capture in footer | 1 |
| **Additional Case Studies** | Beyond minimum 2 | Optional |
| **Blog/Resources** | Content marketing section | Optional |

---

## MAPPING VERIFICATION CHECKLIST

Before Phase 3 begins, confirm:

- [ ] Growthscape brand name finalized
- [ ] Growthscape domain name finalized
- [ ] Growthscape logo asset available (SVG)
- [ ] Growthscape favicon available
- [ ] Growthscape OG image available
- [ ] Growthscape hero visual available (image or video)
- [ ] Growthscape founder/team photo available
- [ ] Growthscape client logos available (12+)
- [ ] Growthscape case study content available (2+ projects with verified metrics)
- [ ] Growthscape testimonials available (3+ real client quotes)
- [ ] Growthscape FAQ content available (4+ items)
- [ ] Growthscape contact info finalized (phone, email, address)
- [ ] Growthscape social URLs finalized (Instagram, LinkedIn)
- [ ] Growthscape pricing tiers finalized (names, features)
- [ ] Growthscape process steps finalized (4 steps with sub-tasks)
- [ ] Growthscape gallery assets available (12+ thumbnails + videos)
- [ ] All metrics verified and factual (no fabricated numbers)
- [ ] All testimonials are real client quotes
- [ ] Content approved by Growthscape stakeholders

---

*End of Growthscape Content Mapping — Phase 2*
