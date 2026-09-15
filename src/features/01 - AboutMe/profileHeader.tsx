import type { Profile } from "../../models/Profile";
import type { Languages } from "../../models/Languages";
import { translateHeader } from "./translateHeader";
import { CVButton } from "../../shared/CVButton";
import IconDisplay from "../../shared/iconDisplay";

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
        <div>
            <h3>{translateHeader(lan, "Skills")}</h3>
            <div>
                <h4>Frontend</h4>
                <div>
                    {profileData.skills["front"].map((e)=>{
                        return <IconDisplay name={e}/>
                    })}
                </div>
            </div>
            <div>
                <h4>Backend</h4>
                <div>
                    {profileData.skills["back"].map((e)=>{
                        return <IconDisplay name={e}/>
                    })}
                </div>
            </div>
            <div>
                <h4>{translateHeader(lan,"Tools")}</h4>
                <div>
                    {profileData.skills["tools"].map((e)=>{
                        return <IconDisplay name={e}/>
                    })}
                </div>
            </div>
        </div>
        <div>
            <CVButton profileData={profileData} lan={lan}/>
        </div>
    </section>
    </>
}

export default ProfileHeader;