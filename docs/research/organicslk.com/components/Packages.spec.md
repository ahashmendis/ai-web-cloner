# Packages Specification

## Overview
- **Target file:** `src/components/Packages.tsx`
- **Interaction model:** Scroll-driven (fade-in)

## DOM Structure
```
section#packages.packages-section
  div (container)
    div (header)
      p.section-label "Our Packages"
      h2 "Packages built for consistent organic growth."
    div.packages-grid (flex row, gap 16px)
      article.package-card-dark
        span.card-type "Full content engine"
        h3 "Standard"
        p "Per month"
        ul
          li × 5 (features)
        button.btn-3d "Book a Call"
      article.package-card-light
        span.card-type "Founder-led growth"
        h3 "Personal Brand"
        p "Per month"
        ul
          li × 5 (features)
        button.btn-3d-dark "Book a Call"
    p.packages-note "All packages include onboarding, content strategy, and full production."
```

## Computed Styles

### Section
- padding: 120px 72px
- max-width: 1440px, margin: 0 auto

### Packages Grid
- display: flex
- gap: 16px

### Dark Card (.package-card-dark)
- background: linear-gradient(145deg, rgba(28,28,28,0.92), rgb(0,0,0) 52%)
- border-radius: 30px
- padding: 48px
- flex: 1
- color: #f7f7f2

### Light Card (.package-card-light)
- background: linear-gradient(145deg, rgba(255,255,255,0.72), rgba(235,235,232,0.92))
- border-radius: 30px
- padding: 48px
- flex: 1
- color: #030303

### Card Type Label
- font-size: 12px, font-weight: 500, text-transform: uppercase, letter-spacing: 0.05em
- Dark card: color rgba(247,247,242,0.56)
- Light card: color rgba(0,0,0,0.56)

### H3 (package name)
- font-size: 37.44px, font-weight: 400, line-height: 36.7px
- margin-top: 8px

### "Per month" text
- font-size: 16px, color: rgba(247,247,242,0.56) / rgba(0,0,0,0.56)

### Feature list
- list-style: none, padding: 0
- li: font-size: 16px, line-height: 24px, padding: 8px 0, border-bottom: 1px solid rgba(247,247,242,0.08) / rgba(0,0,0,0.08)

### CTA Button
- Full width, same btn-3d / btn-3d-dark styles
- margin-top: 32px

### Packages Note
- text-align: center, font-size: 14px, color: rgba(247,247,242,0.56), margin-top: 32px

## Text Content (verbatim)
- Label: "Our Packages"
- H2: "Packages built for consistent organic growth."

### Standard Package (dark)
- Type: "Full content engine"
- Name: "Standard"
- Frequency: "Per month"
- Features: "08 - 10 videos", "06 - 08 static posts", "Monthly consulting", "Assigned account manager", "Raw footage for stories and repurposing"
- Button: "Book a Call"

### Personal Brand Package (light)
- Type: "Founder-led growth"
- Name: "Personal Brand"
- Frequency: "Per month"
- Features: "06 - 08 videos", "04 - 06 static posts", "Monthly consulting", "LinkedIn management", "Strategy-led personal positioning"
- Button: "Book a Call"

### Footer note
- "All packages include onboarding, content strategy, and full production."

## Responsive Behavior
- **Desktop:** 2 cards side by side
- **Tablet/Mobile:** Stack vertically
- **Breakpoint:** ~768px
