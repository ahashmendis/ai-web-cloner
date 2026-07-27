# ProcessSteps Specification

## Overview
- **Target file:** `src/components/ProcessSteps.tsx`
- **Interaction model:** Scroll-driven (fade-in)

## DOM Structure
```
section#process.process-section
  div (container)
    div (header)
      p.section-label "How We Work"
      h2 "A repeatable system built for results every month."
      p (description)
    div.process-grid (2x2 grid)
      article.process-step × 4
        span.step-number "01"-"04"
        h3 (heading)
        p (description)
        div.step-tags
          span.tag-pill × 4
```

## Computed Styles

### Section
- padding: 120px 72px
- max-width: 1440px, margin: 0 auto

### Process Grid
- display: grid
- grid-template-columns: 1fr 1fr
- gap: 16px

### Process Card
- background: linear-gradient(120deg, rgba(247,247,242,0.08), rgba(247,247,242,0.024))
- border-radius: 22px
- padding: 40px
- transition: opacity 0.9s, transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)

### Step Number
- font-size: 14px, font-weight: 600, color: rgba(247,247,242,0.48), display: inline-block, padding: 6px 14px, border-radius: 100px, border: 1px solid rgba(247,247,242,0.14)

### H3
- font-size: 28px, font-weight: 500, line-height: 36px, color: #f7f7f2, margin-top: 20px

### Description
- font-size: 16px, line-height: 24px, color: rgba(247,247,242,0.66), margin-top: 12px

### Tag Pills
- Same as case study tags

## Text Content (verbatim)
- Label: "How We Work"
- H2: "A repeatable system built for results every month."
- Description: "Strategy, production, delivery, and iteration are treated as one loop. The story keeps moving because the system keeps moving."
- Step 01: "Strategy & Planning" / "We get under the skin of the brand first: audience, voice, offer, and the business outcome every video has to serve." / Tags: Discovery Call, Brand Audit, Content Pillars, Content Calendar
- Step 02: "Production Planning" / "Scripts, locations, talent, and approvals are prepared before shoot day so the work feels sharp, not improvised." / Tags: Script Writing, Influencer Coordination, Client Feedback, Shoot Planning
- Step 03: "Production Execution" / "The team directs and captures every frame with Sony A7 IV cameras so the brand feels cinematic without losing its human pulse." / Tags: Shoot Execution, Sony A7 IV Production, Direction, Premium Capture
- Step 04: "Post-Production & Delivery" / "Footage is edited, refined, delivered, and then fed back into the next month of consistent organic growth." / Tags: Share Raw Footage, Edit, Final Delivery, Repeat Monthly

## Responsive Behavior
- **Desktop:** 2×2 grid
- **Tablet:** 2×2 grid, smaller padding
- **Mobile:** Single column stack
- **Breakpoint:** ~768px
