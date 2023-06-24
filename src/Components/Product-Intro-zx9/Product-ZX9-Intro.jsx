import React from 'react'
import styles from './Product-ZX9-Intro.module.css'
import { Link } from 'react-router-dom'

export default function () {


  const { zx9Intro, zx9Intro_img, zx9Intro_text } = styles


  return (


    <div className={zx9Intro}>


      <picture className={zx9Intro_img}>
        <source media="(max-width: 400px)" srcSet="assets\home\mobile\image-speaker-zx9.png" />

        <source media="(max-width: 800px)" srcSet="assets\home\tablet\image-speaker-zx9.png" />

        <img src="assets\home\desktop\image-speaker-zx9.png" alt="zx9" />
      </picture>

      <div className={zx9Intro_text}>

        <h2>ZX9 <br /> SPEAKER</h2>

        <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
        <Link to='/products/4'>
        <button className="btn-2">SEE PRODUCT</button>
        </Link>

      </div>

    </div>
  )
}
