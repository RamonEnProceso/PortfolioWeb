import type { Languages } from "../../models/Languages";

type ProjectHeader = "Projects" | "Libraries" | "noPreview" | "loading" | "showMore";

export const translateProject = (lan : Languages, header:ProjectHeader) => {
    const headerObj : Record<ProjectHeader,Record<Languages, string>> = {
        "Projects":{
            "EN":"Projects",
            "ES":"Proyectos"},
        "Libraries":{
            "EN":"Libraries",
            "ES":"Librerías"},
        "noPreview":{
            "EN":"No video preview available",
            "ES":"No hay video de demostración"},
        "loading":{
            "EN":"Loading",
            "ES":"Cargando"},
        "showMore":{
            "EN":"Show more",
            "ES":"Mostrar más"}
    }
    return headerObj[header][lan];
}