import React from 'react'
import RenderIf from '@/shared/components/RenderIf'
import {  useParams } from 'react-router-dom'
import { useLazyGetProductByIdQuery } from '@/redux/api/products'


const Index:React.FC = () => {

const {id} = useParams();

//You can rename like: const [getByIdLazy, {data:products, isFetching:fetchingForProduct, isError:productError}] = useLazyGetProductByIdQuery()
const [getByIdLazy, {data, isFetching, isError, error}] = useLazyGetProductByIdQuery()
console.log(error)
React.useEffect(() => {
  if (id) {
    getByIdLazy(Number(id));
  }
}, [id]);

  return (
    <div >

      <RenderIf condition={isFetching}>
       <h2>Loading...</h2>
     </RenderIf>
     <RenderIf condition={isError}>
       <h2>Something went wrong...</h2>
     </RenderIf>

     <RenderIf condition={!isError && !isFetching && Object.keys(data || {})?.length }>
     {
       <div style={{width:'300px', height:'300px', border:'3px solid black'}} key={data?.id}>
           <img height='150' width='150' src={data?.image} alt="" />
           <br />
           <span>Title: {data?.title}</span>
           <br />
           <span>Rating: {data?.rating.count}</span>
           <br />
           <span>Price: {data?.price}</span>
       </div>
 }
     </RenderIf>
    </div>
  )
}

export default Index

