import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Homepage } from "../src/UI Component/shop/Homepage";
import { Cart } from "./UI Component/cart/Cart";
import { ShopContextProvider } from "./Context/ShopContext";
import { SignIn } from "./UI Component/SignIn";
import { SignUp } from "./UI Component/SignUp";
import { Checkout } from "./UI Component/checkout/Checkout";  

function App() {
  return (
    <div className="App">
    <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </ShopContextProvider>
  </div>
  );
}

export default App;
