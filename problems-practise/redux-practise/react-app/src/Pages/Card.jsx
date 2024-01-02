import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { handleSingleProduct } from "../Redux/action"



function Card(){

    const params=useParams()
    const dispatch=useDispatch()
    const {product}=useSelector((store)=>store.reducer)

    useEffect(()=>{
        dispatch(handleSingleProduct(params.id))

    },[])

    console.log("product", product)


    return(
        <div>
            <h1>Single Product</h1>
            <img src={product?.image} alt="" />
            <h2>{product && product?.title}</h2>
            <p>{product && product?.category}</p>
            <p>{product && product?.price}</p>
        </div>
    )
}
export default Card