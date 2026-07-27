# FinalCTA Specification

## Overview
- **Target file:** `src/components/FinalCTA.tsx`
- **Interaction model:** Static

## DOM Structure
```
section#final-cta.final-cta-section
  div (centered container)
    div.final-cta-card
      p.section-label "Final move"
      h2 "Ready to make your brand impossible to ignore?"
      div.cta-pills
        span × 3 (feature pills)
      button.btn-3d "Book a Call with Amantha"
      div.founder-image
        img (amantha.png)
      p.cta-closing "Be quick. A sharper content month starts with one focused conversation."
```

## Computed Styles

### Section
- padding: 120px 72px
- background: radial-gradient(at 50% 108%, rgba(255,255,255,0.18), rgba(0,0,0,0) 34%), radial-gradient(circle at 12% 16%, rgba(255,255,255,0.08), rgba(0,0,0,0) 28%)
- text-align: center

### CTA Card
- max-width: 700px
- margin: 0 auto
- background: linear-gradient(135deg, rgba(255,255,255,0.09), rgba(0,0,0,0) 34%), linear-gradient(rgba(255,255,255,0.043), rgba(255,255,255,0.016))
- border-radius: 40px
- padding: 60px 48px

### H2
- font-size: 79.2px, font-weight: 850, line-height: 72.86px, color: #f7f7f2

### CTA Pills
- display: flex, gap: 12px, justify-content: center, flex-wrap: wrap, margin-top: 32px
- span: font-size: 14px, padding: 8px 16px, border-radius: 100px, background: rgba(247,247,242,0.08), color: rgba(247,247,242,0.7)

### CTA Button
- btn-3d style, margin-top: 32px

### Founder image
- width: ~120px, height: ~120px, border-radius: 50%, object-fit: cover, margin-top: 32px, margin-left: auto, margin-right: auto

### Closing text
- font-size: 16px, color: rgba(247,247,242,0.56), margin-top: 24px

## Text Content (verbatim)
- Label: "Final move"
- H2: "Ready to make your brand impossible to ignore?"
- Pills: "15 min strategy call", "Brand direction", "Content system map"
- Button: "Book a Call with Amantha"
- Closing: "Be quick. A sharper content month starts with one focused conversation."

## Assets
- Founder image: `public/images/amantha.png`
