import Axios from "axios"
import { ProfileType } from "../Types/Types";


const istance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
       'API-KEY' : '797a5b5f-0c0c-46e7-87e8-047f08700223'
   }
});


export const userAPI = {
    getUsers(currentPage = 1,pageSize = 15){
        return istance.get(`users?page=${currentPage}&count=${pageSize}`).then(data=> {
            return data.data
         })
     },
     follow(id: number){
        return istance.post(`follow/${id}`)
     },
     unfollow(id: number){
        return istance.delete(`follow/${id}`)
     },
     getProfile(userId: number){
         console.log("Use old object")
        return profileAPI.getProfile(userId)
     }
}

export const profileAPI = {
     getProfile(userId: number){
        return istance.get(`profile/${userId}`)
     },
     getStatus(userId: number){
        return istance.get(`profile/status/${userId}`)
     },
     updateStatus(status: string | null){
        return istance.put(`profile/status`, {
            status: status
        })
     },
     savePhoto(photoFile:any){ 
        let formData = new FormData()
        formData.append('image', photoFile)
        return istance.put(`profile/photo`, formData, {
            headers : {
               'Content-Type': 'multipart/form-data'
            }
        })
     },
     saveProfile(profile: ProfileType){
      return istance.put(`profile`, profile)
     }

}




type authAPIMe = {
   data: {id:number, email:string, login:string},
   resultCode: number,
   messages: Array<string>
}
type authAPILogin = {
   data: {userId:number}
   resultCode: number,
   messages: Array<string>
}

export const authAPI = {
    me(){
        return istance.get<authAPIMe>(`auth/me`,)
    },
    login(email: string,password: string,rememberMe = false,captcha: null | string = null){
       return istance.post<authAPILogin>(`auth/login`, { email, password, rememberMe,captcha})
    },
    logout(){
      return istance.delete(`auth/login`)
    }
}



export const securityAPI = {
    getCaptchaURL(){
        return istance.get(`security/get-captcha-url`,)
    },
}

