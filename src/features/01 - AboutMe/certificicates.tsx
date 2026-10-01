import profileData from "../../assets/JSONs/profile.json"
import type { Languages } from "../../models/Languages";
import { useLan } from "../shared/LanContext"
import styles from "./certificates.module.css"

const Certificates = () => {
    const {lan} = useLan();
    
    const header: Record<Languages, string>={
        "EN":"Certifications", "ES":"Certificados"}

    return <div className={styles.section}>
    <h3 >{header[lan]}</h3>
    <div className={styles.certificatesContainer}>
        {profileData.certificates.map((e,i)=>{
            return <img className={styles.certificateImg} src={e} key={i} loading="lazy"></img>
        })}
    </div>
    </div>
}

export default Certificates;