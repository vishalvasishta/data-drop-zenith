import { Client } from "@replit/object-storage";

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

function getClient() {
  return new Client();
}

export async function saveEnrollment(
  data: Omit<Enrollment, "id" | "createdAt" | "updatedAt">,
): Promise<Enrollment> {
  const client = getClient();
  const id = `enr_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  const now = new Date().toISOString();
  const record: Enrollment = { ...data, id, createdAt: now, updatedAt: now };
  // Each enrollment is stored at its own key; no shared index to corrupt.
  await client.uploadFromText(`enrollment:${id}`, JSON.stringify(record));
  return record;
}

export async function getEnrollment(id: string): Promise<Enrollment | null> {
  const client = getClient();
  const result = await client.downloadAsText(`enrollment:${id}`);
  if (!result.ok || !result.value) return null;
  return JSON.parse(result.value) as Enrollment;
}

export async function updateEnrollment(
  id: string,
  updates: Partial<Enrollment>,
): Promise<Enrollment> {
  const client = getClient();
  const result = await client.downloadAsText(`enrollment:${id}`);
  if (!result.ok || !result.value) throw new Error("Enrollment not found");

  const record: Enrollment = JSON.parse(result.value);
  const updated: Enrollment = {
    ...record,
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await client.uploadFromText(`enrollment:${id}`, JSON.stringify(updated));
  return updated;
}

export async function getAllEnrollments(): Promise<Enrollment[]> {
  const client = getClient();
  // Prefix-scan: no shared mutable index, concurrent-safe.
  const listResult = await client.list({ prefix: "enrollment:" });
  if (!listResult.ok || !listResult.value || listResult.value.length === 0)
    return [];

  const results = await Promise.all(
    listResult.value.map(async (obj) => {
      const r = await client.downloadAsText(obj.name);
      if (!r.ok || !r.value) return null;
      return JSON.parse(r.value) as Enrollment;
    }),
  );

  return (results.filter(Boolean) as Enrollment[]).sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}
