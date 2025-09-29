import axios from "axios";
import dummy from "./dummy";
import { authStore } from "../States/AuthStore";

export const axiosClient = axios.create({
    baseURL:import.meta.env.VITE_backend_url,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use((config) => {
  const token = authStore.getState().accessToken;
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error("Interceptor caught error:", {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data
    });

    if (error.response?.status === 403) {
      console.warn("Access token expired. Attempting refresh...");
      const newToken = await refreshAccessToken();
      if (newToken) {
        error.config.headers.authorization = `Bearer ${newToken}`;
        return axiosClient(error.config);
      }
    }

    return Promise.reject(error);
  }
);

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
    },{headers:{authorization:`Bearer ${authStore.getState().accessToken}`}});
    return res.data;
}

export const addNewComment = async(para,id) => {
    try {
        const res = await axiosClient.post(`/postpage/${id}`,{
            comment_paragraph:para
        })
        return res.data
    } catch (err) {
        console.error(`${err} at addnewcomment api from line 57`)
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
        const res = await axiosClient.post('/' ,{mail,pass})
    return {status: res.status , payload: res.data}
    } catch (err) {
        if (err.response){
            return {status: err.response.status , payload: err.response.data}
        }
        return {status: 0 , payload: {message:"Server Error"}}
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

export const refreshAccessToken = async () => {
  try {
    const refreshToken = authStore.getState().refreshToken;
    if (!refreshToken) return null;

    const res = await axiosClient.post("/refresh", {
      refreshToken,
    });

    const newAccessToken = res.data.accessToken;
    authStore.getState().setAccessToken(newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    authStore.getState().setAccessToken(null);
    authStore.getState().setRefreshToken(null);
    window.location.href = "/";
    return null;
  }
};