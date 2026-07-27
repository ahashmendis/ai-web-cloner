# BEHAVIORS.md — organicslk.com

## Global Behaviors

### Navigation Float Transition
- **Trigger:** Scroll position > 0 (any scroll from top)
- **State A (at top):** Nav is transparent/scattered, background alpha near 0
- **State B (scrolled):** Nav becomes a floating pill with glass-morphism effect
- **CSS custom properties driven:**
  - `--hero-nav-bg-alpha`: 0.02 → higher
  - `--hero-nav-border-alpha`: 0.00 → visible
  - `--hero-nav-shadow-alpha`: 0.00 → visible
  - `--hero-nav-sheen-opacity`: 0.00 → visible
  - `--hero-nav-y`: -3px → 0
  - `--hero-nav-scale`: 0.985 → 1
- **Transition:** CSS custom properties animate smoothly
- **Implementation:** JS scroll listener updates CSS custom properties on the `[data-hero-nav-active]` element

### Smooth Scroll
- **Trigger:** Click on anchor links (#hero, #who, #work, etc.)
- **Behavior:** Smooth scroll to section (CSS `scroll-behavior: smooth` or JS)
- **No external library**

### Scroll-driven Fade-in Animations
- **Trigger:** IntersectionObserver on each section/card
- **State A (offscreen):** opacity: 0, transform: translateY(40px)
- **State B (in viewport):** opacity: 1, transform: translateY(0)
- **Transition:** opacity 0.9s, transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)
- **Stagger:** Cards within a section have staggered delays (0s, 0.08s, 0.16s increments)

## Section-Specific Behaviors

### Hero Section
- **Background video:** `hero-light-flow.mp4`, autoplay once, muted, plays through once (not looped)
- **Static after playback:** Video stops, last frame stays visible
- **Overlay gradients:** Static (no animation)

### Logo Marquee (Client Strip)
- **Trigger:** Time-driven (CSS animation)
- **Behavior:** Continuous horizontal scroll left, infinite loop
- **Speed:** Slow, steady pace
- **Hover on some logos:** Color swap (has-hover-logo class) — one logo image fades to reveal a second colored version
- **Implementation:** CSS `@keyframes` animation on transform: translateX

### Who We Are Cards
- **Trigger:** Scroll-driven (IntersectionObserver)
- **Behavior:** 3 cards fade in with stagger (0s, 0.08s, 0.16s delay)
- **Hover state:** Cards may have subtle transform on hover (need to verify)
- **Transition:** opacity 0.9s, transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)

### Work Section Carousel
- **Trigger:** Click-driven (prev/next buttons)
- **State A:** Scene 01 (Upali's by Nawaloka) visible
- **State B:** Scene 02 (Sarigama) visible
- **Transition:** Slide transition between cards
- **Video backgrounds:** Each card has an autoplay looped video behind it
- **Prev button:** Disabled when at first slide
- **Next button:** Enabled when more slides available

### Gallery Auto-Scroll
- **Trigger:** Time-driven (CSS animation)
- **Behavior:** 3 rows of video thumbnails, each scrolling horizontally
- **Direction:** Row 1 scrolls left, Row 2 scrolls right, Row 3 scrolls left (alternating)
- **Speed:** Different speeds per row for parallax feel
- **Hover on tile:** Video may play/expand
- **Click on tile:** Opens video in modal/lightbox
- **Duplication:** Each row has content duplicated for infinite scroll illusion

### Testimonials Carousel
- **Trigger:** Click-driven
- **Behavior:** Cycles through 3 testimonial cards
- **Card variants:** Some cards have light bg, some dark bg
- **Transition:** Fade or slide between cards
- **Below testimonials:** Brand logos marquee (same as client strip)

### FAQ Accordion
- **Trigger:** Click-driven
- **Behavior:** Click question to expand/collapse answer
- **State A (collapsed):** Shows question text + "+" indicator, fixed height
- **State B (expanded):** Shows answer text, auto-sizes height
- **Transition:** Height animation (smooth expand/collapse)
- **Only one open at a time:** Clicking a new question closes the previous

### Form Interactions
- **Input focus:** Border color changes, background may lighten
- **Transition:** border-color 0.18s, background 0.18s
- **Select dropdown:** Custom styled select for package options
- **Submit button:** 3D button with shadow, press effect on click

## Responsive Breakpoints

### Desktop (1440px)
- Full layout as described above
- 3-column who-are-we cards
- 2-column packages
- 2-column contact
- 4-column footer

### Tablet (~768px)
- Nav collapses to hamburger
- Cards stack to 2 columns or single column
- Font sizes reduce
- Footer becomes 2 columns

### Mobile (390px)
- Everything single column
- Nav is hamburger with slide-out menu
- H1 significantly smaller
- Cards full width
- Footer stacks
