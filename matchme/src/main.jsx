import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ToggleContextProvider } from './context/Toggle.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  <ToggleContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ToggleContextProvider>
</StrictMode>
  
 
  ,
)
