import {create} from "zustand"

export const picStore = create((set)=>({
    pic: "/profPic.jpg",
    cover: "/cover.jpg",
}))