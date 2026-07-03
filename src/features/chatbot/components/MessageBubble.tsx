import { motion } from "framer-motion";
import type { Message } from "../types";
import { formatTime } from "../utils/formatters";

interface MessageBubbleProps {
  message: Message;
  isLatestBot: boolean;
  showAvatar: boolean;
}

// Lightweight markdown renderer — handles **bold**, *italic*, newlines, bullet lists
function renderMarkdown(text: string): React.ReactNode[] {
  return text.split("\n").map((line, li) => {
    // Bullet list item
    if (line.startsWith("• ") || line.startsWith("- ")) {
      const content = line.slice(2);
      return (
        <span key={li} className="flex gap-2 leading-relaxed">
          <span
            className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-violet-400/70"
            aria-hidden="true"
          />
          <span>{inlineMarkdown(content)}</span>
        </span>
      );
    }
    // Empty line → spacer
    if (!line.trim()) {
      return <span key={li} className="block h-1.5" aria-hidden="true" />;
    }
    return (
      <span key={li} className="block leading-relaxed">
        {inlineMarkdown(line)}
      </span>
    );
  });
}

function inlineMarkdown(line: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const re = /(\*\*(.+?)\*\*|\*(.+?)\*|`(.+?)`)/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let k = 0;

  while ((match = re.exec(line)) !== null) {
    if (match.index > last) parts.push(<span key={k++}>{line.slice(last, match.index)}</span>);
    if (match[2])
      parts.push(
        <strong key={k++} className="font-semibold text-zinc-100">
          {match[2]}
        </strong>,
      );
    else if (match[3])
      parts.push(
        <em key={k++} className="italic text-zinc-400">
          {match[3]}
        </em>,
      );
    else if (match[4])
      parts.push(
        <code
          key={k++}
          className="rounded px-1 py-0.5 font-mono text-[0.78em] text-violet-300"
          style={{ background: "rgba(139,92,246,0.15)" }}
        >
          {match[4]}
        </code>,
      );
    last = match.index + match[0].length;
  }
  if (last < line.length) parts.push(<span key={k++}>{line.slice(last)}</span>);
  return parts;
}

export function MessageBubble({ message, showAvatar }: MessageBubbleProps) {
  const isBot = message.sender === "bot";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`cb-msg-group flex items-end gap-2.5 ${isBot ? "px-4" : "flex-row-reverse px-4"}`}
    >
      {/* Bot avatar */}
      {isBot && (
        <div
          className={`mb-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs transition-opacity ${showAvatar ? "opacity-100" : "opacity-0"}`}
          style={{
            background: "linear-gradient(145deg, #8b5cf6, #6d28d9)",
            boxShadow: "0 2px 8px rgba(139,92,246,0.3)",
          }}
          aria-hidden="true"
        >
          🤖
        </div>
      )}

      {/* Bubble + timestamp */}
      <div
        className={`group flex max-w-[78%] flex-col gap-1 ${isBot ? "items-start" : "items-end"}`}
      >
        <div
          className={`rounded-2xl px-4 py-2.5 text-[13.5px] ${
            isBot ? "rounded-bl-sm text-zinc-200" : "rounded-br-sm text-white"
          }`}
          style={
            isBot
              ? {
                  background: "rgba(255,255,255,0.055)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }
              : {
                  background: "linear-gradient(145deg, #7c3aed, #6d28d9)",
                  boxShadow: "0 2px 12px rgba(109,40,217,0.35)",
                }
          }
        >
          {isBot ? (
            <div className="cb-md space-y-0.5">{renderMarkdown(message.content)}</div>
          ) : (
            <span className="leading-relaxed">{message.content}</span>
          )}
        </div>

        {/* Timestamp — visible on hover */}
        <span
          className="px-1 text-[10px] tabular-nums text-zinc-600 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
          aria-label={`Sent at ${formatTime(message.timestamp)}`}
        >
          {formatTime(message.timestamp)}
        </span>
      </div>
    </motion.div>
  );
}
