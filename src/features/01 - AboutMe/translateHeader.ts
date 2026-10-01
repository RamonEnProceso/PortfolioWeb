import type { Languages } from "../../models/Languages";
import { useLan } from "../shared/LanContext";

type Header = "AboutMe"| "Languages" | "Skills" | "Tools";

export const useTranslateHeader = () => {
    const { lan } = useLan();
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
    return (header:Header) => headerObj[header][lan];
}
