import { rememberContext,getConversationMemory, } from "../../engine/conversationMemory";
import type { BotResponse, ChatState, StudentProfile } from "../../types";
import { resolveContext } from "../contextResolver";
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
    console.log(
      "[Pipeline]",
      "User:", userInput,
      "NextState:", parserResult.nextState,
      "Handled:", parserResult.handled,
    );
    rememberContext({
      topic: parserResult.nextState,
      question: userInput,
    });
    console.log("[Memory]", getConversationMemory());

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
    rememberContext({
      topic: currentState,
      question: userInput,
    });
    console.log("[Memory]", getConversationMemory());

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