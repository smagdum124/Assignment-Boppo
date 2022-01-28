import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../A-Navigation/NavBar";
import ProductCart from "../B-products/ProductCart";
import ProductParent from "../B-products/ProductParent";
import { useState } from "react";

const LandingPage = () => {
  const [serch, setSerch] = useState([]);
  return (
    <div>
      <BrowserRouter>
        <NavBar setSerch={setSerch} />
        <Routes>
          <Route path="" element={<ProductParent serch={serch} />} />
          <Route path="/cart" element={<ProductCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default LandingPage;
