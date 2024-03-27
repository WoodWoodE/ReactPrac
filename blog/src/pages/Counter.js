import React, {useState} from "react";

const Counter = () => {
    let [num, setNum] = useState(0);
    const plusFunc = () => {
        setNum(num+1);
    }
    const minusFunc = () => {
        setNum(num-1);
    }
    return(
        <div>
            <button onClick={plusFunc}>+1</button>
            <button onClick={minusFunc}>-1</button>
            <p>{num}</p>
        </div>
    )
}

export default Counter