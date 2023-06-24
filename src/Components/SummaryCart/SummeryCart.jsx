import React from 'react'
import styles from './SummeryCart.module.css'
import { useContext } from 'react'
import cartContext from '../Context/CartContext'
export default function SummeryCart() {
    const { cart, cartcontent, total, xxcv, purchasedProduct } = styles

    const xx = useContext(cartContext)
    const CartList = xx.cartContent
    const vat = 1079
    const shipping = 50
    const totalPrice = CartList.reduce((acc, c) => acc + c.price * c.quantity, 0)
    const grandTotal = vat + shipping + totalPrice


    function removeProduct(e){
        const productID = Number(e.target.parentElement.id)
      xx.removeProduct(productID)
      }

    return (
        <>
        

               <div className={cart}>
                    <p>
                        SUMMARY
                    </p>

                    <div className={cartcontent}>

                        {CartList.map((x, k) =>
                            <div className={xxcv}
                                key={k}
                                id = {x.id}
                            >
                                <img src={x.img} alt="img" />
                                <p>{x.name}</p>
                                <p>{x.price}</p>
                                <p>x</p>
                                <p>{x.quantity}</p>
                                <p onClick={removeProduct}>❌</p>
                            </div>)
                        }

                    </div>

                    <div className={total}>
                        <div>
                            <p>Total</p>
                            <p>{totalPrice}</p>

                        </div>
                        <div>
                            <p>Shipping</p>
                            <p>$ {shipping}</p>

                        </div>
                        <div>
                            <p>VAT(INCLUDED)</p>
                            <p>$ {vat}</p>
                        </div>
                        <div>
                            <p>GRAND TOTAL</p>
                            <p>$ {grandTotal}</p>
                        </div>
                    </div>
                </div>


        </>
    )
}
