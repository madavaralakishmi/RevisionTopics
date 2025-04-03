import { useRouteError } from "react-router-dom"

const ErrorElement = ()=>{
    let error = useRouteError()
    console.log(error)
    return(
        <div>
            <h1>Opps:{error?.error?.message}</h1>
        </div>
    )
}

export default ErrorElement