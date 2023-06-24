import React from 'react'
import styles from './Categories.module.css'
import { Link } from 'react-router-dom'

 import headphoneCatImg from "/assets/shared/desktop/image-category-thumbnail-headphones.png"
 import speakerCatImg from "/assets/shared/desktop/image-category-thumbnail-speakers.png"
 import earphoneCatImg from "/assets/shared/desktop/image-category-thumbnail-earphones.png"
 import arrowImg from "/assets/shared/desktop/icon-arrow-right.svg"


export default function Categories() {
    const { categories, category, category_img, category_text } = styles
    return (
        <div className={categories}>

            <div className={category}>
                        <Link to = '/headphones'>
                <div className={category_text}>
                    <h2>HEADPHONES</h2>
                    <button className='btn-3'>
                        <p>Shop</p>
                        <img src={arrowImg} alt="arrowImg" />
                    </button>

                    <img className={category_img} src={headphoneCatImg} alt="categoryImg" />
                </div>
                        </Link>
            </div>


            <div className={category}>
                    <Link to='/speakers'>
                <div className={category_text}>
                    <h2>SPEAKERS</h2>
                    <button className='btn-3'>
                        <p>Shop</p>
                        <img src={arrowImg} alt="arrowImg" />
                    </button>
                    <img className={category_img} src={speakerCatImg} alt="categoryImg" />
                </div>
                    </Link>
            </div>

            <div className={category}>
                    <Link to='/earphones'>
                <div className={category_text}>
                    <h2>EARPHONES</h2>
                    <button className='btn-3'>
                        <p>Shop</p>
                        <img src={arrowImg} alt="arrowImg" />
                    </button>
                    <img className={category_img} src={earphoneCatImg} alt="categoryImg" />
                </div>
                    </Link>
            </div>




        </div>
    )
}
