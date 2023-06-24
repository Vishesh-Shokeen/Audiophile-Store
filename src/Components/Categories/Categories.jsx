import React from 'react'
import styles from './Categories.module.css'
import { Link } from 'react-router-dom'
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
                        <img src="assets/shared/desktop/icon-arrow-right.svg" alt="513" />
                    </button>

                    <img className={category_img} src="assets/shared/desktop/image-category-thumbnail-headphones.png" alt="categoryImg" />
                </div>
                        </Link>
            </div>


            <div className={category}>
                    <Link to='/speakers'>
                <div className={category_text}>
                    <h2>SPEAKERS</h2>
                    <button className='btn-3'>
                        <p>Shop</p>
                        <img src="assets/shared/desktop/icon-arrow-right.svg" alt="616" />
                    </button>
                    <img className={category_img} src="assets/shared/desktop/image-category-thumbnail-speakers.png" alt="categoryImg" />
                </div>
                    </Link>
            </div>

            <div className={category}>
                    <Link to='/earphones'>
                <div className={category_text}>
                    <h2>EARPHONES</h2>
                    <button className='btn-3'>
                        <p>Shop</p>
                        <img src="assets/shared/desktop/icon-arrow-right.svg" alt="666" />
                    </button>
                    <img className={category_img} src="assets/shared/desktop/image-category-thumbnail-earphones.png" alt="categoryImg" />
                </div>
                    </Link>
            </div>




        </div>
    )
}
