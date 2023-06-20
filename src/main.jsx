import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeProvider from './context/ThemeContext'
import { GithubContextProvider } from './context/apicontext/GithubContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <GithubContextProvider>
        <App />
      </GithubContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
