import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: JSON.parse(localStorage.getItem("liked")) || [],
  data_id: JSON.parse(localStorage.getItem("liked_id")) || [],
};

export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addLiked: (state, action) => {
      state.data = [...state.data, action.payload];
      state.data_id = [...state.data_id, action.payload.id];
      localStorage.setItem("liked", JSON.stringify(state.data));
      localStorage.setItem("liked_id", JSON.stringify(state.data_id));
    },
    removeLiked: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
      state.data_id = state.data_id.filter(
        (item) => item !== action.payload.id
      );
      localStorage.setItem("liked", JSON.stringify(state.data));
      localStorage.setItem("liked_id", JSON.stringify(state.data_id));
    },
  },
});

export const { addLiked, removeLiked } = likedSlice.actions;

export default likedSlice.reducer;
