import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import CartState from './Components/Context/CartState.jsx'

import { makeServer } from "./Server.jsx"

makeServer({ environment: "production" })


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartState>
      <App />
    </CartState>
  </BrowserRouter>
)
