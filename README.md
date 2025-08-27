# Developer Portfolio (Next.js + TypeScript + Tailwind)

A clean, modern, and fully responsive personal portfolio built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.  
It ships with a **persisted Dark Mode** (mobile & desktop), **brand color tokens**, and an accessible UI.

---

## ✨ Features

- **Pages:** Home, About, Skills (resume), Portfolio, Contact  
- **Dark Mode:** toggle with `localStorage` and `prefers-color-scheme` fallback  
- **Brand Tokens:** consistent purple palette via Tailwind v4 `@theme`  
- **Responsive Layout:** desktop sidebar + mobile topbar with animated drawer  
- **Accessibility:** keyboard-focus styles, ARIA labels, ESC/backdrop to close drawer  
- **Animations:** subtle section reveals with Framer Motion  
- **TypeScript-first:** typed data for skills and projects  
- **Conventional Commits:** simple, consistent commit history

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router), React 18, TypeScript  
- **Styling:** Tailwind CSS **v4**, CSS variables, brand tokens  
- **Animation:** Framer Motion  
- **Icons:** `lucide-react`, `react-icons`  
- **Images:** `next/image` (optimized)  
- **Font:** Google Fonts (Poppins via `next/font`)

---

## 📁 Project Structure

```txt
src/
  app/
    layout.tsx            # Root layout (font, sidebar, theme classes)
    page.tsx              # Home
    about/page.tsx        # About page
    skills/page.tsx       # Skills/Resume page
    portfolio/page.tsx    # Projects page
    contact/page.tsx      # Contact page

  components/
    layout/
      Sidebar.tsx
    sections/
      about/About.tsx
      skills/Skills.tsx
      project/Projects.tsx
      contact/Contact.tsx
      contact/ContactForm.tsx
      contact/ContactSocials.tsx
    ui/
      ThemeToggle.tsx

  lib/
    constants/
      skills.ts           # typed SkillItem[] (languages, frameworks, tools)
      project.ts          # typed Project[] (title, description, link, image, tags)

public/
  images/
    ProfilePhoto.JPG
    BeWear.png
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js **18+** (LTS recommended)
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

## 🔤 Font (Poppins)

**`app/layout.tsx`**
```tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {/* Sidebar + main */}
        {children}
      </body>
    </html>
  );
}
```

**`src/app/globals.css`** (optional global font)
```css
:root { font-family: var(--font-poppins), system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }
```

---

## 🌙 Dark Mode

- The `ThemeToggle` toggles the `dark` class on `<html>`; selection is persisted in `localStorage`.
- Each page uses a **full-width wrapper** with paired colors:
  - `bg-gray-50 dark:bg-gray-950` on the wrapper
  - inner content constrained by `max-w-6xl` (or similar)
- Cards/inputs/buttons include `dark:` variants for text, border, background and focus rings.

Example wrapper:
```tsx
<section className="w-full bg-gray-50 dark:bg-gray-950 transition-colors">
  <div className="max-w-6xl mx-auto px-6 py-16">{/* content */}</div>
</section>
```

---

## 🖼️ Images

- Place files in `public/images`
- Refer with a leading slash:
```tsx
import Image from "next/image";

<Image src="/images/BeWear.png" alt="BeWear" width={1200} height={630} priority />
```

---

## 🔗 Data (Projects & Skills)

**`src/lib/constants/project.ts`**
```ts
export type Project = {
  title: string;
  description: string;
  link: string;
  image?: string;
  tags?: string[];
  slug?: string;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "This portfolio built with Next.js, TypeScript, Tailwind and Framer Motion.",
    link: "https://github.com/wmsalves",
    image: "/images/BeWear.png",
    tags: ["Next.js","Tailwind","Framer Motion"]
  }
];
```

**`src/lib/constants/skills.ts`**  
Grouped by **Languages**, **Frameworks**, **Tools** with a `level` union (`"proficient" | "experienced" | "familiar" | "learning"`).  
Badges render as **Worked**, **Familiar**, **Learning**.

---

## 🧭 Navigation

- **Desktop:** left **Sidebar**  
- **Mobile:** top bar + **animated drawer** (ESC and backdrop close)
- Active links use brand colors and icon pills; focus-visible rings for keyboard users.

---

## ♿ Accessibility

- `focus-visible` rings, labeled icon buttons, ARIA attributes on drawer controls, and good contrast in light/dark modes.

---

## 🧪 Troubleshooting

- **Hydration mismatch / `<script>` inside `<html>`:** don’t inject raw `<script>` under `<html>`.  
  Theme is handled by a client component (`ThemeToggle`) that toggles the `dark` class safely.
- **Light gutters around content:** apply `bg-*` to a full-width wrapper and constrain content inside.
- **Image 404:** image paths must start with `/images/...` when assets live in `public/images`.

---

## 📏 Commit Convention

Use **Conventional Commits**:
```
feat: add skills grid with badges
fix(about): move background to wrapper to avoid light gutters
style(portfolio): apply dark variants to cards and tags
chore: rename contants to constants
```

---

## 📄 License

MIT — feel free to use and adapt.

---

## 👋 Contact

- GitHub: https://github.com/wmsalves
- LinkedIn: https://linkedin.com/in/wmsalves
- Email: dev.wmsalves@gmail.com
