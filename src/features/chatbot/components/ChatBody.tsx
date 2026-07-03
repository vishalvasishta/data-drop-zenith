import { AnimatePresence } from "framer-motion";
import type { Message } from "../types";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { QuickReplies } from "./QuickReplies";
import { FAQCard } from "./FAQCard";
import { EnrollForm } from "./EnrollForm";
import { LeadCapture } from "./LeadCapture";
import { useAutoScroll } from "../hooks/useAutoScroll";
import type { EnrollmentData } from "../types";

interface ChatBodyProps {
  messages: Message[];
  isTyping: boolean;
  onQuickReply: (reply: string) => void;
  onEnrollSubmit: (data: EnrollmentData) => void;
  onLeadSubmit: (data: { name: string; phone: string }) => void;
}

export function ChatBody({
  messages,
  isTyping,
  onQuickReply,
  onEnrollSubmit,
  onLeadSubmit,
}: ChatBodyProps) {
  const bottomRef = useAutoScroll(messages, isTyping);

  return (
    <div className="cb-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto py-3">
      <AnimatePresence initial={false}>
        {messages.map((msg, i) => {
          const isLatestBot = msg.sender === "bot" && i === messages.length - 1;
          const isLastOverall = i === messages.length - 1;

          return (
            <div key={msg.id}>
              <MessageBubble message={msg} isLatestBot={isLatestBot} />

              {/* Special components rendered below the last bot message */}
              {isLastOverall && msg.sender === "bot" && msg.component === "faq" && msg.faqData && (
                <FAQCard faqs={msg.faqData} />
              )}
              {isLastOverall && msg.sender === "bot" && msg.component === "enroll" && (
                <EnrollForm onSubmit={onEnrollSubmit} />
              )}
              {isLastOverall && msg.sender === "bot" && msg.component === "lead-capture" && (
                <LeadCapture onSubmit={onLeadSubmit} />
              )}

              {/* Quick replies for last bot message */}
              {isLastOverall &&
                msg.sender === "bot" &&
                msg.quickReplies &&
                msg.quickReplies.length > 0 && (
                  <QuickReplies replies={msg.quickReplies} onSelect={onQuickReply} />
                )}
            </div>
          );
        })}
      </AnimatePresence>

      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} className="h-1" />
    </div>
  );
}
