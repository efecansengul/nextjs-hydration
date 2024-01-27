"use client";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/app/store/basket-store";
const AddBasketButton = ({product}) => {
    const dispatch = useDispatch();

    function addBasket() {
        dispatch(addToBasket(product));
    }

    return <button onClick={addBasket}>Add Basket</button>
}
export default AddBasketButton;