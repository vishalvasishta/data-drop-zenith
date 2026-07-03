import '../styles/chatbot.css';
import { useCallback, useState } from 'react';
import { useChatbot } from '../hooks/useChatbot';
import { FloatingButton } from './FloatingButton';
import { ChatWindow } from './ChatWindow';
import type { EnrollmentData } from '../types';
import { getStateResponse } from '../engine/stateMachine';

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

  const handleReset = useCallback(async () => {
    // Reset by re-opening fresh (messages persist; user can scroll up)
    await sendMessage('menu');
  }, [sendMessage]);

  const handleEnrollSubmit = useCallback(
    async (data: EnrollmentData) => {
      setEnrollmentData(data);
      await confirmEnrollment();
    },
    [setEnrollmentData, confirmEnrollment],
  );

  const handleLeadSubmit = useCallback(
    async (data: { name: string; phone: string }) => {
      setEnrollmentData(data);
      await sendMessage(`📞 Callback requested by ${data.name} (${data.phone})`);
    },
    [setEnrollmentData, sendMessage],
  );

  // Count unread = bot messages received while minimized (simple: always show 1 when minimized)
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
