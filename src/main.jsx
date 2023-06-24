import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { makeServer } from './Server.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartState from './Components/Context/CartState.jsx'



if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
} 

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.DEV ? '/' : '/Audiophile-Store/'}>
  <CartState>
    <App />
  </CartState>
  </BrowserRouter>
)
