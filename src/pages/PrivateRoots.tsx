import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Urls } from '@/shared/constants/Urls'
//import Home from "@/pages/Home"
const Home = React.lazy(()=>import("@/pages/Home"))
//import About from "@/pages/About"
const About = React.lazy(()=>import("@/pages/About"))
//import Services from "@/pages/Services"
const Services = React.lazy(()=>import("@/pages/Services"))
const Products = React.lazy(()=>import("@/pages/Products"))
const Product= React.lazy(()=>import("@/pages/Products/Product"))

const Basket = React.lazy(()=>import("@/pages/Basket"))

const PrivateRoots:React.FC = () => {
  return (
    <>
      <Routes>
        <Route index  path={Urls.HOME} element={<Home/>}/>
        <Route path={Urls.ABOUT} element={<About/>}/>
        <Route path={Urls.SERVICES} element={<Services/>}/>
        <Route path={Urls.PRODUCTS} element={<Products/>}/>
        <Route path={`${Urls.PRODUCTS}/:id`} element={<Product/>}/>
        <Route path={Urls.BASKET} element={<Basket/>}/>
      </Routes>
    </>
  )
}

export default PrivateRoots
