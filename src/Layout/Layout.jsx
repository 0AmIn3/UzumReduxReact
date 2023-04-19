import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { mainArrCTX } from "../contexts/mainArrCTX";
import { basketCTX } from "../contexts/basketCTX";
import { useSelector } from "react-redux";

const Layout = () => {
  const data =  useSelector(state => state.goods.data)


  const [arr, setArr] = useState(data);
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
    // console.log(cop);
    // console.log(basket);
  }

  useEffect(() => {
    // console.log(basket);
  }, [basket]);

  function ChangeLike(obj, bool) {
    let cop = [...arr];
    let inx = arr.indexOf(obj);
    let n = {
      ...obj,
      like: bool,
    };
    cop.splice(inx, 1, n);
    setArr(cop);
  }

  // console.log(arr);
  return (
    <mainArrCTX.Provider value={{ arr, setArr, ChangeLike }}>
      <basketCTX.Provider value={{ basket, setBasket, AddToBasket }}>
        <div className="w-[80%] max-w-[1728px]  mx-auto my-0">
          <Header className='max-w-[1728px] ' />
          <main className="pt-[150px]">
            <Outlet />
          </main>
        </div>
      </basketCTX.Provider>
    </mainArrCTX.Provider>
  );
};

export default Layout;
