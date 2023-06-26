import React from 'react'
import styles from './Cart.module.css'
import { useContext } from 'react'
import cartContext from '../Context/CartContext'
import { Link } from 'react-router-dom'

export default function Cart(props) {

  const { quantityCounter,xxcv, cart, cartTotal_div, cartProducts_div, cartQuantity_div } = styles

  const xx = useContext(cartContext)
  const CartList = xx.cartContent






  function deleteCart() {
    xx.deleteCart()
  }



  function removeProduct(e) {
    const productID = Number(e.target.parentElement.id)
    xx.removeProduct(productID)
  }



  function incrementQuantity(e) {
    const productId = e.target.parentElement.parentElement.id
    let productQuantity = Number(e.target.parentElement.parentElement.getAttribute('quantity'))

    function increment() {
      let num = productQuantity + 1
      xx.updateQuantity(productId, num)
    }
    increment()
  }



  function decrementQuantity(e) {
    const productId = e.target.parentElement.parentElement.id
    let productQuantity = Number(e.target.parentElement.parentElement.getAttribute('quantity'))

    function decrement() {
      let num = productQuantity - 1
      if (num > 0) {
        xx.updateQuantity(productId, num)
      }
    }
    decrement()
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
                quantity={x.quantity}
              >
                <img src={x.img} alt="img" />
                <p>{x.name}</p>
                <div className={quantityCounter}>
                  <span onClick={decrementQuantity}>-</span>
                  <span>{x.quantity}</span>
                  <span onClick={incrementQuantity}>+</span>
                </div>
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
