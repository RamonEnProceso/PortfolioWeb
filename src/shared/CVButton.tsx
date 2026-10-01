import type { Profile } from "../models/Profile";
import { useLan } from "../features/shared/LanContext";
import styles from "./CVButton.module.css"

export const CVButton = ({profileData}:{profileData:Profile}) => {
    const { lan } = useLan();

    const translateButton = () : string => {
        switch (lan){
            case "EN":
                return "Download CV"
            case "ES":
                return "Descargar CV"
        }
    }

    return <>
        <a href={profileData.CV[lan]} className={styles.button}>
            {translateButton()}
        </a>
    </>
}
