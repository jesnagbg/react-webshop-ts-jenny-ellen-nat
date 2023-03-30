import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
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
            <Box sx={LayoutStyle}>
              <Header />
              <main style={{ flex: 1 }}>
                <Outlet />
              </main>
              <Footer />
            </Box>
          </OrderProvider>
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  );
}
export default App;

const LayoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};
