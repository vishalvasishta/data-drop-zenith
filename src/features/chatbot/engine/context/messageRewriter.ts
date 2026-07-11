const CONTEXT_PRONOUN_REGEX =
  /\b(it|its|they|them|their|this|that|these|those)\b/gi;

/**
 * Replaces contextual pronouns with the resolved entity.
 *
 * Example:
 * "How long is it?"
 * ->
 * "How long is the course?"
 */
export function rewriteMessage(
  message: string,
  entity: string,
): string {
  return message.replace(
    CONTEXT_PRONOUN_REGEX,
    `the ${entity}`,
  );
}