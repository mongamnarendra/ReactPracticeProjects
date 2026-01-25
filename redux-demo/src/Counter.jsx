import { useDispatch } from "react-redux"
import { decrement, increment, reset } from "./feature/counterSlice";

const Counter =() =>{
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Counter Component</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
            <button onClick={()=>dispatch(reset())}></button>
        </div>
    )
}

export default Counter;