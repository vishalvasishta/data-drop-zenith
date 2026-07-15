import type { BotResponse } from "../types";

export interface KnowledgeAnswer {
  found: boolean;
  response?: BotResponse;
}