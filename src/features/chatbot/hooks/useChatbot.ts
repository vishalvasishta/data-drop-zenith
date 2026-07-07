import { useReducer, useCallback, useRef } from "react";
import type { ChatbotState, ChatbotAction, Message, ChatState, EnrollmentData, StudentProfile } from "../types";
import { generateId } from "../utils/formatters";
import { processInput, getWelcomeResponse } from "../engine/chatbotEngine";
import { mainMenuAction } from "../engine/actions";
import { detectObjection } from "../engine/objectionHandler";
import { detectObjectionLabel, computeLeadScore, INTEREST_STATES } from "../engine/leadIntelligence";
import {
  ROLE_QUICK_REPLIES,
  EDUCATION_QUESTION,
  EDUCATION_QUICK_REPLIES,
  CAREER_GOAL_QUESTION,
  CAREER_GOAL_QUICK_REPLIES,
} from "../data/conversations/welcome";
import { ANYTHING_ELSE_PROMPT } from "../data/conversations/mainMenu";
import {
  NOT_SURE_RECOMMENDATION,
  DEFAULT_RECOMMENDATION,
  studentRecommendation,
  workingProfessionalRecommendation,
  careerSwitcherRecommendation,
} from "../data/conversations/recommendations";

// ── Reducer — exhaustive switch, no type assertions ───────────────────────────
function chatbotReducer(state: ChatbotState, action: ChatbotAction): ChatbotState {
  switch (action.type) {
    case "OPEN":
      return { ...state, isOpen: true };
    case "CLOSE":
      return { ...state, isOpen: false };
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.payload] };
    case "SET_TYPING":
      return { ...state, isTyping: action.payload };
    case "SET_STATE":
      return { ...state, currentState: action.payload };
    case "SET_ENROLLMENT_DATA":
      return { ...state, enrollmentData: { ...state.enrollmentData, ...action.payload } };
    case "SET_PROFILE_ROLE":
      return { ...state, profile: { ...state.profile, role: action.payload } };
    case "SET_PROFILE_EDUCATION":
      return { ...state, profile: { ...state.profile, education: action.payload } };
    case "SET_PROFILE_CAREER_GOAL":
      return { ...state, profile: { ...state.profile, careerGoal: action.payload } };
    case "SET_PROFILE_INTERESTS":
      return { ...state, profile: { ...state.profile, interests: action.payload } };
    case "SET_PROFILE_OBJECTIONS":
      return { ...state, profile: { ...state.profile, objections: action.payload } };
    case "SET_PROFILE_LEAD_SCORE":
      return { ...state, profile: { ...state.profile, leadScore: action.payload } };
    case "SET_LEAD_GATE":
      return { ...state, isLeadGatePending: action.payload };
  }
}

// Strip a leading emoji + space from a quick-reply label (e.g. "📊 Data Analyst" → "Data Analyst")
function stripEmoji(label: string): string {
  return label.replace(/^[\p{Emoji}\uFE0F\s]+/u, "").trim();
}

// ── Build a personalized recommendation from the collected profile ────────────
function buildPersonalizedRecommendation(profile: StudentProfile): string {
  const { role, education, careerGoal } = profile;

  if (careerGoal === "❓ Not Sure Yet") {
    return NOT_SURE_RECOMMENDATION;
  }

  const goalLabel = careerGoal ? stripEmoji(careerGoal) : "your goal career";
  const educationLabel = education ?? "your background";

  switch (role) {
    case "🎓 Student":
      return studentRecommendation(educationLabel, goalLabel);
    case "💼 Working Professional":
      return workingProfessionalRecommendation(educationLabel, goalLabel);
    case "🔄 Career Switcher":
      return careerSwitcherRecommendation(educationLabel, goalLabel);
    default:
      return DEFAULT_RECOMMENDATION;
  }
}

// ── Initial state ─────────────────────────────────────────────────────────────
const INITIAL_STATE: ChatbotState = {
  currentState: "WELCOME",
  messages: [],
  isTyping: false,
  enrollmentData: {},
  isOpen: false,
  profile: { role: null, education: null, careerGoal: null, interests: [], objections: [], leadScore: 0 },
  isLeadGatePending: false,
};

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useChatbot() {
  const [state, dispatch] = useReducer(chatbotReducer, INITIAL_STATE);

  // Serialisation: queue pending send operations so rapid clicks don't interleave
  const queueRef = useRef<Array<() => Promise<void>>>([]);
  const processingRef = useRef(false);
  const hasWelcomed = useRef(false);
  // Always-current state ref so async callbacks read the latest state without
  // needing it as a dependency (which would create stale closures under rapid fire).
  const currentStateRef = useRef<ChatState>(INITIAL_STATE.currentState);
  // Always-current profile ref, same rationale — used to build the personalized
  // recommendation once role, education and careerGoal have all been collected.
  const profileRef = useRef<StudentProfile>(INITIAL_STATE.profile);
  // Set to true while the automatic post-onboarding lead-capture gate is active.
  // Prevents free-typed input from bypassing the form before it is submitted.
  // Cleared by confirmLead(). NOT set for the manual "📞 Talk to Counselor" path.
  const leadGateActive = useRef(false);

  const flushQueue = useCallback(async () => {
    if (processingRef.current) return;
    processingRef.current = true;
    while (queueRef.current.length > 0) {
      const task = queueRef.current.shift();
      if (task) await task();
    }
    processingRef.current = false;
  }, []);

  const enqueue = useCallback(
    (task: () => Promise<void>) => {
      queueRef.current.push(task);
      flushQueue();
    },
    [flushQueue],
  );

  // Keep ref in sync whenever reducer state changes
  const addMessage = useCallback((msg: Message) => {
    dispatch({ type: "ADD_MESSAGE", payload: msg });
  }, []);

  const buildBotMessage = useCallback(
    (content: string, extras: Partial<Message> = {}): Message => ({
      id: generateId(),
      content,
      sender: "bot",
      timestamp: new Date(),
      ...extras,
    }),
    [],
  );

  const showBotResponse = useCallback(
    async (content: string, extras: Partial<Message> = {}, delay = 600) => {
      dispatch({ type: "SET_TYPING", payload: true });
      await new Promise<void>((r) => setTimeout(r, delay));
      dispatch({ type: "SET_TYPING", payload: false });
      addMessage(buildBotMessage(content, extras));
    },
    [addMessage, buildBotMessage],
  );

  const open = useCallback(() => {
    dispatch({ type: "OPEN" });
    if (!hasWelcomed.current) {
      hasWelcomed.current = true;
      enqueue(async () => {
        const { response, nextState } = getWelcomeResponse();
        await showBotResponse(response.content, {
          quickReplies: response.quickReplies,
          component: response.component ?? null,
          faqData: response.faqData,
        });
        currentStateRef.current = nextState;
        dispatch({ type: "SET_STATE", payload: nextState });
      });
    }
  }, [enqueue, showBotResponse]);

  const close = useCallback(() => {
    dispatch({ type: "CLOSE" });
  }, []);

  const sendMessage = useCallback(
    (userInput: string) => {
      if (!userInput.trim()) return;
      enqueue(async () => {
        // Add user message
        addMessage({
          id: generateId(),
          content: userInput,
          sender: "user",
          timestamp: new Date(),
        });

        // Hard gate: while the post-onboarding lead-capture form is waiting for
        // submission, ignore any typed input so the main menu cannot be reached
        // by bypassing the form.
        if (leadGateActive.current) {
          await showBotResponse(
            "Please fill in your name and phone number in the form above to continue 👆",
          );
          return;
        }

        // Conversation profiling: welcome quick-reply captures the student's role,
        // then asks a follow-up education question, without touching the engine/parser.
        if (ROLE_QUICK_REPLIES.includes(userInput)) {
          profileRef.current = { ...profileRef.current, role: userInput };
          dispatch({ type: "SET_PROFILE_ROLE", payload: userInput });
          dispatch({ type: "SET_PROFILE_LEAD_SCORE", payload: computeLeadScore(profileRef.current) });
          await showBotResponse(EDUCATION_QUESTION, {
            quickReplies: EDUCATION_QUICK_REPLIES,
          });
          return;
        }

        // Education quick-reply captures education, then asks the career-goal question.
        if (EDUCATION_QUICK_REPLIES.includes(userInput)) {
          profileRef.current = { ...profileRef.current, education: userInput };
          dispatch({ type: "SET_PROFILE_EDUCATION", payload: userInput });
          dispatch({ type: "SET_PROFILE_LEAD_SCORE", payload: computeLeadScore(profileRef.current) });
          await showBotResponse(CAREER_GOAL_QUESTION, {
            quickReplies: CAREER_GOAL_QUICK_REPLIES,
          });
          return;
        }

        // Career-goal quick-reply captures the goal, shows a personalized
        // recommendation built from the full profile, then gates the main menu
        // behind the LeadCapture form. The main menu only appears after the
        // form is submitted (via confirmLead).
        if (CAREER_GOAL_QUICK_REPLIES.includes(userInput)) {
          profileRef.current = { ...profileRef.current, careerGoal: userInput };
          dispatch({ type: "SET_PROFILE_CAREER_GOAL", payload: userInput });
          dispatch({ type: "SET_PROFILE_LEAD_SCORE", payload: computeLeadScore(profileRef.current) });
          await showBotResponse(buildPersonalizedRecommendation(profileRef.current));

          // Automatically inject the lead-capture form — no quick replies so the
          // user cannot bypass it. The main menu is shown only after submission.
          await showBotResponse(
            "🎯 You're on the right path!\n\nBefore we continue, leave your name and phone number and one of our AI Career Advisors will personally call you to help plan your roadmap.",
            { component: "lead-capture" },
          );

          leadGateActive.current = true;
          dispatch({ type: "SET_LEAD_GATE", payload: true });
          currentStateRef.current = "CONTACT";
          dispatch({ type: "SET_STATE", payload: "CONTACT" });
          return;
        }

        // Objection handling: a lightweight keyword layer that runs BEFORE the
        // existing parser/state machine. It never changes ChatState directly —
        // if no objection is detected, we fall through to the normal parser below.
        const objectionResponse = detectObjection(userInput);
        if (objectionResponse) {
          // Track the objection label and recompute lead score (objections are high-intent signals)
          const objLabel = detectObjectionLabel(userInput);
          if (objLabel && !profileRef.current.objections.includes(objLabel)) {
            const newObjections = [...profileRef.current.objections, objLabel];
            profileRef.current = { ...profileRef.current, objections: newObjections };
            dispatch({ type: "SET_PROFILE_OBJECTIONS", payload: newObjections });
            dispatch({ type: "SET_PROFILE_LEAD_SCORE", payload: computeLeadScore(profileRef.current) });
          }
          await showBotResponse(objectionResponse);

          const menuResponse = mainMenuAction();
          await showBotResponse(ANYTHING_ELSE_PROMPT, {
            quickReplies: menuResponse.quickReplies,
          });

          currentStateRef.current = "MAIN_MENU";
          dispatch({ type: "SET_STATE", payload: "MAIN_MENU" });
          return;
        }

        // Read latest state from ref (not closure) to avoid stale-state races
        const { response, nextState } = processInput(currentStateRef.current, userInput);

        // Track interest from the state being entered and recompute lead score
        const interestLabel = INTEREST_STATES[nextState];
        if (interestLabel && !profileRef.current.interests.includes(interestLabel)) {
          const newInterests = [...profileRef.current.interests, interestLabel];
          profileRef.current = { ...profileRef.current, interests: newInterests };
          dispatch({ type: "SET_PROFILE_INTERESTS", payload: newInterests });
          dispatch({ type: "SET_PROFILE_LEAD_SCORE", payload: computeLeadScore(profileRef.current) });
        }

        await showBotResponse(response.content, {
          quickReplies: response.quickReplies,
          followUpSuggestions: response.followUpSuggestions,
          component: response.component ?? null,
          faqData: response.faqData,
        });

        currentStateRef.current = nextState;
        dispatch({ type: "SET_STATE", payload: nextState });
      });
    },
    [enqueue, addMessage, showBotResponse],
  );

  const setEnrollmentData = useCallback((data: Partial<EnrollmentData>) => {
    dispatch({ type: "SET_ENROLLMENT_DATA", payload: data });
  }, []);

  const confirmEnrollment = useCallback(() => {
    enqueue(async () => {
      await showBotResponse(
        "🎉 **Enrollment Successful!**\n\nWelcome to DATADROP! Check your email for your welcome pack, Discord invite, and batch details. Your AI career journey starts now! 🚀",
        { quickReplies: ["📞 Talk to Counselor", "❓ FAQs"] },
      );
      currentStateRef.current = "THANK_YOU";
      dispatch({ type: "SET_STATE", payload: "THANK_YOU" });
    });
  }, [enqueue, showBotResponse]);

  // Called by ChatWidget after a LeadCapture form submission. Advances the
  // conversation to the main menu regardless of which flow triggered the form
  // (automatic post-onboarding gate or manual "📞 Talk to Counselor" route).
  const confirmLead = useCallback(() => {
    leadGateActive.current = false; // lift the gate before showing menu
    enqueue(async () => {
      const menuResponse = mainMenuAction();
      await showBotResponse(menuResponse.content, { quickReplies: menuResponse.quickReplies });
      currentStateRef.current = "MAIN_MENU";
      dispatch({ type: "SET_STATE", payload: "MAIN_MENU" });
    });
  }, [enqueue, showBotResponse]);

  return {
    state,
    open,
    close,
    sendMessage,
    setEnrollmentData,
    confirmEnrollment,
    confirmLead,
  };
}
