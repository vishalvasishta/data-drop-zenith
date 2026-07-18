import { getContextSnapshot } from "../conversationMemory";

export interface FollowUpResolution {
  resolved: boolean;
  rewrittenMessage: string;
}

const PRICING_FOLLOWUPS = [
  "emi",
  "installment",
  "installments",
  "upi",
  "refund",
  "payment",
  "payments",
  "card",
  "cards",
  "credit card",
  "debit card",
  "net banking",
  "wallet",
  "wallets",
];

export function resolveFollowUp(
  message: string,
): FollowUpResolution {
  const context = getContextSnapshot();

  const normalized = message.trim().toLowerCase();

  if (
    context.topic === "PRICING" &&
    PRICING_FOLLOWUPS.includes(normalized)
  ) {
    console.log(
      "[FollowUp]",
      `"${message}" → "pricing ${normalized}"`
    );
    return {
      resolved: true,
      rewrittenMessage: `pricing ${normalized}`,
    };
  }

  return {
    resolved: false,
    rewrittenMessage: message,
  };
}