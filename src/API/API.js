import axios from "axios";
import dummy from "./dummy";

const axiosClient = axios.create({
    baseURL:"http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
});



export const getPosts = async (offset,limit) => {
    try {
    const res = await axiosClient.get(`/posts?limit=${limit}&offset=${offset}`)
    return res.data
    } catch (error) {
        alert("Server Error, now you are seeing Dummy Data!")
        console.error(error)
      return  dummy 
    }
}

export const getPost = async (id) => {
    try {
      const res = await axiosClient.get(`/posts/${id}`)
      return res.data
    } catch (err) {
      console.error(`${err} at api starting from line 23`)
    }
}

export const getComments = async(id) => {
    try {
        const res = await axiosClient.get(`/postpage/${id}`)
        return res.data
    } catch (err) {
        console.error(`${err} at getcomments api starting from line 32`)
    }
}

export const removePost = async (post_id) =>{
    const res = await axiosClient.delete(`/posts/${post_id}`)
}

export const addNewPost = async(category,title,desc,para) => {
    const res = await axiosClient.post('/posts',{
        post_category:category,
        post_title:title,
        post_description:desc,
        post_paragraph:para
    });
    return res.data;
}

export const addNewComment = async(para,id) => {
    try {
        const res = await axiosClient.post(`/postpage/${id}`,{
            comment_paragraph:para
        })
        return res.data
    } catch (err) {
        console.error(`${err} at addnewcomment api from line 54`)
    }
}

export const addNewUser = async(name,mail,pass) => {
   try {
     const res = await axiosClient.post('/signup',{
        user:name,
        mail:mail,
        pass:pass
    })
    return res.status
   } catch (err) {
    if(err.response)
        return err.response.status
   }
}

export const userLoginRequest = async(mail,pass) => {
    try {
        const res = await axiosClient.post('/' ,{
        mail:mail,
        pass:pass
    })
    return res.status
    } catch (err) {
        if (err.response){
            return err.response
        }
    }
}

export const editPost = async (category,title,desc,id) => {
    const res = await axiosClient.put(`/posts/${id}`,{
        post_category:category,
        post_title:title,
        post_description:desc
    })
    return res.data
}