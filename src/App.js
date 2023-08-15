import Home from "./components/Home";
import ProductsList from "./components/ProductsList";
import NavBar from "./components/NavBar";
import ProductItemDetails from "./components/ProductItemDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./components/ContextProvider";
import About from "./components/About";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="products/:id" element={<ProductItemDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
