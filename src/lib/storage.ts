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

  await client.uploadFromText(`enrollment:${id}`, JSON.stringify(record));

  // Update index
  const indexResult = await client.downloadAsText("enrollments:index");
  const index: string[] =
    indexResult.ok && indexResult.value
      ? JSON.parse(indexResult.value)
      : [];
  index.push(id);
  await client.uploadFromText("enrollments:index", JSON.stringify(index));

  return record;
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
  const indexResult = await client.downloadAsText("enrollments:index");
  if (!indexResult.ok || !indexResult.value) return [];

  const index: string[] = JSON.parse(indexResult.value);
  const results = await Promise.all(
    index.map(async (enrollId) => {
      const r = await client.downloadAsText(`enrollment:${enrollId}`);
      if (!r.ok || !r.value) return null;
      return JSON.parse(r.value) as Enrollment;
    }),
  );

  return (results.filter(Boolean) as Enrollment[]).sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );
}
