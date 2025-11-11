import { Link } from "react-router"


const PostCard = ({post}) => {
  return (
        <><Link to={"/post/"+post.id}>
            <p>{post.title}</p>
            <p>By:{post.author.Name}</p>
        </Link>
        </>
    )
}

export default PostCard