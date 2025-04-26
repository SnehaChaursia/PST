import React,{useEffect, useState} from 'react'


const Lifecycle=()=>{
    const[count,setCount]=useState(0);
    useEffect(()=>{
        console.log("compounrd mounted --> componenDidMount");
        return()=>{
            console.log("compond unmounted-->compond unmounted1")
        }
    },[])
    useEffect(()=>{
        return()=>{
            console.log("compond unmounted-->compond unmounted2")
        }
    },[count])
    return(
        <div>
            <p>{count}</p>
                <button onClick={()=>setCount(count+1)}>+</button>
                <button onClick={()=>setCount(count-1)}>-</button>
           
        </div>
    )
}
export default Lifecycle