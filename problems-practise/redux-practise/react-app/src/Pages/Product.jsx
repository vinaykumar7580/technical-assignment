import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { handleAllProducts } from "../Redux/action"
import { Link } from "react-router-dom"


function Product(){

    const dispatch=useDispatch()
    const {products}=useSelector((store)=>store.reducer)

    useEffect(()=>{
        dispatch(handleAllProducts)

    },[])

    console.log("products", products)

    return(
        <div>
            <h1>Products</h1>
            <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", alignItems:"center", gap:"20px"}}>
            {products && products?.map((el)=>(
                <div key={el.id}>
                    <img style={{width:"100%"}} src={el.image} alt={el.title} />
                    <h2>{el.title}</h2>
                    <p>{el.category}</p>
                    <p>{el.price}</p>
                    <Link to={`/card/${el.id}`}><button>Buy Now</button></Link>
                </div>
            ))}
            </div>
        </div>
    )
}
export default Product