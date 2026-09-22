import type{ Languages } from "../../models/Languages"
import type { Dispatch, SetStateAction } from "react"

const TranslateButton = ({lan,setLan}:{lan:Languages,setLan:Dispatch<SetStateAction<Languages>>}) => {
    return <button style={{cursor:"pointer", color:"#ffff"}} onClick={()=>setLan((e)=>{return e=="ES"?"EN":"ES"})}>{lan}</button>
}

export default TranslateButton;