import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { IProduct } from "@/pages/Products/types";


const url= "https://fakestoreapi.com/";


export const productsApi= createApi({
    reducerPath:'products',
    baseQuery:fetchBaseQuery({baseUrl:url}),
    endpoints:(builder)=>({
       getProducts: builder.query<IProduct[], void>({
         query(){
            return {
                url:'products',
                method:'GET'
            }
         }
       }),
       getProductById: builder.query<IProduct, number>({
        query(id){
           return {
               url:`products/${id}`,
               method:'GET'
           }
        }
      })
    })

})

export const {useGetProductsQuery, useLazyGetProductByIdQuery}= productsApi