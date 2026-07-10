export interface ResolvedReference {
  pronoun: string;
  resolvedTo: string;
}

export interface RewriteResult {
  originalMessage: string;
  rewrittenMessage: string;
  rewritten: boolean;
}

export function rewriteMessage(
  message: string,
  references: ResolvedReference[],
): RewriteResult {
  // Version 1: No rewriting yet.
  return {
    originalMessage: message,
    rewrittenMessage: message,
    rewritten: false,
  };
}