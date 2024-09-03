import { createApi} from "@reduxjs/toolkit/query/react";
import { APIBaseQuery } from "../axiosBase";
import { IAuth } from "./types";
import { setToken, setUser } from "@/redux/feature/User/UserSlice";
import { ILogin} from "@/redux/feature/User/types";


export const authApi= createApi({
    reducerPath:'auth',
    baseQuery:APIBaseQuery,
    endpoints:(builder)=>({
       loginUser: builder.mutation<Pick<ILogin, "token" | "refreshToken" | "expiresAt">, IAuth>({
         query(data:IAuth){
            return {
                url:'auth/admin/token',
                method:'POST',
                data
            }
         },
         
        async onQueryStarted(_args, { dispatch, queryFulfilled }) {
            try {
                console.log('Query started with args:', _args);
                const { data } = await queryFulfilled;
                console.log('Query fulfilled with data:', data);
                dispatch(setToken(data));
                dispatch(authApi.endpoints.getUser.initiate(null));
            } catch (error) {
                console.error('Login User Catch', error);
            }
        }

       }),
       getUser: builder.query({
          query(){
            return {
                url:'auth/profile',
                method:'GET'                
            }
          },
          async onQueryStarted(_args, {dispatch, queryFulfilled}){
            try{
                const { data } = await  queryFulfilled
                dispatch(setUser(data))                
            }
            catch(error){
                console.log("Get User Catch",error)
            }
        }
          
       })
    })

})

export const {useLoginUserMutation}= authApi