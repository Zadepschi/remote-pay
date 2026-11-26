import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app/styles/index.scss';
import App from './App.tsx'
import '@fontsource-variable/inter';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
