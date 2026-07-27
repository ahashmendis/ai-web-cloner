# LogoMarquee Specification

## Overview
- **Target file:** `src/components/LogoMarquee.tsx`
- **Screenshot:** `docs/design-references/organicslk.com/full-page-desktop-1440.png`
- **Interaction model:** Time-driven (CSS animation auto-scroll)

## DOM Structure
```
section.client-strip
  div (container)
    p.section-label "Brands that trust Organic"
    div.marquee-container (overflow: hidden)
      div.marquee-track (display: flex, animation: marquee 40s linear infinite)
        div.marquee-logo × 36 (first set)
        div.marquee-logo × 36 (duplicate for seamless loop)
          img (brand logo webp)
```

## Computed Styles

### Container
- padding: 80px 0
- overflow: hidden

### Section Label
- text: "Brands that trust Organic"
- font-size: 14px
- font-weight: 500
- letter-spacing: 0.05em
- text-transform: uppercase
- color: rgba(247, 247, 242, 0.56)
- text-align: center
- margin-bottom: 40px

### Marquee Track
- display: flex
- gap: 60px (approx)
- width: max-content
- animation: marquee 40s linear infinite

### Logo Item (.marquee-logo)
- width: ~100px
- height: ~40px
- flex-shrink: 0
- opacity: 0.4 (default)
- filter: grayscale(100%) brightness(200%) (makes logos white on dark)
- transition: opacity 0.3s
- cursor: pointer

### Logo Item hover
- opacity: 1.0
- filter: none (shows original colors for logos with has-hover-logo)

## States & Behaviors

### Auto-scroll
- **Trigger:** CSS animation (infinite loop)
- **Behavior:** Translates track from 0 to -50% (since content is duplicated)
- **Speed:** 40s for full cycle
- **Implementation:** CSS @keyframes marquee

### Hover on logos
- **State A:** opacity 0.4, grayscale filter
- **State B:** opacity 1.0, filter removed
- **Some logos** have a second colored image that fades in on hover (.has-hover-logo class)

## Per-State Content (all 36 brand logos)
Mezo, Bluefort, Thambili Island, Culture by Ari, Kannadi, Comfort World, Land Rover, Sarigama, Glow, Tathya, Upali's, Liv, Satya Collection, Lactoboost, Playdium, Rush, John Keells Group, Hamilton Sciences, TEJA, talentstudio, Supreme, Divide, The Commons, Hybrid House, Luxonix, Momo, MOB, Punchi's, Hydrion, Nomad, Orbit 88, Rough, KFL, Emperors Den, Foster & Reed, VibeX

## Assets
- Brand logos: `public/images/brands/brand{1-36}.webp`
- Some have hover variants: `public/images/brands/brand{12,31,34}-2.webp`

## Responsive Behavior
- **Desktop (1440px):** Full marquee, ~100px per logo
- **Tablet (768px):** Same, logos slightly smaller
- **Mobile (390px):** Same animation, logos smaller (~70px)
