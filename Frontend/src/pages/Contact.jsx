import React from 'react'
import Parent from '../components/Parent'

const Contact = () => {
  const getMessage = (msg) =>{
    console.log(msg)
  }
  return (
    <div>
      <Parent message = {getMessage}/>
      </div>
  )
}

export default Contact