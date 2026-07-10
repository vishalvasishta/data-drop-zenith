const COMMON_CORRECTIONS: Record<string, string> = {
  // Certificate
  // Certificate
  certificate: "certificate",
  certficate: "certificate",
  certifcate: "certificate",
  certificte: "certificate",
  cetificate: "certificate",
  cerificate: "certificate",
  ceificate: "certificate",
  certifiacte: "certificate",
  certifacate: "certificate",
  certifecate: "certificate",
  certificat: "certificate",

  // Curriculum
  curiculum: "curriculum",
  cirriculum: "curriculum",
  curriculam: "curriculum",

  // Syllabus
  sylabus: "syllabus",
  sillabus: "syllabus",

  // Recordings
  recordng: "recording",
  recordngs: "recordings",
  recoding: "recording",
  recordingss: "recordings",

  // Placement
  placment: "placement",
  placement: "placement",

  // Projects
  projet: "project",
  porject: "project",
  proejct: "project",

  // Fees
  feee: "fee",
  prise: "price",

  // Enrollment
  enrol: "enroll",
  enrolment: "enrollment",
};

export function normalizeText(text: string): string {
  let normalized = text.toLowerCase();

  // Remove punctuation
  normalized = normalized.replace(/[^\w\s]/g, " ");

  // Remove duplicate spaces
  normalized = normalized.replace(/\s+/g, " ").trim();

  // Apply common corrections
  for (const [wrong, correct] of Object.entries(COMMON_CORRECTIONS)) {
    const regex = new RegExp(`\\b${wrong}\\b`, "g");
    normalized = normalized.replace(regex, correct);
  }

  // Apply fuzzy correction word-by-word
  normalized = normalized
    .split(" ")
    .map(fuzzyCorrectWord)
    .join(" ");

  return normalized;
}
function levenshtein(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }

  return matrix[b.length][a.length];
}
const FUZZY_WORDS = [
  "certificate",
  "curriculum",
  "syllabus",
  "recording",
  "recordings",
  "placement",
  "project",
  "projects",
  "curriculum",
  "mentor",
  "mentorship",
  "career",
  "careers",
  "course",
  "pricing",
  "payment",
  "enrollment",
];
function fuzzyCorrectWord(word: string): string {
  let bestWord = word;
  let bestDistance = Infinity;

  for (const candidate of FUZZY_WORDS) {
    const distance = levenshtein(word, candidate);

    if (distance < bestDistance) {
      bestDistance = distance;
      bestWord = candidate;
    }
  }

  // Only correct if the typo is small.
  if (bestDistance <= 2) {
    return bestWord;
  }

  return word;
}