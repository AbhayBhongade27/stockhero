import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Component/NavBar";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./Component/HomePage";
import MyPosition from "./Component/MyPosition";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <HomePage />
      </BrowserRouter>
    </div>
  );
}

export default App;
