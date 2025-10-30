# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 15** portfolio site built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Motion** (Framer Motion) for animations. The architecture follows a **config-driven, single-page pattern** where all content is centralized in `config/site.ts`.

## Development Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Core Architecture

### Config-Driven Content System

**ALL portfolio content lives in `config/site.ts`** in the `siteConfig` object. This includes:
- Hero section text and actions
- Projects with metadata (title, description, image/video, links)
- Work experience entries
- Recent activities with images and links
- Navigation items and social links
- Site metadata for SEO

**Always edit `config/site.ts` to update content, never hardcode content in components.**

Example structure:
```typescript
export const siteConfig: SiteConfig = {
  metadata: { ... },           // SEO & OpenGraph
  landing: { hero: { ... } },  // Hero section content
  projects: { projects: [...] }, // Project items
  activities: { items: [...] }, // Recent activities
  experience: { experiences: [...] }, // Work history
  connect: { ... },            // Contact info & socials
  header: { ... },             // Navigation config
  footer: { ... }              // Footer config
}
```

### Directory Structure

- **`app/`** - Next.js App Router pages and API routes
  - `app/page.tsx` - Main landing page (single-page architecture)
  - `app/projects/` - Projects listing and detail pages
  - `app/api/contact/` - Contact form API endpoint
- **`components/landing/`** - Landing page sections (hero, projects, activities, experience, connect)
- **`components/ui/`** - shadcn/ui primitives (badge, button, dialog, drawer, separator, tooltip)
- **`components/providers/`** - App-level providers (theme, motion, toaster)
- **`config/`** - Configuration files (`site.ts`, `urls.ts`)
- **`lib/`** - Utility functions (`utils.ts` with `cn()` helper)
- **`hooks/`** - Custom React hooks (`use-media-query.ts`)

### TypeScript Patterns

- **Strict mode enabled** in `tsconfig.json`
- **Path alias**: `@/*` maps to project root
- **Naming conventions**:
  - Use `type` for shape definitions (e.g., `ProjectItem`, `SiteConfig`)
  - Use `interface` for component props
- **Client components**: Add `"use client"` directive only when using hooks or interactions

### Styling System

**Tailwind CSS v4** with CSS variables theme system defined in `app/globals.css`:

- All colors use **OKLCH color space**
- Theme variables defined in `:root` (light) and `.dark` (dark mode)
- Custom utility class: `@utility focus-ring` for consistent focus states
- Container utility: `@apply max-w-3xl mx-auto px-4 xl:px-6`
- Use `cn()` helper from `lib/utils.ts` to merge Tailwind classes with `clsx` and `tailwind-merge`

### Motion Animation Patterns

Import Motion with reduced bundle size:
```typescript
import * as m from "motion/react-m"
```

- Wrapped in `<LazyMotion features={domAnimation}>` via `motion-provider.tsx`
- Use variant-based animation patterns:
```typescript
const variants: Variants = {
  initial: { opacity: 0, y: 20, filter: "blur(12px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
}
```
- Use `m.div`, `m.section`, etc. (not `motion.div`)

### Responsive Dialog/Drawer Pattern

See `components/contact-dialog.tsx` for reference:
- Uses `useMediaQuery("(min-width: 768px)")` to detect screen size
- Renders `Dialog` on desktop (≥768px)
- Renders `Drawer` on mobile (<768px)
- Keeps native mobile UX while desktop stays modal

## Key Features

### Contact Form API (`/api/contact/route.ts`)

- **Validation**: Zod schema validates name, email, company (optional), and message
- **Rate limiting**: 5 requests per 10 minutes per IP address
- **Bot protection**: Honeypot field `website` (must be empty)
- **Email delivery**: Optional Resend integration via `RESEND_API_KEY` environment variable
- **Response format**: JSON only, no redirects
- **Sanitization**: Single-line fields sanitized (removes newlines)

Environment variable for email:
```bash
RESEND_API_KEY=your_key_here
```

### Projects System

- **Dynamic routing**: `/projects/[slug]` pages generated at build time
- **Slug generation**: Titles converted to slugs via `titleToSlug()` function
- **Media handling**: Projects support either `image` OR `video` field (never both)
- **Static generation**: `generateStaticParams()` and `generateMetadata()` for all projects
- **Listing page**: `/projects` shows all projects with filtering and sorting

### Image/Video Handling

- **CDN**: All media hosted on Cloudinary (`res.cloudinary.com`)
- **Next.js Image**: Remote patterns configured in `next.config.ts`
- **Allowed domains**:
  - `res.cloudinary.com` (images and videos)
  - `via.placeholder.com` (placeholders)

### Theme System

- **Provider**: `next-themes` with system detection
- **Toggle**: `<ModeSwitcher />` component in header
- **Implementation**: Same CSS custom properties with different OKLCH values for light/dark

### Analytics

Vercel Analytics enabled in `app/layout.tsx` via `<Analytics />` component from `@vercel/analytics`.

## Content Management

### Adding a New Project

Edit `config/site.ts` and add to `siteConfig.projects.projects[]`:
```typescript
{
  title: "Project Name",
  description: "Project description...",
  image: "https://res.cloudinary.com/...",  // OR video (not both)
  video: "https://res.cloudinary.com/...",  // optional
  github: "https://github.com/...",        // optional
  livePreview: "https://...",              // optional
}
```

### Updating Hero Section

Edit `siteConfig.landing.hero` in `config/site.ts`:
```typescript
hero: {
  topLine: "👋 Your intro text...",
  h1: {
    type: "multi-line",  // or "single-line"
    content: ["Line 1", "Line 2", "Line 3"]
  },
  description: "Your description...",
  actions: { primary: {...}, secondary: {...} }
}
```

### Modifying Navigation

Edit `siteConfig.header.nav[]` in `config/site.ts`:
```typescript
nav: [
  { title: "Projects", href: "/projects" },
  { title: "Github", href: urls.github, external: true }
]
```

### Adding External URLs

Edit `config/urls.ts` for centralized URL management:
```typescript
export const urls = {
  bookCall: "https://cal.com/...",
  github: "https://github.com/...",
  linkedin: "https://linkedin.com/...",
  // ... add more URLs
} as const
```

## Important Conventions

1. **Never hardcode content in components** - always use `siteConfig` or pass via props
2. **Client components**: Only use `"use client"` when necessary (hooks, interactions, browser APIs)
3. **Motion components**: Use `m.div`, `m.section` (not `motion.div`)
4. **External links**: Always add `target="_blank" rel="noopener noreferrer"` + external icon from `lucide-react`
5. **Focus states**: Use the custom `focus-ring` utility class defined in `globals.css`
6. **SEO metadata**: Update `siteConfig.metadata` for site-wide SEO (`metadataBase` is configured)
7. **Toast notifications**: Use `sonner` library (Toaster configured in providers)

## Removed/Stub Features

- **Blog/MDX system**: Removed, only stub remains in `source.config.ts`
- **`/api/send` endpoint**: Empty, use `/api/contact` instead

## Path Aliases

Configure imports with `@/` prefix:
- `@/components` - Components directory
- `@/lib` - Utility functions
- `@/config` - Configuration files
- `@/hooks` - Custom hooks
- `@/app` - App directory

## Toast Notifications

Using `sonner` library:
- Configured in `components/providers/theme-provider.tsx`
- Import: `import { toast } from "sonner"`
- Usage: `toast.success("Message")`, `toast.error("Error")`
- Duration configured to 8 seconds for better readability
