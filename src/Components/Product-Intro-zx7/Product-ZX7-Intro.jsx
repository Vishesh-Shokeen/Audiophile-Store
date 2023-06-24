import React from 'react'
import styles from './Product-ZX7.module.css'
import { Link } from 'react-router-dom'
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
                <source media="(max-width: 400px)" srcSet="assets\home\mobile\image-speaker-zx7.jpg" />

                <source media="(max-width: 800px)" srcSet="assets\home\tablet\image-speaker-zx7.jpg" />

                <img src="assets\home\desktop\image-speaker-zx7.jpg" alt="ZX7 Img" />
            </picture>

        </div>
    )
}
