import { useLan } from "../shared/LanContext"
import styles from "./translateButton.module.css"

const TranslateButton = () => {
    const { lan, setLan } = useLan();
    return <button className={styles.button} onClick={()=>setLan((e)=>{return e=="ES"?"EN":"ES"})}>{lan}</button>
}

export default TranslateButton;
