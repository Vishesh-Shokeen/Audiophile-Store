import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    const { Footer, Footer_nav, Footer_text, Footer_social } = styles
    return (

        <div className={Footer}>

            <div>
                <img src="assets\shared\desktop\logo.svg" alt="logo" />

                <div className={Footer_nav}>
                    <ul>

                        <Link to='/headphones'>
                        HEADPHONES
                        </Link>

                        <Link to='/speakers'>
                        SPEAKERS
                        </Link>

                        <Link to='/earphones'>
                        EARPHONES
                        </Link>
                    </ul>
                </div>

            </div>

            <div>


                <div className={Footer_text}>
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.
                    </p>

                    <p>Copyright 2023. All Rights Reserved</p>
                </div>

                <div className={Footer_social}>
                    <img src="assets\shared\desktop\icon-facebook.svg" alt="social icon" />
                    <img src="assets\shared\desktop\icon-twitter.svg" alt="social icon" />
                    <img src="assets\shared\desktop\icon-instagram.svg" alt="social icon" />
                </div>


            </div>
        </div>
    )
}
