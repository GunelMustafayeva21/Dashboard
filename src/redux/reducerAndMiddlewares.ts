import CounterReducer from "@/redux/feature/Counter/CounterSlice";
import BasketReducer from "@/redux/feature/Basket/BasketSlice";
import UserReducer from "@/redux/feature/User/UserSlice";

import { productsApi } from "@/redux/api/products";
import { authApi } from "./api/auth";
import { assetApi } from "./api/asset";


export const reducer = {
  [productsApi.reducerPath]: productsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [assetApi.reducerPath]:assetApi.reducer,
  ReducerForCounter: CounterReducer,
  ReducerForBasket: BasketReducer,
  user: UserReducer,
};

export const middleWares = [productsApi.middleware, authApi.middleware, assetApi.middleware];
