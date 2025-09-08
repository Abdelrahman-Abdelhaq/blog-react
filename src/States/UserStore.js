import { create } from "zustand";

export const userStore = create((set)=>({
    firstName: "Abdelrahman",
    lastName: "Alaa",
    email: "abdelrahman@gmail.com",
    about: "Crafting pixels into perfection,Designer by day, coder by night ,Turning ideas into interactive experiences",
    setFirstName: (value) => set({firstName:value}),
    setLastName: (value) => set({lastName:value}),
    setEmail: (value) => set({email: value}),
    setAbout: (value) => set({about:value})
}))