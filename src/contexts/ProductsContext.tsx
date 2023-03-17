import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {Product, products} from "../data";

interface ContextValue {
  products: Product[];
}

const ProductsContext = createContext<ContextValue>(null as any);
export const useProducts = () => useContext(ProductsContext);

interface Props {
  children: ReactNode;
}

export default function ProductsProvider({children}: Props) {
  const [initialProducts, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(products);
  }, []);

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  );
}
