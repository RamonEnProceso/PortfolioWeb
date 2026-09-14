import type { Languages } from "../../models/Languages";

type Header = "AboutMe"| "Languages" | "Skills" | "Tools";

export const translateHeader = (tipo : Languages, header:Header) => {
    switch(header){
        case "AboutMe":
            switch(tipo){
                case "EN":
                    return "About Me";
                case "ES":
                    return "Sobre mí";
            };
        case "Languages":
            switch(tipo){
                case "EN":
                    return "Languages";
                case "ES":
                    return "Idiomas";
            }
        case "Skills":
            switch(tipo){
                case "EN":
                    return "Skills"
                case "ES":
                    return "Habilidades"
            }
        case "Tools":
            switch(tipo){
                case "EN":
                    return "Tools"
                case "ES":
                    return "Herramientas"
            }

    }
}