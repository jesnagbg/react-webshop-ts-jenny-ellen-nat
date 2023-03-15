import {ThemeProvider} from "@mui/material/styles";
import {Outlet} from "react-router-dom";
import Footer from "./components/Footer";
import {theme} from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Hello Students, begin here!</h1>
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
