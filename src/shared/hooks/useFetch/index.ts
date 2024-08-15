import {useEffect, useState} from "react"

interface IUrl{
  url:string
}

const useFetch=({url}:IUrl) =>{

const [data, setData]= useState<any[]>([])
const [isLoading, setIsLoading]= useState<boolean>(false);
const [isError, setIsError]= useState<boolean>(false);

const fetchData=()=>{
  setIsLoading(true);
  fetch(url)
  .then(res=>res.json())
  .then(res=>setData(res))
  .catch(()=>setIsError(true))
  .finally(()=>setIsLoading(false))
}

useEffect(()=>{
   fetchData()
}, [])

  return {data, isLoading, isError}
}

export default useFetch
