import { curriculumAction } from "../../engine/actions";
import type { KnowledgeRoute } from "../router";

export function handleCurriculum(): KnowledgeRoute {
  return {
    handled: true,
    response: curriculumAction(),
  };
}