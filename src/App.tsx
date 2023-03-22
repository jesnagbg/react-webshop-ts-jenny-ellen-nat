import { Snackbar } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <Snackbar />
    </ThemeProvider>
  );
}

export default App;
