# replit.md

## Overview

This is a personal portfolio website for a web developer named João. It's a single-page application (SPA) built with React and styled with a dark theme. The site features sections for Hero, About, Skills, Projects, Experience, and Contact — all with smooth scrolling navigation and animations. The content is entirely static (hardcoded in constants), so no database is needed despite the project having some database-related dependencies in the scaffold.

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

### Backend
- **Framework**: Express.js running on Node with TypeScript (tsx)
- **Purpose**: Serves the static frontend in production; proxies through Vite dev server in development
- **API Routes**: A shared routes definition exists in `shared/routes.ts` for profile, projects, skills, experience, and contact endpoints — but these are not currently implemented on the server. All data comes from `client/src/lib/constants.ts` instead.
- **No database is used or needed**. The project scaffolding includes Drizzle ORM and PostgreSQL dependencies, but the portfolio is a static site that reads from hardcoded constants. Do not add a database unless explicitly requested.

### Project Structure
```
client/           → React frontend
  src/
    components/   → Custom components (Navbar, ProjectCard, etc.)
    components/ui/→ shadcn/ui primitives
    hooks/        → Custom React hooks
    lib/          → Utilities, constants, query client
    pages/        → Page components (Portfolio, NotFound)
server/           → Express backend
  index.ts        → Server entry point
  static.ts       → Production static file serving
  vite.ts         → Vite dev server middleware
shared/           → Shared types/schemas between client and server
  routes.ts       → API route definitions (not yet implemented)
  schema.ts       → Zod/Drizzle schemas for data types
attached_assets/  → Reference documents and assets
```

### Key Design Decisions
1. **Static data over API calls**: All portfolio content (profile, skills, projects, experience) is defined in `client/src/lib/constants.ts`. This was chosen because the user explicitly wants a static portfolio site without a database.
2. **Full-stack scaffold but minimal backend**: The Express server exists primarily to serve the built frontend and support Vite HMR in development. No API endpoints are actually implemented.
3. **Portuguese language content**: The UI text is in Portuguese (Brazilian), matching the user's preference.
4. **Dark theme only**: The color scheme uses deep blues and purples with no light mode toggle.

### Build & Run
- `npm run dev` — Starts development server with Vite HMR (port 5000)
- `npm run build` — Builds client with Vite and server with esbuild into `dist/`
- `npm start` — Runs the production build
- `npm run check` — TypeScript type checking

## External Dependencies

### UI Component Libraries
- **shadcn/ui**: Full suite of Radix UI-based components with Tailwind styling
- **Framer Motion**: Animation library for scroll animations and transitions
- **react-scroll**: Smooth scrolling for single-page navigation
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component (available but not prominently used)

### Form & Validation
- **react-hook-form**: Form state management
- **Zod**: Schema validation (shared between client and server)
- **@hookform/resolvers**: Zod resolver for react-hook-form

### Build Tools
- **Vite**: Frontend bundler with React plugin
- **esbuild**: Server bundler for production builds
- **TypeScript (tsx)**: Runtime TypeScript execution for the server

### Fonts (CDN)
- Google Fonts: Inter, Outfit, DM Sans, Fira Code, Geist Mono, Architects Daughter

### Unused/Available Dependencies
- **Drizzle ORM + drizzle-zod**: Present in package.json but not actively used (no database)
- **connect-pg-simple**: PostgreSQL session store — not used
- **TanStack React Query**: Configured but portfolio data is static, not fetched from API