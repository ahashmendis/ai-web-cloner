# Testimonials Specification

## Overview
- **Target file:** `src/components/Testimonials.tsx`
- **Interaction model:** Click-driven (card carousel/rotation)

## DOM Structure
```
section.testimonials-section
  div (container)
    div (header)
      p.section-label "Client Energy"
      h2 "Proof that feels less like praise and more like momentum."
      p (description)
    div.testimonials-stage
      div.testimonial-cards (flex row or carousel)
        button.testimonial-card × 3 (clickable, each shows different content)
          span.card-category
          p.card-quote (quoted text)
          div.card-footer
            strong (client name)
            span (stat value + emphasis label)
  div (brand marquee — reuse LogoMarquee component)
```

## Computed Styles

### Section
- padding: 120px 0
- background: radial-gradient(circle at 70% 20%, rgba(255,255,255,0.12), rgba(0,0,0,0) 28%), radial-gradient(circle at 18% 76%, rgba(255,255,255,0.1), rgba(0,0,0,0) 30%), linear-gradient(rgb(5,5,5), rgb(11,11,10) 46%, rgb(2,2,2))

### Testimonial Card (.testimonial-card)
- background: linear-gradient(145deg, rgba(255,255,255,0.13), rgba(255,255,255,0.035))
- border-radius: 30px
- padding: 40px
- min-width: ~380px
- box-shadow: rgba(0,0,0,0.32) 0 24px 60px, rgba(255,255,255,0.12) 0 1px 0 inset
- cursor: pointer
- transition: opacity 0.4s, transform 0.4s

### Card Category
- font-size: 12px, font-weight: 500, text-transform: uppercase, letter-spacing: 0.05em, color: rgba(247,247,242,0.56)

### Card Quote
- font-size: 20px, line-height: 30px, color: #f7f7f2, margin-top: 20px, font-style: italic

### Card Footer
- margin-top: 28px, display: flex, flex-direction: column, gap: 4px

### Client Name
- font-size: 16px, font-weight: 600, color: #f7f7f2

### Stat
- font-size: 14px, color: rgba(247,247,242,0.56)
- em: font-style: normal, color: rgba(247,247,242,0.7)

### Light variant
- background: linear-gradient(145deg, rgba(255,255,255,0.82), rgba(235,235,232,0.95))
- color: #030303

## Per-State Content

### Card 1: Restaurant Campaign
- Category: "Restaurant Campaign"
- Quote: "Organic moved the brand beyond food shots into cultural memory, staff stories, and founder-led moments people actually wanted to watch."
- Client: "Upali's by Nawaloka"
- Stat: "153k" emphasis "top reel views"
- Variant: dark

### Card 2: Branded Series
- Category: "Branded Series"
- Quote: "A simple product became an episodic story. The content gave people a reason to come back, follow the plot, and remember the brand."
- Client: "Bluefort"
- Stat: "5" emphasis "episodes shipped"
- Variant: light

### Card 3: Founder-Led Brands
- Category: "Founder-Led Brands"
- Quote: "The difference is the system. Strategy, production, editing, and monthly iteration feel connected instead of random posts on a calendar."
- Client: "Organic Network"
- Stat: "35+" emphasis "brands shaped"
- Variant: dark

## Responsive Behavior
- **Desktop:** Cards side by side or carousel
- **Tablet:** Carousel, one visible at a time
- **Mobile:** Single card, scroll/swipe
