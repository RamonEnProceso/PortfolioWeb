import type { Languages } from "./Languages"
import type { SocialMedia } from "./SocialMedia"

interface Skills {
    "front": string[],
    "back": string[],
    "tools": string[],
    "learning": string[]
}

export interface Profile {
    "firstName": string,
    "lastName": string,
    "bio": Record<Languages, string>,
    "skills": Skills,
    "email":string,
    "socialMedia": SocialMedia[],
    "CV":Record<Languages, string>
}