import { create } from "zustand";

export const modalStore = create((set)=>({
    category: "Design",
    title:"Post Title",
    desc:"Post Description",
    setCategory: (value) => set({category:value}),
    setTitle: (value) => set({title:value}),
    setDesc:(value) => set({desc:value}),
    eCategory: "",
    eTitle:"",
    eDesc:"",
    setECategory: (value) => set({eCategory:value}),
    setETitle: (value) => set({eTitle:value}),
    setEDesc:(value) => set({eDesc:value}),
}))