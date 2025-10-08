# Sigaram Montessori School Website

## Overview

This is a full-stack web application for Sigaram Montessori School, built with React, Express, and PostgreSQL. The application serves as a marketing website showcasing the school's programs, philosophy, and facilities with a modern, animated user interface. The project uses a monorepo structure with shared types between frontend and backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast hot module replacement
- Wouter for lightweight client-side routing

**UI Component Strategy**
- shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- Tailwind CSS with CSS variables for theming, using a custom warm color palette (orange/primary, blue/accent)
- Framer Motion for animations and scroll-based interactions
- Custom fonts: Inter (sans-serif), Fredoka (display), Georgia (serif)

**State Management**
- TanStack Query (React Query) for server state management with custom query client configuration
- React Hook Form with Zod resolvers for form validation
- Local component state via React hooks

**Design System**
- Component path aliases (@/components, @/lib, @/hooks) for clean imports
- Centralized utility functions (cn for className merging)
- Consistent styling with CSS custom properties for theme values

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for the REST API
- Node.js HTTP server integrated with Vite in development mode
- Middleware for JSON parsing, URL encoding, and request logging

**Development vs Production**
- Development: Vite middleware mode with HMR, dev banner, and cartographer plugins
- Production: Static file serving from compiled dist/public directory
- Custom logging middleware that captures response times and JSON payloads for API routes

**Storage Layer**
- Interface-based storage abstraction (IStorage) for flexibility
- In-memory storage implementation (MemStorage) as default for development
- Designed to swap with database-backed storage (Drizzle ORM schema defined but not implemented)

**API Design**
- Routes prefixed with `/api` by convention
- Centralized route registration in `server/routes.ts`
- Storage interface provides CRUD operations for data access

### Data Storage

**Database Configuration**
- Drizzle ORM configured for PostgreSQL with Neon serverless driver
- Schema defined in `shared/schema.ts` for type sharing between client and server
- Migration files output to `./migrations` directory
- Users table with UUID primary keys, username, and password fields

**Schema Validation**
- Drizzle-zod for automatic Zod schema generation from database schema
- Type inference for Insert and Select operations

**Current State**
- Database schema is defined but not actively used
- In-memory storage serves as temporary data layer
- Ready to switch to PostgreSQL by implementing database-backed storage class

### External Dependencies

**UI Component Libraries**
- Radix UI: Comprehensive set of accessible, unstyled React primitives (accordion, dialog, dropdown, select, toast, etc.)
- cmdk: Command palette component
- embla-carousel-react: Touch-friendly carousel implementation
- lucide-react: Icon library

**Animation & Styling**
- Framer Motion: Declarative animations and scroll interactions
- Tailwind CSS: Utility-first CSS framework
- class-variance-authority: Type-safe variant management
- clsx + tailwind-merge: Conditional className composition

**Data & Forms**
- TanStack Query: Async state management and caching
- React Hook Form: Performant form handling
- Zod: Schema validation and type inference
- date-fns: Date manipulation utilities

**Database & Backend**
- @neondatabase/serverless: PostgreSQL client optimized for serverless
- Drizzle ORM: Type-safe SQL toolkit
- connect-pg-simple: PostgreSQL session store (installed but not configured)

**Development Tools**
- Vite plugins: Runtime error overlay, cartographer, dev banner (Replit-specific)
- tsx: TypeScript execution for development
- esbuild: JavaScript bundler for production builds

**Session Management**
- Express-session infrastructure present but not implemented
- PostgreSQL session store dependency available for future authentication