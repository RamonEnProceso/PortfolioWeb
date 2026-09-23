import type { PageData } from "../../models/PageData";
import styles from "./contactMe.module.css"

const ContactMe = ({data}:{data:Pick<PageData, "lan" | "profileData">}) => {
    const lan = data.lan;

    return <>
    <section className={styles.section} id="contact">
        <h2>{lan=="ES"?"Contactame":"Contact me"}</h2>
    </section>
    </>
}

export default ContactMe;
