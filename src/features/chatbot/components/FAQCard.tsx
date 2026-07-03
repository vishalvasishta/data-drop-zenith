import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "../types";

interface FAQCardProps {
  faqs: FAQ[];
}

export function FAQCard({ faqs }: FAQCardProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div
      className="mx-4 mb-3 overflow-hidden rounded-xl"
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      role="list"
      aria-label="Frequently asked questions"
    >
      {faqs.map((faq, i) => (
        <div
          key={faq.id}
          role="listitem"
          style={i > 0 ? { borderTop: "1px solid rgba(255,255,255,0.06)" } : undefined}
        >
          <button
            onClick={() => setOpenId((prev) => (prev === faq.id ? null : faq.id))}
            aria-expanded={openId === faq.id}
            aria-controls={`faq-answer-${faq.id}`}
            className="flex w-full items-start justify-between gap-3 px-4 py-3 text-left transition-colors duration-150 hover:bg-white/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-violet-500/50"
            style={{ background: openId === faq.id ? "rgba(139,92,246,0.06)" : undefined }}
          >
            <span className="text-[12.5px] font-medium leading-snug text-zinc-200">
              {faq.question}
            </span>
            <motion.span
              animate={{ rotate: openId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="mt-0.5 shrink-0 text-zinc-500"
              aria-hidden="true"
            >
              <ChevronDown className="h-3.5 w-3.5" />
            </motion.span>
          </button>

          <AnimatePresence initial={false}>
            {openId === faq.id && (
              <motion.div
                id={`faq-answer-${faq.id}`}
                role="region"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p
                  className="px-4 pb-3.5 pt-0.5 text-[12px] leading-relaxed text-zinc-400"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                >
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
