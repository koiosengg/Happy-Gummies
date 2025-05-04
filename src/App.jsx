import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Kids from "./components/Kids";
import Adults from "./components/Adults";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <MobileNavbar />
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="kids" element={<Kids />} />
            <Route path="adults" element={<Adults />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
