import { AnimatePresence } from "framer-motion";
import type { Message, EnrollmentData } from "../types";
import { MessageBubble } from "./MessageBubble";
import { TypingIndicator } from "./TypingIndicator";
import { QuickReplies } from "./QuickReplies";
import { FAQCard } from "./FAQCard";
import { EnrollForm } from "./EnrollForm";
import { LeadCapture } from "./LeadCapture";
import { CourseOverview } from "./CourseOverview";
import { CurriculumCards } from "./CurriculumCards";
import { RoadmapCard } from "./RoadmapCard";
import { PlacementStats } from "./PlacementStats";
import { ProjectCards } from "./ProjectCards";
import { CareerPaths } from "./CareerPaths";
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
      {/* Welcome placeholder */}
      {messages.length === 0 && (
        <div className="flex flex-1 flex-col items-center justify-center gap-2.5 px-6 text-center">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl"
            style={{
              background: "linear-gradient(145deg, #8b5cf6, #6d28d9)",
              boxShadow: "0 4px 24px rgba(139,92,246,0.35)",
            }}
            aria-hidden="true"
          >
            🤖
          </div>
          <div>
            <p className="text-[14px] font-semibold text-zinc-200">DATADROP AI Advisor</p>
            <p className="mt-1 text-[12px] leading-relaxed text-zinc-600">
              Ask me anything — curriculum, placement,
              <br />
              fees, career paths, or how to enroll.
            </p>
          </div>
        </div>
      )}

      <AnimatePresence initial={false}>
        {messages.map((msg, i) => {
          const isLast = i === messages.length - 1;
          const nextMsg = messages[i + 1];
          const showAvatar = msg.sender === "bot" && (!nextMsg || nextMsg.sender !== "bot");

          return (
            <div key={msg.id} className="flex flex-col">
              <MessageBubble
                message={msg}
                isLatestBot={isLast && msg.sender === "bot"}
                showAvatar={showAvatar}
              />

              {/* Rich cards — rendered only on the last bot message */}
              {isLast && msg.sender === "bot" && msg.component && (
                <div className="mt-2">
                  {msg.component === "course-overview" && <CourseOverview />}
                  {msg.component === "curriculum-cards" && <CurriculumCards />}
                  {msg.component === "roadmap" && <RoadmapCard />}
                  {msg.component === "placement-stats" && <PlacementStats />}
                  {msg.component === "project-cards" && <ProjectCards />}
                  {msg.component === "career-paths" && <CareerPaths />}
                  {msg.component === "faq" && msg.faqData && <FAQCard faqs={msg.faqData} />}
                  {msg.component === "enroll" && <EnrollForm onSubmit={onEnrollSubmit} />}
                  {msg.component === "lead-capture" && <LeadCapture onSubmit={onLeadSubmit} />}
                </div>
              )}

              {/* Quick replies — only on the last message */}
              {isLast &&
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
      <div ref={bottomRef} className="h-1 shrink-0" aria-hidden="true" />
    </main>
  );
}
