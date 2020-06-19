import { istance, ResponseType } from "./Api"



type authAPIMeData = {
    id:number, email:string, login:string
 }
 
 type authAPILoginData = {
   userId:number
 }
 

export const authAPI = {
    me(){
        return istance.get<ResponseType<authAPIMeData>>(`auth/me`,)
    },
    login(email: string,password: string,rememberMe = false,captcha: null | string = null){
       return istance.post<ResponseType<authAPILoginData>>(`auth/login`, { email, password, rememberMe,captcha})
    },
    logout(){
      return istance.delete(`auth/login`)
    }
}
