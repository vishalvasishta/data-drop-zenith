import type { StudentProfile } from "../../types";

export function updateObjections(
  profile: StudentProfile,
  objection: string,
): StudentProfile {

  if (profile.objections.includes(objection)) {
    return profile;
  }

  return {
    ...profile,
    objections: [
      ...profile.objections,
      objection,
    ],
  };
}