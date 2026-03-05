import React from 'react'
import Child from './Child'

const Parent = ({message}) => {
  return (
    <div>
        <button onClick ={()=>message("Message from parent")}>send message</button>
        <Child name="Tejaswini" age={20} isActive={true} food={["Biriyani","Curd","Lemon"]}
        contact={{
          mobile:1234567890,
          email:"tejaswini@gmail.com"

        }}
        sendMessage = {message}/>
        <Child name="varshini" age={23} isActive={true} food={["Biriyani","Curd","Lemon"]}
        contact={{
          mobile:1234567890,
          email:"varshini@gmail.com"

        }}
        sendMessage={message}/>


    </div>
  )
}

export default Parent