import {create} from "zustand"

export const picStore = create((set)=>({
    pic: "/avatar.svg",
    cover: "/cover.jpg",
    err: "/error.svg",
    upvote: "/upvote.svg",
    upvoted: "/upvoted.svg",
    signups: "/signups.svg",
}))