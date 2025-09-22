import { create } from "zustand";

export const loginStore = create((set,get) => ({
    isPass:'password',
    setIsPass:(value) => set({isPass:value}),
    lEmail:'',
    setLEmail: (value) => set({lEmail:value}),
    lPassword:'',
    setLPassword:(value) => set({lPassword:value}),
    
}))