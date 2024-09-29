import { createContext, ReactNode, useState } from "react";
import { getProductData } from "../data/productItems";



interface CartItem {
  id: string;
  quantity: number;
}


interface CartContextProps {
  items: CartItem[];
  getProductQuantity: (id: string) => number;
  addItemToCart: (id: string) => void;
  removeItemFromCart: (id: string) => void;
  deleteFromCart: (id: string) => void;
  getTotalAmount: () => number;
}

export const CartContext = createContext<CartContextProps>({
  items: [],
  getProductQuantity: () => 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => 0,
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartProducts, setCartProducts] = useState<CartItem[]>([]);

  function getProductQuantity(id: string): number {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addItemToCart(id: string): void {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function removeItemFromCart(id: string): void {
     const quantity = getProductQuantity(id)
     if(quantity === 1){
        deleteFromCart(id)
     }else{
        setCartProducts(cartProducts.map((item)=> item.id === id ? {...item , quantity: item.quantity - 1} : item))
     }
  }

  function deleteFromCart(id: string): void {
     setCartProducts(cartProducts => cartProducts.filter((item)=>{
        return item.id != id
     }))
  }

  function getTotalAmount(): number {
      
    let totalAmount = 0

    cartProducts.map((item)=>{
        const productData = getProductData(item.id)
        if (productData) {
          totalAmount += productData.price * item.quantity;
        }
    })

    return totalAmount;
    
  }

  const ContextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount,
  };

  return (
    <CartContext.Provider value={ContextValue}>
      {children}
    </CartContext.Provider>
  );
};
