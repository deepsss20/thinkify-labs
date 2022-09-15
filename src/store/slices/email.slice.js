import { createSlice } from "@reduxjs/toolkit";

const emailSlice = createSlice({
    name: "emailSlice",
    initialState:{
        read:[],
        favourites:[]
    },
    reducers:{
        readHandler(state,params){
            state.read.push(params.payload)
        },
        addFavHandler(state,params){
            state.favourites.push(params.payload)
        },
        removeFavHandler(state,{payload}){
            state.favourites = state.favourites.filter(ele=>ele!==payload)
        }
    }
})

export const emailActions = emailSlice.actions
export default emailSlice