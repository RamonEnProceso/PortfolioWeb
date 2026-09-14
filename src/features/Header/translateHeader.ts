import type { Languages } from "../../models/Languages";

type Header = "AboutMe"| "Languages";

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
    }
}