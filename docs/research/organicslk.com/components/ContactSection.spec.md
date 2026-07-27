# ContactSection Specification

## Overview
- **Target file:** `src/components/ContactSection.tsx`
- **Interaction model:** Static (form with frontend validation)

## DOM Structure
```
section#contact.contact-section
  div (container, flex row)
    div.contact-info (left)
      p.section-label "Get in Touch"
      h2 "Let's build something unforgettable together."
      p (description)
      div.contact-details
        a (phone 1) "tel:+94777363074"
        a (phone 2) "tel:+94716685171"
        a (email) "mailto:info@organicslk.com"
        div (address)
    div.contact-form (right)
      form
        div.field
          label "Your Name"
          input (text)
        div.field
          label "Brand / Company Name"
          input (text)
        div.field
          label "Email Address"
          input (email)
        div.field
          label "Phone Number"
          input (tel)
        div.field
          label "Which package interests you?"
          select
            option "Select a package" (disabled, selected)
            option "Standard"
            option "Personal Brand"
            option "Custom"
            option "Not sure yet"
        div.field
          label "What are you looking to achieve?"
          textarea (placeholder text)
        button.btn-3d "Send Message"
```

## Computed Styles

### Section
- padding: 120px 72px
- background: radial-gradient(circle at 18% 40%, rgba(255,255,255,0.13), rgba(0,0,0,0) 28%)
- max-width: 1440px, margin: 0 auto

### Layout
- display: flex
- gap: 80px

### Left column (contact-info)
- flex: 0 0 400px

### H2
- font-size: 79.2px, font-weight: 850, line-height: 72.86px, color: #f7f7f2

### Contact details
- margin-top: 40px, display: flex, flex-direction: column, gap: 16px
- a: font-size: 16px, color: #f7f7f2, text-decoration: none
- address: font-size: 16px, color: rgba(247,247,242,0.66)

### Right column (form)
- flex: 1

### Form fields
- display: flex, flex-direction: column, gap: 16px

### Input/Textarea
- background: rgba(3,3,3,0.72)
- color: #f7f7f2
- padding: 14px 15px
- border-radius: 16px
- width: 100%
- font-size: 16px
- border: 1px solid rgba(247,247,242,0.08)
- transition: border-color 0.18s, background 0.18s
- outline: none

### Input focus
- border-color: rgba(247,247,242,0.3)
- background: rgba(3,3,3,0.85)

### Select
- Same as input styling + custom arrow

### Label
- font-size: 13px, font-weight: 500, color: rgba(247,247,242,0.56), margin-bottom: 6px

### Submit button
- btn-3d style, full width, margin-top: 8px

## Text Content (verbatim)
- Label: "Get in Touch"
- H2: "Let's build something unforgettable together."
- Description: "Tell us about your brand and Organic will shape a content strategy around your goals. Expect a message within 24 hours."
- Phones: "+94 77 736 3074", "+94 71 668 5171"
- Email: "info@organicslk.com"
- Address: "497 Negombo-Colombo Main Rd, Peliyagoda 11300"
- Button: "Send Message"

## Responsive Behavior
- **Desktop:** Side by side
- **Tablet/Mobile:** Stacked, info on top
- **Breakpoint:** ~768px
