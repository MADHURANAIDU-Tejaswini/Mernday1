import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [count,setCount] = useState(0);
    const [value,setValue]=useState(0);
    //Syntax
    //useeffect(callback Function,[dependency array]);
    // (Optional)
    //useEffect(()=>{
        // statement
    //},[dependency]);

//With dependency array
    // useEffect(()=>{
    //     console.log("useEffect Mounted")
    // })  

    // useEffect(()=>{
    //     console.log("useEffect Mounted")
    // },[]) //with Empty dependency array


//with dependency array when u clicked on value button also it wont change the count
     useEffect(()=>{
        console.log("useEffect Mounted")
    },[count])

    const handleIncrement=()=>{
        setCount((count)=>count+1);
        setCount((count)=>count+1);
        setCount((count)=>count+1);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <h1>Value : {value}</h1>
        <button onClick={()=>setValue(value+1)}>+</button>
    </div>
  )
}

export default Effect