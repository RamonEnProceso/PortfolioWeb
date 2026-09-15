import type { Profile } from "../../models/Profile";
import type { Languages } from "../../models/Languages";
import { translateHeader } from "./translateHeader";
import { CVButton } from "../../shared/CVButton";
import styles from "./aboutMe.module.css"

const AboutMeContainer = ({profileData, lan}:{profileData:Profile, lan:Languages}) => {
    return <div className={styles.aboutMeContainer}>
        <div>
            <h3>{translateHeader(lan, "AboutMe")}</h3>
            <p>{profileData.bio[lan].map((e:string)=>{
                return <p>{e}</p>
            })}</p>
        </div>
        <div>
            <h4>{translateHeader(lan, "Languages")}</h4>
            {profileData.languages[lan].map((e:string)=>{
                return <p>{e}</p>})}
        </div>
        <div>
            <CVButton profileData={profileData} lan={lan}/>
        </div>
    </div>
}

export default AboutMeContainer;