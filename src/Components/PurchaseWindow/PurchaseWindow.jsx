import React, { useState } from 'react'
import styles from './PurchaseWindow.module.css'
import { useContext } from 'react'
import cartContext from '../Context/CartContext'


export default function PurchaseWindow(props) {

    const a = useContext(cartContext)

    const { productName, productDesc, productImg, price, productMobile,
        productTablet, productID } = props

    const { PurchaseWindow, PurchaseWindow_img, PurchaseWindow_textBox, productQuantity, purchase_wrap } = styles
    const [count, setCount] = useState(1)

    function dec() {

        if (count >= 2) {
            setCount(prev => prev - 1)
        }
        return

    }

    function inc() {
        setCount(prev => prev + 1)
    }



    function sendToCart() {
        a.updateCart(({ name: productName, price: price, quantity: count, img: `/assets/cart/${'image-' + productName.split(' ').join('-').toLowerCase()}.jpg`, id: productID }))
    }

    return (
        <div className={PurchaseWindow}>

            <picture className={PurchaseWindow_img}>
                <source media="(max-width: 400px)" srcSet={productMobile} />
                <source media="(max-width: 800px)" srcSet={productTablet} />
                <img src={productImg} alt="Product Image" />
            </picture>

            <div className={PurchaseWindow_textBox}>
                <span>NEW PRODUCT</span>
                <h1>{productName}</h1>
                <p>{productDesc}</p>
                <p>$ {price}</p>

                <div className={purchase_wrap}>
                    <div className={productQuantity}>
                        <p onClick={dec}>-</p>
                        <span>{count}</span>
                        <p onClick={inc}>+</p>
                    </div>

                    <button className="btn-1" onClick={sendToCart}>Add To Cart</button>

                </div>

            </div>

        </div>

    )
}
