import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '../types';

interface FAQCardProps {
  faqs: FAQ[];
}

export function FAQCard({ faqs }: FAQCardProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="mx-4 mb-2 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
      {faqs.map((faq, i) => (
        <div key={faq.id} className={i > 0 ? 'border-t border-white/10' : ''}>
          <button
            onClick={() => toggle(faq.id)}
            className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-sm font-medium text-gray-200 transition-colors hover:bg-white/5"
          >
            <span className="leading-snug">{faq.question}</span>
            <motion.span
              animate={{ rotate: openId === faq.id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="shrink-0 text-violet-400"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {openId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <p className="px-4 pb-4 text-xs leading-relaxed text-gray-400">
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
