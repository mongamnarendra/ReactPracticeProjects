import { useState } from "react"


const Counter =() =>{
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increament</button>
            <button onClick={()=>setCount(count-1)}>Decreament</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;