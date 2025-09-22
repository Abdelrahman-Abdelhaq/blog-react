import { create } from "zustand";
import { addNewUser } from "../API/API";

export const signupStore = create((set,get) => ({
    isPass:"password",
    setIsPass: (value) => set({isPass:value}),
    sUName:"",
    setSUName: (value) => set({sUName: value}),
    sUMail: "",
    setSUMail: (value) => set({sUMail:value}),
    sUPass:"",
    setSUPass: (value) => set({sUPass:value}),
    status: null,
    setStatus: (value) => set({status:value}),
    addUser: async(name,mail,pass) => {
        const data = await addNewUser(name,mail,pass)
        set({status: data})
    }
}))