import { translateHeader } from "../01 - AboutMe/translateHeader"
import IconDisplay from "../../shared/iconDisplay"
import type { PageData } from "../../models/PageData"
import styles from "./skillsContaines.module.css"

const SkillsContainer = ({data}:{data:PageData}) => {
    return <div className={styles.stackContainer}>
                <h3>{translateHeader(data.lan, "Skills")}</h3>
                <div>
                    <h4>Frontend</h4>
                    <div className={styles.iconsDisplay}>
                        {data.profileData.skills["front"].map((e)=>{
                            return <IconDisplay name={e}/>
                        })}
                    </div>
                </div>
                <div>
                    <h4>Backend</h4>
                    <div className={styles.iconsDisplay}>
                        {data.profileData.skills["back"].map((e)=>{
                            return <IconDisplay name={e}/>
                        })}
                    </div>
                </div>
                <div>
                    <h4>{translateHeader(data.lan,"Tools")}</h4>
                    <div className={styles.iconsDisplay}>
                        {data.profileData.skills["tools"].map((e)=>{
                            return <IconDisplay name={e}/>
                        })}
                    </div>
                </div>
            </div>
}

export default SkillsContainer;