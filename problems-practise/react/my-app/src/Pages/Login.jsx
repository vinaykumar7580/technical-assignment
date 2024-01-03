import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"


function Login(){
    const {handleLogin}=useContext(AuthContext)
    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}
export default Login