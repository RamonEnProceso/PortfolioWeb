import type { Profile } from "../../models/Profile";
import type { Languages } from "../../models/Languages";
import type { SocialMedia } from "../../models/SocialMedia";
import { translateHeader } from "./translateHeader";
import { CVButton } from "../CVButton/CVButton";
import IconDisplay from "../../shared/iconDisplay";

const ProfileHeader = ({profileData, lan}:{profileData:Profile, lan:Languages}) => {
    const photoText:string = `Foto de ${profileData.firstName} ${profileData.lastName}`;
    
    return <>
    <section>
        <h1>{profileData.firstName}, {profileData.lastName}</h1>
        <ul>{profileData.headline[lan].map((e:string)=>{
            return <li>{e}</li>
        })}</ul>
        <div>
            <img height="300px" alt={photoText} title={photoText} src={profileData["alt-photo"]}></img>
        </div>
        <h3>{profileData.location}</h3>
        <div>
            {profileData.socialMedia.map((e:SocialMedia)=>{
                return <a title={e.alt} href={e.url}><img alt ={`${e.name} logo`} src={e.icon}></img></a>
            })}
        </div>
        <div>
            <h3>{translateHeader(lan, "AboutMe")}</h3>
            <p>{profileData.bio[lan]}</p>
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