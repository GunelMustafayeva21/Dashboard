import { useAppSelector } from "@/redux/store"
import { Urls } from "@/shared/constants/Urls"
import { Link } from "react-router-dom"

//import { UseAppDispatch } from "@/redux/store"
//import {increment, decrement, reset} from "@/redux/feature/Counter/CounterSlice"



const Index = () => {

//const dispatch = UseAppDispatch()
const {basket} = useAppSelector(state=>state.ReducerForBasket)

  return (
    <ul style={{ width:'100vw', display:'flex', justifyContent:'space-evenly', padding:'25px', listStyleType:'none'}}>
        
        <Link to={Urls.HOME}>    <li>Home</li>    </Link>
        <Link to={Urls.ABOUT}>    <li>About</li>    </Link>
        <Link to={Urls.SERVICES}> <li>Services</li> </Link>
        <Link to={Urls.PRODUCTS}> <li>Products</li> </Link>
        
        <Link to={Urls.BASKET} > <li>🛒{basket.length}</li> </Link>


        {/* <button onClick={()=>dispatch(increment(5))}>Increase</button>
        <button onClick={()=>dispatch(decrement(5))}>Decrease</button>
        <button onClick={()=>dispatch(reset())}>Reset</button> */}
    </ul>
  )
}

export default Index
