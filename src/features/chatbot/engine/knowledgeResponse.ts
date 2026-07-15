import type { KnowledgeAnswer } from "../types/knowledge";

export function createKnowledgeResponse(
  content: string,
): KnowledgeAnswer {
  return {
    found: true,
    response: {
      content,
    },
  };
}