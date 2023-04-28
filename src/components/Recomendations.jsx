import React, { useContext, useState } from "react";
import { mainArrCTX } from "../contexts/mainArrCTX";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Recomendations = ({type}) => {
  const [count, setCount] = useState(5);
  const arr = useSelector((state) => state.goods.data);

  let fill = arr.filter(item => item.type == type);
  function ChangeLenght(len, ar) {
    return ar.slice(0, len);
  }
  return (
    <div className=" mt-20" id={type}>
    <h1 className=" text-[32px] font-semibold">{type[0].toUpperCase() + type.slice(1)}</h1>
    <div className=" grid  grid-cols-5 py-8 gap-12">
      {ChangeLenght(count, fill).map((item, inx) => (
        <ProductItem key={inx} item={item} />
      ))}
    </div>
    <div
      className="bg-[#EAEAF9] w-fit mx-auto my-2 px-[15px] py-[5px] text-[#3333CC]"
      onClick={() => {
        if (count <= fill.length) {
          setCount(count + 10);
        } else {
          setCount(5);
        }
      }}
    >
      {count < fill.length ? "Показать еще " : "Свернуть"}
    </div>
  </div>
  );
};

export default Recomendations;
