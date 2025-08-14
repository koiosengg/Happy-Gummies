import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
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
import { AuthProvider } from "./components/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function AppContent() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const hideFooterRoutes = ["/login", "/register"];
  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <>
      <ScrollToTop />
      <MobileNavbar onCartClick={() => setIsCartOpen(true)} />
      <Navbar onCartClick={() => setIsCartOpen(true)} />
      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="kids" element={<Kids />} />
          <Route path="adults" element={<Adults />} />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout1"
            element={
              <ProtectedRoute>
                <Checkout1 />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout2"
            element={
              <ProtectedRoute>
                <Checkout2 />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout3"
            element={
              <ProtectedRoute>
                <Checkout3 />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout4"
            element={
              <ProtectedRoute>
                <Checkout4 />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>

      {!shouldHideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
