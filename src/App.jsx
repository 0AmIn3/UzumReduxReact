import { useState } from "react";

import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import LikedPage from "./pages/LikedPage";
import Product from "./pages/Product";
import { useSelector } from "react-redux";

function App() {
  const [count, setCount] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default App;
