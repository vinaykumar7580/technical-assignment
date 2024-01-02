import {Routes, Route} from "react-router-dom"
import Product from "../Pages/Product"
import Card from "../Pages/Card"

function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/card/:id" element={<Card/>}/>
        </Routes>
    )

}
export default AllRoutes