# Next.js Product Landing Page

A modern, production-ready product landing page built with **Next.js 15**, featuring multi-language support, Redux Toolkit state management, dark mode, and comprehensive SEO optimization.

## 🚀 Features

### Core Functionality

- **Multi-language Support:** English and Turkish with URL-based routing (`/en`, `/tr`)
- **Redux Toolkit State Management:** Global favorites system with persistent state
- **Static Site Generation (SSG):** Optimized for performance and SEO
- **TypeScript:** Full type safety throughout the application
- **TailwindCSS:** Modern, utility-first styling
- **shadcn/ui Components:** Beautiful, accessible UI components

### SEO & Performance

- **Dynamic Metadata:** OpenGraph and Twitter cards for social sharing
- **Structured Data:** JSON-LD format compatible with schema.org
- **Image Optimization:** Next.js Image component with WebP/AVIF support
- **Code Splitting:** Automatic route-based code splitting
- **Performance Optimizations:** CSS optimization, compression, and more

### User Experience

- **Dark Mode Support:** Built-in theme switching capability
- **Animations:** Framer Motion for smooth, engaging interactions
- **Responsive Design:** Mobile-first approach with TailwindCSS
- **Accessibility:** ARIA labels and semantic HTML structure

### Development Features

- **Atomic Design:** Organized component architecture
- **ESLint & Prettier:** Code quality and formatting
- **Testing Ready:** Jest + React Testing Library setup
- **Error Pages:** Custom 404 and 500 error pages
- **Sitemap & Robots:** SEO helper files included

## 🛠️ Tech Stack

- **Framework:** Next.js 15.4.5
- **Language:** TypeScript 5
- **Styling:** TailwindCSS 4
- **State Management:** Redux Toolkit
- **UI Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Testing:** React Testing Library + Jest
- **Linting:** ESLint + Prettier

## 📁 Directory Structure

```
mashoor/
├── components.json          # (shadcn/ui components manifest)
├── eslint.config.mjs
├── middleware.ts
├── next-env.d.ts
├── next.config.ts
├── node_modules/
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── public/
│   └── images/              # Product, hero, and avatar images
│   └── favicon.ico
│   └── robots.txt
│   └── sitemap.xml
├── README.md
├── src/
│   ├── app/
│   │   └── [lang]/          # Dynamic language routes
│   │       ├── layout.tsx   # Language-specific layout
│   │       └── page.tsx     # Landing page
│   ├── components/
│   │   ├── atoms/
│   │   ├── molecules/
│   │   ├── organisms/
│   │   └── ui/              # shadcn/ui components
│   ├── data/                # Mock JSON data (simulating CMS)
│   │   ├── products.json
│   │   ├── hero.json
│   │   ├── content.json
│   │   └── seo.json
│   ├── features/            # Feature-specific logic
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilities and data functions
│   ├── store/               # Redux store and slices
│   └── types/               # TypeScript type definitions
├── tailwind.config.js
├── tsconfig.json
└── .prettierrc / .prettierignore / .gitignore
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

```bash
   git clone <repository-url>
   cd mashoor
````

2. **Install dependencies**(we need --legacy-peer-deps for testing library)

```bash
   npm install --legacy-peer-deps
   # or
   yarn install --legacy-peer-deps
   # or
   pnpm install --legacy-peer-deps
   # or
   bun install --legacy-peer-deps
```

3. **Run the development server**

```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
```

4. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000)

**Note:**
This project demonstrates modern web development practices with Next.js 15, TypeScript, and comprehensive SEO optimization.
For demo/testing only – not for production use without adaptation or permission.
