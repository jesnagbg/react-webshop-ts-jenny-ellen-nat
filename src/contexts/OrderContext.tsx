import { createContext, ReactNode, useContext, useState } from 'react';
import { CartItem } from '../../data';
import { useCart } from './CartContext';

export interface ContextValue {
  order: Order;
  updateOrder: (updatedOrder: Order) => void;
  cartItems: CartItem[];
}

export interface Order {
  cart: CartItem[];
  deliveryAddress: Address;
}

export interface Address {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  email: string;
}

const initialOrderValues: Order = {
  cart: [],
  deliveryAddress: {
    name: '',
    address: '',
    postalCode: '',
    city: '',
    phone: '',
    email: '',
  },
};

export const OrderContext = createContext<ContextValue>({
  order: initialOrderValues,
  updateOrder: (updatedOrder: Order) => {},
  cartItems: [],
});

export const useOrder = () => useContext(OrderContext);

interface Props {
  children: ReactNode;
}

export default function OrderProvider({ children }: Props) {
  const [order, setOrder] = useState<Order>(initialOrderValues);
  const { cartItems } = useCart();

  const updateOrder = (newOrder: Order) => {
    const updatedOrder = {
      ...newOrder,
      cart: cartItems,
    };
    setOrder(updatedOrder);
  };

  return (
    <OrderContext.Provider value={{ order, updateOrder, cartItems }}>
      {children}
    </OrderContext.Provider>
  );
}
