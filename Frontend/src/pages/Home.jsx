import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ThemeContext from '../context/ThemeContext';
import AuthContext from '../context/AuthContext';
import LanguageContext from '../context/LanguageContext';

const Home = () => {
  const navigate=useNavigate();
  const{theme,changeTheme} = useContext(ThemeContext);
  const user = useContext(AuthContext);
  const {language,changeLanguage}= useContext(LanguageContext)
  const handleClick=()=>{
    navigate("/about");

  }
  const message={
    en:{
      greeting:"hello!"
    },
    te:{
      greeting:"నమస్కారము 🙏"
    }
  }
  const text=message[language];
  return (
    <div>
      <button onClick={handleClick}>About</button>
      <h1>{theme}</h1>
      <button onClick={()=> changeTheme('dark')}>Dark</button>
      <button onClick={()=> changeTheme('light')}>Light</button>
      <h2>User details</h2>
      <p>ID :{user.id}</p>
      <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      <p>Language : {language}</p>
      <p>Greeting : {text.greeting}</p>
      <button onClick={()=>changeLanguage('en')}>English</button>
      <button onClick={()=>changeLanguage('te')}>Telugu</button>
      
     
    </div>
  )
}

export default Home