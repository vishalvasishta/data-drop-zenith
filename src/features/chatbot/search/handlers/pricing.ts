import { pricingAction } from "../../engine/actions";
import type { KnowledgeRoute } from "../router";
import type {
  QuestionIntent,
} from "../../engine/context/questionAnalyzer";
import { PAYMENT_INFO } from "../../data/knowledgeBase";

export function handlePricing(
  intent: QuestionIntent,
): KnowledgeRoute {
  console.log("[Pricing Handler]", intent);
  const subtype = intent.subtype;
  if (subtype === "refund") {
    return {
      handled: true,
      response: {
        content: PAYMENT_INFO.refundPolicy,
        quickReplies: [
          "💰 Course Fee",
          "📞 Talk to Counselor",
          "⬅️ Back to Menu",
        ],
      },
    };
  }
  if (subtype === "payment_method") {
    return {
      handled: true,
      response: {
        content: `Accepted payment methods:

  ${PAYMENT_INFO.methods.join(", ")}

  ${PAYMENT_INFO.gateway}`,
        quickReplies: [
          "💳 EMI",
          "↩️ Refund Policy",
          "⬅️ Back to Menu",
        ],
      },
    };
  }

  return {
    handled: true,
    response: pricingAction(),
  };
}