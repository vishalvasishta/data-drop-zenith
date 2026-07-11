import type { BotResponse } from "../types";

export interface ResponseOptions {
  content: string;
  quickReplies?: string[];
  followUpSuggestions?: string[];
  nextState?: BotResponse["nextState"];
  component?: BotResponse["component"];
  faqData?: BotResponse["faqData"];
  intent?: string;
}

export function createResponse(
  options: ResponseOptions,
): BotResponse {
  return {
    content: options.content,
    quickReplies: options.quickReplies,
    followUpSuggestions: options.followUpSuggestions,
    nextState: options.nextState,
    component: options.component,
    faqData: options.faqData,
    intent: options.intent,
  };
}