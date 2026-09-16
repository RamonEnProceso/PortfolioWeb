import type{ Languages } from "../../models/Languages"
import type { Dispatch, SetStateAction } from "react"

const TranslateButton = ({lan,setLan}:{lan:Languages,setLan:Dispatch<SetStateAction<Languages>>}) => {
    return <button onClick={()=>setLan((e)=>{return e=="ES"?"EN":"ES"})}>{lan}</button>
}

export default TranslateButton;