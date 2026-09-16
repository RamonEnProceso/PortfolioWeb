import SkillsContainer from "../02 - Skills/skillsContainer";
import AboutMeContainer from "./aboutMe";
import type { PageData } from "../../models/PageData";
import styles from "./profileBioSkills.module.css"

const ProfileBioSkills = ({data}:{data:PageData}) => {
    
    return <section className={styles.aboutMeContainer} id="about">
    <div className={styles.aboutMeDiv}>
        <AboutMeContainer data={data}/>
        <SkillsContainer data={data}/>
    </div>
    </section>
}

export default ProfileBioSkills;