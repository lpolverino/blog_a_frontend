import { useEffect, useState } from "react";
import fetchApi from "../../../fetch/fetchApi";
import { useNavigate } from "react-router";

const PostsDisplayer = () => {

  const [posts, setPosts] = useState([]);
  const [isLoadiing, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    const getPosts = async () => {
      try{
        const response = await fetchApi.getPosts(localStorage.getItem("token"))        
        setPosts(response)
      } catch(err){
        console.error(err);
        setError(err)
      } finally{
        setIsLoading(false)
      }
    }
    getPosts()
  }, [])

  const render = () =>{
        return (<>
            <ul>
                {posts
                .map(post => <li 
                  onClick={()=>navigate("/post/"+post.id, {replace:true})}
                  key={post.id}>
                    {post.title}
                  </li>)}
            </ul>
        </>)
    }

  return (
        <div>
            {isLoadiing ? "Loading.."
                : error ? <ErrorInput error={error}></ErrorInput> : render()
            }
        </div>
    )
}


export default PostsDisplayer