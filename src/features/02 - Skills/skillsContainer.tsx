import { translateHeader } from "../01 - AboutMe/translateHeader"
import IconDisplay from "../../shared/iconDisplay"
import type { Profile } from "../../models/Profile"
import type { Languages } from "../../models/Languages"
import styles from "./skillsContaines.module.css"

const SkillsContainer = ({profileData, lan}:{profileData:Profile, lan:Languages}) => {
    return <div className={styles.stackContainer}>
                <h3>{translateHeader(lan, "Skills")}</h3>
                <div>
                    <h4>Frontend</h4>
                    <div className={styles.iconsDisplay}>
                        {profileData.skills["front"].map((e)=>{
                            return <IconDisplay name={e}/>
                        })}
                    </div>
                </div>
                <div>
                    <h4>Backend</h4>
                    <div className={styles.iconsDisplay}>
                        {profileData.skills["back"].map((e)=>{
                            return <IconDisplay name={e}/>
                        })}
                    </div>
                </div>
                <div>
                    <h4>{translateHeader(lan,"Tools")}</h4>
                    <div className={styles.iconsDisplay}>
                        {profileData.skills["tools"].map((e)=>{
                            return <IconDisplay name={e}/>
                        })}
                    </div>
                </div>
            </div>
}

export default SkillsContainer;