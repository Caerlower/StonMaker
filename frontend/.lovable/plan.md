# StonMaker — Plan

A premium, dark-mode marketing + dashboard site for a Telegram-native TON DAO tool. Three routes, all static/presentational (no backend, no wallet integration). Refined Linear/Claude aesthetic with TON blue (#0098EA) accent.

## Scope

This build is **frontend only** — no Telegram bot, no TON RPC, no wallet connect, no real treasury data. All numbers, proposals, activity, and addresses are realistic mock data baked into the components. Add backend later if requested.

## Routes

```text
/                 Landing  (hero, 3 pillars, 4-step flow)
/dashboard        Treasury dashboard (search, identity, stats, proposals, activity)
/how-it-works     Numbered editorial steps + CTA banner
```

Shared chrome: minimal sticky top nav (StonMaker wordmark left, links + "Add to Telegram" CTA right), thin footer.

## Design system (src/styles.css)

- Background: near-black `oklch(0.14 0.01 250)`; elevated surface `oklch(0.18 0.012 250)`
- Foreground: soft white; muted foreground for sublines
- Primary: TON blue `#0098EA` + a `--primary-glow` companion
- Gradient token: `--gradient-headline` (TON blue → soft purple-white) for the hero headline
- Glass border token: `1px solid color-mix(in oklab, white 8%, transparent)` + faint inset glow shadow
- Shadow tokens: `--shadow-glow` (TON blue soft glow for hover), `--shadow-elevated`
- Radius: lg = 14px
- Font: Inter (loaded via `<link>` in `__root.tsx`), `--font-display` + `--font-body` both Inter, tight tracking on display sizes
- All colors registered in `@theme inline` per Tailwind v4 rules — no hex in components

## Brand mark

`<StonMakerLogo />` — inline SVG: "Ston" + diamond glyph (TON-style rhombus in primary) + "Maker". Reused in nav and footer.

## Landing (`/`)

- Hero: full viewport, centered. Subtle animated radial glow + faint dot-pattern background. Headline with gradient. Two CTAs: primary glowing button, secondary ghost link with arrow icon.
- Pillars row: 3 columns, icon (lucide: MessageCircle, Vote, Zap) + bold label + one-liner. No card chrome.
- Flow: 4 steps horizontally, each a small circular icon node, connected by a thin gradient line that glows. Labels under each node.

## Dashboard (`/dashboard`)

- Centered search input with animated focused border (gradient border on focus via pseudo-element).
- Split grid (2/3 + 1/3 on desktop, stacks on mobile):
  - **Identity card**: truncated address (`EQAb…7K2x`) with copy button (lucide Copy → Check on click, toast confirmation), large balance "12,438.27 TON", subtle "Top Up" ghost button.
  - **Stat chips column**: 3 chips with icon + label + value (Members 248, Quorum 60%, Executed 37).
- Active Proposals: 3–4 horizontal cards. Type pill (SWAP/TRANSFER), description, vote progress bar (for vs against) with % labels, status pill with pulsing dot when ACTIVE.
- Recent Activity: minimal vertical timeline. Each row: action label, timestamp, truncated tx hash as link (opens tonviewer in new tab). Dividers only, no cards.

## How It Works (`/how-it-works`)

- 5 numbered sections, generous whitespace. Giant muted "01"…"05" sitting behind the content as a background numeral. Each section: heading, short paragraph, optional small icon.
- Closes with full-width soft CTA banner (subtle TON-blue radial wash) — "Ready to DAO your group?" + Telegram CTA.

## Motion

- Entrance: section-level fade-up with staggered children using a small `FadeUp` wrapper (CSS-only: `animate-fade-in` from the project's keyframes + per-child `animation-delay`). No motion library required.
- Hover: CTA primary gets shadow-glow + slight lift; ghost link arrow translates x; cards lift 2px and brighten border.
- Pulsing dot on ACTIVE proposals via Tailwind `animate-pulse`.
- Respect `prefers-reduced-motion` (disable transforms).

## SEO / head

Each route defines its own `head()` — distinct title, description, og:title, og:description.

## Technical notes

- TanStack Start file-based routes: `src/routes/index.tsx`, `src/routes/dashboard.tsx`, `src/routes/how-it-works.tsx`.
- Nav lives in `__root.tsx` wrapper (above `<Outlet />`), so it persists across routes.
- Components: `src/components/brand/StonMakerLogo.tsx`, `src/components/site/{Nav,Footer,FadeUp,SectionHeading}.tsx`, `src/components/landing/{Hero,Pillars,FlowSteps}.tsx`, `src/components/dashboard/{SearchBar,TreasuryCard,StatChips,ProposalCard,ActivityTimeline}.tsx`.
- Shadcn `button`, `input`, `badge` reused; custom `glow` button variant added.
- All mock data lives in `src/lib/mock-data.ts`.
- Copy-to-clipboard uses `navigator.clipboard` + sonner toast (already installed).
- Inter loaded via `<link>` in `__root.tsx` head — never `@import` a URL in CSS.

## Out of scope (ask if you want these added)

- Real Telegram bot link target (placeholder `https://t.me/StonMakerBot` for now)
- Wallet connect / real TON balance fetching
- Functional search (input is presentational; pressing enter scrolls to mock results)
- Light mode
