import { create } from "zustand";
import { userLoginRequest } from "../API/API";

export const loginStore = create((set,get) => ({
    isEF:null,
    setEF:(value) => set({isEF:value}),
    isPF:null,
    setPF:(value) => set({isPF:value}),
    isEmailErr:null,
    isPassErr:null,
    setIsEErr: (value) => set({isEmailErr:value}),
    setIsPErr: (value) => set({isPassErr:value}),
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
        if(data.status === 200 ){
            set({isLogged: true})
        }
        else if(data.status === 401){
            set({isPassErr: "UnAuthorized Access!"})
        }
        else if(data.status === 500){
            set({isEmailErr: "Email is not Registred, Please Create New Account!"})
        }
    },
}))