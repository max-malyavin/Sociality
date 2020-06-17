import Axios from "axios"


const istance = Axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
       'API-KEY' : '3fed3f81-54b2-437c-ab96-0f82f27b284f'
   }
});



export const userAPI = {
    getUsers(currentPage = 1,pageSize = 15){
        return istance.get(`users?page=${currentPage}&count=${pageSize}`).then(data=> {
            return data.data
         })
     },
     follow(id){
        return istance.post(`follow/${id}`)
     },
     unfollow(id){
        return istance.delete(`follow/${id}`)
     },
     getProfile(userId){
         console.log("Use old object")
        return profileAPI.getProfile(userId)
     }
}

export const profileAPI = {
     getProfile(userId){
        return istance.get(`profile/${userId}`)
     },
     getStatus(userId){
        return istance.get(`profile/status/${userId}`)
     },
     updateStatus(status){
        return istance.put(`profile/status`, {
            status: status
        })
     },
     savePhoto(photoFile){ 
        let formData = new FormData()
        formData.append('image', photoFile)
        return istance.put(`profile/photo`, formData, {
            headers : {
               'Content-Type': 'multipart/form-data'
            }
        })
     },
     saveProfile(profile){
      return istance.put(`profile`, profile)
     }

}



export const authAPI = {
    me(){
        return istance.get(`auth/me`,)
    },
    login(email,password,rememberMe = false,captcha = null){
       return istance.post(`auth/login`, { email, password, rememberMe,captcha})
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

