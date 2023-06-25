import React, { useState } from 'react'
import styles from './Cart.module.css'
import { useContext } from 'react'
import cartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart(props) {

  const { xxcv, cart, cartTotal_div, cartProducts_div, cartQuantity_div } = styles

  const xx = useContext(cartContext)
  const CartList = xx.cartContent

  function deleteCart() {
    xx.deleteCart()
  }

  function removeProduct(e) {
    const productID = Number(e.target.parentElement.id)
    xx.removeProduct(productID)
  }


  return (
    <div className={cart}>
      <div className={cartQuantity_div}>
        <h2>Cart ({CartList.length})</h2>
        <button className="btn-3" onClick={deleteCart}>Remove all</button>
      </div>

      {
        CartList ?
          <div className={cartProducts_div}>

            {CartList.map((x, k) =>

              <div className={xxcv}
                key={k}
                id={x.id}
              >
                <img src={x.img} alt="img" />
                <p>{x.name}</p>
                <p onClick={removeProduct}>❌</p>
              </div>)}

          </div>
          : null
      }









      <div className={cartTotal_div}>
        <p>Total</p>
        <p>$
          {CartList ?
            CartList.reduce((acc, c) => acc + c.price * c.quantity, 0)
            : null}
        </p>
      </div>







      <Link to='/checkoutpage'>
        {CartList.length >= 1 ? <button className="btn-1">CHECKOUT</button> : null}
      </Link>
    </div>
  )
}
