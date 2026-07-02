import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import crypto from "crypto";
import Razorpay from "razorpay";
import {
  saveEnrollment,
  updateEnrollment,
  getAllEnrollments,
} from "./storage";

// ── Create Razorpay order + save pending enrollment ──────────────────────────
const createOrderInput = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(10),
  course: z.string().min(1),
  amount: z.number().positive(),
});

export const createOrder = createServerFn({ method: "POST" })
  .validator((raw: unknown) => createOrderInput.parse(raw))
  .handler(async ({ data }) => {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    // Persist enrollment as pending first
    const enrollment = await saveEnrollment({
      name: data.name,
      email: data.email,
      phone: data.phone,
      course: data.course,
      amount: data.amount,
      status: "pending",
    });

    // Create Razorpay order (amount in paise)
    const order = await razorpay.orders.create({
      amount: data.amount * 100,
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
    };
  });

// ── Verify Razorpay signature + mark paid ────────────────────────────────────
const verifyInput = z.object({
  enrollmentId: z.string(),
  razorpayOrderId: z.string(),
  razorpayPaymentId: z.string(),
  razorpaySignature: z.string(),
});

export const verifyPayment = createServerFn({ method: "POST" })
  .validator((raw: unknown) => verifyInput.parse(raw))
  .handler(async ({ data }) => {
    const body = `${data.razorpayOrderId}|${data.razorpayPaymentId}`;
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(body)
      .digest("hex");

    if (expected !== data.razorpaySignature) {
      throw new Error("Payment signature verification failed");
    }

    await updateEnrollment(data.enrollmentId, {
      status: "paid",
      razorpayPaymentId: data.razorpayPaymentId,
    });

    return { success: true };
  });

// ── Admin: fetch all enrollments (password-gated) ────────────────────────────
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
