import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';
import { Product, products } from '../../data';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface ContextValue {
  products: Product[];
  product: Product | null;
  selectedProduct: Product | null;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}

const ProductsContext = createContext<ContextValue>(null as any);
export const useProducts = () => useContext(ProductsContext);

interface Props {
  children: ReactNode;
}

export default function ProductsProvider({ children }: Props) {
  const [allProducts, setProducts] = useLocalStorage<Product[]>('products');
  const [product, setProduct] = useLocalStorage<Product | null>('order');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setProducts(products);
  }, []);

  const contextValue = {
    products: allProducts,
    product,
    selectedProduct,
    setProduct,
    setProducts,
    setSelectedProduct,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
}


