# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Interaction model:** Static

## DOM Structure
```
footer.footer-section
  div (container, grid 4-col)
    div.footer-brand
      img (logo.svg)
      p (tagline)
      div.social-links
        a (Instagram) → external
        a (LinkedIn) → external
    div.footer-contact
      div: strong "Address" + span (address)
      div: strong "Phone" + a × 2
      div: strong "Email" + a
    nav.footer-company
      strong "Company"
      a × 4 (Who We Are, Our Work, How We Work, Packages)
    nav.footer-resources
      strong "Resources"
      a × 4 (Case Studies, Gallery, FAQ, Contact)
  div.footer-bottom
    p "Made in Sri Lanka"
    p "Copyright © 2026 Organic."
    p "A Solution By" a "Opti5 Labs" → external
```

## Computed Styles

### Footer
- background: #030303
- padding: 58px 72px 0
- color: rgba(247,247,242,0.62)
- display: grid
- grid-template-columns: 1.5fr 1fr 1fr 1fr
- gap: 0 57.6px
- position: relative
- overflow: hidden
- width: 100%

### Before pseudo (top gradient line)
- background: radial-gradient(at 50% 0%, rgba(255,255,255,0.08), rgba(0,0,0,0) 34%)
- height: 1px
- position: absolute, top: 0, left: 0, right: 0

### Brand column
- img: height: 40px
- p: font-size: 14px, line-height: 22px, margin-top: 16px, max-width: 300px

### Social links
- display: flex, gap: 16px, margin-top: 20px
- a: color: rgba(247,247,242,0.62), transition: color 0.2s

### Footer nav
- strong: font-size: 14px, font-weight: 600, color: #f7f7f2, display: block, margin-bottom: 16px
- a: font-size: 14px, color: rgba(247,247,242,0.62), text-decoration: none, display: block, padding: 4px 0, transition: color 0.2s
- a:hover: color: #f7f7f2

### Footer bottom
- margin-top: 60px
- padding: 24px 0
- border-top: 1px solid rgba(247,247,242,0.08)
- display: flex
- justify-content: space-between
- font-size: 12px

## Text Content (verbatim)
- Tagline: "Sri Lanka's first organic content marketing agency. Founder-led content systems, cinematic production, and brand stories people remember."
- Social: "Instagram", "LinkedIn"
- Address: "497 Negombo-Colombo Main Rd, Peliyagoda 11300"
- Phones: "+94 77 736 3074", "+94 71 668 5171"
- Email: "info@organicslk.com"
- Company links: Who We Are (#who), Our Work (#work), How We Work (#process), Packages (#packages)
- Resources links: Case Studies (#work), Gallery (#gallery), FAQ (#faq), Contact (#contact)
- Bottom: "Made in Sri Lanka", "Copyright © 2026 Organic.", "A Solution By Opti5 Labs"

## Assets
- Logo: `public/images/logo.svg`
