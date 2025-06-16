import { createContext } from "react";
import useOnlineStatus from "../Hooks/useOnlinestatus";


 export const NetworkContext = createContext()

 export const NetworkProvider = ({children})=>{
    const NetworkStatus = useOnlineStatus()

    return(
        <NetworkContext.Provider value = {{NetworkStatus}}>
            {!NetworkStatus?<div className="Noconnection-container">
            <div className="noconnection-text">
            <h5>आपका इंटरनेट कनेक्शन काम नहीं कर रहा है. कृपया अपना इंटरनेट चालू करें !!!!</h5>
            <h1>Your internet connection is not working. Please turn on your internet.</h1>
            </div>
           </div>:""}
            {children}
        </NetworkContext.Provider>
    )
}