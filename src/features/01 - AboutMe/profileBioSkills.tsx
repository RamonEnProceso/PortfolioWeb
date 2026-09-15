import type { Profile } from "../../models/Profile";
import type { Languages } from "../../models/Languages";
import SkillsContainer from "../02 - Skills/skillsContainer";
import AboutMeContainer from "./aboutMe";
import styles from "./profileBioSkills.module.css"

const ProfileBioSkills = ({profileData, lan}:{profileData:Profile, lan:Languages}) => {
    
    return <section className={styles.aboutMeContainer}>
    <div className={styles.aboutMeDiv}>
        <AboutMeContainer profileData={profileData} lan={lan}/>
        <SkillsContainer profileData={profileData} lan={lan}/>
    </div>
    </section>
}

export default ProfileBioSkills;