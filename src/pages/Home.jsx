import React, { useContext, useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Swip from "../components/Swip";
import { useSwiper } from "swiper/react";
import ProductItem from "../components/ProductItem";
import { mainArrCTX } from "../contexts/mainArrCTX";
const Home = () => {
  const swiper = useSwiper();
  const [count, setCount] = useState(10);
  const {arr , setArr , ChangeLike} = useContext(mainArrCTX);

  


  function ChangeLenght(len, ar) {
    return ar.slice(0, len);
  }
  // console.log(ChangeLenght(3 , arr));
  return (
    <>
      <div className="w-full h-[474px]  swip">
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          //   navigation={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => swiper}
          onSlideChange={() => "slide change"}
          className="h-full"
        >
          {arr.map((item, inx) => (
            <SwiperSlide key={inx} className="">
              <Swip key={inx} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" mt-20">
        <h1 className=" text-[32px] font-semibold">Популярное</h1>
        <div className=" grid  grid-cols-5 py-8 gap-12">
          {ChangeLenght(count, arr).map((item, inx) => (
            <ProductItem key={inx} ChangeLike={ChangeLike} item={item} />
          ))}
        </div>
        <div
          className="bg-[#EAEAF9] w-fit mx-auto my-2 px-[15px] py-[5px] text-[#3333CC]"
          onClick={() => {
            if (count <= arr.length) {
              setCount(count + 10);
            } else {
              setCount(10);
            }
          }}
        >
          {count <= arr.length ? "Показать еще 10" : "Свернуть"}
        </div>
      </div>
      <div className=" mt-20">
        <h1 className=" text-[32px] font-semibold">Спортивная одежда</h1>
        <div className=" grid grid-cols-5 py-8 gap-12">
          {ChangeLenght(5, arr).map((item, inx) => (
            <ProductItem key={inx} ChangeLike={ChangeLike} item={item} />
          ))}
        </div>
   
      </div>
      <div className=" mt-20">
        <h1 className=" text-[32px] font-semibold">Активный отдых</h1>
        <div className=" grid grid-cols-5 py-8 gap-12">
          {ChangeLenght(5, arr).map((item, inx) => (
            <ProductItem key={inx} ChangeLike={ChangeLike} item={item} />
          ))}
        </div>
   
      </div>
      <div className=" mt-20">
        <h1 className=" text-[32px] font-semibold">Спортивная одежда</h1>
        <div className=" grid grid-cols-5 py-8 gap-12">
          {ChangeLenght(5, arr).map((item, inx) => (
            <ProductItem key={inx} ChangeLike={ChangeLike} item={item} />
          ))}
        </div>
   
      </div>
      <div className=" mt-20">
        <h1 className=" text-[32px] font-semibold">Активный отдых</h1>
        <div className=" grid grid-cols-5 py-8 gap-12">
          {ChangeLenght(5, arr).map((item, inx) => (
            <ProductItem key={inx} ChangeLike={ChangeLike} item={item} />
          ))}
        </div>
   
      </div>
    </>
  );
};

export default Home;
