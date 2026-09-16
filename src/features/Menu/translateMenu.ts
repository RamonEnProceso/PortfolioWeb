import type { Languages } from "../../models/Languages";

type MenuNames = "Home"|"About"|"Projects"|"Contact";

export const translateMenu = (lan:Languages, name:MenuNames) => {
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
    return menuObj[name][lan];
}