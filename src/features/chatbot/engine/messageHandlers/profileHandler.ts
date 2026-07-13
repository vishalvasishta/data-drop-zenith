import type { StudentProfile } from "../../types";
import { computeLeadScore } from "../leadIntelligence";

export function updateLeadScore(
  profile: StudentProfile,
): StudentProfile {

  return {
    ...profile,
    leadScore: computeLeadScore(profile),
  };
}