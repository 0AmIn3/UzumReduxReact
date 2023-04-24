import { configureStore } from "@reduxjs/toolkit";
import goodsSlice from "../features/goods/goodsSlice";
import likedSlice from "../features/liked/likedSlice";
import cartSlice from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    goods: goodsSlice,
    liked: likedSlice,
    cart: cartSlice,
  },
});
