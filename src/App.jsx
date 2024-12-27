import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Home";
import Kids from "./components/Kids";
import Adults from "./components/Adults";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
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