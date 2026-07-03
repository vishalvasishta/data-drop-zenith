import { useState, useEffect, useRef } from "react";

export function useTypingAnimation(text: string, speed = 18, enabled = true) {
  const [displayed, setDisplayed] = useState(enabled ? "" : text);
  const [done, setDone] = useState(!enabled);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setDisplayed(text);
      setDone(true);
      return;
    }
    setDisplayed("");
    setDone(false);
    indexRef.current = 0;

    const id = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);

    return () => clearInterval(id);
  }, [text, speed, enabled]);

  return { displayed, done };
}
