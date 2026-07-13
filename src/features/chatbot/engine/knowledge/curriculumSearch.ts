import type { BotResponse } from "../../types";
import { buildKnowledgeIndex } from "./knowledgeIndexer";
import { findBestMatch } from "./searchUtils";

export function searchCurriculum(
  query: string,
): BotResponse | null {

  const index = buildKnowledgeIndex();

  const match = findBestMatch(query, index);

  if (!match) {
    return null;
  }

  return {
    content:
      `📘 ${match.item.title}\n\n` +
      `${match.item.content}`,
  };
}