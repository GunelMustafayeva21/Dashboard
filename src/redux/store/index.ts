import { configureStore } from "@reduxjs/toolkit";
import { reducer, middleWares } from "../reducerAndMiddlewares";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


import {persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'


export const store =configureStore({
    reducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[ FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }).concat(middleWares),
    devTools: process.env.NODE_ENV !== "production", 
    
})

export const persistor = persistStore(store)


export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const UseAppDispatch = useDispatch<AppDispatch>