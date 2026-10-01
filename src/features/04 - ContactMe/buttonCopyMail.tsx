import type { Mail } from "../../models/Mail";
import { useState } from "react";
import { useLan } from "../shared/LanContext";
import styles from "./buttonCopyMail.module.css"

const ButtonMailButton = ({mail}:{mail:Mail}) =>{
    const { lan } = useLan();
    const [copied, setCopied] = useState(false);

    const fullMail = mail.user + "@" + mail.domain;

    const copyMail = async () => {
        await navigator.clipboard.writeText(fullMail);
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    const ts = (state:"state1"|"state2") => {
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

    return <>

        <div className={styles.envelope}><button className={styles.button} onClick={copyMail}>
                {copied ? ts("state2") : ts("state1")}
        </button>
            <img className={styles.envelopeClosed} src="assets/envelopeClosed.webp"/>
            <img className={styles.envelopeOpen}src="assets/envelopeOpen.webp"/>
        </div>
        </>
}

export default ButtonMailButton;
