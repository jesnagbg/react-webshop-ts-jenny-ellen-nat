import { createContext, ReactNode, useContext, useState } from 'react';
import Toast from '../components/Toast';
import { CartItem, Product } from '../data';
import { useLocalCart } from '../hooks/useLocalCart';

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

// interface ToastProps {
//   name: string;
//   quantity: number;
//   remove: boolean;
// }

interface SnackbarMessage {
  title: string;
  quantity: number;
  remove: boolean;
}

export default function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useLocalCart();
  // const [toastOpen, setToastOpen] = useState(false);
  // const [toastProps, setToastProps] = useState({
  //   name: '',
  //   quantity: 0,
  //   remove: false,
  // });
  const [snackpack, setParentSnackpack] = useState<SnackbarMessage[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    const newCartItem: CartItem = { ...product, quantity: quantity };
    const foundItem = cartItems.find((item) => item.id === product.id);
    if (!foundItem) {
      setCartItems([...cartItems, newCartItem]);
    } else {
      changeQuantity(newCartItem, quantity + foundItem.quantity);
    }
    displayToast(newCartItem, false);
  };

  const removeFromCart = (targetItem: CartItem) => {
    setCartItems(cartItems.filter((item) => item.id !== targetItem.id));
    displayToast(targetItem, true);
  };

  const displayToast = (targetItem: CartItem, remove: boolean) => {
    // setToastOpen(false);
    // setToastProps({
    //   name: targetItem.title,
    //   quantity: targetItem.quantity,
    //   remove: remove,
    // });
    // setToastOpen(true);
    const newSnackbarMessage: SnackbarMessage = {
      title: targetItem.title,
      quantity: targetItem.quantity,
      remove: remove,
    };
    setParentSnackpack((prev) => [...prev, newSnackbarMessage]);
  };

  const changeQuantity = (targetItem: CartItem, newQuantity: number) => {
    const foundItem = cartItems.find((item) => item.id === targetItem.id);
    if (!foundItem) return;
    if (newQuantity === 0) {
      removeFromCart(targetItem);
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.id !== targetItem.id) return item;
          return { ...item, quantity: newQuantity };
        })
      );
    }
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, changeQuantity }}
    >
      {children}
      <Toast
        snackpack={snackpack}
        setSnackpack={setParentSnackpack}
      />
    </CartContext.Provider>
  );
}
