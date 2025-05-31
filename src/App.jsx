import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Kids from "./components/Kids";
import Adults from "./components/Adults";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Checkout1 from "./components/Checkout1";
import Checkout2 from "./components/Checkout2";
import Checkout3 from "./components/Checkout3";
import Checkout4 from "./components/Checkout4";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <MobileNavbar onCartClick={() => setIsCartOpen(true)} />
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="kids" element={<Kids />} />
            <Route path="adults" element={<Adults />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout1" element={<Checkout1 />} />
            <Route path="checkout2" element={<Checkout2 />} />
            <Route path="checkout3" element={<Checkout3 />} />
            <Route path="checkout4" element={<Checkout4 />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
