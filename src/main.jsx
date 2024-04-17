import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { DataContextProvider } from './context/DataContextProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataContextProvider>
      {/* 
          uses the data context to send info between our components, can be set to 'affect' just the data component, but is not necessary just now
      */}
      <App />
    </DataContextProvider>
  </React.StrictMode>,
)
