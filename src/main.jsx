import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)

//this is the main entry point of the frontend app. Since, this is the SPA this page will be the entry point from where other js will load