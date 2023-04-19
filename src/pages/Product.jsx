import React, { useContext, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { mainArrCTX } from "../contexts/mainArrCTX";
import { useParams } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Button } from "@mui/material";
import ProductItem from "../components/ProductItem";
import { basketCTX } from "../contexts/basketCTX";
// import "./styles.css";

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { arr, setArr, ChangeLike } = useContext(mainArrCTX);
  const { basket, setBasket, AddToBasket } = useContext(basketCTX);
  const { id } = useParams();
  let i = arr.filter((item) => item.id == id)[0];
  const [count, setCount] = useState(1);

  function ChangeLenght(len, ar) {
    return ar.slice(0, len);
  }
  return (
    <div>
      <div className="w-full flex gap-[54px] med pt-[120px] h-[506px]">
        <div className="w-[300px] med2 mx-auto my-0  h-[506px]">
          <div className="">
            <Swiper
              spaceBetween={10}
              navigation={true}
              // thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation]}
              className="mySwiper2 "
            >
              {i.media.map((item) => (
                <SwiperSlide>
                  <img className="w-full" src={item}/>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className="">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper "
            >
              {arr.map((item) => (
                <SwiperSlide>
                  <img className="w-full" src="/icons/goods.jpg" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </div>
        <div className="w-[50%] prodInf mx-auto my-0  py-9">
          <div className="flex flex-col gap-[26px]">
            <h1>Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг</h1>
            <div className="flex gap-4">
              <p className=" text-sm font-medium">
                {i.price - (i.price / 100) * i.salePercentage}
              </p>
              <p className=" text-[#ACACAC] text-sm font-medium TransTex">
                {i.price} сум
              </p>
            </div>
            <div className="w-[89px] px-[10px] flex items-center justify-between h-[30px] counter">
              <AiOutlineMinus onClick={() => setCount(count - 1)} />
              <p>{count}</p>
              <AiOutlinePlus onClick={() => setCount(count + 1)} />
            </div>
            <hr />
            <p className=" text-sm font-normal">
              Станьте востребованным разработчиком. Вы изучите основы
              программирования и основные концепции компьютерных наук, цифровые
              технологии, операционные системы, программное обеспечение, базы
              данных, системы аналитики, языки программирования и многое другое.
              Познакомитесь с тестированием и системным анализом. На программе
              сможете сделать осознанный выбор специализации и технологий,
              прокачаться в выбранном направлении.
            </p>
            <div className="flex opt gap-3">
              <Button
                sx={{
                  "&:hover": {
                    color: "white",
                    backgroundColor: "#7000FF",
                    border: "#7000FF 1px solid",
                  },
                  backgroundColor: "#7000FF",
                  border: "#7000FF 1px solid",
                }}
                variant="contained"
                disableElevation
                onClick={() => AddToBasket(i, count)}
              >
                Добавить в корзину
              </Button>
              {i.like ? (
                <Button
                  variant="outlined"
                  onClick={() => {
                    ChangeLike(i, false);
                  }}
                  key={1}
                  sx={{
                    color: "white",
                    border: "#7000FF 1px solid",
                    backgroundColor: "#7000FF",

                    "&:hover": {
                      color: "white",
                      backgroundColor: "#7000FF",
                    },
                  }}
                >
                  Удалить из избранного
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={() => {
                    ChangeLike(i, true);
                  }}
                  key={1}
                  sx={{
                    color: "#7000FF",
                    border: "#7000FF 1px solid",
                    "&:hover": {
                      color: "#7000FF",
                      border: "#7000FF 1px solid",
                    },
                  }}
                >
                  Добавить в избранное
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="center w-[60%] prodInf mx-auto my-0 mt-20">
        <h1 className=" text-xl font-medium">Описание товара</h1>
        <p className=" text-sm font-normal">
          {i.description}
        </p>
      </div>
      <div className="mt-20">
        <h1 className="text-[32px] font-semibold ">Похожие товары</h1>
        <div className=" grid grid-cols-5 py-8 gap-12">
          {ChangeLenght(5, arr).map((item, inx) => (
            <ProductItem key={inx} ChangeLike={ChangeLike} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
