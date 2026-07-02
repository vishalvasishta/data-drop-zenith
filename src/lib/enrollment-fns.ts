import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import crypto from "crypto";
import Razorpay from "razorpay";
import {
  saveEnrollment,
  getEnrollment,
  updateEnrollment,
  getAllEnrollments,
} from "./storage";

// ── Server-authoritative course catalogue ─────────────────────────────────────
// Amount is never trusted from the client — it is always looked up here.
export const COURSES = [
  { label: "Complete AI Career Program", amount: 4599 },
  { label: "Test Course", amount: 9 },
] as const;

export type CourseName = (typeof COURSES)[number]["label"];

function getCourse(name: string) {
  const course = COURSES.find((c) => c.label === name);
  if (!course) throw new Error(`Unknown course: ${name}`);
  return course;
}

function getRazorpay() {
  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });
}

// ── Create Razorpay order + save pending enrollment ───────────────────────────
const createOrderInput = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  course: z.string().min(1),
  // No `amount` field — server derives it from course name
});

export const createOrder = createServerFn({ method: "POST" })
  .validator((raw: unknown) => createOrderInput.parse(raw))
  .handler(async ({ data }) => {
    const course = getCourse(data.course); // throws if unknown
    const razorpay = getRazorpay();

    // Persist enrollment as pending before opening checkout
    const enrollment = await saveEnrollment({
      name: data.name,
      email: data.email,
      phone: data.phone,
      course: data.course,
      amount: course.amount, // server-authoritative
      status: "pending",
    });

    // Create Razorpay order (amount in paise)
    const order = await razorpay.orders.create({
      amount: course.amount * 100,
      currency: "INR",
      receipt: enrollment.id,
      notes: {
        course: data.course,
        enrollment_id: enrollment.id,
        student_name: data.name,
      },
    });

    await updateEnrollment(enrollment.id, {
      razorpayOrderId: order.id as string,
    });

    return {
      orderId: order.id as string,
      enrollmentId: enrollment.id,
      keyId: process.env.RAZORPAY_KEY_ID!,
      amount: course.amount, // send back so UI can show the correct figure
    };
  });

// ── Verify Razorpay signature + confirm payment server-side ───────────────────
const verifyInput = z.object({
  enrollmentId: z.string(),
  razorpayOrderId: z.string(),
  razorpayPaymentId: z.string(),
  razorpaySignature: z.string(),
});

export const verifyPayment = createServerFn({ method: "POST" })
  .validator((raw: unknown) => verifyInput.parse(raw))
  .handler(async ({ data }) => {
    // 1. Load the stored enrollment
    const enrollment = await getEnrollment(data.enrollmentId);
    if (!enrollment) throw new Error("Enrollment not found");

    // 2. Guard: ensure the submitted orderId matches what we stored
    if (enrollment.razorpayOrderId !== data.razorpayOrderId) {
      throw new Error("Order ID mismatch — possible tampering detected");
    }

    // 3. Verify HMAC signature
    const body = `${data.razorpayOrderId}|${data.razorpayPaymentId}`;
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest("hex");
    if (expected !== data.razorpaySignature) {
      throw new Error("Payment signature verification failed");
    }

    // 4. Fetch payment from Razorpay and verify amount + captured status
    const razorpay = getRazorpay();
    const payment = await razorpay.payments.fetch(data.razorpayPaymentId);
    const paidPaise = Number(payment.amount);
    const expectedPaise = enrollment.amount * 100;
    if (paidPaise < expectedPaise) {
      throw new Error(
        `Payment amount mismatch: expected ${expectedPaise} paise, got ${paidPaise}`,
      );
    }
    if (payment.status !== "captured" && payment.status !== "authorized") {
      throw new Error(`Payment not captured (status: ${payment.status})`);
    }

    // 5. Mark paid
    await updateEnrollment(data.enrollmentId, {
      status: "paid",
      razorpayPaymentId: data.razorpayPaymentId,
    });

    return { success: true };
  });

// ── Admin: fetch all enrollments (password-gated) ─────────────────────────────
const adminInput = z.object({ password: z.string() });

export const getAdminData = createServerFn({ method: "POST" })
  .validator((raw: unknown) => adminInput.parse(raw))
  .handler(async ({ data }) => {
    const adminPwd = process.env.ADMIN_PASSWORD;
    if (!adminPwd || data.password !== adminPwd) {
      throw new Error("Unauthorized");
    }
    return getAllEnrollments();
  });
