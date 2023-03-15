import {ThemeProvider} from "@mui/material/styles";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {theme} from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <h1>Hello Students, begin here!</h1>
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
