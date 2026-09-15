import type { Profile } from "../../models/Profile";
import type { Languages } from "../../models/Languages";

export const photoTextTranslator = (profileData:Profile,lan:Languages) => {
    switch(lan){
        case "ES":
            return `Foto de ${profileData.firstName} ${profileData.lastName}`;
        case "EN":
            return `${profileData.firstName} ${profileData.lastName}'s Photo`;
    }
}