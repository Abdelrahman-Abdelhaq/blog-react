import axios from "axios";

const axiosClient = axios.create({
    baseURL:"http://localhost:3000",
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchPost = async (setPosts,offset,limit) =>{
    const res = await axiosClient.get(`/posts?limit=${limit}&offset=${offset}`)
    if(!res){
        setPosts([{
    "post_id": 153,
    "post_category": "Software Engineering",
    "post_title": "Post Title12",
    "post_description": "Post Descriptionasdsad",
    "post_date": "2025-09-02T21:00:00.000Z"
  },
  {
    "post_id": 154,
    "post_category": "Design",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-02T21:00:00.000Z"
  },
  {
    "post_id": 155,
    "post_category": "Design",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-02T21:00:00.000Z"
  },
  {
    "post_id": 156,
    "post_category": "Design",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-02T21:00:00.000Z"
  },
  {
    "post_id": 157,
    "post_category": "Design",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-02T21:00:00.000Z"
  },
  {
    "post_id": 158,
    "post_category": "Design",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-02T21:00:00.000Z"
  },
  {
    "post_id": 159,
    "post_category": "Design",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-02T21:00:00.000Z"
  },
  {
    "post_id": 160,
    "post_category": "Design",
    "post_title": "Post Title",
    "post_description": "Post Description",
    "post_date": "2025-09-02T21:00:00.000Z"
  }])
    }
    else{
        setPosts(p => [...p,...res.data])
    }
} 

export const deletePost = async (post_id,setPosts) =>{
    const res = await axiosClient.delete(`/posts/${post_id}`)
    setPosts(p => p.filter((p)=>(p.post_id !== post_id)))
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