import React from "react"
import { ProductListProps } from "../pages/Shop";


interface ProductProps {
    product: ProductListProps
}


const ProductList: React.FC<ProductProps> = ({ product }) => {
    return (
        <div className="bg-slate-700 rounded-md p-4">
            <div>
                <img src={product.image} className="w-[250px] h-[200px]" />
            </div>
            <h3 className="text-white py-3">{product.title}</h3>
            <p className="text-white font-medium py-2">${product.price}</p>
            <div className="text-center">
                <button className="text-white border border-gray-200 rounded-md px-3 py-2">افزودن به سبد خرید</button>
            </div>
        </div>
    )
}

export default ProductList;