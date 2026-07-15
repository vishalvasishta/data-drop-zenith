import { rewriteMessage } from "./context/messageRewriter";
import { hasContextPronoun } from "./context/pronounResolver";
import { TOPIC_CONTEXT } from "./topicContext";
import {
  getContextSnapshot,
  getLastTopic,
} from "./conversationMemory";
import type { ChatState } from "../types";
export interface ResolvedInput {
  /**
   * The exact message the user typed.
   */
  original: string;

  /**
   * The message after context resolution.
   */
  resolvedMessage: string;

  /**
   * Whether conversation context was used.
   */
  usedContext: boolean;

  /**
   * Semantic topic (not ChatState).
   * Examples:
   * "course"
   * "pricing"
   * "curriculum"
   * "placement"
   */
  topic?: string;

  /**
   * Specific entity being discussed.
   * Examples:
   * "certificate"
   * "projects"
   * "mentor"
   */
  entity?: string;

  /**
   * Resolved intent name.
   */
  intent?: string;

  /**
   * Resolver confidence.
   * 0.0 → 1.0
   */
  confidence: number;
}

export interface ContextResolution {
  resolved: boolean;

  topic: ChatState | null;

  entity: string | null;

  confidence: number;

  resolvedMessage: string;
}

export function resolveContext(message: string): ContextResolution {
  const lastTopic = getLastTopic();
  const context = getContextSnapshot();
  const normalizedMessage = message.toLowerCase();
  const hasContextWord = hasContextPronoun(normalizedMessage);

  if (hasContextWord && lastTopic) {
    const topicContext = TOPIC_CONTEXT[lastTopic];

    if (topicContext) {
      const rewrittenMessage = rewriteMessage(
        message,
        topicContext.defaultEntity,
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