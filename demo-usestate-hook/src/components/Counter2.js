import React, { useState } from "react";

export default function Counter2(){
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 2)}>Increase</button>
        </div>
    )
}