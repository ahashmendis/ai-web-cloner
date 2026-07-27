# Navbar Specification

## Overview
- **Target file:** `src/components/Navbar.tsx`
- **Screenshot:** `docs/design-references/organicslk.com/full-page-desktop-1440.png`
- **Interaction model:** Scroll-driven (background opacity changes on scroll)

## DOM Structure
```
nav.nav-bar [data-hero-nav-active]
  div.nav-inner (max-width container, flex row)
    a.brand-mark (logo SVG)
    nav[aria-label="Primary navigation"] (desktop links)
      a × 6 (anchor links to sections)
    button.nav-cta "Book a Strategy Call"
  nav.mobile-nav (hidden on desktop, shown on mobile)
    a × 6 (anchor links)
    button "Book a Strategy Call"
  button.hamburger (shown on mobile)
```

## Computed Styles (exact values from getComputedStyle)

### Container (.nav-bar)
- position: fixed
- top: 0
- left: 0
- right: 0
- z-index: 50
- padding: 20px 40px
- transition: all 0.35s cubic-bezier(0.2, 0.8, 0.2, 1)

### Nav Inner
- max-width: ~1200px
- margin: 0 auto
- display: flex
- flex-direction: row
- justify-content: space-between
- align-items: center

### Desktop Nav Links
- display: flex
- flex-direction: row
- gap: 32px
- font-size: 16px
- font-weight: 400
- line-height: 24px
- color: #f7f7f2
- text-decoration: none
- opacity: 0.78 (default), 1.0 (hover)
- transition: opacity 0.2s

### CTA Button (.nav-cta)
- font-size: 12.16px
- font-weight: 780
- line-height: 18.24px
- color: rgb(0, 0, 0)
- padding: 0 21px
- height: 40px
- border-radius: 15px
- background: linear-gradient(rgb(255,255,255) 0%, rgb(255,255,255) 38%, rgb(247,247,247) 68%, rgb(236,236,236) 100%)
- box-shadow: rgb(255,255,255) 0px 1px 2px inset, rgba(0,0,0,0.055) 0px -7px 12px inset, rgba(0,0,0,0.16) 0px -1px 0px inset, rgb(211,211,206) 0px 2px 0px, rgb(159,159,153) 0px 4px 0px, rgba(0,0,0,0.22) 0px 5px 0px
- transition: transform 0.17s, box-shadow 0.17s, background 0.17s, filter 0.17s

## States & Behaviors

### Scroll-triggered floating mode
- **Trigger:** JS scroll listener, updates CSS custom properties on html element
- **State A (at top):** --hero-nav-bg-alpha: 0.02, --hero-nav-border-alpha: 0.00, --hero-nav-shadow-alpha: 0.00, --hero-nav-sheen-opacity: 0.00, --hero-nav-y: -3px, --hero-nav-scale: 0.985
- **State B (scrolled):** --hero-nav-bg-alpha: 0.85, --hero-nav-border-alpha: 0.1, --hero-nav-shadow-alpha: 0.4, --hero-nav-sheen-opacity: 0.08, --hero-nav-y: 0, --hero-nav-scale: 1
- **Transition:** CSS custom properties animate via CSS transition on .nav-pill
- **Implementation:** JS scroll listener sets CSS variables on document.documentElement

### Mobile hamburger
- **Trigger:** Click on hamburger button
- **State A (closed):** Mobile nav hidden (display: none or transform off-screen)
- **State B (open):** Mobile nav slides in from right, full-screen overlay
- **Transition:** transform 0.3s ease

### Hover states
- **Nav links:** opacity: 0.78 → 1.0
- **CTA button:** transform: translateY(-1px), box-shadow adjusts

## Text Content (verbatim)
- "Who We Are" → #who
- "Our Work" → #work
- "How We Work" → #process
- "Packages" → #packages
- "FAQ" → #faq
- "Contact" → #contact
- Button: "Book a Strategy Call"

## Responsive Behavior
- **Desktop (1440px):** Full nav with all links visible, CTA button visible
- **Tablet (768px):** Links hidden, hamburger visible, CTA visible
- **Mobile (390px):** Hamburger only, full-screen mobile nav overlay
- **Breakpoint:** ~768px

## Assets
- Logo SVG: `public/images/logo.svg`
