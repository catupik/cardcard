import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalStyle} from "./styles/GlobalStyles.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
      <GlobalStyle/>
  </StrictMode>,
)