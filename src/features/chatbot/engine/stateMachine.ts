import type { StateHandlerMap, BotResponse, ChatState } from '../types';
import {
  welcomeAction, mainMenuAction, aboutAction, roadmapAction,
  curriculumAction, careersAction, placementAction, projectsAction,
  pricingAction, bonusesAction, enrollmentAction, paymentAction,
  faqAction, studentSupportAction, contactAction, thankYouAction,
} from './actions';

// ── Dispatch table — one entry per state, no nested if/else ──────────────────
export const STATE_MACHINE: StateHandlerMap = {
  WELCOME:         { enter: welcomeAction,        quickReplies: () => [] },
  MAIN_MENU:       { enter: mainMenuAction,        quickReplies: () => [] },
  ABOUT:           { enter: aboutAction,           quickReplies: () => [] },
  ROADMAP:         { enter: roadmapAction,         quickReplies: () => [] },
  CURRICULUM:      { enter: curriculumAction,      quickReplies: () => [] },
  CAREERS:         { enter: careersAction,         quickReplies: () => [] },
  PLACEMENT:       { enter: placementAction,       quickReplies: () => [] },
  PROJECTS:        { enter: projectsAction,        quickReplies: () => [] },
  PRICING:         { enter: pricingAction,         quickReplies: () => [] },
  BONUSES:         { enter: bonusesAction,         quickReplies: () => [] },
  ENROLLMENT:      { enter: enrollmentAction,      quickReplies: () => [] },
  PAYMENT:         { enter: paymentAction,         quickReplies: () => [] },
  FAQ:             { enter: faqAction,             quickReplies: () => [] },
  STUDENT_SUPPORT: { enter: studentSupportAction,  quickReplies: () => [] },
  CONTACT:         { enter: contactAction,         quickReplies: () => [] },
  THANK_YOU:       { enter: thankYouAction,        quickReplies: () => [] },
};

export function getStateResponse(state: ChatState): BotResponse {
  return STATE_MACHINE[state].enter();
}
