import type { BotResponse } from "../types";

export function mergeResponses(
  responses: BotResponse[],
): BotResponse {
  return {
    content: responses
      .map(r => r.content)
      .join("\n\n"),

    quickReplies: [
      ...new Set(
        responses.flatMap(r => r.quickReplies ?? []),
      ),
    ],

    followUpSuggestions: [
      ...new Set(
        responses.flatMap(
          r => r.followUpSuggestions ?? [],
        ),
      ),
    ],
  };
}