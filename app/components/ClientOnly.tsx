'use client';
import { useEffect, useState } from "react";

interface ClientOnlyProps {
    children: React.ReactNode;
}


const ClientOnly: React.FC<ClientOnlyProps> = ({children}) => {
    const [hasMounted, setHadMounted] = useState(false);
    
    useEffect(() =>{
        setHadMounted(true);
        }, [])

    if(!hasMounted){
        return null;
    }
    return (
        <>
            {children}
        </>
      );
}
 
export default ClientOnly;