import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../components/ProductItem";

const Catalog = () => {
  const arr = useSelector((state) => state.goods.data);
  let cotigor = arr.map((item) => item.type);
  const [fill, setFill] = useState([]);

  cotigor = [...new Set(cotigor)];
 

  useEffect(() => {
  if(arr.length){
    let cop = [...arr];
    let priseto = document.querySelector(".priseto");
    let prisefrom = document.querySelector(".prisefrom");

    priseto.placeholder =
      "до " + cop.sort((a, b) => a.price - b.price).reverse()[0].price;
    prisefrom.placeholder =
      "от " + cop.sort((a, b) => a.price - b.price)[0].price;
  }
  });

  function FIllPrice() {
    let prisefrom = document.querySelector(".prisefrom");
    let priseto = document.querySelector(".priseto");
    let prisefromval = +prisefrom.value;
    let prisetoval = +priseto.value;

    fill.length === 0
      ? setFill(
          arr.filter(
            (item) => item.price >= prisefromval && item.price <= prisetoval
          )
        )
      : setFill(
          fill.filter(
            (item) => item.price >= prisefromval && item.price <= prisetoval
          )
        );
  }

  return (
    <div className="w-full flex gap-5">
      <div className="w-[20%]">
        <h1>Категории</h1>
        <div className="types">
          {cotigor.map((item, inx) => (
            <p
              className="cursor-pointer"
              onClick={() => {
                let cop = [...arr];
                cop = cop.filter((good) => good.type === item);
                setFill(cop);
              }}
              key={inx}
            >
              {item}
            </p>
          ))}
        </div>
        <p
          onClick={() => setFill([])}
          className=" underline mt-3 cursor-pointer"
        >
          Сбросить фильтер
        </p>

        <div className=" mt-9">
          <h1>Цена</h1>
          <div className="flex gap-2 mt-10">
            <div className="fillnum">
              <input
                type="text"
                onKeyUp={() => FIllPrice()}
                className="prisefrom"
                placeholder="от 1000"
              />
            </div>
            <div className="fillnum">
              <input
                type="text"
                onKeyUp={() => FIllPrice()}
                className="priseto"
                placeholder="от 500000"
              />
            </div>
         
          </div>
        </div>
      </div>
      <div className="h-full grid grid-cols-4 gap-3">
        {fill.length === 0
          ? arr.map((item, inx) => <ProductItem key={inx} item={item} />)
          : fill.map((item, inx) => <ProductItem key={inx} item={item} />)}
      </div>
    </div>
  );
};

export default Catalog;
