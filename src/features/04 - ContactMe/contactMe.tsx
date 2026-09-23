import type { PageData } from "../../models/PageData";
import ButtonMailButton from "./buttonCopyMail";
import styles from "./contactMe.module.css"

const ContactMe = ({data}:{data:Pick<PageData, "lan" | "profileData">}) => {
    const lan = data.lan;

    return <>
    <section className={styles.section} id="contact">
        <h2>{lan=="ES"?"Contactame":"Contact me"}</h2>
        <div className={styles.mail}>
            <div>
                {data.profileData.email.user}
            </div>
            @
            <div>
                {data.profileData.email.domain}
            </div>
        </div>
        <ButtonMailButton mail={data.profileData.email} lan={lan}/>
    </section>
    </>
}

export default ContactMe;
