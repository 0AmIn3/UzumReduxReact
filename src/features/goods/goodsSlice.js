import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    data:[
        {
            name: "la",
            price: 230000,
            sale: 15,
            like: false,
            id: 1,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touchs, автомат, 3 кг",
            price: 230000,
            sale: 20,
            like: false,
            id: 2,
          },
          {
            name: "автомат ",
            price: 230000,
            sale: 15,
            like: false,
            id: 3,
          },
          {
            name: " Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 10,
            like: false,
            id: 4,
          },
          {
            name: "порошок",
            price: 230000,
            sale: 30,
            like: false,
            id: 5,
          },
          {
            name: "Color Lenor Touch",
            price: 230000,
            sale: 50,
            like: false,
            id: 6,
          },
          {
            name: "mas",
            price: 230000,
            sale: 13,
            like: false,
            id: 7,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 8,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 9,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 10,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 11,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 12,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 13,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 20,
            like: false,
            id: 14,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 15,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 10,
            like: false,
            id: 16,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 30,
            like: false,
            id: 17,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 50,
            like: false,
            id: 18,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 13,
            like: false,
            id: 19,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 20,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 21,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 22,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 23,
          },
          {
            name: "Cтиральный порошок Tide, Color Lenor Touch, автомат, 3 кг",
            price: 230000,
            sale: 15,
            like: false,
            id: 24,
          },
    ]
}


export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers:{
        getGoods: (state , action) =>{
            state.data = state.data
        }
    }
})



export const{getGoods} =goodsSlice.actions

export default goodsSlice.reducer