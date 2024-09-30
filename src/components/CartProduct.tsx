import { useContext } from "react";
import { getProductData } from "../data/productItems";
import { CartContext } from "../context/CartContext";

const CartProduct = ({ id, quantity }) => {

    const cart = useContext(CartContext)

    const productData = getProductData(id)

    return (
        <div className="mt-5 flex flex-col gap-5">
            <div className="flex items-center gap-5 justify-center">
                <p>{productData?.title}</p>
                <p>تعداد: {quantity}</p>
                <p>قیمت: {quantity * productData?.price}</p>
            </div>
            <div className="flex justify-center">
                <button onClick={() => cart.deleteFromCart(id)} className="border border-white rounded-md px-2 py-1 bg-white text-black w-20 font-bold">حذف</button>
            </div>
        </div>
    )
}

export default CartProduct;