# FAQ Specification

## Overview
- **Target file:** `src/components/FAQ.tsx`
- **Interaction model:** Click-driven (accordion expand/collapse)

## DOM Structure
```
section#faq.faq-section
  div (container)
    div (header)
      p.section-label "FAQ"
      h2 "Questions before the first frame?"
    div.faq-list
      div.faq-item (role="group") × 4
        div.faq-question (clickable, flex row, justify-between)
          span (question text)
          span.faq-icon "+" / "−"
        div.faq-answer (collapsible)
          p (answer text)
```

## Computed Styles

### Section
- padding: 120px 72px
- background: linear-gradient(rgba(247,247,242,0.05), rgba(0,0,0,0) 22%)
- max-width: 1440px, margin: 0 auto

### FAQ Item
- background: rgba(247,247,242,0.043)
- border-radius: 22px
- padding: 28px 32px
- margin-bottom: 12px
- box-shadow: rgba(0,0,0,0.32) 0 24px 60px, rgba(255,255,255,0.12) 0 1px 0 inset
- max-width: 800px
- margin-left: auto
- margin-right: auto

### Question row
- display: flex
- justify-content: space-between
- align-items: center
- cursor: pointer

### Question text
- font-size: 20px, font-weight: 500, color: #f7f7f2

### FAQ icon (+/−)
- font-size: 24px, color: rgba(247,247,242,0.56), transition: transform 0.3s

### Answer
- max-height: 0, overflow: hidden, transition: max-height 0.4s ease, padding-top: 0
- When expanded: max-height: 300px, padding-top: 16px

### Answer text
- font-size: 16px, line-height: 24px, color: rgba(247,247,242,0.66)

## States & Behaviors

### Accordion expand/collapse
- **Trigger:** Click on question row
- **State A (collapsed):** Answer hidden (max-height: 0), icon shows "+"
- **State B (expanded):** Answer visible (max-height: 300px), icon shows "−" rotated
- **Transition:** max-height 0.4s ease, padding 0.3s
- **Only one open at a time:** Clicking a new question closes the previous

## Text Content (verbatim)

### Q1: "Do you only work with Sri Lankan brands?"
A1: "No. Organic is based in Sri Lanka but works with brands across regions. The content system adapts to any market where the audience is active on social media."

### Q2: "Can you help if we do not know what to post?"
A2: "Yes. Strategy is the first step. Organic builds content pillars, calendars, and production plans before a single frame is shot."

### Q3: "Do we receive raw footage?"
A3: "Yes. Every package includes raw footage so brands can repurpose content for stories, ads, and internal use."

### Q4: "Is this only short-form video?"
A4: "Organic specialises in short-form for platforms like Instagram, TikTok, and YouTube Shorts. Long-form and campaign content can be arranged as part of a custom package."

## Responsive Behavior
- **Desktop:** max-width 800px centered
- **Tablet:** Same, padding reduces
- **Mobile:** Full width, smaller padding
