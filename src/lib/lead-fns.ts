import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { saveLead, getAllLeads } from "./lead-storage";

// ── In-memory rate limiter ─────────────────────────────────────────────────────
// Key: normalised phone number. Value: { count, windowStart }.
// Allows at most RATE_LIMIT_MAX submissions per phone per RATE_LIMIT_WINDOW_MS.
// Module-level singleton — resets on process restart, which is fine for this scope.

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour

const rateLimitMap = new Map<string, { count: number; windowStart: number }>();

function checkRateLimit(phone: string): void {
  const now = Date.now();
  const entry = rateLimitMap.get(phone);
  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(phone, { count: 1, windowStart: now });
    return;
  }
  if (entry.count >= RATE_LIMIT_MAX) {
    throw new Error("Too many submissions. Please try again later.");
  }
  entry.count += 1;
}

// Prune stale entries periodically so the Map doesn't grow unboundedly.
setInterval(
  () => {
    const cutoff = Date.now() - RATE_LIMIT_WINDOW_MS;
    for (const [key, val] of rateLimitMap) {
      if (val.windowStart < cutoff) rateLimitMap.delete(key);
    }
  },
  RATE_LIMIT_WINDOW_MS,
);

// ── Save a lead (called from the chatbot LeadCapture form) ─────────────────────
// No session auth — public write from the chatbot widget.
// Protected by: Zod validation, phone-based rate limiting (3 per hour per number).

const saveLeadInput = z.object({
  name: z.string().min(1).max(120),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Invalid Indian mobile number"),
  role: z.string().max(80).nullable(),
  education: z.string().max(120).nullable(),
  careerGoal: z.string().max(120).nullable(),
  leadScore: z.number().int().min(0).max(100),
  interests: z.array(z.string().max(60)).max(20),
  objections: z.array(z.string().max(60)).max(20),
});

export const saveLeadFn = createServerFn({ method: "POST" })
  .validator((raw: unknown) => saveLeadInput.parse(raw))
  .handler(async ({ data }) => {
    checkRateLimit(data.phone);
    await saveLead(data);
    return { ok: true };
  });

// ── Fetch all leads (admin-gated) ──────────────────────────────────────────────

const getLeadsInput = z.object({ password: z.string() });

export const getLeadsFn = createServerFn({ method: "POST" })
  .validator((raw: unknown) => getLeadsInput.parse(raw))
  .handler(async ({ data }) => {
    const adminPwd = process.env.ADMIN_PASSWORD;
    if (!adminPwd || data.password !== adminPwd) {
      throw new Error("Unauthorized");
    }
    return getAllLeads();
  });
