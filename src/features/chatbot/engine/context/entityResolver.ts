import type { ChatState } from "../types";
import { TOPIC_CONTEXT } from "../conversationMemory";

export interface ResolvedEntity {
  topic: ChatState;
  entity: string | null;
}

/**
 * Resolves the default entity for a topic.
 */
export function resolveEntity(
  topic: ChatState | null,
): ResolvedEntity | null {
  if (!topic) {
    return null;
  }

  const topicContext = TOPIC_CONTEXT[topic];

  if (!topicContext) {
    return {
      topic,
      entity: null,
    };
  }

  return {
    topic,
    entity: topicContext.defaultEntity,
  };
}