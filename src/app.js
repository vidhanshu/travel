import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import globalStyle from "./styles/global.module.scss";
import "./styles/global.css";
import Home from "./components/pages/Home";
import Services from "./components/pages/services";
import Product from "./components/pages/products";
import Signup from "./components/pages/Signup";
function App() {
  return (
    <div className={globalStyle.website_container}>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/products" exact element={<Product />} />
        <Route path="/sign-up" exact element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
