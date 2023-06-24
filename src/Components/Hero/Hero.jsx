import React, { useEffect } from 'react'
import styles from './Hero.module.css'
import { Link } from 'react-router-dom'
import heroImg from '/assets/home/desktop/image-hero.jpg'
import mobileImg from '/assets/home/mobile/image-header.jpg'
import tabletImg from '/assets/home/tablet/image-header.jpg'
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
                    <source media="(max-width:500px )" srcSet={mobileImg} />
                    <source media="(max-width:800px )" srcSet={tabletImg} />
                    <img src={heroImg} alt="hero__img" />
                </picture>

            </div> 
    )
}
