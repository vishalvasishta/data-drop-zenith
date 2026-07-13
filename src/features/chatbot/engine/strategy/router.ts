import type { BotResponse } from "../../types";
import type { ConversationIntentResult } from "../context/conversationIntent";

import { handleInformationIntent } from "./information";
import { handleConfusionIntent } from "./confusion";
import { handleBuyingSignalIntent } from "./buyingSignal";

export function routeConversationIntent(
  result: ConversationIntentResult,
): BotResponse | null {

  switch (result.intent) {

    case "information":
      return handleInformationIntent(result);

    case "confusion":
      return handleConfusionIntent(result);

    case "buying_signal":
      return handleBuyingSignalIntent(result);

    default:
      return null;
  }
}