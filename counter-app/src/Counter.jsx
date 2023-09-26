import {useState, useRef} from "react"

function Counter(){
    const [count, setCount]=useState(0)

    let ref=useRef();

    const handleStart=()=>{
        if(ref.current!=null){
            return
        }

        ref.current=setInterval(()=>{
            setCount((prev)=>prev+1)

        },1000)

    }
    const handleStop=()=>{
        clearInterval(ref.current)
        ref.current=null

    }

    const handleReset=()=>{
        handleStop()
        setCount(0)

    }

    return(
        <div>
            <h1>Counter Application</h1>
            <br />
            <h2>Count: {count}</h2>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}
export default Counter