import { create } from "zustand";
import { getPosts } from "../API/API";


export const postsStore = create((set) => ({
    posts: [],
    loading: true,
    error: false,
    resetPosts: () => set({posts: []}),
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
                error:"Server Error No Posts Available"
            })
        }
    }
}))