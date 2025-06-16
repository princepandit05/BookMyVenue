import { useEffect, useState } from "react"

const useOnlineStatus = ()=>{
    const [OnlineStatus,setOnlineStatus] = useState(true)

    useEffect(()=>{
        window.addEventListener("online", (event) => {
            setOnlineStatus(true)
        });

        window.addEventListener("offline", (event) => {
            setOnlineStatus(false)
          });
    },[])
    
    return OnlineStatus
}

export default useOnlineStatus