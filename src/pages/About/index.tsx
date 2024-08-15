import React from 'react'
import { useAppSelector } from '@/redux/store'

const Index:React.FC = () => {

  const {counter}= useAppSelector(state=>state.ReducerForCounter)
  //const counter= useAppSelector(state=>state.ReducerForCounter.counter)

  return (
    <div>
      <h2>You see rn counter in Redux: {counter}</h2>
    </div>
  )
}

export default Index
