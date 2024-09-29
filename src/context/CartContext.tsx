import { createContext, ReactNode } from "react";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteFromCart: () => { },
    getTotalAmount: () => { }
})

interface CartProviderProps{
    children: ReactNode
}

export const CartProvider = ({children}:CartProviderProps)=>{
    const ContextValue = {
       items:[],
       getProductQuantity,
       addItemToCart,
       removeItemFromCart,
       deleteFromCart,
       getTotalAmount
    }
    return (
        <CartContext.Provider value={ContextValue}>
             {children}
        </CartContext.Provider>
    )
}