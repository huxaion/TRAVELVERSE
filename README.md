# TravelVerse

TravelVerse is an open-source travel super-app MVP built with **Next.js App Router + TypeScript + Tailwind + Prisma**.

## Product Blueprint

### Competitor analysis summary
- **Booking.com**: excellent booking inventory and flow; weaker social/community layer.
- **Airbnb**: strong visual/local experiences; not a complete flight + route + safety + budget operating system.
- **Tripadvisor**: rich review volume; modern social UX and AI planning are limited.
- **Google Travel/Flights**: powerful search and pricing insights; no community-driven travel storytelling layer.
- **Skyscanner/Hopper/Rome2Rio/Wanderlog**: each solves slices (price, routes, itinerary) but not a unified open-source social + intelligence + booking OS.

### TravelVerse differentiation
1. **AI Trip Brain**: budget-aware, safety-aware, style-aware itinerary generation (mock API in MVP).
2. **Destination Intelligence**: culture, etiquette, scam warnings, emergency notes, and hidden gems in city/country hubs.
3. **Booking Hub**: mock flows for flights, hotels, restaurants, tours, activities, and events with API-ready architecture.
4. **Social Travel Network**: posts, saves, likes, follows, guides, and city/country community views.
5. **Local Experience Layer**: marketplace placeholders for local guides, cultural walks, workshops, and meetups.

## Tech Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Prisma ORM + PostgreSQL
- Auth.js (NextAuth)
- Lucide / Framer Motion ready for use

## MVP Scope Implemented
- Landing page and explorer pages
- Country/city/destination route scaffolding
- Mock hotels/flights/restaurants/activities/tours/events pages
- AI planner UI + mock route
- Community feed pages and profile routes
- Dashboard and admin route scaffolding
- Prisma schema with requested models
- Mock data modules
- Open-source docs and setup files

## Project Structure
```txt
/app
  /(auth)
  /(public)
  /dashboard
  /admin
  /api
/components
  /ui
  /layout
  /cards
  /forms
  /travel
  /social
/data
/lib
/prisma
/types
/docs
```

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure env:
   ```bash
   cp .env.example .env
   ```
3. Generate Prisma client:
   ```bash
   npm run prisma:generate
   ```
4. Run app:
   ```bash
   npm run dev
   ```

## Scripts
- `npm run dev`
- `npm run lint`
- `npm run build`
- `npm run prisma:generate`
- `npm run prisma:seed`

## Notes
- Booking/payments/maps/AI providers are intentionally mocked and API-ready.
- This repository is designed to be contributor-friendly and extensible.
