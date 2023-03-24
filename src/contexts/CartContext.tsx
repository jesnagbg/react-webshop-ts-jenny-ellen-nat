import { createContext, ReactNode, useContext, useState } from 'react';
import { CartItem, Product } from '../../data';
import Toast from '../components/Toast';
import { useLocalStorage } from '../hooks/useLocalStorage';
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

interface SnackbarData {
  cartItem: CartItem;
  remove: boolean;
}

export default function CartProvider({ children }: Props) {
  const { order, updateOrder } = useOrder();
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);
  const [snackpack, setSnackpack] = useState<SnackbarData[]>([]);

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
    displayToast(newCartItem, false);
  };

  const removeFromCart = (targetItem: CartItem) => {
    updateCartAndOrder(cartItems.filter((item) => item.id !== targetItem.id));
    displayToast(targetItem, true);
  };

  const displayToast = (targetItem: CartItem, remove: boolean) => {
    const newSnackbarMessage: SnackbarData = {
      // Create the object here or in the other functions?
      cartItem: targetItem,
      remove: remove,
    };
    setSnackpack((prev) => [...prev, newSnackbarMessage]);
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
      <Toast
        snackpack={snackpack}
        setSnackpack={setSnackpack}
      />
    </CartContext.Provider>
  );
}
