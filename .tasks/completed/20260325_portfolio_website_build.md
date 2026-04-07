# Task: Build Portfolio Website (Single HTML File)

## Objective
Build a stunning single-page portfolio for Akash Sareen using HTML + CSS + Vanilla JS with Three.js, GSAP, and EmailJS.

## Output File
`/Users/akashsareen/IdeaProjects/UIProjects/portfolio_v1/portfolio.html`

## TODO

### Setup & Structure
- [ ] Create `portfolio.html` base shell with all CDN imports
- [ ] Implement global CSS (design tokens, typography, custom cursor, scrollbar)
- [ ] Loading screen (`INITIALIZING SYSTEM...` progress bar)

### Navigation
- [ ] Fixed navbar with `AS_` logo and nav links
- [ ] Frosted darkening on scroll
- [ ] Mobile hamburger menu overlay

### Section 1: Hero
- [ ] Three.js particle field (3000+ points, toroid/sphere shape)
- [ ] Mouse-reactive particle warping
- [ ] Faint grid horizon plane
- [ ] Glitch animation on `AKASH SAREEN` text
- [ ] Typing cursor on subtitle
- [ ] CTA button `[ VIEW MY WORK ]` with corner-inward border animation
- [ ] Scroll indicator
- [ ] Scroll-out: particle sphere implosion

### Section 2: About
- [ ] Three.js wireframe geometry background (icosphere/dodecahedron)
- [ ] Dark overlay panel
- [ ] Asymmetric layout (photo left, text right)
- [ ] Glowing ruler/scale left border
- [ ] Real bio text from profile.service.ts
- [ ] Stat blocks with counting animation ( Years, Projects, Students)

### Section 3: Skills
- [ ] Three.js honeycomb hex grid in 3D space
- [ ] Hover: tile rises + glows
- [ ] Real skills from profile.service.ts (Java, Spring Boot, Angular, etc.)
- [ ] Noise texture overlay
- [ ] Mobile fallback: 2-col grid

### Section 4: Projects
- [ ] Terminal window-style cards (traffic-light dots, status bar)
- [ ] 3D tilt on hover (CSS perspective)
- [ ] Cyan glow behind card on hover
- [ ] Staggered 2-col grid (first card full-width)
- [ ] Real projects from profile.service.ts with live/github links
- [ ] Three.js flowing wave mesh background (dark teal)

### Section 5: Experience
- [ ] SVG vertical timeline with draw-down animation
- [ ] Scroll-triggered node expansion
- [ ] Real experience from profile.service.ts (Goldman Sachs, Barclays, Kloudspot, Nuclei)
- [ ] Scanline CRT overlay CSS
- [ ] Section label behind timeline

### Section 6: Contact
- [ ] Three.js radar sweep animation
- [ ] Terminal-styled form (NAME, EMAIL, COMPANY, MESSAGE)
- [ ] Floating label on focus
- [ ] `[ SEND SIGNAL ]` with pulse animation
- [ ] EmailJS wiring + success/error typed-out messages
- [ ] HTML comments for EmailJS setup

### Polish & Performance
- [ ] IntersectionObserver to pause off-screen Three.js scenes
- [ ] GSAP ScrollTrigger for section entrance animations (fade + translateY 30px)
- [ ] scroll-behavior: smooth
- [ ] Responsive / mobile layout
- [ ] Browser test / visual verification

## Status
- [ ] In Progress
