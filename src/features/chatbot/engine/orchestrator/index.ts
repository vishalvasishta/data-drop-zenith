import type { BotResponse, ChatState, StudentProfile } from "../../types";
import { analyzeConversation } from "../analysis/conversationAnalyzer";
import { resolveContext } from "../contextResolver";
import { classifyConversationIntent } from "../context/conversationIntentClassifier";
import { processInput } from "../chatbotEngine";
import { searchKnowledge } from "../knowledgeSearch";
import { runConversationPipeline } from "../response/conversationPipeline";
export interface HandleMessageRequest {
  currentState: ChatState;
  userInput: string;
  profile: StudentProfile;
}

export interface HandleMessageResult {
  handled: boolean;
  response: BotResponse;
  nextState: ChatState;
}

export function handleMessage({
  currentState,
  userInput,
  profile,
}: HandleMessageRequest): HandleMessageResult {
  // Resolve conversational context
  const context = resolveContext(userInput);


  // Let the parser handle navigation first
  const parserResult = processInput(
    currentState,
    userInput,
  );

  if (parserResult.handled) {

    const enhancedResponse = runConversationPipeline({
      userMessage: userInput,
      response: parserResult.response,
      profile,
    });

    return {
      handled: true,
      response: enhancedResponse,
      nextState: parserResult.nextState,
    };
  }

  // Fallback to structured knowledge
  const knowledge = searchKnowledge(
    context.resolvedMessage,
  );

  if (knowledge.found && knowledge.response) {

    const enhancedResponse = runConversationPipeline({
      userMessage: userInput,
      response: knowledge.response,
      profile,
    });

    return {
      handled: true,
      response: enhancedResponse,
      nextState: currentState,
    };
  }

  // Final parser fallback
  return {
    handled: parserResult.handled,
    response: parserResult.response,
    nextState: parserResult.nextState,
  };
}