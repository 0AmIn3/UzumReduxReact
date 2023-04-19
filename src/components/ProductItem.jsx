// import { red } from "@mui/material/colors";
import React, { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { basketCTX } from "../contexts/basketCTX";
const ProductItem = ({ item, ChangeLike }) => {
  //   const [like, setlike] = useState(true);
  const { basket, setBasket, AddToBasket } = useContext(basketCTX);

  return (
    <div className="h-fit w-[230px]    relative  mx-auto ">
      <div className="w-full">
        <Link className="w-full" to={"/product/" + item.id}>
          <img className="w-full" src={item.media[0]} alt="" />
        </Link>
      </div>
      <h1 className=" text-sm font-medium">{item.title}</h1>

      <div className="w-full">
        <p className=" text-[#ACACAC] text-sm font-medium TransTex">
          {item.price}
        </p>
        <p className=" text-sm font-medium">
          {item.price - (item.price / 100) * item.salePercentage}
        </p>
      </div>
      {item.like ? (
        <AiFillHeart
          className="like"
          onClick={() => {
            ChangeLike(item, false);
          }}
          style={{ color: "red", fontSize: "30px" }}
        />
      ) : (
        <AiOutlineHeart
          className="like"
          onClick={() => {
            ChangeLike(item, true);
          }}
          style={{ fontSize: "30px" }}
        />
      )}

      <SlBasket className="basket" onClick={() => AddToBasket(item, 1)} />
    </div>
  );
};

export default ProductItem;
