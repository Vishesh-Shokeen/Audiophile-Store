
import React, { useEffect } from 'react'
import Home from './Home'
import { Route, Routes, useLocation } from 'react-router-dom'
import HeadPhonesPage from './Components/HeadPhonesPage/HeadPhonesPage'
import EarphonesPage from './Components/EarphonesPage/EarphonesPage'
import SpeakerPage from './Components/SpeakersPage/SpeakerPage'
import ProductDetailsPage from './Components/ProductDetailsPage/ProductDetailsPage'
import Layout from './Layout'
import CheckOutPage from './Components/CheckOutPage/CheckOutPage'

export default function App() {

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <Routes>

      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />

        <Route path='headphones' element={<HeadPhonesPage />} />
        <Route path='earphones' element={<EarphonesPage />} />
        <Route path='speakers' element={<SpeakerPage />} />

        <Route path='products/:id' element={<ProductDetailsPage />} />
      </Route>

      <Route path='/checkoutpage' element={<CheckOutPage />} />
    </Routes>
  )
}
