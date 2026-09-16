import type { Languages } from "../../models/Languages";

type ProjectHeader = "Projects" | "Libraries";

export const translateProject = (lan : Languages, header:ProjectHeader) => {
    const headerObj : Record<ProjectHeader,Record<Languages, string>> = {
        "Projects":{
            "EN":"Projects",
            "ES":"Proyectos"},
        "Libraries":{
            "EN":"Libraries",
            "ES":"Librerías"
        }
    }
    return headerObj[header][lan];
}