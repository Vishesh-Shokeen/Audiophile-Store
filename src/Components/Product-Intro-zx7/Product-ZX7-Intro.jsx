import React from 'react'
import styles from './Product-ZX7.module.css'
import { Link } from 'react-router-dom'

import zx7Img    from '/assets/home/desktop/image-speaker-zx7.jpg'
import zx7Mobile from '/assets/home/mobile/image-speaker-zx7.jpg'
import zx7Tablet from '/assets/home/tablet/image-speaker-zx7.jpg'


export default function () {
    const { zx7_Intro, zx7_Img, zx7_TextBox } = styles
    return (
        <div className={zx7_Intro}>

            <div className={zx7_TextBox}>
                <h2>ZX7 SPEAKERS</h2>
                <Link to='/products/3'>
                <button className="btn-2">SEE PRODUCT</button>
                </Link>
            </div>

            <picture className={zx7_Img}>
                <source media="(max-width: 400px)" srcSet={zx7Mobile} />

                <source media="(max-width: 800px)" srcSet={zx7Tablet} />

                <img src={zx7Img} alt="ZX7 Img" />
            </picture>

        </div>
    )
}
