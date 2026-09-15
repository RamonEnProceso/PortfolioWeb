import type { Profile } from "../../models/Profile"
import type { Languages } from "../../models/Languages"
import { photoTextTranslator } from "./photoTextTranslator"
import styles from "./namePhoto.module.css"

const NamePhoto = ({profileData, lan}:{profileData:Profile, lan:Languages}) => {
    const photoText:string = photoTextTranslator(profileData,lan);
    
    return <div className={styles.section}>
        <div className={styles.namePhotoContainer}>
            <div className={styles.namePhotoContainerLeft}>

                <h1>{profileData.firstName}, {profileData.lastName}</h1>

                <ul>{profileData.headline[lan].map((e:string)=>{
                    return <li>{e}</li>
                })}</ul>

                <div className={styles.socialMedia}>
                    {profileData.socialMedia.map((e:any)=>{
                        return <a title={e.alt} href={e.url} target="_blank" rel="noopener noreferrer"><img alt ={`${e.name} logo`} src={e.icon}></img></a>
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
    </div>
}

export default NamePhoto