# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 portfolio website for a full-stack developer, showcasing projects and case studies. The site uses TypeScript, React 19, Tailwind CSS 4, and Three.js for 3D animations.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Starts the Next.js development server with Turbopack for faster builds.

### Building for Production
```bash
npm run build
```
Creates an optimized production build using Turbopack.

### Starting Production Server
```bash
npm start
```
Runs the production server after building.

## Architecture

### Project Structure
- **`app/`** - Next.js App Router pages
  - `layout.tsx` - Root layout with navigation
  - `page.tsx` - Homepage with hero section and projects grid
  - `works/[work]/page.tsx` - Dynamic case study pages
- **`components/`** - React components
  - `nav.tsx`, `NavWrapper.tsx`, `StaggeredMenu.tsx` - Navigation system with animated menu
  - `HeroSectionWrapper.tsx`, `background.tsx` - Hero section with Three.js animations
  - `Projects.tsx` - Grid display of portfolio projects
  - `ShinyText.tsx`, `LiquidEther.tsx` - Animated text effects
- **`lib/`** - Utility functions and contexts
  - `projects.ts` - Server-side functions to read and parse case study markdown files
  - `NavContext.tsx` - React Context for navigation state management
  - `utils.ts` - Utility function (`cn`) for merging Tailwind classes
- **`data/case-studies/`** - Markdown files for portfolio case studies
  - Each file uses gray-matter front matter with fields: `order`, `title`, `subtitle`, `tags`, `category`, `imageUrl`
- **`public/`** - Static assets including case study images

### Navigation System
The navigation uses a shared context (`NavContext`) to manage open/closed state across components. The `NavWrapper` provides the context, `Nav` component renders the menu, and `HeroSectionWrapper` consumes the state to adjust z-index when menu opens.

### Case Studies System
1. Markdown files in `data/case-studies/` contain front matter metadata and content
2. `lib/projects.ts` exports `getSortedProjectsData()` which reads all markdown files and sorts by the `order` field
3. Homepage fetches all projects server-side and displays in a grid
4. Dynamic route `works/[work]/page.tsx` renders individual case studies by slug
5. Content is converted from markdown to HTML using `remark` and `remark-html`

### Styling
- Uses Tailwind CSS 4 with custom configuration
- Custom fonts: "Wallop-TRIAL" (Medium and Heavy weights)
- CSS variables for theming (accent color, background, foreground, etc.)
- Currently features a Halloween theme with orange accent (`--accent: #f17832`)
- Typography plugin enabled for prose styling on case study content

### Path Aliases
The project uses `@/*` path alias mapping to the root directory (configured in `tsconfig.json`).

## Key Implementation Patterns

### Adding a New Case Study
1. Create a markdown file in `data/case-studies/` with this front matter structure:
```markdown
---
order: 1
title: Project Name
subtitle: Short description
tags: ["Tag1", "Tag2", "Tag3"]
category: Category Name
imageUrl: https://image-url.com/image.png
---

### Content starts here
```
2. Add project images to `public/case-studies/`
3. The project will automatically appear on the homepage and be accessible at `/works/[filename-without-extension]`

### Client vs Server Components
- Components using hooks, state, or browser APIs must be marked with `'use client'` directive
- Navigation components and animations are client components
- Page components and data fetching functions are server components by default

### Three.js Integration
The site uses Three.js for 3D background animations (see `components/background.tsx` and related files). These are client-side components that create WebGL canvas elements.

## TypeScript Configuration
- Target: ES2017
- Strict mode enabled
- Path alias `@/*` points to project root
- JSX: preserve (handled by Next.js)
