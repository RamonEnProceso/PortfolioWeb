import type { ReactNode } from "react";
import { createContext, useState } from "react";
import type { Languages } from "../../models/Languages";
import type { SetStateAction, Dispatch } from "react";

type LanContextValue = {
    lan:Languages;
    setLan : Dispatch<SetStateAction<Languages>>
}

const LanContext = createContext<LanContextValue>({lan:"ES",setLan:()=>{}});

const LanProvider = ({children}:{children:ReactNode}) => {
    const [lan, setLan] = useState<Languages>("ES");
    const value : LanContextValue ={lan,setLan}

    return <LanContext.Provider value={value}>{children}</LanContext.Provider>
}

export {LanContext, LanProvider}