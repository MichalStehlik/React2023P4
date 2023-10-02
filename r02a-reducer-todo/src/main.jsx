import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApplicationProvider } from './providers/ApplicationProvider.jsx'
import { DataProvider } from './providers/DataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApplicationProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </ApplicationProvider>
  </React.StrictMode>,
)
