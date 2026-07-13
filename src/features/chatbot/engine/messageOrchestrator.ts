import type { BotResponse, ChatState } from "../types";
import { resolveContext } from "./contextResolver";
import { classifyConversationIntent } from "./context/conversationIntentClassifier";
import { processInput } from "./chatbotEngine";
import { searchKnowledge } from "./knowledgeSearch";

export interface MessageRequest {
  currentState: ChatState;
  userInput: string;
}

export interface MessageResult {
  response: BotResponse;
  nextState: ChatState;
}

export function handleMessage(
  request: MessageRequest,
): MessageResult {

  const context = resolveContext(request.userInput);

  const conversationIntent =
    classifyConversationIntent(context.resolvedMessage);

  console.log(
    "[Conversation Intent]",
    conversationIntent.intent,
    conversationIntent.confidence,
  );

  const parserResult = processInput(
    request.currentState,
    request.userInput,
  );

  if (parserResult.handled) {
    return {
      response: parserResult.response,
      nextState: parserResult.nextState,
    };
  }

  const knowledge = searchKnowledge(
    context.resolvedMessage,
  );

  if (knowledge.found && knowledge.response) {
    return {
      response: knowledge.response,
      nextState: request.currentState,
    };
  }

  return {
    response: parserResult.response,
    nextState: parserResult.nextState,
  };
}