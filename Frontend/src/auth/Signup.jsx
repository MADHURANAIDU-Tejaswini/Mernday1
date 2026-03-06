import React, { useState } from 'react'

const Signup = () => {
  const [user,setUser]=useState({
    name:'',
    email:'',
    password:''
  })
  const handleChange =(e) =>{
    setUser({...user,[e.target.name]:e.target.value})
  }
  const handleSubmit =(e) =>{
    e.preventDefault();
    console.log(user);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Name:</label>
        <input type="text"
        placeholder='Enter the name'
        name="name"
        onChange={handleChange}/>
        <br /><br />
        <label>Email:</label>
        <input type="email" 
        placeholder='Enter the Email'
        name="email"
        onChange={handleChange}/>
        <br /><br />
        <label>Password:</label>
        <input type="password" 
        placeholder='Enter the Password'
        name="password"
        onChange={handleChange}/>
        <br /><br />
        <button type="submit">Submit</button>

      </form>
    </div>
  )
}

export default Signup