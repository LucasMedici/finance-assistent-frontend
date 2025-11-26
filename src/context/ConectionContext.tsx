import React, {createContext, useEffect, useState} from "react";
import NetInfo from "@react-native-community/netinfo";

export const ConnectionContext = createContext({
    isConnected: true,
})

export function ConnectionProvider({children}: any) {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected ?? true);
        });

        return () => {
            unsubscribe();
        };
    })

    return (
        <ConnectionContext.Provider value={{isConnected}}>
            {children}
        </ConnectionContext.Provider>
    )
}