# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Sleeve It is a Next.js (App Router) web app in Spanish that helps board game owners find the right card sleeves for their games. Users search/browse a list of games; each game's detail page shows card dimensions/quantities, a recommended sleeve brand/model, and purchase links.

This repo is synced from a [v0.dev](https://v0.dev) project — changes made in v0.dev are pushed here automatically, and this repo deploys to Vercel. Keep that in mind when editing generated UI code (e.g. `components/ui/*`): it follows v0/shadcn conventions rather than hand-rolled patterns.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # next lint
```

There is no test suite configured in this repo.

Package manager: `pnpm-lock.yaml` is present (project originated from v0.dev, which uses pnpm), but `package-lock.json` also exists — check which one is current before adding dependencies, or ask the user.

## Architecture

- **Data layer**: All game data comes from Supabase (Postgres). `lib/supabase.ts` creates the Supabase client from `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` and defines the DB row types (`Database`) plus the app-facing domain types (`Game`, `Card`, `PurchaseLink`). `lib/games-service.ts` wraps all Supabase queries (`getAllGames`, `getGameBySlug`, `searchGames`) and maps snake_case DB rows to camelCase domain objects — this mapping is duplicated across all three functions, so if you touch one, check the others.
- **Schema**: Three tables — `games`, `cards`, `purchase_links` (both child tables FK to `games.id` with cascade delete), defined in `scripts/001-create-tables.sql` with public read-only RLS policies. `scripts/002`–`004` seed games, cards, and purchase links respectively. There's no ORM/migration tool — these are plain SQL scripts meant to be run manually against the Supabase project.
- **Routing**: `app/page.tsx` is the home page — a client component that loads all games on mount, then does client-side search filtering and pagination (`GAMES_PER_PAGE = 5`). `app/game/[slug]/page.tsx` is a server component rendering a single game's card/sleeve info and purchase links, looked up via `getGameBySlug`.
- **UI components**: `components/game-card.tsx`, `search-bar.tsx`, `pagination.tsx` are app-specific. `components/ui/*` is the full shadcn/ui set (Radix primitives), configured via `components.json` (aliases: `@/components`, `@/lib`, `@/hooks`, `@/components/ui`). Styling is Tailwind with a dark theme forced at the root (`<html class="dark">` in `app/layout.tsx`, `bg-gray-900` base) — the app is not designed to support light mode.
- **Path alias**: `@/*` maps to the repo root (see `tsconfig.json`).
- **Build config caveat**: `next.config.mjs` sets `eslint.ignoreDuringBuilds: true` and `typescript.ignoreBuildErrors: true`, and `images.unoptimized: true`. Production builds will succeed even with type errors or lint failures — don't rely on `npm run build` to catch them; run `npm run lint` and check types separately if needed.

## Environment

Requires a `.env` (or `.env.local`) with `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for the Supabase client to work — without them, data fetches will fail. There's a `supabase/` directory with local Supabase CLI state (`.branches`, `.temp`) but no `migrations/` or `config.toml` checked in.
