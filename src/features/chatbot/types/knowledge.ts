import type { BotResponse, ChatState } from "../types";
export interface KnowledgeAnswer {
  found: boolean;
  response?: BotResponse;
  topic?: ChatState;
}