import { useState, useRef, type KeyboardEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

interface ChatInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export function ChatInput({ onSend, disabled = false }: ChatInputProps) {
  const [value, setValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const hasContent = value.trim().length > 0;

  const submit = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue("");
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      submit();
    }
  };

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${Math.min(el.scrollHeight, 112)}px`;
  };

  return (
    <footer
      className="shrink-0 px-3 pb-3 pt-2"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Input wrapper */}
      <div
        className="cb-input-wrap flex items-end gap-2 rounded-xl px-3.5 py-2.5 transition-all duration-200"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.09)",
        }}
      >
        <textarea
          ref={textareaRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          disabled={disabled}
          placeholder="Message DATADROP AI…"
          rows={1}
          aria-label="Type a message"
          aria-multiline="true"
          className="flex-1 resize-none bg-transparent text-[13.5px] leading-relaxed text-zinc-200 placeholder-zinc-600 outline-none disabled:opacity-40"
          style={{ maxHeight: 112 }}
        />

        {/* Send button */}
        <AnimatePresence initial={false}>
          <motion.button
            key={hasContent ? "active" : "idle"}
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.75, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            whileTap={{ scale: 0.88 }}
            onClick={submit}
            disabled={!hasContent || disabled}
            aria-label="Send message"
            className={`mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 ${
              hasContent && !disabled
                ? "bg-violet-600 text-white hover:bg-violet-500"
                : "bg-white/8 text-zinc-600"
            }`}
          >
            <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
          </motion.button>
        </AnimatePresence>
      </div>

      {/* Footer label */}
      <p className="mt-1.5 text-center text-[10px] text-zinc-700">
        DATADROP AI · Press <kbd className="rounded px-0.5 font-mono text-zinc-600">⏎</kbd> to send
      </p>
    </footer>
  );
}
