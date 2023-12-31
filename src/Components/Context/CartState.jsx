import { useState } from "react";
import cartContext from "./CartContext";

const CartState = (props) => {
    const [cartContent, setCartContent] = useState([])

    function updateCart(data) {
        const newList = cartContent
        if (!cartContent.find(x => x.id === data.id)) {
            newList.push(data)
            setCartContent([...newList])
        }
    }

    function removeProduct(id) {
        setCartContent(prev => prev.filter(x => Number(x.id) !== id))
    }

    function deleteCart() {
        setCartContent([])
    }

    function updateQuantity(id, num) {
        setCartContent(prev => {
            const newArray = prev.map(x => {
                if (x.id == id) {
                    x.quantity = num
                }
                return x
            })
            return newArray
        })

    }


    return (
        <cartContext.Provider value={{ cartContent, updateCart, deleteCart, removeProduct, updateQuantity }}>
            {props.children}
        </cartContext.Provider>
    )
}


export default CartState
