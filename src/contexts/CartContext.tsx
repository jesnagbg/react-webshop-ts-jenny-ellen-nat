import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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

  useEffect(() => {
    const localCartJSON = localStorage.getItem("pieceByPieceCart");
    if (localCartJSON) {
      setCartItems(JSON.parse(localCartJSON));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pieveByPiecesCart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (id: string, quantity: number) => {
    const newItem = products.find((product) => product.id === id);
    if (newItem) {
      const newCartItem = { ...newItem, quantity: quantity };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const changeQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id !== id) return item;
        return { ...item, quantity: quantity };
      })
    );
  };

  return (
    <CartContext.Provider value={{ cartItems }}>
      {children}
    </CartContext.Provider>
  );
}
