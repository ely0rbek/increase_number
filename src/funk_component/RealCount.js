import { useRef } from "react";
import { useEffect, useState } from "react";

function setDefaultValue(){
    const userCount=localStorage.getItem('count');
    return userCount ? +userCount : 0;
}
export default function RealCount(){
    const [count,setCount]=useState(setDefaultValue());
    const [isCouting,setCout]=useState(false);
    const [timeOut,setTimeOut]=useState(null);
    // const timerId= useRef(null)

    useEffect(()=>{
        let a = +localStorage.getItem("count");
        setCount(a);
    },[localStorage.setItem("count",count)]);
    const handleStart=()=>{
        setCout(!isCouting);
        setTimeOut(setInterval(()=>{setCount((prev)=>prev+1)},1000));
        // timerId=setInterval(()=>{setCount((prev)=>prev+1)},1000);
    }
    const handleStop=()=>{
        setCout(!isCouting);
        setTimeOut(clearInterval(timeOut))
        // clearInterval(timerId.current)
        console.log(count)
    }
    const handleReset=()=>{
        setCout(!isCouting);
        setCount(0)
        setTimeOut(clearInterval(timeOut))
        // clearInterval(timerId.current)
    }
    return (
        <div className="App">
            <p>React Timer</p>
            <p>{count}</p>
            {!isCouting ? (
            <button className="success" onClick={handleStart}>
                Start
            </button>
            ) : (
            <button className="danger" onClick={handleStop}>
                Stop
            </button>
            )}
            <button className="secondary" onClick={handleReset}>
            Reset
            </button>
        </div>
        );
}