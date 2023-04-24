import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Headerr from "../components/Headerr";
import { mainArrCTX } from "../contexts/mainArrCTX";
import { basketCTX } from "../contexts/basketCTX";
import { useDispatch, useSelector } from "react-redux";
import { addLiked } from "../features/liked/likedSlice";

const Layout = () => {
  const goods = useSelector((state) => state.goods.data);
  const liked = useSelector((state) => state.liked.data);
  const liked_id = useSelector((state) => state.liked.data_id);
  const [cart, setCart] = useState(useSelector((state) => state.cart.data));
  // console.log(liked, liked_id ,cart );
  const [arr, setArr] = useState(goods);
  const [basket, setBasket] = useState(useSelector((state) => state.cart.data));

  useEffect(() => {
    // console.log(cart  );
  } , [cart])

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
        <div className="w-[80%] max-w-[1728px] mx-auto my-0" >
          <Headerr className="max-w-[1728px] " />
          <main className="pt-[120px]">
            <Outlet />
          </main>
        </div>
      </basketCTX.Provider>
    </mainArrCTX.Provider>
  );
};

export default Layout;
