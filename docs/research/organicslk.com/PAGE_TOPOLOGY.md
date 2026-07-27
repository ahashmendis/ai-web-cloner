# PAGE_TOPOLOGY.md — organicslk.com

## Page Overview
- **Type:** Single-page site (all sections on one scroll)
- **Theme:** Dark mode (near-black backgrounds, warm off-white text)
- **Font:** Geist (sans-serif) + Geist Mono
- **Scroll behavior:** Native smooth scroll, no Lenis/Locomotive
- **No scroll-snap**

## Section Order (top to bottom)

### 1. Navigation Bar (fixed, z-50)
- **Class:** `.nav-bar`
- **Behavior:** Floating pill-shaped nav. Starts transparent/scattered on hero, transitions to a solid glass-morphism pill with shadow on scroll (CSS custom properties: `--hero-nav-bg-alpha`, `--hero-nav-shadow-alpha`)
- **Position:** Fixed top, centered
- **Content:** Logo mark → Nav links (Who We Are, Our Work, How We Work, Packages, FAQ, Contact) → CTA button "Book a Strategy Call"
- **Mobile:** Hamburger → Slide-out mobile nav

### 2. Hero Section (`#hero`, `.hero-section`)
- **Interaction model:** Static + time-driven (background video plays once)
- **Layout:** Full viewport height, centered content
- **Background:** Video `hero-light-flow.mp4` (autoplays once, muted) with dark radial gradients overlaid
- **Layers:** `hero-bg-shade` (radial + linear gradients) → `hero-screen-shade` → grid/wave overlays → content
- **Content:** H1 "Meet the brand people remember." → subtitle paragraph → 2 buttons (Book a Strategy Call, Watch the Work)
- **Typography:** H1 100.8px/88.7px, weight 760, white; subtitle smaller, warm off-white

### 3. Client Strip / Logo Marquee (`.client-strip`)
- **Interaction model:** Time-driven (auto-scrolling marquee, infinite loop)
- **Layout:** Full width, horizontal scrolling logos
- **Content:** "Brands that trust Organic" label → row of 36 brand logos (Mezo, Bluefort, Thambili Island, etc.)
- **Behavior:** CSS animation marquee, continuous scroll left. Some logos have hover states (color swap via `has-hover-logo`)
- **Assets:** 36 brand logo webp images from DigitalOcean CDN

### 4. Who We Are Section (`#who`, `.manifesto-section`)
- **Interaction model:** Scroll-driven (fade-in on scroll via IntersectionObserver)
- **Layout:** Split — left side has label + H2 + paragraph, right side has 3 stacked cards
- **Content:**
  - Label: "Who Are We?"
  - H2: "Purpose Led Content. Human First Brands."
  - Paragraph about organic content strategy
  - 3 cards: "Founder & Creative Director" / "No Paid Media" / "Audience before algorithm"
- **Card styles:** bg rgba(10,10,10,0.72), border-radius 30px, padding 40px, shadow with inset highlight
- **Stagger:** Cards have staggered transition delays (0s, 0.08s, 0.16s)

### 5. Our Work Section (`#work`, `.work-section`)
- **Interaction model:** Click-driven (carousel navigation)
- **Layout:** Full width, label + H2 header, horizontal card carousel
- **Content:**
  - Label: "Our Work"
  - H2: "Case studies built like scenes, not slides."
  - Carousel of case study cards (Scene 01: Upali's by Nawaloka, Scene 02: Sarigama)
  - Previous/Next buttons at bottom
- **Card structure:** Dark overlay card with video background, text overlay with case details, impact stats row
- **Card gradient:** Radial + linear gradients over dark background

### 6. How We Work Section (`#process`, `.process-section`)
- **Interaction model:** Scroll-driven (fade-in)
- **Layout:** Label + H2 header → 4 process step cards in 2x2 grid
- **Content:**
  - Label: "How We Work"
  - H2: "A repeatable system built for results every month."
  - Steps: 01 Strategy & Planning, 02 Production Planning, 03 Production Execution, 04 Post-Production & Delivery
- **Card styles:** Subtle gradient bg, border-radius 22px, each with number + heading + description + tag pills

### 7. Gallery Section (`#gallery`, `.gallery-section`)
- **Interaction model:** Time-driven (auto-scrolling marquee rows) + click-driven (video modal)
- **Layout:** Label + H2 header → 3 rows of video thumbnails, each row auto-scrolls in opposite directions
- **Content:**
  - Label: "Gallery"
  - H2: "Creators, campaigns, and frames with Organic flare."
  - 3 rows × 4 video tiles each (duplicated for infinite scroll)
- **Tile:** Video thumbnail with gradient shade overlay, click opens video
- **Assets:** 12 gallery thumbnails + 12 gallery videos from CDN

### 8. Packages Section (`#packages`, `.packages-section`)
- **Interaction model:** Scroll-driven (fade-in)
- **Layout:** Label + H2 header → 2 package cards side by side
- **Content:**
  - Label: "Our Packages"
  - H2: "Packages built for consistent organic growth."
  - Card 1: "Standard" (Full content engine) - dark bg
  - Card 2: "Personal Brand" (Founder-led growth) - light bg
  - Footer note: "All packages include onboarding, content strategy, and full production."
- **Card styles:** Card 1 dark gradient bg, Card 2 light gradient bg, border-radius varies, list of features + CTA button

### 9. Testimonials Section (`.testimonials-section`)
- **Interaction model:** Click-driven (card rotation/carousel)
- **Layout:** Label + H2 header → rotating testimonial cards → brand logos marquee below
- **Content:**
  - Label: "Client Energy"
  - H2: "Proof that feels less like praise and more like momentum."
  - 3 testimonial cards (Restaurant Campaign, Branded Series, Founder-Led Brands)
- **Card styles:** Can toggle between light/dark variants, gradient bg, border-radius 30px

### 10. FAQ Section (`#faq`, `.faq-section`)
- **Interaction model:** Click-driven (accordion expand/collapse)
- **Layout:** Label + H2 header → accordion items
- **Content:**
  - Label: "FAQ"
  - H2: "Questions before the first frame?"
  - 4 questions with expandable answers
- **Card styles:** bg rgba(247,247,242,0.043), border-radius 22px, shadow with inset highlight

### 11. Contact Section (`#contact`, `.contact-section`)
- **Interaction model:** Static (form submission is frontend-only)
- **Layout:** Two-column — left has info + contact details, right has form
- **Content:**
  - Label: "Get in Touch"
  - H2: "Let's build something unforgettable together."
  - Contact info: phone numbers, email, address
  - Form: Name, Brand/Company, Email, Phone, Package select, Goals textarea, Submit button
- **Form styles:** bg rgba(3,3,3,0.72), border-radius 16px, warm off-white text

### 12. Final CTA Section (`#final-cta`, `.final-cta-section`)
- **Interaction model:** Static
- **Layout:** Centered card with founder image + CTA
- **Content:**
  - Label: "Final move"
  - H2: "Ready to make your brand impossible to ignore?"
  - 3 feature pills: 15 min strategy call, Brand direction, Content system map
  - CTA: "Book a Call with Amantha"
  - Founder image
  - Closing text

### 13. Footer (`.footer-section`)
- **Interaction model:** Static
- **Layout:** 4-column grid
- **Content:**
  - Col 1: Logo + tagline + social links (Instagram, LinkedIn)
  - Col 2: Address, Phone, Email
  - Col 3: Company nav links
  - Col 4: Resources nav links
  - Bottom: "Made in Sri Lanka" + copyright + "A Solution By Opti5 Labs"

## Global Design Tokens

### Colors
- **Background:** rgb(0,0,0) / rgb(3,3,3) / rgb(5,5,5) / rgb(10,10,10)
- **Text primary:** rgb(247,247,242) — warm off-white
- **Text muted:** rgb(182,182,175) — warm gray
- **Text on light:** rgb(0,0,0)
- **Card bg dark:** rgba(10,10,10,0.72)
- **Card bg light:** linear-gradient(145deg, rgba(255,255,255,0.72), rgba(235,235,232,0.92))
- **Border/separator:** rgba(247,247,242,0.08)

### Typography
- **Font family:** Geist, "Geist Fallback", Arial, Helvetica, sans-serif
- **H1:** 100.8px, weight 760, line-height 88.7px
- **H2:** 79.2px, weight 850, line-height 72.86px
- **H3 (who cards):** 37.44px, weight 400, line-height 36.7px
- **Body:** 16px, weight 400, line-height 24px
- **Nav:** 16px, weight 400, line-height 24px
- **CTA button:** 12.16px, weight 780, line-height 18.24px

### Spacing
- **Section padding:** ~120px vertical
- **Content max-width:** ~1200px centered
- **Card padding:** 40px
- **Footer padding:** 58px top, 72px sides

### Border Radius
- **Cards:** 30px
- **Buttons:** 15-16px
- **FAQ items:** 22px
- **Form inputs:** 16px

### Shadows
- **Cards:** rgba(0,0,0,0.32) 0 24px 60px, inset rgba(255,255,255,0.12) 0 1px 0
- **CTA buttons:** Multi-layer 3D shadow effect with inset highlights
- **Nav CTA:** Similar 3D shadow
