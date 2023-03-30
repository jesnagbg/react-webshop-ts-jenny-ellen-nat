import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Box sx={LayoutStyle}>
      <Header />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
}
export default App;

const LayoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};
