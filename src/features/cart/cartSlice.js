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
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    removeCart: (state, action) => {
      let cop = [...state.data];
      cop = state.data.filter((item) => item.id !== action.payload.id);
      state.data = cop;

      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    changeCountPlus:(state, action) => {
     
      state.data.forEach(item => {
          if(item.id === action.payload.id){
            item.count++
          }
        });
    
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    changeCountMinus:(state, action) => {
     
      state.data.forEach(item => {
          if(item.id === action.payload.id){
            item.count--
          }
        });
    
      localStorage.setItem("cart", JSON.stringify(state.data));
    },
    aa:(state, action)=>{
      let n = {
        ...action.payload.good,
        count: action.payload.count,
      };

      state.data.splice(action.payload.idx, 1, n);
      state.data = [...state.data]
      localStorage.setItem("cart", JSON.stringify(state.data));
    }
  },
});

export const { addCart, removeCart ,changeCountPlus , changeCountMinus , aa } = cartSlice.actions;

export default cartSlice.reducer;
