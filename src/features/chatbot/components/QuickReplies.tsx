import { motion } from "framer-motion";

interface QuickRepliesProps {
  replies: string[];
  onSelect: (reply: string) => void;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.04, delayChildren: 0.08 },
  },
};

const chip = {
  hidden: { opacity: 0, y: 6, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.18,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  },
};

export function QuickReplies({ replies, onSelect }: QuickRepliesProps) {
  if (!replies.length) return null;

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap gap-1.5 px-4 pb-3 pt-2"
      role="list"
      aria-label="Quick reply options"
    >
      {replies.map((reply) => (
        <motion.button
          key={reply}
          variants={chip}
          onClick={() => onSelect(reply)}
          role="listitem"
          className="cb-chip rounded-full px-3 py-1.5 text-[12px] font-medium text-violet-300 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 active:scale-95"
          style={{
            background: "rgba(139,92,246,0.08)",
            border: "1px solid rgba(139,92,246,0.22)",
          }}
        >
          {reply}
        </motion.button>
      ))}
    </motion.div>
  );
}
