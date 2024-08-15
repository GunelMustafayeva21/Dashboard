import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILogin, IUser, IToken } from "./types";
import { revertAll } from "@/redux/api/constants";

let initialState:ILogin={
   user:{ 
    id:"",
    userName:"",
    firstName:"",
    lastName:"",
    email:""
   },
   tokens:{
    token:"",
    refreshToken:"",
    expiresAt:""
   } 
};

export const UserSlice =createSlice({
    name: 'user',
    initialState,
    reducers:{
        setToken:(state:ILogin, action:PayloadAction<IToken>)=>{
           state.tokens=action.payload
        },
        setUser:(state:ILogin, action:PayloadAction<IUser>)=>{
           state.user = action.payload;
        }
    },
    extraReducers:(builder)=>{builder.addCase(revertAll, ()=>initialState)}
})

export const {setToken, setUser}= UserSlice.actions
export default UserSlice.reducer