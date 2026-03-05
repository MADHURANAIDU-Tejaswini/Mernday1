import React from 'react'
import AuthContext from './AuthContext';

const AuthProvider = ({children}) => {
    const user = {
        id:1,
        name:"tejaswini",
        email:"teju@gmail.com"
    }
  return (
    <AuthContext value={user}>
        {children}
    </AuthContext>
  )
}

export default AuthProvider;