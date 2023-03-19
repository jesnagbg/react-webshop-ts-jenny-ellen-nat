import { createContext, ReactNode, useContext, useState } from "react";
import { Product, products as initialProducts } from "../data";

interface ContextValue {
  products: Product[];
}

const ProductsContext = createContext<ContextValue>(null as any);
export const useProducts = () => useContext(ProductsContext);

interface Props {
  children: ReactNode;
}

export default function ProductsProvider({children}: Props) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  //Ville bara testa så att det fungerade, kan ändra tillbaka om ni vill!

  return (
    <ProductsContext.Provider value={{products}}>
      {children}
    </ProductsContext.Provider>
  );
}
