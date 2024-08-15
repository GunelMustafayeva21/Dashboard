import CounterReducer from "@/redux/feature/Counter/CounterSlice"
import BasketReducer from"@/redux/feature/Basket/BasketSlice"
import UserReducer from "@/redux/feature/User/UserSlice"

import { productsApi } from "@/redux/api/products";
import { authApi } from "./api/auth";

export const reducer={
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]:authApi.reducer,
   ReducerForCounter:CounterReducer,
   ReducerForBasket:BasketReducer,
   ReducerForUser:UserReducer
  
};

export const middleWares=[
    productsApi.middleware,
    authApi.middleware,
    
    
]