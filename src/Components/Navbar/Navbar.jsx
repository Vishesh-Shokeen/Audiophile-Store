

import React, { useContext, useState } from 'react'
import styles from './Navbar.module.css'
import Categories from '../Categories/Categories'
import Cart from '../Cart/Cart'
import { NavLink, Link } from 'react-router-dom'
import cartContext from '../Context/CartContext'
import Logo from '/assets/shared/desktop/logo.svg'
import Burger from '/assets/shared/tablet/icon-hamburger.svg'
import CartIcon from '/assets/shared/desktop/icon-cart.svg'


export default function Navbar() {

    const { header, nav, openMenu, openCart, cartDiv, productCount } = styles
    const [cartShow, setCartShow] = useState(false)
    const cartList = useContext(cartContext).cartContent


    function NavSlider() {
        const navBar = document.querySelector(`.${nav}`)
        navBar.classList.toggle('slide')
    }

    function closeNavBar() {
        const navBar = document.querySelector(`.${nav}`)
        navBar.classList.remove('slide')
    }


    function CartSlider() {
        setCartShow(prev => !prev)
    }



    return (
        <header className={header}>
            <div className={openMenu} onClick={NavSlider}>
                <img src={Burger} alt="hamburger" />
            </div>

            <Link to='/'>
                <img src={Logo} alt="logo" />
            </Link>

            <nav className={nav} onClick={closeNavBar}>

                <ul>
                    <NavLink to='/'

                        className={({ isActive }) => isActive ? 'active' : null}
                    >
                        HOME
                    </NavLink>

                    <NavLink to='/headphones'
                        className={({ isActive }) => isActive ? 'active' : null}
                    >
                        HEADPHONES
                    </NavLink>

                    <NavLink to='/speakers'
                        className={({ isActive }) => isActive ? 'active' : null}
                    >
                        SPEAKERS
                    </NavLink>

                    <NavLink to='/earphones'
                        className={({ isActive }) => isActive ? 'active' : null}
                    >
                        EARPHONES
                    </NavLink>
                </ul>

                <Categories />
            </nav>

            <div className={openCart} onClick={CartSlider}>
                <img src={CartIcon} alt="cartIcon" />

                {cartList.length >= 1 && <p className={productCount}>{cartList.length}</p>}
            </div>

            {cartShow ?

                <div className={cartDiv}>
                    <Cart />
                </div>

                : null}
        </header>

    )
}
