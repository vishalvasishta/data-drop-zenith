import { useEffect, useRef } from 'react';
import type { Message } from '../types';

export function useAutoScroll(messages: Message[], isTyping: boolean) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isTyping]);

  return bottomRef;
}
