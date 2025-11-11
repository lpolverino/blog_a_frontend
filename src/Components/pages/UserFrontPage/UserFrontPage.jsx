import { useEffect, useState } from "react"
import ErrorInput from "../../Shered/ErrorInput/ErrorInput";
import fetchApi from "../../../fetch/fetchApi";
import PostCard from "../../Shered/PostCard/PostCard";

const UserFrontPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, SetLoading] = useState(true);
  const [error, SetError] = useState(null);

  useEffect(() => {
    const getPostsData = async () => {
      try {
        const fetchedPost = await fetchApi.getPosts(localStorage.getItem("token"));   
        setPosts(fetchedPost)
      } catch (err) {
        console.error(err);
        SetError(err)
      } finally {
        SetLoading(false);
      }
    }
    getPostsData()
  }, [])

  const renderUserPage = () => {
    return (
      <div>
        <h2>FrontPage</h2>
          <ul>
            {posts.map(post => <li key={post.id}>
              <PostCard post={post}></PostCard>
            </li>)}
          </ul>
      </div>
    )
  }

  return(
    <>
      {loading ? "Loading.."
       : error ? <ErrorInput error={error}></ErrorInput> : renderUserPage()
      }
    </>
  )
}

export default UserFrontPage