import React, { createRef,useEffect,useState } from "react";
import { useRef } from "react";
export default function CreateRef(){
    const inputRef=useRef(null);
    const [inputValue,setInputvalue]=useState('');
    useEffect(()=>{inputRef.current.focus()},[])
    return(
        <div className="App">
            <h1>Hello forms</h1>
            <input type="text" placeholder="Name ... " ref={inputRef} onChange={()=>setInputvalue(inputRef.current.value)}/>
            <button className="success"  onClick={()=>inputRef.current.focus()}>onClick</button>
        </div>
    )
}