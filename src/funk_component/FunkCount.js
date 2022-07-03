import React,{useState} from "react";
export default function FCounter(){
    const [count,setCount]=useState(0);
    return (
        <div className="App">
        <h1>Counter : {count}</h1>
        <button className="btn success" onClick={()=>setCount(count+1)}>Increment</button>
        <button className="btn danger" onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}