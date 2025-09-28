# Skill-Lab Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern EdTech platforms like Linear (clean, professional) and Notion (approachable, structured) to create a trustworthy learning platform that balances professionalism with accessibility.

## Core Design Elements

### A. Color Palette
**Primary Colors:**
- Brand Primary: 215 77% 35% (deep blue - professional, trustworthy)
- Brand Secondary: 211 100% 50% (bright blue - engaging, modern)
- Brand Accent: 38 81% 62% (warm orange - sparingly used for CTAs)

**Supporting Colors:**
- Dark Text: 220 9% 20% 
- Light Background: 210 17% 98%
- Gray Text: 215 14% 46%
- White: 0 0% 100%

### B. Typography
**Font Stack:** Poppins (via Google Fonts CDN)
- Headings: 600-700 weight, sizes from text-xl to text-6xl
- Body text: 400-500 weight, text-base to text-lg
- Buttons/CTAs: 600-700 weight

### C. Layout System
**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 20
- Component padding: p-6, p-8
- Section spacing: py-20
- Container margins: mx-auto with px-6
- Grid gaps: gap-8, gap-12

### D. Component Library

**Navigation:**
- Sticky header with logo integration
- Horizontal navigation with hover states
- Mobile-responsive menu
- Prominent CTA button in navigation

**Hero Section:**
- Large typography with split messaging
- Two-button CTA pattern (primary + secondary)
- Centered layout with generous padding
- Clean, text-focused approach (no large hero image)

**Content Sections:**
- Card-based layouts with subtle shadows
- 3-column grid for features/benefits
- Rounded corners (rounded-lg, rounded-xl)
- Hover effects with subtle transforms

**Forms & Interactions:**
- Modal overlays for course details
- Form validation with clear feedback
- Smooth transitions (duration-300)
- Hover states with color transitions

**Pricing Cards:**
- Border variations for emphasis
- "Most Popular" badge treatment
- Clear hierarchy with large pricing display
- Consistent button styling

### E. Visual Treatments

**Cards & Containers:**
- Subtle shadows (shadow-lg, shadow-2xl on hover)
- White backgrounds on light gray base
- Gentle hover transforms (-translate-y-1)

**Buttons:**
- Primary: Brand secondary with white text
- Secondary: Gray background with dark text
- Accent: Brand accent for special CTAs
- Consistent padding and rounded corners

**Icons:**
- SVG icons from Heroicons or similar
- Consistent sizing (24px, 40px)
- Used in circular containers for features

## Images
No large hero image required. The design focuses on clean typography and structured content. Any supporting images should be:
- Course thumbnails in card layouts
- Small icon illustrations for features
- Team photos in about/testimonials sections
- Logo integration throughout the interface

## Key Design Principles
1. **Clarity over complexity** - Clean, scannable layouts
2. **Progressive disclosure** - Modal details for courses
3. **Trust signals** - Professional color scheme and typography
4. **Accessibility** - High contrast, readable text sizes
5. **Mobile-first** - Responsive grid systems and navigation