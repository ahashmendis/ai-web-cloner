# WhoWeAre Specification

## Overview
- **Target file:** `src/components/WhoWeAre.tsx`
- **Interaction model:** Scroll-driven (fade-in with stagger)

## DOM Structure
```
section#who.manifesto-section
  div.manifesto-layout (max-width container, flex row)
    div.manifesto-intro (left side)
      p.section-label "Who Are We?"
      h2 "Purpose Led Content. Human First Brands."
      p (description)
    div.manifesto-cards (right side, flex column, gap 16px)
      article.manifesto-card × 3
        div.card-label (label text)
        h3 (heading)
        p (description)
```

## Computed Styles

### Section Container
- padding: 120px 72px
- max-width: 1440px
- margin: 0 auto

### Layout (flex row)
- display: flex
- gap: 80px
- align-items: flex-start

### Left Column (manifesto-intro)
- flex: 0 0 400px

### Section Label
- font-size: 14px, font-weight: 500, letter-spacing: 0.05em, text-transform: uppercase, color: rgba(247,247,242,0.56)

### H2
- font-size: 79.2px, font-weight: 850, line-height: 72.864px, color: #f7f7f2

### Description
- font-size: 16px, line-height: 24px, color: rgba(247,247,242,0.66), margin-top: 24px

### Right Column (manifesto-cards)
- flex: 1
- display: flex
- flex-direction: column
- gap: 16px

### Card (.manifesto-card)
- background: rgba(10,10,10,0.72)
- border-radius: 30px
- padding: 40px
- box-shadow: rgba(0,0,0,0.32) 0 24px 60px, rgba(255,255,255,0.12) 0 1px 0 inset
- transition: opacity 0.9s, transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)

### Card Label
- font-size: 12px, font-weight: 500, letter-spacing: 0.05em, text-transform: uppercase, color: rgba(247,247,242,0.56)

### Card H3
- font-size: 37.44px, font-weight: 400, line-height: 36.6912px, color: #f7f7f2, margin-top: 12px

### Card Paragraph
- font-size: 16px, line-height: 24px, color: rgba(247,247,242,0.66), margin-top: 16px

## States & Behaviors

### Scroll fade-in with stagger
- **Trigger:** IntersectionObserver (threshold ~0.2)
- **State A:** opacity: 0, transform: translateY(40px)
- **State B:** opacity: 1, transform: translateY(0)
- **Stagger:** Card 1: 0s delay, Card 2: 0.08s, Card 3: 0.16s
- **Transition:** opacity 0.9s, transform 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)

## Text Content (verbatim)
- Label: "Who Are We?"
- H2: "Purpose Led Content." (line break) "Human First Brands."
- Description: "Organic specialises in personifying brands and humanising them. Every video is created with a clear strategic objective, not a borrowed trend or generic content pattern."
- Card 1: Label "Founder & Creative Director", Heading "Amantha Perera", Description "Led by Amantha and his team, Organic builds content systems that turn brands into recognisable personalities people remember."
- Card 2: Label "Organic Attention", Heading "No Paid Media", Description "Every view earned. No boosts, no budgets, no shortcuts. Just organic content people stopped scrolling for and kept coming back to watch."
- Card 3: Label "Operating Belief", Heading "Audience before algorithm", Description "Views matter, but memorability matters more. The work is planned around business goals, brand voice, and cultural relevance."

## Responsive Behavior
- **Desktop (1440px):** Side-by-side layout, intro left + cards right
- **Tablet (768px):** Stack vertically, intro on top
- **Mobile (390px):** Single column, cards full width
- **Breakpoint:** ~768px
