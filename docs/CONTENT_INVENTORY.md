# Content Inventory Report — Organic (organicslk.com)

> **Date:** 2026-07-26
> **Source:** http://localhost:3002/ (clone of https://www.organicslk.com/)
> **Purpose:** Complete content extraction for Growthscape content replacement
> **Note:** Single-page website (all content on Home)

---

## PAGE METADATA

| Field | Value |
|-------|-------|
| **Page Title** | Organic - Sri Lanka's First Organic Content Marketing Agency |
| **Meta Description** | Purpose-driven video content that humanises brands and builds genuine organic audiences. |
| **Favicon** | `/seo/favicon.png` |
| **OG Image** | `/seo/og-image.png` |
| **Canonical URL** | https://www.organicslk.com/ |

---

## CONTENT MAP (Hierarchical Outline)

```
Home (Single Page)
├── Navigation (Fixed/Floating)
│   ├── Logo Link
│   ├── Desktop Nav Links
│   ├── Mobile Nav Menu
│   └── CTA Button
├── Hero Section
│   ├── Eyebrow Label
│   ├── H1 Headline
│   ├── H1 Part 2
│   ├── Subheading
│   ├── Primary CTA Button
│   └── Secondary CTA Link
├── Logo Marquee (Brand Trust Strip)
│   ├── Section Label
│   └── Brand Logos × 36
├── Who We Are Section
│   ├── Section Label
│   ├── H2 Heading
│   ├── Description
│   └── Glass Cards × 3
│       ├── Card 1: Founder & Creative Director
│       ├── Card 2: Organic Attention
│       └── Card 3: Operating Belief
├── Case Studies Section
│   ├── Section Label
│   ├── H2 Heading
│   └── Case Study Cards × 2
│       ├── Scene 01: Upali's by Nawaloka
│       │   ├── Client & Location
│       │   ├── H3 Heading
│       │   ├── Description
│       │   ├── Tag Pills × 4
│       │   └── Impact Stats × 4
│       └── Scene 02: Sarigama
│           ├── Client
│           ├── H3 Heading
│           ├── Description
│           ├── Tag Pills × 4
│           └── Impact Stats × 4
├── Process Steps Section
│   ├── Section Label
│   ├── H2 Heading
│   ├── Description
│   └── Process Steps × 4
│       ├── Step 01: Strategy & Planning
│       ├── Step 02: Production Planning
│       ├── Step 03: Production Execution
│       └── Step 04: Post-Production & Delivery
├── Gallery Section
│   ├── Section Label
│   ├── H2 Heading
│   ├── Description
│   └── Video Thumbnails × 12 (3 marquee rows)
├── Packages Section
│   ├── Section Label
│   ├── H2 Heading
│   └── Package Cards × 2
│       ├── Standard Package
│       └── Personal Brand Package
├── Testimonials Section
│   ├── Section Label
│   ├── H2 Heading
│   ├── Description
│   └── Testimonial Cards × 3
│       ├── Restaurant Campaign
│       ├── Branded Series
│       └── Founder-Led Brands
├── Second Logo Marquee
│   └── Brand Logos × 36 (same as first)
├── FAQ Section
│   ├── Section Label
│   ├── H2 Heading
│   └── FAQ Items × 4
├── Contact Section
│   ├── Section Label
│   ├── H2 Heading
│   ├── Description
│   ├── Contact Info
│   └── Contact Form
├── Final CTA Section
│   ├── Section Label
│   ├── H2 Heading
│   ├── Pill Badges × 3
│   ├── CTA Button
│   └── Closing Line
└── Footer
    ├── Brand Column
    │   ├── Logo
    │   ├── Tagline
    │   └── Social Links
    ├── Contact Column
    │   ├── Address
    │   ├── Phone
    │   └── Email
    ├── Company Nav
    └── Resources Nav
```

---

## SECTION-BY-SECTION CONTENT EXTRACTION

---

### 1. NAVIGATION

**Position:** Fixed top, floats on scroll with glass-morphism effect
**Visual importance:** High — primary wayfinding

#### Desktop Navigation

| Element | Text | Destination | Style |
|---------|------|-------------|-------|
| Logo | (SVG: "ORGANIC") | #hero | — |
| Nav Link | Who We Are | #who | Text |
| Nav Link | Our Work | #work | Text |
| Nav Link | How We Work | #process | Text |
| Nav Link | Packages | #packages | Text |
| Nav Link | FAQ | #faq | Text |
| Nav Link | Contact | #contact | Text |
| CTA Button | Book a Strategy Call | #contact | Primary 3D Button |

#### Mobile Navigation
- Hamburger menu with "Open menu" aria-label
- Same nav links as desktop, displayed in overlay
- CTA button at bottom of mobile nav

---

### 2. HERO SECTION

**Position:** Full viewport, top of page
**Visual importance:** Maximum — first impression
**Purpose:** Establish brand identity and drive immediate action

#### Content

| Element | Text |
|---------|------|
| **Eyebrow Label** | *(none — no section label)* |
| **H1 (Part 1)** | Meet the brand |
| **H1 (Part 2)** | people remember. |
| **Subheading** | Strategy, production, and monthly storytelling for brands that need attention to turn into trust. |
| **Primary CTA** | Book a Strategy Call → #contact (3D Button) |
| **Secondary CTA** | Watch the Work → #work (Ghost Link) |
| **Background** | Hero video still image (`/images/hero-video-still.webp`) |

**Business Purpose:** First impression. Converts visitors by presenting the core value proposition — turning brand attention into trust through content production.

**Growthscape Equivalent:** Hero section with primary value proposition, social proof, and dual CTAs.

---

### 3. LOGO MARQUEE (Brand Trust Strip)

**Position:** Below hero, full-width scrolling animation
**Visual importance:** Medium — social proof via brand association
**Purpose:** Build credibility through brand portfolio display

#### Section Label
`Brands that trust Organic`

#### Brand Logos (36 unique brands)

| # | Brand Name | Has Hover Variant |
|---|-----------|-------------------|
| 1 | Mezo | No |
| 2 | Bluefort | No |
| 3 | Thambili Island | No |
| 4 | Culture by Ari | No |
| 5 | Kannadi | No |
| 6 | Comfort World | No |
| 7 | Land Rover | No |
| 8 | Sarigama | No |
| 9 | Glow | No |
| 10 | Tathya | No |
| 11 | Upali's | No |
| 12 | Liv | **Yes** (dual image) |
| 13 | Satya Collection | No |
| 14 | Lactoboost | No |
| 15 | Playdium | No |
| 16 | Rush | No |
| 17 | John Keells Group | No |
| 18 | Hamilton Sciences | No |
| 19 | TEJA | No |
| 20 | talentstudio | No |
| 21 | Supreme | No |
| 22 | Divide | No |
| 23 | The Commons | No |
| 24 | Hybrid House | No |
| 25 | Luxonix | No |
| 26 | Momo | No |
| 27 | MOB | No |
| 28 | Punchi's | No |
| 29 | Hydrion | No |
| 30 | Nomad | No |
| 31 | Orbit 88 | **Yes** (dual image) |
| 32 | Rough | No |
| 33 | KFL | No |
| 34 | Emperors Den | **Yes** (dual image) |
| 35 | Foster & Reed | No |
| 36 | VibeX | No |

**Visual Behavior:** Infinite horizontal scroll (marquee animation). Logos are grayscale by default, full color on hover. Three brands (Liv, Orbit 88, Emperors Den) have dual-image hover swap.

**Business Purpose:** Establish credibility by association. Show breadth of client base.

**Growthscape Equivalent:** Client logo carousel / trust bar.

---

### 4. WHO WE ARE SECTION

**Position:** Below logo marquee
**Visual importance:** High — brand story and positioning
**Purpose:** Establish brand identity, founder credibility, and operating philosophy

#### Content

| Element | Text |
|---------|------|
| **Section Label** | Who Are We? |
| **H2 Heading** | Purpose Led Content. Human First Brands. |
| **Description** | Organic specialises in personifying brands and humanising them. Every video is created with a clear strategic objective, not a borrowed trend or generic content pattern. |

#### Card 1 — Founder & Creative Director

| Element | Text |
|---------|------|
| **Label** | Founder & Creative Director |
| **H3 Heading** | Amantha Perera |
| **Description** | Led by Amantha and his team, Organic builds content systems that turn brands into recognisable personalities people remember. |

#### Card 2 — Organic Attention

| Element | Text |
|---------|------|
| **Label** | Organic Attention |
| **H3 Heading** | No Paid Media |
| **Description** | Every view earned. No boosts, no budgets, no shortcuts. Just organic content people stopped scrolling for and kept coming back to watch. |

#### Card 3 — Operating Belief

| Element | Text |
|---------|------|
| **Label** | Operating Belief |
| **H3 Heading** | Audience before algorithm |
| **Description** | Views matter, but memorability matters more. The work is planned around business goals, brand voice, and cultural relevance. |

**Visual Style:** Glass-morphism cards with gradient overlay, 30px border-radius, subtle border and box-shadow. IntersectionObserver fade-in animation.

**Business Purpose:** Position the agency as founder-led, organic-first, and strategy-driven. Build trust through transparency.

**Growthscape Equivalent:** About / Mission section with founder profile and core values.

---

### 5. CASE STUDIES SECTION

**Position:** Below Who We Are
**Visual importance:** Very High — primary proof of capability
**Purpose:** Demonstrate results through specific client stories

#### Section Header

| Element | Text |
|---------|------|
| **Section Label** | Our Work |
| **H2 Heading** | Case studies built like scenes, not slides. |

#### Case Study 1 — Upali's by Nawaloka

| Element | Text |
|---------|------|
| **Scene Number** | Scene 01 |
| **CTA Link** | View on Instagram → `https://www.instagram.com/p/DVOGmYijUH9/` |
| **Badge** | Organic proof |
| **Client** | Upali's by Nawaloka |
| **Location** | Melbourne & Colombo |
| **H3 Heading** | From a restaurant feed to a cultural memory lane. |
| **Description** | Organic moved the brand beyond food shots by introducing Sinhala retro cues, old songs, staff stories, founder-led moments, and Sri Lankan cultural nostalgia. |
| **Tag Pill 1** | Personified the brand |
| **Tag Pill 2** | Moved beyond showcasing food |
| **Tag Pill 3** | Introduced a Sinhala retro theme |
| **Tag Pill 4** | Featured staff and founder |

**Impact Stats:**

| Stat | Value | Label |
|------|-------|-------|
| 1 | 7,000 | started at |
| 2 | 12,800+ | current followers |
| 3 | 04months | timeline |
| 4 | 153k | top reel views |

**Video:** `/videos/gallery/upalis-reel-fixed.mp4`

#### Case Study 2 — Sarigama

| Element | Text |
|---------|------|
| **Scene Number** | Scene 02 |
| **CTA Link** | View on Instagram → `https://www.instagram.com/reels/DIykt0DtWUG/` |
| **Badge** | Organic proof |
| **Client** | Sarigama |
| **Location** | *(not specified)* |
| **H3 Heading** | Sri Lanka's premier live music concert series in Colombo |
| **Description** | A fully sold-out live concert campaign built from zero — no prior band awareness, no paid advertising. All awareness and ticket sales were driven entirely through organic Instagram content created by our team. |
| **Tag Pill 1** | 100% organic growth |
| **Tag Pill 2** | Zero awareness to fully sold-out concerts |
| **Tag Pill 3** | World-class production |
| **Tag Pill 4** | Retention-first video structure |

**Impact Stats:**

| Stat | Value | Label |
|------|-------|-------|
| 1 | 100% | tickets sold |
| 2 | 3,500 | people attended |
| 3 | 264K | top reel views |
| 4 | 800K+ | total organic views |

**Video:** `/videos/gallery/sarigamaCS-casestudy.mp4`

#### Carousel Controls

| Button | Aria Label |
|--------|------------|
| ← Previous | Previous videos |
| → Next | Next videos |

**Business Purpose:** Primary conversion driver. Proves capability with hard metrics. Uses "scene" metaphor to reinforce storytelling brand.

**Growthscape Equivalent:** Portfolio / Case Studies section with metrics and client testimonials.

---

### 6. PROCESS STEPS SECTION

**Position:** Below Case Studies
**Visual importance:** Medium-High — explains how the service works
**Purpose:** Demystify the service delivery process and build confidence

#### Section Header

| Element | Text |
|---------|------|
| **Section Label** | How We Work |
| **H2 Heading** | A repeatable system built for results every month. |
| **Description** | Strategy, production, delivery, and iteration are treated as one loop. The story keeps moving because the system keeps moving. |

#### Step 01 — Strategy & Planning

| Element | Text |
|---------|------|
| **Step Number** | 01 |
| **H3 Heading** | Strategy & Planning |
| **Description** | We get under the skin of the brand first: audience, voice, offer, and the business outcome every video has to serve. |
| **Tag Pill 1** | Discovery Call |
| **Tag Pill 2** | Brand Audit |
| **Tag Pill 3** | Content Pillars |
| **Tag Pill 4** | Content Calendar |

#### Step 02 — Production Planning

| Element | Text |
|---------|------|
| **Step Number** | 02 |
| **H3 Heading** | Production Planning |
| **Description** | Scripts, locations, talent, and approvals are prepared before shoot day so the work feels sharp, not improvised. |
| **Tag Pill 1** | Script Writing |
| **Tag Pill 2** | Influencer Coordination |
| **Tag Pill 3** | Client Feedback |
| **Tag Pill 4** | Shoot Planning |

#### Step 03 — Production Execution

| Element | Text |
|---------|------|
| **Step Number** | 03 |
| **H3 Heading** | Production Execution |
| **Description** | The team directs and captures every frame with Sony A7 IV cameras so the brand feels cinematic without losing its human pulse. |
| **Tag Pill 1** | Shoot Execution |
| **Tag Pill 2** | Sony A7 IV Production |
| **Tag Pill 3** | Direction |
| **Tag Pill 4** | Premium Capture |

#### Step 04 — Post-Production & Delivery

| Element | Text |
|---------|------|
| **Step Number** | 04 |
| **H3 Heading** | Post-Production & Delivery |
| **Description** | Footage is edited, refined, delivered, and then fed back into the next month of consistent organic growth. |
| **Tag Pill 1** | Share Raw Footage |
| **Tag Pill 2** | Edit |
| **Tag Pill 3** | Final Delivery |
| **Tag Pill 4** | Repeat Monthly |

**Business Purpose:** Reduce purchase anxiety by showing a clear, repeatable process. Emphasizes professionalism (Sony cameras) and systematic approach.

**Growthscape Equivalent:** Process / How It Works section.

---

### 7. GALLERY SECTION

**Position:** Below Process Steps
**Visual importance:** Medium — visual portfolio showcase
**Purpose:** Show breadth of work through video thumbnails

#### Content

| Element | Text |
|---------|------|
| **Section Label** | Gallery |
| **H2 Heading** | Creators, campaigns, and frames with Organic flare. |
| **Description** | A moving wall of founder films, campaign systems, production moments, and brand stories built to feel alive before you even click. |

#### Gallery Videos (12 thumbnails, 3 marquee rows)

| Row | Thumbnails | Direction |
|-----|-----------|-----------|
| Row 1 | thumbnail1–4 (duplicated for seamless loop) | Left to right |
| Row 2 | thumbnail5–8 (duplicated) | Right to left |
| Row 3 | thumbnail9–12 (duplicated) | Left to right (slower) |

**Visual Behavior:** Three rows of video thumbnails in infinite marquee animation. Each row scrolls in alternating directions. Clicking opens a video modal.

**Business Purpose:** Visual portfolio without text overload. Reinforces production quality through imagery.

**Growthscape Equivalent:** Visual portfolio gallery.

---

### 8. PACKAGES SECTION

**Position:** Below Gallery
**Visual importance:** High — pricing and service tiers
**Purpose:** Present service offerings and drive conversion

#### Section Header

| Element | Text |
|---------|------|
| **Section Label** | Our Packages |
| **H2 Heading** | Packages built for consistent organic growth. |

#### Package 1 — Standard

| Element | Text |
|---------|------|
| **Tag** | Full content engine |
| **H3 Heading** | Standard |
| **Pricing Context** | Per month |
| **Feature 1** | 08 - 10 videos |
| **Feature 2** | 06 - 08 static posts |
| **Feature 3** | Monthly consulting |
| **Feature 4** | Assigned account manager |
| **Feature 5** | Raw footage for stories and repurposing |
| **CTA Button** | Book a Call → #contact |

#### Package 2 — Personal Brand

| Element | Text |
|---------|------|
| **Tag** | Founder-led growth |
| **H3 Heading** | Personal Brand |
| **Pricing Context** | Per month |
| **Feature 1** | 06 - 08 videos |
| **Feature 2** | 04 - 06 static posts |
| **Feature 3** | Monthly consulting |
| **Feature 4** | LinkedIn management |
| **Feature 5** | Strategy-led personal positioning |
| **CTA Button** | Book a Call → #contact |

#### Package Disclaimer

| Element | Text |
|---------|------|
| **Disclaimer** | All packages include onboarding, content strategy, and full production. |

**Visual Style:** Two cards side by side. Standard is dark theme, Personal Brand is light theme.

**Business Purpose:** Convert visitors by presenting clear service tiers. No specific pricing shown — drives toward consultation.

**Growthscape Equivalent:** Pricing / Plans section.

---

### 9. TESTIMONIALS SECTION

**Position:** Below Packages
**Visual importance:** Medium-High — social proof through client quotes
**Purpose:** Reinforce credibility with specific client feedback

#### Section Header

| Element | Text |
|---------|------|
| **Section Label** | Client Energy |
| **H2 Heading** | Proof that feels less like praise and more like momentum. |
| **Description** | The best signal is not a polished compliment. It is what happens when a brand starts sounding sharper, moving faster, and being remembered by the right audience. |

#### Testimonial 1 — Restaurant Campaign

| Element | Text |
|---------|------|
| **Category** | Restaurant Campaign |
| **Quote** | "Organic moved the brand beyond food shots into cultural memory, staff stories, and founder-led moments people actually wanted to watch." |
| **Client** | Upali's by Nawaloka |
| **Metric** | 153k top reel views |

#### Testimonial 2 — Branded Series

| Element | Text |
|---------|------|
| **Category** | Branded Series |
| **Quote** | "A simple product became an episodic story. The content gave people a reason to come back, follow the plot, and remember the brand." |
| **Client** | Bluefort |
| **Metric** | 5 episodes shipped |

#### Testimonial 3 — Founder-Led Brands

| Element | Text |
|---------|------|
| **Category** | Founder-Led Brands |
| **Quote** | "The difference is the system. Strategy, production, editing, and monthly iteration feel connected instead of random posts on a calendar." |
| **Client** | Organic Network |
| **Metric** | 35+ brands shaped |

#### Carousel Indicators

| Button | Aria Label |
|--------|------------|
| Dot 1 | Go to testimonial 1 |
| Dot 2 | Go to testimonial 2 |
| Dot 3 | Go to testimonial 3 |

**Business Purpose:** Third-party validation. Quotes are structured as case-study summaries, not generic praise.

**Growthscape Equivalent:** Testimonials / Social Proof section.

---

### 10. SECOND LOGO MARQUEE

**Position:** Below Testimonials
**Visual importance:** Low — reinforces brand trust
**Purpose:** Second touchpoint for social proof

**Content:** Identical to Section 3 (36 brand logos in infinite marquee).

---

### 11. FAQ SECTION

**Position:** Below second logo marquee
**Visual importance:** Medium — objection handling
**Purpose:** Address common objections and reduce friction

#### Section Header

| Element | Text |
|---------|------|
| **Section Label** | FAQ |
| **H2 Heading** | Questions before the first frame? |

#### FAQ Item 1

| Element | Text |
|---------|------|
| **Question** | Do you only work with Sri Lankan brands? |
| **Answer** | No. Organic is based in Sri Lanka but works with brands across regions. The content system adapts to any market where the audience is active on social media. |

#### FAQ Item 2

| Element | Text |
|---------|------|
| **Question** | Can you help if we do not know what to post? |
| **Answer** | Yes. Strategy is the first step. Organic builds content pillars, calendars, and production plans before a single frame is shot. |

#### FAQ Item 3

| Element | Text |
|---------|------|
| **Question** | Do we receive raw footage? |
| **Answer** | Yes. Every package includes raw footage so brands can repurpose content for stories, ads, and internal use. |

#### FAQ Item 4

| Element | Text |
|---------|------|
| **Question** | Is this only short-form video? |
| **Answer** | Organic specialises in short-form for platforms like Instagram, TikTok, and YouTube Shorts. Long-form and campaign content can be arranged as part of a custom package. |

**Visual Behavior:** Accordion/collapsible. Click to expand answer. Plus/Minus icon toggle.

**Business Purpose:** Remove objections. Address geographic scope, content planning, asset ownership, and format flexibility.

**Growthscape Equivalent:** FAQ section.

---

### 12. CONTACT SECTION

**Position:** Below FAQ
**Visual importance:** Very High — primary conversion point
**Purpose:** Capture leads and enable direct communication

#### Section Header

| Element | Text |
|---------|------|
| **Section Label** | Get in Touch |
| **H2 Heading** | Let's build something unforgettable together. |
| **Description** | Tell us about your brand and Organic will shape a content strategy around your goals. Expect a message within 24 hours. |

#### Contact Info

| Type | Value | Link |
|------|-------|------|
| Phone 1 | +94 77 736 3074 | tel:+94777363074 |
| Phone 2 | +94 71 668 5171 | tel:+94716685171 |
| Email | info@organicslk.com | mailto:info@organicslk.com |
| Address | 497 Negombo-Colombo Main Rd, Peliyagoda 11300 | — |

#### Contact Form

| Field | Type | Name | Placeholder / Label |
|-------|------|------|---------------------|
| Name | Text | name | Your Name |
| Brand / Company | Text | brand | Brand / Company Name |
| Email | Email | email | Email Address |
| Phone | Tel | phone | Phone Number |
| Package Interest | Select | package | Which package interests you? |
| Goals | Textarea | goals | What are you looking to achieve? |

**Select Options:**

| Option | Value |
|--------|-------|
| Select a package | *(disabled, default)* |
| Standard | Standard |
| Personal Brand | Personal Brand |
| Custom | Custom |
| Not sure yet | Not sure yet |

**Submit Button:** Send Message

**Textarea Placeholder:** "Grow our Instagram following, launch a new product, build brand awareness..."

**Business Purpose:** Primary lead capture. Combines contact info with structured form for efficient follow-up.

**Growthscape Equivalent:** Contact / Lead Capture form.

---

### 13. FINAL CTA SECTION

**Position:** Below Contact, above footer
**Visual importance:** High — last conversion opportunity
**Purpose:** Create urgency and drive final action

#### Content

| Element | Text |
|---------|------|
| **Section Label** | Final move |
| **H2 Heading** | Ready to make your brand impossible to ignore? |
| **Pill Badge 1** | 15 min strategy call |
| **Pill Badge 2** | Brand direction |
| **Pill Badge 3** | Content system map |
| **CTA Button** | Book a Call with Amantha → #contact (includes founder photo) |
| **Closing Line** | Be quick. A sharper content month starts with one focused conversation. |

**Visual Style:** Centered card with gradient background. CTA button includes a small circular photo of Amantha Perera (founder).

**Business Purpose:** Urgency-driven final conversion. Personalizes with founder image. Sets expectation for the call (15 min, focused).

**Growthscape Equivalent:** Final CTA / Urgency section.

---

### 14. FOOTER

**Position:** Bottom of page
**Visual importance:** Medium — navigation and contact info
**Purpose:** Provide navigation, contact details, and legal information

#### Brand Column

| Element | Text |
|---------|------|
| **Logo** | ORGANIC (SVG) |
| **Tagline** | Sri Lanka's first organic content marketing agency. Founder-led content systems, cinematic production, and brand stories people remember. |
| **Social 1** | Instagram → `https://instagram.com` |
| **Social 2** | LinkedIn → `https://linkedin.com` |

#### Contact Column

| Type | Value |
|------|-------|
| **Address** | 497 Negombo-Colombo Main Rd, Peliyagoda 11300 |
| **Phone 1** | +94 77 736 3074 |
| **Phone 2** | +94 71 668 5171 |
| **Email** | info@organicslk.com |

#### Company Navigation

| Link | Destination |
|------|-------------|
| Who We Are | #who |
| Our Work | #work |
| How We Work | #process |
| Packages | #packages |

#### Resources Navigation

| Link | Destination |
|------|-------------|
| Case Studies | #work |
| Gallery | #gallery |
| FAQ | #faq |
| Contact | #contact |

#### Bottom Bar

| Element | Text |
|---------|------|
| **Left** | Made in Sri Lanka |
| **Center** | Copyright © 2026 Organic. |
| **Right** | A Solution By Opti5 Labs → `https://opti5labs.com` |

---

## COMPLETE BUTTON INVENTORY

| Button Text | Aria Label | Destination | Style | Location |
|-------------|------------|-------------|-------|----------|
| *(hamburger)* | Open menu | — | Ghost/Icon | Nav (mobile) |
| Book a Strategy Call | — | #contact | Primary 3D | Nav, Hero |
| Watch the Work | — | #work | Ghost/Text Link | Hero |
| *(prev arrow)* | Previous videos | — | Ghost/Icon | Case Studies |
| *(next arrow)* | Next videos | — | Ghost/Icon | Case Studies |
| Play video 1–12 | Play video N | — | Overlay | Gallery |
| Book a Call | — | #contact | Primary 3D | Packages (×2) |
| *(testimonial 1)* | — | — | Card/Button | Testimonials |
| *(testimonial 2)* | — | — | Card/Button | Testimonials |
| *(testimonial 3)* | — | — | Card/Button | Testimonials |
| *(dot 1)* | Go to testimonial 1 | — | Indicator | Testimonials |
| *(dot 2)* | Go to testimonial 2 | — | Indicator | Testimonials |
| *(dot 3)* | Go to testimonial 3 | — | Indicator | Testimonials |
| Send Message | — | *(form submit)* | Primary | Contact Form |
| Book a Call with Amantha | — | #contact | Primary 3D | Final CTA |

---

## COMPLETE LINK INVENTORY

| Link Text | Destination | Context |
|-----------|-------------|---------|
| Logo (ORGANIC) | #hero | Nav |
| Who We Are | #who | Nav, Footer |
| Our Work | #work | Nav, Footer |
| How We Work | #process | Nav, Footer |
| Packages | #packages | Nav, Footer |
| FAQ | #faq | Nav, Footer |
| Contact | #contact | Nav, Footer |
| Case Studies | #work | Footer |
| Gallery | #gallery | Footer |
| Book a Strategy Call | #contact | Nav CTA |
| Watch the Work | #work | Hero secondary CTA |
| View on Instagram | instagram.com/p/DVOGmYijUH9/ | Case Study 1 |
| View on Instagram | instagram.com/reels/DIykt0DtWUG/ | Case Study 2 |
| +94 77 736 3074 | tel:+94777363074 | Contact, Footer |
| +94 71 668 5171 | tel:+94716685171 | Contact, Footer |
| info@organicslk.com | mailto:info@organicslk.com | Contact, Footer |
| Instagram | instagram.com/ | Footer social |
| LinkedIn | linkedin.com/ | Footer social |
| Opti5 Labs | opti5labs.com/ | Footer credit |

---

## COMPLETE IMAGE INVENTORY

### Unique Images

| Image | Alt Text | Dimensions | Location |
|-------|----------|------------|----------|
| `/images/logo.svg` | OrganicsLK | 848×236 | Nav, Footer |
| `/images/hero-video-still.webp` | *(empty)* | 1600×844 | Hero background |
| `/images/brands/brand1.webp` | Mezo | 512×512 | Marquee |
| `/images/brands/brand2.webp` | Bluefort | 512×512 | Marquee |
| `/images/brands/brand3.webp` | Thambili Island | 512×512 | Marquee |
| `/images/brands/brand4.webp` | Culture by Ari | 512×512 | Marquee |
| `/images/brands/brand5.webp` | Kannadi | 512×512 | Marquee |
| `/images/brands/brand6.webp` | Comfort World | 512×512 | Marquee |
| `/images/brands/brand7.webp` | Land Rover | 512×512 | Marquee |
| `/images/brands/brand8.webp` | Sarigama | 512×512 | Marquee |
| `/images/brands/brand9.webp` | Glow | 512×512 | Marquee |
| `/images/brands/brand10.webp` | Tathya | 512×512 | Marquee |
| `/images/brands/brand11.webp` | Upali's | 512×512 | Marquee |
| `/images/brands/brand12.webp` | Liv | 512×512 | Marquee |
| `/images/brands/brand12-2.webp` | Liv (hover) | 512×512 | Marquee |
| `/images/brands/brand13.webp` | Satya Collection | 512×512 | Marquee |
| `/images/brands/brand14.webp` | Lactoboost | 512×512 | Marquee |
| `/images/brands/brand15.webp` | Playdium | 512×512 | Marquee |
| `/images/brands/brand16.webp` | Rush | 512×512 | Marquee |
| `/images/brands/brand17.webp` | John Keells Group | 512×512 | Marquee |
| `/images/brands/brand18.webp` | Hamilton Sciences | 512×512 | Marquee |
| `/images/brands/brand19.webp` | TEJA | 512×512 | Marquee |
| `/images/brands/brand20.webp` | talentstudio | 512×512 | Marquee |
| `/images/brands/brand21.webp` | Supreme | 512×512 | Marquee |
| `/images/brands/brand22.webp` | Divide | 512×512 | Marquee |
| `/images/brands/brand23.webp` | The Commons | 512×512 | Marquee |
| `/images/brands/brand24.webp` | Hybrid House | 512×512 | Marquee |
| `/images/brands/brand25.webp` | Luxonix | 512×512 | Marquee |
| `/images/brands/brand26.webp` | Momo | 512×512 | Marquee |
| `/images/brands/brand27.webp` | MOB | 512×512 | Marquee |
| `/images/brands/brand28.webp` | Punchi's | 512×512 | Marquee |
| `/images/brands/brand29.webp` | Hydrion | 512×512 | Marquee |
| `/images/brands/brand30.webp` | Nomad | 512×512 | Marquee |
| `/images/brands/brand31.webp` | Orbit 88 | 512×512 | Marquee |
| `/images/brands/brand31-2.webp` | Orbit 88 (hover) | 512×512 | Marquee |
| `/images/brands/brand32.webp` | Rough | 512×512 | Marquee |
| `/images/brands/brand33.webp` | KFL | 512×512 | Marquee |
| `/images/brands/brand34.webp` | Emperors Den | 512×512 | Marquee |
| `/images/brands/brand34-2.webp` | Emperors Den (hover) | 512×512 | Marquee |
| `/images/brands/brand35.webp` | Foster & Reed | 512×512 | Marquee |
| `/images/brands/brand36.webp` | VibeX | 512×512 | Marquee |
| `/images/gallery/thumbnail1.webp` | Video thumbnail 1 | 621×910 | Gallery |
| `/images/gallery/thumbnail2.webp` | Video thumbnail 2 | 867×446 | Gallery |
| `/images/gallery/thumbnail3.webp` | Video thumbnail 3 | 802×599 | Gallery |
| `/images/gallery/thumbnail4.webp` | Video thumbnail 4 | 4032×2268 | Gallery |
| `/images/gallery/thumbnail5.webp` | Video thumbnail 5 | 621×633 | Gallery |
| `/images/gallery/thumbnail6.webp` | Video thumbnail 6 | 620×394 | Gallery |
| `/images/gallery/thumbnail7.webp` | Video thumbnail 7 | 838×624 | Gallery |
| `/images/gallery/thumbnail8.webp` | Video thumbnail 8 | 839×922 | Gallery |
| `/images/gallery/thumbnail9.webp` | Video thumbnail 9 | 786×621 | Gallery |
| `/images/gallery/thumbnail10.webp` | Video thumbnail 10 | 679×464 | Gallery |
| `/images/gallery/thumbnail11.webp` | Video thumbnail 11 | 805×617 | Gallery |
| `/images/gallery/thumbnail12.webp` | Video thumbnail 12 | 826×571 | Gallery |
| `/images/amantha.png` | Amantha — Founder of Organic | 128×219 | Final CTA button |

### Unique Videos

| Video | Location |
|-------|----------|
| `/videos/gallery/upalis-reel-fixed.mp4` | Case Study 1 |
| `/videos/gallery/sarigamaCS-casestudy.mp4` | Case Study 2 |
| Gallery videos (12) | Gallery section (referenced by thumbnail) |

---

## CONTENT ANALYSIS — BUSINESS PURPOSE & GROWTHSCAPE MAPPING

| Section | Current Purpose | Growthscape Equivalent |
|---------|----------------|----------------------|
| **Hero** | First impression. Core value prop: attention → trust. Dual CTA for immediate action. | Hero with primary value proposition + social proof |
| **Logo Marquee** | Social proof via brand association. Builds credibility through breadth. | Client logo carousel / Trust bar |
| **Who We Are** | Brand positioning. Founder credibility. Three pillars: founder, organic-first, audience-first. | About / Mission with founder profile |
| **Case Studies** | Primary conversion driver. Two detailed stories with hard metrics. | Portfolio with metrics |
| **Process Steps** | Demystify service delivery. Show systematic, repeatable approach. | How It Works / Process |
| **Gallery** | Visual portfolio. Production quality showcase without text. | Visual portfolio |
| **Packages** | Service tier presentation. Drives toward consultation (no public pricing). | Pricing / Plans |
| **Testimonials** | Third-party validation. Structured as mini case studies, not generic praise. | Testimonials / Social Proof |
| **FAQ** | Objection handling. Geographic scope, planning, assets, format flexibility. | FAQ |
| **Contact** | Primary lead capture. Structured form for efficient follow-up. | Contact / Lead Form |
| **Final CTA** | Urgency-driven conversion. Personalized with founder. Sets call expectations. | Final CTA / Urgency |
| **Footer** | Navigation, contact details, legal. Second touchpoint for key links. | Footer |

---

## NAMING CONVENTION MAP

For Growthscape content replacement, here is how Organic's terminology maps to generic equivalents:

| Organic Term | Generic Equivalent |
|-------------|-------------------|
| "Organic" (brand) | [Growthscape brand name] |
| "Amantha Perera" (founder) | [Growthscape founder name] |
| "Sri Lanka" (location) | [Growthscape location] |
| "Organic content marketing" | [Growthscape service type] |
| "Book a Strategy Call" | [Growthscape CTA] |
| "Scene 01/02" | [Case study numbering] |
| "Impact signals" | [Metrics section label] |
| "Client Energy" | [Testimonials label] |
| "Organic proof" | [Badge/label] |
| "OrganicsLK" | [Growthscape brand name] |
| "info@organicslk.com" | [Growthscape email] |
| "opti5labs.com" | [Growthscape parent/agency] |

---

*End of Content Inventory Report*
