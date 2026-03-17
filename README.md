# Developer Portfolio (Next.js + TypeScript + Tailwind)

A clean, modern, and fully responsive personal portfolio built with **Next.js (App Router)**, **TypeScript**,**React 19**, **Tailwind CSS v4**, and **Framer Motion**.  
It ships with a **persisted Dark Mode** (mobile & desktop), custom **color tokens**, and an accessible UI.

---

## ✨ Features

- **Single Page Architecture:** Smooth scroll navigation with an active section observer (Scroll Spy).
- **Dark Mode:** System preference detection with `localStorage` ersistence and an anti-flicker initialization script. 
- **Tailwind v4 Engine:** Leverages the new `@theme` block for modern CSS variable-based design tokens.
- **Responsive Layout:** Mobile-optimized navigation with an animated drawer and a glassmorphism sticky header.
- **Accessibility:** Semantic HTML, ARIA labels, and `focus-visible` states for keyboard navigation.
- **Micro-interactions:** Staggered list reveals, hover-reactive cards, and fluid section transitions via Framer Motion.
- **Data-Driven:** Centralized content management for projects, skills, and professional experience.

---

## 🧱 Tech Stack

- **Framework:** Next.js 15 (App Router) & React 19
- **Styling:** Tailwind CSS v4 (with PostCSS)
- **Animation:** Framer Motion (Optimized variants)
- **Icons:** Lucide React & React Icons
- **Type Safety:** TypeScript strict mode
- **Fonts:** IBM Plex Sans (Body) & Space Grotesk (Display) via `next/font`

---

## 📁 Project Structure

```txt
    ├── README.md
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tsconfig.json
    └── src/
        ├── app/
        │   ├── globals.css           # Tailwind v4 setup + custom design tokens
        │   ├── layout.tsx            # Root layout with Theme Script (Anti-Flicker)
        │   ├── not-found.tsx         # Custom 404 page (Hyperspace theme)
        │   └── page.tsx              # Home (Single Page Assemble)
        ├── components/
        │   ├── features/             # Business components (Page Sections)
        │   │   ├── about/
        │   │   ├── contact/
        │   │   ├── experience/
        │   │   ├── hero/
        │   │   ├── projects/         # Project listing and cards
        │   │   └── skills/           # Technical toolkit bento-grid
        │   ├── layout/               # Structural components
        │   │   ├── Footer.tsx
        │   │   ├── Header.tsx        # Fixed Navbar with Scroll Spy
        │   │   └── StickyBio.tsx     # Dynamic sidebar widget (Desktop)
        │   └── ui/                   # Base UI components (Design System)
        │       ├── Button.tsx
        │       ├── Container.tsx
        │       ├── Section.tsx
        │       ├── SectionHeader.tsx
        │       └── ThemeToggle.tsx
        ├── hooks/
        │   ├── useActiveSection.ts   # Scroll observer for active navigation
        │   └── useScrollSpy.ts       # Hook for position monitoring
        ├── lib/
        │   ├── motion.ts             # Global Framer Motion variants and presets
        │   ├── utils.ts              # 'cn' helper for Tailwind Merge
        │   └── data/                 # Dynamic content and constants
        │       ├── experiences.ts
        │       ├── projects.ts
        │       └── skills.ts
        └── types/
            ├── global.d.ts
            └── index.ts              # Global interfaces (Project, Experience, Skill)
```
---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+ (LTS recommended)
- npm / pnpm / yarn

### Install
```bash
npm install
```

### Development
```bash
npm run dev
# open http://localhost:3000
```

### Production
```bash
npm run build
npm start
```

### Lint (if configured)
```bash
npm run lint
```

---

## 🔤 Typography & Design Tokens

The project uses two primary fonts configured via CSS variables in layout.tsx:
- **Body:** `IBM Plex Sans (--font-body)`
- **Display:** `Space Grotesk (--font-display)`

The colors and tokens are managed within the Tailwind v4 `@theme` block in `globals.css:`

```css
@theme inline {
  --color-bg: var(--bg);
  --color-surface: var(--surface);
  --color-primary: var(--primary);
  /* ... */
}
```

---

## 🌙 Dark Mode

- **Anti-Flicker**: An inline script in `app/layout.tsx` detects the saved theme or system preference before hydration to prevent a "white flash".
- **ThemeToggle:** A client-side component that switches the `.dark` class on the `<html>` element.

---

## 🖼️ Images

- Place all images in`public/images`
- Access them using absolute paths:
```tsx
import Image from "next/image";

<Image src="/images/project-name.png" alt="Project Name" width={1200} height={630} />
```

---

## 📏 Commit Convention

This project follows **Conventional Commits**:
```
feat: A new feature
fix(about): A bug fix
style(portfolio): Visual changes (CSS, layout) without logic changes
refactor: Code changes that neither fix a bug nor add a feature
chore: Maintenance tasks (dependencies, config)
```

---

## 📄 License

MIT — feel free to use and adapt.

---

## 👋 Contact

- GitHub: https://github.com/wmsalves
- LinkedIn: https://linkedin.com/in/wmsalves
- Email: dev.wmsalves@gmail.com
