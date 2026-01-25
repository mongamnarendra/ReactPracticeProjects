import { useSelector } from "react-redux"

const View = ()=>{
    const count = useSelector((state)=>state.counter.count);
    return(
        <div>
            <h1>View Component</h1>
            <h2>Count Value: {count}</h2>
        </div>
)
}

export default View;