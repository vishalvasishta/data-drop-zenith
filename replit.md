# Data Drop

A full-stack marketing website for "India's Most Practical AI Career Program," featuring an AI chatbot, lead management dashboard, and Razorpay-powered enrollment flow.

## Stack

- **Framework:** React 19 + TanStack Start (TanStack Router + SSR via Nitro)
- **UI:** shadcn/ui, Tailwind CSS v4, Framer Motion
- **Runtime:** Bun
- **Language:** TypeScript
- **Database:** PostgreSQL (`pg`)
- **Payments:** Razorpay

## Pages

- `/` — Home (hero, features, curriculum preview, pricing, testimonials)
- `/curriculum` — Full curriculum breakdown
- `/pricing` — Pricing plans with Razorpay enrollment
- `/admin` — Lead management dashboard (requires DB)
- `/privacy`, `/terms`, `/refund`, `/shipping` — Legal pages

## Running on Replit

### Required secrets

Set these in the **Secrets** panel before starting:

| Secret | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (e.g. `postgresql://user:pass@host/db`) |
| `RAZORPAY_KEY_ID` | Razorpay API key ID |
| `RAZORPAY_KEY_SECRET` | Razorpay API secret |
| `SESSION_SECRET` | Random string for session signing (already set) |

### Start

```bash
bun install          # install dependencies (done automatically)
bun run dev          # dev server on port 5000
```

The **Start application** workflow runs `bun run dev` automatically. The app serves on port 5000 (mapped to external port 80).

### Build & deploy

```bash
bun run build        # production build → .output/
```

Deployment target is **autoscale**; the run command is `bun run .output/server/index.mjs`.

## Key source locations

| Area | Path |
|---|---|
| Routes | `src/routes/` |
| Chatbot engine | `src/features/chatbot/engine/` |
| Chatbot knowledge | `src/features/chatbot/data/knowledgeBase.ts` |
| Lead management | `src/features/leads/` |
| DB helpers | `src/lib/db.ts` |
| Server entry | `src/server.ts` |

## User preferences

_No preferences recorded yet._
