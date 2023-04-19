import React from "react";
import { Link } from "react-router-dom";
import { useSwiper } from "swiper/react";
const Swip = ({ item }) => {
  const swiper = useSwiper();
  return (
    <div className="flex items-center  relative h-full justify-betwen text-white px-[60px]">
      <div className="w-[100%] flex flex-col gap-4">
        <Link to={"/product/" + item.id}>
       
          <h1 className=" swiplog text-[44px] font-extrabold">{item.title}</h1>
        </Link>

        {/* <p className=" text-[28px] swipprice font-semibold">{item.price} сум</p> */}
        <div className="w-full">
          <p className=" text-[#ACACAC] text-[28px] TransTex swipprice font-semibold">
            {item.price} сум
          </p>
          <p className=" text-[28px] swipprice font-semibold">
            {item.price - (item.price / 100) * item.salePercentage}
          </p>
        </div>
        <p className=" swiptext text-sm font-medium">
         {item.description}
        </p>
      </div>
      <div className="">{/* <img src="/icons/Goods.png" alt="" /> */}</div>
      <div className="NextHome" onClick={() => swiper.slideNext()}></div>
      <div className="PrevHome" onClick={() => swiper.slidePrev()}></div>
    </div>
  );
};

export default Swip;
