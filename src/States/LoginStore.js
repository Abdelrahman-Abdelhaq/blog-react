import { create } from "zustand";
import { userLoginRequest } from "../API/API";

export const loginStore = create((set,get) => ({
    isLogged: null,
    setIsLogged: (value) => set({isLogged:value}),
    isPass:'password',
    setIsPass:(value) => set({isPass:value}),
    lEmail:'',
    setLEmail: (value) => set({lEmail:value}),
    lPassword:'',
    setLPassword:(value) => set({lPassword:value}),
    userLoginAPI: async(mail,pass) => {
        const data = await userLoginRequest(mail,pass)
        if(data === 200 ){
            set({isLogged: true})
        }else{
            set({isLogged:false})
        }
    }
}))