import type { Languages } from "./Languages"
import type { SocialMedia } from "./SocialMedia"

export interface Profile {
    "firstName": string,
    "lastName": string,
    "bio": Record<Languages, string>,
    "stack": string[],
    "email":string,
    "socialMedia": SocialMedia[],
    "CV":Record<Languages, string>
}