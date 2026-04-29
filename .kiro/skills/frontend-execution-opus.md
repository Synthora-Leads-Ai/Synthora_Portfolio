---
name: frontend-execution-opus
description: Execute frontend systems with strict architectural flow, immersive UI composition, and production-grade implementation. This skill combines Claude Opus 4.7-style structured execution with high-end, distinctive frontend design. Use when building full interfaces, sections, or complete applications.
license: Complete terms in LICENSE.txt
---

This skill enforces a **STRICT execution methodology** inspired by Claude Opus 4.7:

→ Visual-first design thinking  
→ Complete working implementations  
→ Incremental feature expansion  
→ Real 3D/interactive elements  
→ Production-ready code (not mockups)  
→ High-end, non-generic design

It MUST be followed rigorously.

---

# 🎨 VISUAL-FIRST APPROACH (OPUS 4.7 STYLE)

Before writing ANY code, establish visual direction:

1. **Generate Design Concepts** (if image generation available)
   - Create 2-3 visual mockups showing different aesthetic directions
   - Let user choose preferred style
   - Use these as reference for implementation

2. **If No Image Generation:**
   - Describe 2-3 distinct aesthetic directions in detail
   - Get user approval on direction
   - Proceed with chosen aesthetic

**Example Aesthetic Directions:**
- Luxury Glassmorphism + Gold (salon, spa, premium brands)
- Futuristic Neon + Dark (tech, gaming, coaching)
- Brutalist Typography + Bold Colors (agency, portfolio)
- Soft Organic Gradients (wellness, meditation)
- Industrial Dark UI (automotive, construction)

---

# ⚙️ CORE EXECUTION PHILOSOPHY (NON-NEGOTIABLE)

You are not "designing screens".

You are:
→ Building a **living frontend system**
→ Expanding it **section by section**
→ Ensuring **every part is interactive, animated, and production-ready**

Every output must feel like:
- A real shipped product
- A premium experience
- A cohesive system (NOT isolated components)

---

# 🧠 STEP 1 — SYSTEM THINKING + VISUAL DIRECTION

Before writing ANY code, define:

### 1. Visual Direction (CRITICAL)
Choose ONE bold aesthetic and commit:
- Describe it in detail
- Define color palette (specific hex codes)
- Choose typography (specific fonts, NOT defaults)
- Define motion style (smooth/fast, elegant/energetic)

### 2. Interface Structure
Break into sections like a real product:
- Navbar
- Hero
- Feature blocks
- Interactive sections (Gallery, Testimonials, etc.)
- Utility sections (Booking, Forms, Contact)
- Footer

### 3. Flow of Experience
Think in **scroll journey**:
- Entry impact (Hero with WOW factor)
- Progressive engagement (Services, Features)
- Peak interaction moments (3D Gallery, Testimonials)
- Conversion (CTA, Booking)

### 4. Interaction Model
Define:
- What moves? (Parallax, 3D rotations, hover effects)
- What reacts to user input? (Forms, carousels, tilt cards)
- What feels alive? (Animated backgrounds, floating elements)

---

# 🎨 STEP 2 — BOLD AESTHETIC DIRECTION (MANDATORY)

Choose ONE strong direction and COMMIT:

Examples:
- Luxury glassmorphism with gold accents
- Brutalist raw typography
- Futuristic neon + 3D
- Editorial magazine
- Soft organic gradients
- Industrial dark UI

Then enforce it across:
- Typography
- Colors
- Motion
- Layout
- Depth

❌ NEVER mix random styles  
❌ NEVER fall back to generic UI  

---

# 🧱 STEP 3 — LAYERED UI COMPOSITION

Every section must include **depth**:

### Required Layers:
- Background (gradients / textures / atmosphere)
- Mid layer (content)
- Foreground (interactive or decorative elements)

### Add:
- Blur / glass effects
- Shadows & glow
- 3D transforms or parallax
- Overlapping elements

---

# 🎬 STEP 4 — MOTION SYSTEM (CRITICAL)

Motion is NOT optional.

Implement:
- Smooth scrolling (Lenis or equivalent)
- Entrance animations (staggered)
- Hover interactions
- Scroll-triggered reveals
- Physics-based motion where possible

Focus on:
→ One "WOW" animation per section  
→ Not random micro-interactions  

---

# 🧩 STEP 5 — SECTION EXECUTION PATTERN

Each section must follow this structure:

### 1. Concept
What is the purpose of this section?

### 2. Visual Hook
What makes it memorable?

### 3. Interaction
What does the user do here?

### 4. Implementation
Write REAL working code (React preferred)

---

# 🧪 STEP 6 — REAL FEATURES (NO FAKE UI)

Every UI must connect to something real or realistic:

Examples:
- Booking → backend-ready structure
- Gallery → interactive (3D / carousel)
- Testimonials → animated + dynamic feel
- Maps → embedded or simulated
- Dashboards → structured data layout

❌ No static placeholder UI  
❌ No dead buttons  

---

# 🧭 STEP 7 — CONTINUOUS EXPANSION (OPUS 4.7 STYLE)

Never treat output as final. Build in phases:

## Phase 1: Core Foundation
- Complete project setup (Vite, Tailwind, dependencies)
- All basic sections (Hero, Services, Contact, Footer)
- Basic animations and responsive design
- Working forms (frontend only)

## Phase 2: Visual Enhancements
When user asks "add more features" or "enhance it":
1. **3D Gallery Carousel** - Interactive image showcase
2. **Testimonials with 3D Tilt** - Mouse-tracking cards
3. **Location with 3D Map Pin** - Animated marker
4. **Animated Loading Screen** - Brand intro
5. **Floating Action Buttons** - WhatsApp, Call, Scroll-to-top

## Phase 3: Advanced Features
When user requests backend/shop:
1. **Backend Integration** - Real booking system (Supabase/Firebase)
2. **Product Shop** - E-commerce section with cart
3. **Admin Dashboard** - Manage bookings/products
4. **Email Notifications** - Booking confirmations
5. **Analytics** - Track user behavior

## Phase 4: Polish & Optimization
1. **Performance** - Lazy loading, code splitting
2. **SEO** - Meta tags, schema markup
3. **Accessibility** - ARIA labels, keyboard navigation
4. **Testing** - Cross-browser, mobile testing

**CRITICAL:** Always ask "What would you like me to add next?" after completing each phase

---

# 🧬 STEP 8 — CODE QUALITY & TECH STACK

## Required Tech Stack:
- **Framework:** React 18 + Vite (NOT Next.js unless requested)
- **Styling:** Tailwind CSS (custom config with brand colors)
- **Animation:** Framer Motion (for all animations)
- **3D:** Three.js + React Three Fiber + Drei (when needed)
- **Icons:** Lucide React (consistent icon system)
- **Smooth Scroll:** Native CSS or Lenis

## Code Standards:
- **Complete files** (never use "..." or "// rest of code")
- **Modular components** (one component per file)
- **Proper imports** (all dependencies listed)
- **Working forms** (with state management)
- **Responsive** (mobile-first approach)
- **Accessible** (semantic HTML, ARIA when needed)

## File Structure:
```
project-name/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   └── ...
│   ├── config/
│   │   └── siteInfo.js (centralized data)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

# 🎯 STEP 9 — SIGNATURE ELEMENT RULE

Every build must include at least ONE standout element:

## Signature Elements by Type:

**3D Elements (Three.js + React Three Fiber):**
- 3D rotating product/object in hero
- 3D carousel with depth
- Animated 3D map pin
- Floating 3D shapes
- Interactive 3D scene

**Advanced Interactions:**
- Mouse-tracking tilt cards (3D parallax)
- Cursor-reactive particles
- Drag-to-compare sliders
- Physics-based animations
- Scroll-triggered 3D transforms

**Visual Effects:**
- Animated grid backgrounds
- Glowing neon effects
- Glassmorphism with depth
- Gradient animations
- Particle systems

**Choose based on brand:**
- Luxury → Glassmorphism + 3D floating objects
- Tech → Animated grid + neon effects
- Creative → 3D carousel + tilt cards
- Professional → Subtle 3D + smooth animations

This is what makes it unforgettable.

---

# 🚫 HARD RESTRICTIONS

DO NOT:
- Use generic layouts
- Use default fonts (Arial, Inter, Roboto, etc.)
- Create flat/static pages
- Overuse common gradients
- Build "template-looking" UI

---

# ✅ OUTPUT FORMAT (OPUS 4.7 STYLE)

## Initial Build Response:
1. **System Breakdown** (aesthetic, structure, tech stack)
2. **Complete Project Setup** (all config files)
3. **All Core Components** (working code, not snippets)
4. **Installation Instructions**
5. **"What would you like me to add next?"**

## Enhancement Response:
1. **Feature Description** (what's being added)
2. **Complete New Components** (full working code)
3. **Updated App.jsx** (showing integration)
4. **Visual Preview** (describe what user will see)
5. **Next Phase Options** (suggest 3-5 more features)

## Code Style:
- **Complete files** (not snippets with "...")
- **Production-ready** (no TODOs or placeholders)
- **Commented** (explain complex logic)
- **Modular** (separate components)
- **Tested approach** (known to work)

## Communication Style:
- Enthusiastic but professional
- Use emojis for section headers (🎨, ✨, 🚀)
- Clear step-by-step instructions
- Always end with "What's next?" or similar

---

# 🧠 SUMMARY

This skill combines:

### Claude Opus 4.7 Approach:
- Structured execution
- Layered UI building
- Continuous expansion
- Real implementation

### Advanced Frontend Design:
- Bold aesthetics
- High-end motion
- Spatial creativity
- Non-generic visuals

---

# 🚀 FINAL RULE

Every output must make the user feel:
> "This is not a template… this is a product."

If it feels ordinary → it is WRONG.
If it feels alive → it is CORRECT.
