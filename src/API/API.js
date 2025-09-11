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

export const getPost = async (id) => {
    const res = await axiosClient.get(`/posts/${id}`)
    return res.data
}

export const removePost = async (post_id) =>{
    const res = await axiosClient.delete(`/posts/${post_id}`)
}

export const addNewPost = async(category,title,desc) => {
    const res = await axiosClient.post('/posts',{
        post_category:category,
        post_title:title,
        post_description:desc
    });
    return res.data;
}

export const editPost = async (category,title,desc,id) => {
    const res = await axiosClient.put(`/posts/${id}`,{
        post_category:category,
        post_title:title,
        post_description:desc
    })
    return res.data
    // setPosts(p => p.map(post => post.post_id === post_id ? { ...post, ...res.data } : post));
}