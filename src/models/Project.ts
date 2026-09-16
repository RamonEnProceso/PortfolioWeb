import type { Languages } from "./Languages"

export interface Project {
    "name":string,
    "url"?: string,
    "repo"?:string,
    "thumbnail": string[],
    "description": Record<Languages, string[]>,
    "stack": string[],
    "libraries"?: string[]
}       