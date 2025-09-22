import { create } from "zustand";
import { addNewComment, getComments } from "../API/API";

const commentStore = create((set) => ({
    comments:[],
    fetchComments: async (id) => {
        const data = await getComments(id)
        set({comments: [...data]})
    },
    comment: "",
    setComment: (value) => set({comment:value}),
    addComment: async (para,id) => {
        const data = await addNewComment(para,id)
        set((state) => ({comments: [...state.comments,data]}))
    },
}))


export default commentStore