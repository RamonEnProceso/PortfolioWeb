import type { Languages } from "../../models/Languages";

type Header = "AboutMe"| "Languages" | "Skills" | "Tools";

export const translateHeader = (lan : Languages, header:Header) => {
    const headerObj : Record <Header,Record<Languages,string>>= {
        "AboutMe":{
            "EN":"About Me",
            "ES":"Sobre mí"},
        "Languages":{
            "EN":"Languages",
            "ES":"Idiomas"},
        "Skills":{
            "EN":"Skills",
            "ES":"Habilidades"},
        "Tools":{
            "EN":"Tools",
            "ES":"Herramientas"
        }
    }
    return headerObj[header][lan];
}
    