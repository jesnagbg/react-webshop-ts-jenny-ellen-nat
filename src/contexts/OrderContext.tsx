import { createContext, ReactNode, useContext, useState } from 'react';
import { CartItem } from '../../data';
import { useCart } from './CartContext';
import { useProducts } from './ProductsContext';

interface Props {
  children: ReactNode;
}
export interface ContextValue {
  order: Order;
  updateOrder: (updatedOrder: Order) => void;
  cartItems: CartItem[];
}

export interface Order {
  cart: CartItem[];
  id: string;
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
  id: '',
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
  updateOrder: () => {},
  cartItems: [],
});

export const useOrder = () => useContext(OrderContext);

export default function OrderProvider({ children }: Props) {
  const [order, setOrder] = useState<Order>(initialOrderValues);
  const { cartItems } = useCart();
  const { generateShortId } = useProducts();

  const updateOrder = (newOrder: Order) => {
    setOrder({ ...newOrder, id: generateShortId(), cart: cartItems });
  };

  return (
    <OrderContext.Provider value={{ order, updateOrder, cartItems }}>
      {children}
    </OrderContext.Provider>
  );
}
