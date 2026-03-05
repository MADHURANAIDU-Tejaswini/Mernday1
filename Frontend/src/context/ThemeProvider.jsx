import React, { Children, useState } from 'react'
import ThemeContext from './ThemeContext'

const ThemeProvider = ({children}) => {
    const [theme,setTheme] = useState('dark');
    const changeTheme = (mode)=> {
        setTheme(mode);
    }
  return (

  <ThemeContext.Provider value={{theme,changeTheme}}>
    {children}

  </ThemeContext.Provider>
  )
}

export default ThemeProvider;