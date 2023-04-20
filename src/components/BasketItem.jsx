import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { basketCTX } from "../contexts/basketCTX";

const BasketItem = ({ item, changeTotal, changeTotalmin, changBask }) => {
  const [count, setCount] = useState(item.count);
  const [chang, setChang] = useState(
    (item.price - (item.price / 100) * item.sale) * item.count
  );
  const { basket, setBasket, AddToBasket } = useContext(basketCTX);

  useEffect(() => {
    setCount(item.count);
  }, [basket]);

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
              ? item.price.toLocaleString("ru-RU") + "руб."
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
                changBask(item, count - 1);
              }
            }}
          />
          <p>{count}</p>
          <AiOutlinePlus
            onClick={() => {
              changeTotal(
                item.price - (item.price / 100) * item.salePercentage
              );
              changBask(item, count + 1);
            }}
          />
        </div>
        <div className=" bg-[#EAEAF9] w-fit px-[15px] py-[5px] text-[#3333CC]">
          <p onClick={() => setBasket(basket.filter((i) => i.id !== item.id))}>
            Удалить
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
