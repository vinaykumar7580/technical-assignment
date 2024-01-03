import { Link } from "react-router-dom"


function Home(){
    return(
        <div>
            <div style={{width:"60%", margin:"auto", display:"flex", justifyContent:"center", alignItems:"center", gap:"30px"}}>
                <Link to="/"><h3>Home</h3></Link>
                <Link to="/counter"><h3>Counter</h3></Link>
                <Link to="/todos"><h3>Todos</h3></Link>
                <Link to="/login"><h3>Login</h3></Link>
            </div>
            <h1>Home Page</h1>
        </div>
    )
}
export default Home