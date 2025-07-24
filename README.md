# Pixel Perfection Portfolio

A modern, responsive developer portfolio showcasing the work, skills, and experience of **Abdullah Bajwa**, built with Vite, React, TypeScript, Tailwind CSS, and shadcn-ui.

---

## 🚀 Live Demo
[View the live site →] [https://abdullah007bajwa.github.io/Portfolio/]

## 🎯 Project Highlights

- **Blazing Fast**: Developed with Vite for instant hot-reload and optimized builds.
- **TypeScript**: Full type safety across components and hooks.
- **shadcn-ui**: Accessible, themeable UI building blocks (Buttons, Cards, Tabs, Toasts).
- **Tailwind CSS**: Utility-first styling with a custom theme and gradient accents.
- **3D Hero Section**: Interactive Three.js/React-Three-Fiber scene
- **Responsive Design**: Mobile-first layout with a clean two-column desktop grid.
- **Dark & Light Themes**: System and manual theme switcher with persistent storage.

## 🔧 Tech Stack

- **Framework**: React 18 + Vite 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 + shadcn-ui components
- **3D Graphics**: react-three-fiber + drei + Three.js
- **Data Fetching**: React Query
- **Routing**: React Router DOM
- **Animations & Transitions**: Framer Motion (built into shadcn-ui)
- **Icons**: lucide-react

## 🗂️ Project Structure

```
public/                  # Static assets (3D model, images)
src/
├─ assets/               # Media & GLTF models
├─ components/           # React components & UI library wrappers
│  ├─ Hero.tsx           # 3D hero section
│  ├─ About.tsx          # About me with tabs
│  ├─ Projects.tsx       # Featured projects grid + modal
│  ├─ Contact.tsx        # Contact info & form with validation
│  └─ ...                # Header, Footer, ThemeProvider, etc.
├─ hooks/                # Custom hooks (scroll spy, theme, window size)
├─ lib/                  # Utility functions (cn, merge classes)
├─ pages/                # If using a pages directory (next-style)
├─ App.tsx               # Root application wrapper
├─ main.tsx              # Vite entrypoint
├─ index.css             # Tailwind & custom CSS
├─ tailwind.config.ts    # Tailwind theme & plugins
└─ vite.config.ts        # Vite configuration with componentTagger
```

## 💻 Getting Started

### Prerequisites
- Node.js >= v18
- pnpm (recommended) or npm/yarn

### Install & Run Locally

```bash
git clone https://github.com/Abdullah007bajwa/Portfolio-
cd Portfolio-
pm install # or pnpm install
npm run dev # or pnpm dev
```

Open http://localhost:5173 to explore the site locally.

### Build & Preview

```bash
npm run build
npm run preview
```

## 📦 Deployment

This portfolio is production–ready and can be deployed to any static host:

- **Vercel**: Instant deployments with `vercel` CLI
- **Netlify**: Drag-and-drop `dist/` folder or connect Git
- **GitHub Pages**: Serve `dist/` from the `gh-pages` branch

## 🎨 Customization

- **Tailwind Theme**: Tweak colors, fonts, and gradients in `tailwind.config.ts` and `index.css` variables.
- **Add Projects**: Edit `src/components/Projects.tsx` to add new entries with `tags`, `categories`, and demo links.
- **3D Model**: Replace `/public/comic_drone.glb` and update `Hero.tsx` for a different scene.

## 🤝 Contributing

Contributions and feedback are welcome!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/awesome`)
3. Commit your changes (`git commit -m "feat: add awesome feature"`)
4. Push to your branch (`git push origin feature/awesome`)
5. Open a Pull Request

---

&copy; 2024 Abdullah Bajwa · [GitHub](https://github.com/Abdullah007bajwa) · [LinkedIn](https://www.linkedin.com/in/abdullah--bajwa/)
