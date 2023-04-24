import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("cart")) || [],
};
export const cartSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addCart: (state, action) => {
      let cop = [...state.data];

      cop = state.data.filter((item) => item.id !== action.payload.good.id);

      let nev = {
        ...action.payload.good,
        count: action.payload.count,
      };
      cop.push(nev);
      state.data = [...cop];
      console.log(state.data);
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    removeCart: (state, action) => {
      let cop = [...state.data];
      cop = state.data.filter((item) => item.id !== action.payload.id);
      state.data = cop;
      console.log(action.payload.id, state.data);

      localStorage.setItem("cart", JSON.stringify(state.data));
    },
  },
});

export const { addCart, removeCart } = cartSlice.actions;

export default cartSlice.reducer;
