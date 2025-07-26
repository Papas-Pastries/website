import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Catering from "./pages/Catering";
import "./styles/layout.module.css";

function App() {
  return (
    <Router>
      <div className="site-wrapper">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/catering" element={<Catering />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;