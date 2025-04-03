import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

{/* STYLESHEETS */}
import './index.css'

{/* COMPONENTS */}
import LandingPage from './LandingPage.tsx'
import Sidebar from './Sidebar.tsx'
import RenderCanvas from './canvas-components/RenderCanvas.tsx'

createRoot(document.getElementById('root')!).render(
  <>
  <StrictMode>
    <RenderCanvas/>
  </StrictMode>
  </>
)
