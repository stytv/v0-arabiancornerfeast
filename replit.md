# CODE VIVEKS Landing Page

## Overview

CODE VIVEKS is a production-ready landing page for the premier coding club at Swami Vivekananda Institute of Technology (SVIT), Secunderabad. The application showcases club information, team structures, events, leadership, and provides a platform for prospective members to learn about and join the organization. Built with modern web technologies, it features a futuristic design with glass morphism effects, smooth animations, and full responsiveness.

## Recent Changes (November 2, 2025)

### Responsive Design Enhancements
- **Typography Scaling**: Implemented responsive typography across all sections using Tailwind breakpoints (text-3xl sm:text-4xl md:text-5xl lg:text-6xl)
- **Adaptive Layouts**: All sections now use responsive padding (py-12 sm:py-16 md:py-20) and spacing for consistent mobile-to-desktop experience
- **Grid Responsiveness**: Grid layouts adapt seamlessly (grid sm:grid-cols-2 lg:grid-cols-3) for optimal content distribution
- **Mobile-First CTAs**: Buttons and call-to-action elements are full-width on mobile (w-full sm:w-auto) for better touch interaction
- **Component Optimization**: Hero, About, Leadership, Teams, Events, Join, Projects, and Contact sections fully responsive
- **Layout Refinements**: Index layout uses responsive padding (px-3 sm:px-4 md:px-6) with overflow-x-hidden to prevent horizontal scroll
- **Performance**: Maintained smooth animations and transitions across all device sizes

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **React 18 with TypeScript**: Component-based architecture using functional components with hooks
- **Vite**: Fast build tool and development server configured for optimal performance
- **SWC**: Super-fast TypeScript/JavaScript compiler for faster builds

### Styling Architecture
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Design System**: Custom HSL color palette with CSS variables for theming
  - Dark mode as default with light mode support
  - Neumorphic design with glass morphism effects
  - Custom color scheme: Deep space backgrounds with neon cyan and green accents
- **Component Library**: shadcn/ui components for consistent, accessible UI elements
- **Animations**: Framer Motion for advanced animations and transitions

### Component Structure
- **Page-based routing**: Single-page application with React Router DOM
- **Section-based layout**: Hero, About, Teams, Events, Leadership, Join, Projects, and Contact sections
- **Modular components**: Reusable UI components in `/components/ui` directory
- **Data-driven content**: Centralized content management in `/data/content.ts`

### State Management
- **React Context API**: ThemeContext for light/dark mode switching
- **Local component state**: useState and useRef hooks for component-level state
- **URL-based navigation**: Hash-based routing for smooth scrolling to sections

### Animation Strategy
- **Scroll-triggered animations**: Custom `useScrollAnimation` hook using Intersection Observer API
- **Motion variants**: Framer Motion variants for consistent animation patterns (slide-up, slide-left, slide-right)
- **Performance optimization**: Animation thresholds and root margins to prevent layout thrashing

### Accessibility Features
- **Semantic HTML**: Proper use of section, nav, header, footer elements
- **ARIA labels**: Screen reader support for interactive elements
- **Keyboard navigation**: Full keyboard accessibility for all interactive components
- **Focus management**: Visible focus states and proper tab order

### Performance Optimizations
- **Code splitting**: Dynamic imports and lazy loading where applicable
- **Memo optimization**: React.memo for expensive components to prevent unnecessary re-renders
- **Image optimization**: Proper image formats and lazy loading strategy
- **CSS-in-JS avoidance**: Tailwind classes for better performance over runtime CSS

### Type Safety
- **TypeScript configuration**: Relaxed strictness for development flexibility
- **Component prop types**: Interface definitions for all major components
- **Path aliases**: `@/*` alias for cleaner imports

## External Dependencies

### UI Component Libraries
- **@radix-ui/***: Headless UI components (accordion, dialog, dropdown, etc.) for accessible interactions
- **shadcn/ui**: Pre-built component library built on Radix UI primitives
- **lucide-react**: Icon library for consistent iconography

### Animation & Interaction
- **framer-motion**: Advanced animation library for smooth transitions and gestures
- **embla-carousel-react**: Carousel/slider functionality

### Form Handling
- **react-hook-form**: Form state management and validation
- **@hookform/resolvers**: Validation resolvers for react-hook-form
- **zod** (implied): Schema validation (typically used with resolvers)

### Utility Libraries
- **clsx & tailwind-merge**: CSS class name management and merging
- **class-variance-authority**: Type-safe variant-based styling
- **date-fns**: Date formatting and manipulation

### Developer Tools
- **@tanstack/react-query**: Server state management (configured but not actively used for API calls)
- **TypeScript ESLint**: Code linting and quality enforcement
- **PostCSS & Autoprefixer**: CSS processing for cross-browser compatibility

### Theme System
- **next-themes**: Theme switching capability (light/dark mode)
- Custom theme context implementation for application-wide theme state

### Fonts
- **Google Fonts**: Inter font family loaded via CDN
- **System fonts**: Fallback to Apple system fonts for native appearance

### Build Tools
- **Vite plugins**: React SWC plugin for fast refresh, component tagger for development
- **Path resolution**: Custom alias configuration for clean imports
