import axios from "axios";

const axiosClient = axios.create({
    baseURL:"http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchPost = async (setPosts) =>{
    const res = await axiosClient.get("/posts")
    setPosts(res.data)
} 