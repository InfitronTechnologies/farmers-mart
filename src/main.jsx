import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProfileProvider } from './components/ProfileContext/ProfileContext.jsx'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <ProfileProvider>
        <App />
      </ProfileProvider>
    </StrictMode>
  </BrowserRouter>,  
)
