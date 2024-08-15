import useFetch from "@/shared/hooks/useFetch"
import RenderIf from "@/shared/components/RenderIf"

const Services = () => {

    const {data, isError, isLoading} = useFetch({url:"https://jsonplaceholder.org/posts/1"})
 
    let post:any =[data]
  return (
    <div>
       <RenderIf condition={isLoading}>
           <h1>Loading...</h1>
        </RenderIf>
        <RenderIf condition={isError}>
           <h1>Hey Error...</h1>
        </RenderIf>
        <RenderIf condition={!isError && !isLoading }>
           {
               <p>{post?.[0]?.id} ---- {post?.[0]?.title}</p>
           }
        </RenderIf>

    </div>
  )
}

export default Services
