import React, { useContext, useEffect, useState } from "react";
import { basketCTX } from "../contexts/basketCTX";
import ProductItem from "../components/ProductItem";
import { mainArrCTX } from "../contexts/mainArrCTX";
import BasketItem from "../components/BasketItem";
import { useSelector } from "react-redux";

const Basket = () => {
  const arr = useSelector((state) => state.goods.data);
  const [total, setTotal] = useState(0);
  const [sale, setSale] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  // console.log(cart);
  // let cart = ;

  function changeTotal(con) {
    setTotal(total + con);
    // console.log(total);
  }
  function changeTotalmin(con) {
    setTotal(total - con);
    // console.log(total);
  }
  function changBask(obj, count) {
   
    
  }
  useEffect(() => {
  //  console.log(cart);
    let a = 0;
    let b = 0;
    for (let item of cart) {
      a += (item.price - (item.price / 100) * item.salePercentage) * item.count;
      b += (item.price / 100) * item.salePercentage * item.count;
    }
    setTotal(a);
    setSale(b);
  }, [cart]);



  return (
    <div className="w-full h-[100%] flex items-center justify-center">
      {cart.length > 0 ? (
        <div className="mt-20">
          <h1 className="text-[32px] font-semibold ">Корзина товаров</h1>
          <div className="w-full mt-8 cotn flex justify-between gap-5">
            <div className="w-[806px] bas counter flex flex-col gap-4 py-[43px] px-[30px]">
              {cart.map((item, inx) => (
                <BasketItem
                  key={inx}
                  item={item}
                  changeTotal={changeTotal}
                  changeTotalmin={changeTotalmin}
                  changBask={changBask}
                />
              ))}
            </div>
            <div className="w-[400px] arr h-fit counter py-[43px] px-[30px]">
              <h1 className=" text-4xl font-semibold">{Math.ceil(total)} сум</h1>
              <p>Итого товаров: {cart.length}</p>
              <p>Итого скидки: {Math.ceil(sale)} сум</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img src="/nobasket.svg" alt="" />
          <h1 className=" text-[32px] font-semibold">
            В корзине пока нет товаров
          </h1>
          <p className=" text-sm font-medium">
            Начните с подборок на главной странице или найдите нужный товар
            через поиск
          </p>
        </div>
      )}
    </div>
  );
};

export default Basket;
