// ── Chat States ───────────────────────────────────────────────────────────────
export type ChatState =
  | 'WELCOME'
  | 'MAIN_MENU'
  | 'ABOUT'
  | 'ROADMAP'
  | 'CURRICULUM'
  | 'CAREERS'
  | 'PLACEMENT'
  | 'PROJECTS'
  | 'PRICING'
  | 'BONUSES'
  | 'ENROLLMENT'
  | 'PAYMENT'
  | 'FAQ'
  | 'STUDENT_SUPPORT'
  | 'CONTACT'
  | 'THANK_YOU';

// ── Primitives ────────────────────────────────────────────────────────────────
export type MessageSender = 'bot' | 'user';
export type SpecialComponent = 'faq' | 'enroll' | 'lead-capture' | null;

// ── Domain Models ─────────────────────────────────────────────────────────────
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CourseTopic {
  title: string;
  description: string;
  careerOutcome: string;
  project: string;
  estimatedDuration: string;
}

export interface MenuOption {
  id: string;
  label: string;
  icon: string;
  targetState: ChatState;
  description: string;
}

export interface EnrollmentData {
  name: string;
  phone: string;
  email: string;
  city: string;
  education: string;
  profession: string;
  careerGoal: string;
}

// ── Messaging ─────────────────────────────────────────────────────────────────
export interface Message {
  id: string;
  content: string;
  sender: MessageSender;
  timestamp: Date;
  quickReplies?: string[];
  component?: SpecialComponent;
  faqData?: FAQ[];
}

// ── Engine Types ──────────────────────────────────────────────────────────────
export interface BotResponse {
  content: string;
  quickReplies?: string[];
  nextState?: ChatState;
  component?: SpecialComponent;
  faqData?: FAQ[];
}

export interface StateHandler {
  enter: (userInput?: string) => BotResponse;
  quickReplies: () => string[];
}

export type StateHandlerMap = Record<ChatState, StateHandler>;

// ── Chatbot Global State ──────────────────────────────────────────────────────
export interface ChatbotState {
  currentState: ChatState;
  messages: Message[];
  isTyping: boolean;
  enrollmentData: Partial<EnrollmentData>;
  isOpen: boolean;
}

export type ChatbotAction =
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'ADD_MESSAGE'; payload: Message }
  | { type: 'SET_TYPING'; payload: boolean }
  | { type: 'SET_STATE'; payload: ChatState }
  | { type: 'SET_ENROLLMENT_DATA'; payload: Partial<EnrollmentData> };
