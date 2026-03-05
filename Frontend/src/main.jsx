import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import ThemeProvider from './context/ThemeProvider.jsx'
import AuthProvider from './context/AuthProvider.jsx'
import LanguageProvider from './context/LanguageProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <App />

        </LanguageProvider>
    </AuthProvider>
    </ThemeProvider>
    
    </BrowserRouter>
  </StrictMode>,
)