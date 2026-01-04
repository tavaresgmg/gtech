# Session Plan - Astro Migration Phase 1

**Linked Item**: FEAT-005, FEAT-006

## Definition of Ready (DoR)
- [x] Brainstorming complete
- [x] Roadmap updated with Astro goals
- [x] Product analysis done (Hausly, PixNoZap, Viajadoras)

## Steps
- [ ] **Step 1: Scaffolding**
    - [ ] Create `astro` project structure within the current directory.
    - [ ] Install necessary dependencies (Tailwind, Lucide-React/Icons).
- [ ] **Step 2: Core Components**
    - [ ] Create `Layout.astro` (Head, SEO, Fonts).
    - [ ] Create `Navigation.astro` (M3 style).
    - [ ] Create `Hero.astro` (Dark Premium).
- [ ] **Step 3: Content Structure**
    - [ ] Setup `src/content/products/` for dynamic product data.
    - [ ] Create Markdown files for each product with refined descriptions.
- [ ] **Step 4: Styling Integration**
    - [ ] Migrate `style.css` logic to Tailwind/Config.
    - [ ] Implement M3 Dark Palette.

## Definition of Done (DoD)
- [ ] Astro project is running locally (`npm run dev`).
- [ ] Hero and Navigation are migrated and look "foda".
- [ ] Dynamic content is being pulled from Content Collections.
- [ ] Performance check (Basic Lighthouse).