import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { Product, products } from '../../data';

interface ContextValue {
  products: Product[];
  product: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductsContext = createContext<ContextValue>(null as any);
export const useProducts = () => useContext(ProductsContext);

interface Props {
  children: ReactNode;
}

export default function ProductsProvider({ children }: Props) {
  const [allProducts, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    setProducts(products);
  }, []);

  const contextValue = {
    products: allProducts,
    product,
    setProduct,
    setProducts,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}
