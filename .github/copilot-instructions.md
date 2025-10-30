# Copilot Instructions for Orbit Portfolio

## Project Overview

This is a Next.js 15 portfolio site using App Router, TypeScript, React 19, Tailwind CSS v4, and Motion (Framer Motion) for animations. The codebase follows a **single-page architecture** with modular landing sections controlled by centralized config.

## Core Architecture

### Config-Driven Content (`config/site.ts`)

All portfolio content lives in `siteConfig` object—projects, experience, hero text, navigation, metadata, and social links. **Always edit `config/site.ts` to update content**, not individual components.

Example pattern:

```typescript
export const siteConfig: SiteConfig = {
  landing: { hero: { ... } },
  projects: { projects: [...] },
  activities: { items: [...] }
}
```

### Component Structure

- **Landing sections**: `components/landing/` (hero, projects, activities, experience, connect)
- **UI primitives**: `components/ui/` (shadcn/ui components - badge, button, dialog, drawer, etc.)
- **Layout components**: `site-header.tsx`, `site-footer.tsx`, `page-header.tsx`
- **Providers**: `components/providers/` wraps app with ThemeProvider, MotionProvider, Toaster

### Motion Animation Pattern

Import Motion as `import * as m from "motion/react-m"` (reduced bundle size). Use `<LazyMotion>` wrapper in `motion-provider.tsx`. Animations use variant-based patterns:

```typescript
const variants: Variants = {
	initial: { opacity: 0, y: 20, filter: "blur(12px)" },
	animate: { opacity: 1, y: 0, filter: "blur(0px)" },
}
```

### Styling Conventions

- **Tailwind v4** with CSS variables theme system in `globals.css`
- Custom utility `@utility focus-ring` for consistent focus states
- `cn()` helper (`lib/utils.ts`) merges Tailwind classes with `clsx` and `tailwind-merge`
- Container: `@apply max-w-3xl mx-auto px-4 xl:px-6` (defined in globals.css)
- Use `oklch` color space for all theme colors

### Responsive Dialog/Drawer Pattern

See `components/contact-dialog.tsx` - switches between Dialog (desktop) and Drawer (mobile) using `useMediaQuery("(min-width: 768px)")`. This pattern keeps mobile UX native while desktop stays modal.

## Key Features

### Contact Form (`/api/contact/route.ts`)

- Validates with Zod schema
- Rate limiting: 5 requests per 10 min per IP
- Honeypot field (`website`) for bot detection
- Resend integration (optional via `RESEND_API_KEY`)
- Returns JSON responses, no redirects

### Image/Video Handling

- Cloudinary CDN for all media (`res.cloudinary.com`)
- Next.js Image with remote patterns configured in `next.config.ts`
- Projects support both `image` OR `video` field (never both)

### Theme System

- `next-themes` with system detection
- Dark mode uses same CSS custom properties with different OKLCH values
- Toggle via `<ModeSwitcher />` in header

## Development Workflow

### Running the App

```bash
npm run dev      # Starts dev server with Turbopack
npm run build    # Production build
npm run lint     # ESLint check
```

### Adding Content

1. **New project**: Add object to `siteConfig.projects.projects[]` in `config/site.ts`
2. **Change hero text**: Update `siteConfig.landing.hero` fields
3. **Navigation links**: Edit `siteConfig.header.nav[]`

### Adding UI Components

Components follow shadcn/ui patterns. Import path aliases:

- `@/components` - Components directory
- `@/lib` - Utilities
- `@/config` - Configuration files
- `@/hooks` - Custom hooks

### TypeScript Patterns

- Strict mode enabled
- Path alias `@/*` maps to root
- Use `type` for shape definitions (e.g., `ProjectItem`, `SiteConfig`)
- Prefer `interface` for component props

## Important Conventions

1. **Never hardcode content in components** - use `siteConfig` or props
2. **Client components**: Add `"use client"` only when using hooks/interactions
3. **Motion components**: Use `m.div`, `m.section` (not `motion.div`)
4. **External links**: Add `target="_blank" rel="noopener noreferrer"` + external icon
5. **Focus states**: Use custom `focus-ring` utility class
6. **Metadata**: Update `siteConfig.metadata` for SEO (metadataBase is set)

## Removed Features

- Blog/MDX system removed (see `source.config.ts` stub)
- `/api/send` endpoint empty (contact uses `/api/contact`)

## Analytics

Vercel Analytics enabled in `app/layout.tsx` via `<Analytics />` component.
