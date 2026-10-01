import type { Profile } from "../../models/Profile";
import { useLan } from "../shared/LanContext";

export const usePhotoTextTranslator = () => {
    const { lan } = useLan();
    return (profileData:Profile) => {
        switch(lan){
            case "ES":
                return `Foto de ${profileData.firstName} ${profileData.lastName}`;
            case "EN":
                return `Photo of ${profileData.firstName} ${profileData.lastName}`;
        }
    }
}
