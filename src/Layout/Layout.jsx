import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { mainArrCTX } from "../contexts/mainArrCTX";
import { basketCTX } from "../contexts/basketCTX";
import { useDispatch, useSelector } from "react-redux";
import { addLiked } from "../features/liked/likedSlice";

const Layout = () => {
  const goods = useSelector((state) => state.goods.data);
  const liked = useSelector((state) => state.liked.data);
  const liked_id = useSelector((state) => state.liked.data_id);
  console.log(liked, liked_id);
  const [arr, setArr] = useState(goods);
  const [basket, setBasket] = useState([]);
  function AddToBasket(obj, count) {
    let cop = [...basket];

    cop = basket.filter((item) => item.id !== obj.id);

    let nev = {
      ...obj,
      count: count,
    };
    cop.push(nev);
    setBasket([...cop]);
  }

  return (
    <mainArrCTX.Provider value={{ arr, setArr }}>
      <basketCTX.Provider value={{ basket, setBasket, AddToBasket }}>
        <div className="w-[80%] max-w-[1728px]   mx-auto my-0" id="header">
          <Header className="max-w-[1728px] " />
          <main className="pt-[120px]">
            <Outlet />
          </main>
        </div>
      </basketCTX.Provider>
    </mainArrCTX.Provider>
  );
};

export default Layout;
