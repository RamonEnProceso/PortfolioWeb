import type { Profile } from "../../models/Profile";
import type { Languages } from "../../models/Languages";
import { translateHeader } from "./translateHeader";
import { CVButton } from "../../shared/CVButton";
import SkillsContainer from "../02 - Skills/skillsContainer";

const ProfileHeader = ({profileData, lan}:{profileData:Profile, lan:Languages}) => {
    
    return <>
    <section>
        <div>
            <h3>{translateHeader(lan, "AboutMe")}</h3>
            <p>{profileData.bio[lan].map((e:string)=>{
                return <p>{e}</p>
            })}</p>
        </div>
        <div>
            <h3>{translateHeader(lan, "Languages")}</h3>
            {profileData.languages[lan].map((e:string)=>{
                return <p>{e}</p>})}
        </div>
        <SkillsContainer profileData={profileData} lan={lan}/>
        <div>
            <CVButton profileData={profileData} lan={lan}/>
        </div>
    </section>
    </>
}

export default ProfileHeader;