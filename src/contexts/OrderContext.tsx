import { createContext, ReactNode, useContext, useState } from "react";
import { CartItem } from "../data";

interface ContextValue {
  order: CartItem[];
}

const OrderContext = createContext<ContextValue>(null as any);
export const useOrder = () => useContext(OrderContext);

interface Props {
  children: ReactNode;
}

export default function OrderProvider({ children }: Props) {
  const [order, setOrder] = useState<CartItem[]>([]);

  return (
    <OrderContext.Provider value={{ order }}>{children}</OrderContext.Provider>
  );
}
