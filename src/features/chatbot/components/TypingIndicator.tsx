import { motion } from "framer-motion";

export function TypingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.18 }}
      className="flex items-end gap-2.5 px-4 pb-1 pt-0.5"
      aria-label="Bot is typing"
      aria-live="polite"
    >
      {/* Avatar */}
      <div
        className="mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs"
        style={{
          background: "linear-gradient(145deg, #8b5cf6, #6d28d9)",
          boxShadow: "0 2px 8px rgba(139,92,246,0.3)",
        }}
        aria-hidden="true"
      >
        🤖
      </div>

      {/* Bubble */}
      <div
        className="flex items-center gap-1 rounded-2xl rounded-bl-sm px-3.5 py-2.5"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <span className="cb-dot h-1.5 w-1.5 rounded-full bg-zinc-400" />
        <span className="cb-dot h-1.5 w-1.5 rounded-full bg-zinc-400" />
        <span className="cb-dot h-1.5 w-1.5 rounded-full bg-zinc-400" />
      </div>
    </motion.div>
  );
}
