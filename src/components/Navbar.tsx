import { useContext, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartProduct from "./CartProduct";

const Navbar = () => {

    const [showModal, setShowModal] = useState<boolean>(false)

    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    const cart = useContext(CartContext)

    const productCount = cart.items.reduce((sub , product)=> sub + product.quantity , 0)

    return (
        <>
            <div className="flex items-center cursor-pointer justify-end border-b border-gray-300 py-5 ">
                <div className="flex items-center gap-2 border border-white px-3 py-2 rounded-lg" onClick={openModal}>
                    <FaCartShopping className="text-green-500 text-xl" />
                    <p className="font-bold text-xl text-white"> ({productCount}) سبد خرید </p>
                </div>
            </div>
            {showModal && (
                <>
                    <div className="fixed top-0 left-0 w-full h-screen bg-custom" />
                    <dialog className='top-28 rounded-md border-none w-[30%] text-white bg-slate-800 animation-modal bg-modal p-3' open>
                        <div className="flex justify-between items-center p-3">
                            <IoCloseSharp size={25} className="cursor-pointer" onClick={closeModal} />
                            <p className="font-medium text-xl">سبد خرید</p>
                        </div>
                        {productCount > 0 ? (
                                <>
                                {cart.items.map(item=>(
                                    <CartProduct key={item.id} id={item.id} quantity={item.quantity}></CartProduct>
                                ))}
                                <h3 className="text-center pt-8">مجموع قیمت: <span className="text-green-600">{cart.getTotalAmount()} تومان</span></h3>
                                </>
                            ) : (
                                <h3 className="text-center text-red-600">سبد خرید خالی است...!</h3>
                            )}
                    </dialog>
                </>
            )}
        </>

    )
}

export default Navbar;