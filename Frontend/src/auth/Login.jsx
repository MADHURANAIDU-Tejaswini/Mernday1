import React, { useState } from 'react'

const Login = () => {
    const[user,setUser]=useState({
        name:"",
        password:""

    })
    const handleLogin = (e)=>{
        e.preventDefault();
        console.log(user)
    }
    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <form onSubmit={handleLogin}>
            <label>username : </label>
            <input type="text"
            name="name"
            value={user.name}
            placeholder='Enter the name'
            onChange={handleChange} />
            <br /><br />
            <label>Password : </label>
            <input type="password"
            name="password"
            value={user.password}
            placeholder='Enter the password'
            onChange={handleChange} />
            <br /><br />
            <button type='submit'>Login</button>
 

        </form>
    </div>
  )
}

export default Login