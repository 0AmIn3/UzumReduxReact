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
import Recomendations from "../components/Recomendations";
import { useSelector } from "react-redux";

const Home = () => {
  const swiper = useSwiper();
  const [count, setCount] = useState(10);
  const arr = useSelector((state) => state.goods.data);
  let sor = arr;
  sor = [...sor].sort((a, b) => a.rating - b.rating).reverse();
  let cotigor = arr.map((item) => item.type);
  cotigor = [...new Set(cotigor)];

  function ChangeLenght(len, ar) {
    return ar.slice(0, len);
  }
  useEffect(() => {
  });

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
          className="h-full "
        >
          {arr.slice(0, 6).map((item, inx) => (
            <SwiperSlide key={inx} className="">
              <Swip key={inx} item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className=" mt-20">
        <h1 className=" text-[32px] font-semibold">Популярное</h1>
        <div className=" grid  grid-cols-5 py-8 gap-12">
          {ChangeLenght(count, sor).map((item, inx) => (
            <ProductItem key={inx} item={item} />
          ))}
        </div>
        <div
          className="bg-[#EAEAF9] w-fit mx-auto my-2 px-[15px] py-[5px] text-[#3333CC]"
          onClick={() => {
            if (count <= arr.length) {
              setCount(count + 20);
            } else {
              setCount(10);
            }
          }}
        >
          {count < arr.length ? "Показать еще " : "Свернуть"}
        </div>
      </div>
      {cotigor.map((item, inx) => (
        <Recomendations key={inx} type={item} />
      ))}

    </>
  );
};
export default Home;
