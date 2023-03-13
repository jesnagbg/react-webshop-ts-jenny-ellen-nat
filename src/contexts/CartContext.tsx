import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem, products } from "../data";

interface ContextValue {
  cartItems: CartItem[];
}

export const CartContext = createContext<ContextValue>(null as any);
export const useCart = () => useContext(CartContext);

interface Props {
  children: ReactNode;
}

export default function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (id: string, quantity: number) => {
    const newItem = products.find((product) => product.id === id);
    if (newItem) {
      const newCartItem = { ...newItem, quantity: quantity };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const removeFromCart = () => {};

  const changeQuantity = () => {};

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
