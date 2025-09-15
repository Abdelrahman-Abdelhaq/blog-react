import axios from "axios";

const axiosClient = axios.create({
    baseURL:"http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
});

const dummy = [
  {
    "post_id": 179,
    "post_category": "Management",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-10T21:00:00.000Z"
  },
  {
    "post_id": 180,
    "post_category": "Customer Success",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-10T21:00:00.000Z"
  },
  {
    "post_id": 181,
    "post_category": "Software Engineering",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-10T21:00:00.000Z"
  },
  {
    "post_id": 182,
    "post_category": "Design",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-10T21:00:00.000Z"
  }
]

export const getPosts = async (offset,limit) => {
    try {
    const res = await axiosClient.get(`/posts?limit=${limit}&offset=${offset}`)
    return res.data
    } catch (error) {
        alert("Server Error, now you are seeing Dummy Data!")
      return  dummy 
    }
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
}