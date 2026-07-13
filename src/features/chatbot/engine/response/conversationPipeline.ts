import { enhanceResponse } from "./responseEnhancer";
import type { BotResponse, StudentProfile } from "../../types";

export interface ConversationPipelineInput {
  userMessage: string;
  response: BotResponse;
  profile: StudentProfile;
}

export function runConversationPipeline({
  userMessage,
  response,
  profile,
}: ConversationPipelineInput): BotResponse {

  let finalResponse = response;

  finalResponse = enhanceResponse(
    finalResponse,
    profile,
  );

  return finalResponse;
}