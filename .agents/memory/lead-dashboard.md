---
name: Lead Management Dashboard
description: Architecture and constraints for the leads feature — storage, server fns, admin tab.
---

## Architecture
- `src/lib/lead-storage.ts` — `Lead` interface + `saveLead`/`getAllLeads`; `ensureLeadsTable()` called on every DB operation (idempotent `CREATE TABLE IF NOT EXISTS`).
- `src/lib/lead-fns.ts` — Two TanStack Start server fns: `saveLeadFn` (public write, rate-limited 3/hr per phone via in-memory Map), `getLeadsFn` (ADMIN_PASSWORD-gated).
- `src/features/leads/useLeadDashboard.ts` — Pure sort+filter hook. Zero UI code. Accepts `Lead[]`, returns `filteredLeads` + setters.
- `src/features/leads/LeadDashboard.tsx` — Read-only table. Sortable on leadScore/createdAt, filterable by role/careerGoal/minScore.
- `src/features/chatbot/components/ChatWidget.tsx` — `handleLeadSubmit` fires `saveLeadFn` with `state.profile` as fire-and-forget (`.catch(() => {})`).
- `src/routes/admin.tsx` — Added "Leads" tab. Login fetches enrollments + leads in parallel via `Promise.all`. Sign-out resets `activeTab` to `"enrollments"`.

## Key constraints
- Parser, stateMachine, objectionHandler, chatbot UI: untouched.
- Leads table: TEXT[] columns for interests/objections (Postgres native array).
- Score badge color: green ≥70, amber ≥40, grey <40.

**Why fire-and-forget for saveLeadFn:** Lead capture must never block or break the chatbot conversation, so errors are silently dropped on the client.

**How to apply:** Any future write from the chatbot to the DB should follow the same pattern — call server fn in `.catch(() => {})`, never await in the chat message path.
