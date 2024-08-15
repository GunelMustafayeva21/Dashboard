import React from 'react'

import { UseAppDispatch, useAppSelector } from '@/redux/store'
import { deleteProductById, deleteAll } from "@/redux/feature/Basket/BasketSlice"

const Index: React.FC = () => {

    const { basket, totalPrice } = useAppSelector(state => state.ReducerForBasket)
    const dispatch = UseAppDispatch()

    return (

        <>
          <h2>Total Price : {totalPrice.toFixed(2)}</h2>
          <button onClick={() => { dispatch(deleteAll()) }}>Clean Basket</button>
          
        <div style={{ paddingTop: '25px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', rowGap: '20px' }}>

            {basket && basket?.map((pro) => (

                <React.Fragment >
                    <div style={{ width: '300px', height: '300px', border: '3px solid black' }} key={pro?.id}>
                        <img height='150' width='150' src={pro.image} alt="" />
                        <br />
                        <span>Title: {pro.title}</span>
                        <br />
                        <span>Rating: {pro.rating.count}</span>
                        <br />
                        <span>Price: {pro.price}</span>
                        <br />
                        <button onClick={()=>{dispatch(deleteProductById(pro.id))}}>Delete</button>
                    </div>
                </React.Fragment>
            ))
            }

        </div>
        </>
    )
}

export default Index
