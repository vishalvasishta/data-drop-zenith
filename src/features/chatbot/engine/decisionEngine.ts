import type { BotResponse } from "../types";
import { searchKnowledge } from "./knowledgeSearch";

export interface DecisionResult {
  handled: boolean;
  response?: BotResponse;
}

export function decideResponse(
  message: string,
): DecisionResult {

  // 1. Knowledge
  const knowledge = searchKnowledge(message);

  if (knowledge.found) {
    return {
      handled: true,
      response: {
        content: knowledge.answer,
      },
    };
  }

  // Nobody handled it
  return {
    handled: false,
  };
}