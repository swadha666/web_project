import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom' // This import should now work
import StoreContextProvider from './context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>

    <StoreContextProvider>
         <App />
    </StoreContextProvider>
       
    </BrowserRouter>
)