import { useEffect, useState } from "react";

import "./App.scss";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import LikedPage from "./pages/LikedPage";
import Product from "./pages/Product";
import { useSelector } from "react-redux";
import Admin from "./pages/Admin";
import AdminPanel from "./pages/AdminPanel";
import Catalog from "./pages/Catalog";

function App() {
  const [count, setCount] = useState(0);

  const { pathname, hash  } = useLocation();
  useEffect(() => {

    if (hash === '') {
      window.scrollTo(0, 0);
    }
    else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }

  }, [pathname, hash]); // do this on route change
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/liked" element={<LikedPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/catalog" element={<Catalog />} />
      </Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/panel" element={<AdminPanel />} />

    </Routes>
  );
}

export default App;
