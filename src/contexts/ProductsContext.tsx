import { createContext, ReactNode, useContext } from 'react';
import { Product, products } from '../../data';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ContextValue {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  generateShortId: () => string;
}

const ProductsContext = createContext<ContextValue>(null as any);
export const useProducts = () => useContext(ProductsContext);

interface Props {
  children: ReactNode;
}

export default function ProductsProvider({ children }: Props) {
  const [allProducts, setProducts] = useLocalStorage<Product[]>(
    'products',
    products
  );

  const generateShortId = (length: number = 8) => {
    return Math.random().toString(36).substring(2, length);
  };

  const contextValue = {
    products: allProducts,
    setProducts,
    generateShortId,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}
