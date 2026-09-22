import { translateHeader } from "./translateHeader";
import { CVButton } from "../../shared/CVButton";
import type { PageData } from "../../models/PageData";
import styles from "./aboutMe.module.css"

const AboutMeContainer = ({data}:{data:Pick<PageData, "lan" | "profileData">}) => {
    return <div className={styles.aboutMeContainer}>
        <div>
            <h3>{translateHeader(data.lan, "AboutMe")}</h3>
            <div>{data.profileData.bio[data.lan].map((e:string, i:number)=>{
                return <p key={i}>{e}</p>
            })}</div>
        </div>
        <div>
            <h4>{translateHeader(data.lan, "Languages")}</h4>
            {data.profileData.languages[data.lan].map((e:string, i:number)=>{
                return <p key={i}>{e}</p>})}
        </div>
        <div>
            <CVButton profileData={data.profileData} lan={data.lan}/>
        </div>
    </div>
}

export default AboutMeContainer;