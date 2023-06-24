import React from 'react'
import ProductZX7Intro from '../Product-Intro-zx7/Product-ZX7-Intro'
import ProductZX9Intro from '../Product-Intro-zx9/Product-ZX9-Intro'
import styles from './Product-Intro-Section.module.css'
import ProductIntroYX1 from '../Product-Intro-yx1/Product-Intro-YX1'
export default function () {
    const {productIntroSection} =styles
  return (
    <div className={productIntroSection}>

        <ProductZX9Intro/>
        <ProductZX7Intro/>
        <ProductIntroYX1/>
      
    </div>
  )
}
