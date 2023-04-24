import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

if (!localStorage.getItem("goods")) {
  axios
    .get("http://localhost:3001/goods")
    .then((res) => localStorage.setItem("goods", JSON.stringify(res.data)));
}

const initialState = {
  data: JSON.parse(localStorage.getItem("goods")),
};

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    getGoods: (state, action) => {
      state.data = state.data;
    },
  },
});

export const { getGoods } = goodsSlice.actions;

export default goodsSlice.reducer;
