import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApplicationProvider } from './providers/ApplicationProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApplicationProvider>
      <App />
    </ApplicationProvider>
  </React.StrictMode>,
)
