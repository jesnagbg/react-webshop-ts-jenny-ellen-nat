import {ThemeProvider} from "@mui/material/styles";
import {Outlet} from "react-router-dom";
import {theme} from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1>Hello Students, begin here!</h1>
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
