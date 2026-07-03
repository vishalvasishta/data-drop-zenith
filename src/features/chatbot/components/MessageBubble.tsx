import { motion } from 'framer-motion';
import type { Message } from '../types';
import { formatTime } from '../utils/formatters';

interface MessageBubbleProps {
  message: Message;
  isLatestBot: boolean;
}

// Lightweight markdown renderer — bold, italic, newlines only (no deps)
function renderMarkdown(text: string) {
  const lines = text.split('\n');
  return lines.map((line, li) => {
    // Split on **bold** and *italic*
    const parts: React.ReactNode[] = [];
    const re = /(\*\*(.+?)\*\*|\*(.+?)\*)/g;
    let lastIdx = 0;
    let match: RegExpExecArray | null;
    let k = 0;

    while ((match = re.exec(line)) !== null) {
      if (match.index > lastIdx) parts.push(<span key={k++}>{line.slice(lastIdx, match.index)}</span>);
      if (match[2]) parts.push(<strong key={k++}>{match[2]}</strong>);
      else if (match[3]) parts.push(<em key={k++}>{match[3]}</em>);
      lastIdx = match.index + match[0].length;
    }
    if (lastIdx < line.length) parts.push(<span key={k++}>{line.slice(lastIdx)}</span>);
    return (
      <span key={li} className="block">
        {parts.length ? parts : '\u00A0'}
      </span>
    );
  });
}

export function MessageBubble({ message, isLatestBot }: MessageBubbleProps) {
  const isBot = message.sender === 'bot';

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={`flex items-end gap-2 px-4 py-1 ${isBot ? '' : 'flex-row-reverse'}`}
    >
      {/* Avatar */}
      {isBot && (
        <div className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-sm shadow-lg">
          🤖
        </div>
      )}

      {/* Bubble */}
      <div className={`group flex flex-col ${isBot ? 'items-start' : 'items-end'} max-w-[80%]`}>
        <div
          className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-md ${
            isBot
              ? 'rounded-bl-none bg-white/10 text-gray-100 backdrop-blur-sm dark:bg-white/5'
              : 'rounded-br-none bg-gradient-to-br from-violet-600 to-indigo-600 text-white'
          }`}
        >
          {isBot ? (
            <div className="cb-markdown space-y-0.5">{renderMarkdown(message.content)}</div>
          ) : (
            <span>{message.content}</span>
          )}
        </div>
        <span className="mt-1 px-1 text-[10px] text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">
          {formatTime(message.timestamp)}
        </span>
      </div>
    </motion.div>
  );
}
