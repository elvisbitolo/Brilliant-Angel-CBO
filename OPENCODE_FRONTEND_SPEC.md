# Brilliant Angels Frontend Build Handoff

## 1. Source of Truth

This handoff is grounded in the current repository state and the existing frontend assets already available in the workspace.

The visible project structure shows:

- a Next.js frontend
- a logo image
- a header area
- a hero section
- image assets for the school, gallery, and team
- route pages for `about`, `academics`, `gallery`, and `contacts`

> The PDF mentioned in the request was not available in the workspace at the time of inspection, so the implementation direction below stays limited to what is directly visible in the current codebase and assets.

---

## 2. Current Project Intent

The existing site is clearly intended to represent:

- `Brilliant Angels Community-Based Organisation`
- a school/community-centered identity
- a credible public-facing frontend for families, supporters, and partners

The primary objective is to complete the remaining frontend structure and make the existing design feel stable, polished, and responsive.

---

## 3. What the Current Code Already Shows

### Existing UI elements

- Header with school logo and name
- Navbar with multiple navigation links
- Hero section with school message and calls to action
- Public image assets already stored in the project

### Existing implementation observations

The current codebase already gives a strong direction for the site’s positioning:

- the hero speaks to education, hope, and opportunity
- the branding is community and child-centered
- the school is associated with Nairobi and Githogoro
- the existing assets suggest a real-school, real-community mission rather than a generic business landing page

---

## 4. What Must Be Corrected Before Further Development

These are the concrete frontend corrections that must be addressed first.

### 1. Navigation paths must be fixed

The current navbar uses invalid paths such as `@/app/...`.

These must be replaced with proper route values such as:

- `/about`
- `/academics`
- `/gallery`
- `/contacts`

### 2. The layout structure must be fixed

The `Header` component is currently rendered outside the main layout body structure.

In the Next.js App Router, the header must be placed inside the returned layout body so that the page renders correctly and consistently.

### 3. Empty pages must be built

The following pages are currently empty and need to be implemented:

- `src/app/about/page.js`
- `src/app/academics/page.js`
- `src/app/contacts/page.js`

### 4. Gallery implementation must be cleaned up

The current gallery code needs proper image sizing, captions, and reliable rendering.

It should use:

- responsive layout
- valid image source handling
- `alt` text
- a clean card/grid presentation

### 5. Contact area must be completed

The `Contacts` component is empty and must be replaced with a proper contact view.

---

## 5. Recommended Frontend Structure

The site should remain a simple, responsive frontend with these core screens:

### Home page

- hero section with school identity and mission
- a clear headline describing the school and its purpose
- strong call-to-action buttons
- simple supporting content around education and community impact

### About page

- organization background
- mission and community-driven purpose
- a short explanation of why the school exists

### Academics page

- school learning focus
- educational values
- student-support style messaging

### Gallery page

- a responsive collection of real school/community images
- captions and proper visual layout

### Contacts page

- show only the phone number as the visible contact detail
- make the phone number a clickable WhatsApp CTA link
- use a direct, simple layout focused on quick communication
- avoid adding unnecessary contact fields unless the source PDF clearly requires them

---

## 6. Visual and UX Direction

The visual direction should remain consistent with the current codebase and assets.

### Visual style

- clean and professional
- trustworthy and warm
- child-centered but not childish
- calm, modern, and easy to read

### UX goals

- visitors should immediately understand the school identity
- the navbar should clearly guide them through the site
- the hero section should remain visually striking and readable
- the page should feel stable on mobile, tablet, and desktop

---

## 7. Responsive Requirements

The frontend must work across all major screen sizes.

### Mobile

- header content must not overflow
- navigation must be compact and readable
- hero text must wrap cleanly
- buttons must stack sensibly

### Tablet

- content should stay centered and balanced
- cards should reflow cleanly
- gallery should move to a multi-column grid without breaking

### Desktop

- images and sections should use the available space cleanly
- header and navigation should feel spacious but not empty
- the layout should preserve a professional school website tone

---

## 8. Build Priorities for OpenCode

OpenCode should complete the implementation in this order:

1. Fix the broken navigation and route structure.
2. Repair the root layout so the `Header` renders in the correct place.
3. Build the empty `about`, `academics`, and `contacts` pages.
4. Clean up the gallery section and make it responsive.
5. Improve spacing, typography, and page consistency.
6. Ensure all pages remain polished on small screens.

---

## 9. Final Implementation Constraint

The page should remain a frontend-only build using the current codebase and asset set.

No additional complexity should be introduced unless it is required to complete the visible frontend structure.

The final result should feel like a real school website that reflects the existing logo, photographs, and community-oriented brand already present in the project.


---

## 8. Required Code Fixes for OpenCode

OpenCode should make the following corrections first:

### High priority fixes

1. Fix the `Navbar` href values.
   - Replace broken `@/app/...` links with the correct route strings.

2. Fix `src/app/layout.js` so the layout is valid.
   - Render `<Header />` inside the root layout body structure.

3. Implement all still-empty pages.
   - `about/page.js`
   - `academics/page.js`
   - `contacts/page.js`

4. Correct the `Gallery` component.
   - Add `width`, `height`, `alt`, and responsive layouts.

5. Replace empty `Contacts` component with a proper section.

### Medium priority improvements

1. Improve typography and spacing across the site
2. Add mobile-friendly navigation behavior
3. Normalize button and card styling
4. Make sure no layout overflows occur at small widths

---

## 9. Design and Content Direction

### Core school message

The brand should communicate:

- quality education
- hope and opportunity
- child-centered support
- a community-based mission

### Suggested messaging tone

Use warm, respectful, and professional language.

Example tone:

- “Empowering every child, inspiring every dream.”
- “A community school dedicated to education, dignity, and opportunity.”
- “Helping children grow into confident, capable future leaders.”

---

## 10. Technical Implementation Notes

### Stack

- Next.js App Router
- React components
- CSS Modules for component-scoped styling
- Public folder for images

### Best practices

- Prefer semantic HTML
- Use accessible color contrast
- Use responsive CSS rather than hard-coded desktop-only spacing
- Avoid unnecessary dependencies
- Keep the code simple and maintainable

### Accessibility expectations

- All interactive elements should be keyboard accessible
- Links and buttons must have clear labels
- Images require descriptive `alt` text
- Layout should remain readable under zoom and smaller screens

---

## 11. Acceptance Criteria

The frontend is considered complete when:

- The homepage looks polished and intentional
- The header and navbar work correctly
- The about, academics, gallery, and contacts pages are implemented
- All navigation routes work properly
- The design is responsive across mobile, tablet, and desktop
- The site uses the current school assets and brand tone correctly
- No broken links or invalid route paths remain
- Text and images remain cleanly aligned at all screen sizes

---

## 12. Final Instruction to OpenCode

Please treat this project as a frontend-only implementation task.

Your job is to:

1. fix the broken layout and navigation structure,
2. complete the missing pages,
3. improve the styling system for consistency and responsiveness,
4. build a polished, modern school website,
5. keep the implementation clean, maintainable, and mobile-first.

Use the existing assets already in the `public` directory where possible.

Do not add unnecessary complexity. Focus on a clean, professional, responsive frontend experience that matches the mission of Brilliant Angels Community School.
