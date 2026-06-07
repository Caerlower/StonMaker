# StonMaker

Telegram-native DAO bot on TON blockchain with a read-only web dashboard.

## Project structure

- `index.ts` — Telegram bot + Express API (port 3000)
- `src/` — Backend services (DAO, STON.fi, execution worker, API routes)
- `frontend/` — Vite + TanStack Start dashboard (isolated `node_modules`)
- `contracts/` — TON smart contracts (Tact)
- `prisma/` — PostgreSQL schema and migrations

## Environment setup

1. Copy root `.env.example` to `.env` and fill in all values
2. Copy `frontend/.env.example` to `frontend/.env` and set `VITE_API_URL` + `VITE_BOT_USERNAME`
3. Run database migrations:

```bash
npm run db:migrate
```

## Running locally

### Bot + API only

```bash
npm install
npm run dev
```

Bot runs via Grammy; Express serves API at `http://localhost:3000`.

### Frontend only

```bash
cd frontend && npm install && npm run dev
```

Or from root:

```bash
npm run dev:frontend
```

### Bot + frontend together

```bash
npm install
cd frontend && npm install && cd ..
npm run dev:all
```

## Build

```bash
npm run build              # Compile bot TypeScript
npm run build:contract     # Compile Tact contracts
npm run build:frontend     # Build dashboard
```

## API endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/group/:chatId/treasury` | Treasury address, balance, member count |
| GET | `/api/group/:chatId/proposals` | Active and recent proposals |

`:chatId` is the Telegram group chat ID (e.g. `-1001234567890`).

## Smart contracts

See `contracts/` and run `npm run build:contract` before executing on-chain proposals.
