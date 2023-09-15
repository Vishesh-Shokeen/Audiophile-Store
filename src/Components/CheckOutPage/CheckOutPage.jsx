
import React, { useContext, useState } from 'react'
import styles from './CheckOutPage.module.css'
import SummeryCart from '../SummaryCart/SummeryCart'
import cartContext from '../Context/CartContext'
import Confetti from 'react-confetti'
import { Link } from 'react-router-dom'



export default function CheckOutPage() {

    /***** CSS  ******/
    const { goBackBtn, dropdownToggle, dropDown, grandTotal, bag, bag_product, purchasedProduct, payBtn, active, emoneyMethod, codMethod, cod, onlinePayment, summaryCart, CheckOut, CheckOut_Billing, CheckOut_Shipping, CheckOut_Payment, page, emptyBag } = styles
    /***************************/


    const CartState = useContext(cartContext)
    const CartList = CartState.cartContent



    const [state, setState] = useState({
        cod: false,
        emoney: false,
        expand: false
    })



    /***** Show Method *****/
    function showCod(e) {
        setState(prev => ({
            ...prev,
            cod: true,
            emoney:false
        }))
    }

    function showEmoney(e) {
        setState(prev => ({
            ...prev,
            emoney: true,
            cod:false
        }))
    }




    /***************************/


    /* Modal Func */
    function showModal() {
        const dialog = document.querySelector('dialog')
        dialog.showModal()
    }

    function closeModal() {
        const dialog = document.querySelector('dialog')
        dialog.close()
        CartState.deleteCart()
    }
    /*******************/

    /***** CheckOut Bag DropDown ****/
    function toggleBagSize() {
        setState(prev => ({
            ...prev,
            expand: !prev.expand
        }))

        document.querySelector(`.${bag}`).classList.toggle(`${dropDown}`)
    }
    /********************/





    /****Input Validator ******/

    function inputChecker() {
        const inputs = document.querySelectorAll(`input`)
        const allValid = [...inputs].every(x => x.checkValidity() && x.value.length > 1)
        if (allValid) {
            showModal()
        }
        else {
            [...inputs].map(x => {
                if (x.value.length < 1) {
                    x.required = true
                }
            })

        }
    }


    return (
        <>

            {CartList.length > 0

                ?
                <div className={page}>

                    <Link to='../'>
                        <button className={`${goBackBtn} btn-2`}> 👈 Go Back</button>
                    </Link>
                    <div className={CheckOut}>
                        <h1>CHECKOUT</h1>


                        <h2>BILLING DETAILS</h2>
                        <section className={CheckOut_Billing}>
                            <label>
                                Name
                                <input type="text" pattern='[a-zA-Z]+' placeholder='Alex Ward' />
                            </label>

                            <label>
                                Email
                                <input type="email" placeholder='Someone@something.com' />
                            </label>

                            <label>
                                Phone Number
                                <input type="number" placeholder='+123854796' />
                            </label>
                        </section>



                        <h2>PAYMENT INFO</h2>
                        <section className={CheckOut_Shipping}>
                            <label>
                                Your Address
                                <input type="text" placeholder='1137 Williams Avenue' />
                            </label>

                            <label>
                                Zip Code
                                <input type="number" placeholder='20001' />
                            </label>

                            <label>
                                City
                                <input type="text" pattern='[a-zA-Z]+' placeholder='New York' />
                            </label>
                            <label>
                                Country
                                <input type="text" pattern='[a-zA-Z]+' placeholder='United States' />
                            </label>
                        </section>



                        <h2>PAYMENT DETAILS</h2>
                        <section className={CheckOut_Payment}>
                            <h3>Payment Method</h3>

                            <div>
                                <button onClick={showEmoney} className={`${emoneyMethod} ${state.emoney ? active : null}`}>e-Money</button>
                                <button onClick={showCod} className={`${codMethod} ${state.cod ? active : null}`}>Cash on Delivery</button>
                            </div>



                            {state.emoney ? <div className={onlinePayment}>
                                <label>
                                    e-Money Number
                                    <input type="number" placeholder='256487358' />
                                </label>

                                <label>
                                    e-Money Pin
                                    <input type="number" placeholder='123' />
                                </label>
                            </div> : null}



                            {state.cod ? <div className={cod}>
                                <img src="assets\checkout\icon-cash-on-delivery.svg" alt="cod-image" />
                                <p>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                            </div> : null}

                        </section>

                    </div>

                    <div className={summaryCart}>
                        <SummeryCart />
                        <button onClick={inputChecker} id={payBtn} className='btn-1'>Pay</button>
                    </div>




                    <dialog>
                        <h1>THANK YOU <br /> FOR YOUR ORDER</h1>

                        <p>You will recieve an email conformation shortly</p>


                        <div className={purchasedProduct}>

                            <div className={bag}>
                                {
                                    CartList.map((product, key) => {
                                        return <div
                                            className={bag_product}
                                            key={key}
                                        >
                                            <img src={product.img} alt="img" />

                                            <div>
                                                <p>{product.name}</p>
                                                <p>${product.price}</p>
                                            </div>
                                            <span>x</span>
                                            <p>{product.quantity}</p>
                                        </div>
                                    })
                                }
                                {CartList.length > 1 ?

                                    <div className={dropdownToggle}>
                                        <hr />
                                        <p onClick={toggleBagSize}>{state.expand ? 'see less ' : `and ${CartList.length - 1} items(s)`}</p>
                                    </div>
                                    : null}
                            </div>



                            <div className={grandTotal}>
                                <p>GRAND TOTAL</p>
                                <p>$ 502</p>
                            </div>


                        </div>
                        <Link to='..'>
                            <button onClick={closeModal} className='btn-1'>BACK TO HOME</button>
                        </Link>
                        <Confetti
                            width={innerWidth}
                            height={innerHeight}
                        >
                        </Confetti>
                    </dialog>


                </div>

                :

                <div className={emptyBag}>
                    <Link to='..'>
                        <h1>Back To Home</h1>
                    </Link>
                </div>
            }
        </>
    )
}




