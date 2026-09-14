import type { Profile } from "../../models/Profile";
import type { Languages } from "../../models/Languages";

const transaleButton = (lan:Languages) : string => {
    switch (lan){
        case "EN":
            return "Download CV"
        case "ES":
            return "Descargar CV"
    }
}

export const CVButton = ({profileData, lan}:{profileData:Profile, lan:Languages}) => {
    return <>
        <a href={profileData.CV[lan]}>{transaleButton(lan)}</a>
    </>
}