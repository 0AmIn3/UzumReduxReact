import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { basketCTX } from "../contexts/basketCTX";
import { useDispatch, useSelector } from "react-redux";
import { addCart, changeCountMinus, changeCountPlus, removeCart } from "../features/cart/cartSlice";

const BasketItem = ({ item, changeTotal, changeTotalmin, changBask }) => {
  const [count, setCount] = useState(item.count);
  const [chang, setChang] = useState(
    (item.price - (item.price / 100) * item.sale) * item.count
  );
  const cart = useSelector((state) => state.cart.data);

  const dispath = useDispatch();
  useEffect(() => {
    setCount(item.count);
    // console.log(cart.indexOf(item));
  }, [cart]);

  return (
    <div className="h-[187px] w-full PodItem flex gap-7 ">
      <div className="w-[143px] ">
        <img className="w-full" src={item.media[0]} alt="" />
      </div>
      <div className=" flex flex-col gap-2">
        <h1>{item.title}</h1>
        <div className="w-full">
          <p className=" text-[#ACACAC] text-sm  font-medium TransTex">
            {item.salePercentage > 0
              ? item.price.toLocaleString("us-US") + "руб."
              : ""}
          </p>
          <p className=" text-sm font-medium">
            {item.salePercentage > 0
              ? Math.ceil(
                  item.price - (item.price / 100) * item.salePercentage
                ).toLocaleString("ru-RU")
              : item.price.toLocaleString("ru-RU")}
            руб.
          </p>
        </div>
        <div className="w-[89px] px-[10px] flex items-center justify-between h-[30px] counter">
          <AiOutlineMinus
            onClick={() => {
              if (count > 1) {
                changeTotalmin(
                  item.price - (item.price / 100) * item.salePercentage
                );
                dispath(changeCountMinus(item));
              }
            }}
          />
          <p>{count}</p>
          <AiOutlinePlus
            onClick={() => {
              changeTotal(
                item.price - (item.price / 100) * item.salePercentage
              );
              dispath(changeCountPlus(item));
            }}
          />
        </div>
        <div className=" bg-[#EAEAF9] w-fit px-[15px] py-[5px] text-[#3333CC]">
          <p onClick={() => dispath(removeCart(item))}>Удалить</p>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
