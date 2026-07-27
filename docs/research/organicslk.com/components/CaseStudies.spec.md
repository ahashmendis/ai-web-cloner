# CaseStudies Specification

## Overview
- **Target file:** `src/components/CaseStudies.tsx`
- **Interaction model:** Click-driven (carousel prev/next)

## DOM Structure
```
section#work.work-section
  div (container)
    div (header)
      p.section-label "Our Work"
      h2 "Case studies built like scenes, not slides."
    div.carousel
      article.case-card × N (horizontally scrollable)
        div.card-media (video background)
          video (autoplay, loop, muted)
          div.card-overlay
            span.scene-label "Scene 01"
            a "View on Instagram" → external link
            span "Organic proof"
        div.card-content
          div.card-info
            p.client-name + span.location
            h3 (heading)
            p (description)
            div.card-tags
              span.tag-pill × 4
          div.card-stats
            p "Impact signals"
            div.stat × 4
              strong (value)
              span (label)
    div.carousel-nav
      button "Previous videos" (disabled at start)
      button "Next videos"
```

## Computed Styles

### Section
- padding: 120px 72px
- background: linear-gradient(rgba(247,247,242,0.05), rgba(0,0,0,0) 22%)

### H2
- font-size: 79.2px, font-weight: 850, line-height: 72.86px, color: #f7f7f2

### Case Card
- min-width: ~680px
- border-radius: 30px
- overflow: hidden
- background: radial-gradient(circle at 20% 0%, rgba(255,255,255,0.16), rgba(0,0,0,0) 30%), linear-gradient(135deg, rgba(247,247,242,0.15), rgba(247,247,242,0.04) 48%, rgba(3,3,3,0.86))
- display: flex
- flex-direction: column

### Card Media
- height: ~350px
- position: relative
- overflow: hidden
- border-radius: 30px 30px 0 0

### Card Content
- padding: 32px 40px 40px

### Client Name
- font-size: 14px, color: rgba(247,247,242,0.56)

### H3 (heading)
- font-size: 28px, font-weight: 500, line-height: 36px, color: #f7f7f2, margin-top: 12px

### Description
- font-size: 16px, line-height: 24px, color: rgba(247,247,242,0.66)

### Tag Pills
- font-size: 12px, padding: 6px 14px, border-radius: 100px, background: rgba(247,247,242,0.06), color: rgba(247,247,242,0.68)

### Impact Stats
- display: flex, gap: 32px
- strong (value): font-size: 24px, font-weight: 600, color: #f7f7f2
- span (label): font-size: 12px, color: rgba(247,247,242,0.56)

## States & Behaviors

### Carousel navigation
- **Trigger:** Click prev/next buttons
- **Behavior:** Slides horizontally to show next/prev case card
- **Prev button:** Disabled (opacity 0.3) when at first slide
- **Transition:** Smooth horizontal scroll/slide

### Video backgrounds
- Each card has an autoplay looped muted video behind it

## Per-State Content

### Scene 01 — Upali's by Nawaloka
- Client: "Upali's by Nawaloka"
- Location: "Melbourne & Colombo"
- Heading: "From a restaurant feed to a cultural memory lane."
- Description: "Organic moved the brand beyond food shots by introducing Sinhala retro cues, old songs, staff stories, founder-led moments, and Sri Lankan cultural nostalgia."
- Tags: "Personified the brand", "Moved beyond showcasing food", "Introduced a Sinhala retro theme", "Featured staff and founder"
- Stats: "7,000 started at" | "12,800+ current followers" | "04months timeline" | "153k top reel views"
- Video: `public/videos/gallery/upalis-reel-fixed.mp4`

### Scene 02 — Sarigama
- Client: "Sarigama"
- Heading: "Sri Lanka's premier live music concert series in Colombo"
- Description: "A fully sold-out live concert campaign built from zero — no prior band awareness, no paid advertising. All awareness and ticket sales were driven entirely through organic Instagram content created by our team."
- Tags: "100% organic growth", "Zero awareness to fully sold-out concerts", "World-class production", "Retention-first video structure"
- Stats: "100% tickets sold" | "3,500 people attended" | "264K top reel views" | "800K+ total organic views"
- Video: `public/videos/gallery/sarigamaCS-casestudy.mp4`

## Responsive Behavior
- **Desktop:** Cards side-by-side or single scroll, ~680px wide
- **Tablet:** Cards stack or scroll, ~500px wide
- **Mobile:** Cards full-width, single column
