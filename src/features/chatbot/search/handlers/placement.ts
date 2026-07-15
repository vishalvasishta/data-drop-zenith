import { placementAction } from "../../engine/actions";
import type { KnowledgeRoute } from "../router";

export function handlePlacement(): KnowledgeRoute {
  return {
    handled: true,
    response: placementAction(),
  };
}