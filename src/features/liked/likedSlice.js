import { createSlice } from "@reduxjs/toolkit";
import { deleteLikeAPI, getLikeAPI, pathLikeAPI, postLikeAPI } from "../goods/thunk";

const initialState = {
  data: [],
  data_id: [],
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
  extraReducers(builder) {
    builder
      .addCase(getLikeAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getLikeAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.data_id = action.payload.map(item => item.id)
        state.status = "fulfilled";
        // console.log(state.data_id);

      })
      .addCase(getLikeAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(postLikeAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(postLikeAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.data_id = action.payload.map(item => item.id)
        state.status = "fulfilled";
        // console.log(state.data);
      })
      .addCase(postLikeAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(pathLikeAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(pathLikeAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.data_id = action.payload.map(item => item.id)
        state.status = "fulfilled";
        console.log(state.data);
      })
      .addCase(pathLikeAPI.rejected, (state, action) => {
        state.status = "rejected";
      })
      .addCase(deleteLikeAPI.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteLikeAPI.fulfilled, (state, action) => {
        state.data = action.payload;
        state.data_id = action.payload.map(item => item.id)
        state.status = "fulfilled";
        console.log(state.data);
      })
      .addCase(deleteLikeAPI.rejected, (state, action) => {
        state.status = "rejected";
      });
    },
});

export const { addLiked, removeLiked } = likedSlice.actions;

export default likedSlice.reducer;
