import { useSetCertificate } from "../shared/CertificateContext";
import styles from "./WindowCertificates.module.css"

const WindowCertificates = ()=> {
    const {certificate, setCertificate} = useSetCertificate();

    if(certificate==null){
        return <></>
    }

    return <div className={styles.container}>
        <div className={styles.window}>
            <button className={styles.closeButton} onClick={()=>{setCertificate(null)}}>X</button>
            <img className={styles.image} src={certificate.image}/>
            <div className={styles.data}>
                <div className={styles.title}>{certificate.title}</div>
                <div className={styles.orgAndYear}>{certificate.organization} · {certificate.year}</div>
            </div>
        </div>
    </div>
}

export default WindowCertificates;