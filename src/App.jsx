import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";

import Navbar from "./Navbar";
import Home from "./Home";
import Menu from "./Menu";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Milkshake from "./Milkshake";
import AboutUs from "./Aboutus";
import Cart from "./Cart";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homegit status />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<NonVeg />} />
          <Route path="/Milkshake" element={<Milkshake />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
