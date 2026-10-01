import type { PageData } from "../../models/PageData"
import type { SocialMedia } from "../../models/SocialMedia"
import { usePhotoTextTranslator } from "./photoTextTranslator"
import { useLan } from "../shared/LanContext";
import styles from "./namePhoto.module.css"

const NamePhoto = ({data}:{data:Pick<PageData, "profileData">}) => {
    const profileData = data.profileData;
    const { lan } = useLan();
    const photoTextTranslator = usePhotoTextTranslator();
    const photoText:string = photoTextTranslator(profileData);

    return <section className={styles.section} id="home">
        <div className={styles.namePhotoContainer}>
            <div className={styles.namePhotoContainerLeft}>

                <h1>{profileData.firstName} {profileData.lastName}</h1>

                <ul>{profileData.headline[lan].map((e:string, i:number)=>{
                    return <li key={i}>{e}</li>
                })}</ul>

                <div className={styles.socialMedia}>
                    {profileData.socialMedia.map((e:SocialMedia)=>{
                        return <a key={e.url} title={e.alt} href={e.url} target="_blank" rel="noopener noreferrer"><img alt ={`${e.name} logo`} src={e.icon}></img></a>
                    })}
                </div>

            </div>
            <div className={styles.namePhotoContainerRight}>
                <div className={styles.photoDiv}>

                    <img className={styles.photoDiv_altImg}
                    alt={photoText} title={photoText}
                    src={profileData["alt-photo"]}></img>

                    <img className={styles.photoDiv_Img}
                    alt={photoText} title={photoText}
                    src={profileData.photo}></img>

                </div>
            </div>
        </div>
    </section>
}

export default NamePhoto
