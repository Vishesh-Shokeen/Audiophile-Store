import React from 'react'
import styles from './BestAudioGear.module.css'

export default function BestAudioGear() {
    const { bestAudioGear, bestAudioGear_TextBox, bestAudioGear_img } = styles
    return (
        <div className={bestAudioGear}>

            <div className={bestAudioGear_TextBox}>

                <h2>BRINGING YOU THE <br /> <span>BEST</span> AUDIO GEAR</h2>
                <p>
                    Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </p>

            </div>

            <picture className={bestAudioGear_img}>
                <source media="(max-width: 400px)" srcSet="assets\shared\mobile\image-best-gear.jpg" />
                
                <source media="(max-width: 800px)" srcSet="assets\shared\tablet\image-best-gear.jpg" />

                <img src="assets\shared\desktop\image-best-gear.jpg" alt="best gear" />
            </picture>

        </div>
    )
}

