import { TOPIC_CONTEXT } from "./topicContext";
import { getLastTopic } from "./memoryManager";
import type { ChatState } from "../types";

export interface ContextResolution {
  resolved: boolean;

  topic: ChatState | null;

  entity: string | null;

  confidence: number;

  resolvedMessage: string;
}

export function resolveContext(message: string): ContextResolution {
  const lastTopic = getLastTopic();

  const normalizedMessage = message.toLowerCase();

  const contextualWords = [
    "it",
    "its",
    "they",
    "them",
    "their",
    "this",
    "that",
    "these",
    "those",
  ];

  const hasContextWord = contextualWords.some((word) =>
    normalizedMessage
      .split(/\s+/)
      .includes(word)
  );

  if (hasContextWord && lastTopic) {
    const topicContext = TOPIC_CONTEXT[lastTopic];

    if (topicContext) {
      const rewrittenMessage = message.replace(
        /\b(it|its|they|them|their|this|that|these|those)\b/gi,
        `the ${topicContext.defaultEntity}`,
      );

      return {
        resolved: true,
        topic: lastTopic,
        entity: topicContext.defaultEntity,
        confidence: 0.75,
        resolvedMessage: rewrittenMessage,
      };
    }

    return {
      resolved: true,
      topic: lastTopic,
      entity: null,
      confidence: 0.75,
      resolvedMessage: message,
    };
  }

  return {
    resolved: false,
    topic: lastTopic,
    entity: null,
    confidence: 0,
    resolvedMessage: message,
  };
}