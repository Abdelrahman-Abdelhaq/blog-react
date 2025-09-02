import {create} from "zustand"

export const profilePicStore = create((set)=>({
    pic: "/profPic.jpg",
}))