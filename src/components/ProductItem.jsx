// import { red } from "@mui/material/colors";
import React, { useContext, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";
import { basketCTX } from "../contexts/basketCTX";
import { addLiked, removeLiked } from "../features/liked/likedSlice";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../features/cart/cartSlice";
import { deleteLikeAPI, postLikeAPI } from "../features/goods/thunk";
const ProductItem = ({ item }) => {
  const liked_id = useSelector((state) => state.liked.data_id);
  const dispath = useDispatch();

  return (
    <div className="h-fit w-[230px]    relative  mx-auto ">
      <div className="w-full">
        <Link className="w-full" to={"/product/" + item.id }>
          <img className="w-full" src={item.media[0]} alt="" />
        </Link>
      </div>
      <h1 className=" text-sm font-medium">{item.title}</h1>

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
      {liked_id.includes(item.id) ? (
        <AiFillHeart
          className="like"
          onClick={() => {
            dispath(removeLiked(item));
            dispath(deleteLikeAPI(item.id));

          }}
          style={{ color: "red", fontSize: "30px" }}
        />
      ) : (
        <AiOutlineHeart
          className="like"
          onClick={() => {
            dispath(addLiked(item));
            dispath(postLikeAPI(item));
          
          }}
          style={{ fontSize: "30px" }}
        />
      )}

      <SlBasket className="basket" onClick={() => dispath(addCart({good: item , count: 1}))} />
    </div>
  );
};

export default ProductItem;
