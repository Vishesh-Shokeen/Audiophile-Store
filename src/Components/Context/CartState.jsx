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


    return (
        <cartContext.Provider value={{ cartContent, updateCart, deleteCart, removeProduct }}>
            {props.children}
        </cartContext.Provider>
    )
}


export default CartState
