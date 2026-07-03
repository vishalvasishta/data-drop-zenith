import { AnimatePresence } from "framer-motion";
import type { Message, EnrollmentData } from "../types";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { QuickReplies } from "./QuickReplies";
import { FAQCard } from "./FAQCard";
import { EnrollForm } from "./EnrollForm";
import { LeadCapture } from "./LeadCapture";
import { useAutoScroll } from "../hooks/useAutoScroll";

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
    <main
      className="cb-scroll flex flex-1 flex-col gap-0.5 overflow-y-auto py-4"
      aria-label="Chat messages"
      aria-live="polite"
      aria-atomic="false"
    >
      {/* Welcome placeholder when empty */}
      {messages.length === 0 && (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 text-center">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
            style={{
              background: "linear-gradient(145deg, #8b5cf6, #6d28d9)",
              boxShadow: "0 4px 20px rgba(139,92,246,0.35)",
            }}
          >
            🤖
          </div>
          <p className="text-sm font-semibold text-zinc-300">DATADROP AI Advisor</p>
          <p className="text-xs text-zinc-600">Ask me anything about the program</p>
        </div>
      )}

      <AnimatePresence initial={false}>
        {messages.map((msg, i) => {
          const isLast = i === messages.length - 1;
          const nextMsg = messages[i + 1];
          // Show avatar only when it's the last bot msg in a consecutive bot run
          const showAvatar = msg.sender === "bot" && (!nextMsg || nextMsg.sender !== "bot");

          return (
            <div key={msg.id} className="flex flex-col">
              <MessageBubble
                message={msg}
                isLatestBot={isLast && msg.sender === "bot"}
                showAvatar={showAvatar}
              />

              {/* Attached special components — only on last message */}
              {isLast && msg.sender === "bot" && (
                <>
                  {msg.component === "faq" && msg.faqData && (
                    <div className="mt-2">
                      <FAQCard faqs={msg.faqData} />
                    </div>
                  )}
                  {msg.component === "enroll" && (
                    <div className="mt-2">
                      <EnrollForm onSubmit={onEnrollSubmit} />
                    </div>
                  )}
                  {msg.component === "lead-capture" && (
                    <div className="mt-2">
                      <LeadCapture onSubmit={onLeadSubmit} />
                    </div>
                  )}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <QuickReplies replies={msg.quickReplies} onSelect={onQuickReply} />
                  )}
                </>
              )}
            </div>
          );
        })}
      </AnimatePresence>

      {isTyping && <TypingIndicator />}
      <div ref={bottomRef} className="h-1 shrink-0" aria-hidden="true" />
    </main>
  );
}
