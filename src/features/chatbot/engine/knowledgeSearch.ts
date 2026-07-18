
import { createKnowledgeResponse } from "./knowledgeResponse";
import { routeKnowledgeIntent } from "../search/router";
import {
  analyzeQuestion,
  analyzeIntent,
} from "../engine/context/questionAnalyzer";
import { getLastTopic } from "../engine/conversationMemory";
import { normalizeText } from "../utils/textNormalization";
import {
  COURSE_INFO,
  PAYMENT_INFO,
  STUDENT_SUPPORT,
  TEACHING_METHODOLOGY,
  CERTIFICATIONS,
  ELIGIBILITY,
} from "../data/knowledgeBase";
import { searchFAQs } from "./search";
import type { KnowledgeAnswer } from "../types/knowledge";

export function searchKnowledge(question: string): KnowledgeAnswer {
  const q = normalizeText(question);
  const questionType = analyzeQuestion(q);
  const intent = analyzeIntent(q);

  const route = routeKnowledgeIntent(intent);  


  if (route.handled && route.response) {
    return {
      found: true,
      response: route.response,
      topic: route.topic,
    };
  }

  console.log("[Knowledge] Route not handled");

  console.log("[Knowledge] Route not handled");

  const lastTopic = getLastTopic();

  // ---------- Intelligent FAQ Search ----------
  const bestMatch = searchFAQs(question);

  if (bestMatch && bestMatch.score >= 3) {
    return createKnowledgeResponse(bestMatch.faq.answer);
  }

 

  return {
    found: false,
  };


}
