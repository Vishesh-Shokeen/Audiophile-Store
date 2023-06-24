import React from 'react'
import styles from './Product-Intro-YX1.module.css'
import { Link } from 'react-router-dom'

import yx1Img    from '/assets/home/desktop/image-earphones-yx1.jpg'
import yx1Mobile from '/assets/home/mobile/image-earphones-yx1.jpg'
import yx1Tablet from '/assets/home/tablet/image-earphones-yx1.jpg'

export default function () {
    const {yx1_Intro ,yx1_TextBox ,yx1_Img } = styles
    return (
        <div className={yx1_Intro}>
            <picture className={yx1_Img}>
                <source media="(max-width: 400px)" srcSet={yx1Mobile} />

                <source media="(max-width: 800px)" srcSet={yx1Tablet} />

                <img src={yx1Img} alt="yx1 img" />
            </picture>

            <div className={yx1_TextBox}>
                <h2>YX1 EARPHONES</h2>
                <Link to='/products/2'>
                <button className="btn-2">SEE PRODUCT</button>
                </Link>
            </div>

        </div>
    )
}
