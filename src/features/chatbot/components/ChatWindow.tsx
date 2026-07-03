import { motion, AnimatePresence, type Transition } from "framer-motion";
import { ChatHeader } from "./ChatHeader";
import { ChatBody } from "./ChatBody";
import { ChatInput } from "./ChatInput";
import type { Message, EnrollmentData } from "../types";

interface ChatWindowProps {
  isOpen: boolean;
  messages: Message[];
  isTyping: boolean;
  onClose: () => void;
  onMinimize: () => void;
  onReset: () => void;
  onSend: (text: string) => void;
  onQuickReply: (reply: string) => void;
  onEnrollSubmit: (data: EnrollmentData) => void;
  onLeadSubmit: (data: { name: string; phone: string }) => void;
}

const spring: Transition = { type: "spring", stiffness: 420, damping: 36, mass: 0.9 };

export function ChatWindow({
  isOpen,
  messages,
  isTyping,
  onClose,
  onMinimize,
  onReset,
  onSend,
  onQuickReply,
  onEnrollSubmit,
  onLeadSubmit,
}: ChatWindowProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="chatwindow"
          role="dialog"
          aria-label="DATADROP AI chat"
          aria-modal="true"
          initial={{ opacity: 0, scale: 0.9, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 12 }}
          transition={spring}
          className="cb-window cb-window-mobile fixed bottom-24 right-5 z-[9999] flex flex-col overflow-hidden rounded-2xl sm:bottom-24 sm:right-6 sm:w-[400px]"
          style={{
            width: "min(400px, calc(100vw - 24px))",
            height: "clamp(520px, 78vh, 680px)",
            background: "linear-gradient(180deg, #111118 0%, #0d0d12 100%)",
            border: "1px solid rgba(255,255,255,0.07)",
            boxShadow:
              "0 0 0 1px rgba(139,92,246,0.08), 0 40px 80px -20px rgba(0,0,0,0.7), 0 24px 48px -12px rgba(109,40,217,0.2)",
          }}
        >
          <ChatHeader onClose={onClose} onMinimize={onMinimize} onReset={onReset} />
          <ChatBody
            messages={messages}
            isTyping={isTyping}
            onQuickReply={onQuickReply}
            onEnrollSubmit={onEnrollSubmit}
            onLeadSubmit={onLeadSubmit}
          />
          <ChatInput onSend={onSend} disabled={isTyping} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
