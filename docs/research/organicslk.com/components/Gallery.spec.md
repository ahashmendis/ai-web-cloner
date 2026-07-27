# Gallery Specification

## Overview
- **Target file:** `src/components/Gallery.tsx`
- **Interaction model:** Time-driven (auto-scroll marquee) + click-driven (video modal)

## DOM Structure
```
section#gallery.gallery-section
  div.gallery-viewport (dark gradient bg)
    div.gallery-glow (radial gradient glow effect)
    div (header)
      p.section-label "Gallery"
      h2 "Creators, campaigns, and frames with Organic flare."
      p (description)
    div.gallery-marquee-container
      div.gallery-row (row 1, scrolls left)
        button.gallery-tile × 4 (duplicated for loop)
          img.gallery-tile-media (thumbnail)
          span.gallery-tile-shade (gradient overlay)
          span.play-icon
      div.gallery-row (row 2, scrolls right)
        button.gallery-tile × 4 (duplicated)
      div.gallery-row (row 3, scrolls left, different speed)
        button.gallery-tile × 4 (duplicated)
```

## Computed Styles

### Section
- background: linear-gradient(rgb(3,3,3) 0%, rgb(10,10,9) 50%, rgb(2,2,2) 100%)
- padding: 120px 0
- overflow: hidden

### Gallery Glow
- background: radial-gradient(circle, rgba(255,255,255,0.08), rgba(0,0,0,0) 50%)
- position: absolute, centered

### Gallery Tile
- width: ~280px
- height: ~400px
- border-radius: 20px
- overflow: hidden
- position: relative
- cursor: pointer
- flex-shrink: 0

### Tile Media (img)
- width: 100%, height: 100%
- object-fit: cover
- position: absolute
- top: 0, left: 0

### Tile Shade (gradient overlay)
- background: linear-gradient(rgba(0,0,0,0.06), rgba(0,0,0,0.5)), linear-gradient(90deg, rgba(0,0,0,0.3), rgba(0,0,0,0) 60%)
- position: absolute, inset: 0

### Gallery Row
- display: flex
- gap: 16px
- width: max-content
- & row 1: animation: marquee 40s linear infinite
- & row 2: animation: marquee-reverse 45s linear infinite
- & row 3: animation: marquee 55s linear infinite

## States & Behaviors

### Auto-scroll marquee
- Row 1 scrolls left (40s), Row 2 scrolls right (45s), Row 3 scrolls left (55s)
- Different speeds create parallax feel
- Content duplicated for infinite loop

### Tile hover
- Scale: 1.0 → 1.03
- Transition: transform 0.3s ease

### Tile click → Video modal
- Opens a modal/lightbox playing the full video
- Overlay with close button

## Assets
- Thumbnails: `public/images/gallery/thumbnail{1-12}.webp`
- Videos: `public/videos/gallery/video{1-12}.mp4` + specific ones

## Responsive Behavior
- **Desktop:** 3 rows, tiles ~280px wide
- **Tablet:** 2 rows visible, tiles smaller
- **Mobile:** Single row visible, tiles ~200px wide
