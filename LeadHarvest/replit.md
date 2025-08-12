# Overview

This is a full-stack B2B lead generation SaaS application called "LeadHarvest AI" that allows users to search, generate, and manage high-quality business leads from multiple sources. The application provides features for lead searching with advanced filters, email verification, export capabilities, subscription management, and real-time data scraping.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for client-side routing
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema Validation**: Zod for runtime type checking and API validation
- **Session Management**: Express sessions with PostgreSQL storage via connect-pg-simple
- **Build Tool**: esbuild for production builds

### Data Storage Solutions
- **Primary Database**: PostgreSQL accessed via Neon serverless driver
- **ORM**: Drizzle ORM with schema-first approach and automatic type generation
- **Migration Management**: Drizzle Kit for database migrations
- **In-Memory Storage**: Fallback memory storage implementation for development/testing

### Database Schema Design
- **Users Table**: Manages user accounts, credits, and subscription information
- **Leads Table**: Stores generated leads with contact information, verification status, and quality scores
- **Search History**: Tracks user search patterns and credit usage
- **Subscription Plans**: Defines available pricing tiers and features

### API Architecture
- **REST Endpoints**: Express.js routes for lead search, user management, and billing
- **Data Validation**: Zod schemas shared between client and server
- **Error Handling**: Centralized error middleware with proper HTTP status codes
- **Request Logging**: Custom middleware for API request/response logging

### Authentication & Authorization
- **Session-based Authentication**: Uses Express sessions for user state management
- **Credit System**: Built-in credit tracking and usage validation
- **Subscription Management**: Role-based access control based on subscription plans

### Development Environment
- **Hot Reload**: Vite HMR for frontend development
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Code Organization**: Monorepo structure with shared types and utilities
- **Path Mapping**: TypeScript path aliases for clean imports

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe SQL query builder and ORM
- **drizzle-zod**: Integration between Drizzle schema and Zod validation
- **@tanstack/react-query**: Server state management and caching

### UI Component Libraries
- **@radix-ui/***: Comprehensive set of accessible UI primitives (accordion, dialog, select, etc.)
- **class-variance-authority**: Utility for creating variant-based component APIs
- **cmdk**: Command palette component for search interfaces
- **embla-carousel-react**: Carousel/slider component for UI presentations

### Development & Build Tools
- **vite**: Frontend build tool and development server
- **@vitejs/plugin-react**: React support for Vite
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **esbuild**: Fast JavaScript bundler for production builds

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **clsx**: Conditional CSS class name utility
- **tailwind-merge**: Tailwind CSS class merging utility

### Session & Security
- **connect-pg-simple**: PostgreSQL session store for Express
- **express**: Web application framework
- **wouter**: Lightweight React router

### Development Dependencies
- **typescript**: TypeScript compiler and type checking
- **tsx**: TypeScript execution for Node.js development
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS post-processing tool
- **autoprefixer**: CSS vendor prefix automation