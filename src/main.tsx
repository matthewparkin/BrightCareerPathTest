import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // Using strict mode (only runs on development but will bubble console logs twice) 
  // <StrictMode>
    <App />
  // </StrictMode>,
)
