import React from 'react'

const Child = ({name,age,isActive,food,contact,sendMessage})=> {
  return (
    <div>
        <h1>Name : {name}</h1>
        <h1>Age: {age}</h1>
        <h1>Active Status: {isActive ? "Active" : "Not Active"}</h1>
        <br />
        <hr />
        <h1>Fav Food</h1>
        <ul>
          {food.map((value,index)=>(
            <li key={index}>{value}</li>
          ))}
        <br />
        <hr />
        </ul>
        <h1>Contact Details</h1>
        <p>Mobile No:{contact.mobile}</p>
        <p>Email:{contact.email}</p>
        <button onClick={()=>{sendMessage("Message from child")}}>send message</button>
        <br />
        <hr />
    </div>
  )
}

export default Child