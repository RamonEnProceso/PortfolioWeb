import type { Languages } from "../../models/Languages";
import { useLan } from "../shared/LanContext";

type MenuNames = "Home"|"About"|"Projects"|"Contact";

export const useTranslateMenu = () => {
    const { lan } = useLan();
    const menuObj : Record<MenuNames,Record<Languages, string>> = {
        "Home":{
            "EN":"Home",
            "ES":"Inicio"},
        "About":{
            "EN":"About Me",
            "ES":"Sobre Mí"},
        "Projects":{
            "EN":"Projects",
            "ES":"Proyectos"},
        "Contact":{
            "EN":"Contact",
            "ES":"Contacto"}
    }
    return (name:MenuNames) => menuObj[name][lan];
}
