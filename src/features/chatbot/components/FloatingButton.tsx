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
      initial={false}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.92 }}
      aria-label={isOpen ? "Close chat" : "Open DATADROP AI chat"}
      aria-expanded={isOpen}
      aria-haspopup="dialog"
      className="cb-fab fixed bottom-5 right-5 z-[10000] flex h-14 w-14 items-center justify-center rounded-full transition-shadow duration-300 sm:bottom-6 sm:right-6"
      style={{
        background: "linear-gradient(145deg, #8b5cf6 0%, #6d28d9 55%, #4f46e5 100%)",
        boxShadow: "0 8px 32px rgba(109,40,217,0.5), 0 2px 8px rgba(0,0,0,0.35)",
      }}
    >
      {/* Pulse ring — visible only when closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.span
            key="ring"
            className="pointer-events-none absolute inset-0 rounded-full"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.65, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            style={{
              background: "radial-gradient(circle, rgba(139,92,246,0.45) 0%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Icon swap */}
      <AnimatePresence mode="wait" initial={false}>
        {isOpen ? (
          <motion.span
            key="close"
            initial={{ rotate: -80, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 80, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <X className="h-5 w-5 text-white" strokeWidth={2.5} />
          </motion.span>
        ) : (
          <motion.span
            key="open"
            initial={{ rotate: 80, opacity: 0, scale: 0.6 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -80, opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="flex items-center justify-center"
          >
            <MessageCircle className="h-5 w-5 text-white" fill="white" strokeWidth={0} />
          </motion.span>
        )}
      </AnimatePresence>

      {/* Unread badge */}
      <AnimatePresence>
        {!isOpen && unreadCount > 0 && (
          <motion.span
            key="badge"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white shadow-md"
            aria-label={`${unreadCount} unread messages`}
          >
            {unreadCount > 9 ? "9+" : unreadCount}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
