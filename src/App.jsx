import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";

import Navbar from "./Navbar";
import Home from "./Home";
import Veg from "./Veg";

import Milkshake from "./Milkshake";
import AboutUs from "./Aboutus";
import Cart from "./Cart";
import NonVeg from "./NonVeg (1)";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/milkshake" element={<Milkshake />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
