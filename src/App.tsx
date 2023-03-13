import {Outlet} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <h1>Hello Students, begin here!</h1>
      <Outlet />
    </div>
  );
}

export default App;
