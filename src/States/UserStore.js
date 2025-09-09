import { create } from "zustand";

export const userStore = create((set)=>({
    firstName: "Abdelrahman",
    lastName: "Alaa",
    email: "abdelrahman@gmail.com",
    setFirstName: (value) => set({firstName: value}),
    setLastName: (value) => set({lastName:value}),
    setEmail: (value) => set({email: value}),
    editFirst:"",
    editLast:"",
    editEmail:"",
    setEditFirst: (value) => set({editFirst:value}),
    setEditLast: (value) => set({editLast:value}),
    setEditEmail: (value) => set({editEmail:value})
}))