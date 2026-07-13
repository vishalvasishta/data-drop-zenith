import type { BotResponse } from "../../types";
import type { ConversationStrategy } from "../strategy/strategyEngine";
import { STRATEGY_RESPONSES } from "../strategy/strategyResponses";
import { EMPATHY_LIBRARY } from "./empathyLibrary";
import type { Emotion } from "../analysis/emotion";

export interface BuildResponseRequest {
  strategy: ConversationStrategy;
  emotion: Emotion;
  response: BotResponse;
}

function pickRandom(items: string[]): string {
  if (items.length === 0) return "";
  return items[Math.floor(Math.random() * items.length)];
}

export function buildResponse({
  strategy,
  emotion,
  response,
}: BuildResponseRequest): BotResponse {

  const strategyPrefix =
    STRATEGY_RESPONSES[strategy] ?? "";

  const empathy =
    pickRandom(EMPATHY_LIBRARY[emotion]);

  const sections = [
    empathy,
    strategyPrefix,
    response.content,
  ].filter(Boolean);

  return {
    ...response,
    content: sections.join("\n\n"),
  };
}