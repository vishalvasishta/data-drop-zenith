import { put, list, get } from "@vercel/blob";

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

const PREFIX = "enrollments/";

// Read the full text body from a private-blob stream.
async function streamToText(stream: ReadableStream<Uint8Array>): Promise<string> {
  return new Response(stream).text();
}

// ── Write ─────────────────────────────────────────────────────────────────────

export async function saveEnrollment(
  data: Omit<Enrollment, "id" | "createdAt" | "updatedAt">,
): Promise<Enrollment> {
  const id = `enr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const now = new Date().toISOString();
  const record: Enrollment = { ...data, id, createdAt: now, updatedAt: now };
  await put(`${PREFIX}${id}.json`, JSON.stringify(record), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
  return record;
}

export async function updateEnrollment(
  id: string,
  updates: Partial<Enrollment>,
): Promise<Enrollment> {
  const existing = await getEnrollment(id);
  if (!existing) throw new Error("Enrollment not found");
  const updated: Enrollment = {
    ...existing,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await put(`${PREFIX}${id}.json`, JSON.stringify(updated), {
    access: "private",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
  return updated;
}

// ── Read ──────────────────────────────────────────────────────────────────────

export async function getEnrollment(id: string): Promise<Enrollment | null> {
  const result = await get(`${PREFIX}${id}.json`, { access: "private" });
  if (!result || result.statusCode !== 200 || !result.stream) return null;
  const text = await streamToText(result.stream);
  return JSON.parse(text) as Enrollment;
}

export async function getAllEnrollments(): Promise<Enrollment[]> {
  const { blobs } = await list({ prefix: PREFIX });
  if (!blobs.length) return [];

  const results = await Promise.all(
    blobs.map(async (blob) => {
      const result = await get(blob.pathname, { access: "private" });
      if (!result || result.statusCode !== 200 || !result.stream) return null;
      const text = await streamToText(result.stream);
      return JSON.parse(text) as Enrollment;
    }),
  );

  return (results.filter(Boolean) as Enrollment[]).sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}
