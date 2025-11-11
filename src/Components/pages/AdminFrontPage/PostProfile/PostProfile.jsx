import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import ErrorInput from '../../../Shered/ErrorInput/ErrorInput';
import fetchApi from '../../../../fetch/fetchApi';

const PostProfile = () => {

    const [post,setPost] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, SetError] = useState(null)

    const { postId } = useParams()

    useEffect(()=>{
        const getData = async () =>{
            try {
                const fetchPost = await fetchApi.getPost(localStorage.getItem("token"), postId)
                setPost(fetchPost)
            } catch (err) {
                console.error(err);
                SetError(err)
            } finally {
                setLoading(false)
            }     
        }
        getData()
    },[]);

    const render = () =>{
        return (
        <div>
            <h1>{post.title}</h1>
        </div>
        )
    }
    return (
        <>
            <div>{loading 
                ? <p>Loading..</p> 
                : error 
                ?<ErrorInput error={error}></ErrorInput>
                : post && render()
            }</div>
        </>
    )
}

export default PostProfile