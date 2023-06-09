import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";


export const getGoodAPI = createAsyncThunk('goods/getGoodAPI', async () => {
    const res = await axios.get('https://goodsapi-e2a79-default-rtdb.europe-west1.firebasedatabase.app/goods.json')

    return res.data
})
export const postGoodAPI = createAsyncThunk('goods/postGoodAPI', async (data) => {
    const res = await axios.post('http://localhost:3001/goods' , data)

    return res.data
})
export const pathGoodAPI = createAsyncThunk('goods/pathGoodAPI', async (data) => {
    const res = await axios.patch('http://localhost:3001/goods/'+ data.id , data.path)

    return res.data
})
export const deleteGoodAPI = createAsyncThunk('goods/deleteGoodAPI', async (data) => {
    const res = await axios.delete('http://localhost:3001/goods/'+ data)

    
    return res.data
})

export const getLikeAPI = createAsyncThunk('goods/getLikeAPI', async () => {
    const res = await axios.get('http://localhost:3001/likes')

    return res.data
})
export const postLikeAPI = createAsyncThunk('goods/postLikeAPI', async (data) => {
    const res1 = await axios.post('http://localhost:3001/likes' , data)
    const res = await axios.get('http://localhost:3001/likes')
    return res.data
})
export const pathLikeAPI = createAsyncThunk('goods/pathLikeAPI', async (data) => {
    const res = await axios.get('http://localhost:3001/likes')

    const res1 = await axios.patch('http://localhost:3001/likes/'+ data.id , data.path)

    return res.data
})
export const deleteLikeAPI = createAsyncThunk('goods/deleteLikeAPI', async (data) => {
    const res1 = await axios.delete('http://localhost:3001/likes/'+ data)
    const res = await axios.get('http://localhost:3001/likes')
    return res.data
})