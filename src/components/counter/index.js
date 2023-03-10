import React, {useState} from "react";

export default function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);
  return (
    <div>
      <button onClick={()=> setCount(prevCount => prevCount -1)}>-1</button>
        <span>{count}</span>   
        <button onClick={()=> setCount(prevCount => prevCount +1)}>+1</button> 
    </div>
  );
}