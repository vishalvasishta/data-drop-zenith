import { CURRICULUM } from "../../data/knowledgeBase";

export interface KnowledgeIndexItem {
  id: string;
  title: string;
  content: string;
  keywords: string[];
  source: "curriculum";
}

export function buildKnowledgeIndex(): KnowledgeIndexItem[] {
  return CURRICULUM.map((topic) => ({
    id: topic.id,
    title: topic.title,
    content: topic.description,
    keywords: [
      topic.title,
      ...topic.skills,
      topic.project,
      topic.careerOutcome,
    ],
    source: "curriculum",
  }));
}