"use client";
import { useSelector } from "react-redux";
const Basket = () => {
    const basket =useSelector(state => state.basket.basket);
    
    const totalAmount = basket.reduce((acc,product) => {
        return acc + product.price
    },0);
    return (<>
    <h3>Basket: {totalAmount.toFixed(2)} </h3>
    </>)
}
export default Basket;