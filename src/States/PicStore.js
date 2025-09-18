import {create} from "zustand"

export const picStore = create((set)=>({
    pic: "/profPic.jpg",
    cover: "/cover.jpg",
    err: "/error.svg",
    upvote: "/upvote.svg",
    upvoted: "/upvoted.svg"
}))