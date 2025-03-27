import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './LandingPage.tsx'
import Sidebar from './Sidebar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Sidebar />
    <LandingPage />
  </StrictMode>
)
