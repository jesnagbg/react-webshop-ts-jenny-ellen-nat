import {createContext, ReactNode, useContext} from "react";
import {CartItem, Product} from "../data";
import {useLocalCart} from "../hooks/useLocalCart";

interface ContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (id: string) => void;
  changeQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<ContextValue>(null as any);
export const useCart = () => useContext(CartContext);

interface Props {
  children: ReactNode;
}

export default function CartProvider({children}: Props) {
  const [cartItems, setCartItems] = useLocalCart();

  const addToCart = (product: Product, quantity: number) => {
    const newCartItem: CartItem = {...product, quantity: quantity};
    const updatedCartItems = [...cartItems, newCartItem];
    setCartItems(updatedCartItems);
    console.log(updatedCartItems);
    // Toast
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
    // Toast
  };

  const changeQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id !== id) return item;
        return {...item, quantity: quantity};
      })
    );
  };

  return (
    <CartContext.Provider
      value={{cartItems, addToCart, removeFromCart, changeQuantity}}
    >
      {children}
    </CartContext.Provider>
  );
}
