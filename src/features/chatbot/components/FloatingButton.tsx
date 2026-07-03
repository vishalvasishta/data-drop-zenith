import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle } from "lucide-react";

interface FloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
  unreadCount?: number;
}

export function FloatingButton({ isOpen, onClick, unreadCount = 0 }: FloatingButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.93 }}
      aria-label={isOpen ? "Close chat" : "Open chat"}
      className="fixed bottom-5 right-5 z-[10000] flex h-14 w-14 items-center justify-center rounded-full shadow-2xl sm:bottom-6 sm:right-6"
      style={{
        background: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
        boxShadow: "0 8px 32px rgba(124,58,237,0.55), 0 2px 8px rgba(0,0,0,0.3)",
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <X className="h-6 w-6 text-white" />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ rotate: 90, opacity: 0, scale: 0.7 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Unread badge */}
      <AnimatePresence>
        {!isOpen && unreadCount > 0 && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow"
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Pulse ring — only when closed */}
      {!isOpen && (
        <motion.span
          className="absolute inset-0 rounded-full"
          animate={{ scale: [1, 1.35, 1], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.6) 0%, transparent 70%)",
          }}
        />
      )}
    </motion.button>
  );
}
