import { useState } from "react"


function Counter1(){
    const [count, setCount]=useState(0)

    const handleIncrease=()=>{
        setCount((prev)=>prev+1)
    }

    const handleDecrease=()=>{
        setCount((prev)=>prev-1)
    }

    const handleReset=()=>{
        setCount(0)
    }

    return(
        <div>
            <h1>Simple Counter</h1>
            <h3>Count: {count}</h3>
            <button disabled={count>=20} onClick={handleIncrease}>Increase</button>
            <button disabled={count<1} onClick={handleDecrease}>Decrease</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )

}
export default Counter1