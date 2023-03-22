import { createContext, ReactNode, useContext } from 'react';
import { CartItem, Product } from '../../data';
import { useLocalCart } from '../hooks/useLocalCart';
import { useOrder } from './OrderContext';

interface ContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (targetItem: CartItem) => void;
  changeQuantity: (targetItem: CartItem, quantity: number) => void;
}

const CartContext = createContext<ContextValue>(null as any);
export const useCart = () => useContext(CartContext);

interface Props {
  children: ReactNode;
}

export default function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useLocalCart();
  const { order, updateOrder } = useOrder();

  const updateCartAndOrder = (newCartItems: CartItem[]) => {
    setCartItems(newCartItems);
    updateOrder({ ...order, cart: newCartItems });
  };

  const addToCart = (product: Product, quantity: number) => {
    const newCartItem: CartItem = { ...product, quantity };
    const foundItem = cartItems.find((item) => item.id === product.id);
    if (!foundItem) {
      updateCartAndOrder([...cartItems, newCartItem]);
    } else {
      changeQuantity(foundItem, quantity + foundItem.quantity);
    }
  };

  const removeFromCart = (targetItem: CartItem) => {
    updateCartAndOrder(cartItems.filter((item) => item.id !== targetItem.id));
  };

  const changeQuantity = (targetItem: CartItem, quantity: number) => {
    const newCartItems =
      quantity === 0
        ? cartItems.filter((item) => item.id !== targetItem.id)
        : cartItems.map((item) =>
            item.id !== targetItem.id ? item : { ...item, quantity }
          );
    updateCartAndOrder(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, changeQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
