import { useState, useRef, type KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mic } from 'lucide-react';

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
    if (textareaRef.current) textareaRef.current.style.height = 'auto';
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); submit(); }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`;
  };

  return (
    <div className="border-t border-white/10 bg-black/20 px-3 py-3 backdrop-blur-sm">
      <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/30 transition-all">
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          disabled={disabled}
          placeholder="Type a message…"
          rows={1}
          className="flex-1 resize-none bg-transparent text-sm text-gray-100 placeholder-gray-500 outline-none disabled:opacity-50"
          style={{ maxHeight: 120 }}
        />
        <div className="flex shrink-0 items-center gap-1">
          <button
            disabled
            title="Voice input (coming soon)"
            className="rounded-xl p-1.5 text-gray-600 transition-colors hover:text-gray-400"
          >
            <Mic className="h-4 w-4" />
          </button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={submit}
            disabled={!value.trim() || disabled}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-md transition-opacity disabled:opacity-40"
          >
            <Send className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
      <p className="mt-1.5 text-center text-[10px] text-gray-600">
        DATADROP AI • Powered by DataDrop
      </p>
    </div>
  );
}
