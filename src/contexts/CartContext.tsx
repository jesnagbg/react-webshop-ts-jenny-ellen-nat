import { createContext, ReactNode, useContext, useState } from 'react';
import Toast from '../components/Toast';
import { CartItem, Product } from '../data';
import { useLocalCart } from '../hooks/useLocalCart';

interface ContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (removedItem: CartItem) => void;
  changeQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<ContextValue>(null as any);
export const useCart = () => useContext(CartContext);

interface Props {
  children: ReactNode;
}

interface ToastProps {
  name: string;
  quantity: number;
  remove: boolean;
}

export default function CartProvider({ children }: Props) {
  const [cartItems, setCartItems] = useLocalCart();
  const [toastOpen, setToastOpen] = useState(false);
  const [toastProps, setToastProps] = useState({
    name: '',
    quantity: 0,
    remove: false,
  });

  const addToCart = (product: Product, quantity: number) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      const newCartItem: CartItem = { ...product, quantity: quantity };
      setCartItems([...cartItems, newCartItem]);
    } else {
      changeQuantity(product.id, quantity);
    }
    setToastProps({ name: product.title, quantity: quantity, remove: false });
    setToastOpen(true);
  };

  const removeFromCart = (removedItem: CartItem) => {
    setCartItems(cartItems.filter((item) => item.id !== removedItem.id));

    setToastProps({
      name: removedItem.title,
      quantity: removedItem.quantity,
      remove: true,
    });
    setToastOpen(true);
  };

  const changeQuantity = (id: string, quantity: number) => {
    const foundItem = cartItems.find((item) => item.id === id);
    if (!foundItem) return;
    if (foundItem.quantity + quantity <= 0) {
      removeFromCart(foundItem);
    } else {
      setCartItems(
        cartItems.map((item) => {
          if (item.id !== id) return item;
          return { ...item, quantity: item.quantity + quantity };
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
        name={toastProps?.name}
        quantity={toastProps?.quantity}
        remove={toastProps?.remove}
        open={toastOpen}
        setOpen={setToastOpen}
      />
    </CartContext.Provider>
  );
}
