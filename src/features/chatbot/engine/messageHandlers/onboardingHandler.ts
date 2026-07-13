import type { StudentProfile } from "../../types";

export function isRoleSelection(
    input: string,
    roleReplies: string[],
) {
    return roleReplies.includes(input);
}

export function isEducationSelection(
    input: string,
    educationReplies: string[],
) {
    return educationReplies.includes(input);
}

export function isCareerGoalSelection(
    input: string,
    goalReplies: string[],
) {
    return goalReplies.includes(input);
}