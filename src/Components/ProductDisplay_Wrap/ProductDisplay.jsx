import React, { useEffect } from 'react'
import styles from './ProductDisplay.module.css'
import { Link } from 'react-router-dom'

export default function ProductDisplay(props) {
  const { show, ProductDisplay, ProductDisplay_Img, ProductDisplay_TextBox } = styles


  useEffect(() => {


    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains(`${show}`)) {
          entry.target.classList.add(`${show}`)
        }
      })
    })

    const elem = document.querySelectorAll(`.${ProductDisplay}`)

    elem.forEach(x => io.observe(x))


  }, [])

  return (


    <div className={ProductDisplay}>
      <picture className={ProductDisplay_Img}>
        <source media="(max-width: 400px)" srcSet={props.mobileImg} />
        <source media="(max-width: 700px)" srcSet={props.tabletImg} />

        <img src={props.image} alt="Productimage" />
      </picture>

      <div style={props.textOrder ? { order: props.textOrder } : null} className={ProductDisplay_TextBox} id='ProductDisplay_TextBox'>
        <span>NEW PRODUCT</span>
        <h2>{props.productName}</h2>
        <p>{props.desc}</p>
        <Link to={`/products/${props.serverID}`}>
          <button className="btn-1">SEE PRODUCT</button>
        </Link>
      </div>

    </div>

  )
}
