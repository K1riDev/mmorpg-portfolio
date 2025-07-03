<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# MMORPG Portfolio Instructions

This is an Astro v3+ portfolio project with a fantasy MMORPG theme. Please follow these guidelines when generating code:

## Project Overview

- **Framework**: Astro v3+ with TypeScript
- **Styling**: TailwindCSS with custom MMORPG-themed CSS
- **Package Manager**: pnpm
- **i18n**: Native Astro i18n support (Spanish/English)
- **Animations**: GSAP for advanced animations
- **UI Theme**: Fantasy MMORPG game interface (HUD-style, glowing effects, magical aesthetics)

## Code Style Guidelines

### Path Aliases

- Always use `@/` path aliases instead of relative imports (`../`)
- Example: `import Layout from '@/layouts/Layout.astro'`

### Component Structure

- Use `.astro` files for UI components
- Follow Astro's component syntax and conventions
- Place components in `src/components/`
- Use TypeScript interfaces for props

### Styling Guidelines

- Use TailwindCSS classes for basic styling
- Use custom MMORPG CSS classes for game-like effects:
  - `.mmorpg-button` for game-style buttons
  - `.mmorpg-card` for HUD-style containers
  - `.glow-effect`, `.glow-effect-secondary`, `.glow-effect-accent` for glowing effects
  - `.hud-border` for game UI borders
- Fonts: 'Cinzel' for headings, 'Orbitron' for UI elements
- Color scheme: Cyan, purple, yellow accents on dark slate background

### i18n Implementation

- Use native Astro i18n with translations in `src/i18n/translations.ts`
- Support Spanish (default) and English
- Use `useTranslation()` utility from `src/i18n/utils.ts`
- Structure: `/` for Spanish, `/en/` for English pages

### Animation Guidelines

- Use GSAP for complex animations
- Implement ScrollTrigger for scroll-based animations
- Add hover effects and micro-interactions
- Use CSS animations for simple effects like glowing and floating

### Theme Guidelines

- Maintain the fantasy MMORPG aesthetic throughout
- Use gaming-inspired icons and terminology
- Professional content (no fantasy role-playing language)
- Dark theme with bright accent colors
- Implement light/dark theme toggle with HUD styling

## File Organization

```
src/
├── components/     # Reusable Astro components
├── layouts/        # Page layouts
├── pages/          # Route pages (Spanish root, English in /en/)
├── i18n/          # Internationalization files
├── lib/           # Utility libraries
├── utils/         # Helper functions
└── styles/        # Global CSS and styling
```

## Key Features to Maintain

- Responsive design (mobile-first)
- MMORPG visual design (glowing elements, HUD-style UI)
- Smooth animations and transitions
- Accessibility (ARIA labels, keyboard navigation)
- Performance optimization
- SEO optimization with proper meta tags

## Common Patterns

- All pages should use the main Layout component
- Include Navbar component on all pages
- Use consistent MMORPG styling across components
- Implement proper error handling and loading states
- Add hover effects and interactive feedback
