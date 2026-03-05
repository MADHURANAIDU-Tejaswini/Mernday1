import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/about");

  }
  return (
    <div>
      <button onClick={handleClick}>About</button>
    </div>
  )
}

export default Home