import { useTranslateHeader } from "./translateHeader";
import { CVButton } from "../../shared/CVButton";
import { useLan } from "../shared/LanContext";
import type { PageData } from "../../models/PageData";
import styles from "./aboutMe.module.css"

const AboutMeContainer = ({data}:{data:Pick<PageData, "profileData">}) => {
    const translateHeader = useTranslateHeader();
    const { lan } = useLan();
    return <div className={styles.aboutMeContainer}>
        <div>
            <h3>{translateHeader("AboutMe")}</h3>
            <div>{data.profileData.bio[lan].map((e:string, i:number)=>{
                return <p key={i}>{e}</p>
            })}</div>
        </div>
        <div>
            <h4>{translateHeader("Languages")}</h4>
            {data.profileData.languages[lan].map((e:string, i:number)=>{
                return <p key={i}>{e}</p>})}
        </div>
        <div>
            <CVButton profileData={data.profileData}/>
        </div>
    </div>
}

export default AboutMeContainer;
