import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { SkuseDocumentation } from "./SkuseDocumentation";

createRoot(document.getElementById('skuse-root')!).render(
  <StrictMode>
      <SkuseDocumentation />
  </StrictMode>,
)
