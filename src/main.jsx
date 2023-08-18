import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import CartState from './Components/Context/CartState.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={import.meta.env.DEV ? '/' : '/KanBan-App/'}>
    <CartState>
      <App />
    </CartState>
  </BrowserRouter>
)
