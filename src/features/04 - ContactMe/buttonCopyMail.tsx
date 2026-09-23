import type { Mail } from "../../models/Mail";
import type { Languages } from "../../models/Languages";
import { useState } from "react";
import styles from "./buttonCopyMail.module.css"

const ts = (lan:Languages, state:"state1"|"state2") => {
    const translation = {
        "ES":{
            "state1": "Copiar Mail",
            "state2": "¡Copiado!"},
        "EN":{
            "state1": "Copy email",
            "state2": "Copied!"
        }
    }
    return translation[lan][state]
}

const ButtonMailButton = ({mail, lan}:{mail:Mail, lan:Languages}) =>{
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
                {copied ? ts(lan,"state2") : ts(lan,"state1")}
        </button>
            <img className={styles.envelopeClosed} src="assets/envelopeClosed.webp"/>
            <img className={styles.envelopeOpen}src="assets/envelopeOpen.webp"/>
        </div>
        </>
}

export default ButtonMailButton;