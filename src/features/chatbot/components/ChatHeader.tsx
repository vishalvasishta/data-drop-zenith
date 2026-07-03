import { motion } from "framer-motion";
import { X, Minus, RotateCcw } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
  onReset: () => void;
}

export function ChatHeader({ onClose, onMinimize, onReset }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-violet-900/80 to-indigo-900/80 px-4 py-3 backdrop-blur-sm">
      {/* Bot avatar + info */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 shadow-lg shadow-violet-500/30">
        <span className="text-lg">🤖</span>
        {/* Online dot */}
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-gray-900 bg-green-400 shadow" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="truncate text-sm font-semibold text-white">DATADROP AI Advisor</p>
        <div className="flex items-center gap-1.5">
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-green-400"
          />
          <p className="text-xs text-green-400">Online — typically replies instantly</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-1">
        <button
          onClick={onReset}
          title="Reset conversation"
          className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <RotateCcw className="h-4 w-4" />
        </button>
        <button
          onClick={onMinimize}
          title="Minimize"
          className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
        >
          <Minus className="h-4 w-4" />
        </button>
        <button
          onClick={onClose}
          title="Close"
          className="rounded-lg p-1.5 text-gray-400 transition-colors hover:bg-red-500/20 hover:text-red-400"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
