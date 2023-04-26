import React, { useContext, useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { mainArrCTX } from "../contexts/mainArrCTX";
import { useSelector } from "react-redux";

const LikedPage = () => {
  const arr = useSelector((state) => state.goods.data);
  const liked = useSelector((state) => state.liked.data);

  return (
    <div className="w-full h-[100%] flex items-center justify-center">
      {liked.length > 0 ? (
        <div className="mt-20">
          <h1 className="text-[32px] font-semibold ">Избранное</h1>
          <div className="grid grid-cols-5 py-8 gap-12">
            {liked.map((item, inx) => (
              <ProductItem key={inx} item={item} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <img src="/likes.svg" alt="" />
          <h1 className=" text-[32px] font-semibold">
            Добавьте то, что понравилось
          </h1>
          <p className=" text-sm font-medium">
            Перейдите на главную страницу и нажмите на ♡ в товаре На главную
          </p>
        </div>
      )}
    </div>
  );
};

export default LikedPage;
