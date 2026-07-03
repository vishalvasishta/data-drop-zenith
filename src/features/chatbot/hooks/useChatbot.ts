import { useReducer, useCallback, useRef } from 'react';
import type { ChatbotState, ChatbotAction, Message, ChatState, EnrollmentData } from '../types';
import { generateId } from '../utils/formatters';
import { processInput, getWelcomeResponse } from '../engine/chatbotEngine';

// ── Reducer — exhaustive switch, no type assertions ───────────────────────────
function chatbotReducer(state: ChatbotState, action: ChatbotAction): ChatbotState {
  switch (action.type) {
    case 'OPEN':
      return { ...state, isOpen: true };
    case 'CLOSE':
      return { ...state, isOpen: false };
    case 'ADD_MESSAGE':
      return { ...state, messages: [...state.messages, action.payload] };
    case 'SET_TYPING':
      return { ...state, isTyping: action.payload };
    case 'SET_STATE':
      return { ...state, currentState: action.payload };
    case 'SET_ENROLLMENT_DATA':
      return { ...state, enrollmentData: { ...state.enrollmentData, ...action.payload } };
  }
}

// ── Initial state ─────────────────────────────────────────────────────────────
const INITIAL_STATE: ChatbotState = {
  currentState: 'WELCOME',
  messages: [],
  isTyping: false,
  enrollmentData: {},
  isOpen: false,
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
    dispatch({ type: 'ADD_MESSAGE', payload: msg });
  }, []);

  const buildBotMessage = useCallback(
    (content: string, extras: Partial<Message> = {}): Message => ({
      id: generateId(),
      content,
      sender: 'bot',
      timestamp: new Date(),
      ...extras,
    }),
    [],
  );

  const showBotResponse = useCallback(
    async (content: string, extras: Partial<Message> = {}, delay = 600) => {
      dispatch({ type: 'SET_TYPING', payload: true });
      await new Promise<void>((r) => setTimeout(r, delay));
      dispatch({ type: 'SET_TYPING', payload: false });
      addMessage(buildBotMessage(content, extras));
    },
    [addMessage, buildBotMessage],
  );

  const open = useCallback(() => {
    dispatch({ type: 'OPEN' });
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
        dispatch({ type: 'SET_STATE', payload: nextState });
      });
    }
  }, [enqueue, showBotResponse]);

  const close = useCallback(() => {
    dispatch({ type: 'CLOSE' });
  }, []);

  const sendMessage = useCallback(
    (userInput: string) => {
      if (!userInput.trim()) return;
      enqueue(async () => {
        // Add user message
        addMessage({
          id: generateId(),
          content: userInput,
          sender: 'user',
          timestamp: new Date(),
        });

        // Read latest state from ref (not closure) to avoid stale-state races
        const { response, nextState } = processInput(currentStateRef.current, userInput);

        await showBotResponse(response.content, {
          quickReplies: response.quickReplies,
          component: response.component ?? null,
          faqData: response.faqData,
        });

        currentStateRef.current = nextState;
        dispatch({ type: 'SET_STATE', payload: nextState });
      });
    },
    [enqueue, addMessage, showBotResponse],
  );

  const setEnrollmentData = useCallback((data: Partial<EnrollmentData>) => {
    dispatch({ type: 'SET_ENROLLMENT_DATA', payload: data });
  }, []);

  const confirmEnrollment = useCallback(() => {
    enqueue(async () => {
      await showBotResponse(
        '🎉 **Enrollment Successful!**\n\nWelcome to DATADROP! Check your email for your welcome pack, Discord invite, and batch details. Your AI career journey starts now! 🚀',
        { quickReplies: ['📞 Talk to Counselor', '❓ FAQs'] },
      );
      currentStateRef.current = 'THANK_YOU';
      dispatch({ type: 'SET_STATE', payload: 'THANK_YOU' });
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
