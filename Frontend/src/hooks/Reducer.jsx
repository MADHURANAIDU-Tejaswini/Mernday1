import React, { useReducer, useState } from 'react'
const initialValue ={count:0};
const reducer = (state,action)=>{
    switch(action.type){
        case "Increment":{
            return {count:state.count+1};
        }
        case "Decrement":{
            return {count:state.count-1};
        }
        case "Reset":{
            return initialValue;
        }
        default:{
            return state;
        }
    }

}
const Reducer = () => {
    const[state,dispatch]=useReducer(reducer,initialValue);
  return (
    <div>
        <h1>Count : {state.count}</h1>
        <button onClick={()=>dispatch({type:"Decrement"})}>-</button>
        <button onClick={()=>dispatch({type:"Reset"})}>🔘</button>
        <button onClick={()=>dispatch({type:"Increment"})}>+</button>
    </div>
    
  )
}

export default Reducer