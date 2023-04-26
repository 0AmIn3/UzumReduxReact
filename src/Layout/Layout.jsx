import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Headerr from "../components/Headerr";
import { mainArrCTX } from "../contexts/mainArrCTX";
import { basketCTX } from "../contexts/basketCTX";
import { useDispatch, useSelector } from "react-redux";
import { addLiked } from "../features/liked/likedSlice";
import { getGoodAPI, getLikeAPI, postGoodAPI } from "../features/goods/thunk";

const Layout = () => {
  const goods = useSelector((state) => state.goods.data);
  const liked = useSelector((state) => state.liked.data);
  const liked_id = useSelector((state) => state.liked.data_id);
  const [cart, setCart] = useState(useSelector((state) => state.cart.data));
  // console.log(liked, liked_id ,cart );
	const dispatch = useDispatch();

  useEffect(() => {
    // console.log(cart  );
  } , [cart])
	useEffect(() => {
		if(!goods.length) {
			dispatch(getGoodAPI())
      
		}
    if(!liked.length){
      dispatch(getLikeAPI())
    }
	}, []);
 

  return (
        <div className="w-[80%] max-w-[1728px] mx-auto my-0" >
          <Headerr className="max-w-[1728px] " />
          <main className="pt-[120px]">
            <Outlet />
          </main>
        </div>
  );
};

export default Layout;
