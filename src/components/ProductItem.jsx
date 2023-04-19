// import { red } from "@mui/material/colors";
import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
const ProductItem = ({ item, ChangeLike }) => {
  //   const [like, setlike] = useState(true);
  return (
    <div className="h-fit w-[230px]    relative  mx-auto ">
      <div className="w-full">
        <img className="w-full" src="/icons/goods.jpg" alt="" />
      </div>
      <h1 className=" text-sm font-medium">
        {item.name}
      </h1>

      <div className="w-full">
        <p className=" text-[#ACACAC] text-sm font-medium TransTex">
          {item.price} сум
        </p>
        <p className=" text-sm font-medium">
          {item.price - (item.price / 100) * item.sale}
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
      <Link to={"/product/" + item.id}>
        <SlBasket className="basket" />
      </Link>
    </div>
  );
};

export default ProductItem;
