import type { QuestionType } from "../engine/context/questionAnalyzer";
import { getFollowUps } from "./followUps";

export interface ConversationRecommendations {
  quickReplies: string[];
  followUps: string[];
}

export function getRecommendations(
  intent: QuestionType,
): ConversationRecommendations {
  return {
    quickReplies: [],
    followUps: getFollowUps(intent),
  };
}