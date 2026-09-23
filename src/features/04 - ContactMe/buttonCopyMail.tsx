import type { Mail } from "../../models/Mail";
import { useState } from "react";
import styles from "./buttonCopyMail.module.css"

const ButtonMailButton = ({mail}:{mail:Mail}) =>{
    const [copied, setCopied] = useState(false);

    const fullMail = mail.user + "@" + mail.domain;

    const copyMail = async () => {
        await navigator.clipboard.writeText(fullMail);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };


    return <>
        
        <div className={styles.envelope}><button className={styles.button} onClick={copyMail}>
                {copied ? "¡Copiado!" : "Copiar mail"}
        </button>
            <img className={styles.envelopeClosed} src="assets/envelopeClosed.webp"/>
            <img className={styles.envelopeOpen}src="assets/envelopeOpen.webp"/>
        </div>
        </>
}

export default ButtonMailButton;