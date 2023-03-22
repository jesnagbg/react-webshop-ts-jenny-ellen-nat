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

  const addToCart = (product: Product, quantity: number) => {
    const newCartItem: CartItem = { ...product, quantity: quantity };
    const foundItem = cartItems.find((item) => item.id === product.id);
    if (!foundItem) {
      setCartItems([...cartItems, newCartItem]);
    } else {
      changeQuantity(newCartItem, quantity + foundItem.quantity);
    }

    const updatedOrder = {
      ...order,
      cart: [...order.cart, newCartItem],
    };
    updateOrder(updatedOrder);
  };

  const removeFromCart = (targetItem: CartItem) => {
    const newCartItems = cartItems.filter((item) => item.id !== targetItem.id);
    setCartItems(newCartItems);

    const updatedOrder = {
      ...order,
      cart: newCartItems,
    };
    updateOrder(updatedOrder);
  };

  const changeQuantity = (targetItem: CartItem, newQuantity: number) => {
    const foundItem = cartItems.find((item) => item.id === targetItem.id);
    if (!foundItem) return;
    if (newQuantity === 0) {
      removeFromCart(targetItem);
    } else {
      const newCartItems = cartItems.map((item) => {
        if (item.id !== targetItem.id) return item;
        return { ...item, quantity: newQuantity };
      });
      setCartItems(newCartItems);

      const updatedOrder = {
        ...order,
        cart: newCartItems,
      };
      updateOrder(updatedOrder);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        changeQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
