import React, { useContext } from "react";
import { getProductData } from "../data/productItems";
import { CartContext } from "../context/CartContext";


type CartProductProps = {
    id: string
    quantity: number
}

type ProductData = {
    title: string;
    price: number;
    image: string;
}

const CartProduct: React.FC<CartProductProps> = ({ id, quantity }) => {

    const cart = useContext(CartContext)

    const productData: ProductData | undefined = getProductData(id)

    return (
        <div className="mt-5 flex flex-col gap-5">
            <div className="flex flex-col md:flex-row items-center gap-5 justify-around">
                <div className="flex flex-col gap-2">
                    <p>{productData?.title}</p>
                    <p>تعداد: <span className="text-yellow-600">({quantity})</span></p>
                    <p>قیمت: <span className="text-green-600">{quantity * (productData?.price || 0)}</span></p>
                </div>
                <div>
                    {productData?.image && (
                        <img src={productData.image} width={100} height={100} />
                    )}
                </div>
            </div>
            <div className="flex justify-center">
                <button onClick={() => cart.deleteFromCart(id)} className="border border-white rounded-md px-2 py-1 bg-white text-black w-20 font-bold">حذف</button>
            </div>
        </div>
    )
}

export default CartProduct;