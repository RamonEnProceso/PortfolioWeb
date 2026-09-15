import type { Languages } from "../../models/Languages";

type ProjectHeader = "Projects" | "Libraries";

export const translateProject = (tipo : Languages, header:ProjectHeader) => {
    switch(header){
        case("Projects"):
            switch(tipo){
                case("EN"):
                    return "Projects"
                case("ES"):
                    return "Proyectos"
            }
        case("Libraries"):
            switch(tipo){
                case("EN"):
                    return "Libraries"
                case("ES"):
                    return "Librerías"
            }
    }
}