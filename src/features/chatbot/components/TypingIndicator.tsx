import { motion } from 'framer-motion';

export function TypingIndicator() {
  return (
    <div className="flex items-end gap-2 px-4 py-1">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 text-sm shadow-lg">
        🤖
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="flex items-center gap-1 rounded-2xl rounded-bl-none bg-white/10 px-4 py-3 shadow backdrop-blur-sm dark:bg-white/5"
      >
        {[0, 0.2, 0.4].map((delay, i) => (
          <motion.span
            key={i}
            className="block h-2 w-2 rounded-full bg-violet-400"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, delay, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>
    </div>
  );
}
