import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, IBasket } from "./types";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

let initialState:IBasket = {
    basket:[],
    totalPrice:0
}

export const Basket = createSlice({
    name: 'Basket',
    initialState,
    reducers: {
        addProduct: (state: IBasket, action: PayloadAction<IProduct>) => {
            state.basket.push(action.payload);
            state.totalPrice = state.basket.reduce((total, cur)=>total+ Number(cur.price), 0)
           
        },
        deleteProductById: (state: IBasket, action: PayloadAction<number>) => {
            state.basket=state.basket.filter((product)=>product.id !== action.payload);
            state.totalPrice = state.basket.reduce((total, cur)=>total+ Number(cur.price), 0)
        },
        deleteAll: () => initialState,
        
    }
})

export const reducer = persistReducer({
    key: 'Basket',
    storage,
    whitelist:[
        "basket",
        "totalPrice"
    ]
},
Basket.reducer
)

export const {addProduct, deleteProductById, deleteAll} = Basket.actions
export default reducer