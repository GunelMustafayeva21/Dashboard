import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin, IUser } from "./types";
import { revertAll } from "@/redux/api/constants";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

let initialState:ILogin={
   user:{ 
    id:"",
    userName:"",
    firstName:"",
    lastName:"",
    email:""
   },
   token:"",
   refreshToken:"",
   expiresAt:""

};


export const UserSlice =createSlice({
    name: 'user',
    initialState,
    reducers:{
        setToken:(state:ILogin, action:PayloadAction<Pick<ILogin, "token" | "refreshToken" | "expiresAt">>)=>{
         const {token,expiresAt,refreshToken} = action.payload;
           return {
            ...state,
            token,
            expiresAt,
            refreshToken
           }
        },
        setUser:(state:ILogin, action:PayloadAction<IUser>)=>{
           state.user = action.payload;
        }
    },
    extraReducers:(builder)=>{builder.addCase(revertAll, ()=>initialState)}
})


export const reducer = persistReducer({
   key: 'user',
   storage,
   whitelist:[
       "user",
       "token",
       "refreshToken",
       "expiresAt"
   ]
},
UserSlice.reducer
)

export const {setToken, setUser} = UserSlice.actions
export default reducer