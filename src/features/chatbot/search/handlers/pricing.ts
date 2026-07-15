import { pricingAction } from "../../engine/actions";
import type { KnowledgeRoute } from "../router";

export function handlePricing(): KnowledgeRoute {
  return {
    handled: true,
    response: pricingAction(),
  };
}