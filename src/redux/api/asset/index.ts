import { createApi} from "@reduxjs/toolkit/query/react";
import { APIBaseQuery } from "../axiosBase";
import { Assets } from "./types";

export const assetApi= createApi({
    reducerPath:'asset',
    baseQuery:APIBaseQuery,
    endpoints:(builder)=>({
        getAssets: builder.query<Assets, void>({
            query(){
              return {
                  url:'asset',
                  method:'GET'                
              }
            }
        })
    })

})
export const {useGetAssetsQuery}= assetApi