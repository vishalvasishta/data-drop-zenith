import { motion, AnimatePresence } from "framer-motion";
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
          key="chat-window"
          initial={{ opacity: 0, scale: 0.88, y: 24, originX: 1, originY: 1 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 24 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="fixed bottom-24 right-4 z-[9999] flex w-[92vw] max-w-md flex-col overflow-hidden rounded-3xl shadow-2xl sm:right-6 sm:w-[400px]"
          style={{
            height: "clamp(480px, 80vh, 680px)",
            background: "linear-gradient(160deg, rgba(18,10,40,0.97) 0%, rgba(15,12,35,0.99) 100%)",
            border: "1px solid rgba(139,92,246,0.25)",
            boxShadow: "0 32px 80px -16px rgba(79,46,220,0.45), 0 0 0 1px rgba(139,92,246,0.15)",
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
