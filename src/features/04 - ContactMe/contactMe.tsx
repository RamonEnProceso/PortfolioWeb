import type { PageData } from "../../models/PageData";
import ButtonMailButton from "./buttonCopyMail";
import { useLan } from "../shared/LanContext";
import styles from "./contactMe.module.css"

const ContactMe = ({data}:{data:Pick<PageData, "profileData">}) => {
    const { lan } = useLan();

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
        <ButtonMailButton mail={data.profileData.email}/>
    </section>
    </>
}

export default ContactMe;
