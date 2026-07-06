import { getPool } from "./db";

export interface Enrollment {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  amount: number;
  status: "pending" | "paid" | "failed";
  razorpayOrderId?: string;
  razorpayPaymentId?: string;
  createdAt: string;
  updatedAt: string;
}

type EnrollmentRow = {
  id: string;
  name: string;
  email: string;
  phone: string;
  course: string;
  amount: number;
  status: "pending" | "paid" | "failed";
  razorpay_order_id: string | null;
  razorpay_payment_id: string | null;
  created_at: Date;
  updated_at: Date;
};

function rowToEnrollment(row: EnrollmentRow): Enrollment {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    course: row.course,
    amount: row.amount,
    status: row.status,
    razorpayOrderId: row.razorpay_order_id ?? undefined,
    razorpayPaymentId: row.razorpay_payment_id ?? undefined,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  };
}

// ── Write ─────────────────────────────────────────────────────────────────────

export async function saveEnrollment(
  data: Omit<Enrollment, "id" | "createdAt" | "updatedAt">,
): Promise<Enrollment> {
  const id = `enr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const pool = getPool();
  const result = await pool.query<EnrollmentRow>(
    `INSERT INTO enrollments (id, name, email, phone, course, amount, status, razorpay_order_id, razorpay_payment_id)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     RETURNING *`,
    [
      id,
      data.name,
      data.email,
      data.phone,
      data.course,
      data.amount,
      data.status,
      data.razorpayOrderId ?? null,
      data.razorpayPaymentId ?? null,
    ],
  );
  return rowToEnrollment(result.rows[0]);
}

export async function updateEnrollment(
  id: string,
  updates: Partial<Enrollment>,
): Promise<Enrollment> {
  const existing = await getEnrollment(id);
  if (!existing) throw new Error("Enrollment not found");

  const merged = { ...existing, ...updates };
  const pool = getPool();
  const result = await pool.query<EnrollmentRow>(
    `UPDATE enrollments
     SET name = $2, email = $3, phone = $4, course = $5, amount = $6, status = $7,
         razorpay_order_id = $8, razorpay_payment_id = $9, updated_at = NOW()
     WHERE id = $1
     RETURNING *`,
    [
      id,
      merged.name,
      merged.email,
      merged.phone,
      merged.course,
      merged.amount,
      merged.status,
      merged.razorpayOrderId ?? null,
      merged.razorpayPaymentId ?? null,
    ],
  );
  return rowToEnrollment(result.rows[0]);
}

// ── Read ──────────────────────────────────────────────────────────────────────

export async function getEnrollment(id: string): Promise<Enrollment | null> {
  const pool = getPool();
  const result = await pool.query<EnrollmentRow>(
    "SELECT * FROM enrollments WHERE id = $1",
    [id],
  );
  if (result.rows.length === 0) return null;
  return rowToEnrollment(result.rows[0]);
}

export async function getAllEnrollments(): Promise<Enrollment[]> {
  const pool = getPool();
  const result = await pool.query<EnrollmentRow>(
    "SELECT * FROM enrollments ORDER BY created_at DESC",
  );
  return result.rows.map(rowToEnrollment);
}
