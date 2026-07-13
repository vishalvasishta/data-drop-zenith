import { detectEmotion, type Emotion } from "./emotion";

export interface ConversationAnalysis {
  emotion: Emotion;
}

export function analyzeConversation(
  message: string,
): ConversationAnalysis {
  return {
    emotion: detectEmotion(message),
  };
}