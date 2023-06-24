import React, { useEffect } from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'

export default function Hero() {

    const {hero__container, onloadOpacity,hero__textBox, hero__img } = styles



    function opacityChange(){
        const bgImg = document.querySelector(`.${hero__img}`)
        bgImg.classList.add(`${onloadOpacity}`)
    }

    return (
               <div className={hero__container} >

                <div className={hero__textBox}>
                    <span>NEW PRODUCT</span>
                    <h1>
                        XX99 MARK || <br />
                        HEADPHONES
                    </h1>
                    <p>
                        Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
                    </p>
                    <Link to='/products/6'>
                    <button className="btn-1">See Product</button>
                    </Link>
                </div>

                <picture onLoad={opacityChange} className={hero__img}>
                    <source media="(max-width:500px )" srcSet="/assets/home/mobile/image-header.jpg" />

                    <source media="(max-width:800px )" srcSet="/assets/home/tablet/image-header.jpg" />

                    <img src="/assets/home/desktop/image-hero.jpg" alt="hero__img" />
                </picture>

            </div> 
    )
}
