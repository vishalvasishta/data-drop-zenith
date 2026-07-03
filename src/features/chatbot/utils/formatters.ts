export function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
}

export function generateId(): string {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

export function truncate(text: string, max: number): string {
  return text.length > max ? `${text.slice(0, max)}…` : text;
}
