import { create } from "zustand";

export const userStore = create((set)=>({
    username: "Abdelrahman",
    email: "abdelrahman@gmail.com",
    setUser: (value) => set({username:value}),
    setEmail: (value) => set({email: value})
}))