import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const useError = useRouteError()
    return(
        <div>Error</div>
    )
}

export default Error