import React,{useState} from 'react'
import LanguageContext from './LanguageContext'


const LanguageProvider = ({children}) => {
    const [language,setLanguage] = useState('en');
    const changeLanguage=(lang) => {
        setLanguage(lang);
    }
  return (
    <LanguageContext.Provider value={{language,changeLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider