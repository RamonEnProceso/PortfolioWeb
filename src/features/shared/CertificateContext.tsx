import type { ReactNode } from "react";
import { createContext, useState, useContext } from "react";
import type { Certificates } from "../../models/Certificates";
import type { SetStateAction, Dispatch } from "react";

type CertificateContextValue = {
    certificate: Certificates|null;
    setCertificate : Dispatch<SetStateAction<Certificates|null>>
}

const CertificateContext = createContext<CertificateContextValue>({certificate: null,setCertificate:()=>{}});

const CertificateProvider = ({children}:{children:ReactNode}) => {
    const [certificate, setCertificate] = useState<Certificates|null>(null);
    const value : CertificateContextValue ={certificate, setCertificate}

    return <CertificateContext.Provider value={value}>{children}</CertificateContext.Provider>
}

const useSetCertificate = () => useContext(CertificateContext);

export {CertificateContext, CertificateProvider, useSetCertificate}
