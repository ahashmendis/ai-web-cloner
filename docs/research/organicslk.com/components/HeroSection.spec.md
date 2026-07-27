# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/organicslk.com/full-page-desktop-1440.png`
- **Interaction model:** Static + time-driven (background video plays once)

## DOM Structure
```
section#hero.hero-section
  div.hero-backdrop (position: absolute)
    img (hero-video-still.webp - fallback)
    video (hero-light-flow.mp4, autoplay once, muted)
  div.hero-bg-shade (radial + linear gradient overlay)
  div.hero-screen-shade (darker gradient overlay)
  div.hero-grid (vertical line grid pattern)
  div.hero-wave (vertical line wave pattern)
  div.hero-content (centered content)
    h1 "Meet the brand people remember."
    p (subtitle)
    div.hero-actions
      button.btn-3d "Book a Strategy Call"
      a.btn-ghost "Watch the Work" → #work
```

## Computed Styles

### Section Container
- width: 100%
- height: 100vh
- min-height: 700px
- position: relative
- overflow: hidden
- display: flex
- align-items: center
- justify-content: center

### Hero Content
- position: relative
- z-index: 10
- text-align: center
- max-width: 900px
- padding: 0 24px

### H1
- font-size: 100.8px
- font-weight: 760
- line-height: 88.704px
- color: rgb(255, 255, 255)
- letter-spacing: -0.03em (approx)
- max-width: 800px
- margin: 0 auto

### Subtitle Paragraph
- font-size: 18px
- line-height: 28px
- color: rgba(247, 247, 242, 0.72)
- max-width: 560px
- margin: 24px auto 0

### Hero Actions
- display: flex
- gap: 16px
- justify-content: center
- margin-top: 40px

### Button "Book a Strategy Call" (.btn-3d)
- Same as Navbar CTA but slightly larger: padding 0 28px, height 52px, font-size 14.4px

### Link "Watch the Work" (ghost button)
- padding: 0 28px
- height: 52px
- border-radius: 16px
- border: 1px solid rgba(247, 247, 242, 0.2)
- color: #f7f7f2
- font-size: 14.4px
- font-weight: 780
- display: flex
- align-items: center
- gap: 8px
- transition: border-color 0.2s, background 0.2s

### Background Overlays
- `.hero-bg-shade`: radial-gradient(at 50% 34%, rgba(255,255,255,0.16), rgba(255,255,255,0) 45%), linear-gradient(rgba(0,0,0,0.46), rgba(0,0,0,0.94) 90%)
- `.hero-screen-shade`: radial-gradient(88% 68% at 50% 4%, rgba(0,0,0,0.42), rgba(0,0,0,0.98) 78%), linear-gradient(rgba(0,0,0,0.94), rgba(0,0,0,0.55) 48%, rgba(0,0,0,0.98))
- `.hero-grid`: background-image: linear-gradient(90deg, rgba(255,255,255,0.094) 1px, rgba(0,0,0,0) 1px)
- `.hero-wave`: background-image: linear-gradient(90deg, rgba(255,255,255,0.027) 1px, rgba(0,0,0,0) 1px)

## States & Behaviors

### Background video
- **Trigger:** Time-driven (autoplay)
- **Behavior:** Video plays once (not looped), muted. After playback ends, shows last frame
- **Fallback:** hero-video-still.webp shown behind video

### Hover states
- **Watch the Work link:** border-color → rgba(247,247,242,0.4), background → rgba(247,247,242,0.06)
- **Book a Strategy Call button:** translateY(-1px), shadow adjusts

## Text Content (verbatim)
- H1: "Meet the brand people remember." (line break after "brand")
- Subtitle: "Strategy, production, and monthly storytelling for brands that need attention to turn into trust."
- Button: "Book a Strategy Call"
- Link: "Watch the Work"

## Assets
- Background image: `public/images/hero-video-still.webp`
- Background video: `public/videos/hero-light-flow.mp4`

## Responsive Behavior
- **Desktop (1440px):** H1 at 100.8px, centered with max-width 800px
- **Tablet (768px):** H1 ~60px, subtitle stacks below
- **Mobile (390px):** H1 ~40px, buttons stack vertically
- **Breakpoint:** layout adjusts at ~768px and ~480px
