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
    "photo":string,
    "alt-photo":string,
    "headline":Record<Languages, string[]>,
    "location": string,
    "bio": Record<Languages, string[]>,
    "skills": Skills,
    "email":string,
    "socialMedia": SocialMedia[],
    "languages":Record<Languages,string[]>,
    "CV":Record<Languages, string>
}