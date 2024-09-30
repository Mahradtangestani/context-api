import ProductList from "../components/ProductList";
import productItems from "../data/productItems";

export interface ProductListProps {
    id: string
    title: string
    price: number
    image: string
}

const Shop = () => {
    return (
        <div className="flex justify-center mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 mb-10">
                {productItems.map(item => (
                    <div key={item.id}>
                        <ProductList product={item}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop;