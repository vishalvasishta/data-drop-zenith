import { useReducer, useCallback, useRef } from "react";
import type { ChatbotState, ChatbotAction, Message, ChatState, EnrollmentData, StudentProfile } from "../types";
import { generateId } from "../utils/formatters";
import { processInput, getWelcomeResponse } from "../engine/chatbotEngine";
import { mainMenuAction } from "../engine/actions";

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
  }
}

// ── Conversation profiling: welcome role quick replies ────────────────────────
const ROLE_QUICK_REPLIES = ["🎓 Student", "💼 Working Professional", "🔄 Career Switcher", "🤔 Just Exploring"];
const EDUCATION_QUICK_REPLIES = ["Intermediate", "Degree", "B.Tech", "B.Com", "B.Sc", "MBA", "Other"];
const CAREER_GOAL_QUICK_REPLIES = [
  "📊 Data Analyst",
  "🤖 AI Engineer",
  "📈 Data Scientist",
  "💼 Business Analyst",
  "❓ Not Sure Yet",
];

// Strip a leading emoji + space from a quick-reply label (e.g. "📊 Data Analyst" → "Data Analyst")
function stripEmoji(label: string): string {
  return label.replace(/^[\p{Emoji}\uFE0F\s]+/u, "").trim();
}

// ── Build a personalized recommendation from the collected profile ────────────
function buildPersonalizedRecommendation(profile: StudentProfile): string {
  const { role, education, careerGoal } = profile;

  if (careerGoal === "❓ Not Sure Yet") {
    return "No worries at all! I'd recommend exploring all the AI career paths we offer — Data Analyst, Data Scientist, AI Engineer, and Business Analyst — so you can see which one excites you the most.";
  }

  const goalLabel = careerGoal ? stripEmoji(careerGoal) : "your goal career";
  const educationLabel = education ?? "your background";

  switch (role) {
    case "🎓 Student":
      return `Excellent choice! Since you're a ${educationLabel} student aiming to become a ${goalLabel}, this program starts with Python fundamentals and gradually builds your SQL, Power BI, Statistics, Machine Learning and AI skills.`;
    case "💼 Working Professional":
      return `Great goal! As a working professional with a ${educationLabel} background aiming for a career transition into ${goalLabel}, this program is designed to fit around your schedule while building the practical, job-ready skills you need for that transition.`;
    case "🔄 Career Switcher":
      return `Perfect! Switching careers into ${goalLabel} is a big step, and with your ${educationLabel} background, this program gives you structured, step-by-step learning — from the fundamentals to job-ready skills — to make that switch smoothly.`;
    default:
      return `Great! Based on what you've shared, I'd recommend exploring all the AI career paths we offer — Data Analyst, Data Scientist, AI Engineer, and Business Analyst — to find the best fit for you.`;
  }
}

// ── Initial state ─────────────────────────────────────────────────────────────
const INITIAL_STATE: ChatbotState = {
  currentState: "WELCOME",
  messages: [],
  isTyping: false,
  enrollmentData: {},
  isOpen: false,
  profile: { role: null, education: null, careerGoal: null },
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

        // Conversation profiling: welcome quick-reply captures the student's role,
        // then asks a follow-up education question, without touching the engine/parser.
        if (ROLE_QUICK_REPLIES.includes(userInput)) {
          profileRef.current = { ...profileRef.current, role: userInput };
          dispatch({ type: "SET_PROFILE_ROLE", payload: userInput });
          await showBotResponse("Great! What's your current education?", {
            quickReplies: EDUCATION_QUICK_REPLIES,
          });
          return;
        }

        // Education quick-reply captures education, then asks the career-goal question.
        if (EDUCATION_QUICK_REPLIES.includes(userInput)) {
          profileRef.current = { ...profileRef.current, education: userInput };
          dispatch({ type: "SET_PROFILE_EDUCATION", payload: userInput });
          await showBotResponse("What career are you aiming for?", {
            quickReplies: CAREER_GOAL_QUICK_REPLIES,
          });
          return;
        }

        // Career-goal quick-reply captures the goal, shows a personalized
        // recommendation built from the full profile, then returns to the main menu.
        if (CAREER_GOAL_QUICK_REPLIES.includes(userInput)) {
          profileRef.current = { ...profileRef.current, careerGoal: userInput };
          dispatch({ type: "SET_PROFILE_CAREER_GOAL", payload: userInput });
          await showBotResponse(buildPersonalizedRecommendation(profileRef.current));

          const menuResponse = mainMenuAction();
          await showBotResponse(menuResponse.content, { quickReplies: menuResponse.quickReplies });

          currentStateRef.current = "MAIN_MENU";
          dispatch({ type: "SET_STATE", payload: "MAIN_MENU" });
          return;
        }

        // Read latest state from ref (not closure) to avoid stale-state races
        const { response, nextState } = processInput(currentStateRef.current, userInput);

        await showBotResponse(response.content, {
          quickReplies: response.quickReplies,
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

  return {
    state,
    open,
    close,
    sendMessage,
    setEnrollmentData,
    confirmEnrollment,
  };
}
