import { create } from "zustand";
import { addNewPost, editPost, getPost, getPosts, removePost } from "../API/API";


export const postsStore = create((set,get) => ({
    posts: [],
    post:{},
    loading: true,
    error: false,
    fetchPosts: async(offset,limit) => {
        try {
            const data = await getPosts(offset,limit)
            set((state) => ({
                posts: [...state.posts,...data],
                loading:false
            }))
        } catch (err) {
            console.error(err)
            set({
                loading:false,
                error:alert("Server Error No Posts Available")
            })
        }
    },
    fetchPost: async (id) => {
        try {
            const data = await getPost(id)
            set({post: data})
        } catch (err) {
            console.error(`${err} at states postsstore starting from line 24`)
        }
    },
    addPost: async (category,title,desc,para) => {
        try {
            const data = await addNewPost(category,title,desc,para)
            set((state) => ({
                posts: [...state.posts,data]
            }))    
        } catch (err) {
            console.error(err)
            alert("Server Error, Failed to Add New Post!")
        }
    },
    deletePost: async (id) => {
        const filterdPosts = get().posts.filter((p)=>(p.post_id!==id))
        const tempPosts = get().posts
        set({
                posts: filterdPosts
            })
        try {
            await removePost(id)
            console.log("Removed Successfully")
        } catch (err) {
            console.error(err)
            set({
                posts: tempPosts
            })
        }
    },
    updatePost: async(category,title,desc,id) => {
        const tempPosts = get().posts
        const tempData = {
            post_category:category,
            post_title:title,
            post_description:desc
        }
        set((state) => ({
            posts: state.posts.map((p) => (p.post_id === id ? {...p,...tempData} : p))
        }))
        try {  
        const data = await editPost(category,title,desc,id)
        set((state) => ({
            posts: state.posts.map((p) => (p.post_id === id ? {...p,...data} : p))
        }))
        } catch (err) {
            console.error(err)
            set({posts: tempPosts})
        }
    }
}))