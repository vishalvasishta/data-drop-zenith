import { motion } from "framer-motion";
import { X, Minus, RefreshCw } from "lucide-react";

interface ChatHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
  onReset: () => void;
}

function HeaderButton({
  onClick,
  label,
  children,
  danger = false,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`flex h-7 w-7 items-center justify-center rounded-lg text-zinc-500 transition-all duration-150 hover:bg-white/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 ${
        danger ? "hover:bg-red-500/12 hover:text-red-400" : "hover:text-zinc-300"
      }`}
    >
      {children}
    </button>
  );
}

export function ChatHeader({ onClose, onMinimize, onReset }: ChatHeaderProps) {
  return (
    <header
      className="relative flex shrink-0 items-center gap-3 px-4 py-3"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Subtle gradient accent line at top */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.6) 40%, rgba(99,102,241,0.4) 70%, transparent 100%)",
        }}
      />

      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-full text-base"
          style={{
            background: "linear-gradient(145deg, #8b5cf6 0%, #6d28d9 60%, #4338ca 100%)",
            boxShadow: "0 2px 12px rgba(139,92,246,0.4)",
          }}
          aria-hidden="true"
        >
          🤖
        </div>
        {/* Online dot */}
        <span
          className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2"
          style={{ backgroundColor: "#22c55e", borderColor: "#111118" }}
          aria-hidden="true"
        />
      </div>

      {/* Identity */}
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold leading-tight text-zinc-100">DATADROP AI</p>
        <div className="mt-0.5 flex items-center gap-1.5">
          <motion.span
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-green-500"
            aria-hidden="true"
          />
          <p className="text-[11px] text-zinc-500">Online · Replies instantly</p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-0.5" role="group" aria-label="Chat controls">
        <HeaderButton onClick={onReset} label="Reset conversation">
          <RefreshCw className="h-3.5 w-3.5" />
        </HeaderButton>
        <HeaderButton onClick={onMinimize} label="Minimize chat">
          <Minus className="h-3.5 w-3.5" />
        </HeaderButton>
        <HeaderButton onClick={onClose} label="Close chat" danger>
          <X className="h-3.5 w-3.5" />
        </HeaderButton>
      </div>
    </header>
  );
}
