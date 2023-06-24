import React from 'react'
import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

import logo from '/assets/shared/desktop/logo.svg'
import fbIcon from '/assets/shared/desktop/icon-facebook.svg'
import twitterIcon from '/assets/shared/desktop/icon-twitter.svg'
import instaIcon from '/assets/shared/desktop/icon-instagram.svg'

export default function Footer() {
    const { Footer, Footer_nav, Footer_text, Footer_social } = styles
    return (

        <div className={Footer}>

            <div>
                <img src={logo} alt="logo" />

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
                    <img src={fbIcon} alt="social icon" />
                    <img src={twitterIcon} alt="social icon" />
                    <img src={instaIcon} alt="social icon" />
                </div>
            </div>
        </div>
    )
}
