import axios from "axios";

const axiosClient = axios.create({
    baseURL:"http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchPost = async (setPosts,offset,limit) =>{
    const res = await axiosClient.get(`/posts?limit=${limit}&offset=${offset}`)
    setPosts(p => [...p,...res.data])
} 