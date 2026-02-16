# replit.md

## Overview

This is a personal portfolio website for a web developer named João Dias. It's a single-page application (SPA) built with React and styled with a dark theme. The site features sections for Hero, About, Skills, Projects, Experience, and Contact — all with smooth scrolling navigation and animations. The content is entirely static (hardcoded in constants), so no database is needed.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React with TypeScript, bundled via Vite
- **Routing**: Wouter (lightweight React router) — single route for the portfolio page, plus a 404 fallback
- **Styling**: Tailwind CSS with CSS variables for theming (dark theme by default), using shadcn/ui component library (new-york style)
- **Animations**: Framer Motion for scroll-triggered animations and transitions
- **Smooth Scrolling**: react-scroll for anchor-based navigation within the single page
- **Forms**: react-hook-form with Zod validation (contact form)
- **State Management**: TanStack React Query (configured but mostly unused since data is static)
- **Fonts**: Inter (body) and Outfit (headings) loaded from Google Fonts

### Project Structure
```
client/           → React frontend
  src/
    components/   → Custom components (Navbar, ProjectCard, etc.)
    components/ui/→ shadcn/ui primitives
    hooks/        → Custom React hooks
    lib/          → Utilities, constants, query client
    pages/        → Page components (Portfolio, NotFound)
attached_assets/  → Reference documents and assets
```

### Key Design Decisions
1. **Static data over API calls**: All portfolio content (profile, skills, projects, experience) is defined in `client/src/lib/constants.ts`.
2. **Frontend-only**: No backend server — Vite serves the app directly in development and the built output is static HTML/JS/CSS.
3. **Portuguese language content**: The UI text is in Portuguese (Brazilian), matching the user's preference.
4. **Dark theme only**: The color scheme uses deep blues and purples with no light mode toggle.

### Build & Run
- Development: `npx vite --host 0.0.0.0 --port 5000` (runs on port 5000)
- Build: `npm run build` — Builds client with Vite into `dist/`
- TypeScript check: `npm run check`

## External Dependencies

### UI Component Libraries
- **shadcn/ui**: Full suite of Radix UI-based components with Tailwind styling
- **Framer Motion**: Animation library for scroll animations and transitions
- **react-scroll**: Smooth scrolling for single-page navigation
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component (available but not prominently used)

### Form & Validation
- **react-hook-form**: Form state management
- **Zod**: Schema validation
- **@hookform/resolvers**: Zod resolver for react-hook-form

### Build Tools
- **Vite**: Frontend bundler with React plugin
- **TypeScript**: Type checking

### Fonts (CDN)
- Google Fonts: Inter, Outfit, DM Sans, Fira Code, Geist Mono, Architects Daughter