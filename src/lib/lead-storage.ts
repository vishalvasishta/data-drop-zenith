import { getPool } from "./db";

// ── Domain model ──────────────────────────────────────────────────────────────

export interface Lead {
  id: string;
  name: string;
  phone: string;
  role: string | null;
  education: string | null;
  careerGoal: string | null;
  leadScore: number;
  interests: string[];
  objections: string[];
  createdAt: string;
}

// ── DB row shape (snake_case from Postgres) ────────────────────────────────────

type LeadRow = {
  id: string;
  name: string;
  phone: string;
  role: string | null;
  education: string | null;
  career_goal: string | null;
  lead_score: number;
  interests: string[];
  objections: string[];
  created_at: Date;
};

// ── Mapper ─────────────────────────────────────────────────────────────────────

function rowToLead(row: LeadRow): Lead {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    role: row.role,
    education: row.education,
    careerGoal: row.career_goal,
    leadScore: row.lead_score,
    interests: row.interests ?? [],
    objections: row.objections ?? [],
    createdAt: row.created_at.toISOString(),
  };
}

// ── Table bootstrap (idempotent) ───────────────────────────────────────────────

async function ensureLeadsTable(): Promise<void> {
  const pool = getPool();
  await pool.query(`
    CREATE TABLE IF NOT EXISTS leads (
      id           TEXT        PRIMARY KEY,
      name         TEXT        NOT NULL,
      phone        TEXT        NOT NULL UNIQUE,
      role         TEXT,
      education    TEXT,
      career_goal  TEXT,
      lead_score   INTEGER     NOT NULL DEFAULT 0,
      interests    TEXT[]      NOT NULL DEFAULT '{}',
      objections   TEXT[]      NOT NULL DEFAULT '{}',
      created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  // Add UNIQUE constraint to existing tables that were created without it.
  
}

// ── Write ──────────────────────────────────────────────────────────────────────

export async function saveLead(
  data: Omit<Lead, "id" | "createdAt">,
): Promise<Lead> {
  await ensureLeadsTable();
  const id = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const pool = getPool();
  const result = await pool.query<LeadRow>(
    `INSERT INTO leads
       (id, name, phone, role, education, career_goal, lead_score, interests, objections)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     ON CONFLICT (phone) DO UPDATE SET
       name        = EXCLUDED.name,
       role        = EXCLUDED.role,
       education   = EXCLUDED.education,
       career_goal = EXCLUDED.career_goal,
       lead_score  = EXCLUDED.lead_score,
       interests   = EXCLUDED.interests,
       objections  = EXCLUDED.objections
     RETURNING *`,
    [
      id,
      data.name,
      data.phone,
      data.role ?? null,
      data.education ?? null,
      data.careerGoal ?? null,
      data.leadScore,
      data.interests,
      data.objections,
    ],
  );
  return rowToLead(result.rows[0]);
}

// ── Read ───────────────────────────────────────────────────────────────────────

export async function getAllLeads(): Promise<Lead[]> {
  await ensureLeadsTable();
  const pool = getPool();
  const result = await pool.query<LeadRow>(
    "SELECT * FROM leads ORDER BY created_at DESC",
  );
  return result.rows.map(rowToLead);
}
