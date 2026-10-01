import { useLan } from "../shared/LanContext"

const TranslateButton = () => {
    const { lan, setLan } = useLan();
    return <button style={{cursor:"pointer", color:"#ffff"}} onClick={()=>setLan((e)=>{return e=="ES"?"EN":"ES"})}>{lan}</button>
}

export default TranslateButton;
