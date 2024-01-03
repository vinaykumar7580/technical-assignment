import {Routes, Route} from "react-router-dom"
import Home from "../Pages/Home"
import Counter from "../Pages/Counter"
import Todos from "../Pages/Todos"
import Login from "../Pages/Login"
import PrivateRoute from "../Context/PrivateRoute"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/counter" element={<PrivateRoute><Counter/></PrivateRoute>}/>
            <Route path="/todos" element={<PrivateRoute><Todos/></PrivateRoute>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
    )
}
export default AllRoutes