import type { ChatState } from "../types";
export interface ConversationEvent {
  role: "user" | "bot";

  message: string;

  topic?: ChatState;

  intent?: string;

  entity?: string;

  timestamp: number;
}
export interface ConversationUpdate {
  topic?: ChatState;

  intent?: string;

  entity?: string;

  question?: string;
}
export interface ConversationContext {
  currentTopic?: ChatState;

  previousTopic?: ChatState;

  lastIntent?: string;

  lastEntity?: string;

  lastQuestion?: string;

  conversationHistory: ConversationEvent[];
}

let memory: ConversationContext = {
  currentTopic: undefined,

  previousTopic: undefined,

  lastIntent: undefined,

  lastEntity: undefined,

  lastQuestion: undefined,

  conversationHistory: [],
};


  export function rememberContext({
    topic,
    intent,
    entity,
    question,
  }: ConversationUpdate) {
  if (topic) {
    memory.previousTopic = memory.currentTopic;
    memory.currentTopic = topic;
  }

  if (intent) {
    memory.lastIntent = intent;
  }

  if (entity) {
    memory.lastEntity = entity;
  }

  if (question) {
    memory.lastQuestion = question;

    memory.conversationHistory.push({
      role: "user",
      message: question,
      topic: memory.currentTopic,
      intent: memory.lastIntent,
      entity: memory.lastEntity,
      timestamp: Date.now(),
    });

    // Keep only the last 20 conversation events
    if (memory.conversationHistory.length > 20) {
      memory.conversationHistory.shift();
    }
  }
}

export function getLastTopic(): ChatState | null {
  return memory.currentTopic ?? null;
}

export function clearConversationMemory() {
  memory.currentTopic = undefined;
  memory.previousTopic = undefined;

  memory.lastIntent = undefined;
  memory.lastEntity = undefined;
  memory.lastQuestion = undefined;

  memory.conversationHistory = [];
}