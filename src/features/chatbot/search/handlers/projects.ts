import { projectsAction } from "../../engine/actions";
import type { KnowledgeRoute } from "../router";

export function handleProjects(): KnowledgeRoute {
  return {
    handled: true,
    response: projectsAction(),
  };
}