import React from 'react';
import RenderIf from "@/shared/components/RenderIf"
import { Link, Outlet } from 'react-router-dom'
import { useGetProductsQuery } from '@/redux/api/products'



import { addProduct } from "@/redux/feature/Basket/BasketSlice"
import { UseAppDispatch } from '@/redux/store'

const Index: React.FC = () => {

  const dispatch = UseAppDispatch()
  const { data, isFetching, isError } = useGetProductsQuery()


  console.log(data, isFetching, isError)
  return (

    <React.Fragment>

      <RenderIf condition={isFetching}>
        <h2>Loading...</h2>
      </RenderIf>

      <RenderIf condition={isError}>
        <h2>Something went wrong...</h2>
      </RenderIf>

      <RenderIf condition={!isError && !isFetching && data?.length}>
        <div style={{ paddingTop: '25px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', rowGap: '20px' }}>
          {
            data?.map((product) => (

              <React.Fragment >

                {/* Maybe you think for products/1 you must write like this   
             <Link to={`/${product?.id}`}></Link>
             Noooo */}

                <Link to={`${product?.id}`}>
                  <div style={{ width: '300px', height: '300px', border: '3px solid black' }} key={product?.id}>
                    <img height='150' width='150' src={product.image} alt="" />
                    <br />
                    <span>Title: {product.title}</span>
                    <br />
                    <span>Rating: {product.rating.count}</span>
                    <br />
                    <span>Price: {product.price}</span>
                    <br />

                    <button onClick={(e) => { e.preventDefault(); dispatch(addProduct(product)) }}>Add To Cart</button>
                  </div>
                </Link>


              </React.Fragment>


            ))
          }
          <Outlet />
        </div>
      </RenderIf>
    </React.Fragment>
  )
}

export default Index
