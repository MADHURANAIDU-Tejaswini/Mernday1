import React, { useCallback, useState } from 'react'
import Header from '../components/Header';

const Callback = () => {
    const [count,setCount] = useState(0);
    const demofn = useCallback(()=>{},[]);

  return (
    <div>
        <Header demofn = {demofn}/>
        <h1>count : {count}</h1>
        <button onClick={()=>setCount(count+1)}>count++</button>
    </div>
  )
}

export default Callback