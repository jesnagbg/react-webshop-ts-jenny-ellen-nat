import { ThemeProvider } from '@emotion/react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import CartProvider from './contexts/CartContext';
import OrderProvider from './contexts/OrderContext';
import ProductsProvider from './contexts/ProductsContext';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <CartProvider>
          <OrderProvider>
            <div>
              <Header />
              <main>
                <Outlet />
              </main>
              <Footer />
            </div>
          </OrderProvider>
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  );
}
export default App;
