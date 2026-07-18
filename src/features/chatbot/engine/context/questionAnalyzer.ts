export type QuestionType =
  | "duration"
  | "pricing"
  | "projects"
  | "placement"
  | "certificate"
  | "eligibility"
  | "curriculum"
  | "recordings"
  | "mentorship"
  | "assignments"
  | "unknown";
export type QuestionSubtype =
  | "general"
  | "fee"
  | "payment_method"
  | "emi"
  | "refund"
  | "receipt"
  | "security"
  | "gateway"
  | "currency"
  | "unknown"
  //eligibility
  | "qualification"
  | "coding"
  | "education"
  | "age"
  | "laptop"
  | "language"
  | "attendance"
  | "commitment";



export interface QuestionIntent {
  type: QuestionType;
  subtype: QuestionSubtype;
  confidence: number;
}
/**
 * Determines what information the user is requesting.
 * It does NOT determine the entity (course, project, etc.).
 * It only classifies the type of question.
 */
export function analyzeQuestion(message: string): QuestionType {
  const text = message.toLowerCase();

  if (
    text.includes("how long") ||
    text.includes("duration") ||
    text.includes("months") ||
    text.includes("how many months")
  ) {
    return "duration";
  }

  if (
    text.includes("fee") ||
    text.includes("fees") ||
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("cost") ||
    text.includes("charges") ||
    text.includes("payment") ||
    text.includes("amount") ||
    text.includes("how much")
  ) {
    return "pricing";
  }

  if (
    text.includes("project") ||
    text.includes("projects")
  ) {
    return "projects";
  }

  if (
    text.includes("placement") ||
    text.includes("job")
  ) {
    return "placement";
  }

  if (
    text.includes("certificate")
  ) {
    return "certificate";
  }


  if (
    text.includes("eligible") ||
    text.includes("eligibility") ||
    text.includes("who can join") ||
    text.includes("who is eligible") ||
    text.includes("who is this course for") ||
    text.includes("who is this for") ||

    text.includes("can i join") ||
    text.includes("can we join") ||
    text.includes("can students join") ||
    text.includes("can degree students join") ||
    text.includes("can diploma students join") ||

    text.includes("12th") ||
    text.includes("degree") ||
    text.includes("diploma") ||
    text.includes("intermediate") ||
    text.includes("inter") ||

    text.includes("beginner") ||
    text.includes("beginners") ||
    text.includes("no coding") ||
    text.includes("fresher")
  ) {
    return "eligibility";
  }


  if (
    text.includes("curriculum") ||
    text.includes("syllabus") ||
    text.includes("roadmap") ||
    text.includes("modules") ||
    text.includes("topics") ||
    text.includes("subjects") ||
    text.includes("what will i learn") ||
    text.includes("what do you teach") ||
    text.includes("course content")
  ) {
    return "curriculum";
  }

  if (
    text.includes("recording") ||
    text.includes("recordings") ||
    text.includes("missed class") ||
    text.includes("miss class") ||
    text.includes("watch later") ||
    text.includes("watch again") ||
    text.includes("replay") ||
    text.includes("class recording")
  ) {
    return "recordings";
  }

  if (
    text.includes("mentor") ||
    text.includes("mentorship") ||
    text.includes("mentoring") ||
    text.includes("trainer") ||
    text.includes("faculty") ||
    text.includes("teacher") ||
    text.includes("instructor") ||
    text.includes("doubt support") ||
    text.includes("guidance") ||
    text.includes("who will teach") ||
    text.includes("one on one") ||
    text.includes("1-on-1")
  ) {
    return "mentorship";
  }

  if (
    text.includes("assignment") ||
    text.includes("assignments") ||
    text.includes("practice") ||
    text.includes("homework") ||
    text.includes("tasks") ||
    text.includes("exercise") ||
    text.includes("exercises")
  ) {
    return "assignments";
  }

  return "unknown";
}
export function analyzeQuestionSubtype(
  message: string,
): QuestionSubtype {

  const text = message.toLowerCase();

  if (
    text.includes("upi") ||
    text.includes("creditcard") ||
    text.includes("debitcard") ||
    text.includes("debit card") ||
    text.includes("credit card") ||
    text.includes("net banking") ||
    text.includes("wallet") ||
    text.includes("payment method") ||
    text.includes("payment methods") ||
    text.includes("card") ||
    text.includes("cards")
  ) {
    return "payment_method";
  }
  // ---------- Eligibility ----------

  if (
    text.includes("qualification") ||
    text.includes("minimum qualification") ||
    text.includes("eligible") ||
    text.includes("eligibility") ||
    text.includes("who can join") ||
    text.includes("who is this for") ||
    text.includes("who is this course for") ||
    text.includes("can degree") ||
    text.includes("can diploma") ||
    text.includes("12th") ||
    text.includes("intermediate") ||
    text.includes("inter") ||
    text.includes("degree required")
  ) {
    return "qualification";
  }

  if (
    text.includes("coding") ||
    text.includes("coding experience") ||
    text.includes("programming") ||
    text.includes("programming experience") ||

    text.includes("beginner") ||
    text.includes("beginners") ||
    text.includes("fresher") ||
    text.includes("freshers") ||

    text.includes("no coding") ||
    text.includes("zero coding") ||
    text.includes("without coding") ||
    text.includes("coding knowledge") ||
    text.includes("prior coding") ||

    text.includes("experience") ||
    text.includes("technical background")
  ) {
    return "coding";
  }

  if (
    text.includes("education") ||
    text.includes("background") ||
    text.includes("educational background") ||
    text.includes("technical background") ||
    text.includes("non technical") ||
    text.includes("non-technical") ||
    text.includes("engineering") ||
    text.includes("commerce") ||
    text.includes("arts") ||
    text.includes("science") ||
    text.includes("btech") ||
    text.includes("b.tech") ||
    text.includes("bsc") ||
    text.includes("b.sc") ||
    text.includes("bcom") ||
    text.includes("b.com") ||
    text.includes("bba") ||
    text.includes("ba") ||
    text.includes("bca") ||
    text.includes("mca") ||
    text.includes("diploma")
  ) {
    return "education";
  }

  if (
    text.includes("age") ||
    text.includes("minimum age") ||
    text.includes("maximum age") ||
    text.includes("age limit") ||
    text.includes("how old") ||
    text.includes("too old") ||
    text.includes("too young")
  ) {
    return "age";
  }

  if (
    text.includes("laptop") ||
    text.includes("pc") ||
    text.includes("computer") ||
    text.includes("desktop") ||
    text.includes("mac") ||
    text.includes("windows") ||
    text.includes("mobile") ||
    text.includes("phone")
  ) {
    return "laptop";
  }

  if (
    text.includes("language") ||
    text.includes("english") ||
    text.includes("telugu") ||
    text.includes("hindi")
  ) {
    return "language";
  }

  if (
    text.includes("attendance") ||
    text.includes("attend") ||
    text.includes("live class") ||
    text.includes("live classes") ||
    text.includes("miss class") ||
    text.includes("recordings")
  ) {
    return "attendance";
  }

  if (
    text.includes("commitment") ||
    text.includes("study hours") ||
    text.includes("daily") ||
    text.includes("weekly") ||
    text.includes("hours") ||
    text.includes("time required") ||
    text.includes("time commitment") ||
    text.includes("how much time")
  ) {
    return "commitment";
  }
  if (
    text.includes("refund") ||
    text.includes("money back")
  ) {
    return "refund";
  }

  if (
    text.includes("emi") ||
    text.includes("installment")
  ) {
    return "emi";
  }

  if (
    text.includes("receipt") ||
    text.includes("invoice")
  ) {
    return "receipt";
  }

  if (
    text.includes("gateway") ||
    text.includes("razorpay")
  ) {
    return "gateway";
  }

  if (
    text.includes("secure") ||
    text.includes("security") ||
    text.includes("ssl")
  ) {
    return "security";
  }

  if (
    text.includes("currency") ||
    text.includes("inr") ||
    text.includes("rupees")
  ) {
    return "currency";
  }

  if (
    text.includes("fee") ||
    text.includes("fees") ||
    text.includes("price") ||
    text.includes("cost")
  ) {
    return "fee";
  }

  return "general";
}
export function analyzeQuestions(message: string): QuestionType[] {
  const text = message.toLowerCase();

  const intents: QuestionType[] = [];

  if (
    text.includes("how long") ||
    text.includes("duration") ||
    text.includes("months") ||
    text.includes("how many months")
  ) {
    intents.push("duration");
  }

  if (
    text.includes("fee") ||
    text.includes("fees") ||
    text.includes("price") ||
    text.includes("pricing") ||
    text.includes("cost") ||
    text.includes("charges") ||
    text.includes("payment") ||
    text.includes("amount") ||
    text.includes("how much")
  ) {
    intents.push("pricing");
  }

  if (
    text.includes("project") ||
    text.includes("projects") ||
    text.includes("portfolio") ||
    text.includes("real world") ||
    text.includes("hands on") ||
    text.includes("practical") ||
    text.includes("build") ||
    text.includes("capstone")
  ) {
    intents.push("projects");
  }

  if (
    text.includes("placement") ||
    text.includes("job")
  ) {
    intents.push("placement");
  }

  if (
    text.includes("certificate")
  ) {
    intents.push("certificate");
  }

  if (
    text.includes("eligible") ||
    text.includes("eligibility") ||
    text.includes("who can join") ||
    text.includes("who is eligible") ||
    text.includes("who is this course for") ||
    text.includes("who is this for") ||
    text.includes("can beginners join") ||
    text.includes("beginner") ||
    text.includes("beginners") ||
    text.includes("qualification") ||
    text.includes("degree") ||
    text.includes("12th") ||
    text.includes("education") ||
    text.includes("age limit") ||
    text.includes("laptop") ||
    text.includes("language") ||
    text.includes("attendance") ||
    text.includes("commitment") ||
    text.includes("no coding")
  ) {
    intents.push("eligibility");
  }

  if (
    text.includes("curriculum") ||
    text.includes("syllabus")
  ) {
    intents.push("curriculum");
  }

  if (
    text.includes("recording")
  ) {
    intents.push("recordings");
  }

  if (
    text.includes("mentor") ||
    text.includes("mentorship")
  ) {
    intents.push("mentorship");
  }

  if (
    text.includes("assignment")
  ) {
    intents.push("assignments");
  }

  return intents.length ? intents : ["unknown"];
}
export function analyzeIntent(message: string): QuestionIntent {
  const intent = {
    type: analyzeQuestion(message),
    subtype: analyzeQuestionSubtype(message),
    confidence: 1,
  };

  console.log("[Intent]", message, intent);

  return intent;
}