# replit.md

## Overview

This is an Arabic-language notification management dashboard built with Next.js 13. The application provides an admin panel for managing notifications, user authentication, and payment/card data visualization. The interface is fully right-to-left (RTL) oriented and uses Arabic as the primary language.

The system allows administrators to:
- Log in and manage authentication sessions
- View and manage notifications in real-time
- Handle payment card information display
- Manage Nafaz (Saudi digital identity) and Rajhi bank authentication flows
- Track visitor activity and user events
- Toggle approval statuses (Card OTP, Card PIN, Phone OTP, Nafath)
- View visitor IDs, countries, and current page locations

## Recent Changes (December 2025)

### Data Model Updates
- Added new visitor tracking fields: `visitorId`, `action`, `currentPage`, `timestamp`, `lastSeen`
- Added card approval fields: `cardLast4`, `cardOtpApproved`, `cardPinApproved`
- Added verification fields: `phoneOtpApproved`, `nafathApproved`
- Updated `lib/type.ts` with new `Visitor` interface and enhanced `Notification` interface
- Updated `lib/firestore.ts` with extended `NotificationDocument` interface

### Notifications Dashboard Redesign
- Restructured table with new columns: Visitor, Info, Approval Status, Time, Connection, Page, Actions
- Added visual approval status indicators (4 round buttons for each approval type)
- Click-to-toggle approval statuses that sync with Firestore in real-time
- Shows last 4 digits of card number when available
- Mobile-responsive design with same approval controls

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Framework
- **Next.js 13 with App Router**: Uses the newer app directory structure with React Server Components enabled
- **TypeScript**: Full TypeScript support for type safety
- **Server Actions**: Experimental server actions enabled for form handling

### UI Component System
- **shadcn/ui**: Component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **CSS Variables**: Theme system using HSL color variables for light/dark mode support
- **Lucide React**: Icon library for consistent iconography

### State Management
- Client-side state managed with React useState/useEffect hooks
- Real-time data synchronization via Firebase listeners
- No global state management library (Redux/Zustand) - uses Firebase as single source of truth

### Routing Structure
- `/` - Login page (root)
- `/login` - Alternative login page
- `/notifications` - Main dashboard for notification management
- `/n2` - Secondary login variant

### Component Organization
- `components/ui/` - Reusable shadcn/ui components
- `components/` - Feature-specific components (sidebar, dialogs, cards)
- `hooks/` - Custom React hooks (mobile detection, toast notifications)
- `lib/` - Utility functions and Firebase configuration

### Theming
- Dark/light mode support via next-themes
- Custom Noto Kufi Arabic font for Arabic text rendering
- RTL layout direction configured at the HTML root level

## External Dependencies

### Firebase Services
- **Firebase Authentication**: Email/password authentication for admin users
- **Cloud Firestore**: Primary database for storing notifications, payments, and user data
  - Collections: `orders`, `pays`, `users`
- **Realtime Database**: Used for real-time presence and live updates
- **Configuration**: Firebase config is hardcoded in `lib/firestore.ts`

### Key NPM Packages
- `firebase` (v11.4.0) - Firebase SDK for all backend services
- `date-fns` - Date formatting with Arabic locale support
- `sonner` - Toast notification system
- `framer` / `framer-motion` - Animation capabilities
- `next-themes` - Theme switching functionality

### Third-Party UI Libraries
- Radix UI primitives (dialog, dropdown, popover, tabs, etc.)
- class-variance-authority - Component variant management
- tailwind-merge - Tailwind class merging utility

### Development Configuration
- Development server runs on port 5000 (`-H 0.0.0.0 -p 5000`)
- ESLint with Next.js core web vitals configuration
- Path aliases configured (`@/*` maps to root)