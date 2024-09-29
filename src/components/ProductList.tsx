import React, { useContext } from "react"
import { ProductListProps } from "../pages/Shop";
import { CartContext } from "../context/CartContext";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";


interface ProductProps {
    product: ProductListProps
}


const ProductList: React.FC<ProductProps> = ({ product }) => {

    const cart = useContext(CartContext)

    const productQuantity = cart.getProductQuantity(product.id)

    return (
        <div className="bg-slate-700 rounded-md p-4">
            <div>
                <img src={product.image} className="w-[250px] h-[200px]" />
            </div>
            <h3 className="text-white py-3">{product.title}</h3>
            <p className="text-white font-medium py-2" dir="ltr">{product.price} تومان</p>
            {productQuantity > 0 ? (
                <>
                    <div className="flex justify-between pt-2">
                        <p className="text-white text-xl">
                            تعداد : {productQuantity}
                        </p>
                        <div className="flex gap-2">
                            <button className="text-white border border-white rounded-md p-2" onClick={() => cart.addItemToCart(product.id)}><FaPlus /></button>
                            <button className="text-white border border-white rounded-md p-2" onClick={() => cart.removeItemFromCart(product.id)}><FaMinus /></button>
                        </div>
                    </div>
                    <div className="mt-2 text-center">
                        <button onClick={() => cart.deleteFromCart(product.id)} className="bg-white rounded-md font-bold px-2 py-1">
                            حذف از سبد خرید
                        </button>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <button onClick={() => cart.addItemToCart(product.id)} className="text-white border border-gray-200 rounded-md px-3 py-2">افزودن به سبد خرید</button>
                </div>
            )}
        </div >
    )
}

export default ProductList;