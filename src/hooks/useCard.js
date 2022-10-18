import { useState,useEffect } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCard = (products)=>{
    const [cart, setCart] =useState([]);
    useEffect(() => {
        const storedCart = getStoredCart()
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart)
    }, [products])
    return [cart, setCart]
}
export default useCard;