import axios from "axios";
import { dummyData } from "./Dummy";

const axiosClient = axios.create({
    baseURL:"http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
});

export const getPosts = async (offset,limit) => {
    const res = await axiosClient.get(`/posts?limit=${limit}&offset=${offset}`)
    return res.data
}

export const deletePost = async (post_id) =>{
    const res = await axiosClient.delete(`/posts/${post_id}`)
    // setPosts(p => p.filter((p)=>(p.post_id !== post_id)))
}

export const addPost = async(Post_category,Post_title,Post_description,setPosts) => {
    const res = await axiosClient.post('/posts',{
        post_category:Post_category,
        post_title:Post_title,
        post_description:Post_description
    });
    setPosts(p => [...p,res.data])
}

export const editPost = async (setPosts,Post_category,Post_title,Post_description,post_id) => {
    const res = await axiosClient.put(`/posts/${post_id}`,{
        post_category:Post_category,
        post_title:Post_title,
        post_description:Post_description
    })
    setPosts(p => p.map(post => post.post_id === post_id ? { ...post, ...res.data } : post));
}