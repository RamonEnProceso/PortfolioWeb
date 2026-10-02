import profileData from "../../assets/JSONs/profile.json"
import type { Languages } from "../../models/Languages";
import { useLan } from "../shared/LanContext"
import { useSetCertificate } from "../shared/CertificateContext";
import styles from "./certificates.module.css"

const Certificates = () => {
    const {lan} = useLan();
    const { setCertificate } = useSetCertificate();
    const header: Record<Languages, string>={
        "EN":"Certifications", "ES":"Certificados"}

    return <div className={styles.section}>
    <h3 >{header[lan]}</h3>
    <div className={styles.certificatesContainer}>
        {profileData.certificates.map((c,i)=>{
            return <div className={styles.certificateCard} key={i} onClick={()=>{setCertificate(c)}}>
                <img className={styles.certificateImg} src={c.image}loading="lazy"/>
                <div className={styles.certificateOrg}>{c.organization}</div>
                <div className={styles.certificateTitle}>{c.title}</div>
            </div>
        })}
    </div>
    </div>
}

export default Certificates;