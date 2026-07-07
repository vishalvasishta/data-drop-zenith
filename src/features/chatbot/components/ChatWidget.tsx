import "../styles/chatbot.css";
import { useCallback, useState } from "react";
import { useChatbot } from "../hooks/useChatbot";
import { FloatingButton } from "./FloatingButton";
import { ChatWindow } from "./ChatWindow";
import type { EnrollmentData } from "../types";
import { saveLeadFn } from "@/lib/lead-fns";

export function ChatWidget() {
  const { state, open, close, sendMessage, setEnrollmentData, confirmEnrollment } = useChatbot();
  const [minimized, setMinimized] = useState(false);

  const handleOpen = useCallback(() => {
    setMinimized(false);
    open();
  }, [open]);

  const handleClose = useCallback(() => {
    close();
    setMinimized(false);
  }, [close]);

  const handleMinimize = useCallback(() => {
    setMinimized(true);
    close();
  }, [close]);

  const handleReset = useCallback(() => {
    sendMessage("menu");
  }, [sendMessage]);

  const handleEnrollSubmit = useCallback(
    (data: EnrollmentData) => {
      setEnrollmentData(data);
      confirmEnrollment();
    },
    [setEnrollmentData, confirmEnrollment],
  );

  const handleLeadSubmit = useCallback(
    (data: { name: string; phone: string }) => {
      setEnrollmentData(data);
      sendMessage(`📞 Callback requested by ${data.name} (${data.phone})`);
      // Fire-and-forget: persist the lead with current profile intelligence.
      // Errors are swallowed intentionally — this must never break the chat flow.
     saveLeadFn({
      data: {
        name: data.name,
        phone: data.phone,
        role: state.profile.role,
        education: state.profile.education,
        careerGoal: state.profile.careerGoal,
        leadScore: state.profile.leadScore,
        interests: state.profile.interests,
        objections: state.profile.objections,
      },
    })
    .then(() => {
      console.log("Lead saved successfully");
    })
    .catch((err) => {
      console.error("SAVE LEAD ERROR:", err);
      alert(err instanceof Error ? err.message : JSON.stringify(err));
    });
    },
    [setEnrollmentData, sendMessage, state.profile],
  );

  const unreadCount = minimized ? 1 : 0;

  return (
    <>
      <ChatWindow
        isOpen={state.isOpen}
        messages={state.messages}
        isTyping={state.isTyping}
        onClose={handleClose}
        onMinimize={handleMinimize}
        onReset={handleReset}
        onSend={sendMessage}
        onQuickReply={sendMessage}
        onEnrollSubmit={handleEnrollSubmit}
        onLeadSubmit={handleLeadSubmit}
      />
      <FloatingButton
        isOpen={state.isOpen}
        onClick={state.isOpen ? handleClose : handleOpen}
        unreadCount={unreadCount}
      />
    </>
  );
}
